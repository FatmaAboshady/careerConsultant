import { Component } from "react";
import img1 from '../../images/Recommendation.png';
import './ServicesBackgroung.css';
import './CareerTemplate.css';

import {Link} from 'react-router-dom';
import Footer from "../Footer/Footer";
import CareerTemplate from "./CareerTemplate";
class CareerChoice extends Component {
    render(){
       return(
           <>

           <div className="services-bg d-flex align-items-center justify-content-center">
               <div className="w-50">
               <h3 className="text-white mb-5 ">“ There Is No Passion To Be Found In Playing 
              Small - In Settling For A Life That Is Less 
                Than You Are Capable Of Living ”</h3>
                <h4 className="text-white ">NELSON MANDELA</h4>
               </div>
           </div>

              {/* <div className="row p-0 m-0">
              <div className=" col-md-6 overflow-hidden">
              <img src={img1} alt="" className="w-75 " />
              </div>
             
              <div className="col-md-6 d-flex align-items-center ">
                <h3 className="text-muted">Your Personal <span className="text-success">Career Plan</span></h3>
              </div>
                </div> */}
                <h2 className="text-muted text-center my-4">Your Personal <span className="text-success">career Plan</span></h2>
                <CareerTemplate/>
                <div className="my-5 w-auto ">
                  <div className="d-flex justify-content-center">
                  <button className="btn bg-main px-5  text-center">
                    <Link to="/Training" className="text-white text-center  text-bold cursor-pointer text-decoration-none" >view your trining plan</Link>
                </button>

                  </div>
                
                

                </div>

                



                <Footer/>
           </>
       )
    }
}
export default CareerChoice;
