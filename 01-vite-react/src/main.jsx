import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const element1=(
  <a href="https://google.com" target="_blank">Click here</a>
);
const user='Sumit';
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'visit google',
  user
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
  {element1}
  <br/>
  {reactElement}
  <App/>
  </div>
)
