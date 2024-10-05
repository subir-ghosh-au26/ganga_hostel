import React from "react";
import vac from '../Floor/vac.png';
import occ from '../Floor/occ.png'
import "./Floor.css"


export default function FFloor(){
    return(
        <table className="Floor-Table">
            <thead>
                <tr>
                    <th colSpan={2}>First Floor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Vacant</span>&nbsp;<img src={vac} style={{width:"10px"}} alt="vac" />&nbsp;&nbsp;&nbsp;<span>Occupied</span>&nbsp;<img src={occ} style={{width:"10px"}}alt="occ" /></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>SUITE ROOMS</td>
                    <td>SINGLE ROOMS</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#12e38c"}}>102-103</td>
                    <td style={{backgroundColor:"#12e38c"}}>101</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#12e38c"}}>104-105</td>
                    <td style={{backgroundColor:"#4682B4"}}>108</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#4682B4"}}>106-107</td>
                    <td style={{backgroundColor:"#12e38c"}}>109</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#12e38c"}}>110-111</td>
                    <td style={{backgroundColor:"#12e38c"}}>112</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#4682B4"}}>114-115</td>
                    <td style={{backgroundColor:"#4682B4"}}>113</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#4682B4"}}>118-119</td>
                    <td style={{backgroundColor:"#4682B4"}}>114</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#4682B4"}}>120-121</td>
                    <td style={{backgroundColor:"#4682B4"}}>115</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#4682B4"}}>122-123</td>
                    <td style={{backgroundColor:"#4682B4"}}>124</td>
                </tr>
                </tbody>
        
        </table>
    )
}


