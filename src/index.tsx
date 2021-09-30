import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles.css';
import '@fontsource/rubik';
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/700.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchContainer from './containers/SearchContainer';
import { SearchResult } from './components/SearchResult';
import { HomeContainer } from './containers/HomeContainer';

// This is where your application content can be mounted
const Root = () => {
  return (
    <Router>
      <Switch>
        {/*<Route path='/' exact component={HomeContainer} />*/}
        {/*<Route path='/about' exact component={About} />*/}
        <Route path='/' exact component={HomeContainer} />
        <Route path='/:id' component={SearchResult} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
