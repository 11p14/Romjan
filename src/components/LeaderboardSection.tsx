import React, { useState, useEffect } from 'react';
import { LeaderboardEntry, UserProgress } from '../types';
import { getLeaderboard } from '../utils/storage';
import { Trophy, Medal, Crown, Flame, Target, User, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface LeaderboardSectionProps {
  user: UserProgress;
  onStartExam: () => void;
}

export const LeaderboardSection: React.FC<LeaderboardSectionProps> = ({
  user,
  onStartExam
}) => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [filter, setFilter] = useState<'all' | 'top'>('all');

  useEffect(() => {
    setLeaderboard(getLeaderboard());
  }, [user.xp, user.examsCompleted]);

  const topThree = leaderboard.slice(0, 3);
  const remaining = leaderboard.slice(3);

  const currentUserEntry = leaderboard.find(e => e.isCurrentUser || e.studentId === user.studentId);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* 1. Header & Summary Banner */}
      <div className="bg-gradient-to-br from-indigo-950/70 via-slate-900 to-slate-950 border border-indigo-900/60 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-950 text-indigo-300 border border-indigo-700/60">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>লাইভ মেধা তালিকা</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              গ্রামার এক্সিলেন্স লিডারবোর্ড
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
              সঠিক উত্তর ও নিয়মিত মডেল টেস্টের মাধ্যমে পয়েন্ট (XP) অর্জন করুন এবং শীর্ষে জায়গা করে নিন!
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-700/80 p-4 rounded-2xl text-center shrink-0 min-w-36">
            <span className="text-[11px] text-slate-400 block font-medium">আপনার বর্তমান র‍্যাংক</span>
            <div className="text-2xl font-black text-cyan-400 flex items-center justify-center gap-1">
              <span>#{currentUserEntry?.rank || 5}</span>
            </div>
            <span className="text-[11px] text-emerald-400 font-semibold">{user.xp} XP Points</span>
          </div>
        </div>
      </div>

      {/* 2. Top 3 Podium Cards */}
      {topThree.length >= 3 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
          {/* 2nd Place */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="order-2 sm:order-1 bg-slate-900/90 border border-slate-700/70 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center relative shadow-lg"
          >
            <div className="w-10 h-10 rounded-full bg-slate-800 text-slate-300 border border-slate-600 flex items-center justify-center font-bold text-sm mb-3">
              <Medal className="w-5 h-5 text-slate-300" />
            </div>
            <span className="w-5 h-5 rounded-full bg-slate-700 text-[10px] font-bold text-slate-200 flex items-center justify-center absolute top-3 right-3">
              #2
            </span>
            <h4 className="font-bold text-sm text-white">{topThree[1].name}</h4>
            <span className="text-[10px] font-mono text-slate-400 mb-2">{topThree[1].studentId}</span>
            <div className="mt-auto pt-2 w-full border-t border-slate-800 flex justify-around text-xs">
              <div>
                <span className="text-slate-400 text-[10px] block">পয়েন্ট</span>
                <span className="font-bold text-slate-200">{topThree[1].xp} XP</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">নির্ভুলতা</span>
                <span className="font-bold text-emerald-400">{topThree[1].accuracy}%</span>
              </div>
            </div>
          </motion.div>

          {/* 1st Place (Gold Champion) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="order-1 sm:order-2 bg-gradient-to-b from-amber-950/40 via-slate-900 to-slate-900 border-2 border-amber-500/60 rounded-3xl p-5 sm:p-6 flex flex-col items-center text-center relative shadow-2xl shadow-amber-950/30 -mt-2 sm:-mt-3"
          >
            <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/50 flex items-center justify-center font-bold text-lg mb-2">
              <Crown className="w-7 h-7 text-amber-400 animate-pulse" />
            </div>
            <span className="px-2 py-0.5 rounded-full bg-amber-500 text-[11px] font-black text-slate-950 absolute top-3 right-3 shadow-md">
              #1 চ্যাম্পিয়ন
            </span>
            <h4 className="font-extrabold text-base text-white mt-1">{topThree[0].name}</h4>
            <span className="text-[10px] font-mono text-amber-300 mb-2">{topThree[0].studentId}</span>
            <div className="mt-auto pt-2.5 w-full border-t border-amber-900/40 flex justify-around text-xs">
              <div>
                <span className="text-slate-400 text-[10px] block">মোট XP</span>
                <span className="font-black text-amber-400 text-sm">{topThree[0].xp}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">পরীক্ষা পাস</span>
                <span className="font-bold text-emerald-400">{topThree[0].examsPassed} টি</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">নির্ভুলতা</span>
                <span className="font-bold text-cyan-400">{topThree[0].accuracy}%</span>
              </div>
            </div>
          </motion.div>

          {/* 3rd Place */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="order-3 bg-slate-900/90 border border-amber-900/50 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center relative shadow-lg"
          >
            <div className="w-10 h-10 rounded-full bg-amber-900/30 text-amber-600 border border-amber-700/50 flex items-center justify-center font-bold text-sm mb-3">
              <Medal className="w-5 h-5 text-amber-600" />
            </div>
            <span className="w-5 h-5 rounded-full bg-amber-950 text-[10px] font-bold text-amber-400 border border-amber-800 flex items-center justify-center absolute top-3 right-3">
              #3
            </span>
            <h4 className="font-bold text-sm text-white">{topThree[2].name}</h4>
            <span className="text-[10px] font-mono text-slate-400 mb-2">{topThree[2].studentId}</span>
            <div className="mt-auto pt-2 w-full border-t border-slate-800 flex justify-around text-xs">
              <div>
                <span className="text-slate-400 text-[10px] block">পয়েন্ট</span>
                <span className="font-bold text-slate-200">{topThree[2].xp} XP</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">নির্ভুলতা</span>
                <span className="font-bold text-emerald-400">{topThree[2].accuracy}%</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* 3. Full Ranking Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            সকল শিক্ষার্থীদের তালিকা
          </h3>
          <span className="text-xs text-slate-400">র‍্যাংক পয়েন্ট অনুযায়ী নির্ধারিত</span>
        </div>

        <div className="divide-y divide-slate-800/80">
          {leaderboard.map((entry) => {
            const isMe = entry.isCurrentUser || entry.studentId === user.studentId;
            return (
              <div
                key={entry.id}
                className={`py-3 px-3 sm:px-4 rounded-xl flex items-center justify-between gap-3 transition-colors ${
                  isMe 
                    ? 'bg-cyan-950/60 border border-cyan-700/60 text-cyan-100 shadow-md' 
                    : 'hover:bg-slate-850/50 text-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    entry.rank === 1 ? 'bg-amber-500 text-slate-950 font-black' :
                    entry.rank === 2 ? 'bg-slate-400 text-slate-950' :
                    entry.rank === 3 ? 'bg-amber-700 text-white' :
                    'bg-slate-800 text-slate-400'
                  }`}>
                    {entry.rank}
                  </span>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-xs sm:text-sm text-white">
                        {entry.name}
                      </span>
                      {isMe && (
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-500 text-slate-950 font-bold">
                          YOU
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 block">
                      {entry.studentId}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-right">
                  <div>
                    <span className="text-xs font-bold text-cyan-300 block">
                      {entry.xp} XP
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {entry.examsPassed} টি টেস্ট
                    </span>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-xs font-semibold text-emerald-400 block">
                      {entry.accuracy}%
                    </span>
                    <span className="text-[10px] text-slate-500">নির্ভুলতা</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            পরীক্ষা দিয়ে বেশি পয়েন্ট পেয়ে র‍্যাংক উন্নত করতে চান?
          </p>
          <button
            onClick={onStartExam}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold text-xs shadow-lg cursor-pointer"
          >
            এখনই মডেল টেস্ট দিন
          </button>
        </div>
      </div>
    </div>
  );
};
