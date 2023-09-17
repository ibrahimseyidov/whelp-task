import React from 'react'
import 'assets/styles/reset.css';
import 'assets/styles/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Persona from 'pages/Persona'
import NotFound from 'components/common/NotFound/NotFound'
import UserEdit from 'pages/UserEdit';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Persona />} />
          <Route path='/edit-page/user/:userid' element={<UserEdit />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App