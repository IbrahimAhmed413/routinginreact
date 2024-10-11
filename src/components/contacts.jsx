import { Outlet } from "react-router-dom"
export default function Contact(){
    return(
        <>
            <h2 style={{textAlign:'center'}}>
                This is Contact Page
            </h2>
            <ul>
                <li>Name:Irbahim</li>
                <li>Phone:03431938944</li>
                <li><Outlet/></li>
            </ul>
         
        </>
    )
}