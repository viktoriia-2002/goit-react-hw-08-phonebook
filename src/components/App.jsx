import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Form from './Form/Form.jsx';
import Navbar from '../components/Navbar/Navbar';
import { authOperations } from '../redux/auth';
import Home from './Home';
import Contacts from './Contacts';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Form type="register" />} />

        <Route path="/login" element={<Form type="login" />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};

export default App;
