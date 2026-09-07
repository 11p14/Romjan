import React from 'react';
import { ShieldCheck, Flame, Volume2, VolumeX, Bell, Wifi, WifiOff, Award, Lock } from 'lucide-react';
import { UserProgress } from '../types';
import { soundEffects } from '../utils/security';

interface HeaderProps {
  user: UserProgress;
  soundEnabled: boolean;
  onToggleSound: () => void;
  isOnline: boolean;
  unreadCount: number;
  onOpenNotifications: () => void;
  onOpenProfile: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  soundEnabled,
  onToggleSound,
  isOnline,
  unreadCount,
  onOpenNotifications,
  onOpenProfile
}) => {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md px-3 sm:px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Left: App Logo & Security Badge */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-500 shadow-lg shadow-emerald-500/20 text-white font-bold text-lg">
            <Lock className="w-5 h-5" />
            <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-base sm:text-lg tracking-tight text-white flex items-center gap-1.5">
                GrammarVault
              </h1>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                <ShieldCheck className="w-3 h-3" /> DRM সুরক্ষিত
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden xs:block">
              Md Romjan Ali-র সম্পূর্ণ গ্রামার শীট ও পরীক্ষা
            </p>
          </div>
        </div>

        {/* Right: Gamification Stats & Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Online / Offline status */}
          <div 
            title={isOnline ? 'অনলাইন মোড' : 'অফলাইন মোড: সমস্ত ডেটা ও কুইজ সংরক্ষিত'} 
            className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium border ${
              isOnline 
                ? 'bg-emerald-950/50 text-emerald-400 border-emerald-800/50' 
                : 'bg-amber-950/50 text-amber-400 border-amber-800/50'
            }`}
          >
            {isOnline ? <Wifi className="w-3.5 h-3.5" /> : <WifiOff className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{isOnline ? 'অনলাইন' : 'অফলাইন'}</span>
          </div>

          {/* Daily Streak */}
          <div 
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-950/40 text-orange-400 border border-orange-800/40 text-xs font-semibold shadow-xs"
            title={`${user.streakDays} দিনের টানা পড়া ও অনুশীলন`}
          >
            <Flame className="w-4 h-4 text-orange-400 fill-orange-400 animate-pulse" />
            <span>{user.streakDays}d</span>
          </div>

          {/* XP & Level */}
          <button 
            onClick={onOpenProfile}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-950/50 text-indigo-300 hover:bg-indigo-900/60 border border-indigo-800/50 text-xs font-semibold transition-all cursor-pointer"
            title="প্রোফাইল ও পয়েন্ট বিবরণ"
          >
            <Award className="w-4 h-4 text-indigo-400" />
            <span className="text-white font-bold">{user.xp}</span>
            <span className="text-indigo-400 text-[11px]">XP (Lvl {user.level})</span>
          </button>

          {/* Sound Effect Toggle */}
          <button
            onClick={() => {
              onToggleSound();
              soundEffects.playNotification();
            }}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors cursor-pointer"
            title={soundEnabled ? 'সাউন্ড ইফেক্ট অন' : 'সাউন্ড ইফেক্ট মিউট'}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          {/* Notifications Bell */}
          <button
            onClick={onOpenNotifications}
            className="relative p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors cursor-pointer"
            title="কাস্টম নোটিফিকেশন"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center h-4 min-w-4 px-1 rounded-full bg-rose-500 text-[10px] font-bold text-white">
                {unreadCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
