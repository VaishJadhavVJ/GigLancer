import React, {useState} from "react";
import "./Featured.scss";
//import { useNavigate } from "react-router-dom";

function Featured() {
  return (
          <section class="w-100" >
            <div class="container-fluid">
              <div class="search-form">
                <div class="col-lg-12 col-xl-11">
                  <div class="card text-black" id="con">
                    <div class="card-body p-md-5">
                      <h1>
                        Find the perfect <span>freelance</span> services for your business
                      </h1>
                      <div class="row justify-content-center">
                      <div class="col-md-12 col-lg-12 col-xl-5 order-2 order-lg-1">
                        <form class="mx-2 mx-md-8">
                              <div class="d-flex flex-row justify-content-between align-items-center mb-4">
                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0" width="100%" height="100%">
                                  <input type="text" id="form3Example1c" class="col-md-6 col-lg-6 form-control" placeholder="Your Name" required />
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <input type="email" id="form3Example3c" class="form-control" placeholder="Your Email"  required/>
                               
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-justify mb-4">
                              <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <input type="text" id="form3Example4c" class="form-control" placeholder="Project Domain" required />
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <textarea id="textArea" class="form-control" placeholder="Project Description" required></textarea> 
                              </div>
                            </div>

                            <div class="form-check d-flex justify-content-center mb-5">
                              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" required/>
                              <label class="form-check-label" for="form2Example3">
                                I agree all statements in <a href="#!">Terms of service</a>
                              </label>
                            </div>
                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button type="submit" id="button" class="btn btn-primary btn-lg">Submit</button>
                              </div>
                        </form>
                      </div>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section>
    //       <div className="popular">
    //         <span>Popular:</span>
    //         <button>Web Design</button>
    //         <button>WordPress</button>
    //         <button>Logo Design</button>
    //         <button>AI Services</button>
    //       </div>
    //     </div>
    //     <div className="right">
    //       <img src="./img/man.png" alt="" />
    //     </div>
    //   </div>
    // </div>
  );
}

export default Featured;
