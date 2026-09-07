import React, { useState } from 'react';
import { UserProgress } from '../types';
import { 
  ShieldCheck, Lock, EyeOff, Printer, Ban, 
  Save, AlertOctagon, User, Award, Flame, CheckCircle, Edit2
} from 'lucide-react';
import { saveUserProfile } from '../utils/storage';

interface SecuritySectionProps {
  user: UserProgress;
  onUpdateUser: (updated: UserProgress) => void;
}

export const SecuritySection: React.FC<SecuritySectionProps> = ({
  user,
  onUpdateUser
}) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(user.name);

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) return;
    const updated = { ...user, name: nameInput.trim() };
    saveUserProfile(updated);
    onUpdateUser(updated);
    setIsEditingName(false);
  };

  const securityFeatures = [
    {
      title: 'স্ক্রিনশট ও স্ন্যাপিং প্রতিরোধ',
      icon: <EyeOff className="w-5 h-5 text-cyan-400" />,
      desc: 'কিবোর্ড শর্টকাট (PrtScn, Win+Shift+S, Cmd+Shift+3/4) ব্লক করা হয় এবং ক্লিপবোর্ড স্বয়ংক্রিয়ভাবে ওয়াইপ করা হয়।',
      status: 'সক্রিয় ও সুরক্ষিত'
    },
    {
      title: 'কম্পিউটার রাইট বাটন ক্লিক বন্ধ',
      icon: <Ban className="w-5 h-5 text-rose-400" />,
      desc: 'কন্টেন্টের উপর যেকোনো রাইট-ক্লিক অপশন নিষ্ক্রিয় করা আছে, যাতে ছবি বা টেক্সট কপি করা অসম্ভব হয়।',
      status: 'সক্রিয় ও সুরক্ষিত'
    },
    {
      title: 'প্রিন্ট অপশন সম্পূর্ণরূপে ব্লক',
      icon: <Printer className="w-5 h-5 text-amber-400" />,
      desc: 'Ctrl+P ও ব্রাউজার প্রিন্ট ইভেন্ট লক করা। প্রিন্ট কমান্ড দিলে সম্পূর্ণ কালো পর্দা ও ডিআরএম নোটিশ প্রদর্শিত হয়।',
      status: 'সক্রিয় ও সুরক্ষিত'
    },
    {
      title: 'কন্টেন্ট সেভ ও সোর্স ভিউ রোধ',
      icon: <Save className="w-5 h-5 text-indigo-400" />,
      desc: 'Ctrl+S, Ctrl+U এবং ডেভটুলস কিবোর্ড শর্টকাট বন্ধ রাখা হয়েছে। কন্টেন্ট শুধুমাত্র অ্যাপের ভেতরে দেখা যাবে।',
      status: 'সক্রিয় ও সুরক্ষিত'
    },
    {
      title: 'উইন্ডো ফোকাস প্রাইভেসি শিল্ড',
      icon: <AlertOctagon className="w-5 h-5 text-emerald-400" />,
      desc: 'ব্যবহারকারী অন্য অ্যাপ বা স্ক্রিন ক্যাপচার সফ্টওয়্যারে গেলে কন্টেন্ট ব্যাকড্রপ ব্লার দিয়ে ঢেকে ফেলা হয়।',
      status: 'সক্রিয় ও সুরক্ষিত'
    },
    {
      title: 'ডায়নামিক জলছাপ (Watermark)',
      icon: <Lock className="w-5 h-5 text-purple-400" />,
      desc: 'পর্দাজুড়ে ব্যবহারকারীর ইমেইল, স্টুডেন্ট আইডি ও লাইভ টাইমস্ট্যাম্প ভাসমান থাকে, যাতে কোনো ছবি তুললে চিহ্নিত করা যায়।',
      status: 'সক্রিয় ও সুরক্ষিত'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* 1. Student Profile Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-black shadow-lg">
              {user.name.charAt(0)}
            </div>
            <div className="space-y-1">
              {isEditingName ? (
                <form onSubmit={handleSaveName} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 border border-cyan-500 text-white text-sm focus:outline-hidden"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-3 py-1 rounded-lg bg-cyan-600 text-xs font-bold text-white"
                  >
                    সংরক্ষণ
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditingName(false)}
                    className="px-2 py-1 rounded-lg bg-slate-800 text-xs text-slate-400"
                  >
                    বাতিল
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white">{user.name}</h3>
                  <button
                    onClick={() => {
                      setNameInput(user.name);
                      setIsEditingName(true);
                    }}
                    className="p-1 rounded text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
                <span>আইডি: {user.studentId}</span>
                <span>•</span>
                <span>{user.email}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-slate-950/80 border border-slate-800 px-3.5 py-2 rounded-xl text-center">
              <span className="text-[10px] text-slate-400 block font-medium">লেভেল</span>
              <span className="text-base font-bold text-cyan-400">Level {user.level}</span>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 px-3.5 py-2 rounded-xl text-center">
              <span className="text-[10px] text-slate-400 block font-medium">মোট পয়েন্ট</span>
              <span className="text-base font-bold text-emerald-400">{user.xp} XP</span>
            </div>
          </div>
        </div>

        {/* Badges Earned */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2.5">
          <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block">
            অর্জিত মেডেল ও ব্যাজসমূহ:
          </span>
          <div className="flex flex-wrap gap-2">
            {user.badges.map((b, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-950/60 border border-indigo-800/60 text-indigo-200 flex items-center gap-1.5 shadow-xs"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Security System Status */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-300 border border-emerald-800/60 mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>ডিজিটাল রাইটস ম্যানেজমেন্ট (DRM) সার্বক্ষণিক সক্রিয়</span>
          </div>
          <h3 className="text-xl font-black text-white">
            কন্টেন্ট সিকিউরিটি ও কপি সুরক্ষা প্রোটোকল
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
            শিক্ষকের স্বত্বাধিকার ও কন্টেন্টের নিরাপত্তা নিশ্চিত করতে সকল ধরণের কপি, সেভ, প্রিন্ট ও স্ক্রিনশট নিষ্ক্রিয় রাখা হয়েছে।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {securityFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-slate-950/80 border border-slate-800/90 rounded-2xl p-4 space-y-2 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                    {feat.icon}
                  </div>
                  <h4 className="font-bold text-sm text-white">{feat.title}</h4>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/40">
                  {feat.status}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pl-1">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
