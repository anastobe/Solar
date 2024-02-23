import { RouteNames } from '@/constants';
import { Linking } from 'react-native';

export const introslidesdata = [
    {
      key: 1,
      jsonFile: require('@/assets/jsonFiles/introAnimation1.json'),
      size: {width: 250, height: 230}
    },
    {
      key: 2,
      jsonFile: require('@/assets/jsonFiles/introAnimation3.json'),
      size: {width: 260, height: 250}
    },
    {
      key: 3,
      jsonFile: require('@/assets/jsonFiles/introAnimation2.json'),
      size: {width: 130, height: 150}
    },
    {
      key: 4,
      jsonFile: require('@/assets/jsonFiles/introAnimation4.json'),
      size: {width: 250, height: 230}
    },
  ];

  export const scheduleData = [
    {
      id: 0,
      date: 1,
      day: 'Mon',
    },
    {
      id: 1,
      date: 2,
      day: 'Tue',
    },
    {
      id: 2,
      date: 3,
      day: 'Wed',
    },
    {
      id: 3,
      date: 4,
      day: 'Thu',
    },
    {
      id: 4,
      date: 5,
      day: 'Fri',
    },
    {
      id: 5,
      date: 6,
      day: 'Sat',
    },
    {
      id: 6,
      date: 7,
      day: 'Sun',
    },
    {
      id: 7,
      date: 8,
      day: 'Mon',
    },
    {
      id: 8,
      date: 9,
      day: 'Tue',
    },
    {
      id: 9,
      date: 10,
      day: 'Wed',
    },
    {
      id: 10,
      date: 11,
      day: 'Thu',
    },
    {
      id: 11,
      date: 12,
      day: 'Fri',
    },
    {
      id: 12,
      date: 13,
      day: 'Sat',
    },
    {
      id: 13,
      date: 14,
      day: 'Sun',
    },
    {
      id: 14,
      date: 15,
      day: 'Mon',
    },
    {
      id: 15,
      date: 16,
      day: 'Tue',
    },
    {
      id: 16,
      date: 17,
      day: 'Wed',
    },
    {
      id: 17,
      date: 18,
      day: 'Thu',
    },
    {
      id: 18,
      date: 19,
      day: 'Fri',
    },
    {
      id: 19,
      date: 20,
      day: 'Sat',
    },
    {
      id: 20,
      date: 21,
      day: 'Sun',
    },
    {
      id: 21,
      date: 22,
      day: 'Mon',
    },
    {
      id: 22,
      date: 23,
      day: 'Tue',
    },
    {
      id: 23,
      date: 24,
      day: 'Wed',
    },
    {
      id: 24,
      date: 25,
      day: 'Thu',
    },
    {
      id: 25,
      date: 26,
      day: 'Fri',
    },
    {
      id: 26,
      date: 27,
      day: 'Sat',
    },
    {
      id: 27,
      date: 28,
      day: 'Sun',
    },
    {
      id: 28,
      date: 29,
      day: 'Mon',
    },
    {
      id: 29,
      date: 30,
      day: 'Tue',
    },
    {
      id: 30,
      date: 31,
      day: 'Wed',
    },
  ];

export const guide1Data = [
  {
    id: 1,
    image: "people",
    text: 'Provider',
    width: 67.4,
    height: 76,
  },
  {
    id: 2,
    image: "person",
    text: 'User',
    width: 115.15,
    height: 76,
  },
];



export const chatsData = [
  {
      id: 0,
      who: 'sender',
      msgType: 'report',
      time: '10:50 PM',
      msg: 'Message Reported',
      userImage: require('@/assets/images/user.png')
  },
  {
      id: 1,
      who: 'sender',
      msgType: 'text',
      time: '10:50 PM',
      msg: "sender text hun ma",
      userImage: require('@/assets/images/user.png')
  },
  {
      id: 2,
      who: 'sender',
      msgType: 'text',
      time: '10:50 PM',
      msg: "sender text hun ma",
      userImage: require('@/assets/images/user.png')
  },
  {
      id: 3,
      who: 'me',
      msgType: 'text',
      time: '10:50 PM',
      msg: "Great! Super excited to check out E’s Bar. And my week is solid.  No fires to put out so grateful for that.",
      userImage: require('@/assets/images/patient.png')
  },
  {
      id: 4,
      who: 'me',
      msgType: 'map',
      time: '10:50 PM',
      msg: require('@/assets/images/patient.png'),
      userImage: require('@/assets/images/patient.png')
  },
  {
      id: 5,
      who: 'me',
      msgType: 'delete',
      time: '10:50 PM',
      msg: 'Message Deleted',
      userImage: ''
  }

  
]



export const personData = [
  {
    id: 0,
    name: 'Jane Cooper',
    message: 'Sorry i’ii be lateabout 15 minutes',
    image: require('@/assets/images/user.png'),
    time:'08:40 AM',
    images: require('@/assets/images/patient.png'),
  },
  {
    id: 1,
    name: 'Wade Warren',
    message: 'Sorry iii be lateabout 15 minutes',
    image: require('@/assets/images/user.png'),
    time:'08:40 AM',
    // images: require('@/assets/images/patient.png'),
  },
  {
    id: 2,
    name: 'Cameron Williamson',
    message: 'Sorry iii be lateabout 15 minutes',
    image: require('@/assets/images/user.png'),
    time:'08:40 AM',
    images: require('@/assets/images/patient.png'),
    online: require('@/assets/images/patient.png'),

  },
  {
    id: 3,
    name: 'Brooklyn Simmons',
    message: 'Sorry iii be lateabout 15 minutes',
    image: require('@/assets/images/user.png'),
    time:'08:40 AM',
    // images: require('@/assets/images/patient.png'),
   
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    message: 'Sorry iii be lateabout 15 minutes',
    image: require('@/assets/images/user.png'),
    time:'08:40 AM',
    images: require('@/assets/images/patient.png'),
  },
  {
    id: 5,
    name: 'Leslie Alexander',
    message: 'Sorry iii be lateabout 15 minutes',
    image: require('@/assets/images/user.png'),
    time:'08:40 AM',
    // images: require('@/assets/images/patient.png'),
  },
  {
    id: 6,
    name: 'Guy Hawkins',
    message: 'Sorry iii be lateabout 15 minutes',
    image: require('@/assets/images/user.png'),
    time:'08:40 AM',
    images: require('@/assets/images/patient.png'),
  },
  {
    id: 7,
    name: 'Jacob Jones',
    message: 'Sorry iii be lateabout 15 minutes',
    image: require('@/assets/images/user.png'),
    time:'08:40 AM',
    images: require('@/assets/images/patient.png'),
  },
  {
    id: 8,
    name: 'Robert Fox',
    message: 'Sorry iii be lateabout 15 minutes',
    image: require('@/assets/images/user.png'),
    time:'08:40 AM',
    images: require('@/assets/images/patient.png'),
  },
];


export const patProfile = [
  {
    title: 'My Profile',
    data: [
      {
        id: 1,
        img: require('@/assets/images/person.png'),
        heading: 'My Information',
      },
      {
        id: 2,
        img: require('@/assets/images/calendar.png'),
        heading: 'Appointment History',
      },
      {
        id: 3,
        img: require('@/assets/images/card.png'),
        heading: 'Payment Methods',
      },
    ],
  },
  {
    title: 'Preference',
    data: [
      // {
      //   id: 4,
      //   img: require('@/assets/images/setting.png'),
      //   heading: 'Settings',
      // },
      {
        id: 6,
        img: require('@/assets/images/info_icon.png'),
        heading: 'Sign Out',
      },
    ],
  },
];

export const BloodGrp = [
  {
    id: 0,
    name: '-A Group',
    img: require('@/assets/images/patient.png'),
  },
  {
    id: 1,
    name: 'B Group',
    img: require('@/assets/images/patient.png'),
  },
  {
    id: 2,
    name: 'AB Group',
    img: require('@/assets/images/patient.png'),
  },
  {
    id: 2,
    name: 'O Group',
    img: require('@/assets/images/patient.png'),
  },
];


export const countryData = [
  {
    key: 1,
    name: 'Argentina',
    img: require('@/assets/images/patient.png'),
  },
  {
    key: 2,
    name: 'Belgium',
    img: require('@/assets/images/patient.png'),
  },
  {
    key: 3,
    name: 'Canada',
    img: require('@/assets/images/patient.png'),
  },
  {
    key: 4,
    name: 'Denmark',
    img: require('@/assets/images/patient.png'),
  },
  {
    key: 5,
    name: 'USA',
    img: require('@/assets/images/patient.png'),
  },
  {
    key: 6,
    name: 'Argentina',
    img: require('@/assets/images/patient.png'),
  },
  {
    key: 7,
    name: 'Belgium',
    img: require('@/assets/images/patient.png'),
  },
  {
    key: 8,
    name: 'Canada',
    img: require('@/assets/images/patient.png'),
  },
  {
    key: 9,
    name: 'Denmark',
    img: require('@/assets/images/patient.png'),
  },
  {
    key: 10,
    name: 'USA',
    img: require('@/assets/images/patient.png'),
  },
];

export const genderData = [
  {
    id: 0,
    name: 'Male',
    img: require('@/assets/images/patient.png'),
  },
  {
    id: 1,
    name: 'Female',
    img: require('@/assets/images/patient.png'),
  },
  {
    id: 2,
    name: 'Others',
    img: require('@/assets/images/patient.png'),
  },
];


export const ProfileInfoData = [
  {
    id: 0,
    heading: 'First name',
    value: 'Jinit',
    icon: null,
    iconSize: null,
  },
  {
    id: 1,
    heading: 'Last name',
    value: 'Shah',
    icon: null,
    iconSize: null,
  },
  {
    id: 2,
    heading: 'Age',
    value: '18',
    icon: null,
    iconSize: null,
  }

];

export const FamousVendors = [
  {
    id: 0,
    image: require("@/assets/images/user.png"),
    name: "anas",
    showRightBar: true
  },
  {
    id: 1,
    image: require("@/assets/images/user.png"),
    name: "anas",
    showRightBar: true
  },
  {
    id: 2,
    image: require("@/assets/images/user.png"),
    name: "anas",
    showRightBar: true
  },
  {
    id: 3,
    image: require("@/assets/images/user.png"),
    name: "anas",
    showRightBar: true
  },
  {
    id: 4,
    image: require("@/assets/images/user.png"),
    name: "anas",
    showRightBar: false
  }

];

export const AddJobData = [
  {
    id: 0,
    txt: `Add Job With${'\n'}Your Requirements`
  }

];

export const AddJobProviderData = [
  {
    id: 0,
    txt: `Add My Custom${'\n'}Packages`
  }
];

export const vendorHomePkg = [
  {
    id: 0,
    userImg: require("@/assets/images/person.png"),
    name: "anas ahmed",
    title: "title",
    description: "my description",
    packageList: {
      noofpanels: "20",
      battery: "20",
      price: "90000",
      area: "100",
      extraExpense: "2000",
      ttklWatts: "100",
      daysForInstalation: "10"
    }
  },
  {
    id: 1,
    userImg: require("@/assets/images/person.png"),
    name: "anas ahmed",
    title: "title",
    description: "my description",
    packageList: {
      noofpanels: "20",
      battery: "30",
      price: "30000",
      area: "400",
      extraExpense: "2000",
      ttklWatts: "100",
      daysForInstalation: "10"
    }
  },
  {
    id: 2,
    userImg: require("@/assets/images/person.png"),
    name: "anas ahmed",
    title: "title",
    description: "my description",
    packageList: {
      noofpanels: "70",
      battery: "20",
      price: "70000",
      area: "100",
      extraExpense: "7000",
      ttklWatts: "100",
      daysForInstalation: "10"
    }
  },


]

export const PostItemsList = [
  {
      id: "6506cd1869b91c341ac1230d",
      userImg: "userImg",
      name: "Bazif",
      title: "Pak Solar",
      description: "we provide solar panel service in low price",
      List: [
          {
              totalwatts: "30000",
              noofLedFan: "1",
              noofBulb: "2",
              microwave: "3",
              iron: "0",
              fridge: "1",
              nonLEDliGHT: "10"
          }
      ],
  },
  {
    id: "6506cd1869b9f341ac1230d",
    userImg: "userImg",
    name: "Ali azian",
    title: "Pak Solar",
    description: "we provide solar panel service in low price",
    List: [
        {
            totalwatts: "30000",
            noofLedFan: "1",
            noofBulb: "2",
            microwave: "3",
            iron: "0",
            fridge: "1",
            nonLEDliGHT: "10"
        }
    ],
},
{
  id: "6506cd1869b91c341ac1230d",
  userImg: "userImg",
  name: "Bazif",
  title: "Pak Solar",
  description: "we provide solar panel service in low price",
  List: [
      {
          totalwatts: "30000",
          noofLedFan: "1",
          noofBulb: "2",
          microwave: "3",
          iron: "0",
          fridge: "1",
          nonLEDliGHT: "10"
      }
  ],
},
{
id: "6506cd1869b9f3f1ac1230d",
userImg: "userImg",
name: "Ali azian",
title: "Pak Solar",
description: "we provide solar panel service in low price",
List: [
    {
        totalwatts: "30000",
        noofLedFan: "1",
        noofBulb: "2",
        microwave: "3",
        iron: "0",
        fridge: "1",
        nonLEDliGHT: "10"
    }
],
},
]

export const DrawerMenusProvider = [
  {
      id: 1,
      screenName: "Post a Package",
      route: "pakage",
      nav: 'ProviderAddJobStack',
  },
  {
      id: 2,
      screenName: "Settings",        
      route: "Setting",
      nav: 'editProfile',
  },
  {
      id: 3,
      screenName: "Message",
      route: "Contact",
      nav: RouteNames.chatTabStack,
  },
  {
    id: 4,
    screenName: "Notification",        
    route: "Setting",
    nav: RouteNames.notification,
  },
  {
    id: 5,
    screenName: "Payment",        
    route: "Setting",
    nav: RouteNames.paymentDone,
  }
  
]

export const DrawerMenusUser = [
  {
      id: 1,
      screenName: "Calculate Expense",
      route: "pakage",
      nav: RouteNames.calculateExpense,
  },
  {
      id: 2,
      screenName: "Add job",        
      route: "Setting",
      nav: RouteNames.addJobStack,
  },
  {
      id: 3,
      screenName: "Famous Vendors",        
      route: "Setting",
      nav: RouteNames.famousVendors,
  },
  {
    id: 4,
    screenName: "Notification",        
    route: "Setting",
    nav: RouteNames.notification,
  },
  {
    id: 3,
    screenName: "Message",
    route: "Contact",
    nav: RouteNames.chatTabStack,
  },


  
]