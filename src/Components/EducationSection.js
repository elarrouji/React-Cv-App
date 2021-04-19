import React, { Component } from 'react';

import uniqid from "uniqid";

const Diploma = (props) => {
  return (
    <div>
      <input onChange={props.handleDimploma} value={props.diploma} type="text" placeholder="Enter The Title Of The Diploma"></input>
    </div>
  )
}

const School = (props) => {
  return (
    <div>
      <input onChange={props.handleSchool} value={props.school} type="text" placeholder="Enter The School Name"></input>
    </div>
  )
}

const Major = (props) => {
  return (
    <div>
      <input onChange={props.handleMajor} value={props.major} type="text" placeholder="Enter The Major"></input>
    </div>
  )
}

const Period = (props) => {
  return (
    <div>
      <input onChange={props.handleFrom} value={props.from} type="number" placeholder="Enter The Year You Started"></input>
      <input onChange={props.handleTo} value={props.to} type="number" placeholder="Enter The Year You Finished"></input>
    </div>
  )
} 

class EducationSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educationExp: [
        {
          diploma: "",
          school: "",
          major: "",
          from: "",
          to: ""        
        }
      ]
    }
  }

  addNew = () => {
    this.setState({
      educationExp: this.state.educationExp.concat({
        diploma: "",
        school: "",
        major: "",
        from: "",
        to: ""  
      })
    })
  }

  handleDimploma = (e) => {
    let index = e.target.parentNode.parentNode.id;
    this.setState({
      educationExp : this.state.educationExp.map((obj, i) => {
        if (i == index) {
          return ({
            diploma: e.target.value,
            school: obj.school,
            major: obj.major,
            from: obj.from,
            to: obj.to
          }) 
        } else {return obj}
      })
    })
  }

  handleSchool = (e) => {
    let index = e.target.parentNode.parentNode.id;
    this.setState({
      educationExp : this.state.educationExp.map((obj, i) => {
        if (i == index) {
          return ({
            diploma: obj.diploma,
            school: e.target.value,
            major: obj.major,
            from: obj.from,
            to: obj.to
          }) 
        } else {return obj}
      })
    })
  }

  handleMajor = (e) => {
    let index = e.target.parentNode.parentNode.id;
    this.setState({
      educationExp : this.state.educationExp.map((obj, i) => {
        if (i == index) {
          return ({
            diploma: obj.diploma,
            school: obj.school,
            major: e.target.value,
            from: obj.from,
            to: obj.to
          }) 
        } else {return obj}
      })
    })
  }

  handleFrom = (e) => {
    let index = e.target.parentNode.parentNode.id;
    this.setState({
      educationExp : this.state.educationExp.map((obj, i) => {
        if (i == index) {
          return ({
            diploma: obj.diploma,
            school: obj.school,
            major: obj.major,
            from: e.target.value,
            to: obj.to
          }) 
        } else {return obj}
      })
    })
  }

  handleTo = (e) => {
    let index = e.target.parentNode.parentNode.id;
    this.setState({
      educationExp : this.state.educationExp.map((obj, i) => {
        if (i == index) {
          return ({
            diploma: obj.diploma,
            school: obj.school,
            major: obj.major,
            from: obj.from,
            to: e.target.value
          }) 
        } else {return obj}
      })
    })
  }

  delete = () => {
    this.setState({
      educationExp: this.state.educationExp.slice(0, this.state.educationExp.length -1 )
    })
  }

  render() {
    if(!this.props.submitted) {
      let dltBtn = null;
      if (this.state.educationExp.length > 1) {
        dltBtn = <button className="dltBtn" onClick={this.delete}>Delete</button>
      }
      let element = this.state.educationExp.map((elem, index) => {
        return (
          <div className="item" id={index}>
            <Diploma diploma={elem.diploma} handleDimploma={this.handleDimploma}/>
            <School school={elem.school} handleSchool={this.handleSchool} />
            <Major major={elem.major} handleMajor={this.handleMajor} />
            <Period from={elem.from} to={elem.to} handleFrom={this.handleFrom} handleTo={this.handleTo}  />
          </div>
        )
      })
      return (
        <div className="sectionContainer">
          <h1>Education Background</h1>
          {element}
          <button className="addBtn" onClick={this.addNew}>Add</button>
          {dltBtn}
        </div>
      )
    } else {
      let content = this.state.educationExp.map((elem, index) => {
        return (
          <div className="educationItem">
            <div className="diplomaDiv">
              <span className="diplomaSpan" >{elem.diploma}:</span>
              <span className="majorSpan" >{elem.major}</span>
            </div>
            <div className="schoolDiv" >
              <span className="schoolSpan" >{elem.school}</span>
              <span className="periodSpan" >( {elem.from} - {elem.to} )</span>
            </div>
          </div>
        )
      })
      return (
        <div className="cvEducation" >
          <h1 className="educationTitle" >Educational Background</h1>
          <div className="educationContainer" >{content}</div>
        </div>
      ) 
    }
  }

}


export default EducationSection;