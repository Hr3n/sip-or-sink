const PHYSIO_QUESTIONS = [
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for hip extension?",
    "options": [
      "Musculus rectus femoris",
      "Musculus gluteus medius",
      "Musculus soleus",
      "Musculus gluteus maximus"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus gluteus maximus performs hip extension."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus gluteus maximus?",
    "options": [
      "Nervus gluteus superior",
      "Nervus gluteus inferior",
      "Nervus ischiadicus",
      "Nervus accessorius"
    ],
    "correctIdx": 1,
    "explanation": "The Musculus gluteus maximus is innervated by the Nervus gluteus inferior."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for hip abduction?",
    "options": [
      "Musculus psoas major",
      "Musculus pronator teres",
      "Musculus gluteus medius",
      "Musculus infraspinatus"
    ],
    "correctIdx": 2,
    "explanation": "The Musculus gluteus medius performs hip abduction."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus gluteus medius?",
    "options": [
      "Nervus medianus",
      "Nervus accessorius",
      "Plexus sacralis",
      "Nervus gluteus superior"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus gluteus medius is innervated by the Nervus gluteus superior."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for knee flexion?",
    "options": [
      "Musculus biceps femoris",
      "Musculus trapezius",
      "Musculus soleus",
      "Musculus subscapularis"
    ],
    "correctIdx": 0,
    "explanation": "The Musculus biceps femoris performs knee flexion."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus biceps femoris?",
    "options": [
      "Nervus ischiadicus",
      "Plexus sacralis",
      "Nervus medianus",
      "Nervus pectoralis"
    ],
    "correctIdx": 0,
    "explanation": "The Musculus biceps femoris is innervated by the Nervus ischiadicus."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for knee extension and hip flexion?",
    "options": [
      "Musculus rectus femoris",
      "Musculus latissimus dorsi",
      "Musculus gastrocnemius",
      "Musculus psoas major"
    ],
    "correctIdx": 0,
    "explanation": "The Musculus rectus femoris performs knee extension and hip flexion."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus rectus femoris?",
    "options": [
      "Nervus gluteus superior",
      "Nervus gluteus inferior",
      "Nervus tibialis",
      "Nervus femoralis"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus rectus femoris is innervated by the Nervus femoralis."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for shoulder abduction?",
    "options": [
      "Musculus latissimus dorsi",
      "Musculus deltoideus",
      "Musculus infraspinatus",
      "Musculus rectus femoris"
    ],
    "correctIdx": 1,
    "explanation": "The Musculus deltoideus performs shoulder abduction."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus deltoideus?",
    "options": [
      "Nervus axillaris",
      "Nervus obturatorius",
      "Nervus medianus",
      "Nervus femoralis"
    ],
    "correctIdx": 0,
    "explanation": "The Musculus deltoideus is innervated by the Nervus axillaris."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for elbow flexion and supination?",
    "options": [
      "Musculus gluteus maximus",
      "Musculus supraspinatus",
      "Musculus pectoralis major",
      "Musculus biceps brachii"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus biceps brachii performs elbow flexion and supination."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus biceps brachii?",
    "options": [
      "Nervus axillaris",
      "Nervus musculocutaneus",
      "Nervus accessorius",
      "Nervus suprascapularis"
    ],
    "correctIdx": 1,
    "explanation": "The Musculus biceps brachii is innervated by the Nervus musculocutaneus."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for elbow extension?",
    "options": [
      "Musculus rectus femoris",
      "Musculus psoas major",
      "Musculus deltoideus",
      "Musculus triceps brachii"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus triceps brachii performs elbow extension."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus triceps brachii?",
    "options": [
      "Nervus radialis",
      "Plexus sacralis",
      "Nervus femoralis",
      "Nervus fibularis profundus"
    ],
    "correctIdx": 0,
    "explanation": "The Musculus triceps brachii is innervated by the Nervus radialis."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for shoulder extension and adduction?",
    "options": [
      "Musculus triceps brachii",
      "Musculus psoas major",
      "Musculus gluteus medius",
      "Musculus latissimus dorsi"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus latissimus dorsi performs shoulder extension and adduction."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus latissimus dorsi?",
    "options": [
      "Nervus suprascapularis",
      "Nervus femoralis",
      "Nervus axillaris",
      "Nervus thoracodorsalis"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus latissimus dorsi is innervated by the Nervus thoracodorsalis."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for scapular elevation and retraction?",
    "options": [
      "Musculus trapezius",
      "Musculus biceps brachii",
      "Musculus brachioradialis",
      "Musculus deltoideus"
    ],
    "correctIdx": 0,
    "explanation": "The Musculus trapezius performs scapular elevation and retraction."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus trapezius?",
    "options": [
      "Nervus femoralis",
      "Nervus accessorius",
      "Nervus axillaris",
      "Nervus subscapularis"
    ],
    "correctIdx": 1,
    "explanation": "The Musculus trapezius is innervated by the Nervus accessorius."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for shoulder horizontal adduction?",
    "options": [
      "Musculus deltoideus",
      "Musculus pectoralis major",
      "Musculus piriformis",
      "Musculus subscapularis"
    ],
    "correctIdx": 1,
    "explanation": "The Musculus pectoralis major performs shoulder horizontal adduction."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus pectoralis major?",
    "options": [
      "Nervus accessorius",
      "Nervus pectoralis",
      "Nervus thoracodorsalis",
      "Nervus fibularis profundus"
    ],
    "correctIdx": 1,
    "explanation": "The Musculus pectoralis major is innervated by the Nervus pectoralis."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for plantar flexion and knee flexion?",
    "options": [
      "Musculus gastrocnemius",
      "Musculus infraspinatus",
      "Musculus psoas major",
      "Musculus gluteus maximus"
    ],
    "correctIdx": 0,
    "explanation": "The Musculus gastrocnemius performs plantar flexion and knee flexion."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus gastrocnemius?",
    "options": [
      "Nervus tibialis",
      "Plexus lumbalis",
      "Nervus musculocutaneus",
      "Nervus accessorius"
    ],
    "correctIdx": 0,
    "explanation": "The Musculus gastrocnemius is innervated by the Nervus tibialis."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for dorsiflexion and inversion?",
    "options": [
      "Musculus tibialis anterior",
      "Musculus biceps brachii",
      "Musculus gluteus maximus",
      "Musculus biceps femoris"
    ],
    "correctIdx": 0,
    "explanation": "The Musculus tibialis anterior performs dorsiflexion and inversion."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus tibialis anterior?",
    "options": [
      "Nervus radialis",
      "Nervus ischiadicus",
      "Plexus lumbalis",
      "Nervus fibularis profundus"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus tibialis anterior is innervated by the Nervus fibularis profundus."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for initiation of shoulder abduction?",
    "options": [
      "Musculus gluteus maximus",
      "Musculus gastrocnemius",
      "Musculus triceps brachii",
      "Musculus supraspinatus"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus supraspinatus performs initiation of shoulder abduction."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus supraspinatus?",
    "options": [
      "Nervus medianus",
      "Nervus suprascapularis",
      "Nervus accessorius",
      "Plexus sacralis"
    ],
    "correctIdx": 1,
    "explanation": "The Musculus supraspinatus is innervated by the Nervus suprascapularis."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for shoulder external rotation?",
    "options": [
      "Musculus triceps brachii",
      "Musculus biceps brachii",
      "Musculus infraspinatus",
      "Musculus latissimus dorsi"
    ],
    "correctIdx": 2,
    "explanation": "The Musculus infraspinatus performs shoulder external rotation."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus infraspinatus?",
    "options": [
      "Nervus suprascapularis",
      "Plexus sacralis",
      "Nervus ischiadicus",
      "Nervus gluteus superior"
    ],
    "correctIdx": 0,
    "explanation": "The Musculus infraspinatus is innervated by the Nervus suprascapularis."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for shoulder internal rotation?",
    "options": [
      "Musculus subscapularis",
      "Musculus supraspinatus",
      "Musculus brachioradialis",
      "Musculus triceps brachii"
    ],
    "correctIdx": 0,
    "explanation": "The Musculus subscapularis performs shoulder internal rotation."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus subscapularis?",
    "options": [
      "Nervus tibialis",
      "Nervus gluteus inferior",
      "Plexus sacralis",
      "Nervus subscapularis"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus subscapularis is innervated by the Nervus subscapularis."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for hip flexion?",
    "options": [
      "Musculus psoas major",
      "Musculus gluteus maximus",
      "Musculus rectus femoris",
      "Musculus latissimus dorsi"
    ],
    "correctIdx": 0,
    "explanation": "The Musculus psoas major performs hip flexion."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus psoas major?",
    "options": [
      "Nervus gluteus inferior",
      "Nervus musculocutaneus",
      "Nervus femoralis",
      "Plexus lumbalis"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus psoas major is innervated by the Plexus lumbalis."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for hip external rotation?",
    "options": [
      "Musculus tibialis anterior",
      "Musculus biceps brachii",
      "Musculus deltoideus",
      "Musculus piriformis"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus piriformis performs hip external rotation."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus piriformis?",
    "options": [
      "Nervus tibialis",
      "Plexus sacralis",
      "Nervus femoralis",
      "Nervus accessorius"
    ],
    "correctIdx": 1,
    "explanation": "The Musculus piriformis is innervated by the Plexus sacralis."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for hip flexion, abduction, external rotation?",
    "options": [
      "Musculus gluteus maximus",
      "Musculus sartorius",
      "Musculus gluteus medius",
      "Musculus rectus femoris"
    ],
    "correctIdx": 1,
    "explanation": "The Musculus sartorius performs hip flexion, abduction, external rotation."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus sartorius?",
    "options": [
      "Nervus gluteus inferior",
      "Nervus musculocutaneus",
      "Nervus thoracodorsalis",
      "Nervus femoralis"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus sartorius is innervated by the Nervus femoralis."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for hip adduction?",
    "options": [
      "Musculus psoas major",
      "Musculus biceps brachii",
      "Musculus piriformis",
      "Musculus gracilis"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus gracilis performs hip adduction."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus gracilis?",
    "options": [
      "Nervus accessorius",
      "Nervus gluteus inferior",
      "Nervus medianus",
      "Nervus obturatorius"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus gracilis is innervated by the Nervus obturatorius."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for plantar flexion?",
    "options": [
      "Musculus sartorius",
      "Musculus latissimus dorsi",
      "Musculus gluteus maximus",
      "Musculus soleus"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus soleus performs plantar flexion."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus soleus?",
    "options": [
      "Plexus sacralis",
      "Nervus suprascapularis",
      "Nervus radialis",
      "Nervus tibialis"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus soleus is innervated by the Nervus tibialis."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for elbow flexion?",
    "options": [
      "Musculus piriformis",
      "Musculus brachioradialis",
      "Musculus gluteus maximus",
      "Musculus gluteus medius"
    ],
    "correctIdx": 1,
    "explanation": "The Musculus brachioradialis performs elbow flexion."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus brachioradialis?",
    "options": [
      "Nervus femoralis",
      "Nervus ischiadicus",
      "Nervus accessorius",
      "Nervus radialis"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus brachioradialis is innervated by the Nervus radialis."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which muscle is primarily responsible for forearm pronation?",
    "options": [
      "Musculus biceps brachii",
      "Musculus psoas major",
      "Musculus gastrocnemius",
      "Musculus pronator teres"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus pronator teres performs forearm pronation."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "Which nerve innervates the Musculus pronator teres?",
    "options": [
      "Nervus thoracodorsalis",
      "Nervus medianus",
      "Nervus tibialis",
      "Nervus fibularis profundus"
    ],
    "correctIdx": 1,
    "explanation": "The Musculus pronator teres is innervated by the Nervus medianus."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: assisting the prime mover?",
    "options": [
      "isometric",
      "synergist",
      "concentric",
      "eccentric"
    ],
    "correctIdx": 1,
    "explanation": "The term 'synergist' refers to assisting the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: opposing the prime mover?",
    "options": [
      "isokinetic",
      "antagonist",
      "agonist",
      "synergist"
    ],
    "correctIdx": 1,
    "explanation": "The term 'antagonist' refers to opposing the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: no change in muscle length?",
    "options": [
      "isometric",
      "synergist",
      "concentric",
      "antagonist"
    ],
    "correctIdx": 0,
    "explanation": "The term 'isometric' refers to no change in muscle length."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: opposing the prime mover?",
    "options": [
      "antagonist",
      "synergist",
      "isometric",
      "concentric"
    ],
    "correctIdx": 0,
    "explanation": "The term 'antagonist' refers to opposing the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: lengthening of the muscle?",
    "options": [
      "agonist",
      "isokinetic",
      "synergist",
      "eccentric"
    ],
    "correctIdx": 3,
    "explanation": "The term 'eccentric' refers to lengthening of the muscle."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: constant speed of movement?",
    "options": [
      "synergist",
      "antagonist",
      "isokinetic",
      "eccentric"
    ],
    "correctIdx": 2,
    "explanation": "The term 'isokinetic' refers to constant speed of movement."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: no change in muscle length?",
    "options": [
      "synergist",
      "isokinetic",
      "agonist",
      "isometric"
    ],
    "correctIdx": 3,
    "explanation": "The term 'isometric' refers to no change in muscle length."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: the prime mover?",
    "options": [
      "concentric",
      "agonist",
      "eccentric",
      "synergist"
    ],
    "correctIdx": 1,
    "explanation": "The term 'agonist' refers to the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: lengthening of the muscle?",
    "options": [
      "agonist",
      "isokinetic",
      "synergist",
      "eccentric"
    ],
    "correctIdx": 3,
    "explanation": "The term 'eccentric' refers to lengthening of the muscle."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: no change in muscle length?",
    "options": [
      "synergist",
      "agonist",
      "antagonist",
      "isometric"
    ],
    "correctIdx": 3,
    "explanation": "The term 'isometric' refers to no change in muscle length."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: assisting the prime mover?",
    "options": [
      "synergist",
      "isokinetic",
      "eccentric",
      "agonist"
    ],
    "correctIdx": 0,
    "explanation": "The term 'synergist' refers to assisting the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: assisting the prime mover?",
    "options": [
      "concentric",
      "eccentric",
      "isometric",
      "synergist"
    ],
    "correctIdx": 3,
    "explanation": "The term 'synergist' refers to assisting the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: assisting the prime mover?",
    "options": [
      "agonist",
      "antagonist",
      "eccentric",
      "synergist"
    ],
    "correctIdx": 3,
    "explanation": "The term 'synergist' refers to assisting the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: constant speed of movement?",
    "options": [
      "isometric",
      "eccentric",
      "concentric",
      "isokinetic"
    ],
    "correctIdx": 3,
    "explanation": "The term 'isokinetic' refers to constant speed of movement."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: shortening of the muscle?",
    "options": [
      "eccentric",
      "isometric",
      "antagonist",
      "concentric"
    ],
    "correctIdx": 3,
    "explanation": "The term 'concentric' refers to shortening of the muscle."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "What is the normal range of motion (ROM) for Glenohumeral flexion?",
    "options": [
      "10 degrees",
      "180 degrees",
      "150 degrees",
      "90 degrees"
    ],
    "correctIdx": 1,
    "explanation": "Normal ROM for Glenohumeral flexion is approximately 180 degrees."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "What is the normal range of motion (ROM) for Glenohumeral extension?",
    "options": [
      "60 degrees",
      "10 degrees",
      "90 degrees",
      "45 degrees"
    ],
    "correctIdx": 0,
    "explanation": "Normal ROM for Glenohumeral extension is approximately 60 degrees."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "What is the normal range of motion (ROM) for Hip flexion?",
    "options": [
      "90 degrees",
      "10 degrees",
      "120 degrees",
      "150 degrees"
    ],
    "correctIdx": 2,
    "explanation": "Normal ROM for Hip flexion is approximately 120 degrees."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "What is the normal range of motion (ROM) for Hip extension?",
    "options": [
      "10 degrees",
      "45 degrees",
      "30 degrees",
      "90 degrees"
    ],
    "correctIdx": 2,
    "explanation": "Normal ROM for Hip extension is approximately 30 degrees."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "What is the normal range of motion (ROM) for Knee flexion?",
    "options": [
      "150 degrees",
      "90 degrees",
      "10 degrees",
      "135 degrees"
    ],
    "correctIdx": 3,
    "explanation": "Normal ROM for Knee flexion is approximately 135 degrees."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "What is the normal range of motion (ROM) for Ankle dorsiflexion?",
    "options": [
      "90 degrees",
      "20 degrees",
      "10 degrees",
      "45 degrees"
    ],
    "correctIdx": 1,
    "explanation": "Normal ROM for Ankle dorsiflexion is approximately 20 degrees."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "What is the normal range of motion (ROM) for Ankle plantar flexion?",
    "options": [
      "45 degrees",
      "50 degrees",
      "150 degrees",
      "90 degrees"
    ],
    "correctIdx": 1,
    "explanation": "Normal ROM for Ankle plantar flexion is approximately 50 degrees."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "What is the normal range of motion (ROM) for Cervical rotation?",
    "options": [
      "45 degrees",
      "80 degrees",
      "150 degrees",
      "90 degrees"
    ],
    "correctIdx": 1,
    "explanation": "Normal ROM for Cervical rotation is approximately 80 degrees."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Nervus medianus compression at the wrist?",
    "options": [
      "Sciatica",
      "Erb's Palsy",
      "Carpal Tunnel Syndrome",
      "Bell's Palsy"
    ],
    "correctIdx": 2,
    "explanation": "Carpal Tunnel Syndrome involves Nervus medianus compression at the wrist."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Nervus ulnaris compression at the elbow?",
    "options": [
      "Thoracic Outlet Syndrome",
      "Erb's Palsy",
      "Klumpke's Palsy",
      "Cubital Tunnel Syndrome"
    ],
    "correctIdx": 3,
    "explanation": "Cubital Tunnel Syndrome involves Nervus ulnaris compression at the elbow."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Nervus ischiadicus compression?",
    "options": [
      "Klumpke's Palsy",
      "Cubital Tunnel Syndrome",
      "Sciatica",
      "Carpal Tunnel Syndrome"
    ],
    "correctIdx": 2,
    "explanation": "Sciatica involves Nervus ischiadicus compression."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Plexus brachialis compression?",
    "options": [
      "Thoracic Outlet Syndrome",
      "Carpal Tunnel Syndrome",
      "Bell's Palsy",
      "Drop Foot"
    ],
    "correctIdx": 0,
    "explanation": "Thoracic Outlet Syndrome involves Plexus brachialis compression."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Nervus facialis paralysis?",
    "options": [
      "Bell's Palsy",
      "Thoracic Outlet Syndrome",
      "Cubital Tunnel Syndrome",
      "Klumpke's Palsy"
    ],
    "correctIdx": 0,
    "explanation": "Bell's Palsy involves Nervus facialis paralysis."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Nervus fibularis communis injury?",
    "options": [
      "Drop Foot",
      "Erb's Palsy",
      "Thoracic Outlet Syndrome",
      "Cubital Tunnel Syndrome"
    ],
    "correctIdx": 0,
    "explanation": "Drop Foot involves Nervus fibularis communis injury."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Upper Plexus brachialis injury (C5-C6)?",
    "options": [
      "Erb's Palsy",
      "Sciatica",
      "Drop Foot",
      "Cubital Tunnel Syndrome"
    ],
    "correctIdx": 0,
    "explanation": "Erb's Palsy involves Upper Plexus brachialis injury (C5-C6)."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Lower Plexus brachialis injury (C8-T1)?",
    "options": [
      "Thoracic Outlet Syndrome",
      "Erb's Palsy",
      "Cubital Tunnel Syndrome",
      "Klumpke's Palsy"
    ],
    "correctIdx": 3,
    "explanation": "Klumpke's Palsy involves Lower Plexus brachialis injury (C8-T1)."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the Lachman's Test primarily assess?",
    "options": [
      "Ligamentum cruciatum anterius (ACL)",
      "Nerve irritation",
      "Subacromial impingement",
      "Musculus iliopsoas tightness"
    ],
    "correctIdx": 0,
    "explanation": "The Lachman's Test assesses the Ligamentum cruciatum anterius (ACL)."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the McMurray's Test primarily assess?",
    "options": [
      "Musculus gluteus medius weakness",
      "Meniscus",
      "Subacromial impingement",
      "Musculus iliopsoas tightness"
    ],
    "correctIdx": 1,
    "explanation": "The McMurray's Test assesses the Meniscus."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the Empty Can Test primarily assess?",
    "options": [
      "Musculus iliopsoas tightness",
      "Subacromial impingement",
      "Ligamentum cruciatum anterius (ACL)",
      "Musculus supraspinatus"
    ],
    "correctIdx": 3,
    "explanation": "The Empty Can Test assesses the Musculus supraspinatus."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the Hawkins-Kennedy Test primarily assess?",
    "options": [
      "Subacromial impingement",
      "Nerve irritation",
      "Meniscus",
      "Nervus medianus (Carpal Tunnel)"
    ],
    "correctIdx": 0,
    "explanation": "The Hawkins-Kennedy Test assesses the Subacromial impingement."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the Phalen's Test primarily assess?",
    "options": [
      "Musculus gluteus medius weakness",
      "Ligamentum cruciatum anterius (ACL)",
      "Musculus iliopsoas tightness",
      "Nervus medianus (Carpal Tunnel)"
    ],
    "correctIdx": 3,
    "explanation": "The Phalen's Test assesses the Nervus medianus (Carpal Tunnel)."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the Tinel's Sign primarily assess?",
    "options": [
      "Musculus gluteus medius weakness",
      "Subacromial impingement",
      "Nerve irritation",
      "Musculus iliopsoas tightness"
    ],
    "correctIdx": 2,
    "explanation": "The Tinel's Sign assesses the Nerve irritation."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the Trendelenburg Test primarily assess?",
    "options": [
      "Musculus supraspinatus",
      "Subacromial impingement",
      "Nerve irritation",
      "Musculus gluteus medius weakness"
    ],
    "correctIdx": 3,
    "explanation": "The Trendelenburg Test assesses the Musculus gluteus medius weakness."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the Thomas Test primarily assess?",
    "options": [
      "Meniscus",
      "Ligamentum cruciatum anterius (ACL)",
      "Subacromial impingement",
      "Musculus iliopsoas tightness"
    ],
    "correctIdx": 3,
    "explanation": "The Thomas Test assesses the Musculus iliopsoas tightness."
  },
  {
    "type": "mcq",
    "topic": "Manual Techniques",
    "question": "Which massage technique is described as: Light, gliding strokes used to warm up tissue?",
    "options": [
      "Friction",
      "Effleurage",
      "Vibration",
      "Tapotement"
    ],
    "correctIdx": 1,
    "explanation": "Effleurage is defined as Light, gliding strokes used to warm up tissue."
  },
  {
    "type": "mcq",
    "topic": "Manual Techniques",
    "question": "Which massage technique is described as: Kneading and lifting of the tissue?",
    "options": [
      "Effleurage",
      "Petrissage",
      "Tapotement",
      "Friction"
    ],
    "correctIdx": 1,
    "explanation": "Petrissage is defined as Kneading and lifting of the tissue."
  },
  {
    "type": "mcq",
    "topic": "Manual Techniques",
    "question": "Which massage technique is described as: Deep, circular movements to break adhesions?",
    "options": [
      "Petrissage",
      "Vibration",
      "Tapotement",
      "Friction"
    ],
    "correctIdx": 3,
    "explanation": "Friction is defined as Deep, circular movements to break adhesions."
  },
  {
    "type": "mcq",
    "topic": "Manual Techniques",
    "question": "Which massage technique is described as: Rhythmic tapping or percussion?",
    "options": [
      "Friction",
      "Tapotement",
      "Petrissage",
      "Effleurage"
    ],
    "correctIdx": 1,
    "explanation": "Tapotement is defined as Rhythmic tapping or percussion."
  },
  {
    "type": "mcq",
    "topic": "Manual Techniques",
    "question": "Which massage technique is described as: Rapid shaking to stimulate nerves?",
    "options": [
      "Vibration",
      "Effleurage",
      "Friction",
      "Petrissage"
    ],
    "correctIdx": 0,
    "explanation": "Vibration is defined as Rapid shaking to stimulate nerves."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "palpation",
    "topic": "Manual Techniques",
    "question": "Palpate the area to find the active trigger point in the Musculus trapezius. Drag your finger to feel for the 'knot' (vibration).",
    "target": {
      "x": 70,
      "y": 37,
      "radius": 15
    },
    "explanation": "You found the trigger point in the Musculus trapezius!"
  },
  {
    "type": "palpation",
    "topic": "Manual Techniques",
    "question": "Palpate the area to find the active trigger point in the Musculus rhomboid major. Drag your finger to feel for the 'knot' (vibration).",
    "target": {
      "x": 49,
      "y": 44,
      "radius": 15
    },
    "explanation": "You found the trigger point in the Musculus rhomboid major!"
  },
  {
    "type": "palpation",
    "topic": "Manual Techniques",
    "question": "Palpate the area to find the active trigger point in the Musculus levator scapulae. Drag your finger to feel for the 'knot' (vibration).",
    "target": {
      "x": 40,
      "y": 25,
      "radius": 15
    },
    "explanation": "You found the trigger point in the Musculus levator scapulae!"
  },
  {
    "type": "palpation",
    "topic": "Manual Techniques",
    "question": "Palpate the area to find the active trigger point in the Musculus piriformis. Drag your finger to feel for the 'knot' (vibration).",
    "target": {
      "x": 76,
      "y": 59,
      "radius": 15
    },
    "explanation": "You found the trigger point in the Musculus piriformis!"
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"A 'pop' felt in the knee during a sudden change of direction, followed by rapid swelling and instability.\". Which sports injury should you immediately suspect?",
    "options": [
      "Hamstring Strain",
      "Medial Tibial Stress Syndrome (Shin Splints)",
      "Ligamentum cruciatum anterius (ACL) Tear",
      "Epicondylitis lateralis (Tennis Elbow)"
    ],
    "correctIdx": 2,
    "explanation": "These signs and symptoms are the hallmark presentation of Ligamentum cruciatum anterius (ACL) Tear."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "What is the most appropriate, evidence-based treatment and rehabilitation approach for Ligamentum cruciatum anterius (ACL) Tear?",
    "options": [
      "Acute: RICE protocol. Long term: Pre-hab/Rehab focusing on hamstrings and proprioception, or surgical reconstruction followed by 6-9 months of rehabilitation.",
      "Eccentric strengthening of the wrist extensors, counterforce bracing, and correcting sports technique (e.g., backhand in tennis).",
      "Rest, modifying footwear, biomechanical assessment, strengthening the tibialis anterior, and progressive loading.",
      "Load management (modifying activities) and heavy slow resistance (HSR) training or eccentric heel drops."
    ],
    "correctIdx": 0,
    "explanation": "For Ligamentum cruciatum anterius (ACL) Tear, the best approach involves: Acute: RICE protocol. Long term: Pre-hab/Rehab focusing on hamstrings and proprioception, or surgical reconstruction followed by 6-9 months of rehabilitation.."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Diffuse pain along the medial border of the tibia, worsening during or after running on hard surfaces.\". Which sports injury should you immediately suspect?",
    "options": [
      "Acromioclavicular (AC) Joint Sprain",
      "Epicondylitis lateralis (Tennis Elbow)",
      "Achilles Tendinopathy",
      "Medial Tibial Stress Syndrome (Shin Splints)"
    ],
    "correctIdx": 3,
    "explanation": "These signs and symptoms are the hallmark presentation of Medial Tibial Stress Syndrome (Shin Splints)."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "What is the most appropriate, evidence-based treatment and rehabilitation approach for Medial Tibial Stress Syndrome (Shin Splints)?",
    "options": [
      "Rest, modifying footwear, biomechanical assessment, strengthening the tibialis anterior, and progressive loading.",
      "Acute RICE. Subacute: isometric loading followed by eccentric strengthening (e.g., Nordic hamstring curls).",
      "Eccentric strengthening of the wrist extensors, counterforce bracing, and correcting sports technique (e.g., backhand in tennis).",
      "Strengthening the rotator cuff muscles (supraspinatus, infraspinatus, subscapularis, teres minor) and scapular retractors."
    ],
    "correctIdx": 0,
    "explanation": "For Medial Tibial Stress Syndrome (Shin Splints), the best approach involves: Rest, modifying footwear, biomechanical assessment, strengthening the tibialis anterior, and progressive loading.."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Pain over the lateral epicondyle radiating down the forearm, worsened by gripping and wrist extension.\". Which sports injury should you immediately suspect?",
    "options": [
      "Medial Tibial Stress Syndrome (Shin Splints)",
      "Epicondylitis lateralis (Tennis Elbow)",
      "Acromioclavicular (AC) Joint Sprain",
      "Ligamentum cruciatum anterius (ACL) Tear"
    ],
    "correctIdx": 1,
    "explanation": "These signs and symptoms are the hallmark presentation of Epicondylitis lateralis (Tennis Elbow)."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "What is the most appropriate, evidence-based treatment and rehabilitation approach for Epicondylitis lateralis (Tennis Elbow)?",
    "options": [
      "Acute RICE. Subacute: isometric loading followed by eccentric strengthening (e.g., Nordic hamstring curls).",
      "Rest, modifying footwear, biomechanical assessment, strengthening the tibialis anterior, and progressive loading.",
      "Eccentric strengthening of the wrist extensors, counterforce bracing, and correcting sports technique (e.g., backhand in tennis).",
      "Strengthening the hip abductors (gluteus medius) and modifying training loads."
    ],
    "correctIdx": 2,
    "explanation": "For Epicondylitis lateralis (Tennis Elbow), the best approach involves: Eccentric strengthening of the wrist extensors, counterforce bracing, and correcting sports technique (e.g., backhand in tennis).."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Sharp heel pain that is worst with the first steps in the morning or after prolonged sitting.\". Which sports injury should you immediately suspect?",
    "options": [
      "Achilles Tendinopathy",
      "Iliotibial (IT) Band Syndrome",
      "Epicondylitis lateralis (Tennis Elbow)",
      "Plantar Fasciitis"
    ],
    "correctIdx": 3,
    "explanation": "These signs and symptoms are the hallmark presentation of Plantar Fasciitis."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "What is the most appropriate, evidence-based treatment and rehabilitation approach for Plantar Fasciitis?",
    "options": [
      "Eccentric strengthening of the wrist extensors, counterforce bracing, and correcting sports technique (e.g., backhand in tennis).",
      "Acute: RICE protocol. Long term: Pre-hab/Rehab focusing on hamstrings and proprioception, or surgical reconstruction followed by 6-9 months of rehabilitation.",
      "Acute RICE. Subacute: isometric loading followed by eccentric strengthening (e.g., Nordic hamstring curls).",
      "Stretching the plantar fascia and calves, intrinsic foot muscle strengthening, taping, and orthotics."
    ],
    "correctIdx": 3,
    "explanation": "For Plantar Fasciitis, the best approach involves: Stretching the plantar fascia and calves, intrinsic foot muscle strengthening, taping, and orthotics.."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Stiffness and pain in the Achilles tendon, especially morning stiffness, often related to an increase in running volume.\". Which sports injury should you immediately suspect?",
    "options": [
      "Iliotibial (IT) Band Syndrome",
      "Achilles Tendinopathy",
      "Meniscus Tear",
      "Ligamentum cruciatum anterius (ACL) Tear"
    ],
    "correctIdx": 1,
    "explanation": "These signs and symptoms are the hallmark presentation of Achilles Tendinopathy."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "What is the most appropriate, evidence-based treatment and rehabilitation approach for Achilles Tendinopathy?",
    "options": [
      "Sling for acute pain relief, followed by progressive range of motion and scapular stabilization exercises.",
      "Rest, modifying footwear, biomechanical assessment, strengthening the tibialis anterior, and progressive loading.",
      "Load management (modifying activities) and heavy slow resistance (HSR) training or eccentric heel drops.",
      "Acute: RICE protocol. Long term: Pre-hab/Rehab focusing on hamstrings and proprioception, or surgical reconstruction followed by 6-9 months of rehabilitation."
    ],
    "correctIdx": 2,
    "explanation": "For Achilles Tendinopathy, the best approach involves: Load management (modifying activities) and heavy slow resistance (HSR) training or eccentric heel drops.."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Sharp lateral knee pain, especially prominent when running downhill or cycling.\". Which sports injury should you immediately suspect?",
    "options": [
      "Epicondylitis lateralis (Tennis Elbow)",
      "Iliotibial (IT) Band Syndrome",
      "Plantar Fasciitis",
      "Rotator Cuff Tendinopathy"
    ],
    "correctIdx": 1,
    "explanation": "These signs and symptoms are the hallmark presentation of Iliotibial (IT) Band Syndrome."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "What is the most appropriate, evidence-based treatment and rehabilitation approach for Iliotibial (IT) Band Syndrome?",
    "options": [
      "Acute RICE. Subacute: isometric loading followed by eccentric strengthening (e.g., Nordic hamstring curls).",
      "Strengthening the hip abductors (gluteus medius) and modifying training loads.",
      "Conservative management focusing on quadriceps strengthening and ROM. Surgery (meniscectomy or repair) if conservative fails or locking persists.",
      "Eccentric strengthening of the wrist extensors, counterforce bracing, and correcting sports technique (e.g., backhand in tennis)."
    ],
    "correctIdx": 1,
    "explanation": "For Iliotibial (IT) Band Syndrome, the best approach involves: Strengthening the hip abductors (gluteus medius) and modifying training loads.."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Pain at the top of the shoulder following a direct fall onto the tip of the shoulder (often in rugby or cycling).\". Which sports injury should you immediately suspect?",
    "options": [
      "Acromioclavicular (AC) Joint Sprain",
      "Medial Tibial Stress Syndrome (Shin Splints)",
      "Ligamentum cruciatum anterius (ACL) Tear",
      "Hamstring Strain"
    ],
    "correctIdx": 0,
    "explanation": "These signs and symptoms are the hallmark presentation of Acromioclavicular (AC) Joint Sprain."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "What is the most appropriate, evidence-based treatment and rehabilitation approach for Acromioclavicular (AC) Joint Sprain?",
    "options": [
      "Sling for acute pain relief, followed by progressive range of motion and scapular stabilization exercises.",
      "Strengthening the hip abductors (gluteus medius) and modifying training loads.",
      "Conservative management focusing on quadriceps strengthening and ROM. Surgery (meniscectomy or repair) if conservative fails or locking persists.",
      "Acute RICE. Subacute: isometric loading followed by eccentric strengthening (e.g., Nordic hamstring curls)."
    ],
    "correctIdx": 0,
    "explanation": "For Acromioclavicular (AC) Joint Sprain, the best approach involves: Sling for acute pain relief, followed by progressive range of motion and scapular stabilization exercises.."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Sudden sharp pain in the back of the thigh during high-speed sprinting.\". Which sports injury should you immediately suspect?",
    "options": [
      "Hamstring Strain",
      "Iliotibial (IT) Band Syndrome",
      "Plantar Fasciitis",
      "Meniscus Tear"
    ],
    "correctIdx": 0,
    "explanation": "These signs and symptoms are the hallmark presentation of Hamstring Strain."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "What is the most appropriate, evidence-based treatment and rehabilitation approach for Hamstring Strain?",
    "options": [
      "Acute RICE. Subacute: isometric loading followed by eccentric strengthening (e.g., Nordic hamstring curls).",
      "Eccentric strengthening of the wrist extensors, counterforce bracing, and correcting sports technique (e.g., backhand in tennis).",
      "Rest, modifying footwear, biomechanical assessment, strengthening the tibialis anterior, and progressive loading.",
      "Conservative management focusing on quadriceps strengthening and ROM. Surgery (meniscectomy or repair) if conservative fails or locking persists."
    ],
    "correctIdx": 0,
    "explanation": "For Hamstring Strain, the best approach involves: Acute RICE. Subacute: isometric loading followed by eccentric strengthening (e.g., Nordic hamstring curls).."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Knee catching, locking, and joint line tenderness, often after a twisting injury with a planted foot.\". Which sports injury should you immediately suspect?",
    "options": [
      "Rotator Cuff Tendinopathy",
      "Ligamentum cruciatum anterius (ACL) Tear",
      "Meniscus Tear",
      "Plantar Fasciitis"
    ],
    "correctIdx": 2,
    "explanation": "These signs and symptoms are the hallmark presentation of Meniscus Tear."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "What is the most appropriate, evidence-based treatment and rehabilitation approach for Meniscus Tear?",
    "options": [
      "Rest, modifying footwear, biomechanical assessment, strengthening the tibialis anterior, and progressive loading.",
      "Acute: RICE protocol. Long term: Pre-hab/Rehab focusing on hamstrings and proprioception, or surgical reconstruction followed by 6-9 months of rehabilitation.",
      "Acute RICE. Subacute: isometric loading followed by eccentric strengthening (e.g., Nordic hamstring curls).",
      "Conservative management focusing on quadriceps strengthening and ROM. Surgery (meniscectomy or repair) if conservative fails or locking persists."
    ],
    "correctIdx": 3,
    "explanation": "For Meniscus Tear, the best approach involves: Conservative management focusing on quadriceps strengthening and ROM. Surgery (meniscectomy or repair) if conservative fails or locking persists.."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Shoulder pain exacerbated by overhead activities (throwing, swimming) and a painful arc between 60-120 degrees of abduction.\". Which sports injury should you immediately suspect?",
    "options": [
      "Rotator Cuff Tendinopathy",
      "Plantar Fasciitis",
      "Epicondylitis lateralis (Tennis Elbow)",
      "Hamstring Strain"
    ],
    "correctIdx": 0,
    "explanation": "These signs and symptoms are the hallmark presentation of Rotator Cuff Tendinopathy."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "What is the most appropriate, evidence-based treatment and rehabilitation approach for Rotator Cuff Tendinopathy?",
    "options": [
      "Acute RICE. Subacute: isometric loading followed by eccentric strengthening (e.g., Nordic hamstring curls).",
      "Sling for acute pain relief, followed by progressive range of motion and scapular stabilization exercises.",
      "Strengthening the rotator cuff muscles (supraspinatus, infraspinatus, subscapularis, teres minor) and scapular retractors.",
      "Acute: RICE protocol. Long term: Pre-hab/Rehab focusing on hamstrings and proprioception, or surgical reconstruction followed by 6-9 months of rehabilitation."
    ],
    "correctIdx": 2,
    "explanation": "For Rotator Cuff Tendinopathy, the best approach involves: Strengthening the rotator cuff muscles (supraspinatus, infraspinatus, subscapularis, teres minor) and scapular retractors.."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "What is a known origin point of the Musculus gracilis?",
    "options": [
      "Os pubis",
      "Femur",
      "Scapula",
      "Ramus inferior ossis pubis"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus gracilis originates at the Ramus inferior ossis pubis."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "What is a known origin point of the Musculus brachioradialis?",
    "options": [
      "Os pubis",
      "Margo lateralis humeri",
      "Scapula",
      "Femur"
    ],
    "correctIdx": 1,
    "explanation": "The Musculus brachioradialis originates at the Margo lateralis humeri."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "What is a known origin point of the Musculus supraspinatus?",
    "options": [
      "Femur",
      "Scapula",
      "Os pubis",
      "Fossa supraspinata"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus supraspinatus originates at the Fossa supraspinata."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "What is a known origin point of the Musculus gastrocnemius?",
    "options": [
      "Condyli femoris",
      "Os pubis",
      "Scapula",
      "Femur"
    ],
    "correctIdx": 0,
    "explanation": "The Musculus gastrocnemius originates at the Condyli femoris."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "What is a known origin point of the Musculus infraspinatus?",
    "options": [
      "Os pubis",
      "Scapula",
      "Fossa infraspinata",
      "Femur"
    ],
    "correctIdx": 2,
    "explanation": "The Musculus infraspinatus originates at the Fossa infraspinata."
  },
  {
    "type": "mcq",
    "topic": "Anatomy",
    "question": "What is a known origin point of the Musculus rectus femoris?",
    "options": [
      "Femur",
      "Os pubis",
      "Scapula",
      "Spina iliaca anterior inferior"
    ],
    "correctIdx": 3,
    "explanation": "The Musculus rectus femoris originates at the Spina iliaca anterior inferior."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: the prime mover?",
    "options": [
      "concentric",
      "agonist",
      "eccentric",
      "synergist"
    ],
    "correctIdx": 1,
    "explanation": "The term 'agonist' refers to the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: assisting the prime mover?",
    "options": [
      "isometric",
      "synergist",
      "concentric",
      "eccentric"
    ],
    "correctIdx": 1,
    "explanation": "The term 'synergist' refers to assisting the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: the prime mover?",
    "options": [
      "concentric",
      "agonist",
      "eccentric",
      "synergist"
    ],
    "correctIdx": 1,
    "explanation": "The term 'agonist' refers to the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: the prime mover?",
    "options": [
      "concentric",
      "agonist",
      "eccentric",
      "synergist"
    ],
    "correctIdx": 1,
    "explanation": "The term 'agonist' refers to the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: the prime mover?",
    "options": [
      "concentric",
      "agonist",
      "eccentric",
      "synergist"
    ],
    "correctIdx": 1,
    "explanation": "The term 'agonist' refers to the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: no change in muscle length?",
    "options": [
      "isometric",
      "synergist",
      "concentric",
      "antagonist"
    ],
    "correctIdx": 0,
    "explanation": "The term 'isometric' refers to no change in muscle length."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "What is the normal range of motion (ROM) for Ankle plantar flexion?",
    "options": [
      "45 degrees",
      "50 degrees",
      "150 degrees",
      "90 degrees"
    ],
    "correctIdx": 1,
    "explanation": "Normal ROM for Ankle plantar flexion is approximately 50 degrees."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: assisting the prime mover?",
    "options": [
      "isometric",
      "synergist",
      "concentric",
      "eccentric"
    ],
    "correctIdx": 1,
    "explanation": "The term 'synergist' refers to assisting the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: the prime mover?",
    "options": [
      "concentric",
      "agonist",
      "eccentric",
      "synergist"
    ],
    "correctIdx": 1,
    "explanation": "The term 'agonist' refers to the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: the prime mover?",
    "options": [
      "concentric",
      "agonist",
      "eccentric",
      "synergist"
    ],
    "correctIdx": 1,
    "explanation": "The term 'agonist' refers to the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: assisting the prime mover?",
    "options": [
      "agonist",
      "antagonist",
      "eccentric",
      "synergist"
    ],
    "correctIdx": 3,
    "explanation": "The term 'synergist' refers to assisting the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "What is the normal range of motion (ROM) for Hip extension?",
    "options": [
      "10 degrees",
      "45 degrees",
      "30 degrees",
      "90 degrees"
    ],
    "correctIdx": 2,
    "explanation": "Normal ROM for Hip extension is approximately 30 degrees."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "What is the normal range of motion (ROM) for Glenohumeral extension?",
    "options": [
      "60 degrees",
      "10 degrees",
      "90 degrees",
      "45 degrees"
    ],
    "correctIdx": 0,
    "explanation": "Normal ROM for Glenohumeral extension is approximately 60 degrees."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: assisting the prime mover?",
    "options": [
      "isometric",
      "synergist",
      "concentric",
      "eccentric"
    ],
    "correctIdx": 1,
    "explanation": "The term 'synergist' refers to assisting the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: assisting the prime mover?",
    "options": [
      "isometric",
      "synergist",
      "concentric",
      "eccentric"
    ],
    "correctIdx": 1,
    "explanation": "The term 'synergist' refers to assisting the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "What is the normal range of motion (ROM) for Cervical rotation?",
    "options": [
      "45 degrees",
      "80 degrees",
      "150 degrees",
      "90 degrees"
    ],
    "correctIdx": 1,
    "explanation": "Normal ROM for Cervical rotation is approximately 80 degrees."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: the prime mover?",
    "options": [
      "concentric",
      "agonist",
      "eccentric",
      "synergist"
    ],
    "correctIdx": 1,
    "explanation": "The term 'agonist' refers to the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: assisting the prime mover?",
    "options": [
      "isometric",
      "synergist",
      "concentric",
      "eccentric"
    ],
    "correctIdx": 1,
    "explanation": "The term 'synergist' refers to assisting the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: assisting the prime mover?",
    "options": [
      "agonist",
      "antagonist",
      "eccentric",
      "synergist"
    ],
    "correctIdx": 3,
    "explanation": "The term 'synergist' refers to assisting the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: assisting the prime mover?",
    "options": [
      "synergist",
      "isokinetic",
      "eccentric",
      "agonist"
    ],
    "correctIdx": 0,
    "explanation": "The term 'synergist' refers to assisting the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: opposing the prime mover?",
    "options": [
      "isokinetic",
      "antagonist",
      "agonist",
      "synergist"
    ],
    "correctIdx": 1,
    "explanation": "The term 'antagonist' refers to opposing the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: the prime mover?",
    "options": [
      "concentric",
      "agonist",
      "eccentric",
      "synergist"
    ],
    "correctIdx": 1,
    "explanation": "The term 'agonist' refers to the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: assisting the prime mover?",
    "options": [
      "isometric",
      "synergist",
      "concentric",
      "eccentric"
    ],
    "correctIdx": 1,
    "explanation": "The term 'synergist' refers to assisting the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: opposing the prime mover?",
    "options": [
      "isokinetic",
      "antagonist",
      "agonist",
      "synergist"
    ],
    "correctIdx": 1,
    "explanation": "The term 'antagonist' refers to opposing the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: assisting the prime mover?",
    "options": [
      "concentric",
      "eccentric",
      "isometric",
      "synergist"
    ],
    "correctIdx": 3,
    "explanation": "The term 'synergist' refers to assisting the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: opposing the prime mover?",
    "options": [
      "isokinetic",
      "antagonist",
      "agonist",
      "synergist"
    ],
    "correctIdx": 1,
    "explanation": "The term 'antagonist' refers to opposing the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Kinesiology",
    "question": "Which term is defined as: assisting the prime mover?",
    "options": [
      "isometric",
      "synergist",
      "concentric",
      "eccentric"
    ],
    "correctIdx": 1,
    "explanation": "The term 'synergist' refers to assisting the prime mover."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Nervus ulnaris compression at the elbow?",
    "options": [
      "Thoracic Outlet Syndrome",
      "Erb's Palsy",
      "Klumpke's Palsy",
      "Cubital Tunnel Syndrome"
    ],
    "correctIdx": 3,
    "explanation": "Cubital Tunnel Syndrome involves Nervus ulnaris compression at the elbow."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Nervus ulnaris compression at the elbow?",
    "options": [
      "Thoracic Outlet Syndrome",
      "Erb's Palsy",
      "Klumpke's Palsy",
      "Cubital Tunnel Syndrome"
    ],
    "correctIdx": 3,
    "explanation": "Cubital Tunnel Syndrome involves Nervus ulnaris compression at the elbow."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the Tinel's Sign primarily assess?",
    "options": [
      "Musculus gluteus medius weakness",
      "Subacromial impingement",
      "Nerve irritation",
      "Musculus iliopsoas tightness"
    ],
    "correctIdx": 2,
    "explanation": "The Tinel's Sign assesses the Nerve irritation."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the Phalen's Test primarily assess?",
    "options": [
      "Musculus gluteus medius weakness",
      "Ligamentum cruciatum anterius (ACL)",
      "Musculus iliopsoas tightness",
      "Nervus medianus (Carpal Tunnel)"
    ],
    "correctIdx": 3,
    "explanation": "The Phalen's Test assesses the Nervus medianus (Carpal Tunnel)."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Nervus ischiadicus compression?",
    "options": [
      "Klumpke's Palsy",
      "Cubital Tunnel Syndrome",
      "Sciatica",
      "Carpal Tunnel Syndrome"
    ],
    "correctIdx": 2,
    "explanation": "Sciatica involves Nervus ischiadicus compression."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the McMurray's Test primarily assess?",
    "options": [
      "Musculus gluteus medius weakness",
      "Meniscus",
      "Subacromial impingement",
      "Musculus iliopsoas tightness"
    ],
    "correctIdx": 1,
    "explanation": "The McMurray's Test assesses the Meniscus."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the Phalen's Test primarily assess?",
    "options": [
      "Musculus gluteus medius weakness",
      "Ligamentum cruciatum anterius (ACL)",
      "Musculus iliopsoas tightness",
      "Nervus medianus (Carpal Tunnel)"
    ],
    "correctIdx": 3,
    "explanation": "The Phalen's Test assesses the Nervus medianus (Carpal Tunnel)."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Nervus facialis paralysis?",
    "options": [
      "Bell's Palsy",
      "Thoracic Outlet Syndrome",
      "Cubital Tunnel Syndrome",
      "Klumpke's Palsy"
    ],
    "correctIdx": 0,
    "explanation": "Bell's Palsy involves Nervus facialis paralysis."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Lower Plexus brachialis injury (C8-T1)?",
    "options": [
      "Thoracic Outlet Syndrome",
      "Erb's Palsy",
      "Cubital Tunnel Syndrome",
      "Klumpke's Palsy"
    ],
    "correctIdx": 3,
    "explanation": "Klumpke's Palsy involves Lower Plexus brachialis injury (C8-T1)."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the Empty Can Test primarily assess?",
    "options": [
      "Musculus iliopsoas tightness",
      "Subacromial impingement",
      "Ligamentum cruciatum anterius (ACL)",
      "Musculus supraspinatus"
    ],
    "correctIdx": 3,
    "explanation": "The Empty Can Test assesses the Musculus supraspinatus."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Nervus facialis paralysis?",
    "options": [
      "Bell's Palsy",
      "Thoracic Outlet Syndrome",
      "Cubital Tunnel Syndrome",
      "Klumpke's Palsy"
    ],
    "correctIdx": 0,
    "explanation": "Bell's Palsy involves Nervus facialis paralysis."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Nervus facialis paralysis?",
    "options": [
      "Bell's Palsy",
      "Thoracic Outlet Syndrome",
      "Cubital Tunnel Syndrome",
      "Klumpke's Palsy"
    ],
    "correctIdx": 0,
    "explanation": "Bell's Palsy involves Nervus facialis paralysis."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Lower Plexus brachialis injury (C8-T1)?",
    "options": [
      "Thoracic Outlet Syndrome",
      "Erb's Palsy",
      "Cubital Tunnel Syndrome",
      "Klumpke's Palsy"
    ],
    "correctIdx": 3,
    "explanation": "Klumpke's Palsy involves Lower Plexus brachialis injury (C8-T1)."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the McMurray's Test primarily assess?",
    "options": [
      "Musculus gluteus medius weakness",
      "Meniscus",
      "Subacromial impingement",
      "Musculus iliopsoas tightness"
    ],
    "correctIdx": 1,
    "explanation": "The McMurray's Test assesses the Meniscus."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Nervus facialis paralysis?",
    "options": [
      "Bell's Palsy",
      "Thoracic Outlet Syndrome",
      "Cubital Tunnel Syndrome",
      "Klumpke's Palsy"
    ],
    "correctIdx": 0,
    "explanation": "Bell's Palsy involves Nervus facialis paralysis."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Lower Plexus brachialis injury (C8-T1)?",
    "options": [
      "Thoracic Outlet Syndrome",
      "Erb's Palsy",
      "Cubital Tunnel Syndrome",
      "Klumpke's Palsy"
    ],
    "correctIdx": 3,
    "explanation": "Klumpke's Palsy involves Lower Plexus brachialis injury (C8-T1)."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the Empty Can Test primarily assess?",
    "options": [
      "Musculus iliopsoas tightness",
      "Subacromial impingement",
      "Ligamentum cruciatum anterius (ACL)",
      "Musculus supraspinatus"
    ],
    "correctIdx": 3,
    "explanation": "The Empty Can Test assesses the Musculus supraspinatus."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the Lachman's Test primarily assess?",
    "options": [
      "Ligamentum cruciatum anterius (ACL)",
      "Nerve irritation",
      "Subacromial impingement",
      "Musculus iliopsoas tightness"
    ],
    "correctIdx": 0,
    "explanation": "The Lachman's Test assesses the Ligamentum cruciatum anterius (ACL)."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the McMurray's Test primarily assess?",
    "options": [
      "Musculus gluteus medius weakness",
      "Meniscus",
      "Subacromial impingement",
      "Musculus iliopsoas tightness"
    ],
    "correctIdx": 1,
    "explanation": "The McMurray's Test assesses the Meniscus."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the Empty Can Test primarily assess?",
    "options": [
      "Musculus iliopsoas tightness",
      "Subacromial impingement",
      "Ligamentum cruciatum anterius (ACL)",
      "Musculus supraspinatus"
    ],
    "correctIdx": 3,
    "explanation": "The Empty Can Test assesses the Musculus supraspinatus."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the Empty Can Test primarily assess?",
    "options": [
      "Musculus iliopsoas tightness",
      "Subacromial impingement",
      "Ligamentum cruciatum anterius (ACL)",
      "Musculus supraspinatus"
    ],
    "correctIdx": 3,
    "explanation": "The Empty Can Test assesses the Musculus supraspinatus."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the Empty Can Test primarily assess?",
    "options": [
      "Musculus iliopsoas tightness",
      "Subacromial impingement",
      "Ligamentum cruciatum anterius (ACL)",
      "Musculus supraspinatus"
    ],
    "correctIdx": 3,
    "explanation": "The Empty Can Test assesses the Musculus supraspinatus."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the Empty Can Test primarily assess?",
    "options": [
      "Musculus iliopsoas tightness",
      "Subacromial impingement",
      "Ligamentum cruciatum anterius (ACL)",
      "Musculus supraspinatus"
    ],
    "correctIdx": 3,
    "explanation": "The Empty Can Test assesses the Musculus supraspinatus."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Nervus fibularis communis injury?",
    "options": [
      "Drop Foot",
      "Erb's Palsy",
      "Thoracic Outlet Syndrome",
      "Cubital Tunnel Syndrome"
    ],
    "correctIdx": 0,
    "explanation": "Drop Foot involves Nervus fibularis communis injury."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the Tinel's Sign primarily assess?",
    "options": [
      "Musculus gluteus medius weakness",
      "Subacromial impingement",
      "Nerve irritation",
      "Musculus iliopsoas tightness"
    ],
    "correctIdx": 2,
    "explanation": "The Tinel's Sign assesses the Nerve irritation."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the Trendelenburg Test primarily assess?",
    "options": [
      "Musculus supraspinatus",
      "Subacromial impingement",
      "Nerve irritation",
      "Musculus gluteus medius weakness"
    ],
    "correctIdx": 3,
    "explanation": "The Trendelenburg Test assesses the Musculus gluteus medius weakness."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Lower Plexus brachialis injury (C8-T1)?",
    "options": [
      "Thoracic Outlet Syndrome",
      "Erb's Palsy",
      "Cubital Tunnel Syndrome",
      "Klumpke's Palsy"
    ],
    "correctIdx": 3,
    "explanation": "Klumpke's Palsy involves Lower Plexus brachialis injury (C8-T1)."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the Empty Can Test primarily assess?",
    "options": [
      "Musculus iliopsoas tightness",
      "Subacromial impingement",
      "Ligamentum cruciatum anterius (ACL)",
      "Musculus supraspinatus"
    ],
    "correctIdx": 3,
    "explanation": "The Empty Can Test assesses the Musculus supraspinatus."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Lower Plexus brachialis injury (C8-T1)?",
    "options": [
      "Thoracic Outlet Syndrome",
      "Erb's Palsy",
      "Cubital Tunnel Syndrome",
      "Klumpke's Palsy"
    ],
    "correctIdx": 3,
    "explanation": "Klumpke's Palsy involves Lower Plexus brachialis injury (C8-T1)."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Nervus medianus compression at the wrist?",
    "options": [
      "Sciatica",
      "Erb's Palsy",
      "Carpal Tunnel Syndrome",
      "Bell's Palsy"
    ],
    "correctIdx": 2,
    "explanation": "Carpal Tunnel Syndrome involves Nervus medianus compression at the wrist."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Nervus medianus compression at the wrist?",
    "options": [
      "Sciatica",
      "Erb's Palsy",
      "Carpal Tunnel Syndrome",
      "Bell's Palsy"
    ],
    "correctIdx": 2,
    "explanation": "Carpal Tunnel Syndrome involves Nervus medianus compression at the wrist."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the Hawkins-Kennedy Test primarily assess?",
    "options": [
      "Subacromial impingement",
      "Nerve irritation",
      "Meniscus",
      "Nervus medianus (Carpal Tunnel)"
    ],
    "correctIdx": 0,
    "explanation": "The Hawkins-Kennedy Test assesses the Subacromial impingement."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "Which condition is characterized by Nervus fibularis communis injury?",
    "options": [
      "Drop Foot",
      "Erb's Palsy",
      "Thoracic Outlet Syndrome",
      "Cubital Tunnel Syndrome"
    ],
    "correctIdx": 0,
    "explanation": "Drop Foot involves Nervus fibularis communis injury."
  },
  {
    "type": "mcq",
    "topic": "Pathology",
    "question": "What structure or condition does the McMurray's Test primarily assess?",
    "options": [
      "Musculus gluteus medius weakness",
      "Meniscus",
      "Subacromial impingement",
      "Musculus iliopsoas tightness"
    ],
    "correctIdx": 1,
    "explanation": "The McMurray's Test assesses the Meniscus."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "mcq",
    "topic": "Manual Techniques",
    "question": "Which massage technique is described as: Kneading and lifting of the tissue?",
    "options": [
      "Effleurage",
      "Petrissage",
      "Tapotement",
      "Friction"
    ],
    "correctIdx": 1,
    "explanation": "Petrissage is defined as Kneading and lifting of the tissue."
  },
  {
    "type": "palpation",
    "topic": "Manual Techniques",
    "question": "Palpate the area to find the active trigger point in the Musculus rhomboid major. Drag your finger to feel for the 'knot' (vibration).",
    "target": {
      "x": 49,
      "y": 44,
      "radius": 15
    },
    "explanation": "You found the trigger point in the Musculus rhomboid major!"
  },
  {
    "type": "palpation",
    "topic": "Manual Techniques",
    "question": "Palpate the area to find the active trigger point in the Musculus piriformis. Drag your finger to feel for the 'knot' (vibration).",
    "target": {
      "x": 76,
      "y": 59,
      "radius": 15
    },
    "explanation": "You found the trigger point in the Musculus piriformis!"
  },
  {
    "type": "mcq",
    "topic": "Manual Techniques",
    "question": "Which massage technique is described as: Deep, circular movements to break adhesions?",
    "options": [
      "Petrissage",
      "Vibration",
      "Tapotement",
      "Friction"
    ],
    "correctIdx": 3,
    "explanation": "Friction is defined as Deep, circular movements to break adhesions."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "palpation",
    "topic": "Manual Techniques",
    "question": "Palpate the area to find the active trigger point in the Musculus trapezius. Drag your finger to feel for the 'knot' (vibration).",
    "target": {
      "x": 70,
      "y": 37,
      "radius": 15
    },
    "explanation": "You found the trigger point in the Musculus trapezius!"
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "mcq",
    "topic": "Manual Techniques",
    "question": "Which massage technique is described as: Kneading and lifting of the tissue?",
    "options": [
      "Effleurage",
      "Petrissage",
      "Tapotement",
      "Friction"
    ],
    "correctIdx": 1,
    "explanation": "Petrissage is defined as Kneading and lifting of the tissue."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "palpation",
    "topic": "Manual Techniques",
    "question": "Palpate the area to find the active trigger point in the Musculus piriformis. Drag your finger to feel for the 'knot' (vibration).",
    "target": {
      "x": 76,
      "y": 59,
      "radius": 15
    },
    "explanation": "You found the trigger point in the Musculus piriformis!"
  },
  {
    "type": "palpation",
    "topic": "Manual Techniques",
    "question": "Palpate the area to find the active trigger point in the Musculus piriformis. Drag your finger to feel for the 'knot' (vibration).",
    "target": {
      "x": 76,
      "y": 59,
      "radius": 15
    },
    "explanation": "You found the trigger point in the Musculus piriformis!"
  },
  {
    "type": "palpation",
    "topic": "Manual Techniques",
    "question": "Palpate the area to find the active trigger point in the Musculus rhomboid major. Drag your finger to feel for the 'knot' (vibration).",
    "target": {
      "x": 49,
      "y": 44,
      "radius": 15
    },
    "explanation": "You found the trigger point in the Musculus rhomboid major!"
  },
  {
    "type": "palpation",
    "topic": "Manual Techniques",
    "question": "Palpate the area to find the active trigger point in the Musculus piriformis. Drag your finger to feel for the 'knot' (vibration).",
    "target": {
      "x": 76,
      "y": 59,
      "radius": 15
    },
    "explanation": "You found the trigger point in the Musculus piriformis!"
  },
  {
    "type": "palpation",
    "topic": "Manual Techniques",
    "question": "Palpate the area to find the active trigger point in the Musculus rhomboid major. Drag your finger to feel for the 'knot' (vibration).",
    "target": {
      "x": 49,
      "y": 44,
      "radius": 15
    },
    "explanation": "You found the trigger point in the Musculus rhomboid major!"
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "mcq",
    "topic": "Manual Techniques",
    "question": "Which massage technique is described as: Rapid shaking to stimulate nerves?",
    "options": [
      "Vibration",
      "Effleurage",
      "Friction",
      "Petrissage"
    ],
    "correctIdx": 0,
    "explanation": "Vibration is defined as Rapid shaking to stimulate nerves."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "sequence",
    "topic": "Manual Techniques",
    "question": "Order the stages of a standard Swedish massage.",
    "items": [
      {
        "id": "1",
        "text": "Effleurage (Warming up)"
      },
      {
        "id": "2",
        "text": "Petrissage (Kneading)"
      },
      {
        "id": "3",
        "text": "Friction (Deep work)"
      },
      {
        "id": "4",
        "text": "Effleurage (Flushing)"
      }
    ],
    "explanation": "Start superficial, go deep, then flush the area."
  },
  {
    "type": "palpation",
    "topic": "Manual Techniques",
    "question": "Palpate the area to find the active trigger point in the Musculus piriformis. Drag your finger to feel for the 'knot' (vibration).",
    "target": {
      "x": 76,
      "y": 59,
      "radius": 15
    },
    "explanation": "You found the trigger point in the Musculus piriformis!"
  },
  {
    "type": "palpation",
    "topic": "Manual Techniques",
    "question": "Palpate the area to find the active trigger point in the Musculus rhomboid major. Drag your finger to feel for the 'knot' (vibration).",
    "target": {
      "x": 49,
      "y": 44,
      "radius": 15
    },
    "explanation": "You found the trigger point in the Musculus rhomboid major!"
  },
  {
    "type": "mcq",
    "topic": "Manual Techniques",
    "question": "Which massage technique is described as: Rapid shaking to stimulate nerves?",
    "options": [
      "Vibration",
      "Effleurage",
      "Friction",
      "Petrissage"
    ],
    "correctIdx": 0,
    "explanation": "Vibration is defined as Rapid shaking to stimulate nerves."
  },
  {
    "type": "palpation",
    "topic": "Manual Techniques",
    "question": "Palpate the area to find the active trigger point in the Musculus piriformis. Drag your finger to feel for the 'knot' (vibration).",
    "target": {
      "x": 76,
      "y": 59,
      "radius": 15
    },
    "explanation": "You found the trigger point in the Musculus piriformis!"
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "What is the most appropriate, evidence-based treatment and rehabilitation approach for Acromioclavicular (AC) Joint Sprain?",
    "options": [
      "Sling for acute pain relief, followed by progressive range of motion and scapular stabilization exercises.",
      "Strengthening the hip abductors (gluteus medius) and modifying training loads.",
      "Conservative management focusing on quadriceps strengthening and ROM. Surgery (meniscectomy or repair) if conservative fails or locking persists.",
      "Acute RICE. Subacute: isometric loading followed by eccentric strengthening (e.g., Nordic hamstring curls)."
    ],
    "correctIdx": 0,
    "explanation": "For Acromioclavicular (AC) Joint Sprain, the best approach involves: Sling for acute pain relief, followed by progressive range of motion and scapular stabilization exercises.."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Knee catching, locking, and joint line tenderness, often after a twisting injury with a planted foot.\". Which sports injury should you immediately suspect?",
    "options": [
      "Rotator Cuff Tendinopathy",
      "Ligamentum cruciatum anterius (ACL) Tear",
      "Meniscus Tear",
      "Plantar Fasciitis"
    ],
    "correctIdx": 2,
    "explanation": "These signs and symptoms are the hallmark presentation of Meniscus Tear."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Stiffness and pain in the Achilles tendon, especially morning stiffness, often related to an increase in running volume.\". Which sports injury should you immediately suspect?",
    "options": [
      "Iliotibial (IT) Band Syndrome",
      "Achilles Tendinopathy",
      "Meniscus Tear",
      "Ligamentum cruciatum anterius (ACL) Tear"
    ],
    "correctIdx": 1,
    "explanation": "These signs and symptoms are the hallmark presentation of Achilles Tendinopathy."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Sharp heel pain that is worst with the first steps in the morning or after prolonged sitting.\". Which sports injury should you immediately suspect?",
    "options": [
      "Achilles Tendinopathy",
      "Iliotibial (IT) Band Syndrome",
      "Epicondylitis lateralis (Tennis Elbow)",
      "Plantar Fasciitis"
    ],
    "correctIdx": 3,
    "explanation": "These signs and symptoms are the hallmark presentation of Plantar Fasciitis."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Shoulder pain exacerbated by overhead activities (throwing, swimming) and a painful arc between 60-120 degrees of abduction.\". Which sports injury should you immediately suspect?",
    "options": [
      "Rotator Cuff Tendinopathy",
      "Plantar Fasciitis",
      "Epicondylitis lateralis (Tennis Elbow)",
      "Hamstring Strain"
    ],
    "correctIdx": 0,
    "explanation": "These signs and symptoms are the hallmark presentation of Rotator Cuff Tendinopathy."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Shoulder pain exacerbated by overhead activities (throwing, swimming) and a painful arc between 60-120 degrees of abduction.\". Which sports injury should you immediately suspect?",
    "options": [
      "Rotator Cuff Tendinopathy",
      "Plantar Fasciitis",
      "Epicondylitis lateralis (Tennis Elbow)",
      "Hamstring Strain"
    ],
    "correctIdx": 0,
    "explanation": "These signs and symptoms are the hallmark presentation of Rotator Cuff Tendinopathy."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "What is the most appropriate, evidence-based treatment and rehabilitation approach for Iliotibial (IT) Band Syndrome?",
    "options": [
      "Acute RICE. Subacute: isometric loading followed by eccentric strengthening (e.g., Nordic hamstring curls).",
      "Strengthening the hip abductors (gluteus medius) and modifying training loads.",
      "Conservative management focusing on quadriceps strengthening and ROM. Surgery (meniscectomy or repair) if conservative fails or locking persists.",
      "Eccentric strengthening of the wrist extensors, counterforce bracing, and correcting sports technique (e.g., backhand in tennis)."
    ],
    "correctIdx": 1,
    "explanation": "For Iliotibial (IT) Band Syndrome, the best approach involves: Strengthening the hip abductors (gluteus medius) and modifying training loads.."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Knee catching, locking, and joint line tenderness, often after a twisting injury with a planted foot.\". Which sports injury should you immediately suspect?",
    "options": [
      "Rotator Cuff Tendinopathy",
      "Ligamentum cruciatum anterius (ACL) Tear",
      "Meniscus Tear",
      "Plantar Fasciitis"
    ],
    "correctIdx": 2,
    "explanation": "These signs and symptoms are the hallmark presentation of Meniscus Tear."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Pain over the lateral epicondyle radiating down the forearm, worsened by gripping and wrist extension.\". Which sports injury should you immediately suspect?",
    "options": [
      "Medial Tibial Stress Syndrome (Shin Splints)",
      "Epicondylitis lateralis (Tennis Elbow)",
      "Acromioclavicular (AC) Joint Sprain",
      "Ligamentum cruciatum anterius (ACL) Tear"
    ],
    "correctIdx": 1,
    "explanation": "These signs and symptoms are the hallmark presentation of Epicondylitis lateralis (Tennis Elbow)."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Sudden sharp pain in the back of the thigh during high-speed sprinting.\". Which sports injury should you immediately suspect?",
    "options": [
      "Hamstring Strain",
      "Iliotibial (IT) Band Syndrome",
      "Plantar Fasciitis",
      "Meniscus Tear"
    ],
    "correctIdx": 0,
    "explanation": "These signs and symptoms are the hallmark presentation of Hamstring Strain."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Shoulder pain exacerbated by overhead activities (throwing, swimming) and a painful arc between 60-120 degrees of abduction.\". Which sports injury should you immediately suspect?",
    "options": [
      "Rotator Cuff Tendinopathy",
      "Plantar Fasciitis",
      "Epicondylitis lateralis (Tennis Elbow)",
      "Hamstring Strain"
    ],
    "correctIdx": 0,
    "explanation": "These signs and symptoms are the hallmark presentation of Rotator Cuff Tendinopathy."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "What is the most appropriate, evidence-based treatment and rehabilitation approach for Plantar Fasciitis?",
    "options": [
      "Eccentric strengthening of the wrist extensors, counterforce bracing, and correcting sports technique (e.g., backhand in tennis).",
      "Acute: RICE protocol. Long term: Pre-hab/Rehab focusing on hamstrings and proprioception, or surgical reconstruction followed by 6-9 months of rehabilitation.",
      "Acute RICE. Subacute: isometric loading followed by eccentric strengthening (e.g., Nordic hamstring curls).",
      "Stretching the plantar fascia and calves, intrinsic foot muscle strengthening, taping, and orthotics."
    ],
    "correctIdx": 3,
    "explanation": "For Plantar Fasciitis, the best approach involves: Stretching the plantar fascia and calves, intrinsic foot muscle strengthening, taping, and orthotics.."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Sudden sharp pain in the back of the thigh during high-speed sprinting.\". Which sports injury should you immediately suspect?",
    "options": [
      "Hamstring Strain",
      "Iliotibial (IT) Band Syndrome",
      "Plantar Fasciitis",
      "Meniscus Tear"
    ],
    "correctIdx": 0,
    "explanation": "These signs and symptoms are the hallmark presentation of Hamstring Strain."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Shoulder pain exacerbated by overhead activities (throwing, swimming) and a painful arc between 60-120 degrees of abduction.\". Which sports injury should you immediately suspect?",
    "options": [
      "Rotator Cuff Tendinopathy",
      "Plantar Fasciitis",
      "Epicondylitis lateralis (Tennis Elbow)",
      "Hamstring Strain"
    ],
    "correctIdx": 0,
    "explanation": "These signs and symptoms are the hallmark presentation of Rotator Cuff Tendinopathy."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Pain over the lateral epicondyle radiating down the forearm, worsened by gripping and wrist extension.\". Which sports injury should you immediately suspect?",
    "options": [
      "Medial Tibial Stress Syndrome (Shin Splints)",
      "Epicondylitis lateralis (Tennis Elbow)",
      "Acromioclavicular (AC) Joint Sprain",
      "Ligamentum cruciatum anterius (ACL) Tear"
    ],
    "correctIdx": 1,
    "explanation": "These signs and symptoms are the hallmark presentation of Epicondylitis lateralis (Tennis Elbow)."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "What is the most appropriate, evidence-based treatment and rehabilitation approach for Medial Tibial Stress Syndrome (Shin Splints)?",
    "options": [
      "Rest, modifying footwear, biomechanical assessment, strengthening the tibialis anterior, and progressive loading.",
      "Acute RICE. Subacute: isometric loading followed by eccentric strengthening (e.g., Nordic hamstring curls).",
      "Eccentric strengthening of the wrist extensors, counterforce bracing, and correcting sports technique (e.g., backhand in tennis).",
      "Strengthening the rotator cuff muscles (supraspinatus, infraspinatus, subscapularis, teres minor) and scapular retractors."
    ],
    "correctIdx": 0,
    "explanation": "For Medial Tibial Stress Syndrome (Shin Splints), the best approach involves: Rest, modifying footwear, biomechanical assessment, strengthening the tibialis anterior, and progressive loading.."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Pain over the lateral epicondyle radiating down the forearm, worsened by gripping and wrist extension.\". Which sports injury should you immediately suspect?",
    "options": [
      "Medial Tibial Stress Syndrome (Shin Splints)",
      "Epicondylitis lateralis (Tennis Elbow)",
      "Acromioclavicular (AC) Joint Sprain",
      "Ligamentum cruciatum anterius (ACL) Tear"
    ],
    "correctIdx": 1,
    "explanation": "These signs and symptoms are the hallmark presentation of Epicondylitis lateralis (Tennis Elbow)."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Pain over the lateral epicondyle radiating down the forearm, worsened by gripping and wrist extension.\". Which sports injury should you immediately suspect?",
    "options": [
      "Medial Tibial Stress Syndrome (Shin Splints)",
      "Epicondylitis lateralis (Tennis Elbow)",
      "Acromioclavicular (AC) Joint Sprain",
      "Ligamentum cruciatum anterius (ACL) Tear"
    ],
    "correctIdx": 1,
    "explanation": "These signs and symptoms are the hallmark presentation of Epicondylitis lateralis (Tennis Elbow)."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Shoulder pain exacerbated by overhead activities (throwing, swimming) and a painful arc between 60-120 degrees of abduction.\". Which sports injury should you immediately suspect?",
    "options": [
      "Rotator Cuff Tendinopathy",
      "Plantar Fasciitis",
      "Epicondylitis lateralis (Tennis Elbow)",
      "Hamstring Strain"
    ],
    "correctIdx": 0,
    "explanation": "These signs and symptoms are the hallmark presentation of Rotator Cuff Tendinopathy."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Sharp heel pain that is worst with the first steps in the morning or after prolonged sitting.\". Which sports injury should you immediately suspect?",
    "options": [
      "Achilles Tendinopathy",
      "Iliotibial (IT) Band Syndrome",
      "Epicondylitis lateralis (Tennis Elbow)",
      "Plantar Fasciitis"
    ],
    "correctIdx": 3,
    "explanation": "These signs and symptoms are the hallmark presentation of Plantar Fasciitis."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Diffuse pain along the medial border of the tibia, worsening during or after running on hard surfaces.\". Which sports injury should you immediately suspect?",
    "options": [
      "Acromioclavicular (AC) Joint Sprain",
      "Epicondylitis lateralis (Tennis Elbow)",
      "Achilles Tendinopathy",
      "Medial Tibial Stress Syndrome (Shin Splints)"
    ],
    "correctIdx": 3,
    "explanation": "These signs and symptoms are the hallmark presentation of Medial Tibial Stress Syndrome (Shin Splints)."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Diffuse pain along the medial border of the tibia, worsening during or after running on hard surfaces.\". Which sports injury should you immediately suspect?",
    "options": [
      "Acromioclavicular (AC) Joint Sprain",
      "Epicondylitis lateralis (Tennis Elbow)",
      "Achilles Tendinopathy",
      "Medial Tibial Stress Syndrome (Shin Splints)"
    ],
    "correctIdx": 3,
    "explanation": "These signs and symptoms are the hallmark presentation of Medial Tibial Stress Syndrome (Shin Splints)."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "What is the most appropriate, evidence-based treatment and rehabilitation approach for Ligamentum cruciatum anterius (ACL) Tear?",
    "options": [
      "Acute: RICE protocol. Long term: Pre-hab/Rehab focusing on hamstrings and proprioception, or surgical reconstruction followed by 6-9 months of rehabilitation.",
      "Eccentric strengthening of the wrist extensors, counterforce bracing, and correcting sports technique (e.g., backhand in tennis).",
      "Rest, modifying footwear, biomechanical assessment, strengthening the tibialis anterior, and progressive loading.",
      "Load management (modifying activities) and heavy slow resistance (HSR) training or eccentric heel drops."
    ],
    "correctIdx": 0,
    "explanation": "For Ligamentum cruciatum anterius (ACL) Tear, the best approach involves: Acute: RICE protocol. Long term: Pre-hab/Rehab focusing on hamstrings and proprioception, or surgical reconstruction followed by 6-9 months of rehabilitation.."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Stiffness and pain in the Achilles tendon, especially morning stiffness, often related to an increase in running volume.\". Which sports injury should you immediately suspect?",
    "options": [
      "Iliotibial (IT) Band Syndrome",
      "Achilles Tendinopathy",
      "Meniscus Tear",
      "Ligamentum cruciatum anterius (ACL) Tear"
    ],
    "correctIdx": 1,
    "explanation": "These signs and symptoms are the hallmark presentation of Achilles Tendinopathy."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "What is the most appropriate, evidence-based treatment and rehabilitation approach for Plantar Fasciitis?",
    "options": [
      "Eccentric strengthening of the wrist extensors, counterforce bracing, and correcting sports technique (e.g., backhand in tennis).",
      "Acute: RICE protocol. Long term: Pre-hab/Rehab focusing on hamstrings and proprioception, or surgical reconstruction followed by 6-9 months of rehabilitation.",
      "Acute RICE. Subacute: isometric loading followed by eccentric strengthening (e.g., Nordic hamstring curls).",
      "Stretching the plantar fascia and calves, intrinsic foot muscle strengthening, taping, and orthotics."
    ],
    "correctIdx": 3,
    "explanation": "For Plantar Fasciitis, the best approach involves: Stretching the plantar fascia and calves, intrinsic foot muscle strengthening, taping, and orthotics.."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Sudden sharp pain in the back of the thigh during high-speed sprinting.\". Which sports injury should you immediately suspect?",
    "options": [
      "Hamstring Strain",
      "Iliotibial (IT) Band Syndrome",
      "Plantar Fasciitis",
      "Meniscus Tear"
    ],
    "correctIdx": 0,
    "explanation": "These signs and symptoms are the hallmark presentation of Hamstring Strain."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Shoulder pain exacerbated by overhead activities (throwing, swimming) and a painful arc between 60-120 degrees of abduction.\". Which sports injury should you immediately suspect?",
    "options": [
      "Rotator Cuff Tendinopathy",
      "Plantar Fasciitis",
      "Epicondylitis lateralis (Tennis Elbow)",
      "Hamstring Strain"
    ],
    "correctIdx": 0,
    "explanation": "These signs and symptoms are the hallmark presentation of Rotator Cuff Tendinopathy."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Pain over the lateral epicondyle radiating down the forearm, worsened by gripping and wrist extension.\". Which sports injury should you immediately suspect?",
    "options": [
      "Medial Tibial Stress Syndrome (Shin Splints)",
      "Epicondylitis lateralis (Tennis Elbow)",
      "Acromioclavicular (AC) Joint Sprain",
      "Ligamentum cruciatum anterius (ACL) Tear"
    ],
    "correctIdx": 1,
    "explanation": "These signs and symptoms are the hallmark presentation of Epicondylitis lateralis (Tennis Elbow)."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "A patient presents with: \"Shoulder pain exacerbated by overhead activities (throwing, swimming) and a painful arc between 60-120 degrees of abduction.\". Which sports injury should you immediately suspect?",
    "options": [
      "Rotator Cuff Tendinopathy",
      "Plantar Fasciitis",
      "Epicondylitis lateralis (Tennis Elbow)",
      "Hamstring Strain"
    ],
    "correctIdx": 0,
    "explanation": "These signs and symptoms are the hallmark presentation of Rotator Cuff Tendinopathy."
  },
  {
    "type": "mcq",
    "topic": "Sports Injuries",
    "question": "What is the most appropriate, evidence-based treatment and rehabilitation approach for Plantar Fasciitis?",
    "options": [
      "Eccentric strengthening of the wrist extensors, counterforce bracing, and correcting sports technique (e.g., backhand in tennis).",
      "Acute: RICE protocol. Long term: Pre-hab/Rehab focusing on hamstrings and proprioception, or surgical reconstruction followed by 6-9 months of rehabilitation.",
      "Acute RICE. Subacute: isometric loading followed by eccentric strengthening (e.g., Nordic hamstring curls).",
      "Stretching the plantar fascia and calves, intrinsic foot muscle strengthening, taping, and orthotics."
    ],
    "correctIdx": 3,
    "explanation": "For Plantar Fasciitis, the best approach involves: Stretching the plantar fascia and calves, intrinsic foot muscle strengthening, taping, and orthotics.."
  }
];

const BOSS_LEVELS = [
  {
    "type": "boss",
    "topic": "Case Study: The Runner",
    "patientQuote": "I have sharp pain on the outside of my knee, especially when I run downhill.",
    "stages": [
      {
        "question": "What is the most likely suspected pathology?",
        "options": [
          "Patellar Tendinopathy",
          "Iliotibial (IT) Band Syndrome",
          "Meniscus Tear"
        ],
        "correctIdx": 1,
        "explanation": "Lateral knee pain worsening with downhill running is classic for IT Band Syndrome."
      },
      {
        "question": "Which special test would you perform to confirm this?",
        "options": [
          "Ober's Test",
          "Lachman's Test",
          "Valgus Stress Test"
        ],
        "correctIdx": 0,
        "explanation": "Ober's test assesses tightness in the TFL and IT band."
      },
      {
        "question": "What is the best initial treatment approach?",
        "options": [
          "Complete rest for 6 weeks",
          "Glute strengthening & ITB foam rolling",
          "Immediate corticosteroid injection"
        ],
        "correctIdx": 1,
        "explanation": "Strengthening the hip abductors (glutes) and mobilizing the IT band is the standard conservative approach."
      }
    ]
  }
];
