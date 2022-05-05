 import { Component } from "react";
import img1 from '../../images/Forms.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
class Experiance extends Component {
    projects =[];
    companies =[];

    user = {
        id:localStorage.getItem('id'),
        job :"",
        companyName :"",
        jobTitle: "",
        jobLevel: "",
        from : "" ,
        to :"",
        project : {
            projectTitle : '',
            projectDescription : '',
            periodOfProject : '',
            UserPeriodOfProject : '',
            projectSize : '',
            technicalSkills : '',
        }

        }
        getFormData =(e)=> {
            this.user[e.target.name]=e.target.value ;
            console.log(this.user);
        }
        
        sendData = async(e) => {
            e.preventDefault();
           
          let x= document.getElementById("form1").checkValidity();
          if (!x) {
              alert("Please fill this field");
          }
            else{
              window.location.pathname = "skills";
               
            }
        }
        
        
        addProject = (e) =>{
            this.user[e.target.name]=e.target.value ;
            console.log(this.user);
        }
      add_company =(e) => {
        let x= document.getElementById("form1").checkValidity();
        if (!x) {
          alert("fill the felids")
      }
      else {
        this.companies.push(this.user);
        console.log(this.companies);
       
        document.getElementById("form1").reset();
        document.getElementById("form2").reset();
      }
      }
      add_projects =(e) => {
        let x= document.getElementById("form2").checkValidity();
        if (!x) {
          alert("fill the felids")
      }
      else {
        this.projects.push(this.user.project);
        console.log(this.projects);
       
        document.getElementById("form2").reset();
      }
      }
    constructor(props) {
        super(props);
        this.state = { value:'' }; // 0: no show, 1: show yes, 2: show no.
      }
     onChange =e=> {
        this.setState({value : e.target.value});
     }
    render(){

        const {value}= this.state;
       return(
           <>
              <div className="pt-5">
             <h2 className="my-5">Registration Form</h2>
             </div>

             <div className="border mb-5">
                    <div className="row p-0 m-0">
                        <div className="col-md-3 py-1 border-right text-center">
                        
                        <h4> <FontAwesomeIcon className="text-success mr-1" icon ={faCheck}/>Personal Information</h4>
                        </div>
                        <div className="col-md-3 py-1 border-right text-center">
                        <h4> <FontAwesomeIcon className="text-success mr-1" icon ={faCheck}/> Education</h4>
                        </div>
                        <div className="col-md-3 py-1 border-right text-center">
                        <h4>Experiance</h4>
                        </div>
                        <div className="col-md-3 py-1  text-center">
                        <h4>Skills</h4>
                        </div>
                    </div>
             </div>
         <div className="row p-0 m-0">
             <div className="col-md-6">
                <div className="container">
                            <img src={img1} className="w-75" alt="" />
                        </div>
                </div>
                <div className="col-md-6  d-flex align-items-center">
                    
                        <div className="container">
                        <h4 className="mb-3">Have you ever worked before ?!</h4>
                        <form action="" id ="form1" onSubmit={this.sendData}>
                        <input type="radio" name="job" id="" value="yes" onChange={this.onChange} /> <label htmlFor="" className="mr-4">YES</label>
                        <input type="radio" name="job" id="" value="no"  onChange={this.onChange}/><label htmlFor="">NO</label>

                        {
                            value==='yes' &&(
                           <div className=" p-2">
                              <input type="text" onChange={this.addProject} className="form-control border border-success form-group" placeholder="Company name" required name="companyName"/>
                              <input type="text" onChange={this.addProject} className="form-control border border-success form-group" placeholder="Job title " required name="jobTitle"/>
                               <select name="jobLevel" onChange={this.addProject} required className=" form-control border border-success form-group">
                                  <option disabled selected> Choose your level in the company </option>
                                  <option value="junior">Junior</option>
                                  <option value="senior">Senior</option>
                                  <option value="advanced">Advanced</option>
                              </select>
                              <input type="text" required onChange={this.addProject} className=" form-control w-25 border-success float-left mr-3" placeholder="From" name="form" ></input>
                              <input type="text" required onChange={this.addProject} className="form-control w-25 border-success float-left"  placeholder="To"  name="to" ></input>
                              <div className="clearfix"></div>
                              <form id="form2" >
                                  <h4 className="pt-4">Your projects !</h4>
                                  <input type="text" required className="form-control mt-3 form-group" onChange={this.addProject} placeholder="Project title "name="projectTitle"/>
                                  <textarea required  name="projectDescription" onChange={this.addProject} className="form-control mt-3 form-group" placeholder="Project description"></textarea>
                                  <input type="text" required  name ="periodOfProject" onChange={this.addProject} className="form-control mt-3 form-group" placeholder="Period of project (in months)"/>
                                  <input type="text" required  name ="UserPeriodOfProject" onChange={this.addProject} className="form-control mt-3 form-group" placeholder=" period of your work in the project (in months)"/>
                                  <p className="font-weight-bold">Size of project</p>
                                  <select name="projectSize" id="" onChange={this.addProject} className="form-control mt-3 form-group">
                                    <option value="low">low</option>
                                    <option value="meduim">meduim</option>
                                    <option value="high">high</option>
                                  </select>
                                  <p className="font-weight-bold">Skills which used in this project</p>
                                  <select name="technicalSkills" size="1" onChange={this.addProject}  id="" className="form-control form-group" multiple>
                                    <option value="Java">Java </option>
                                    <option value="c++">c++</option>
                                    <option value="c#">c#</option>
                                  </select>


                                   <h5 className="my-3">
                                      Click button if you want to add another project ?!
                                      <button type="button" onClick={this.add_projects} className="border-none bg-transparent ml-2" ><FontAwesomeIcon className="text-success" icon ={faPlusSquare}/></button>
                                   </h5>

                                   <div className="border my-4 w-50 m-auto "></div>
                                   <h5 className="my-3">
                                      Click to add another companies 
                                      <button type="button" onClick={this.add_company} className="border-none bg-transparent ml-2" ><FontAwesomeIcon className="text-success" icon ={faPlusSquare}/></button>
                                   </h5>
                              </form>
                           </div> )
                        }
                         </form>
                        
                         
                               

                       
                        
                        </div>
                </div>
                
                
                
             </div>

             <div className="container-fluid mt-4 mb-1">
             <div className="text-right">
             <button className="btn bg-success px-5 mr-2">
                    <Link to="/education" className="text-white aboutpragragh text-bold cursor-pointer text-decoration-none" >Previous</Link>
                </button>
                <button className="btn bg-success px-5 text-white aboutpragragh text-bold cursor-pointer" onClick={this.sendData}>
                    Next
                    {/* <Link to="/profile" className="text-white aboutpragragh text-bold cursor-pointer text-decoration-none" >Submit</Link> */}
                </button>
                
             </div>
             </div>
             
           </>
       )
    }
}
export default Experiance;