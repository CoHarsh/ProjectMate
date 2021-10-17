import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="container " >
                   <div style={{"fontSize":"32px","color":"#3d5aff","fontWeight":"900"}} className="text-center my-4">  New To this? </div>
                    <ul className="">
                        <li className="my-3"  style={{"fontSize":"20px","fontWeight":"600"}}>Haven't any account? Sign-Up here else Login</li>
                        <li className="my-3"  style={{"fontSize":"20px","fontWeight":"600"}}>Fill the required filed and set your profile with your development skills</li>
                        <li className="my-3"  style={{"fontSize":"20px","fontWeight":"600"}}>Find your Required teck stack person and send him request!</li>
                        <li className="my-3"  style={{"fontSize":"20px","fontWeight":"600"}}>Once request accepted chat and share your idea and build & learn.</li>
                    </ul>
                </div>
            </div>
        )
    }
}
