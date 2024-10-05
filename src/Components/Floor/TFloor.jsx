import React from "react";
import vac from '../Floor/vac.png';
import occ from '../Floor/occ.png'
import "./Floor.css"


export default function TFloor(){
    return(
        <table className="Floor-Table">
            <thead>
                <tr>
                    <th colSpan={2}>Third Floor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Vacant</span>&nbsp;<img src={vac} style={{width:"10px"}} alt="vac" />&nbsp;&nbsp;&nbsp;<span>Occupied</span>&nbsp;<img src={occ} style={{width:"10px"}}alt="occ" /></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>SUITE ROOMS</td>
                    <td>SINGLE ROOMS</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#12e38c"}}>302-303</td>
                    <td style={{backgroundColor:"#12e38c"}}>301</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#12e38c"}}>304-305</td>
                    <td style={{backgroundColor:"#4682B4"}}>308</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#4682B4"}}>306-307</td>
                    <td style={{backgroundColor:"#12e38c"}}>309</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#4682B4"}}>310-311</td>
                    <td style={{backgroundColor:"#4682B4"}}>316</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#4682B4"}}>312-313</td>
                    <td style={{backgroundColor:"#4682B4"}}></td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#4682B4"}}>314-315</td>
                    <td style={{backgroundColor:"#4682B4"}}></td>
                </tr>
                
                </tbody>
        
        </table>
    )
}


