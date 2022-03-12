import '../App.css';
import React from 'react';

function ApplyLeave() {
    return (
        <div>
           
           <div class="container-fluid">
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Task Management</h1>
                    </div>
                    <div class="row">

                        <div class="col-xl-4 col-md-6 mb-4">
                            <ol class="list-group list-group-numbered">
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">Total Tasks</div>

                                    </div>
                                    <span class="badge bg-primary style rounded-pill">14</span>
                                </li>
                            </ol>
                        </div>

                        <div class="col-xl-4 col-md-6 mb-4">
                            <ol class="list-group list-group-numbered">
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">Pending Tasks</div>
                                    </div>
                                    <span class="badge bg-primary style rounded-pill">14</span>
                                </li>
                            </ol>
                        </div>
                        <div class="col-xl-4 col-md-6 mb-4">
                            <ol class="list-group list-group-numbered">
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">Total Tasks Approved</div>

                                    </div>

                                    <span class="badge bg-primary style rounded-pill">14</span>
                           </li> </ol>
                        </div>

                        <div class="container">
                            <h3>Apply For leave</h3> <br />
                            <form class="user">
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" class="form-control form-control-user" id="exampleFirstName" placeholder="Name"/>
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control form-control-user" id="exampleLastName" placeholder="Employee ID"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-user" id="exampleInputEmail" placeholder="Reason For Leave"/>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Date For Leave"/>
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="password" class="form-control form-control-user" id="exampleRepeatPassword" placeholder="Which Type of Leave?"/>
                                    </div>
                                </div>
                                <button type="submit" name="log_in" class="btn btn-success btn-lg">Apply</button>

                            </form>
                        </div>


                    </div>

                </div>
        </div>
        );
    }
    
    export default ApplyLeave;