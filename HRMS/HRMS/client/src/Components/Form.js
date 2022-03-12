import '../App.css';
import React from 'react';

function Form() {
    return (
<div>
<br /> <br />
<div className="container-fluid">
                   

                    <div className="container">
                        <form className="user">
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input type="text" className="form-control form-control-user" id="exampleFirstName" placeholder="Name"/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control form-control-user" id="exampleLastName" placeholder="Employee ID"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Reason For OffBoarding"/>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input type="text" className="form-control form-control-user" id="exampleInputPassword" placeholder="Notice Period"/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control form-control-user" id="exampleRepeatPassword" placeholder="All Tasks Submitted?"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="formFile" className="form-label">Upload necesaary Files</label>
                                <input className="form-control" type="file" id="formFile"/>
                            </div>

                            <button type="submit" name="log_in" className="btn btn-success btn-lg">Apply</button>

                        </form>
                    </div>


</div>
</div>
        
);
}

export default Form;