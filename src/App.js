// import logo from './logo.svg';
import './App.css';

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
    <>
  {/* &lt;&gt; */}
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        TEXTUTILS
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              About
            </a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
</>

  );
}

export default App;
