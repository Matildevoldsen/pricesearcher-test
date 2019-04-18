import React, {Component} from 'react';
import axios from "axios";

class Files extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['']
        };
    }

    componentDidMount() {
        axios.get(this.props.backendUrl+ `/api/photos/`)
            .then(res => {
                const json = res.data;
                this.setState({data: json});
            });
    }

    render() {
        const items = this.state.data.map((item, key) =>
            <div key={key}>
                <li>{item.description}</li>
                <img alt={item.description} src={item.photo_path ? this.props.backendUrl + '/storage/photos/' + item.photo_path : ''} key={item.id} width="400" height="400"/>
            </div>
        );

        return (
            <div>
                {this.state.data ? items : ''}
            </div>
        );
    }
}

export default Files;