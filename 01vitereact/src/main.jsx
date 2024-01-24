import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

function Myapp(){
   return(
      <div>
         <h1>suraj my app</h1>
      </div>
   );
}
// const ReactElement = {
//    type:'a',
//    probs:{
//        href:'https://linkdin.com',
//        target:'_blank',
//        color1:'black'
//    },
//    word:" visit Linkdin (only for professionals )"
// } 

const anotherElement = (
   <a href='https://google.com' target='_blank'>Visit Google</a>
)

const anotheruser = "suraj aur vo"

const reacteElement = React.createElement(
      'a', //parameter expected PROPER SYNTAX
      {href: 'https://github.com', target:"_blank"},
      'click me to visit github',
       anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>
   //  <>
   //  Myapp()
   //  <App />
   //  <Myapp />
   //  </>
   // Myapp()
 // </React.StrictMode>,

//   <ReactElement/>
//   ReactElement()

   // ReactElement
   // anotherElement
   reacteElement
   // <App/>
)
