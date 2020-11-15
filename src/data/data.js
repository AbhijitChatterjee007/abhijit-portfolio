import { nanoid } from 'nanoid';
import project from '../images/project.png'
import project1 from '../images/project-1.jpg'
import project2 from '../images/project-2.png'

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
  paragraphOne: 'Experienced full- stack developer versed in latest technologies and various programming languages.',
  paragraphTwo: ' With 2 years of development experience, driven to exceed customer expectations with cutting-edge applications. ',
  paragraphThree: ' Agile Certified, strong IT professional with a BTech - Bachelor of Technology focused on Computer Science Engineering.',
  resume: 'https://drive.google.com/file/d/1lzaWF5dWjv97cZkspRVye1tpc1MaAYCo/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: project,
    title: 'Hydra',
    info: 'A J2EE and Spring Micro-service based Trade processing system at Goldman Sachs',
    info2: 'Created Multiple services to onboard new flows/ Supoort existing flows. Wrote logic to add multiple funcationalities on existing flows in Fixed Income and Equities Domain. Collaborated on all stages of development lifecycle, from requirement gathering to production releases. Followed Agile Methodologies and focused on TDD, thereby creating detailed JUnit tests and Alpacas(GS Internal testing framework) for every functionality of the code.',
    repo: '', 
  },
  {
    id: nanoid(),
    img: project,
    title: 'Kirin',
    info: 'A J2EE, Hibernate and Spring based Delivery Software which renders and sends confirms to clients at Goldman Sachs',
    info2: '',
    repo: '', 
  },
  {
    id: nanoid(),
    img: project1,
    title: 'Voice Controlled News Application',
    info: 'This is a Voice Controlled News application which fetches the news data from Newsapi.org and displays the news to the users. The voice Control feature has been added with the help of ALAN AI. One can use this application completely through voice commands from reading news to going back to the home page and starting again.',
    info2: 'The webpage has been built using react.',
    url: 'https://abhijit-voice-news-app.netlify.app/',
    repo: 'https://github.com/AbhijitChatterjee007/voice-news-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: project2,
    title: 'PWA Weather Application',
    info: 'This is a Simple PWA weather application. The application was built using React and service workers. This website passes all of the lighthouse audit checks and can be deployed successfully to pwa store.',
    info2: '',
    url: 'https://abhijit-pwa-weatherapp.netlify.app/',
    repo: 'https://github.com/AbhijitChatterjee007/PWA_weather-app', // if no repo, the button will not show up
  },
];

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