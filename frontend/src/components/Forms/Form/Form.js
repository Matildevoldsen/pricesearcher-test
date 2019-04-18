import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit} className="form-container">
                {this.props.children}
            </form>
        );
    }
}

export default Form;