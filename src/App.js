import './App.scss';
import { Routes, Route } from "react-router-dom";
import LandingPage from './components/Landing-Page/Landing-Page';
import CreateMeeting from './components/create-meeting/create-meeting';
import JoinMeeting from './components/join-meeting/join-meeting';
import Meeting from './components/meeting/meeting';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-meeting" element={<CreateMeeting />} />
        <Route path="/join-meeting" element={<JoinMeeting />} />
        <Route path="/meeting" element={<Meeting />} />
      </Routes>
    </div>
  );
}

export default App;
