import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

interface SecurityWatermarkProps {
  email: string;
  studentId: string;
}

export const SecurityWatermark: React.FC<SecurityWatermarkProps> = ({ email, studentId }) => {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const watermarkText = `${email} • ${studentId} • DRM PROTECTED • ${timeString}`;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Diagonal repeating watermark grid */}
      <div className="absolute inset-0 opacity-[0.035] flex flex-wrap content-around justify-around -rotate-12 scale-125">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className="text-xs font-mono font-bold tracking-widest text-slate-300 whitespace-nowrap p-8">
            {watermarkText}
          </div>
        ))}
      </div>

      {/* 2. Floating dynamic trace badge (moves slowly to discourage photo cropping) */}
      <motion.div
        animate={{
          x: ['2%', '75%', '30%', '80%', '5%'],
          y: ['5%', '25%', '85%', '50%', '10%'],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-0 left-0 opacity-20 hover:opacity-0 transition-opacity bg-slate-900/60 backdrop-blur-xs px-2.5 py-1 rounded-full border border-slate-700/50 flex items-center gap-1.5 shadow-sm"
      >
        <Shield className="w-3 h-3 text-cyan-400" />
        <span className="text-[10px] font-mono text-cyan-200 tracking-wider">
          {studentId} • {email.split('@')[0]}
        </span>
      </motion.div>
    </div>
  );
};
