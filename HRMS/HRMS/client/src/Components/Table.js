import '../App.css';
import React from 'react';

function Table() {
    return (
        <div>
             <div className="container-fluid">


<div className="row">
                        <div className="col-lg-6">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Past Leaves</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>#Leave ID</th>
                                                    <th>Leave Date</th>
                                                    <th>Leave Day</th>
                                                    <th>Category</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>#Leave ID</th>
                                                    <th>Leave Date</th>
                                                    <th>Leave Day</th>
                                                    <th>Category</th>
                                                    <th>Status</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>12/05/2045</td>
                                                    <td>Thursday</td>
                                                    <td>Official Duty</td>
                                                    <td>Approved</td>

                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>12/05/2045</td>
                                                    <td>Thursday</td>
                                                    <td>Paid</td>
                                                    <td>Approved</td>

                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>12/05/2045</td>
                                                    <td>Thursday</td>
                                                    <td>Unpaid</td>
                                                    <td>Approved</td>

                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                       </div>
            </div>
        </div>

);
}

export default Table;