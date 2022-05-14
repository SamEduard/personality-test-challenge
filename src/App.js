import { Route, Routes } from 'react-router';
import './App.scss';
import { LandingPage } from './containers/LandingPage/LandingPage';
import { TestPage } from './containers/TestPage/TestPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test/:nr" element={<TestPage />} />
        <Route path="/result" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
