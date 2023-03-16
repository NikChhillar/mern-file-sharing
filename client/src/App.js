import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { uploadFile } from "./api";

function App() {
  //

  const [file, setFile] = useState("");
  const [result, setResult] = useState("");

  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        console.log(response);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);

  const onBtnClick = () => {
    fileInputRef.current.click();
  };

  //
  const url =
    "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";

  return (
    <div className="container">
      <img src={url} alt="kartik-kun" className="img" />
      <div className="wrapper">
        <h1>File Sharing Project</h1>
        <p>Upload the file and get a link to dwonload the file</p>
        <button onClick={() => onBtnClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <a href={result} target="blank">
          {result}
        </a>
      </div>
    </div>
  );
}

export default App;
