 import { Component } from "react";
import img1 from '../../images/Forms.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';
class Skills extends Component {
    skills = [];
    user = {
        id:localStorage.getItem('id'),
        courses :"",
        skillname :'',
        skillLevel : '',
        
    
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
                window.location.pathname = "profile";
               
            }
        }
        
        add_skill = () => {
            
            let y= document.getElementById("form2").checkValidity();
            if (!y) {
                alert("fill the felids")
            }
            else {
                this.skills.push(this.user.skillname);
                console.log(this.skills);
                document.getElementById("form2").reset();
        
      }
        }
    render(){
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
                        <div className="col-md-3 py-1  border-right text-center">
                        <h4><FontAwesomeIcon className="text-success mr-1" icon ={faCheck}/> Experiance</h4>
                        </div>
                        <div className="col-md-3 py-1 text-center">
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
                <div className="col-md-6">
                        <div className="container">
                          <form id="form1" onSubmit={this.sendData}>
                            <label htmlFor="">What courses have you taken?</label>
                            <select name ="courses"  id="courses" multiple size={1} onChange={this.getFormData} className="form-control">
                                <option value="course1">course1</option>
                                <option value="course2">course2</option>
                                <option value="course3">course3</option>
                                
                            </select>
                            <label htmlFor="" className="mt-2"> Your technical skills are:</label>
                            <div className="border form-control form-group ">
                              <span className="border bg-success text-white py-1 px-2 my-3 mx-2">skill_1</span>
                              <span className="border bg-success text-white py-1 px-2 my-3 mx-2">skill_2</span>
                              <span className="border bg-success text-white py-1 px-2 my-3 mx-2">skill_3</span>
                              <span className="border bg-success text-white py-1 px-2 my-3 mx-2">skill_4</span>
                              <span className="border bg-success text-white py-1 px-2 my-3 mx-2">skill_5</span>
                            </div>

                            <form action="" id="form2">
                            <label>Type any additional skills </label>
                            <input type="text" onChange={this.getFormData} className="form-control form-group" name="skillname" />
                            <label  className="text-dark ml-2 mt-2">Skill Level</label>
                            <select name ="skillLevel" id="skillLevel" onChange={this.getFormData} className="form-control">
                                <option  selected disabled> Choose your level</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                                
                            </select>
                            </form>
                            <h5 className="my-3">
                                      Click to add another skill 
                                      <button type="button" onClick={this.add_skill} className="border-none bg-transparent ml-2" ><FontAwesomeIcon className="text-success" icon ={faPlusSquare}/></button>
                            </h5>
                          </form>
                            
                        </div>
                </div>
                
                
                
             </div>

             <div className="container-fluid mb-1">
             <div className="text-right">
             <button className="btn bg-success px-5 mr-2">
                    <Link to="/experiance" className="text-white aboutpragragh text-bold cursor-pointer text-decoration-none" >Previous</Link>
                </button>
                <button  onClick={this.sendData} className="btn bg-success px-5 text-white aboutpragragh text-bold cursor-pointer">
                    Submit
                    {/* <Link to="/experiance" className="text-white aboutpragragh text-bold cursor-pointer text-decoration-none" >Next</Link> */}
                </button>
                
             </div>
             </div>
           </>
       )
    }
}
export default Skills;