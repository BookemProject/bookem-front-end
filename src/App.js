import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import HeaderAfterLogin from './Components/HeaderAfterLogin';
import HomeAfterLogin from './Components/HomeAfterLogin';
import AboutUsAfterLogin from './Components/AboutUsAfterLogin';
import OurTeam from './Components/OurTeam';
import Profile from './Components/Profile';
import MyCollections from './Components/MyCollections';
import FooterAfterLogin from './Components/FooterAfterLogin';
import HeaderBeforeLogin from './Components/HeaderBeforeLogin';
import HomeBeforeLogin from './Components/HomeBeforeLogin';
// import AboutUsBeforeLogin from './Components/AboutUsBeforeLogin';
// import Services from './Components/Services';
// import Testimonials from './Components/Testimonials';
import FooterBeforeLogin from './Components/FooterBeforeLogin';


class App extends React.Component {
    render() {
      const { isAuthenticated } = this.props.auth0;
      return (
        <>
        {isAuthenticated ?
        <>
          <Router>
            {<HeaderAfterLogin/>}
            <Routes>
              <Route 
                exact path="/"
                element={<HomeAfterLogin />}
              >
              </Route>
              <Route 
                exact path="/aboutUs"
                element={<AboutUsAfterLogin />}
              >
              </Route>
              <Route 
                exact path="/ourTeam"
                element={<OurTeam />}
              >
              </Route>
              <Route 
                exact path="/profile"
                element={<Profile />}
              >
              </Route>
              <Route 
                exact path="/myCollections"
                element={<MyCollections />}
              >
              </Route>
              
            </Routes>
            {<FooterAfterLogin/>}
          </Router>
        </> : 
        <>
          <Router>
            {<HeaderBeforeLogin />}
            <Routes>
              <Route 
                exact path="/"
                element={<HomeBeforeLogin />}
              >
              </Route>
              {/* <Route 
                exact path="/aboutUs"
                element={<AboutUsBeforeLogin />}
              >
              </Route>
              <Route 
                exact path="/services"
                element={<Services />}
              >
              </Route>
              <Route 
                exact path="/testimonials"
                element={<Testimonials />}
              >
              </Route> */}
              
            </Routes>
            {<FooterBeforeLogin />}
          </Router>
        </>
        }
        </> 
        )
    }
  }
  
  export default withAuth0(App);