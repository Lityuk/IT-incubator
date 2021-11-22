// !! we dont need  import React from 'react'

// import logo from './logo.svg';
import "./App.css";
import Header from "./Header.js";
import Technologies from "./Technologies.js";

// *** start

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// ***finish

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
};

export default App;
