import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Inbox, CheckCircle, XCircle, Clock, Search, Filter } from 'lucide-react';

const AdminPortal = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, pending, approved

  const fetchSubmissions = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/proposals');
      const data = await res.json();
      setSubmissions(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`http://localhost:5000/api/proposals/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        setSubmissions(subs => subs.map(s => s.id === id ? { ...s, status } : s));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = submissions.filter(s => filter === 'all' || s.status === filter);

  return (
    <div className="admin-portal">
      <div className="admin-header">
        <div className="container">
          <div className="admin-header__inner">
            <div>
              <span className="section-eyebrow" style={{ color: 'white' }}>Faculty Portal</span>
              <h1 style={{ color: 'white', marginTop: '0.5rem', fontSize: '2rem' }}>Administration Dashboard</h1>
            </div>
            <div className="admin-user">
              <div className="admin-avatar">AO</div>
              <div>
                <strong style={{ display: 'block', color: 'white', fontSize: '0.9rem' }}>Prof. Amaka Okonkwo</strong>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>Coordinator, AI UNIPOD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container admin-content">
        <div className="admin-toolbar">
          <div className="admin-search">
            <Search size={16} className="admin-search__icon" />
            <input type="text" placeholder="Search by ID or name..." className="admin-search__input" />
          </div>
          <div className="admin-filters">
            <Filter size={14} style={{ color: 'var(--text-muted)' }} />
            <button className={`admin-filter ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
            <button className={`admin-filter ${filter === 'pending' ? 'active' : ''}`} onClick={() => setFilter('pending')}>Pending</button>
            <button className={`admin-filter ${filter === 'approved' ? 'active' : ''}`} onClick={() => setFilter('approved')}>Approved</button>
          </div>
        </div>

        {loading ? (
          <div className="admin-loading">Loading submissions...</div>
        ) : (
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Type</th>
                  <th>Applicant / Detail</th>
                  <th>Date Submitted</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(sub => (
                  <motion.tr key={sub.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <td className="admin-cell-id">{sub.id}</td>
                    <td>
                      <span className={`admin-badge admin-badge--${sub.type}`}>
                        {sub.type === 'booking' ? 'Booking' : 'Proposal'}
                      </span>
                    </td>
                    <td>
                      <strong>{sub.name}</strong>
                      <div className="admin-subtext">
                        {sub.type === 'proposal' ? sub.title : `${sub.facilityName} - ${sub.date} at ${sub.time}`}
                      </div>
                    </td>
                    <td className="admin-subtext">
                      {new Date(sub.submittedAt || sub.date || Date.now()).toLocaleDateString()}
                    </td>
                    <td>
                      <span className={`admin-status admin-status--${sub.status}`}>
                        {sub.status}
                      </span>
                    </td>
                    <td>
                      {sub.status === 'pending' ? (
                        <div className="admin-actions">
                          <button className="admin-action-btn approve" onClick={() => updateStatus(sub.id, 'approved')}>
                            <CheckCircle size={15} /> Approve
                          </button>
                          <button className="admin-action-btn reject" onClick={() => updateStatus(sub.id, 'rejected')}>
                            <XCircle size={15} /> Reject
                          </button>
                        </div>
                      ) : (
                        <span className="admin-action-done">
                          <CheckCircle size={14} /> Completed
                        </span>
                      )}
                    </td>
                  </motion.tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan="6" className="admin-empty">
                      <Inbox size={32} />
                      <p>No submissions found.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPortal;
