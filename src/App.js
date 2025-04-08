

// The git hub pages that means the pages hosted by the .github.io is not properly working with the router:
// So we have to remove the hole part of the above and just need


// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
import Alert from './Components/Alert'
// import { useFormState } from 'react-dom';
import About from './Components/About'

// In order to ues the react touter Dom have to import this
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// In the V6 update:
// import { Routes, Route } from 'react-router-dom';

// Just import this broh to achive the react router dom

import {
  Routes,
  Route
} from 'react-router-dom';

// let name="Kunj"

function App() {

  const [alert , setAlert]=useState(null)

  // Making the set alert manualy:
  const showAlert=(message , type )=>{
    setAlert({
      msg: message,
      type : type
    })

    // Now wanted to dlt the alert after some time:
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const [mode , setMode] = useState('light')//this is the var which is going to tell us that the dark mode is enable or not?
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      showAlert("Dark mode has been implemented to the web" , "success")
      document.title='TextUtils-DarkMode🖤'
      // setTimeout(() => {
      //   document.title = 'Best for the Text😎'
      // }, 2000);
      // setTimeout(() => {
      //   document.title = 'made by kunj'
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been implemented to the web" , "success")
      document.title='TextUtils-LightMode🤍'
    }
  }


  return (
    // <>
    //   <Navbar title="TextUtils" mode={mode} about="About" toggleMode={toggleMode}/>
    //   <Alert alert={alert}/>
    //   <div className="container my-3">
    //   <Routes>


    //   {/* Now by using this props we are able to use this components by manyer time and for different web also:*/}
    //     {/* This is before we have took the react router Dom */}
    //   {/* <TextForm heading="Enter the text here to analyze" mode={mode} showAlert={showAlert}/> */}

    //   {/* This is the part of the switch */}

    //   <Route path="/about" element={<About />} />
    //   <Route path="/" element={<TextForm heading="Enter the text here to analyze" mode={mode} showAlert={showAlert}/>} />

    //   {/* Now i want that t manage hole state of the var through the APP.JS ONLY  */}



    // </Routes>
    //   </div>
    // </>
      <>
        <Navbar title="TextUtils" mode={mode} about="About" toggleMode={toggleMode} />
        <Alert alert={alert} />
    
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About  mode={mode} showAlert={showAlert}/>} />
            <Route
              exact path="/"
              element={
                <TextForm
                  heading="Enter the text here to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </>
  );
}

export default App;
