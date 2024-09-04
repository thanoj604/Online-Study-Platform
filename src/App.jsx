import React from "react";
import {Route, Routes} from "react-router-dom"
import Home from "./Components/Home";
import Course from "./Components/Course";
import Sighin from "./Components/Sighin";
<link rel="stylesheet" href="../index.css" />

function App() {
  return (
    <>
      {/* <div>
        <Home/>
      </div> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Course" element={<Course/>}/>
        <Route path="/sighin" element={<Sighin/>}/>
      </Routes>
    </>
  );
}

export default App;
