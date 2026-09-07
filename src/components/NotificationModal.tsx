import React, { useState } from 'react';
import { AppNotification } from '../types';
import { Bell, ShieldAlert, Sparkles, Timer, CheckCheck, X, Plus } from 'lucide-react';
import { soundEffects } from '../utils/security';
import { motion, AnimatePresence } from 'motion/react';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: AppNotification[];
  onMarkAllAsRead: () => void;
  onAddCustomNotification: (title: string, message: string, type: 'security' | 'reward' | 'exam' | 'tip') => void;
}

export const NotificationModal: React.FC<NotificationModalProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkAllAsRead,
  onAddCustomNotification
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [customTitle, setCustomTitle] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [customType, setCustomType] = useState<'tip' | 'exam' | 'reward'>('tip');

  if (!isOpen) return null;

  const handleCreateNotification = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTitle.trim() || !customMessage.trim()) return;
    onAddCustomNotification(customTitle.trim(), customMessage.trim(), customType);
    soundEffects.playNotification();
    setCustomTitle('');
    setCustomMessage('');
    setShowAddForm(false);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'security':
        return <ShieldAlert className="w-4 h-4 text-rose-400" />;
      case 'exam':
        return <Timer className="w-4 h-4 text-cyan-400" />;
      case 'reward':
        return <Sparkles className="w-4 h-4 text-amber-400" />;
      default:
        return <Bell className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4 max-h-[85vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-cyan-400" />
            <h3 className="font-bold text-base text-white">নোটিফিকেশন সেন্টার</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onMarkAllAsRead}
              className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 cursor-pointer"
            >
              <CheckCheck className="w-3.5 h-3.5" /> পড়া হয়েছে
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white bg-slate-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Custom Notification Trigger */}
        <div className="bg-slate-950/70 border border-slate-800/80 p-3 rounded-2xl">
          {!showAddForm ? (
            <button
              onClick={() => setShowAddForm(true)}
              className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4 text-cyan-400" />
              <span>নিজের জন্য কাস্টম স্টাডি রিমাইন্ডার / নোটিফিকেশন যুক্ত করুন</span>
            </button>
          ) : (
            <form onSubmit={handleCreateNotification} className="space-y-2.5">
              <div className="flex items-center justify-between text-xs text-slate-300 font-bold">
                <span>নতুন কাস্টম নোটিফিকেশন তৈরি:</span>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="text-slate-400 hover:text-slate-200"
                >
                  বাতিল
                </button>
              </div>
              <input
                type="text"
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                placeholder="শিরোনাম (যেমন: Narration রিভিশন করো)"
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
                required
              />
              <textarea
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="বার্তা (যেমন: রাত ৯টায় মডেল টেস্ট দেব)"
                rows={2}
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white resize-none"
                required
              />
              <div className="flex items-center justify-between gap-2">
                <select
                  value={customType}
                  onChange={(e) => setCustomType(e.target.value as 'tip' | 'exam' | 'reward')}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-300"
                >
                  <option value="tip">💡 পড়ার টিপস</option>
                  <option value="exam">⏱️ পরীক্ষার রিমাইন্ডার</option>
                  <option value="reward">🏆 লক্ষ্য ও রিওয়ার্ড</option>
                </select>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs"
                >
                  সেভ ও নোটিফাই
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Notifications List */}
        <div className="overflow-y-auto space-y-2.5 flex-1 pr-1">
          {notifications.length === 0 ? (
            <div className="text-center py-8 text-slate-500 text-xs">
              কোনো নোটিফিকেশন নেই।
            </div>
          ) : (
            notifications.map((n) => (
              <div
                key={n.id}
                className={`p-3.5 rounded-2xl border transition-all ${
                  n.read
                    ? 'bg-slate-950/40 border-slate-800/60 text-slate-400'
                    : 'bg-slate-950/90 border-slate-700/80 text-slate-200 shadow-md'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                    {getIcon(n.type)}
                  </div>
                  <div className="space-y-0.5 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className={`text-xs sm:text-sm font-bold ${n.read ? 'text-slate-300' : 'text-white'}`}>
                        {n.title}
                      </h4>
                      <span className="text-[10px] text-slate-500">{n.timestamp}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {n.message}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
};
