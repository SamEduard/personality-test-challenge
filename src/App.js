import { Route, Routes } from 'react-router';

import { LandingPage } from './containers/LandingPage/LandingPage';
import { ResultsPage } from './containers/ResultPage/ResultsPage';
import { TestPage } from './containers/TestPage/TestPage';

import './App.scss';
import './utils.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test/:nr" element={<TestPage />} />
        <Route path="/result" element={<ResultsPage />} />
      </Routes>
    </div>
  );
}

export default App;
