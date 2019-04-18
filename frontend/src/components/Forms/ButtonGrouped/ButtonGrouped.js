import React, {Component} from 'react';
import './ButtonGrouped.css';

class ButtonGrouped extends Component {
    render() {
        return (
            <div className="button-grouped">
                {this.props.children}
            </div>
        );
    }
}

export default ButtonGrouped;