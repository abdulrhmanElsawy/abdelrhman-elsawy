import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Landing from './components/Landing';

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Numbers from "./components/Numbers";
import Story from "./components/Story";
import VideoSection from "./components/VideoSection";
import Services from "./components/Services";
import Rates from "./components/Rates";
import LatestWork from "./components/LatestWork";
import Copyright from "./components/Copyright";
import SideInfo from "./components/SideInfo";

function App() {
  return (
    <div className="App">
      <>
      <Navbar />
      <SideInfo /> 
      <Landing /> 
      <Numbers />   
      <Story />  
      <VideoSection />  
      <Services /> 
      <Rates />  
      < LatestWork/> 
      <Copyright />  

      </>
    </div>
  );
}

function Home() {
  return <h1>Welcome to the homepage</h1>;
}

export default App;
