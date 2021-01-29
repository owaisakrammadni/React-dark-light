// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';


function Room() {
  const [value, setValue] = React.useState(true);

  function Switch() {
    setValue((previous) => !previous)
  }

  return (
    <div className="main App">
      <div id={"bground"} className={(value === true) ? "Bright" : "Dark"}>
        <div id={"text"}>The Room is {(value === true) ? "Bright" : "Dark"}</div>
        <button onClick={Switch}>Change</button>
      </div>
    </div>
  )
}
ReactDOM.render(<Room />, document.getElementById("root"));