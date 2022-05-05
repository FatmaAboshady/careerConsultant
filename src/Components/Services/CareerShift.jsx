import { Component } from "react";
import img1 from '../../images/Recommendation.png';
import './ServicesBackgroung.css';
import './CareerTemplate.css';

import {Link} from 'react-router-dom';
import Footer from "../Footer/Footer";
import CareerTemplate from "./CareerTemplate";

class CareerShift extends Component {
    render(){
       return(
           <>

           <div className="services-bg d-flex align-items-center justify-content-center">
               <div className="w-50">
               <h3 className="text-white mb-5 ">you are far away this job 
                    you need to make career shift</h3>
                    <h4 className="text-white ">
                    “It Is Never To Late To Start”
                    </h4>
                <h4 className="text-white ">NELSON MANDELA</h4>
               </div>
           </div>

              <div className="row p-0 m-0">
              <div className=" col-md-6 overflow-hidden">
              <img src={img1} alt="" className="w-75 " />
              </div>
             
              <div className="col-md-6 d-flex align-items-center ">
                <h3 className="text-muted">Your Personal <span className="text-success">Career Plan</span></h3>
              </div>
                </div>
                <CareerTemplate/>


                <Footer/>
           </>
       )
    }
}
export default CareerShift;
