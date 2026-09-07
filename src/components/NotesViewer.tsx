import React, { useState } from 'react';
import { GRAMMAR_TOPICS, TENSE_MATRIX } from '../data/grammarData';
import { TopicId, GrammarTopic } from '../types';
import { 
  BookOpen, Search, CheckCircle2, ChevronDown, ChevronUp, Sparkles, 
  HelpCircle, Phone, Table, ArrowRight, ShieldCheck, Bookmark
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NotesViewerProps {
  onStartQuizForTopic: (topicId: TopicId) => void;
  onMarkTopicRead: (topicId: TopicId) => void;
  readTopics: TopicId[];
}

export const NotesViewer: React.FC<NotesViewerProps> = ({
  onStartQuizForTopic,
  onMarkTopicRead,
  readTopics
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<TopicId>('affirmative-negative');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedRuleId, setExpandedRuleId] = useState<string | null>(null);
  const [showTenseMatrix, setShowTenseMatrix] = useState(false);

  const currentTopic: GrammarTopic = GRAMMAR_TOPICS.find(t => t.id === selectedTopicId) || GRAMMAR_TOPICS[0];
  const isRead = readTopics.includes(selectedTopicId);

  // Filter rules by search query
  const filteredRules = currentTopic.rules.filter(rule => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchesTitle = rule.title.toLowerCase().includes(q) || rule.ruleNo.toLowerCase().includes(q);
    const matchesStructure = rule.structure?.toLowerCase().includes(q);
    const matchesBengali = rule.bengaliTip?.toLowerCase().includes(q);
    const matchesExamples = rule.examples.some(ex => 
      ex.from.toLowerCase().includes(q) || ex.to.toLowerCase().includes(q)
    );
    return matchesTitle || matchesStructure || matchesBengali || matchesExamples;
  });

  const toggleRule = (id: string) => {
    setExpandedRuleId(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-full space-y-6">
      {/* 1. Top Bar: Topic Selection Pills */}
      <div className="w-full overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-2 min-w-max">
          {GRAMMAR_TOPICS.map((topic) => {
            const isSelected = topic.id === selectedTopicId;
            const topicRead = readTopics.includes(topic.id);
            return (
              <button
                key={topic.id}
                onClick={() => {
                  setSelectedTopicId(topic.id);
                  setSearchQuery('');
                  setExpandedRuleId(null);
                  setShowTenseMatrix(false);
                }}
                className={`relative flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-950 to-slate-900 text-cyan-300 border-cyan-600/70 shadow-md shadow-cyan-950/40'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border-slate-800/80 hover:bg-slate-850'
                }`}
              >
                {topicRead ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : (
                  <BookOpen className="w-4 h-4 text-slate-500 shrink-0" />
                )}
                <span>{topic.titleBn}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                  {topic.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Topic Header & Search Box */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800/90 rounded-2xl p-4 sm:p-6 shadow-xl relative overflow-hidden">
        {/* Decorative corner glow */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-950/90 text-cyan-400 border border-cyan-800/60 font-mono">
                {currentTopic.titleEn}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> সুরক্ষিত শীট
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
              {currentTopic.titleBn}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {currentTopic.description}
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
              <span className="text-slate-300 font-medium">প্রণেতা: {currentTopic.author}</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-cyan-400">
                <Phone className="w-3 h-3" /> {currentTopic.phone}
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0 pt-2 lg:pt-0">
            {selectedTopicId === 'tense' && (
              <button
                onClick={() => setShowTenseMatrix(!showTenseMatrix)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  showTenseMatrix
                    ? 'bg-cyan-600 text-white border-cyan-500 shadow-md'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                }`}
              >
                <Table className="w-4 h-4" />
                <span>১২টি Tense এর সারসংক্ষেপ ছক</span>
              </button>
            )}

            {!isRead ? (
              <button
                onClick={() => onMarkTopicRead(selectedTopicId)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-950/70 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-700/60 transition-all cursor-pointer"
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>পড়া শেষ (+20 XP)</span>
              </button>
            ) : (
              <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium px-2.5 py-1.5 bg-emerald-950/30 rounded-lg border border-emerald-800/40">
                <CheckCircle2 className="w-3.5 h-3.5" /> সম্পন্ন
              </span>
            )}

            <button
              onClick={() => onStartQuizForTopic(selectedTopicId)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white shadow-lg shadow-cyan-950 transition-all cursor-pointer"
            >
              <HelpCircle className="w-4 h-4" />
              <span>কুইজ প্র্যাকটিস</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Search bar inside topic */}
        <div className="mt-4 pt-4 border-t border-slate-800/80">
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`খুঁজুন (যেমন: ${selectedTopicId === 'affirmative-negative' ? 'Only, Must, Every' : selectedTopicId === 'tense' ? 'Past Perfect, Continuous' : 'Rule, Example'})`}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950/70 border border-slate-700/70 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* 3. Tense Matrix Modal/Accordion (if toggled) */}
      <AnimatePresence>
        {showTenseMatrix && selectedTopicId === 'tense' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-slate-900/90 border border-cyan-800/60 rounded-2xl p-4 sm:p-6 shadow-xl"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-base text-cyan-300 flex items-center gap-2">
                <Table className="w-4 h-4" /> এক নজরে ১২টি Tense এর স্ট্রাকচার চার্ট
              </h3>
              <button
                onClick={() => setShowTenseMatrix(false)}
                className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded-md bg-slate-800"
              >
                বন্ধ করুন
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-left border-collapse border border-slate-800">
                <thead>
                  <tr className="bg-slate-950 text-cyan-400">
                    {TENSE_MATRIX.headers.map((h, i) => (
                      <th key={i} className="p-2.5 border border-slate-800 font-bold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TENSE_MATRIX.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-850/50">
                      <td className="p-2.5 border border-slate-800 font-semibold text-slate-300 bg-slate-950/40">{row[0]}</td>
                      <td className="p-2.5 border border-slate-800 text-emerald-300 font-mono text-xs">{row[1]}</td>
                      <td className="p-2.5 border border-slate-800 text-amber-300 font-mono text-xs">{row[2]}</td>
                      <td className="p-2.5 border border-slate-800 text-indigo-300 font-mono text-xs">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Rules List Cards */}
      <div className="space-y-4">
        {filteredRules.length === 0 ? (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800 p-6">
            <Search className="w-8 h-8 text-slate-600 mx-auto mb-2" />
            <p className="text-slate-400 text-sm">কোনো রুল বা উদাহরণ পাওয়া যায়নি। ভিন্ন কীওয়ার্ড দিয়ে অনুসন্ধান করুন।</p>
          </div>
        ) : (
          filteredRules.map((rule) => {
            const isExpanded = expandedRuleId === rule.id || searchQuery.length > 0;
            return (
              <motion.div
                key={rule.id}
                layout
                className="bg-slate-900/70 hover:bg-slate-900/90 border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-lg transition-all"
              >
                {/* Rule Header */}
                <div 
                  onClick={() => toggleRule(rule.id)}
                  className="flex items-start justify-between gap-3 cursor-pointer select-none"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-cyan-950/90 text-cyan-400 font-mono text-xs font-bold border border-cyan-800/60">
                        {rule.ruleNo}
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-white">
                        {rule.title}
                      </h3>
                    </div>
                    {rule.bengaliTip && (
                      <p className="text-xs text-slate-400 line-clamp-1">
                        💡 {rule.bengaliTip}
                      </p>
                    )}
                  </div>
                  <button className="p-1 rounded-lg text-slate-400 hover:text-white bg-slate-800/80 shrink-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-3 border-t border-slate-800/70 space-y-3.5"
                    >
                      {/* Structure / Formula */}
                      {rule.structure && (
                        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3">
                          <span className="text-[11px] uppercase tracking-wider font-bold text-cyan-400 block mb-1 flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> নিয়ম ও গঠন (Structure):
                          </span>
                          <div className="text-xs sm:text-sm text-cyan-100 font-mono whitespace-pre-line leading-relaxed">
                            {rule.structure}
                          </div>
                        </div>
                      )}

                      {/* Bengali Tip */}
                      {rule.bengaliTip && (
                        <div className="bg-amber-950/20 border border-amber-800/30 rounded-xl p-3 text-xs sm:text-sm text-amber-200/90 leading-relaxed">
                          <span className="font-semibold text-amber-400">সহজ নিয়ম টিপস: </span>
                          {rule.bengaliTip}
                        </div>
                      )}

                      {/* Table data (For Narration adverbs, Degree Syllables, etc.) */}
                      {rule.tableData && (
                        <div className="overflow-x-auto rounded-xl border border-slate-800">
                          <table className="w-full text-xs sm:text-sm text-left border-collapse">
                            <thead>
                              <tr className="bg-slate-950 text-cyan-400">
                                {rule.tableData.headers.map((h, i) => (
                                  <th key={i} className="p-2 border border-slate-800 font-bold">{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {rule.tableData.rows.map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-slate-850/50">
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} className="p-2 border border-slate-800 text-slate-300 font-mono text-xs">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Notes / Exceptions */}
                      {rule.notes && rule.notes.length > 0 && (
                        <div className="space-y-1.5 bg-slate-950/40 p-3 rounded-xl border border-slate-800/60">
                          <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider block">
                            গুরুত্বপূর্ণ নোট / ব্যতিক্রম:
                          </span>
                          {rule.notes.map((note, nIdx) => (
                            <p key={nIdx} className="text-xs text-slate-300 leading-relaxed pl-2 border-l-2 border-indigo-500/60">
                              {note}
                            </p>
                          ))}
                        </div>
                      )}

                      {/* Examples */}
                      {rule.examples.length > 0 && (
                        <div className="space-y-2">
                          <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                            উদাহরণসমূহ (Examples from PDF):
                          </span>
                          <div className="grid grid-cols-1 gap-2">
                            {rule.examples.map((ex, exIdx) => (
                              <div
                                key={exIdx}
                                className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-2.5 text-xs sm:text-sm space-y-1"
                              >
                                {ex.label && (
                                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-400 inline-block mb-0.5">
                                    {ex.label}
                                  </span>
                                )}
                                <div className="text-slate-400">
                                  <span className="text-slate-400 font-mono mr-1.5">মূল:</span>
                                  <span className="text-slate-200">{ex.from}</span>
                                </div>
                                <div className="text-emerald-400 font-medium">
                                  <span className="text-emerald-400 font-mono mr-1.5">রূপান্তর:</span>
                                  <span>{ex.to}</span>
                                </div>
                                {ex.alternative && (
                                  <div className="text-cyan-400 text-xs pl-2 border-l border-cyan-700/50">
                                    <span className="text-cyan-400 mr-1.5">অথবা:</span>
                                    <span>{ex.alternative}</span>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        )}
      </div>

      {/* Bottom Footer Notice */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 p-4 rounded-xl bg-slate-900/50 border border-slate-800/60 text-slate-400 text-xs text-center sm:text-left">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>কনটেন্ট সুরক্ষিত ভিউয়ার — সেভ বা কপি অপশন বন্ধ রাখা হয়েছে।</span>
        </div>
        <button
          onClick={() => onStartQuizForTopic(selectedTopicId)}
          className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1 cursor-pointer"
        >
          কুইজে অংশ নিয়ে নিজেকে যাচাই করুন <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
