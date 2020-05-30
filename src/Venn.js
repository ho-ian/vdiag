import React, {Component} from 'react';
import "./Venn.css";

var circleStyle = {
    padding:100,
    margin:-100,
    display:"inline-block",
    borderRadius: "50%",
    border: "2px solid black",
    width:100,
    height:100,
}

class Venn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numcircles: 1,
            numcon:0
        }
    }

    handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
    }
    
    handleSubmit() {
        this.forceUpdate();
    }

    createVenn() {
        let circles = [];
        switch(this.state.numcircles) {
            case 1:
                circles.push(<div style={circleStyle}></div>);
                break;
            case 2:
                circles.push(<div style={circleStyle}></div>);
                circles.push(<div style={circleStyle}></div>);
                break;
            case 3: 
                circles.push(<div style={circleStyle}></div>);
                circles.push(<br/>);
                circles.push(<div style={circleStyle}></div>);
                circles.push(<div style={circleStyle}></div>);
                break;
            case 4: 
                circles.push(<div style={circleStyle}></div>);
                circles.push(<div style={circleStyle}></div>);
                circles.push(<br/>);
                circles.push(<div style={circleStyle}></div>);
                circles.push(<div style={circleStyle}></div>);
                break;
            case 5: 
                circles.push(<div style={circleStyle}></div>);
                circles.push(<div style={circleStyle}></div>);
                circles.push(<br/>);
                circles.push(<div style={circleStyle}></div>);
                circles.push(<br/>);
                circles.push(<div style={circleStyle}></div>);
                circles.push(<div style={circleStyle}></div>);
                break;
        }  
        return circles;
    }

    render() {
        let drawCircles = this.createVenn();
        return( 
            <div className="Diagram">
                <div className="Prompt">
                    <form>
                        <label for="numcircles">Number of Circles: </label>
                        <input type="number" name="numcircles" min="1" max="5" value={this.state.numcircles} onChange={this.handleChange}/>
                        <input type="connections" name="numcon" min="0" max="5" value={this.state.numcon} onChange={this.handleChange}/>
                        <button type="btn" onClick={this.handleSubmit}>Submit</button>
                    </form>
                </div>
                <div className="Venn">
                    {drawCircles}
                </div>
            </div>
        );
    }
}

export default Venn;