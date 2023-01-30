import { Component } from "react";

class HeaderComponent extends Component {
    render() {
        return (
            <h1>{this.props.content}</h1>
        )
    }
}

export default HeaderComponent