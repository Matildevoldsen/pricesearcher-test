import React, {Component} from 'react';
import './InputField.css';

class InputField extends Component {
    render() {
        return (
            <div>
                <label className={this.props.className ? this.props.className : ''}>
                    <input type={this.props.type ? this.props.type : 'text'}
                           value={this.props.value ? this.props.value : ''}
                           onChange={this.props.handleChange}
                           name={this.props.name}
                           placeholder={this.props.placeholder ? this.props.placeholder : ''}/>
                    <span>{this.props.label ? this.props.label : ''}</span>
                </label>
            </div>
        );
    }
}

export default InputField;