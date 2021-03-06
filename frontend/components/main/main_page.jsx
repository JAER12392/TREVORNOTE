import React from 'react';
import SessionButtonsContainer from './session_buttons_container';
import IntroText from './intro_text';

import SessionFormContainer from '../session/session_form_container';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <nav>
          <img src={"https://s26.postimg.org/ysa0ntycl/trevornote-logo-s.png"} />
          <SessionButtonsContainer />
        </nav>
        <div id="main">
          <IntroText />
          <div id="session-form-container">
            <p className="signup-text">Sign Up for Free</p>
            <SessionFormContainer />
          </div>
        </div>
        <footer>
          <ul>
            <li><a href="https://www.linkedin.com/in/trevoruptain/" target="blank">LinkedIn</a></li>
            <li><a href="https://github.com/trevoruptain" target="blank">GitHub</a></li>
            <li><a href="https://www.facebook.com/trevoruptain" target="blank">Facebook</a></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default MainPage;
