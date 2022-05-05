import { Component } from "react";
import img1 from '../../images/Forms.png';
import React from "react";
import ReactDOM from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
class Education extends Component {
    
    render(){
     
       return(
           <>
              
             <h2 className="mt-5  mb-4 pt-3 text-muted">Registration Form</h2>


             <div className="border mb-5">
                    <div className="row p-0 m-0">
                        <div className="col-md-3 py-1 border-right text-center">
                        
                        <h4>Personal Information  <FontAwesomeIcon className="text-success mr-1" icon ={faCheck}/></h4>
                        </div>
                        <div className="col-md-3 py-1 border-right text-center">
                        <h4> Education</h4>
                        </div>
                        <div className="col-md-3 py-1 border-right text-center">
                        <h4>Skills</h4>
                        </div>
                        <div className="col-md-3 py-1 text-center">
                        <h4>Experiance</h4>
                        </div>
                    </div>
             </div>

             <div className="row p-0 m-0">
             <div className="col-md-1">

             </div>
             <div className="col-md-4">
                <div className="container">
                            <img src={img1} className="w-75" alt="" />
                        </div>
                </div>
                <div className="col-md-1">

             </div>
                <div className="col-md-6">
                        <div className="container">
                          <label  className="text-dark ml-2">Your University </label>
                            <input type="text" className="form-control form-group py-3" placeholder="Unversity" />
                            <label  className="text-dark ml-2">Field Of Study </label>
                            <input type="text" className="form-control form-group py-3" placeholder="Field Of Study" />
                            <label  className="text-dark ml-2">Graduation Year </label>
                            <input type="number" className="form-control form-group py-3" placeholder="Graduation Year" />
                            <label htmlFor="grade" className="text-dark ml-2">Grade</label>
                            <select name ="grade" id="grade" className="form-control">
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                
                            </select>
                            <label htmlFor="educationLevel" className="text-dark ml-2 mt-2">Education Level</label>
                            <select name ="educationLevel" id="educationLevel" className="form-control">
                                <option value="Bachelor's Degree">Bachelor's Degree</option>
                                <option value="Master's Degree">Master's Degree</option>
                                <option value="Doctoral Degree">Doctoral Degree</option>
                                
                            </select>
                            
                        </div>
                </div>
                
                
                
             </div>
             <div className="container-fluid mb-1">
             <div className="text-right">
             <button className="btn bg-success px-5 mr-2">
                    <Link to="/personalInfo" className="text-white aboutpragragh text-bold cursor-pointer text-decoration-none" >Previous</Link>
                </button>
                <button className="btn bg-success px-5 my-4">
                <Link to="/Experiance" className="text-white aboutpragragh text-bold cursor-pointer text-decoration-none">Next</Link>
                </button>
                
             </div>
             </div>
           </>
       )
    }
}
export default Education;