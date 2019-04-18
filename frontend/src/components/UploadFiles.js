import React, {Component} from 'react';
import InputField from "./Forms/InputField/InputField";
import Form from "./Forms/Form/Form";
import ButtonField from "./Forms/Button/ButtonField";
import axios from 'axios';

class UploadFiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo_path: null,
            jsonFile: [''],
            description: null
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onChangeSelect = this.onChangeSelect.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8010/api/photos/data/json`)
            .then(res => {
                const json = res.data;
                this.setState({jsonFile: json});
                console.log(json)
            });
    }

    onFormSubmit(e) {
        e.preventDefault(); // Stop form submit
        this.fileUpload(this.state.photo_path, this.state.description).then((response) => {

        })
    }

    onChangeFile(e) {
        this.setState({photo_path: e.target.files[0]})
    }

    onChangeSelect(e) {
        this.setState({description: e.target.value})
    }

    fileUpload(file, description) {
        const url = 'http://127.0.0.1:8010/api/photos';
        const formData = new FormData();
        formData.append('photo_path', file);
        formData.append('description', description);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        return axios.post(url, formData, config)
    }

    render() {
        const items = this.state.jsonFile.map((item, key) =>
            <option key={key}>{item.descr}</option>
        );

        return (
            <div>
                <Form onSubmit={this.onFormSubmit} encType="multipart/form-data">
                    <select defaultValue="Select Description" name="description" onChange={this.onChangeSelect}>
                        <option disabled >Select Description</option>
                        {items ? items : ''}
                    </select>
                    <InputField type="file" handleChange={this.onChangeFile} label="Upload File"/>

                    <ButtonField>Submit</ButtonField>
                </Form>
            </div>
        );
    }
}

export default UploadFiles;