import React, { Component } from 'react';
import './App.css';
// eslint-disable-next-line no-unused-vars

import Experience from './Components/Experience';
import GeneralInfo from './Components/GeneralInfo';
import EducationSection from './Components/EducationSection';
import Summary from './Components/Summary';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    }

  }

  submit = () => {
    this.setState({
      submitted: !this.state.submitted,
    })
  }

  
  render() {
        let btnElement = "";
        if (!this.state.submitted) {
          btnElement = <button className="submit" onClick={this.submit}>Submit</button>;
        } else {
          btnElement = <button className="edit" onClick={this.submit}>Edit</button>
        }
        return (
          <div className="container">
            <GeneralInfo submitted={this.state.submitted}/>
            <Summary submitted={this.state.submitted}/>
            <EducationSection submitted={this.state.submitted}/>
            <Experience submitted={this.state.submitted}/>
            {btnElement}
          </div>
        );
  }
  
}

export default App;
