import "./index.css";
// import React from 'react';
//  import ReactDOM from 'react-dom/client';
import Header from "./header";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contacts = () =>{

    return (
        <>
        <Header name="Recipe Finder"/> 
        <div className="Contact">
        <div className="form-box login">
        <form action ="#">
            <h2>CONTACT US</h2>
            <div className="input-box">
                <span className="icon">
                <i className="fas fa-user"></i>
                </span>
                 <input type = "Name" required/>
                 <label>Name</label>
            </div> 
            <div className="input-box">
                <span className="icon">
                <i className="fas fa-envelope"></i>
                </span>
                
                 <input type = "email"  required/>
                 <label>Email</label>
            </div>
                <label className="typeYourMessage">Type your message</label>
                <textarea id="message" name="message" required></textarea>
                <input type="submit" value="Submit"/>
            
        </form>
        </div>
        </div>
        <div className = "Address">
            <span className = "icon"></span>
                    <div className="text">
                       <label>Address</label>
                       <p>IITJ Karwar, Jodhpur - 342307, Rajasthan</p>
                    </div>

            <span className = "icon"></span>
                    <div className="text">
                       <label>Phone</label>
                       <p>507-475-6094</p>
                    </div>

            <span className = "icon"></span>
                    <div className="text">
                       <label>Email</label>
                       <p>abhikashyap4563@gmail.com  b22cs001@iitj.ac.in</p>
                    </div>
        </div>
        </>
);
};

export default Contacts;