import React, { Component } from 'react'
import '../CSS/mainpage.css'
import developer from '../Images/flat-design-web-developers/4882464.jpg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class MainPage extends Component {
    render() {
        return (
            <>
            <div className="mainContainer">
                <div className="maintext">
                <div className="title">
                Find your <span>CollegeMate</span> as your <span>ProjectMate.</span> 
                </div>
                <p>
                 find a well skilled developer for your new project idea and learn & build.
                 </p>
                 <br/>
                    <Link class="btn btn-primary px-5 py-2" to="/login"  >Search Your Mate</Link>
                </div>
                <div className="mainimg"><img src={developer} alt="" /></div>
            </div>
            </>
        )
    }
}
