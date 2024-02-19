import axios from "axios";
import React from "react";



export default class FileUpload extends React.Component {
  state = {
    file: null,
  };

  handleChange = (event) => {
    console.log(
      "FileUpload.handleChange event.target.files",
      event.target.files
    );

    this.setState({ file: event.target.files[0] });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    console.log("FileUpload.handleSubmit this.state.file ", this.state.file);

    const data = new FormData();
    data.append("files", this.state.file);
    const upload_res = await axios({
      method: "POST",
      ulr: "http://localhost:1337/api/upload",
      data,
    });
    console.log("FileUpload.handleSubmit upload_res", upload_res);
  };

  render() {
    return (
      <div className="FileUpload">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="file" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
