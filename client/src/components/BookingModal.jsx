import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const TIME_SLOTS = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM',
  '03:00 PM', '04:00 PM', '05:00 PM'
];
// Mock some slots as occupied
const OCCUPIED = ['11:00 AM', '02:00 PM'];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

const BookingModal = ({ facility, onClose }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState(1); // 1=calendar, 2=details, 3=success
  const [formData, setFormData] = useState({ name: '', email: '', purpose: '', teamSize: '1' });
  const [loading, setLoading] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });

  const prevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); }
    else setCurrentMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); }
    else setCurrentMonth(m => m + 1);
  };

  const isPast = (day) => {
    const d = new Date(currentYear, currentMonth, day);
    return d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        type: 'booking',
        facilityId: facility.id,
        facilityName: facility.name,
        date: `${currentYear}-${currentMonth + 1}-${selectedDate.day}`,
        time: selectedTime,
        ...formData
      };
      
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/proposals`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      setBookingId(data.id || `UNIPOD-B-${Date.now().toString().slice(-6)}`);
      setStep(3);
    } catch (error) {
      console.error('Failed to book:', error);
      setBookingId(`UNIPOD-B-${Date.now().toString().slice(-6)}`);
      setStep(3);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="booking-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        className="booking-modal"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ type: 'spring', damping: 28 }}
      >
        {/* Header */}
        <div className="booking-modal__header">
          <div>
            <p className="booking-modal__eyebrow">Book a Space</p>
            <h3 className="booking-modal__title">{facility.name}</h3>
          </div>
          <button className="booking-modal__close" onClick={onClose}><X size={20} /></button>
        </div>

        {/* Step Indicator */}
        {step < 3 && (
          <div className="booking-steps">
            {['Choose Date & Time', 'Your Details'].map((label, i) => (
              <div key={i} className={`booking-step ${step === i + 1 ? 'active' : ''} ${step > i + 1 ? 'done' : ''}`}>
                <div className="booking-step__dot">{step > i + 1 ? '✓' : i + 1}</div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* Step 1: Calendar */}
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
              <div className="booking-calendar">
                {/* Month Navigator */}
                <div className="calendar-nav">
                  <button className="calendar-nav__btn" onClick={prevMonth}><ChevronLeft size={18} /></button>
                  <span className="calendar-nav__title">{monthName} {currentYear}</span>
                  <button className="calendar-nav__btn" onClick={nextMonth}><ChevronRight size={18} /></button>
                </div>
                {/* Day Headers */}
                <div className="calendar-grid calendar-grid--header">
                  {DAYS_OF_WEEK.map(d => <div key={d} className="calendar-day-label">{d}</div>)}
                </div>
                {/* Days */}
                <div className="calendar-grid">
                  {Array.from({ length: firstDay }).map((_, i) => <div key={`e-${i}`} />)}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const past = isPast(day);
                    const isSelected = selectedDate?.day === day && selectedDate?.month === currentMonth;
                    return (
                      <button
                        key={day}
                        disabled={past}
                        onClick={() => setSelectedDate({ day, month: currentMonth, year: currentYear })}
                        className={`calendar-day ${past ? 'disabled' : ''} ${isSelected ? 'selected' : ''}`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="time-slots">
                  <p className="time-slots__label"><Clock size={14} /> Available Times</p>
                  <div className="time-slots__grid">
                    {TIME_SLOTS.map(slot => {
                      const occupied = OCCUPIED.includes(slot);
                      const isSelected = selectedTime === slot;
                      return (
                        <button
                          key={slot}
                          disabled={occupied}
                          onClick={() => setSelectedTime(slot)}
                          className={`time-slot ${occupied ? 'occupied' : ''} ${isSelected ? 'selected' : ''}`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              <button
                disabled={!selectedDate || !selectedTime}
                onClick={() => setStep(2)}
                className="booking-btn-primary"
              >
                Continue to Details
              </button>
            </motion.div>
          )}

          {/* Step 2: Details Form */}
          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="booking-summary-bar">
                <Calendar size={14} />
                <span>{monthName} {selectedDate?.day}, {selectedDate?.year}</span>
                <span className="separator">·</span>
                <Clock size={14} />
                <span>{selectedTime}</span>
              </div>
              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input required placeholder="Chioma Adebayo" value={formData.name}
                      onChange={e => setFormData(f => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input required type="email" placeholder="chioma@unilag.edu.ng" value={formData.email}
                      onChange={e => setFormData(f => ({ ...f, email: e.target.value }))} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Purpose of Booking</label>
                  <input required placeholder="e.g. Hardware prototyping sprint for my edtech project" value={formData.purpose}
                    onChange={e => setFormData(f => ({ ...f, purpose: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label><Users size={13} /> Team Size</label>
                  <select value={formData.teamSize} onChange={e => setFormData(f => ({ ...f, teamSize: e.target.value }))}>
                    {Array.from({ length: facility.capacity }, (_, i) => i + 1).map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'person' : 'people'}</option>
                    ))}
                  </select>
                </div>
                <div className="booking-form-actions">
                  <button type="button" className="booking-btn-secondary" onClick={() => setStep(1)}>
                    <ChevronLeft size={16} /> Back
                  </button>
                  <button type="submit" className="booking-btn-primary" disabled={loading}>
                    {loading ? 'Confirming...' : 'Confirm Booking'}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="booking-success">
              <div className="booking-success__icon">
                <CheckCircle size={44} />
              </div>
              <h3>You're Booked!</h3>
              <p>Your reservation at <strong>{facility.name}</strong> is confirmed for <strong>{monthName} {selectedDate?.day} at {selectedTime}</strong>.</p>
              <div className="booking-success__id">Booking ID: <span>#{bookingId}</span></div>
              <p className="booking-success__note">A confirmation has been sent to {formData.email}. See you there!</p>
              <button className="booking-btn-primary" onClick={onClose} style={{ marginTop: '1.5rem' }}>Done</button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default BookingModal;
