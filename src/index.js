import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import ApolloClient  from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import GA from './GoogleAnalytics'
import theme from './theme'
import './index.css';
import Home from './components/Home';
import Team from './components/Team';
import Jobs from './components/Jobs';
import Contact from './components/Contact';

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}?access_token=${process.env.REACT_APP_CONTENTFUL_TOKEN}`
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="app">
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
        { GA.init() && <GA.RouteTracker /> }
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  </div>
);
