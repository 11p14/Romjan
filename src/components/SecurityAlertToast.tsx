import React from 'react';
import { ShieldAlert, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SecurityAlertToastProps {
  message: string | null;
  onClose: () => void;
}

export const SecurityAlertToast: React.FC<SecurityAlertToastProps> = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="fixed top-16 left-1/2 -translate-x-1/2 z-50 max-w-lg w-[92%] sm:w-auto"
        >
          <div className="flex items-center gap-3 px-4 py-3 bg-rose-950/95 border border-rose-600/60 text-rose-100 rounded-2xl shadow-2xl backdrop-blur-md">
            <div className="p-2 rounded-xl bg-rose-900/60 text-rose-400 shrink-0">
              <ShieldAlert className="w-5 h-5 animate-bounce" />
            </div>
            <div className="text-xs sm:text-sm font-medium leading-snug">
              <span className="font-bold text-rose-300 block">ডিআরএম নিরাপত্তা অ্যাকশন:</span>
              {message}
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-rose-900/80 text-rose-300 transition-colors ml-auto cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
