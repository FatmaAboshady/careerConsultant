import { Component } from "react";
import img1 from '../../images/Computer.png';
import './Login.css';
import {Link} from 'react-router-dom';
class Login extends Component {
    render(){
       return(
           <>
              <div className="row p-0 m-0">
                <div className="col-md-6 bg-success d-flex justify-content-center align-items-center leftSide">
                    <img src={img1} className="w-75" alt="" />
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                   <div>
                   <h3 className="text-success text-center pb-4">Please Log In Frist</h3>
                    <input type="Email" placeholder="Email" className="w-100 py-2 mb-2 border border-none" />
                    <input type="password" placeholder="Password" className="w-100 py-2 border border-none"/>
                    <div className="text-right">
                        <a href="" className="text-muted">Forget password?</a>
                    </div>
                    <button type="submit" className="text-white bg-success w-100 btn mt-3">Log In</button>
                    <div className="text-center mt-3">
                    <Link to="/Register" className="text-muted">create an account</Link>
                    </div>
                   </div>
                </div>

              </div>
              
              
           </>
       )
    }
}
export default Login;
