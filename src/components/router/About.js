import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Info from "./Info";

const About = () => {
  return (
    <div className='--center-all'>
      <h1>About Page</h1>
      <p>
        Welcome to the <b>About</b>
        Page
      </p>
      <Routes>
        <Route path="info" element={<Info />} />
      </Routes>
    </div>
  )
}

export default About
