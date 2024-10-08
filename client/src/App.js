import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Community from './Pages/Community'
import StoreRecords from './Pages/StoreRecords'
import SetReminders from './Pages/SetReminders'
// import LoginSignup from './Pages/LoginSignup'
import GoToTop from './components/GoToTop/GoToTop'
import Footer from './components/Footer/Footer';
import Question from './components/Add-Question/Question';
import ViewQuestion from './components/ViewQuestion/Index';
import Auth from './components/Auth/Index';

import { useSelector, useDispatch } from 'react-redux';
import { selectUser, login, logout } from './feature/userSlice';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {

  // const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          email: authUser.email,
          displayName: authUser.displayName,
          photo: authUser.photoURL,
        }))
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch]);
  const PrivateRoute = ({ children }) => {
    const user = useSelector(selectUser);
    return user ? children : <Navigate to="/auth" />;
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/community" element={<PrivateRoute><Community /></PrivateRoute>} />
        <Route path="/add-question" element={<PrivateRoute><Question /></PrivateRoute>} />
        <Route path="/question" element={<PrivateRoute><ViewQuestion /></PrivateRoute>} />
        <Route path="/store-records" element={<PrivateRoute><StoreRecords /></PrivateRoute>} />
        <Route path="/set-reminders" element={<PrivateRoute><SetReminders /></PrivateRoute>} />

      {/* Public route */}
      <Route path="/auth" element={<Auth />} />
        </Routes>
        <GoToTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;