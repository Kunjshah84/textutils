// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
// let name="Kunj"

function App() {
  return (
    // <>
    // <h1>This is the illustration why we have to add the main tag to wrap the JSX code:</h1>
    //   <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with master kunj shah
    //     </a>
    //   </header>
    // </div>
    // </>
    // <>
    //   <nav>
    //     <li>Home</li>
    //     <li>about</li>
    //     <li>contect number</li>
    //   </nav>
    //   <div className="contanier">
    //     <h1>hello {name}</h1>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae, sequi possimus doloribus exercitationem excepturi a itaque praesentium unde iste, reprehenderit voluptates ut eligendi rem perferendis, dolore omnis magnam dicta.
    //     </p>
    //   </div>
    //   <div className="blanck">lovely</div>
    // </>
    // We have changed this hole code with the help of just single component!
    <>
      <Navbar title="TextUtils" about="About TesxtUtils"/>
      {/* Now by using this props we are able to use this components by manyer time and for different web also:*/}
      <div className="container my-3">
        <TextForm heading="Enter the text here to analyze"/>
      </div>
    </>

  );
}

export default App;
