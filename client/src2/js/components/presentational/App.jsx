import Login from "./js/components/login"
import { Container } from "reactstrap";

import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(<App />, document.getElementById("root"))

class App extends Component(){
    constructor(props){
        super(props)
    }
   render(){
       return(
           <div>
               <Login/>
          
           </div>
       )
   }
}

export default App