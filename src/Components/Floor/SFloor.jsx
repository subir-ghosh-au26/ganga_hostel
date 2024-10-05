import React from "react";
import vac from '../Floor/vac.png';
import occ from '../Floor/occ.png'
import "./Floor.css"


export default function SFloor(){
    return(
        <table className="Floor-Table">
            <thead>
                <tr>
                    <th colSpan={2}>Second Floor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Vacant</span>&nbsp;<img src={vac} style={{width:"10px"}} alt="vac" />&nbsp;&nbsp;&nbsp;<span>Occupied</span>&nbsp;<img src={occ} style={{width:"10px"}}alt="occ" /></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>SUITE ROOMS</td>
                    <td>SINGLE ROOMS</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#12e38c"}}>202-203</td>
                    <td style={{backgroundColor:"#12e38c"}}>201</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#12e38c"}}>204-205</td>
                    <td style={{backgroundColor:"#4682B4"}}>208</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#4682B4"}}>206-207</td>
                    <td style={{backgroundColor:"#12e38c"}}>209</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#4682B4"}}>214-215</td>
                    <td style={{backgroundColor:"#4682B4"}}>210</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#4682B4"}}>216-217</td>
                    <td style={{backgroundColor:"#4682B4"}}>211</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#4682B4"}}>218-219</td>
                    <td style={{backgroundColor:"#4682B4"}}>212</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#4682B4"}}></td>
                    <td style={{backgroundColor:"#4682B4"}}>213</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:"#4682B4"}}></td>
                    <td style={{backgroundColor:"#4682B4"}}>220</td>
                </tr>
                </tbody>
        
        </table>
    )
}


