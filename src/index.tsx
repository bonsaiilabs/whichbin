import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles.css';
import '@fontsource/rubik';
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/700.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './components/Starter/About';
import SearchContainer from './containers/SearchContainer';
import { SearchResult } from './components/SearchResult';

// This is where your application content can be mounted
const Root = () => (
  <Router>
    <Switch>
      {/*<Route path='/' exact component={HomeContainer} />*/}
      <Route path='/about' exact component={About} />
      <Route path='/' exact component={SearchContainer} />
      <Route path='/:id' component={SearchResult} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
