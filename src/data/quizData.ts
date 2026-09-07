import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Affirmative to Negative
  {
    id: 'q-an-1',
    topicId: 'affirmative-negative',
    question: 'Affirmative: "Only Allah can help us." – এর সঠিক Negative রূপ কোনটি?',
    options: [
      'Nothing but Allah can help us.',
      'None but Allah can help us.',
      'Not more than Allah can help us.',
      'Can not but Allah help us.'
    ],
    correctIndex: 1,
    explanation: 'Rule – 01 অনুযায়ী: Only ব্যক্তি বা স্রষ্টাকর্তা বুঝালে তার পরিবর্তে "None but" বসে।',
    ruleReference: 'Affirmative to Negative: Rule – 01',
    points: 10
  },
  {
    id: 'q-an-2',
    topicId: 'affirmative-negative',
    question: 'Affirmative: "You must obey your parents." – এর Negative রূপ কোনটি সঠিক?',
    options: [
      'You cannot help to obey your parents.',
      'You can not but obey your parents.',
      'You had not to obey your parents.',
      'You must not obey your parents.'
    ],
    correctIndex: 1,
    explanation: 'Rule – 02 অনুযায়ী: Must এর পরিবর্তে "Can not but + verb1" অথবা "Can not help + verb1+ing" বসে।',
    ruleReference: 'Affirmative to Negative: Rule – 02',
    points: 10
  },
  {
    id: 'q-an-3',
    topicId: 'affirmative-negative',
    question: 'Affirmative: "A child likes only sweets." – এর Negative কী হবে?',
    options: [
      'A child likes none but sweets.',
      'A child likes not more than sweets.',
      'A child likes nothing but sweets.',
      'A child likes never sweets.'
    ],
    correctIndex: 2,
    explanation: 'Rule – 01 অনুযায়ী: Only দ্বারা বস্তু বুঝালে তার পরিবর্তে "nothing but" বসে।',
    ruleReference: 'Affirmative to Negative: Rule – 01',
    points: 10
  },
  {
    id: 'q-an-4',
    topicId: 'affirmative-negative',
    question: 'Affirmative: "Every mother loves her child." – এর সঠিক রূপান্তর নয় কোনটি?',
    options: [
      'There is no mother but loves her child.',
      'There is no mother who does not love her child.',
      'No mother hates her child.',
      'Every mother does not love her child.'
    ],
    correctIndex: 3,
    explanation: 'Rule – 04 অনুযায়ী: Every যুক্ত বাক্যকে ৩টি নিয়মে Negative করা যায় (There is no...but, There is no...who does not, এবং No + antonym)। অপশন ৪ ভুল।',
    ruleReference: 'Affirmative to Negative: Rule – 04',
    points: 10
  },
  {
    id: 'q-an-5',
    topicId: 'affirmative-negative',
    question: 'Affirmative: "He is too weak to go." – এর Negative রূপ কোনটি?',
    options: [
      'He is so weak that he cannot go.',
      'He is very weak that he could not go.',
      'He is not weak to go.',
      'He is so weak but he can go.'
    ],
    correctIndex: 0,
    explanation: 'Rule – 08 অনুযায়ী: Too...to যুক্ত বাক্য Present tense এ থাকলে "so... that + sub + cannot + verb1" বসে।',
    ruleReference: 'Affirmative to Negative: Rule – 08',
    points: 10
  },
  {
    id: 'q-an-6',
    topicId: 'affirmative-negative',
    question: 'Affirmative: "There are many students in the class." – Rule 12 অনুযায়ী এর Negative কী হবে?',
    options: [
      'There are not much students in the class.',
      'There are not a few students in the class.',
      'There are few students in the class.',
      'There are not a little students in the class.'
    ],
    correctIndex: 1,
    explanation: 'Rule – 12 অনুযায়ী: "Many" এর পরিবর্তে "not a few" বসে।',
    ruleReference: 'Affirmative to Negative: Rule – 12',
    points: 10
  },

  // Assertive to Interrogative
  {
    id: 'q-ai-1',
    topicId: 'assertive-interrogative',
    question: 'Assertive: "She is a beautiful girl." – বাক্যটির সঠিক Interrogative রূপ কোনটি?',
    options: [
      'Is she a beautiful girl?',
      "Isn't she a beautiful girl?",
      'Does she a beautiful girl?',
      "Wasn't she a beautiful girl?"
    ],
    correctIndex: 1,
    explanation: 'Rule – 01 অনুযায়ী: সাহায্যকারী verb যুক্ত হ্যাঁ-বোধক বাক্য হলে সাহায্যকারী verb + n\'t + subject + ...... + ? বসে।',
    ruleReference: 'Assertive to Interrogative: Rule – 01',
    points: 10
  },
  {
    id: 'q-ai-2',
    topicId: 'assertive-interrogative',
    question: 'Assertive: "He helped the old man." – এর Interrogative কী হবে?',
    options: [
      "Didn't he help the old man?",
      "Doesn't he help the old man?",
      'Did he helped the old man?',
      'Had he not helped the old man?'
    ],
    correctIndex: 0,
    explanation: 'Rule – 05 অনুযায়ী: সাহায্যকারী verb বিহীন Past Indefinite বাক্যকে did + n\'t + subject + verb1 + ... + ? করতে হয়।',
    ruleReference: 'Assertive to Interrogative: Rule – 05',
    points: 10
  },
  {
    id: 'q-ai-3',
    topicId: 'assertive-interrogative',
    question: 'Assertive: "Everybody wants to be happy." – এর Interrogative কী হবে?',
    options: [
      'Who does want to be happy?',
      'Who does not want to be happy?',
      'Is there anybody wants to be happy?',
      'Does everybody want to be happy?'
    ],
    correctIndex: 1,
    explanation: 'Rule – 06 অনুযায়ী: Everybody/Everyone থাকলে "Who + does not + verb1 + ... + ?" বসে।',
    ruleReference: 'Assertive to Interrogative: Rule – 06',
    points: 10
  },
  {
    id: 'q-ai-4',
    topicId: 'assertive-interrogative',
    question: 'Assertive: "Nobody believes a liar." – এর সঠিক Interrogative রূপ কোনটি?',
    options: [
      'Who does not believe a liar?',
      'Who believes a liar?',
      'Does nobody believe a liar?',
      'Why believe a liar?'
    ],
    correctIndex: 1,
    explanation: 'Rule – 08 অনুযায়ী: Nobody, none, no one থাকলে "Who + বাকি অংশ + ?" বসে (n\'t বসে না)।',
    ruleReference: 'Assertive to Interrogative: Rule – 08',
    points: 10
  },
  {
    id: 'q-ai-5',
    topicId: 'assertive-interrogative',
    question: 'Assertive: "It is no use memorising answer for any examination." – এর Interrogative কী?',
    options: [
      'Is it no use memorising answer for any examination?',
      'Why memorise answer for any examination?',
      'What though memorising answer for any examination?',
      'Who does memorise answer for any examination?'
    ],
    correctIndex: 1,
    explanation: 'Rule – 11 অনুযায়ী: "It is no use" যুক্ত বাক্যকে "Why + verb1 + বাকি অংশ + ?" দিয়ে Interrogative করা হয়।',
    ruleReference: 'Assertive to Interrogative: Rule – 11',
    points: 10
  },

  // Completing Sentences
  {
    id: 'q-cs-1',
    topicId: 'completing-sentence',
    question: 'Incomplete: "He ran fast lest ......" – সঠিক সমাপ্তি কোনটি?',
    options: [
      'he will miss the train.',
      'he should miss the train.',
      'he might not miss the train.',
      'he missed the train.'
    ],
    correctIndex: 1,
    explanation: 'Rule – 06 অনুযায়ী: Lest এর পর "subject + should/might + verb1" বসে।',
    ruleReference: 'Completing Sentences: Rule – 06',
    points: 10
  },
  {
    id: 'q-cs-2',
    topicId: 'completing-sentence',
    question: 'Incomplete: "It is high time we ......" – সঠিক গঠন কোনটি?',
    options: [
      'change our bad habits.',
      'changed our bad habits.',
      'will change our bad habits.',
      'changing our bad habits.'
    ],
    correctIndex: 1,
    explanation: 'Rule – 13 অনুযায়ী: It is high time এর পর subject আসলে verb-এর Past form (verb2) বসে।',
    ruleReference: 'Completing Sentences: Rule – 13',
    points: 10
  },
  {
    id: 'q-cs-3',
    topicId: 'completing-sentence',
    question: 'Incomplete: "Had I seen him, ......" (3rd conditional) – সঠিক বাক্য কোনটি?',
    options: [
      'I would tell him the news.',
      'I will give him the news.',
      'I would have given him the news.',
      'I had given him the news.'
    ],
    correctIndex: 2,
    explanation: 'Rule – 01 (Third conditional) অনুযায়ী: Had + sub + verb3 থাকলে পরবর্তীতে subject + would/could/might have + verb3 বসে।',
    ruleReference: 'Completing Sentences: Rule – 01',
    points: 10
  },
  {
    id: 'q-cs-4',
    topicId: 'completing-sentence',
    question: 'Incomplete: "He tells the matter as if ......" – সঠিক উত্তর কোনটি?',
    options: [
      'he knows it.',
      'he knew it.',
      'he had known it.',
      'he has known it.'
    ],
    correctIndex: 1,
    explanation: 'Rule – 07 অনুযায়ী: Present Indefinite + as if এর পর Past Indefinite বসে (he knew it)।',
    ruleReference: 'Completing Sentences: Rule – 07',
    points: 10
  },
  {
    id: 'q-cs-5',
    topicId: 'completing-sentence',
    question: 'Incomplete: "Would you mind ......" – কোনটি ব্যাকরণগতভাবে সঠিক?',
    options: [
      'give me a cup of tea?',
      'giving me a cup of tea?',
      'to give me a cup of tea?',
      'if you give me tea?'
    ],
    correctIndex: 1,
    explanation: 'Rule – 21 অনুযায়ী: Would you mind এর পর verb+ing বসে (giving me a cup of tea)।',
    ruleReference: 'Completing Sentences: Rule – 21',
    points: 10
  },

  // Degree
  {
    id: 'q-deg-1',
    topicId: 'degree',
    question: 'Positive: "No other boy in the class is so good as he." – এর Comparative কী?',
    options: [
      'He is better than any other boy in the class.',
      'He is best than most other boys in the class.',
      'He is as better as any other boy in the class.',
      'He is more good than any other boy in the class.'
    ],
    correctIndex: 0,
    explanation: 'System – 01 অনুযায়ী: "No other" এর ক্ষেত্রে Comparative এ Subject + verb + C.D + than any other + extension বসে। Good এর Comparative হলো Better।',
    ruleReference: 'Degree: System – 01',
    points: 10
  },
  {
    id: 'q-deg-2',
    topicId: 'degree',
    question: 'Superlative: "Bhutan is one of the smallest countries in the world." – এর Positive রূপ কোনটি?',
    options: [
      'No other country in the world is as small as Bhutan.',
      'Very few countries in the world are as small as Bhutan.',
      'Bhutan is smaller than most other countries.',
      'All other countries in the world are smaller than Bhutan.'
    ],
    correctIndex: 1,
    explanation: 'System – 02 অনুযায়ী: "One of the" যুক্ত Superlative এর Positive করতে শুরুতে "Very few + extension + verb(plural) + as + P.D + as + subject" বসে।',
    ruleReference: 'Degree: System – 02',
    points: 10
  },
  {
    id: 'q-deg-3',
    topicId: 'degree',
    question: '"Bad / Evil / Ill" এর Comparative ও Superlative রূপ কোনটি? (Note – 05)',
    options: [
      'Badder, Baddest',
      'Worse, Worst',
      'More bad, Most bad',
      'Lesser, Least'
    ],
    correctIndex: 1,
    explanation: 'Note – 05 অনুযায়ী: Bad/Evil/Ill এর Comparative হলো Worse এবং Superlative হলো Worst।',
    ruleReference: 'Degree: Note – 05',
    points: 10
  },
  {
    id: 'q-deg-4',
    topicId: 'degree',
    question: 'Positive: "He is as tall as his brother." – এর Comparative কী হবে? (System – 03)',
    options: [
      'His brother is taller than he.',
      'His brother is not taller than he.',
      'He is not taller than his brother.',
      'His brother is as short as he.'
    ],
    correctIndex: 1,
    explanation: 'System – 03 অনুযায়ী: দুটি ব্যক্তির তুলনায় Positive হ্যাঁ-বোধক থাকলে Comparative না-বোধক হবে (শেষের sub + verb + not + C.D + than + ১ম sub)।',
    ruleReference: 'Degree: System – 03',
    points: 10
  },

  // Narration
  {
    id: 'q-nar-1',
    topicId: 'narration',
    question: 'Direct: She said to me, "I was happy." – এর সঠিক Indirect রূপ কোনটি?',
    options: [
      'She told me that she was happy.',
      'She told me that she had been happy.',
      'She said to me that she is happy.',
      'She told me that she has been happy.'
    ],
    correctIndex: 1,
    explanation: 'Tense পরিবর্তন চার্ট অনুযায়ী: Past Indefinite (was) পরিবর্তিত হয়ে Past Perfect (had been) হয়।',
    ruleReference: 'Narration: Tense পরিবর্তন & Assertive Rule-01',
    points: 10
  },
  {
    id: 'q-nar-2',
    topicId: 'narration',
    question: 'Direct: Karim said to Imran, "Do you like to read poetry?" – এর Indirect কী হবে?',
    options: [
      'Karim said to Imran that did he like to read poetry.',
      'Karim asked Imran if he liked to read poetry.',
      'Karim asked Imran whether did he like to read poetry.',
      'Karim asked Imran that he likes to read poetry.'
    ],
    correctIndex: 1,
    explanation: 'Interrogative Rule – 01 অনুযায়ী: Yes/No প্রশ্নে "asked + object + if + subject + verb (Past Indefinite)" বসে।',
    ruleReference: 'Narration: Interrogative Sentence',
    points: 10
  },
  {
    id: 'q-nar-3',
    topicId: 'narration',
    question: 'Direct: Mother said to me, "Go to market." – এর Indirect ন্যারেশন কোনটি?',
    options: [
      'Mother told me that go to market.',
      'Mother ordered me to go to market.',
      'Mother requested me to went to market.',
      'Mother advised me go to market.'
    ],
    correctIndex: 1,
    explanation: 'Imperative Rule – 01 অনুযায়ী: আদেশ বুঝালে said to এর পরিবর্তে ordered এবং Conjunction হিসেবে "to" বসে।',
    ruleReference: 'Narration: Imperative Sentence',
    points: 10
  },
  {
    id: 'q-nar-4',
    topicId: 'narration',
    question: 'Direct: He said to me, "Let us go out for a walk." – এর Indirect রূপ কোনটি?',
    options: [
      'He told me that we should go out for a walk.',
      'He proposed to me that we should go out for a walk.',
      'He proposed to me to go out for a walk.',
      'He ordered me that they should go out for a walk.'
    ],
    correctIndex: 1,
    explanation: 'Imperative Rule – 04 অনুযায়ী: Let\'s/Let us থাকলে "proposed to + obj + that + we/they + should + verb1" বসে।',
    ruleReference: 'Narration: Imperative Rule – 04',
    points: 10
  },
  {
    id: 'q-nar-5',
    topicId: 'narration',
    question: 'Direct: The leader said to us, "Hurrah! We have got our identity." – এর Indirect কী?',
    options: [
      'The leader exclaimed with joy that they had got their identity.',
      'The leader exclaimed with sorrow that they got their identity.',
      'The leader wished that we had got our identity.',
      'The leader told with happiness they had got identity.'
    ],
    correctIndex: 0,
    explanation: 'Exclamatory Sentence অনুযায়ী: Hurrah আনন্দ প্রকাশ করায় "exclaimed with joy that..." বসে এবং Present Perfect পরিবর্তিত হয়ে Past Perfect হয়।',
    ruleReference: 'Narration: Exclamatory Sentence',
    points: 10
  },

  // Simple - Complex - Compound
  {
    id: 'q-scc-1',
    topicId: 'simple-complex-compound',
    question: 'Simple: "He works hard to get a good result." – বাক্যটির Complex রূপ কোনটি?',
    options: [
      'He works hard and gets a good result.',
      'He works hard so that he can get a good result.',
      'If he works hard, he will get a good result.',
      'He works hard because he gets a good result.'
    ],
    correctIndex: 1,
    explanation: 'Rule – 01 অনুযায়ী: Simple বাক্যে "to + verb1" উদ্দেশ্য বুঝালে Complex এ "so that + subject + can/may + verb1" বসে।',
    ruleReference: 'Simple-Complex-Compound: Rule – 01',
    points: 10
  },
  {
    id: 'q-scc-2',
    topicId: 'simple-complex-compound',
    question: 'Complex: "Though he is poor, he is honest." – এর Simple রূপ কোনটি?',
    options: [
      'Because of his being poor, he is honest.',
      'In spite of his being poor, he is honest.',
      'He is poor and he is honest.',
      'Without being poor, he is honest.'
    ],
    correctIndex: 1,
    explanation: 'Rule – 03 অনুযায়ী: Though/Although থাকলে Simple করতে "In spite of / Despite + possessive (his) + being + adjective" বসে।',
    ruleReference: 'Simple-Complex-Compound: Rule – 03',
    points: 10
  },
  {
    id: 'q-scc-3',
    topicId: 'simple-complex-compound',
    question: 'Simple: "By studying a lot, you can get a good result." – এর Compound রূপ কোনটি?',
    options: [
      'If you study a lot, you can get a good result.',
      'Study a lot and you can get a good result.',
      'Study a lot or you cannot get a good result.',
      'You study a lot but you get a good result.'
    ],
    correctIndex: 1,
    explanation: 'Rule – 04 অনুযায়ী: "By + verb+ing" এর Compound রূপ হলো "Imperative Sentence + and + 2nd clause"।',
    ruleReference: 'Simple-Complex-Compound: Rule – 04',
    points: 10
  },
  {
    id: 'q-scc-4',
    topicId: 'simple-complex-compound',
    question: 'Simple: "Health is wealth." – এর Complex বাক্য কোনটি? (Rule – 11)',
    options: [
      'It is health which is wealth.',
      'Health which is wealth.',
      'When health is wealth.',
      'Health that is wealth.'
    ],
    correctIndex: 0,
    explanation: 'Rule – 11 অনুযায়ী: Complement যুক্ত বাক্যকে Complex করতে "It is + noun + which + be verb + complement" বসে।',
    ruleReference: 'Simple-Complex-Compound: Rule – 11',
    points: 10
  },

  // Tense
  {
    id: 'q-ten-1',
    topicId: 'tense',
    question: 'কোন বাক্যে Past Perfect Tense এর গঠনটি সঠিক? (Before/After নিয়ম)',
    options: [
      'He came before I had gone out.',
      'I had gone out before he came.',
      'I went out before he had came.',
      'He had come after I went out.'
    ],
    correctIndex: 1,
    explanation: 'Past Perfect এর নিয়ম অনুযায়ী: "Before" এর পূর্বে Past Perfect বসে এবং অপর অংশে Past Indefinite বসে (I had gone out before he came)।',
    ruleReference: 'Tense: Past Perfect Tense (Page 4)',
    points: 10
  },
  {
    id: 'q-ten-2',
    topicId: 'tense',
    question: '"I have been reading for two hours." – এটি কোন Tense এর উদাহরণ?',
    options: [
      'Present Continuous Tense',
      'Present Perfect Tense',
      'Present Perfect Continuous Tense',
      'Past Perfect Continuous Tense'
    ],
    correctIndex: 2,
    explanation: 'Subject + have been + verb+ing + for/since + time থাকলে তা Present Perfect Continuous Tense হয়।',
    ruleReference: 'Tense: Present Perfect Continuous Tense (Page 3)',
    points: 10
  },
  {
    id: 'q-ten-3',
    topicId: 'tense',
    question: 'ইংরেজি বাক্যে "now, at this moment, at present" থাকলে সাধারণত কোন Tense হয়?',
    options: [
      'Present Indefinite Tense',
      'Present Continuous Tense',
      'Present Perfect Tense',
      'Future Indefinite Tense'
    ],
    correctIndex: 1,
    explanation: 'Tense Page – 02 অনুযায়ী: now, right now, at this moment, at present থাকলে Present Continuous Tense হয়।',
    ruleReference: 'Tense: Present Continuous Tense (Page 2)',
    points: 10
  },
  {
    id: 'q-ten-4',
    topicId: 'tense',
    question: '"No sooner had the thief seen the police than he ran away." – এটি মূলত কোন Tense স্ট্রাকচার?',
    options: [
      'Past Perfect ও Past Indefinite এর মিশ্রণ',
      'Present Perfect ও Future Simple এর মিশ্রণ',
      'শুধুমাত্র Past Indefinite',
      'Past Continuous Tense'
    ],
    correctIndex: 0,
    explanation: 'Tense Page – 04 অনুযায়ী: "No sooner had + sub + verb3 (Past Perfect) + than + Past Indefinite" বসে।',
    ruleReference: 'Tense: Past Perfect Tense (Page 4)',
    points: 10
  }
];
