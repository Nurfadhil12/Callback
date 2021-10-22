import './App.css';
import React from "react";
import MiniTable  from './MiniTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Callback from './Callback';



function App() {
    return ( 
        <div className = "App">
            {/* heloo
            <MiniTable/> */}
            <h1>List Of Users</h1>
            <Callback/>
         </div>
        
    );
}

export default App;