import React from 'react';
import { BookOpen, HelpCircle, Timer, Trophy, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

export type NavTab = 'notes' | 'quiz' | 'exam' | 'leaderboard' | 'security';

interface NavigationProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  examOngoing?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  onSelectTab,
  examOngoing = false
}) => {
  const tabs: { id: NavTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'notes', label: 'নোটস ও রুলস', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'quiz', label: 'অনুশীলন কুইজ', icon: <HelpCircle className="w-4 h-4" />, badge: 'XP+' },
    { id: 'exam', label: 'মডেল টেস্ট', icon: <Timer className="w-4 h-4" />, badge: examOngoing ? 'লাইভ' : undefined },
    { id: 'leaderboard', label: 'লিডারবোর্ড', icon: <Trophy className="w-4 h-4" /> },
    { id: 'security', label: 'ডিআরএম ভল্ট', icon: <ShieldAlert className="w-4 h-4" /> }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block w-full border-b border-slate-800/60 bg-slate-950/60 sticky top-[61px] z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-start gap-2 py-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-950/40 border border-cyan-700/50 shadow-sm shadow-cyan-950'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold uppercase tracking-wider ${
                    tab.id === 'exam' && examOngoing 
                      ? 'bg-rose-500 text-white animate-pulse' 
                      : 'bg-indigo-900 text-indigo-300'
                  }`}>
                    {tab.badge}
                  </span>
                )}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-2 left-3 right-3 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Bottom Fixed Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 border-t border-slate-800 backdrop-blur-xl px-2 py-1.5 safe-area-pb">
        <div className="flex items-center justify-around">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all cursor-pointer relative ${
                  isActive ? 'text-cyan-400 font-bold' : 'text-slate-400'
                }`}
              >
                <div className="relative">
                  {tab.icon}
                  {tab.badge && (
                    <span className="absolute -top-1.5 -right-2 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  )}
                </div>
                <span className="text-[11px] mt-1 tracking-tight">{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveTab"
                    className="absolute inset-0 bg-cyan-950/30 rounded-xl -z-10 border border-cyan-800/30"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
