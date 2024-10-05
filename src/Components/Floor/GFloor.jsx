import React from "react";
import vac from '../Floor/vac.png';
import occ from '../Floor/occ.png'
import "./Floor.css"


export default function GFloor(){
    return(
        <table className="Floor-Table">
            <thead>
                <tr>
                    <th colSpan={2}>Ground Floor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Vacant</span>&nbsp;<img src={vac} style={{width:"10px"}} alt="vac" />&nbsp;&nbsp;&nbsp;<span>Occupied</span>&nbsp;<img src={occ} style={{width:"10px"}}alt="occ" /></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td >SUITE ROOMS</td>
                    <td>SINGLE ROOMS</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#12e38c"}}>2-3</td>
                    <td style={{backgroundColor:"#12e38c"}}>1</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#12e38c"}}>4-5</td>
                    <td style={{backgroundColor:"#4682B4"}}>8</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#4682B4"}}>6-7</td>
                    <td style={{backgroundColor:"#12e38c"}}>9</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#12e38c"}}>10-11</td>
                    <td style={{backgroundColor:"#12e38c"}}>12</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#4682B4"}}>14-15</td>
                    <td style={{backgroundColor:"#4682B4"}}>13</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#4682B4"}}>18-19</td>
                    <td style={{backgroundColor:"#4682B4"}}>14</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#4682B4"}}>20-21</td>
                    <td style={{backgroundColor:"#4682B4"}}>15</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#4682B4"}}>22-23</td>
                    <td style={{backgroundColor:"#4682B4"}}>24</td>
                </tr>
                </tbody>
        
        </table>
    )
}


