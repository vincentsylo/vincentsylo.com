import React from 'react';
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome';
import { BrowserRouter } from 'react-router-dom';
import { faGithub, faLinkedin, faApple, faAndroid, faReact, faNodeJs, faJs, faHtml5, faCss3 } from '@fortawesome/fontawesome-free-brands';
import { faBrowser, faDatabase, faBars, faTimes } from '@fortawesome/fontawesome-pro-light';
import './index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

fontawesome.library.add(faGithub, faLinkedin, faApple, faAndroid, faReact, faNodeJs, faJs, faHtml5, faCss3, faBrowser, faDatabase, faBars, faTimes);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
