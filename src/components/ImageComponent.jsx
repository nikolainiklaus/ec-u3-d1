import { Component } from "react";

class ImageComponent extends Component {
    render() {
        return (
        <img className={this.props.customClass} src={this.props.imageSource} alt={this.props.imageAlt}></img>
        )
    }
}

export default ImageComponent