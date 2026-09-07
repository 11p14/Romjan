import React from 'react';
import { ShieldAlert, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PrivacyShieldProps {
  active: boolean;
  onDismiss: () => void;
}

export const PrivacyShield: React.FC<PrivacyShieldProps> = ({ active, onDismiss }) => {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onDismiss}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex flex-col items-center justify-center p-6 text-center cursor-pointer select-none"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-md w-full bg-slate-900 border border-slate-700/80 rounded-2xl p-6 shadow-2xl flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4 text-amber-400">
              <ShieldAlert className="w-8 h-8 animate-pulse" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-amber-400" />
              কন্টেন্ট সুরক্ষা মোড সক্রিয়
            </h3>

            <p className="text-sm text-slate-300 mb-5 leading-relaxed">
              উইন্ডো ফোকাস হারিয়েছে অথবা স্ক্রিনশট/রেকর্ডিং টুল ডিটেক্ট করা হয়েছে। তথ্যের পূর্ণ সুরক্ষা নিশ্চিত করতে কন্টেন্ট সুরক্ষিত রাখা হয়েছে।
            </p>

            <button
              onClick={onDismiss}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-cyan-950 transition-all cursor-pointer"
            >
              ফোকাস ফিরিয়ে নিন এবং পড়া চালিয়ে যান
            </button>
            <span className="text-[11px] text-slate-400 mt-2">
              ক্লিক করে পর্দায় ফিরে যান
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
