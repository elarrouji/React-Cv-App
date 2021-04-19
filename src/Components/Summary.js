import React, { Component } from "react";

export default class Summary extends Component {
    constructor(props){
        super(props);
        this.state = {
            summary: ""
        }
    }

    handleSummary = (e) => {
        this.setState({
            summary: e.target.value
        })
    }

    render() {
        if (!this.props.submitted) {
            return (
                <div className="sectionContainer">
                    <h1>Summary</h1>
                    <textarea className="inputSummary" onChange={this.handleSummary} value={this.state.summary} type="text" placeholder="Write a little bit about yourself"></textarea>
                </div>
            )
        } else {
            return (
                <div className="cvSummary">
                    <h1 className="summaryTitle" >Summary</h1>
                    <span className="summaryInput">{this.state.summary}</span>
                </div>
            )
        }
    }

}

