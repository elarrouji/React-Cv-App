import React, { Component } from 'react';

function Position(props) {
    return (
        <div>
            <input onChange={props.handlePosition} value={props.position} type="text" placeholder="Enter Your Position Title"></input>
        </div>
    )
}

function Company(props) {
    return (
        <div>
            <input onChange={props.handleCompany} value={props.company} type="text" placeholder="Enter Your Company Name"></input>
        </div>
    )
}

function Period(props) {
    return (
        <div>
            <input onChange={props.handleFrom} value={props.from} placeholder="Enter The Year Your Started" type="text"></input>
            <input onChange={props.handleTo} value={props.to} placeholder="Enter The Year You Finished" type="text"></input>
        </div>
    )
}


class Experience extends Component {
    constructor(props) {
      super(props);
      this.state = {
        experience: [
          {
            position: "",
            company: "",
            from: "",
            to: ""        
          }
        ]
      }
    }
  
    addNew = () => {
      this.setState({
        experience: this.state.experience.concat({
            position: "",
            company: "",
            from: "",
            to: ""  
        })
      })
    }
  
    handlePosition = (e) => {
      let index = e.target.parentNode.parentNode.id;
      this.setState({
        experience : this.state.experience.map((obj, i) => {
          if (i == index) {
            return ({
              position: e.target.value,
              company: obj.company,
              from: obj.from,
              to: obj.to
            }) 
          } else {return obj}
        })
      })
    }
  
    handleCompany = (e) => {
      let index = e.target.parentNode.parentNode.id;
      this.setState({
        experience : this.state.experience.map((obj, i) => {
          if (i == index) {
            return ({
              position: obj.position,
              company: e.target.value,
              
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
        experience : this.state.experience.map((obj, i) => {
          if (i == index) {
            return ({
              position: obj.position,
              company: obj.company,
              
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
        experience : this.state.experience.map((obj, i) => {
          if (i == index) {
            return ({
              position: obj.position,
              company: obj.company,
              from: obj.from,
              to: e.target.value
            }) 
          } else {return obj}
        })
      })
    }

    delete = () => {
      this.setState({
        experience: this.state.experience.slice(0, this.state.experience.length -1 )
      })
    }
  
    render() {
      let dltBtn = null;
      if (this.state.experience.length > 1) {
        dltBtn = <button className="dltBtn" onClick={this.delete}>Delete</button>
      }
      if(!this.props.submitted) {
        let element = this.state.experience.map((elem, index) => {
          return (
            <div className="item" id={index}>
              <Position position={elem.position} handlePosition={this.handlePosition}/>
              <Company company={elem.company} handleCompany={this.handleCompany} />
              <Period from={elem.from} to={elem.to} handleFrom={this.handleFrom} handleTo={this.handleTo}  />
            </div>
          )
        })
        return (
          <div className="sectionContainer">
            <h1>Professionel Experience</h1>
            {element}
            <button className="addBtn" onClick={this.addNew}>Add</button>
            {dltBtn}
          </div>
        )
      } else {
        let content = this.state.experience.map((elem, index) => {
          return (
            <div className="expItem">
              <div className="positionDiv" >
                <span className="positionSpan" >{elem.position}:</span>
                <span className="periodSpan" >( {elem.from} - {elem.to} )</span>
              </div>
              <div className="companyDiv" >
                <span className="companySpan" >{elem.company}</span>
              </div>
            </div>
          )
        })
        return (
          <div className="cvExperience">
            <h1 className="expTitle" >Professionel Experience</h1>
            <div className="expContainer" >{content}</div>
          </div>
        ) 
      }
    }
  
  }
  
  
  

export default Experience;

