import React, {Component} from 'react';
import InputField from "./components/Forms/InputField/InputField";
import Form from "./components/Forms/Form/Form";
import ButtonField from "./components/Forms/Button/ButtonField";
import axios from 'axios';
import UploadFiles from "./components/UploadFiles";
import Files from "./components/Files";

class App extends Component {
    render() {
        return (
            <div className="App">
                <UploadFiles backendUrl="http://127.0.0.1:8000"/>
                <Files backendUrl="http://127.0.0.1:8000"/>
            </div>
        );
    }
}

export default App;
