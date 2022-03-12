import '../App.css';
import './cal.css';
import React from 'react';

function CalendarEmp() {
    return (
    
        <div>
        
        <div className="Container">
        <div className="wrapper">

<div className="container-calendar">
    <h3 id="monthAndYear"></h3>

    <div className="button-container-calendar">
        <button id="previous" onclick="previous()">&#8249;</button>
        <button id="next" onclick="next()">&#8250;</button>
    </div>

    <table className="table-calendar" id="calendar" data-lang="en">
        <thead id="thead-month"></thead>
        <tbody id="calendar-body"></tbody>
    </table>

    <div className="footer-container-calendar">
        <label for="month">Jump To: </label>
        <select id="month" onchange="jump()">
             <option value="0">Jan</option>
             <option value="1">Feb</option>
             <option value="2">Mar</option>
             <option value="3">Apr</option>
             <option value="4">May</option>
             <option value="5">Jun</option>
             <option value="6">Jul</option>
             <option value="7">Aug</option>
             <option value="8">Sep</option>
             <option value="9">Oct</option>
             <option value="10">Nov</option>
             <option value="11">Dec</option>
         </select>
        <select id="year" onchange="jump()"></select>
    </div>

</div>

</div>
                          
        </div>
                
        


        </div>
    );
}
export default CalendarEmp;
