import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Send, FileText, CheckCircle } from 'lucide-react';

const SubmitProject = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <section id="proposals" className="section-padding bg-[var(--bg-warm)] flex items-center justify-center min-h-[600px]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6 max-w-md p-10 bg-white rounded-3xl shadow-xl border border-[var(--unilag-gold)]/20"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl serif">Proposal Received</h2>
          <p className="text-[var(--text-secondary)]">
            Submission ID: <span className="font-bold">#UNIPOD-2026-0042</span>. 
            Dr. Olumide and the review board will contact you within 5 business days.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-[var(--unilag-maroon)] font-bold underline"
          >
            Submit another proposal
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="proposals" className="section-padding bg-[var(--bg-warm)]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <span className="serif italic text-[var(--unilag-maroon)] text-xl block mb-4">Academic Portal</span>
            <h2 className="text-5xl md:text-6xl text-[var(--text-primary)] mb-8">Bring Your <span className="serif italic">Research</span> to Life.</h2>
            <p className="text-[var(--text-secondary)] text-lg mb-10 leading-relaxed">
              We welcome proposals from students and faculty across all disciplines. Whether it's sustainable energy, ed-tech, or robotics, AI UNIPOD provides the mentorship and equipment you need.
            </p>

            <ul className="space-y-6">
              {[
                { title: "Strategic Mentorship", desc: "Get paired with industry experts and UNILAG faculty." },
                { title: "Resource Allocation", desc: "Priority access to labs and prototyping equipment." },
                { title: "National Recognition", desc: "Showcase your work at UNDP-backed demo days." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex-shrink-0 flex items-center justify-center text-[var(--unilag-maroon)]">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-2xl border border-[var(--border-light)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">Full Name</label>
                  <input required type="text" className="w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[var(--unilag-maroon)] transition-all outline-none" placeholder="Chioma Adebayo" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">Email Address</label>
                  <input required type="email" className="w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[var(--unilag-maroon)] transition-all outline-none" placeholder="chioma@unilag.edu.ng" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">Project Category</label>
                <select className="w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[var(--unilag-maroon)] transition-all outline-none appearance-none">
                  <option>Robotics & Automation</option>
                  <option>Climate & Sustainability</option>
                  <option>Education Technology</option>
                  <option>Fintech for Inclusion</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">Project Abstract</label>
                <textarea required rows="4" className="w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[var(--unilag-maroon)] transition-all outline-none resize-none" placeholder="Describe the problem you're solving and your proposed solution..." />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">Attachments (Pitch Deck / PDF)</label>
                <div className="border-2 border-dashed border-[var(--border-light)] rounded-xl p-8 text-center hover:border-[var(--unilag-maroon)] transition-all cursor-pointer bg-slate-50">
                  <Upload size={32} className="mx-auto mb-2 text-[var(--text-secondary)] opacity-40" />
                  <p className="text-sm font-semibold">Drop files here or click to upload</p>
                  <p className="text-[10px] text-[var(--text-secondary)] mt-1">PDF, PPTX or DOCX (Max 20MB)</p>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[var(--unilag-maroon)] text-white p-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-[var(--unilag-maroon)]/30 hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {loading ? 'Processing...' : <><Send size={20} /> Submit Proposal</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubmitProject;
