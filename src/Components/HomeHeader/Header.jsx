import { Component } from "react";
import './Header.css';
import CareerChoice from ".././Services/CareerChoice";
import {Link} from 'react-router-dom';


class Header extends Component {
    render(){
       return(
           <>
           <div className="bg d-flex justify-content-center align-items-center">
            <div>
                <h1 className="text-white">Find Your Next Job</h1>
                <h2 className="text-white">Make your training plan clear</h2>
                <div className=" form-container mt-4">
                    <form className="  m-aut0">
             
        
                            
      {/* <select name="languages"  className=" headerInput " id="lang" >
        <option value="javascript">current job</option>
        <option value="php">PHP</option>
        <option value="java">Java</option>
        <option value="golang">Golang</option>
        <option value="python">Python</option>
        <option value="c#">C#</option>
        <option value="C++">C++</option>
        <option value="erlang">Erlang</option>
      </select> */}


<div className="w-100">
<select name="languages"  className="borderLeft headerInput w-75" id="lang" >
        <option value="javascript" >     The Target Job</option>
        <option value="php">PHP</option>
        <option value="java">Java</option>
        <option value="golang">Golang</option>
        <option value="python">Python</option>
        <option value="c#">C#</option>
        <option value="C++">C++</option>
        <option value="erlang">Erlang</option>
      </select>
                        <Link to="/CareerChoice" className="headerBtn">Go</Link>
</div>

      
                    </form>
                </div>
            </div>
           </div>
           </>
       )
    }
}
export default Header;