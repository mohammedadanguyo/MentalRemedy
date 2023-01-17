import img1 from './images/awareness.svg';
import img2 from './images/specialist.svg';
import img3 from './images/forum.svg';
import img4 from './images/appointment.svg';
import male from './images/male.svg';
import female from './images/female.svg';

const mentalDisorders = [{
  id: 101,
  title: 'Anxiety disorder',
  description: "A mental health disorder characterised by feelings of worry, anxiety or fear that are strong enough to interfere with one's daily activities.",
  diagnosis: 'Usually self-diagnosable',
  symptoms: [{
    id: 401,
    type: 'Cognitive',
    description: 'lack of concentration, racing thoughts, or unwanted thoughts'
  },
  {
    id: 402,
    type: 'Behavioural',
    description: 'hypervigilance, irritability, or restlessness'
  },
  {
    id: 403,
    type: 'Whole Body',
    description: 'fatigue or sweating'
  },
  {
    id: 404,
    type: 'Common',
    description: 'anxiety, excessive worry, angor animi, fear, insomnia, nausea, palpitations, or trembling'
  }],
  treatment: 'Treatment includes counselling or medication, including antidepressants.'
},
{
  id: 102,
  title: 'Clinical depression',
  description: 'Also known as major depression, a mental health disorder characterised by persistently depressed mood or loss of interest in activities, causing significant impairment in daily life. The persistent feeling of sadness or loss of interest that characterises major depression can lead to a range of behavioural and physical symptoms. Depression can also be associated with thoughts of suicide. Depression can also be associated with thoughts of suicide. The good news is that with the right treatment and support, someone with depression can make a full recovery.',
  diagnosis: 'Requires a medical diagnosis',
  symptoms: [{
    id: 301,
    type: 'Mood',
    description: 'anxiety, apathy, general discontent, guilt, hopelessness, loss of interest, loss of interest or pleasure in activities, mood swings, or sadness'
  },
  {
    id: 302,
    type: 'Behavioural',
    description: ' agitation, excessive crying, irritability, restlessness, or social isolation'
  },
  {
    id: 303,
    type: 'Cognitive',
    description: 'lack of concentration, slowness in activity, or thoughts of suicide'
  },
  {
    id: 304,
    type: 'Weight',
    description: 'weight gain or weight loss'
  },
  {
    id: 305,
    type: 'Whole body',
    description: 'excessive hunger, fatigue, or loss of appetite'
  },
  {
    id: 306,
    type: 'Sleep',
    description: 'early awakening, excess sleepiness, insomnia, or restless sleep'
  },
  {
    id: 307,
    type: 'Common',
    description: 'poor appetite or rumination'
  }],
  treatment: 'The mainstay of treatment is usually medication, talk therapy or a combination of the two. I'
},
{
  id: 103,
  title: 'Bipolar disorder',
  description: `A disorder associated with episodes of mood swings ranging from depressive lows to manic highs.
    The exact cause of bipolar disorder isn’t known, but a combination of genetics, environment and altered brain structure and chemistry may play a role.`,
  diagnosis: 'Requires a medical diagnosis',
  symptoms: [{
    id: 201,
    type: 'Mood',
    description: 'mood swings, sadness, elevated mood, anger, anxiety, apathy, apprehension, euphoria, general discontent, guilt, hopelessness, loss of interest, or loss of interest or pleasure in activities'
  },
  {
    id: 202,
    type: 'Cognitive',
    description: 'unwanted thoughts, delusion, lack of concentration, racing thoughts, slowness in activity, or false belief of superiority'
  },
  {
    id: 203,
    type: 'Psychological',
    description: 'depression, manic episode, agitated depression, or paranoia'
  },
  {
    id: 204,
    type: 'Behavioural',
    description: 'irritability, risk-taking behaviours, disorganised behaviour, aggression, agitation, crying, excess desire for sex, hyperactivity, impulsivity, restlessness, or self-harm'
  },
  {
    id: 205,
    type: 'Sleep',
    description: 'difficulty falling asleep or excess sleepiness'
  },
  {
    id: 206,
    type: 'Weight',
    description: 'weight gain or weight loss'
  },
  {
    id: 207,
    type: 'Common',
    description: 'fatigue or pressure of speech'
  }],
  treatment: 'Treatment is usually lifelong and often involves a combination of medications and psychotherapy.'
},
{
  id: 104,
  title: 'Anxiety disorder',
  description: "A mental health disorder characterised by feelings of worry, anxiety or fear that are strong enough to interfere with one's daily activities.",
  diagnosis: 'Usually self-diagnosable',
  symptoms: [{
    id: 601,
    type: 'Cognitive',
    description: 'lack of concentration, racing thoughts, or unwanted thoughts'
  },
  {
    id: 602,
    type: 'Behavioural',
    description: 'hypervigilance, irritability, or restlessness'
  },
  {
    id: 603,
    type: 'Whole Body',
    description: 'fatigue or sweating'
  },
  {
    id: 604,
    type: 'Common',
    description: 'anxiety, excessive worry, angor animi, fear, insomnia, nausea, palpitations, or trembling'
  }],
  treatment: 'Treatment includes counselling or medication, including antidepressants.'
},
{
  id: 105,
  title: 'Anxiety disorder',
  description: "A mental health disorder characterised by feelings of worry, anxiety or fear that are strong enough to interfere with one's daily activities.",
  diagnosis: 'Usually self-diagnosable',
  symptoms: [{
    id: 605,
    type: 'Cognitive',
    description: 'lack of concentration, racing thoughts, or unwanted thoughts'
  },
  {
    id: 606,
    type: 'Behavioural',
    description: 'hypervigilance, irritability, or restlessness'
  },
  {
    id: 607,
    type: 'Whole Body',
    description: 'fatigue or sweating'
  },
  {
    id: 608,
    type: 'Common',
    description: 'anxiety, excessive worry, angor animi, fear, insomnia, nausea, palpitations, or trembling'
  }],
  treatment: 'Treatment includes counselling or medication, including antidepressants.'
},
{
  id: 106,
  title: 'Anxiety disorder',
  description: "A mental health disorder characterised by feelings of worry, anxiety or fear that are strong enough to interfere with one's daily activities.",
  diagnosis: 'Usually self-diagnosable',
  symptoms: [{
    id: 609,
    type: 'Cognitive',
    description: 'lack of concentration, racing thoughts, or unwanted thoughts'
  },
  {
    id: 610,
    type: 'Behavioural',
    description: 'hypervigilance, irritability, or restlessness'
  },
  {
    id: 611,
    type: 'Whole Body',
    description: 'fatigue or sweating'
  },
  {
    id: 612,
    type: 'Common',
    description: 'anxiety, excessive worry, angor animi, fear, insomnia, nausea, palpitations, or trembling'
  }],
  treatment: 'Treatment includes counselling or medication, including antidepressants.'
}];

const specialists = [{
  id: 501,
  profile_pic: male,
  name: 'Dr. Irungu Joseph',
  city: 'Lagos',
  location: '23553, Ralph Bunche Rd Nelson Awori Centre 3RD Floor Room B7, Nairobi',
  gender: 'Male',
  languages: 'English, Kiswahili',
  liscence_number: 12345,
  hospital_associations: 'Kenyatta Hospital',
  education: [{
    id: 511,
    type: 'education',
    facility: 'University of Nairobi'
  },
  {
    id: 512,
    type: 'training',
    facility: 'Mathare Hospital'
  }],
  reviews: [{
    id: 513,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them.',
    date_posted: Date.now()
  },
  {
    id: 514,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 515,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 516,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  }]
},
{
  id: 502,
  profile_pic: male,
  name: 'Dr. Maleek cherry',
  city: 'Accra',
  location: 'Parklands/Highridge Third Parklands Ave Aga Khan University',
  gender: 'male',
  languages: 'English, Kiswahili',
  liscence_number: 12345,
  hospital_associations: 'Kenyatta Hospital',
  education: [{
    id: 517,
    type: 'education',
    facility: 'University of Nairobi'
  },
  {
    id: 518,
    type: 'training',
    facility: 'Mathare Hospital'
  }],
  reviews: [{
    id: 519,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 520,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 521,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 523,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  }]
},
{
  id: 503,
  profile_pic: male,
  name: 'Dr. Wesley pipes',
  city: 'Addis',
  location: 'Parklands/Highridge Third Parklands Ave Aga Khan University',
  gender: 'female',
  languages: 'English, Kiswahili',
  liscence_number: 12345,
  hospital_associations: 'Kenyatta Hospital',
  education: [{
    id: 524,
    type: 'education',
    facility: 'University of Nairobi'
  },
  {
    id: 518,
    type: 'training',
    facility: 'Mathare Hospital'
  }],
  reviews: [{
    id: 525,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 526,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 527,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 528,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  }]
},
{
  id: 504,
  profile_pic: male,
  name: 'Dr. John francis',
  city: 'Nairobi',
  location: 'Parklands/Highridge Third Parklands Ave Aga Khan University',
  gender: 'male',
  languages: 'English, Kiswahili',
  liscence_number: 12345,
  hospital_associations: 'Kenyatta Hospital',
  education: [{
    id: 529,
    type: 'education',
    facility: 'University of Nairobi'
  },
  {
    id: 530,
    type: 'training',
    facility: 'Mathare Hospital'
  }],
  reviews: [{
    id: 531,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 534,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 535,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 536,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  }]
},
{
  id: 505,
  profile_pic: female,
  name: 'Dr. jane hyacinth',
  city: 'Nairobi',
  location: 'Parklands/Highridge Third Parklands Ave Aga Khan University',
  gender: 'female',
  languages: 'English, Kiswahili',
  liscence_number: 12345,
  hospital_associations: 'Kenyatta Hospital',
  education: [{
    id: 537,
    type: 'education',
    facility: 'University of Nairobi'
  },
  {
    id: 538,
    type: 'training',
    facility: 'Mathare Hospital'
  }],
  reviews: [{
    id: 539,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 540,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 541,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 542,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  }]
},
{
  id: 506,
  profile_pic: male,
  name: 'Dr.Jon Jones',
  city: 'Nairobi',
  location: 'Parklands/Highridge Third Parklands Ave ',
  gender: 'male',
  languages: 'English, Kiswahili',
  liscence_number: 12345,
  hospital_associations: 'Kenyatta Hospital',
  education: [{
    id: 543,
    type: 'education',
    facility: 'University of Nairobi'
  },
  {
    id: 545,
    type: 'training',
    facility: 'Mathare Hospital'
  }],
  reviews: [{
    id: 546,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 547,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 548,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 549,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  }]
},
{
  id: 507,
  profile_pic: female,
  name: 'Dr. marylin cornrow',
  city: 'Nairobi',
  location: '25th Ave luthuli rd',
  gender: 'female',
  languages: 'English, Kiswahili',
  liscence_number: 12345,
  hospital_associations: 'Kenyatta Hospital',
  education: [{
    id: 550,
    type: 'education',
    facility: 'University of Nairobi'
  },
  {
    id: 551,
    type: 'training',
    facility: 'Mathare Hospital'
  }],
  reviews: [{
    id: 552,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 553,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 554,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 555,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  }]
},
{
  id: 508,
  profile_pic: male,
  name: 'Dr. Mike Lyson',
  city: 'Nairobi',
  location: 'Parklands/Highridge Third Parklands Ave Aga Khan University',
  gender: 'male',
  languages: 'English, Kiswahili',
  liscence_number: 12345,
  hospital_associations: 'Kenyatta Hospital',
  education: [{
    id: 556,
    type: 'education',
    facility: 'University of Nairobi'
  },
  {
    id: 557,
    type: 'training',
    facility: 'Mathare Hospital'
  }],
  reviews: [{
    id: 558,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 559,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 560,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 561,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  }]
},
{
  id: 509,
  profile_pic: female,
  name: 'Dr. Harley Bean',
  city: 'Nairobi',
  location: 'Parklands/Highridge Third Parklands Ave Aga Khan University',
  gender: 'female',
  languages: 'English, Kiswahili',
  liscence_number: 12345,
  hospital_associations: 'Kenyatta Hospital',
  education: [{
    id: 562,
    type: 'education',
    facility: 'University of Nairobi'
  },
  {
    id: 563,
    type: 'training',
    facility: 'Mathare Hospital'
  }],
  reviews: [{
    id: 564,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 565,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 566,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 567,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  }]
},
{
  id: 510,
  profile_pic: male,
  name: 'Dr. Richard Broke',
  city: 'Nairobi',
  location: 'Parklands/Highridge Third Parklands Ave Aga Khan University',
  gender: 'male',
  languages: 'English, Kiswahili',
  liscence_number: 12345,
  hospital_associations: 'Kenyatta Hospital',
  education: [{
    id: 568,
    type: 'education',
    facility: 'University of Nairobi'
  },
  {
    id: 569,
    type: 'training',
    facility: 'Mathare Hospital'
  }],
  reviews: [{
    id: 570,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 571,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 572,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  },
  {
    id: 573,
    email: 'ali@doc.com',
    intials: 'Ali',
    initial_status: 'hidden',
    review: 'I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov as well as the application.',
    date_posted: Date.now()
  }]
}];

const services = [{
  id: 1,
  title: 'Create awareness',
  description: 'Educate the community on mental health and change their view and how they approach this topic of mental health.',
  image: img1,
  link: 'mental-disorders'
},
{
  id: 2,
  title: 'Specialist plattform',
  description: 'A platform where specialist can list their practices hence patients can view their profile and book appointments online',
  image: img2,
  link: 'specialists'
},
{
  id: 3,
  title: 'Forum',
  description: 'A forum where individuals can share posts/questions , get answers from specialist and view other peoples questions and answers.',
  image: img3,
  link: 'forum'
},
{
  id: 4,
  title: 'Book appointments',
  description: 'Patients can book appointments online after having access to diffrent specialist profiles.',
  image: img4,
  link: 'user-appointments'
}];

export {
  services,
  mentalDisorders,
  specialists
};
