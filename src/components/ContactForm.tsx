import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  ChevronRight, 
  MessageSquare,
  Clock,
  Target,
  Wallet,
  Mail,
  Phone
} from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'qualify' | 'confirm';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [step, setStep] = useState<Step>('qualify');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    projectType: '',
    goal: '',
    budget: '',
    timeline: '',
    email: '',
    phone: ''
  });

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.projectType) {
      setError("Please select a project type.");
      return;
    }
    
    setIsSubmitting(true);
    setError(null);

    const path = 'submissions';
    try {
      await addDoc(collection(db, path), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setStep('confirm');
    } catch (err) {
      console.error("Submission error:", err);
      setError("There was an error submitting your request. Please try again.");
      // We don't call handleFirestoreError here because we want to handle it gracefully in the UI
      // but we log it for debugging.
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [step]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-bg/80 backdrop-blur-xl"
      />

      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl bg-brand-bg border border-white/10 rounded-3xl md:rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 md:px-8 py-5 md:py-6 border-b border-white/5 shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
              {step === 'qualify' && <Target className="w-5 h-5 text-brand-primary" />}
              {step === 'confirm' && <CheckCircle2 className="w-5 h-5 text-brand-primary" />}
            </div>
            <div>
              <h3 className="text-base md:text-lg font-display font-bold text-white">
                {step === 'qualify' && "Project Details"}
                {step === 'confirm' && "Request Received"}
              </h3>
              <p className="text-[10px] text-white/40 font-medium uppercase tracking-widest">
                {step === 'confirm' && "Next Steps & Preparation"}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-white/60" />
          </button>
        </div>

        {/* Content */}
        <div 
          ref={scrollContainerRef}
          className="px-6 md:px-8 pt-4 pb-8 overflow-y-auto custom-scrollbar flex-grow"
        >
          <AnimatePresence mode="wait">
            {step === 'qualify' && (
              <motion.form 
                key="qualify"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleNext}
                className="space-y-6 md:space-y-8 pt-4"
              >
                {/* Project Type */}
                <div className="space-y-4">
                  <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-primary">
                    <Target className="w-3 h-3" /> What are we building?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Interactive Showcase',
                      'Training Simulation',
                      'AI Sandbox',
                      'R&D Prototype',
                      'Arch Viz'
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`p-4 rounded-2xl border text-left transition-all duration-300 min-h-[56px] ${
                          formData.projectType === type 
                            ? 'bg-brand-primary/10 border-brand-primary text-white' 
                            : 'bg-white/[0.02] border-white/10 text-white/60 hover:border-white/20'
                        }`}
                      >
                        <span className="text-sm font-medium">{type}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Goal */}
                <div className="space-y-4">
                  <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-primary">
                    <MessageSquare className="w-3 h-3" /> Primary Goal or Problem
                  </label>
                  <textarea 
                    required
                    placeholder="Briefly describe what you want to achieve..."
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-white text-base placeholder:text-white/20 focus:outline-none focus:border-brand-primary/50 min-h-[120px] resize-none transition-all"
                  />
                </div>

                {/* Budget & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-primary">
                      <Wallet className="w-3 h-3" /> Budget Range
                    </label>
                    <select 
                      required
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-white text-base focus:outline-none focus:border-brand-primary/50 appearance-none cursor-pointer min-h-[56px]"
                    >
                      <option value="" className="bg-brand-bg">Select range</option>
                      <option value="<50k" className="bg-brand-bg">&lt; 50K INR</option>
                      <option value="50k-1l" className="bg-brand-bg">50K - 1 Lakh INR</option>
                      <option value="1l-3l" className="bg-brand-bg">1 - 3 Lakh INR</option>
                      <option value="3l-5l" className="bg-brand-bg">3 - 5 Lakh INR</option>
                      <option value=">5l" className="bg-brand-bg">&gt; 5 Lakh INR</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-primary">
                      <Clock className="w-3 h-3" /> Timeline
                    </label>
                    <select 
                      required
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-white text-base focus:outline-none focus:border-brand-primary/50 appearance-none cursor-pointer min-h-[56px]"
                    >
                      <option value="" className="bg-brand-bg">Select timeline</option>
                      <option value="urgent" className="bg-brand-bg">Urgent (&lt; 1 month)</option>
                      <option value="standard" className="bg-brand-bg">1 – 3 months</option>
                      <option value="flexible" className="bg-brand-bg">3+ months</option>
                    </select>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-primary">
                      <Mail className="w-3 h-3" /> Business Email
                    </label>
                    <input 
                      required
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-white text-base placeholder:text-white/20 focus:outline-none focus:border-brand-primary/50 transition-all min-h-[56px]"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-primary">
                      <Phone className="w-3 h-3" /> Phone (Optional)
                    </label>
                    <input 
                      type="tel"
                      placeholder="+91 00000-00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-white text-base placeholder:text-white/20 focus:outline-none focus:border-brand-primary/50 transition-all min-h-[56px]"
                    />
                  </div>
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-medium">
                    {error}
                  </div>
                )}

                <div className="space-y-4 pt-2">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full group flex items-center justify-center gap-4 p-5 rounded-2xl font-bold uppercase text-[11px] tracking-[0.2em] transition-all duration-500 shadow-2xl shadow-white/5 min-h-[64px] ${
                      isSubmitting 
                        ? 'bg-white/20 text-black/50 cursor-not-allowed' 
                        : 'bg-white text-black hover:bg-brand-primary hover:text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        Submitting...
                      </div>
                    ) : (
                      <>
                        Get My Project Plan
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
                    Response within 24 hours
                  </p>
                </div>
              </motion.form>
            )}

            {step === 'confirm' && (
              <motion.div 
                key="confirm"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 pt-0 pb-8"
              >
                <div className="space-y-2">
                  <div className="flex flex-col items-center justify-center gap-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-brand-primary" />
                    </div>
                    <h4 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                      Request Received.
                    </h4>
                  </div>
                  <p className="text-lg text-white/50 max-w-md mx-auto leading-relaxed">
                    I’ve got your details. I’ll review your project and come back with a clear, actionable direction within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 max-w-md mx-auto text-left">
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                    <h5 className="text-xs font-bold uppercase tracking-widest text-brand-primary">What happens next</h5>
                    <ul className="space-y-2">
                      {[
                        'Break down your use case and requirements',
                        'Clear approach and execution plan',
                        'Next steps tailored to your project'
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                          <ChevronRight className="w-3 h-3 text-brand-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest pt-2 font-bold">
                      Typical response time: under 24 hours
                    </p>
                  </div>
                </div>

                <div className="pt-0 flex flex-col gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-white/50 font-medium">Want to move faster?</p>
                    <a 
                      href="https://calendly.com/a-asankhala/30min" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/btn relative flex items-center justify-center gap-4 px-8 py-5 bg-brand-primary text-white rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 shadow-2xl shadow-brand-primary/20 w-full max-w-sm mx-auto"
                    >
                      <span>👉 Book a quick call →</span>
                    </a>
                  </div>

                  <button 
                    onClick={onClose}
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors"
                  >
                    Return to Site
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
