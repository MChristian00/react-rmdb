import React from 'react';

//Routing
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Components
import {Header} from './components/Header';
import { Home } from './components/Home';
import {Movie} from './components/Movie';
import {NotFound} from './components/NotFound';

//ErrorBoundary
import {ErrorBoundary} from './ErrorBoundary'

//Styles
import {GlobalStyles} from './GlobalStyles';

const App = () => (
    <Router>
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:movieId' element={<Movie />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <GlobalStyles />
      </ErrorBoundary>
    </Router>
  );

export default App;
