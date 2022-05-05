import { Component } from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.js';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/LoginPage/Login.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import PersonalInformation from './Components/RegisterationPage/PersonalInformation.jsx';
import Education from './Components/RegisterationPage/Education.jsx';
import Experiance from './Components/RegisterationPage/Experiance.jsx';
import Skills from './Components/RegisterationPage/Skills.jsx';
import Profile from './Components/Profile/Profile.jsx';

import CareerChoice from './Components/Services/CareerChoice.jsx';
import Training from './Components/Services/Training.jsx';
import CareerShift from './Components/Services/CareerShift.jsx';
class App extends Component {
    render() {
        return ( <
            >
            <
            Navbar / >

            <
            Routes >
            <
            Route path = '/login'
            element = { < Login / > }
            />  <
            Route path = '/home'
            element = { < Home / > }
            /> <
            Route path = '/about'
            element = { < About / > }
            /> <
            Route path = '/contact'
            element = { < Contact / > }
            /> <
            Route path = '/careerchoice'
            element = { < CareerChoice / > }
            /> <
            Route path = '/careershift'
            element = { < CareerShift / > }
            /> <
            Route path = '/training'
            element = { < Training / > }
            /> <
            Route path = '/Register'
            element = { < PersonalInformation / > }
            />  <
            Route path = '/education'
            element = { < Education / > }
            /> <
            Route path = '/personalInfo'
            element = { < PersonalInformation / > }
            /> <
            Route path = '/skills'
            element = { < Skills / > }
            /> <
            Route path = '/experiance'
            element = { < Experiance / > }
            /><
            Route path = '/profile'
            element = { < Profile / > }
            /><
            Route exact path = '/'
            element = { < Home / > }
            />

            <
            /Routes>

            <
            />
        );
    }
}
export default App;