import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Community from './Pages/Community'
import StoreRecords from './Pages/StoreRecords'
import SetReminders from './Pages/SetReminders'
import LoginSignup from './Pages/LoginSignup'

function App() {
  return (
    <div>
      <BrowserRouter>  {/* 27:47 to 29:48*/}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/community" element={<Community/>} />
          <Route path="/store-records" element={<StoreRecords/>} />  {/*not used yet */}
          <Route path="/set-reminders" element={<SetReminders/>} />  {/*not used yet */}
          <Route path="/login-signup" element={<LoginSignup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
