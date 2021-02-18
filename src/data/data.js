import { nanoid } from 'nanoid';
import goldman from '../images/project.png'
import infosys from '../images/infosys.png'
import project1 from '../images/project-1.jpg'
import project2 from '../images/project-2.png'
import imageFb from '../images/imageFb.png'
import stories from '../images/Stories.jpg'
import spotify from '../images/spotify.png'
import mern from '../images/certificates/mern.png'
import agile from '../images/certificates/agile.png'
import pythoncore from '../images/certificates/pythoncore.png'
import pythonoops from '../images/certificates/pythonoops.png'
import software from '../images/certificates/software.png'
import dbms from '../images/certificates/dbms.png'
import rpa from '../images/focus/rpa.png'
import UIPath from '../images/certificates/UIPath.png'
import aws from '../images/focus/aws.png'
import react from '../images/focus/react.png'

// HEAD DATA
export const headData = {
  title: 'Abhijit Chatterjee', 
  lang: 'en', 
  description: 'I\'m a Software Developer', 
};

// HERO DATA
export const heroData = {
  title: 'Hi, I\'m ',
  name: 'Abhijit',
  subtitle: 'A software Developer',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Agile Certified , experienced, versatile and self-accountable full-stack software developer versed in latest technologies and various programming languages.',
  paragraphTwo: ' With 2.2 years of development experience, adept at picking up technologies, driven to exceed customer expectations with cutting-edge applications.',
  paragraphThree: ' Skilled in client consulting and have strong inter-personal skills. Able to communicate effectively to management, users, developers and cross-functional team members.',
  resume: 'https://drive.google.com/file/d/1lzaWF5dWjv97cZkspRVye1tpc1MaAYCo/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: goldman,
    title: 'Hydra',
    info: 'A J2EE and Spring Micro-service based Trade processing system at Goldman Sachs. Been part of the dev team and successfully migrated a legacy system tjhat has generated over 250million dollars of revenue',
    info2: 'Created Multiple services to onboard new flows/ Suport existing flows. Wrote logic to add multiple funcationalities on existing flows in Fixed Income and Equities Domain. Collaborated on all stages of development lifecycle, from requirement gathering to production releases. Followed Agile Methodologies and focused on TDD, thereby creating detailed JUnit tests and Alpacas(GS Internal testing framework) for every functionality of the code.',
    repo: '', 
  },
  {
    id: nanoid(),
    img: goldman,
    title: 'Kirin',
    info: 'A J2EE, Hibernate and Spring based Delivery Software which renders and sends confirms to clients at Goldman Sachs',
    info2: '',
    repo: '', 
  },
  {
    id: nanoid(),
    img: stories,
    title: 'Stories- A Full Stack MERN Application',
    info: 'Created using React, Node.js, Express & MongoDB, the App is called "Stories" and it is a simple social media app that allows users to post short stories, poems or any other life events/memories.',
    info2: 'The Auth functionality is handled by using JWT and Google login. The database used is Mongo DB',
    url: 'https://stories-abhijit.netlify.app/',
    repo: 'https://github.com/AbhijitChatterjee007/Stories', 
  },
  {
    id: nanoid(),
    img: imageFb,
    title: 'FaceBook Clone',
    info: 'A Facebook UI Clone using React JS and Google FireStore for Auth and Backend functionalities. This is a simple UI clone with Posts functionality where users can update status just like facebook.',
    info2: 'Cloud firestore is used to store the status update data',
    url: '',
    repo: 'AbhijitChatterjee007/facebook-ui-clone', 
  },
  {
    id: nanoid(),
    img: spotify,
    title: 'Spotify UI clone',
    info: 'A Facebook UI Clone using React JS and Google FireStore for Auth and Backend functionalities. This is a simple UI clone with Posts functionality where users can update status just like facebook.',
    info2: 'Cloud firestore is used to store status update data',
    url: '',
    repo: 'AbhijitChatterjee007/spotify-ui-clone', 
  },
  {
    id: nanoid(),
    img: project1,
    title: 'Voice Controlled News Application',
    info: 'This is a Voice Controlled News application which fetches the news data from Newsapi.org and displays the news to the users. The voice Control feature has been added with the help of ALAN AI. One can use this application completely through voice commands from reading news to going back to the home page and starting again.',
    info2: 'The webpage has been built using react.',
    url: 'https://abhijit-voice-news-app.netlify.app/',
    repo: 'https://github.com/AbhijitChatterjee007/voice-news-app', 
  },
  {
    id: nanoid(),
    img: project2,
    title: 'PWA Weather Application',
    info: 'This is a Simple PWA weather application. The application was built using React and service workers. This website passes all of the lighthouse audit checks and can be deployed successfully to pwa store.',
    info2: '',
    url: 'https://abhijit-pwa-weatherapp.netlify.app/',
    repo: 'https://github.com/AbhijitChatterjee007/PWA_weather-app',
  },
];

//EXPERIENCE DATA
export const experienceData = [
  {
  id: nanoid(),
  img: goldman,
  title: 'Contingent Java Developer',
  date: 'May, 2019 - present',
  info: 'Working at Goldman Sachs, Bangalore office as a contingent Java Developer from Infosys Ltd. ',
  url: 'www.goldmansachs.com'
},
{
  id: nanoid(),
  img: infosys,
  title: 'Senior Systems Engineer',
  date: 'Nov, 2018 - present',
  info: 'Joined Infosys Ltd. as a freshman from college. Completed the training from Mysore campus with HPF tag. Since, then working at Goldman Sachs, Bangalore as a contingent java developer',
  url: 'www.infosys.com'
}];

export const certificationData = [
  {
    id: nanoid(),
    img: mern,
    info: 'Complete Web Development using MERN Stack',
    url:'https://drive.google.com/file/d/1GaP4Epu9ChMThPPIponK9PV3teg6NNsF/view?usp=sharing'
  },
  {
    id: nanoid(),
    img: agile,
    info: 'Global Agile Certification',
    url: 'https://drive.google.com/file/d/1IMoGSpEPyEIk8a5ux8mAP3vkS7sHNDE9/view?usp=sharing'
  },
  {
    id: nanoid(), 
    img: software,
    info: 'Web Development using Java, Spring Hibernate, Angular 4',
    url: 'https://drive.google.com/file/d/1mfkWkiBVp6O58ea5dWdIYbwjv90w4UbV/view?usp=sharing'
  },
  {
    id: nanoid(),
    img: UIPath,
    info: 'UI Path RPA Developers Foundation Diploma',
    url:'https://drive.google.com/file/d/1sb5zYKxXid-KNq0WIHRjfoIDFuMxRrI2/view?usp=sharing'
  },
  {
    id: nanoid(),
    img: pythoncore,
    info: 'Core Python with Collections and Data Structure',
    url:'https://drive.google.com/file/d/1PaphE0AIk6GHvzVsWG6ce5HhjdtK3E7U/view?usp=sharing'
  },
  {
    id: nanoid(),
    img: pythonoops,
    info: 'OOPs using Python',
    url:'https://drive.google.com/file/d/1d4LSnDAeSX3ryfLESgQcP72EW4quxPbN/view?usp=sharing'
  },
  {
    id: nanoid(),
    img: dbms,
    info: 'DBMS',
    url: 'https://drive.google.com/file/d/1SP-mhGvCtASkjSVoZC1lOciwIcpR71nM/view?usp=sharing'
  }
]

export const focusData = [
  {
    id: nanoid(),
    img: aws,
    info: 'Amazon Web Services',
    info2: 'Cloud computing has already taken over the market. Therefore,  I\'ve started learning my way around cloud and it\'s full-stack serverless architecture with Lambdas combined with S3 which minimizes the code liability by taking away the backend infrastructure and increases scalability. Currently preparing for the AWS cloud practitioner certification',
    url:'https://aws.amazon.com/'
  },
  {
    id: nanoid(),
    img: react,
    info: 'Strengthening the front end',
    info2: 'I\'ve been working a lot on the backend under my current employer. But, in order to stay relevant as a Full stack developer, need to keep upgrading myself on the front-end side though personal projects. I\'m loving REACT at the moment and currently adding 3-D functionalities (three JS)on a webpage has peeked my interest.',
    url: 'https://reactjs.org/'
  },
  {
    id: nanoid(),
    img: rpa,
    info: 'Robotic Process Automation',
    info2: 'Just like the AWS cloud side, the Robotic Automation Side has also peeked a lot of interest from my side. Currently, going through the RPA foundations program from UI Path',
    url: 'https://academy.uipath.com/'
  },
]

// CONTACT DATA
export const contactData = {
  cta: 'Wanna get in touch? Please drop a mail by clicking below',
  btn: 'Mail me',
  email: 'abhijit.chatterjee.5200@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/abhijitchatterjee_/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/abhijitchatterjee007/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/AbhijitChatterjee007',
    },
  ],
};