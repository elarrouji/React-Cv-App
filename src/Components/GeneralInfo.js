import React, { Component } from 'react';
import './Components.css';

const FirstName = (props) => {
    return (
        <div>
            <input onChange={props.handleFirstNameChange} value={props.firstName} type="text" placeholder="Enter Your First Name" ></input>
        </div>
    )
}

const LastName = (props) => {
    return (
        <div>
            <input onChange={props.handleLastNameChange} value={props.lastName} type="text" placeholder="Enter Your Last Name" ></input>
        </div>
    )
}

const PhoneNumber = (props) => {
    return (
        <div>
            <input onChange={props.handlePhoneChange} value={props.phoneNumber} type="number" placeholder="Enter Your Number" ></input>
        </div>
    )
}

const Email = (props) => {
    return (
        <div>
            <input onChange={props.handleEmailChange} value={props.email} type="email" placeholder="Enter Your Email" ></input>
        </div>
    )
}

class GeneralInfo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: ""
        }
    }

    handleFirstNameChange = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    handleLastNameChange = (e) => {
        this.setState({
            lastName: e.target.value
        })
        console.log("zbi")
    }

    handlePhoneChange = (e) => {
        this.setState({
            phoneNumber: e.target.value
        })
    }
    
    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    
    render() {
        if (!this.props.submitted) {
            
            return (
                <div className="sectionContainer">
                    <h1>General Information</h1>
                    <FirstName 
                        handleFirstNameChange={this.handleFirstNameChange}
                        firstName={this.state.firstName}
                    />
                    <LastName 
                        handleLastNameChange={this.handleLastNameChange}
                        lastName={this.state.lastName}    
                    />
                    <PhoneNumber 
                        handlePhoneChange={this.handlePhoneChange}
                        phoneNumber={this.state.phoneNumber}
                    />
                    <Email 
                        handleEmailChange={this.handleEmailChange}
                        email={this.state.email}
                    />
                </div>
            )
        } else {
            return (
                <div className="cvGeneral" >
                    <div className="fullName">
                        <span className="firstName">{this.state.firstName}</span>
                        <span className="lastName">{this.state.lastName}</span>
                    </div>
                    <div className="contactDiv">
                        <span className="contactSpan">Contact</span>
                        <div className="phoneDiv">
                            <span className="phoneSpan">Phone: </span>
                            <span className="phoneInput"> {this.state.phoneNumber}</span>
                        </div>
                        <div className="emailDiv">
                            <span className="emailSpan">Email: </span>
                            <span className="emailInput" >{this.state.email}</span>
                        </div>
                    </div>
                </div>
            )
        }
    } 
}

export default GeneralInfo;