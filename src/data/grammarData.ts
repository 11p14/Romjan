import { GrammarTopic } from '../types';

export const GRAMMAR_TOPICS: GrammarTopic[] = [
  {
    id: 'affirmative-negative',
    titleBn: 'হ্যাঁ বোধক কে না বোধক',
    titleEn: 'Affirmative to Negative',
    description: 'Only/Alone, Must/Have to, Both...and, Every, Superlative, Too...to এবং অন্যান্য রূপান্তর নিয়মাবলী।',
    totalRules: 12,
    badge: '12 Rules',
    author: 'Md Romjan Ali, B.A (Honours) Dept. of English',
    phone: '01943 301702',
    rules: [
      {
        id: 'aff-neg-1',
        ruleNo: 'Rule – 01',
        title: 'Only / Alone এর ব্যবহার',
        structure: 'ব্যক্তি/স্রষ্টাকর্তা বুঝালে "none but", বস্তু বুঝালে "nothing but", বয়স বা সংখ্যা বুঝালে "not more than / not less than" বসে।',
        bengaliTip: 'Only উঠে গিয়ে ব্যক্তি হলে শুরুতে None but, বস্তু হলে সে স্থানে nothing but এবং সংখ্যা হলে not more than/not less than বসে।',
        examples: [
          {
            label: 'ব্যক্তি/স্রষ্টাকর্তা',
            from: 'Only Allah can help us.',
            to: 'None but Allah can help us.'
          },
          {
            label: 'বস্তু বুঝালে',
            from: 'A child likes only sweets.',
            to: 'A child likes nothing but sweets.'
          },
          {
            label: 'বয়স বা সংখ্যা',
            from: 'He is only ten.',
            to: 'He is not more than ten.'
          }
        ]
      },
      {
        id: 'aff-neg-2',
        ruleNo: 'Rule – 02',
        title: 'Must / Have to / Had to এর রূপান্তর',
        structure: '(i) Must / Have to থাকলে: Can not but + verb1 / Can not help + verb1+ing\n(ii) Had to থাকলে: Could not but + verb1 / Could not help + verb1+ing',
        bengaliTip: 'Must এর পরিবর্তে cannot but বসলে মূল verb অপরিবর্তিত থাকে, কিন্তু cannot help বসালে verb এর সাথে ing যুক্ত হবে।',
        examples: [
          {
            label: 'Must (উভয় পদ্ধতি)',
            from: 'You must obey your parents.',
            to: 'You can not but obey your parents.',
            alternative: 'You can not help obeying your parents.'
          },
          {
            label: 'Have to',
            from: 'They have to finish the work on time.',
            to: 'They can not but finish the work on time.',
            alternative: 'They can not help finishing the work on time.'
          },
          {
            label: 'Had to (Past tense)',
            from: 'He had to serve their meal.',
            to: 'He could not but serve their meal.',
            alternative: 'He could not help serving their meal.'
          }
        ]
      },
      {
        id: 'aff-neg-3',
        ruleNo: 'Rule – 03',
        title: 'Both... and এর ব্যবহার',
        structure: 'Both... and থাকলে Both-এর পরিবর্তে "not only" এবং and-এর পরিবর্তে "but also" বসে।',
        examples: [
          {
            label: 'Both... and',
            from: 'I like both tea and coffee.',
            to: 'I like not only tea but also coffee.'
          }
        ]
      },
      {
        id: 'aff-neg-4',
        ruleNo: 'Rule – 04',
        title: 'Every যুক্ত বাক্যের রূপান্তর',
        structure: '(i) There is / was no + every এর পরের noun + but + বাকি অংশ।\n(ii) There is / was no + noun + who + do/does/did not + verb1 + বাকি অংশ।\n(iii) No + noun + affirmative word এর negative রূপ + বাকি অংশ।',
        notes: [
          'ব্যতিক্রম ১: "have বা has" main verb হলে negative করতে "without" বসে। (Ex: Every rose has a thorn → There is no rose without a thorn.)',
          'ব্যতিক্রম ২: Affirmative বাক্যে "sometimes / occasionally" থাকলে তার পরিবর্তে "not always" বসে। (Ex: She is sometimes happy → She is not always happy.)'
        ],
        examples: [
          {
            label: 'Every → There is no... but',
            from: 'Every person wants to be happy.',
            to: 'There is no person but wants to be happy.'
          },
          {
            label: 'Every → who does not',
            from: 'Every mother loves her child.',
            to: 'There is no mother who does not love her child.',
            alternative: 'No mother hates her child.'
          }
        ]
      },
      {
        id: 'aff-neg-5',
        ruleNo: 'Rule – 05',
        title: 'Always যুক্ত বাক্য',
        structure: 'Always থাকলে "always" এর পরিবর্তে "never" বসে এবং affirmative শব্দটির বিপরীত (antonym) শব্দ বসে।',
        examples: [
          {
            label: 'Always → Never + Antonym',
            from: 'Karim was always punctual.',
            to: 'Karim was never late.'
          }
        ]
      },
      {
        id: 'aff-neg-6',
        ruleNo: 'Rule – 06',
        title: 'Superlative Degree কে Negative',
        structure: 'No other + extension (বাকি অংশ) + verb + so/as + Positive Degree + as + subject.',
        bengaliTip: 'Superlative degree যুক্ত বাক্যকে negative করতে হলে Positive degree তে রূপান্তর করতে হয়।',
        examples: [
          {
            label: 'Superlative to Positive',
            from: 'He is best boy in the class.',
            to: 'No other boy in the class is as good as he.'
          }
        ]
      },
      {
        id: 'aff-neg-7',
        ruleNo: 'Rule – 07',
        title: 'As... as যুক্ত বাক্য',
        structure: 'প্রথম as এর জায়গায় "not less" বসে এবং শেষ as এর জায়গায় "than" বসে।',
        examples: [
          {
            label: 'As... as → not less... than',
            from: 'Rana was as wise as Rubi.',
            to: 'Rana was not less wise than Rubi.'
          }
        ]
      },
      {
        id: 'aff-neg-8',
        ruleNo: 'Rule – 08',
        title: 'Too... to যুক্ত বাক্য',
        structure: 'Too... to এর স্থলে so... that + subject + can not / could not + verb1 + বাকি অংশ।',
        examples: [
          {
            label: 'Present (can not)',
            from: 'He is too weak to go.',
            to: 'He is so weak that he can not go.'
          },
          {
            label: 'Past (could not)',
            from: 'Parveen was too poor to buy a chain.',
            to: 'Parveen was so poor that she could not buy a chain.'
          }
        ]
      },
      {
        id: 'aff-neg-9',
        ruleNo: 'Rule – 09',
        title: 'চিরন্তন সত্য / বৈজ্ঞানিক সত্য',
        structure: 'চিরন্তন সত্য বা বৈজ্ঞানিক সত্য অর্থবোধক affirmative sentence কে negative করতে হলে Interrogative Negative করতে হয়।',
        examples: [
          {
            label: 'Universal Truth',
            from: 'Health is wealth.',
            to: "Isn't health wealth?"
          }
        ]
      },
      {
        id: 'aff-neg-10',
        ruleNo: 'Rule – 10',
        title: 'As soon as যুক্ত বাক্য',
        structure: 'No sooner had + subject + verb3 + বাকি অংশ + than + Past indefinite tense হয়।',
        examples: [
          {
            label: 'As soon as → No sooner had',
            from: 'As soon as the thief saw the police, he ran away.',
            to: 'No sooner had the thief seen the police than he ran away.'
          }
        ]
      },
      {
        id: 'aff-neg-11',
        ruleNo: 'Rule – 11',
        title: 'বিপরীত শব্দ যোগ করে Negative',
        structure: 'সাধারণ affirmative sentence গুলোকে negative করতে হলে verb এবং modal এর পরে not এবং affirmative শব্দের negative/বিপরীত শব্দ দিতে হয়।',
        examples: [
          {
            label: 'Good → not bad',
            from: 'He is a good player.',
            to: 'He is not a bad player.'
          },
          {
            label: 'Remember → not forget',
            from: 'I shall remember you.',
            to: 'I shall not forget you.'
          }
        ]
      },
      {
        id: 'aff-neg-12',
        ruleNo: 'Rule – 12',
        title: 'Many / A few / A little / Much এর রূপান্তর',
        structure: '• Many এর পরিবর্তে: not a few\n• a few এর পরিবর্তে: not many\n• a little এর পরিবর্তে: not much\n• much এর পরিবর্তে: not a little',
        examples: [
          {
            label: 'Many → not a few',
            from: 'There are many students in the class.',
            to: 'There are not a few students in the class.'
          },
          {
            label: 'a few → not many',
            from: 'I have a few friends.',
            to: 'I have not many friends.'
          },
          {
            label: 'a little → not much',
            from: 'I have a little rice.',
            to: 'I have not much rice.'
          },
          {
            label: 'much → not a little',
            from: 'He has much money.',
            to: 'He has not a little money.'
          }
        ]
      }
    ]
  },
  {
    id: 'assertive-interrogative',
    titleBn: 'অ্যাসারটিভ থেকে ইন্টারোগেটিভ',
    titleEn: 'Assertive to Interrogative',
    description: 'সাহায্যকারী verb, Modal verb, Everybody, Nobody, Never, There is no ইত্যাদি রূপান্তরের ১২টি মৌলিক নিয়ম।',
    totalRules: 12,
    badge: '12 Rules',
    author: 'Md Romjan Ali, B.A (Honours) Dept. of English',
    phone: '01943 301702',
    rules: [
      {
        id: 'ass-int-1',
        ruleNo: 'Rule – 01',
        title: 'সাহায্যকারী verb যুক্ত হ্যাঁ-বোধক বাক্য',
        structure: 'সাহায্যকারী verb (am, is, are, was, were, have, has, had) + n\'t + subject + ...... + ?',
        examples: [
          {
            from: 'She is a beautiful girl.',
            to: "Isn't she a beautiful girl?"
          },
          {
            from: 'He has a dream.',
            to: "Hasn't he a dream?"
          }
        ]
      },
      {
        id: 'ass-int-2',
        ruleNo: 'Rule – 02',
        title: 'সাহায্যকারী verb যুক্ত না-বোধক বাক্য',
        structure: 'সাহায্যকারী verb + subject + ...... + ? (n\'t যোগ হবে না)',
        examples: [
          {
            from: 'He is not a singer.',
            to: 'Is he a singer?'
          },
          {
            from: 'He has not any ambition.',
            to: 'Has he any ambition?'
          }
        ]
      },
      {
        id: 'ass-int-3',
        ruleNo: 'Rule – 03',
        title: 'না-বোধক শব্দ চেনার উপায়',
        structure: 'Negative words: no, not, none, no one, nobody, nothing, neither, nowhere, never, hardly, barely, rarely, scarcely, seldom, few, little ইত্যাদি।',
        notes: ['বাক্যে উপরোক্ত কোনো "না বোধক" শব্দ থাকলে Interrogative করার সময় n\'t যোগ করতে হয় না।'],
        examples: []
      },
      {
        id: 'ass-int-4',
        ruleNo: 'Rule – 04',
        title: 'Modal Verb যুক্ত হ্যাঁ-বোধক বাক্য',
        structure: 'Modal verb (can, could, shall, should, will, would, may, might, must, ought to, need, dare, used to) + n\'t + subject + ...... + ?',
        examples: [
          {
            from: 'We can do the work.',
            to: "Can't we do the work?"
          }
        ]
      },
      {
        id: 'ass-int-5',
        ruleNo: 'Rule – 05',
        title: 'সাহায্যকারী বা Modal verb না থাকলে',
        structure: '(i) Present Indefinite: do/does + n\'t + subject + verb1 + ...... + ?\n(ii) Past Indefinite: did + n\'t + subject + verb1 + ...... + ?',
        examples: [
          {
            label: 'Present Indefinite (3rd singular)',
            from: 'He plays football.',
            to: "Doesn't he play football?"
          },
          {
            label: 'Present Indefinite (1st person)',
            from: 'I like to travel.',
            to: "Don't I like to travel?"
          },
          {
            label: 'Past Indefinite',
            from: 'He helped the old man.',
            to: "Didn't he help the old man?"
          }
        ]
      },
      {
        id: 'ass-int-6',
        ruleNo: 'Rule – 06',
        title: 'Everybody, Everyone, All সাবজেক্ট হলে',
        structure: 'Who + don\'t / doesn\'t / didn\'t + verb1 + ...... + ?',
        examples: [
          {
            from: 'Everybody wants to be happy.',
            to: 'Who does not want to be happy?'
          },
          {
            from: 'All like you.',
            to: 'Who do not like you?'
          },
          {
            from: 'Everyone listened to any request.',
            to: 'Who did not listen to my request?'
          }
        ]
      },
      {
        id: 'ass-int-7',
        ruleNo: 'Rule – 07',
        title: 'Every + Noun যুক্ত বাক্য',
        structure: 'Is there any + noun + who does not + verb1 + ...... + ?',
        notes: ['Note: Must থাকলে Interrogative করার সময় does not না বসে "will not" বসে।'],
        examples: [
          {
            from: 'Every man hates war.',
            to: 'Is there any man who does not hate war?'
          },
          {
            label: 'Must থাকলে',
            from: 'Every man must die.',
            to: 'Is there any man who will not die?'
          }
        ]
      },
      {
        id: 'ass-int-8',
        ruleNo: 'Rule – 08',
        title: 'Nobody, None, No one সাবজেক্ট হলে',
        structure: 'Who + বাকি অংশ + ?',
        notes: ['Note: No one থাকলে any one এবং nobody থাকলে anybody-ও ব্যবহার করা যায়।'],
        examples: [
          {
            from: 'Nobody believes a liar.',
            to: 'Who believes a liar?'
          },
          {
            from: 'No one liked his behavior.',
            to: 'Who liked his behavior?'
          }
        ]
      },
      {
        id: 'ass-int-9',
        ruleNo: 'Rule – 09',
        title: 'Never ও Nothing এর রূপান্তর',
        structure: 'Never থাকলে "ever" হয় এবং Nothing থাকলে "anything" হয়।',
        examples: [
          {
            label: 'Never → Ever',
            from: 'I never drink tea.',
            to: 'Do I ever drink tea?'
          },
          {
            label: 'Nothing → Anything',
            from: 'There was nothing to do.',
            to: 'Was there anything to do?'
          }
        ]
      },
      {
        id: 'ass-int-10',
        ruleNo: 'Rule – 10',
        title: 'There is no যুক্ত বাক্য',
        structure: 'Is there any + বাকি অংশ + ?',
        examples: [
          {
            from: 'There is no use of this law.',
            to: 'Is there any use of this law?'
          }
        ]
      },
      {
        id: 'ass-int-11',
        ruleNo: 'Rule – 11',
        title: 'It is no use যুক্ত বাক্য',
        structure: 'Why + verb1 + বাকি অংশ + ...... + ?',
        examples: [
          {
            from: 'It is no use memorising answer for any examination.',
            to: 'Why memorise answer for any examination?'
          }
        ]
      },
      {
        id: 'ass-int-12',
        ruleNo: 'Rule – 12',
        title: 'It does not matter এর রূপান্তর',
        structure: 'What though + বাকি অংশ + ?',
        examples: [
          {
            from: 'It does not matter if we lose the game.',
            to: 'What though if we lose the game?'
          }
        ]
      }
    ]
  },
  {
    id: 'completing-sentence',
    titleBn: 'কমপ্লিটিং সেন্টেন্সেস',
    titleEn: 'Completing Sentences',
    description: 'Conditionals (Zero, 1st, 2nd, 3rd), So that, Lest, As if, It is high time, Would rather, ইত্যাদি ২৩টি স্ট্রাকচার।',
    totalRules: 23,
    badge: '23 Rules',
    author: 'Md Romjan Ali, B.A (Honours) Dept. of English',
    phone: '01943 301702',
    rules: [
      {
        id: 'cs-1',
        ruleNo: 'Rule – 01',
        title: 'Conditional Sentences (শর্তমূলক বাক্য)',
        structure: '১. Zero conditional: If + present indefinite, present indefinite.\n২. First conditional: If + present indefinite/perfect, subject + shall/will/can/may + verb1 + ext.\n৩. Second conditional: If + past indefinite (or were), subject + would/could/might + verb1 + ext.\n৪. Third conditional: If / Had + past perfect, subject + would/could/might have + verb3 + ext.',
        examples: [
          {
            label: 'Zero conditional',
            from: 'If it is summer, ...',
            to: 'If it is summer, it feels hot.'
          },
          {
            label: 'First conditional',
            from: 'If he wants, ...',
            to: 'If he wants, I shall help him.'
          },
          {
            label: 'Second conditional',
            from: 'If I were you, ...',
            to: 'If I were you, I would not do this.'
          },
          {
            label: 'Third conditional',
            from: 'Had I seen him, ...',
            to: 'Had I seen him, I would have given him the news.'
          }
        ]
      },
      {
        id: 'cs-2',
        ruleNo: 'Rule – 02',
        title: 'So that / In order that (যাতে / যার ফলে)',
        structure: 'Subject + verb + ...... + so that + subject + can/could অথবা may/might + verb1 + ......',
        examples: [
          {
            from: 'The boy reads more so that ...',
            to: 'The boy reads more so that he can make a good result.'
          },
          {
            from: 'We eat so that ...',
            to: 'We eat so that we may live.'
          }
        ]
      },
      {
        id: 'cs-3',
        ruleNo: 'Rule – 03',
        title: 'So... that (এতই ...... যে)',
        structure: '...... + verb + so + ...... that + subject + cannot / could not + verb1 + ......',
        examples: [
          {
            from: 'The man was so ill that ...',
            to: 'The man was so ill that he could not move an inch.'
          },
          {
            from: 'The little girl is so nervous that ...',
            to: 'The little girl is so nervous that she cannot speak easily.'
          }
        ]
      },
      {
        id: 'cs-4',
        ruleNo: 'Rule – 04',
        title: 'Provided / Provided that / Providing that (যদি)',
        structure: 'Present clause + provided that + future / conditional clause.',
        examples: [
          {
            from: 'He will shine in life provided that ...',
            to: 'He will shine in life provided that he works hard.'
          }
        ]
      },
      {
        id: 'cs-5',
        ruleNo: 'Rule – 05',
        title: 'Too... to (এতই ...... যে পারে না)',
        structure: 'Subject + verb + too ...... to + verb1 + extension.',
        examples: [
          {
            from: 'He is too weak ...',
            to: 'He is too weak to stand up.'
          },
          {
            from: 'The man is too old ...',
            to: 'The man is too old to work.'
          }
        ]
      },
      {
        id: 'cs-6',
        ruleNo: 'Rule – 06',
        title: 'Lest (পাছে ভয় হয় যে / যাতে না ঘটে)',
        structure: '...... lest + subject + should / might + verb1 + ......',
        examples: [
          {
            from: 'Walked fast lest ...',
            to: 'Walked fast lest you should miss the bus.'
          },
          {
            from: 'Read diligently lest ...',
            to: 'Read diligently lest you should fail in the examination.'
          }
        ]
      },
      {
        id: 'cs-7',
        ruleNo: 'Rule – 07',
        title: 'As if / As though (যেন)',
        structure: '১. Present Indefinite/Perfect + as if/as though + Past Indefinite\n২. Past Indefinite + as if/as though + Past Perfect',
        examples: [
          {
            label: 'Present + as if + Past Indefinite',
            from: 'He tells the matter as if ...',
            to: 'He tells the matter as if he knew it.'
          },
          {
            label: 'Past + as if + Past Perfect',
            from: 'He told the matter as if ...',
            to: 'He told the matter as if he had known it.'
          }
        ]
      },
      {
        id: 'cs-8',
        ruleNo: 'Rule – 08',
        title: 'Since (যখন - বাক্যের মাঝে বসলে)',
        structure: '১. Present Indefinite/Perfect + since + Past Indefinite\n২. Past Indefinite + since + Past Perfect',
        examples: [
          {
            from: 'It is twenty years since ...',
            to: 'It is twenty years since I met you last.'
          },
          {
            from: 'It was twenty years since ...',
            to: 'It was twenty years since I had met you last.'
          }
        ]
      },
      {
        id: 'cs-9',
        ruleNo: 'Rule – 09',
        title: 'No sooner had... than / Scarcely / Hardly',
        structure: '১. No sooner had + sub + verb3 + than + past indefinite\n২. Hardly had + sub + verb3 + when + past indefinite\n৩. Scarcely had + sub + verb3 + when/before + past indefinite',
        examples: [
          {
            from: 'No sooner had I gone out ...',
            to: 'No sooner had I gone out than he came.'
          },
          {
            from: 'Hardly had he reached the college ...',
            to: 'Hardly had he reached the college when the examination began.'
          }
        ]
      },
      {
        id: 'cs-10',
        ruleNo: 'Rule – 10',
        title: 'সমজাতীয় Tense এর সংযোগকারী Conjunctions',
        structure: 'As, since, because, though, although, and, but, not only... but also এর আগে ও পরে সমজাতীয় tense হয়।',
        examples: [
          {
            from: 'He was rewarded as ...',
            to: 'He was rewarded as he was truthful.'
          },
          {
            from: 'Though he is poor, ...',
            to: 'Though he is poor, he is honest.'
          }
        ]
      },
      {
        id: 'cs-11',
        ruleNo: 'Rule – 11',
        title: 'Relative Pronoun (who, which, that, whom, whose)',
        structure: 'Relative pronoun থাকলে পূর্ববর্তী Antecedent অনুযায়ী verb বসিয়ে বাক্যটি complete করতে হয়।',
        examples: [
          {
            from: 'I saw the man who ...',
            to: 'I saw the man who was catching fish.'
          },
          {
            from: 'This is the house that ...',
            to: 'This is the house that he wants to buy.'
          }
        ]
      },
      {
        id: 'cs-12',
        ruleNo: 'Rule – 12',
        title: 'Till / Until এর ব্যবহার',
        structure: '• till এর পরে affirmative অথবা negative যেকোনো বাক্য হতে পারে।\n• until এর পরে সর্বদা affirmative বাক্য হবে।',
        examples: [
          {
            from: 'Wait until ...',
            to: 'Wait until the rain stops.'
          },
          {
            from: 'Wait here till ...',
            to: "Wait here till I don't come back."
          }
        ]
      },
      {
        id: 'cs-13',
        ruleNo: 'Rule – 13',
        title: 'It is high time / It is time (এটাই উপযুক্ত সময়)',
        structure: '১. It is high time / It is time + subject + verb2 + ...\n২. It is high time + infinitive (to + verb1) + ...\n৩. It is high time + for + ব্যক্তিবাচক object + infinitive + ...',
        examples: [
          {
            label: 'Subject থাকলে verb2',
            from: 'It is high time we ...',
            to: 'It is high time we changed our eating habits.'
          },
          {
            label: 'Infinitive দিয়ে',
            from: 'It is time ...',
            to: 'It is time to start the work.'
          },
          {
            label: 'for + object + infinitive',
            from: 'It is high time for us ...',
            to: 'It is high time for us to attack the enemy.'
          }
        ]
      },
      {
        id: 'cs-14',
        ruleNo: 'Rule – 14',
        title: 'I wish / I fancy / Would that (যদি এমন হতো)',
        structure: '...... + subject + verb2 + extension অথবা subject + were / could be + extension.',
        examples: [
          {
            from: 'I wish ...',
            to: 'I wish I were a bird.'
          },
          {
            from: 'Would that ...',
            to: 'Would that he got the first prize.'
          }
        ]
      },
      {
        id: 'cs-15',
        ruleNo: 'Rule – 15',
        title: 'Had better / Would better (বরং ভালো)',
        structure: 'Subject + had better / would better + verb1 + ......',
        examples: [
          {
            from: 'He had better ...',
            to: 'He had better go home.'
          },
          {
            from: 'They would better ...',
            to: 'They would better contact me.'
          }
        ]
      },
      {
        id: 'cs-16',
        ruleNo: 'Rule – 16',
        title: 'Would rather... than (বরং/তবুও)',
        structure: 'Subject + would rather + verb1 + than + verb1 + extension.',
        examples: [
          {
            from: 'I would rather die ...',
            to: 'I would rather die than beg.'
          },
          {
            from: 'He would rather drink tea ...',
            to: 'He would rather drink tea than coffee.'
          }
        ]
      },
      {
        id: 'cs-17',
        ruleNo: 'Rule – 17',
        title: 'As long as (যতক্ষণ ধরে / যতক্ষণ পর্যন্ত)',
        structure: 'Subject + verb + extension + as long as + subject + verb + extension.',
        examples: [
          {
            from: 'Wait here as long as ...',
            to: 'Wait here as long as it rains.'
          }
        ]
      },
      {
        id: 'cs-18',
        ruleNo: 'Rule – 18',
        title: 'By + Gerund',
        structure: 'By + Gerund যুক্ত incomplete sentence কে complete করার সময় Principal Clause এর শুরুতে একটি Subject + verb + ...... ব্যবহার করতে হয়।',
        examples: [
          {
            from: 'By reading more ...',
            to: 'By reading more we can learn more.'
          },
          {
            from: 'By drinking clean water ...',
            to: 'By drinking clean water you can keep fit.'
          }
        ]
      },
      {
        id: 'cs-19',
        ruleNo: 'Rule – 19',
        title: 'Without + Gerund',
        structure: 'Without + Gerund যুক্ত incomplete sentence কে complete করার সময় Principal Clause এর শুরুতে একটি Subject + negative verb ব্যবহার করতে হয়।',
        examples: [
          {
            from: 'Without reading more ...',
            to: 'Without reading more you cannot pass.'
          },
          {
            from: 'Without taking physical exercise ...',
            to: 'Without taking physical exercise we cannot keep our body fit.'
          }
        ]
      },
      {
        id: 'cs-20',
        ruleNo: 'Rule – 20',
        title: 'Unless (যদি না)',
        structure: '১. Unless + present indefinite, subject + cannot/will not + verb1 + ...\n২. Unless + past indefinite, subject + could not/would not + verb1 + ...',
        examples: [
          {
            from: 'Unless you read attentively, ...',
            to: 'Unless you read attentively, you will not make a good result.'
          },
          {
            from: 'Unless you studied a lot, ...',
            to: 'Unless you studied a lot, you could not make a good result.'
          }
        ]
      },
      {
        id: 'cs-21',
        ruleNo: 'Rule – 21',
        title: 'Would you mind (কিছু মনে করবেন কি?)',
        structure: 'Would you mind + verb+ing + ......?',
        examples: [
          {
            from: 'Would you mind ...',
            to: 'Would you mind giving me a cup of tea?'
          },
          {
            from: 'Would you mind ...',
            to: 'Would you mind opening the door?'
          }
        ]
      },
      {
        id: 'cs-22',
        ruleNo: 'Rule – 22',
        title: 'The place... Where (স্থান নির্দেশ)',
        structure: 'প্রদত্ত incomplete sentence এ স্থান নির্দেশ করলে incomplete sentence এর শেষে where + subject + verb + ...... বসে।',
        examples: [
          {
            from: 'Boalmari is the place ...',
            to: 'Boalmari is the place where Romjan was born.'
          }
        ]
      },
      {
        id: 'cs-23',
        ruleNo: 'Rule – 23',
        title: 'The time... When (সময় নির্দেশ)',
        structure: 'প্রদত্ত incomplete sentence এ সময়ের উল্লেখ থাকলে incomplete sentence এর শেষে When + subject + verb + ...... বসে।',
        examples: [
          {
            from: '1971 is the year ...',
            to: '1971 is the year when Bangladesh became independent.'
          }
        ]
      }
    ]
  },
  {
    id: 'degree',
    titleBn: 'ডিগ্রি পরিবর্তন',
    titleEn: 'Degree of Comparison',
    description: 'Positive, Comparative, Superlative রূপান্তরের ৩টি সিস্টেম এবং বিশেষ সিলেবল ও ব্যতিক্রম নোট ১-৫।',
    totalRules: 8,
    badge: '3 Systems + 5 Notes',
    author: 'Md Romjan Ali, B.A (Honours) Dept. of English',
    phone: '01943 301702',
    rules: [
      {
        id: 'deg-1',
        ruleNo: 'System – 01',
        title: 'সাধারণ ডিগ্রি রূপান্তর (the + S.D / than any other / No other)',
        structure: '• Superlative: Subject + verb + the + S.D + extension\n• Comparative: Subject + verb + C.D + than + any other / all other + extension (of all থাকলে all other)\n• Positive: No other + extension + verb + so/as + P.D + as + subject',
        examples: [
          {
            label: 'Superlative',
            from: 'He is the best boy in the class.',
            to: 'Comparative: He is better than any other boy in the class.',
            alternative: 'Positive: No other boy in the class is so good as he.'
          },
          {
            label: 'All other উদাহরণ',
            from: 'He is the tallest of all boys.',
            to: 'Comparative: He is better than all other men.'
          },
          {
            label: 'Positive to Comparative/Superlative',
            from: 'No other city in Bangladesh is so large as Dhaka.',
            to: 'Dhaka is larger than any other city in Bangladesh.'
          }
        ]
      },
      {
        id: 'deg-2',
        ruleNo: 'System – 02',
        title: 'One of the যুক্ত ডিগ্রি (Very few / than most other)',
        structure: '• Superlative: Subject + verb + one of the + S.D + extension\n• Comparative: Subject + verb + C.D + than + most other / few other + extension\n• Positive: Very few + extension + verb এর plural + so/as + P.D + as + subject',
        examples: [
          {
            label: 'Superlative',
            from: 'Bhutan is one of the smallest country in the world.',
            to: 'Comparative: Bhutan is smaller than most other countries in the world.',
            alternative: 'Positive: Very few countries in the world are as small as Bhutan.'
          },
          {
            label: 'Very few Positive',
            from: 'Very few metals are as costly as gold.',
            to: 'Comparative: Gold is more costly than most other metals.'
          }
        ]
      },
      {
        id: 'deg-3',
        ruleNo: 'System – 03',
        title: 'দুইয়ের মধ্যে তুলনা (Comparative ⇄ Positive)',
        structure: '• Comparative: শেষের Subject + verb + not + C.D + than + প্রথম subject\n• Positive: Subject + verb + no less / not less তুলে as + P.D + as + extension\n(নোট: হ্যাঁ-বোধক থাকলে not হবে, না-বোধক থাকলে not উঠে যাবে)',
        examples: [
          {
            label: 'Positive to Comparative',
            from: 'He is as tall as his brother.',
            to: 'His brother is not taller than he.'
          },
          {
            label: 'Negative Positive to Comparative',
            from: 'Hasan is not so wise as Jamil.',
            to: 'Jamil is wiser than Hasan.'
          },
          {
            label: 'No less than to as... as',
            from: 'He is no less strong than you.',
            to: 'He is as strong as you.'
          }
        ]
      },
      {
        id: 'deg-note-1',
        ruleNo: 'Note – 01',
        title: 'এক Syllable বিশিষ্ট Adjective (er / est)',
        structure: 'এক Syllable বিশিষ্ট Adjective থাকলে Superlative Degree তে "est" ও Comparative Degree তে "er" যোগ হয়।',
        tableData: {
          headers: ['Positive', 'Comparative', 'Superlative', 'বাংলা অর্থ'],
          rows: [
            ['Tall', 'taller', 'tallest', 'লম্বা'],
            ['Rich', 'richer', 'richest', 'ধনী'],
            ['Large', 'larger', 'largest', 'বিশাল'],
            ['Small', 'smaller', 'smallest', 'ছোট']
          ]
        },
        examples: []
      },
      {
        id: 'deg-note-2',
        ruleNo: 'Note – 02',
        title: 'Consonant এর পূর্বে Vowel থাকলে (Double Consonant)',
        structure: 'Consonant দিয়ে কোনো Adjective শেষ হলে তার পূর্বে Vowel থাকলে উক্ত Consonant টি দুই বার হয় এবং er / est যোগ হয়।',
        tableData: {
          headers: ['Positive', 'Comparative', 'Superlative', 'বাংলা অর্থ'],
          rows: [
            ['Fat', 'fatter', 'fattest', 'মোটা'],
            ['Sad', 'sadder', 'saddest', 'দুঃখ'],
            ['Big', 'bigger', 'biggest', 'বড়'],
            ['Thin', 'thinner', 'thinnest', 'পাতলা']
          ]
        },
        examples: []
      },
      {
        id: 'deg-note-3',
        ruleNo: 'Note – 03',
        title: 'Adjective এর শেষে ‘y’ থাকলে',
        structure: 'Adjective এর শেষে ‘y’ থাকলে এবং ‘y’ এর পূর্বে consonant থাকলে ‘y’ তুলে এর পরিবর্তে ‘i’ হয় এবং ‘er’ / ‘est’ যোগ হয়।',
        tableData: {
          headers: ['Positive', 'Comparative', 'Superlative', 'বাংলা অর্থ'],
          rows: [
            ['Easy', 'easier', 'easiest', 'সহজ'],
            ['Busy', 'busier', 'busiest', 'ব্যস্ত'],
            ['Happy', 'happier', 'happiest', 'সুখী'],
            ['Lazy', 'lazier', 'laziest', 'অলস']
          ]
        },
        examples: []
      },
      {
        id: 'deg-note-4',
        ruleNo: 'Note – 04',
        title: 'দুই বা ততোধিক Syllable বিশিষ্ট Adjective (more / most)',
        structure: 'দুই বা দুইয়ের অধিক Syllable বিশিষ্ট Adjective থাকলে Superlative এর ক্ষেত্রে ‘most’ এবং Comparative এর ক্ষেত্রে ‘more’ বসে।',
        tableData: {
          headers: ['Positive', 'Comparative', 'Superlative', 'বাংলা অর্থ'],
          rows: [
            ['Beautiful', 'more beautiful', 'most beautiful', 'সুন্দর'],
            ['Useful', 'more useful', 'most useful', 'উপকারী'],
            ['Important', 'more important', 'most important', 'গুরুত্বপূর্ণ'],
            ['Intelligent', 'more intelligent', 'most intelligent', 'মেধাবী']
          ]
        },
        examples: []
      },
      {
        id: 'deg-note-5',
        ruleNo: 'Note – 05',
        title: 'কিছু ব্যতিক্রম Adjective',
        structure: 'অনিয়মিত তুলনার ছক:',
        tableData: {
          headers: ['Positive', 'Comparative', 'Superlative', 'বাংলা অর্থ'],
          rows: [
            ['Bad / Evil / Ill', 'Worse', 'Worst', 'মন্দ / খারাপ'],
            ['Good', 'better', 'best', 'ভালো'],
            ['Many / Much', 'more', 'most', 'অনেক'],
            ['Little', 'less', 'least', 'কম / অল্প'],
            ['Far', 'farther', 'farthest', 'দূরবর্তী'],
            ['Out', 'outer', 'utmost', 'বাহিরে']
          ]
        },
        examples: []
      }
    ]
  },
  {
    id: 'narration',
    titleBn: 'উক্তি পরিবর্তন (Narration)',
    titleEn: 'Direct to Indirect Speech',
    description: 'Reporting Verb, Tense পরিবর্তন, Modal পরিবর্তন, ৫ প্রকার Sentence ও Passage Narration এর ৯টি বিশেষ নিয়ম।',
    totalRules: 12,
    badge: 'Comprehensive Speech',
    author: 'Md Romjan Ali, B.A (Honours) Dept. of English',
    phone: '01943 301702',
    rules: [
      {
        id: 'nar-1',
        ruleNo: 'Overview & Tense Changes',
        title: 'সংজ্ঞা, বাক্য চেনা ও Tense পরিবর্তনের ছক',
        structure: 'বক্তার বক্তব্য যা বলে বা প্রকাশ করে তাই Narration বা Speech। দুই প্রকার: Direct (প্রত্যক্ষ) ও Indirect (পরোক্ষ)।\n• Inverted comma এর বাইরের verb হলো Reporting Verb (R.V)।\n• Inverted comma এর ভেতরের বাক্যটি হলো Reported Speech (R.S)।',
        tableData: {
          headers: ['Direct Narration', 'Indirect Narration'],
          rows: [
            ['Present Indefinite', 'Past Indefinite'],
            ['Present Continuous', 'Past Continuous'],
            ['Present Perfect', 'Past Perfect'],
            ['Present Perfect Continuous', 'Past Perfect Continuous'],
            ['Past Indefinite', 'Past Perfect'],
            ['Past Continuous', 'Past Perfect Continuous'],
            ['Past Perfect', 'অপরিবর্তনীয়'],
            ['Past Perfect Continuous', 'অপরিবর্তনীয়']
          ]
        },
        notes: [
          'Modal পরিবর্তন: Can → Could, May → Might, Shall → Should/Would, Will → Would, Must → Had to/must (চির বাধ্যবাধকতা বুঝালে)।',
          'Person পরিবর্তন: 1st Person → Subject, 2nd Person → Object, 3rd Person → অপরিবর্তিত।'
        ],
        examples: [
          {
            from: 'She said to me, "I was happy."',
            to: 'She told me that she had been happy.'
          }
        ]
      },
      {
        id: 'nar-adverbs',
        ruleNo: 'Adverbs & Demonstratives',
        title: 'নিকটবর্তী শব্দের রূপান্তর',
        structure: 'Direct থেকে Indirect এ নৈকট্যসূচক শব্দ দূরবর্তী শব্দে পরিবর্তিত হয়:',
        tableData: {
          headers: ['Direct', 'Indirect'],
          rows: [
            ['This', 'That'],
            ['These', 'Those'],
            ['Here', 'There'],
            ['Ago', 'Before'],
            ['Come', 'Go'],
            ['Now', 'Then'],
            ['Today', 'That day'],
            ['To night', 'That night'],
            ['Yesterday', 'The previous day'],
            ['Tomorrow', 'The next day / The following day'],
            ['Last night', 'The previous night']
          ]
        },
        examples: []
      },
      {
        id: 'nar-assertive',
        ruleNo: 'Assertive Sentence',
        title: 'বর্ণনামূলক বাক্যের ন্যারেশন',
        structure: 'Subject + said/told + object + that + Reported Speech এর পরিবর্তিত রূপ।\n• Reporting Verb টি Present/Future Tense হলে Reported Speech এ শুধু Person এর পরিবর্তন হবে, Tense এর পরিবর্তন হবে না।\n• চিরন্তন সত্য বাক্য হলে কোনো পরিবর্তন হয় না।',
        examples: [
          {
            label: 'সাধারণ Assertive',
            from: 'He said to me, "I was happy."',
            to: 'He told me that he had been happy.'
          },
          {
            label: 'Reporting Verb Present',
            from: 'He says to me, "I am happy."',
            to: 'He says to me that he is happy.'
          },
          {
            label: 'Universal Truth',
            from: 'I said to them, "Allah is everywhere."',
            to: 'I told them that Allah is everywhere.'
          }
        ]
      },
      {
        id: 'nar-interrogative',
        ruleNo: 'Interrogative Sentence',
        title: 'প্রশ্নবোধক বাক্যের ন্যারেশন',
        structure: 'Subject + asked + object + if / whether / Wh.word + Subject + Verb + বাকি অংশ।',
        notes: ['Wh.word (what, why, how, which, where, when, who ইত্যাদি) থাকলে if/whether না বসে সরাসরি Wh.word টি Conjunction হিসেবে বসে।'],
        examples: [
          {
            label: 'Yes/No Question',
            from: 'Karim said to Imran, "Do you like to read poetry?"',
            to: 'Karim asked Imran if he liked to read poetry.'
          },
          {
            label: 'Wh-Question',
            from: 'He said to me, "Where do you live?"',
            to: 'He asked me where I lived.'
          }
        ]
      },
      {
        id: 'nar-imperative',
        ruleNo: 'Imperative Sentence',
        title: 'আদেশ, উপদেশ ও অনুরোধমূলক বাক্য',
        structure: '• আদেশ বুঝালে: ordered / commanded + to + verb1\n• উপদেশ বুঝালে: advised + to + verb1\n• অনুরোধ বুঝালে: requested + to + verb1\n• Don\'t / Do not থাকলে: forbade + to + verb1\n• Let\'s / Let us থাকলে: proposed to + object + that + we/they + should + verb1',
        examples: [
          {
            label: 'আদেশ',
            from: 'Mother said to me, "Go to market."',
            to: 'Mother ordered me to go to market.'
          },
          {
            label: 'উপদেশ',
            from: 'The teacher said to the students, "Always speak the truth."',
            to: 'The teacher advised the students to speak the truth always.'
          },
          {
            label: 'Don\'t (Forbade)',
            from: 'He said to me, "Don\'t do this."',
            to: 'He forbade me to do that.'
          },
          {
            label: 'Let\'s (প্রস্তাব)',
            from: 'He said to me, "Let us go out for a walk."',
            to: 'He proposed to me that we should go out for a walk.'
          }
        ]
      },
      {
        id: 'nar-optative',
        ruleNo: 'Optative Sentence',
        title: 'প্রার্থনা বা আশীর্বাদমূলক বাক্য',
        structure: 'Subject + wished / prayed + that + subject + might + verb1 + extension.\n(Note: Object দিতে চাইলে prayed for ব্যবহার করতে হবে)',
        examples: [
          {
            from: 'Father said to me, "May you pass the examination."',
            to: 'Father prayed that I might pass the examination.'
          },
          {
            from: 'The teacher said to the students, "May Allah bless you."',
            to: 'The teacher wished that Allah might bless them.'
          }
        ]
      },
      {
        id: 'nar-exclamatory',
        ruleNo: 'Exclamatory Sentence',
        title: 'বিস্ময়বোধক বাক্যের ন্যারেশন',
        structure: 'Subject + exclaimed with joy / sorrow / wonder + that + subject + verb + extension.\n(Note: Adjective এর আগে very এবং Noun এর আগে great বসে)',
        examples: [
          {
            label: 'আনন্দ বুঝালে (Hurrah)',
            from: 'The leader said to us, "Hurrah! We have got our identity."',
            to: 'The leader exclaimed with joy that they had got their identity.'
          },
          {
            label: 'দুঃখ বুঝালে (Alas)',
            from: 'He said to me, "Alas! I have failed again."',
            to: 'He exclaimed with sorrow that he had failed again.'
          },
          {
            label: 'বিস্ময় (What a...)',
            from: 'He said to me, "What a fool you are!"',
            to: 'He exclaimed with wonder that I was a great fool.'
          }
        ]
      },
      {
        id: 'nar-passage-rules',
        ruleNo: 'Passage Narration',
        title: 'প্যাসেজ ন্যারেশনের বিশেষ নিয়মাবলী',
        structure: '১. একাধিক Assertive বাক্য: ১ম বাক্যে said/told, ২য় বাক্যে added that / also said that, ৩য় বাক্যে again said that, ৪র্থ বাক্যে further added that।\n২. একাধিক Interrogative: asked, also asked, again asked।\n৩. Yes থাকলে: replied in the affirmative that ...\n৪. No থাকলে: replied in the negative that ...\n৫. Sir / Madam থাকলে: respectfully / politely (main verb এর পূর্বে বসে)।\n৬. সম্বোধন থাকলে: Addressing as ...',
        examples: [
          {
            label: 'Sir সম্বোধন',
            from: 'Rita said to her teacher, "Sir, can you permit me?"',
            to: 'Rita respectfully asked her teacher if he could permit her.'
          },
          {
            label: 'Yes / No',
            from: 'He said to me, "Yes, I agree with you."',
            to: 'He replied in the affirmative that he agreed with me.'
          },
          {
            label: 'সম্বোধন (Addressing)',
            from: 'He said to them, "Friends, Help me."',
            to: 'Addressing them as friends, he requested them to help him.'
          }
        ]
      }
    ]
  },
  {
    id: 'simple-complex-compound',
    titleBn: 'সিম্পল - কমপ্লেক্স - কম্পাউন্ড',
    titleEn: 'Simple – Complex – Compound',
    description: 'সংজ্ঞা, রূপান্তরের ১৫টি টেবিল ও নিয়মাবলী (To/so that, Too/so...that, In spite of/Though, By+ing, When, Because of ইত্যাদি)।',
    totalRules: 15,
    badge: '15 Core Rules',
    author: 'Md Romjan Ali, B.A (Honours) Dept. of English',
    phone: '01943 301702',
    rules: [
      {
        id: 'scc-definitions',
        ruleNo: 'মৌলিক সংজ্ঞা',
        title: '৩ প্রকার বাক্যের সংজ্ঞা',
        structure: '• Simple Sentence: যে বাক্যে একটি Subject ও একটি Finite verb থাকে।\n• Complex Sentence: যে বাক্যে একটি Main clause এবং এক বা একাধিক Subordinate (অধীন) clause থাকে।\n• Compound Sentence: দুই বা ততোধিক Main clause যখন Co-ordinate conjunction দ্বারা যুক্ত হয়।',
        examples: []
      },
      {
        id: 'scc-1',
        ruleNo: 'Rule – 01',
        title: 'উদ্দেশ্যমূলক বাক্য (To / So that / And want to)',
        structure: '• Simple: 1st clause + to + verb1\n• Complex: 1st clause + so that / in order that + subject + can/could/may/might + verb1\n• Compound: 1st clause + and + want/wants/wanted + to + verb1',
        examples: [
          {
            label: 'উদ্দেশ্য',
            from: 'Simple: He works hard to get a good result.',
            to: 'Complex: He works hard so that he can get a good result.',
            alternative: 'Compound: He works hard and wants to get a good result.'
          }
        ]
      },
      {
        id: 'scc-2',
        ruleNo: 'Rule – 02',
        title: 'অসামর্থ্য বা ফলাফল (Too...to / So...that / Very...and)',
        structure: '• Simple: ...... + too + ...... + to + verb1\n• Complex: ...... + so + ...... + that + subject + cannot/could not + verb1\n• Compound: ...... + very + ...... + and + subject + cannot/could not + verb1',
        examples: [
          {
            from: 'Simple: The boy is too little to do this small task.',
            to: 'Complex: The boy is so little that he cannot do this small task.',
            alternative: 'Compound: The boy is very little and he cannot do this small task.'
          }
        ]
      },
      {
        id: 'scc-3',
        ruleNo: 'Rule – 03',
        title: 'বিপরীত ভাবপ্রকাশ (In spite of / Though / But)',
        structure: '• Simple: In spite of / Despite + possessive + being/having/verb+ing\n• Complex: Though / Although + clause\n• Compound: 1st clause + but + 2nd clause',
        notes: [
          'am, is, are, was, were এর পরিবর্তে "being" বসে।',
          'have, has, had এর পরিবর্তে "having" বসে।'
        ],
        examples: [
          {
            from: 'Simple: In spite of his being poor, he is honest.',
            to: 'Complex: Though he is poor, he is honest.',
            alternative: 'Compound: He is poor but honest.'
          },
          {
            from: 'Simple: In spite of his working hard, he failed in the examination.',
            to: 'Complex: Though he worked hard, he failed in the examination.',
            alternative: 'Compound: He worked hard but failed in the examination.'
          }
        ]
      },
      {
        id: 'scc-4',
        ruleNo: 'Rule – 04',
        title: 'শর্তসূচক হ্যাঁ-বোধক (By + verb+ing / If / Imperative + and)',
        structure: '• Simple: By + verb+ing + ......\n• Complex: If + subject + হ্যাঁ-বোধক বাক্য\n• Compound: Imperative Sentence + and + ......',
        examples: [
          {
            from: 'Simple: By studying a lot, you can get a good result.',
            to: 'Complex: If you study a lot, you can get a good result.',
            alternative: 'Compound: Study a lot and you can get a good result.'
          },
          {
            from: 'Simple: By moving, he will die.',
            to: 'Complex: If he moves, he will die.',
            alternative: 'Compound: Let him move and he will.'
          }
        ]
      },
      {
        id: 'scc-5',
        ruleNo: 'Rule – 05',
        title: 'শর্তসূচক না-বোধক (Without + verb+ing / If...not / Unless / Or)',
        structure: '• Simple: Without + verb+ing + ......\n• Complex: If + subject + না-বোধক বাক্য অথবা Unless\n• Compound: Imperative Sentence + or + ......',
        examples: [
          {
            from: 'Simple: Without playing well, you cannot win the game.',
            to: 'Complex: If you do not play well, you cannot win the game.',
            alternative: 'Compound: Play well or you cannot win the game.'
          }
        ]
      },
      {
        id: 'scc-6',
        ruleNo: 'Rule – 06',
        title: 'একই Subject এর দুটি কাজ (Verb+ing / As, Since, When / And)',
        structure: '• Simple: Verb+ing + 2nd clause\n• Complex: As / Since / When + 1st clause + 2nd clause\n• Compound: 1st clause + and + 2nd clause',
        examples: [
          {
            from: 'Simple: Looking at the stranger, I became frightful.',
            to: 'Complex: As I looked at the stranger, I became frightful.',
            alternative: 'Compound: I looked at the stranger and became frightful.'
          }
        ]
      },
      {
        id: 'scc-7',
        ruleNo: 'Rule – 07',
        title: 'ভিন্ন Subject ও Be/Have Verb (Subject + being/having)',
        structure: '• Simple: Subject + being / having + 2nd clause\n• Complex: As / Since / When + 1st clause + 2nd clause\n• Compound: 1st clause + and + 2nd clause',
        examples: [
          {
            from: 'Simple: The meeting being over, we went back home.',
            to: 'Complex: When the meeting was over, we went back home.',
            alternative: 'Compound: The meeting was over and we went back home.'
          }
        ]
      },
      {
        id: 'scc-8',
        ruleNo: 'Rule – 08',
        title: 'কারণ প্রকাশ (Because of / As, Since / And)',
        structure: '• Simple: Because of + possessive + being/having\n• Complex: As / Since / When + clause\n• Compound: 1st clause + and + 2nd clause',
        examples: [
          {
            from: 'Simple: Because of his being small, he could not work hard.',
            to: 'Complex: Since he was small, he could not work hard.',
            alternative: 'Compound: He was small and could not work hard.'
          }
        ]
      },
      {
        id: 'scc-11',
        ruleNo: 'Rule – 11',
        title: 'Complement যুক্ত বাক্য (Health is wealth)',
        structure: '• Simple: Subject + be verb + adjective/noun\n• Complex: It is + subject + which / that + ......\n• Compound: It is + subject + and + ......',
        examples: [
          {
            from: 'Simple: Health is wealth.',
            to: 'Complex: It is health which is wealth.',
            alternative: 'Compound: It is health and wealth.'
          }
        ]
      },
      {
        id: 'scc-13',
        ruleNo: 'Rule – 13',
        title: 'বয়স, ঋতু ও সময় বুঝালে When এর রূপান্তর',
        structure: '১. বয়স বুঝালে: At the age of [বয়স] (Simple) ⇄ When he was [বয়স] (Complex)\n২. ঋতু বুঝালে: In [ঋতু] (Simple) ⇄ When it is [ঋতু] (Complex)\n৩. কাজ চলা বুঝালে: At the time of [verb+ing] (Simple) ⇄ When it was [verb+ing] (Complex)',
        examples: [
          {
            label: 'বয়স',
            from: 'Simple: At the age of four, he left his village.',
            to: 'Complex: When he was four, he left his village.'
          },
          {
            label: 'ঋতু',
            from: 'Simple: In spring the cuckoo sings.',
            to: 'Complex: When it is spring, the cuckoo sings.'
          },
          {
            label: 'কাজ চলা',
            from: 'Simple: At the time of raining, he woke up.',
            to: 'Complex: When it was raining, he woke up.'
          }
        ]
      }
    ]
  },
  {
    id: 'tense',
    titleBn: 'Tense – সময় / কাল',
    titleEn: '12 Tenses Master Guide',
    description: 'কোনো কাজ সংঘটিত হওয়ার সময়কে Tense বলে। ১২টি Tense এর গঠন, বাংলায় চেনার উপায়, ইংরেজিতে চেনার উপায় ও উদাহরণ।',
    totalRules: 12,
    badge: '12 Tenses Table',
    author: 'Md Romjan Ali, B.A (Honours) Dept. of English',
    phone: '01943 301702',
    rules: [
      {
        id: 't-1',
        ruleNo: 'Present Indefinite',
        title: 'Present Indefinite / Present Simple',
        structure: 'Subject + verb1 (s/es) + extension',
        bengaliTip: 'বাংলায় চেনার উপায়: বাংলা ক্রিয়াপদের শেষে - ই, য়, এ, ও থাকে।',
        notes: [
          'ইংরেজিতে চেনার উপায়: regularly, daily, everyday, always, sometimes, usually, often, occasionally, on Fridays, twice, every week ইত্যাদি।',
          'Subject 3rd person singular (he, she, it, কোনো ব্যক্তি/বস্তু/প্রাণীর নাম) হলে verb এর শেষে "s" বা "es" যোগ হয়।',
          'ss, sh, ch, gh, o, x, zz থাকলে "es" এবং y এর পূর্বে consonant থাকলে y উঠে "ies" হয়।',
          'সাহায্যকারী verb হিসেবে do/does ব্যবহৃত হয়।'
        ],
        examples: [
          { from: 'আমি স্কুলে যাই।', to: 'He goes to school everyday.' },
          { from: 'আমি ভাত খাই।', to: 'I eat rice.' },
          { from: 'চিরন্তন সত্য:', to: 'The sun rises in the east.' }
        ]
      },
      {
        id: 't-2',
        ruleNo: 'Present Continuous',
        title: 'Present Continuous / Present Progress',
        structure: 'Subject + am / is / are + verb+ing + extension',
        bengaliTip: 'বাংলায় চেনার উপায়: তেছে, তেছি, তেছ, তেছেন, চ্ছ, চ্ছি, চ্ছে, চ্ছেন, ছি, ছ, ছে, ছেন যোগ থাকে।',
        notes: [
          'ইংরেজিতে চেনার উপায়: now, right now, at this moment, at present, gradually, step by step ইত্যাদি।',
          'I এর পরে am; He, She, It ও 3rd person singular এর পরে is; We, You, They ও plural এর পরে are বসে।'
        ],
        examples: [
          { from: 'আমি ভাত খাইতেছি।', to: 'I am eating rice.' },
          { from: 'সে স্কুলে যাইতেছে।', to: 'He is going to school.' },
          { from: 'আমরা ফুটবল খেলতেছি।', to: 'We are playing football.' }
        ]
      },
      {
        id: 't-3',
        ruleNo: 'Present Perfect',
        title: 'Present Perfect Tense',
        structure: 'Subject + have / has + verb3 (Past Participle) + extension',
        bengaliTip: 'বাংলায় চেনার উপায়: য়াছ, য়াছি, য়াছে, য়াছেন, য়েছ, য়েছি, য়েছে যোগ থাকে। কাজ এইমাত্র শেষ হয়েছে কিন্তু ফল বিদ্যমান।',
        notes: [
          'ইংরেজিতে চেনার উপায়: just, just now, already, yet, lately, never, ever, so far till today/now, up to now ইত্যাদি।',
          'He, she, it ও 3rd person singular এর পরে has; I, we, you, they ও plural এ have বসে।'
        ],
        examples: [
          { from: 'আমি ভাত খাইয়াছি।', to: 'I have eaten rice.' },
          { from: 'সে স্কুলে গিয়াছে।', to: 'He has gone to school.' }
        ]
      },
      {
        id: 't-4',
        ruleNo: 'Present Perfect Continuous',
        title: 'Present Perfect Continuous Tense',
        structure: 'Subject + have been / has been + verb+ing + extension (for/since + time)',
        bengaliTip: 'কাজ পূর্বে শুরু হয়ে বর্তমানেও চলতেছে বুঝায় এবং একটি নির্দিষ্ট সময়ের উল্লেখ থাকে।',
        notes: [
          'যাবৎ বা ধরে বুঝালে "for" এবং হতে বা থেকে বুঝালে "since" বসে।',
          'I, we, you, they এ have been; he, she, it এ has been বসে।'
        ],
        examples: [
          { from: 'আমি দুই ঘণ্টা যাবত পড়তেছি।', to: 'I have been reading for two hours.' },
          { from: 'সে সকাল হতে কাজ করতেছে।', to: 'He has been working since morning.' }
        ]
      },
      {
        id: 't-5',
        ruleNo: 'Past Indefinite',
        title: 'Past Indefinite / Past Simple',
        structure: 'Subject + verb2 (Past Form) + extension',
        bengaliTip: 'বাংলা ক্রিয়ার শেষে: ল, লে, লাম, ছিল, ছিলে, ছিলেন, ছিলাম, ত, তে, তাম, তেন থাকে। অতীত ফল নেই।',
        notes: [
          'ইংরেজিতে চেনার উপায়: yesterday, ago, long ago, once, once upon a time, previous, the day before yesterday, last + time ইত্যাদি।',
          'সাহায্যকারী verb হিসেবে "did" ব্যবহৃত হয়।'
        ],
        examples: [
          { from: 'রীতা বাড়ি গেল।', to: 'Rita went home.' },
          { from: 'গতকাল আমি তোমার সাথে দেখা করেছিলাম।', to: 'I met you yesterday.' }
        ]
      },
      {
        id: 't-6',
        ruleNo: 'Past Continuous',
        title: 'Past Continuous / Past Progress',
        structure: 'Subject + was / were + verb+ing + extension',
        bengaliTip: 'অতীতে কোনো কাজ কিছু সময় ধরে চলতেছিল বুঝালে। (তেছিল, তেছিলাম, তেছিলে, তেছিলেন, চ্ছিল ইত্যাদি)',
        notes: [
          'we, you, they ও plural এ were বসে, আর সব ক্ষেত্রে was বসে।'
        ],
        examples: [
          { from: 'আমি পড়িতেছিলাম।', to: 'I was reading.' },
          { from: 'তারা বিষয়টি আলোচনা করিতেছিল।', to: 'They were discussing the matter.' }
        ]
      },
      {
        id: 't-7',
        ruleNo: 'Past Perfect',
        title: 'Past Perfect Tense',
        structure: 'Subject + had + verb3 + extension',
        bengaliTip: 'অতীতকালে দুটি কাজ সংঘটিত হয়েছিল, যার মধ্যে অপেক্ষাকৃত পূর্বের কাজটি Past Perfect এবং পরের কাজটি Past Indefinite হয়।',
        notes: [
          'Before এর পূর্বে Past Perfect বসে, অপর অংশ Past Indefinite।',
          'After এর পরে Past Perfect বসে, অপর অংশ Past Indefinite।',
          'No sooner had + sub + verb3 + than + Past Indefinite.'
        ],
        examples: [
          { from: 'সে আসার পূর্বে আমি বাহিরে গিয়াছিলাম।', to: 'I had gone out before he came.' },
          { from: 'আমি যাওয়ার পর সে আসল।', to: 'He came after I had gone out.' },
          { from: 'শিক্ষক ক্লাসে প্রবেশ করতে না করতেই...', to: 'No sooner had the teacher entered the classroom than all the students stood up.' }
        ]
      },
      {
        id: 't-8',
        ruleNo: 'Past Perfect Continuous',
        title: 'Past Perfect Continuous Tense',
        structure: 'Subject + had been + verb+ing + extension',
        bengaliTip: 'অতীতের দুটি কাজের মধ্যে অপেক্ষাকৃত পূর্বের কাজটি দীর্ঘ সময় ধরে চলতেছিল বুঝালে।',
        examples: [
          { from: 'আমি দুই ঘণ্টা ধরে পড়তেছিলাম।', to: 'I had been reading for two hours.' },
          { from: 'রানা এই ক্লাবে পাঁচ বছর ধরে খেলছিল।', to: 'Rana had been playing in this club for five years.' }
        ]
      },
      {
        id: 't-9',
        ruleNo: 'Future Indefinite',
        title: 'Future Indefinite / Future Simple',
        structure: 'Subject + shall / will + verb1 + extension',
        bengaliTip: 'বাংলা ক্রিয়ার শেষে: ব, বে, বা, বেন, বি থাকে। ভবিষ্যতে কোনো কাজ সংঘটিত হবে।',
        notes: [
          'ইংরেজিতে চেনার উপায়: tomorrow, coming, upcoming, ensuing (আসন্ন) ইত্যাদি।',
          'আধুনিক ব্যাকরণে সব person এ will ব্যবহার করা যায়।'
        ],
        examples: [
          { from: 'আমি কাজটি করব।', to: 'I shall do the work.' },
          { from: 'সে সময়মতো কাজটি শেষ করবে।', to: 'He will finish the work on time.' }
        ]
      },
      {
        id: 't-10',
        ruleNo: 'Future Continuous',
        title: 'Future Continuous / Future Progress',
        structure: 'Subject + shall be / will be + verb+ing + extension',
        bengaliTip: 'ভবিষ্যতে কোনো কাজ চলতে থাকবে বুঝালে। (তে থাকিব, তে থাকিবে, তে থাকিবা, তে থাকিবেন)',
        examples: [
          { from: 'আমি বইটি পড়তে থাকিব।', to: 'I shall be reading the book.' },
          { from: 'সে বাজারে যেতে থাকিবে।', to: 'He will be going to market.' }
        ]
      },
      {
        id: 't-11',
        ruleNo: 'Future Perfect',
        title: 'Future Perfect Tense',
        structure: 'Subject + shall have / will have + verb3 + extension',
        bengaliTip: 'ভবিষ্যতে কোনো নির্দিষ্ট সময়ে কোনো কাজ হয়ে থাকবে অথবা একটি কাজের পূর্বে অন্য একটি কাজ সম্পন্ন হবে বুঝালে।',
        examples: [
          { from: 'সে আসার পূর্বে আমি কাজটি শেষ করে থাকিব।', to: 'I shall have finished the work before he comes.' },
          { from: 'মনির একদিনের মধ্যে কাজটি শেষ করে থাকবে।', to: 'Monir will have finished the work within one day.' }
        ]
      },
      {
        id: 't-12',
        ruleNo: 'Future Perfect Continuous',
        title: 'Future Perfect Continuous Tense',
        structure: 'Subject + shall have been / will have been + verb+ing + extension',
        bengaliTip: 'ভবিষ্যতে কোনো একটি কাজ শুরু হবে কিন্তু তার পূর্ব মুহূর্ত পর্যন্ত অন্য আরেকটি কাজ চলতে থাকবে।',
        examples: [
          { from: 'আমি দুই ঘণ্টা ধরে পড়তে থাকব।', to: 'I shall have been reading the book for two hours.' }
        ]
      }
    ]
  }
];

export const TENSE_MATRIX = {
  headers: ['Tense Name', 'Present Tense', 'Past Tense', 'Future Tense'],
  rows: [
    ['Indefinite / Simple', 'verb1 + s/es (do/does)', 'verb2 (did)', 'shall/will + verb1'],
    ['Continuous / Progress', 'am/is/are + verb+ing', 'was/were + verb+ing', 'shall be/will be + verb+ing'],
    ['Perfect', 'have/has + verb3', 'had + verb3 (before/after)', 'shall/will have + verb3 (before/after)'],
    ['Perfect Continuous', 'have been/has been + verb+ing (since/for)', 'had been + verb+ing (since/for)', 'shall/will have been + verb+ing (since/for)']
  ]
};
