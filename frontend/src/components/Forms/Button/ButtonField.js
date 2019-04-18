import React, {Component} from 'react';
import './ButtonField.css';

class ButtonField extends Component {
    render() {
        return (
            <button className={this.props.className ? this.props.className : ''} name={this.props.name ? this.props.name : ''}>
                {this.props.children}
            </button>
        );
    }
}

export default ButtonField;