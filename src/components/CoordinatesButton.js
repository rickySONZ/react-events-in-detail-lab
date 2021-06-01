// Code CoordinatesButton Component Here
import React , {Component} from 'react' 

export default class CoordinatesButton extends Component {

    
    handleClick = (event) => {
        let x = event.clientX;
        let y = event.clientY;
        let arr = [x, y]
        return this.props.onReceiveCoordinates(arr)
    }

    render(){
        return (
            <button
            onClick = {this.handleClick}
            >   
            </button>
        )
    }
}
