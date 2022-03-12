import '../App.css';
import React from 'react';

function LeaveForm() {
    return (
        <div>
           
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Apply for Leave</h6>
                                </div>
                                <div class="card-body">
                                    <form class="leaveappl">
                                        <div class="form-group row">
                                            <div class="col-sm-2 mb-5 mb-sm-0">
                                                <input type="text" class="form-control form-control-user" id="ID" placeholder="#ID"/>
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control form-control-user" id="Category" placeholder="Category"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control form-control-user" id="Reason" placeholder="Reason"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="#date">Date of leave: </label>
                                            <input id="date" type="date"/>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit">Submit</button>
                                            <br />
                                        </div>
                                    </form>
                                </div>
                            </div>
        </div>
        );
    }
    
    export default LeaveForm;