import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <>
    {/* contact Component */}
    <div className='contactContainer'>
        <h1 className='contactHead'>
            Reach out to us 
        </h1>
        <div className='conatctForm'>
            <div>
                <img src="./234.png" alt='...' />
            </div>
            <div style={{width:"50%"}}>
                <h2 className='contactcontent'>
                    Feel Free to connect
                </h2>
                <h3 style={{color:'#1d2e50', fontWeight:"500"}}>Say hello to the world of toys<br/>
                Be a part of the family and<br/>feel free to connect with us!!</h3>
                <input type="text" placeholder="Enter your Email" style={{width:"40%" , padding:"1%" , border:"none", marginTop:"20px"}}/> <br/>
                <button className='contactbtn'>
                    Connect with us
                </button>
            </div>
        </div>
    </div>
    </>
  )
}
