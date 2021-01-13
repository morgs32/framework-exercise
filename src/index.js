import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Bootstrap from './frameworks/Bootstrap';

import './styles.scss';
import Bulma from './frameworks/Bulma';
import Tailwind from './frameworks/Tailwind';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/bootstrap">Bootstrap</Link>
              </li>
              <li>
                <Link to="/bulma">Bulma</Link>
              </li>
              <li>
                <Link to="/tailwind">Tailwind</Link>
              </li>
            </ul>
          </nav>
        </header>

        <hr />
        <Switch>
          <Route
            path="/bootstrap"
            component={Bootstrap}
          />
          <Route
            path="/bulma"
            component={Bulma}
          />
          <Route
            path="/tailwind"
            component={Tailwind}
          />
          <Route
            path="/"
            exact
            render={() => {
              return (
                <div>
                  <p>
                    Complete this exercise for each of Bootstrap, Bulma, and Tailwind above. You want to create a layout
                    that looks like the below:
                  </p>
                  <br />
                  <p>
                    On large screens
                  </p>
                  <img
                    src={require('./screenshot-xlarge.png')}
                    style={{ border: '1px solid black' }}
                  />
                  <br />
                  <p>
                    On desktop
                  </p>
                  <img
                    src={require('./screenshot-lg.png')}
                    style={{ border: '1px solid black' }}
                  />
                  <br />
                  <p>
                    On tablet
                  </p>
                  <img
                    src={require('./screenshot-tablet.png')}
                    style={{ border: '1px solid black' }}
                  />
                  <br />
                  <p>
                    On mobile
                  </p>
                  <img
                    src={require('./screenshot-mobile.png')}
                    style={{ border: '1px solid black' }}
                  />
                </div>
              );
            }}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
