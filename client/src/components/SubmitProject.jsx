import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Upload, Send, FileText, CheckCircle, User, Mail,
  Users, Tag, Lightbulb, Paperclip, X, ChevronRight,
  ChevronLeft, BookOpen, Cpu, Leaf, Banknote, Globe,
  GraduationCap, ArrowUpRight
} from 'lucide-react';

/* ─── Data ───────────────────────────────────── */
const CATEGORIES = [
  { value: 'robotics',    label: 'Robotics & Automation',    icon: Cpu },
  { value: 'climate',     label: 'Climate & Sustainability',  icon: Leaf },
  { value: 'edtech',      label: 'Education Technology',      icon: GraduationCap },
  { value: 'fintech',     label: 'Fintech for Inclusion',     icon: Banknote },
  { value: 'health',      label: 'Health & Biomedical',       icon: BookOpen },
  { value: 'global',      label: 'Global Development',        icon: Globe },
];

const STEPS = ['Your Info', 'Project Details', 'Attachments'];

const BENEFITS = [
  {
    icon: Users,
    title: 'Strategic Mentorship',
    desc: 'Get matched with UNILAG faculty and UNDP-affiliated industry experts who actively guide your project.',
  },
  {
    icon: Cpu,
    title: 'Priority Lab Access',
    desc: 'Approved projects get reserved time on our Robotics Lab, Design Suite, and prototyping equipment.',
  },
  {
    icon: GraduationCap,
    title: 'National Recognition',
    desc: 'Present at UNDP-backed demo days and get official UNILAG certification and project documentation.',
  },
  {
    icon: Globe,
    title: 'Remote Participation',
    desc: 'Submit from anywhere in Nigeria or abroad — full support for researchers and alumni outside Lagos.',
  },
];

/* ─── Sub-components ─────────────────────────── */
const StepIndicator = ({ current, steps }) => (
  <div className="proposal-steps">
    {steps.map((label, i) => (
      <React.Fragment key={i}>
        <div className={`proposal-step ${i === current ? 'active' : ''} ${i < current ? 'done' : ''}`}>
          <div className="proposal-step__dot">
            {i < current ? <CheckCircle size={14} /> : <span>{i + 1}</span>}
          </div>
          <span className="proposal-step__label">{label}</span>
        </div>
        {i < steps.length - 1 && (
          <div className={`proposal-step__line ${i < current ? 'done' : ''}`} />
        )}
      </React.Fragment>
    ))}
  </div>
);

const FormField = ({ label, children, hint }) => (
  <div className="pf-group">
    <label className="pf-label">{label}</label>
    {children}
    {hint && <p className="pf-hint">{hint}</p>}
  </div>
);

/* ─── Step 1: Contact Info ───────────────────── */
const Step1 = ({ data, setData }) => (
  <motion.div
    key="step1"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    className="proposal-step-content"
  >
    <div className="pf-row">
      <FormField label="Full Name">
        <div className="pf-input-wrap">
          <User size={15} className="pf-icon" />
          <input
            required
            type="text"
            className="pf-input pf-input--icon"
            placeholder="Chioma Adebayo"
            value={data.name}
            onChange={e => setData(d => ({ ...d, name: e.target.value }))}
          />
        </div>
      </FormField>
      <FormField label="Email Address">
        <div className="pf-input-wrap">
          <Mail size={15} className="pf-icon" />
          <input
            required
            type="email"
            className="pf-input pf-input--icon"
            placeholder="chioma@unilag.edu.ng"
            value={data.email}
            onChange={e => setData(d => ({ ...d, email: e.target.value }))}
          />
        </div>
      </FormField>
    </div>

    <div className="pf-row">
      <FormField label="Department / Faculty">
        <input
          type="text"
          className="pf-input"
          placeholder="e.g. Dept. of Computer Science"
          value={data.department}
          onChange={e => setData(d => ({ ...d, department: e.target.value }))}
        />
      </FormField>
      <FormField label="Affiliation">
        <select
          className="pf-input pf-select"
          value={data.affiliation}
          onChange={e => setData(d => ({ ...d, affiliation: e.target.value }))}
        >
          <option value="student">Student</option>
          <option value="faculty">Faculty / Lecturer</option>
          <option value="researcher">Researcher</option>
          <option value="alumni">Alumni</option>
          <option value="external">External Collaborator</option>
        </select>
      </FormField>
    </div>

    <FormField label="Team Members" hint="Optional — list co-authors or collaborators separated by commas">
      <div className="pf-input-wrap">
        <Users size={15} className="pf-icon" />
        <input
          type="text"
          className="pf-input pf-input--icon"
          placeholder="e.g. Tunde Balogun, Dr. Ngozi Okafor"
          value={data.teamMembers}
          onChange={e => setData(d => ({ ...d, teamMembers: e.target.value }))}
        />
      </div>
    </FormField>
  </motion.div>
);

/* ─── Step 2: Project Details ────────────────── */
const Step2 = ({ data, setData }) => (
  <motion.div
    key="step2"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="proposal-step-content"
  >
    <FormField label="Project Title">
      <div className="pf-input-wrap">
        <Lightbulb size={15} className="pf-icon" />
        <input
          required
          type="text"
          className="pf-input pf-input--icon"
          placeholder="e.g. SolarEdu — Off-Grid Learning Platform"
          value={data.title}
          onChange={e => setData(d => ({ ...d, title: e.target.value }))}
        />
      </div>
    </FormField>

    <FormField label="Project Category">
      <div className="pf-category-grid">
        {CATEGORIES.map(cat => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.value}
              type="button"
              onClick={() => setData(d => ({ ...d, category: cat.value }))}
              className={`pf-category-btn ${data.category === cat.value ? 'selected' : ''}`}
            >
              <Icon size={16} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </FormField>

    <FormField label="Project Abstract" hint="Describe the problem you're solving, your proposed approach, and expected impact (100–500 words)">
      <textarea
        required
        rows="5"
        className="pf-input pf-textarea"
        placeholder="We aim to solve..."
        value={data.abstract}
        onChange={e => setData(d => ({ ...d, abstract: e.target.value }))}
      />
    </FormField>

    <div className="pf-row">
      <FormField label="Resource Needs" hint="What lab equipment or space will you need?">
        <textarea
          rows="2"
          className="pf-input pf-textarea"
          placeholder="e.g. Robotics Lab × 3 sessions, 3D printer access"
          value={data.resources}
          onChange={e => setData(d => ({ ...d, resources: e.target.value }))}
        />
      </FormField>
      <FormField label="Funding Status">
        <select
          className="pf-input pf-select"
          value={data.funding}
          onChange={e => setData(d => ({ ...d, funding: e.target.value }))}
        >
          <option value="none">No external funding</option>
          <option value="seeking">Actively seeking funding</option>
          <option value="partial">Partially funded</option>
          <option value="full">Fully funded</option>
        </select>
      </FormField>
    </div>
  </motion.div>
);

/* ─── Step 3: Attachments ────────────────────── */
const Step3 = ({ data, setData }) => {
  const fileRef = useRef();
  const [dragging, setDragging] = useState(false);

  const handleFiles = (files) => {
    const valid = Array.from(files).filter(f =>
      ['application/pdf', 'application/vnd.ms-powerpoint',
       'application/vnd.openxmlformats-officedocument.presentationml.presentation',
       'application/msword',
       'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
       'image/png', 'image/jpeg'
      ].includes(f.type) && f.size <= 20 * 1024 * 1024
    );
    setData(d => ({ ...d, files: [...(d.files || []), ...valid] }));
  };

  const removeFile = (index) => {
    setData(d => ({ ...d, files: d.files.filter((_, i) => i !== index) }));
  };

  const formatSize = (bytes) => {
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="proposal-step-content"
    >
      {/* Drop zone */}
      <div
        className={`pf-dropzone ${dragging ? 'dragging' : ''}`}
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={e => { e.preventDefault(); setDragging(false); handleFiles(e.dataTransfer.files); }}
        onClick={() => fileRef.current.click()}
      >
        <input
          ref={fileRef}
          type="file"
          multiple
          accept=".pdf,.ppt,.pptx,.doc,.docx,.png,.jpg,.jpeg"
          style={{ display: 'none' }}
          onChange={e => handleFiles(e.target.files)}
        />
        <div className="pf-dropzone__icon">
          <Upload size={28} />
        </div>
        <p className="pf-dropzone__title">Drop files here or <span>browse</span></p>
        <p className="pf-dropzone__sub">PDF, PPTX, DOCX, PNG, JPG · Max 20 MB per file</p>
      </div>

      {/* File list */}
      {data.files && data.files.length > 0 && (
        <div className="pf-file-list">
          {data.files.map((file, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="pf-file-item"
            >
              <div className="pf-file-item__icon">
                <Paperclip size={14} />
              </div>
              <div className="pf-file-item__info">
                <span className="pf-file-item__name">{file.name}</span>
                <span className="pf-file-item__size">{formatSize(file.size)}</span>
              </div>
              <button
                type="button"
                className="pf-file-item__remove"
                onClick={() => removeFile(i)}
              >
                <X size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      )}

      {/* Additional notes */}
      <FormField
        label="Additional Notes"
        hint="Any other context for the review board — timeline, collaborating institutions, etc."
      >
        <textarea
          rows="3"
          className="pf-input pf-textarea"
          placeholder="Optional notes..."
          value={data.notes}
          onChange={e => setData(d => ({ ...d, notes: e.target.value }))}
        />
      </FormField>
    </motion.div>
  );
};

/* ─── Success Screen ─────────────────────────── */
const SuccessScreen = ({ data, trackingId, onReset }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92 }}
    animate={{ opacity: 1, scale: 1 }}
    className="proposal-success"
  >
    <div className="proposal-success__icon">
      <CheckCircle size={48} />
    </div>
    <h3 className="proposal-success__title">Proposal Submitted!</h3>
    <p className="proposal-success__msg">
      Thank you, <strong>{data.name || 'Innovator'}</strong>. Your project proposal has been received
      by the AI UNIPOD review board.
    </p>

    <div className="proposal-success__id">
      <span>Tracking ID</span>
      <strong>#{trackingId}</strong>
    </div>

    <div className="proposal-success__timeline">
      {[
        { label: 'Submission Received', status: 'done', time: 'Just now' },
        { label: 'Initial Review',      status: 'pending', time: '1–3 business days' },
        { label: 'Board Evaluation',    status: 'pending', time: '3–5 business days' },
        { label: 'Decision & Feedback', status: 'pending', time: 'Within 7 days' },
      ].map((step, i) => (
        <div key={i} className="proposal-timeline-step">
          <div className={`proposal-timeline-dot ${step.status}`} />
          <div className="proposal-timeline-info">
            <span className="proposal-timeline-label">{step.label}</span>
            <span className="proposal-timeline-time">{step.time}</span>
          </div>
        </div>
      ))}
    </div>

    <p className="proposal-success__note">
      A confirmation has been sent to <strong>{data.email}</strong>.
      You can track your proposal status by logging in with your UNILAG ID.
    </p>
    <button className="proposal-success__reset" onClick={onReset}>
      Submit another proposal
    </button>
  </motion.div>
);

/* ─── Main Component ─────────────────────────── */
const SubmitProject = () => {
  const [step, setStep]         = useState(0);
  const [loading, setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');
  const [data, setData] = useState({
    name: '', email: '', department: '', affiliation: 'student',
    teamMembers: '', title: '', category: '', abstract: '',
    resources: '', funding: 'none', files: [], notes: '',
  });

  const handleNext = (e) => {
    e.preventDefault();
    if (step < STEPS.length - 1) setStep(s => s + 1);
  };

  const handleBack = () => setStep(s => s - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTrackingId(`UNIPOD-${new Date().getFullYear()}-${String(Date.now()).slice(-4)}`);
      setSubmitted(true);
    }, 2000);
  };

  const handleReset = () => {
    setStep(0);
    setSubmitted(false);
    setData({
      name: '', email: '', department: '', affiliation: 'student',
      teamMembers: '', title: '', category: '', abstract: '',
      resources: '', funding: 'none', files: [], notes: '',
    });
  };

  return (
    <section id="proposals" className="proposal-section">
      {/* Background decoration */}
      <div className="proposal-bg-deco" aria-hidden="true">
        <div className="proposal-bg-deco__circle proposal-bg-deco__circle--1" />
        <div className="proposal-bg-deco__circle proposal-bg-deco__circle--2" />
      </div>

      <div className="container">
        <div className="proposal-layout">

          {/* ── Left panel ── */}
          <div className="proposal-left">
            <div className="proposal-left__sticky">
              <span className="section-eyebrow">Academic Portal</span>
              <h2 className="section-title proposal-left__title">
                Bring Your <em className="serif italic">Research</em> to Life.
              </h2>
              <p className="proposal-left__desc">
                Submit your innovation proposal from anywhere — whether you're on campus or
                researching remotely from Abuja. AI UNIPOD connects you with the people and
                tools to take your idea further.
              </p>

              {/* Benefits */}
              <ul className="proposal-benefits">
                {BENEFITS.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <motion.li
                      key={i}
                      className="proposal-benefit"
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="proposal-benefit__icon">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="proposal-benefit__title">{b.title}</h4>
                        <p className="proposal-benefit__desc">{b.desc}</p>
                      </div>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Trust badges */}
              <div className="proposal-trust">
                <div className="proposal-trust__badge">
                  <FileText size={13} /> UNDP Affiliated
                </div>
                <div className="proposal-trust__badge">
                  <GraduationCap size={13} /> UNILAG Accredited
                </div>
                <div className="proposal-trust__badge">
                  <Globe size={13} /> Remote-Friendly
                </div>
              </div>
            </div>
          </div>

          {/* ── Right panel: Form ── */}
          <motion.div
            className="proposal-form-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <SuccessScreen
                  key="success"
                  data={data}
                  trackingId={trackingId}
                  onReset={handleReset}
                />
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="proposal-form-header">
                    <h3 className="proposal-form-header__title">Submit a Proposal</h3>
                    <p className="proposal-form-header__sub">
                      Step {step + 1} of {STEPS.length} — {STEPS[step]}
                    </p>
                  </div>

                  <StepIndicator current={step} steps={STEPS} />

                  <form onSubmit={step === STEPS.length - 1 ? handleSubmit : handleNext}>
                    <AnimatePresence mode="wait">
                      {step === 0 && <Step1 key="s1" data={data} setData={setData} />}
                      {step === 1 && <Step2 key="s2" data={data} setData={setData} />}
                      {step === 2 && <Step3 key="s3" data={data} setData={setData} />}
                    </AnimatePresence>

                    <div className="proposal-form-actions">
                      {step > 0 && (
                        <button type="button" className="proposal-btn-back" onClick={handleBack}>
                          <ChevronLeft size={16} /> Back
                        </button>
                      )}
                      <button
                        type="submit"
                        className="proposal-btn-submit"
                        disabled={loading}
                      >
                        {loading
                          ? 'Submitting...'
                          : step === STEPS.length - 1
                          ? <><Send size={16} /> Submit Proposal</>
                          : <>Continue <ChevronRight size={16} /></>
                        }
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubmitProject;
