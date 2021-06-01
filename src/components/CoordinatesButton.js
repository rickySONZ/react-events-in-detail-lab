// Code CoordinatesButton Component Here
import React , {Component} from 'react' 

export default class CoordinatesButton extends Component {
    constructor(props){
        super(props)
        this.state = {
            onReceiveCoordinates: this.props.onReceiveCoordinates
        }

    }
    handleClick = () => {
        return [this.props.screenX, this.props.screenY]
    }

    render(){
        return (
            <button
            onClick = {handleClick}
            >   
            </button>
        )
    }
}
