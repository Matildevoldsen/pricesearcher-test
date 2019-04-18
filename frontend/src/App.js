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
                <UploadFiles/>
                <Files/>
            </div>
        );
    }
}

export default App;
