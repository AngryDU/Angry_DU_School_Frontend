import React, { useState, useRef } from "react";
import styles from "./UploadFile.module.css";
const hostUrl = "/upload";

export const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState();
  // const filePicker = useRef(null);

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please, select a file!");
      return;
    }

    const hostUrl = "http://localhost:8080/api/v0.0.1/users/personal_data";
    const formData = new FormData();
    formData.append("file", selectedFile);
    // const res=await fetch(hostUrl);
    const res = await fetch(hostUrl, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setUploaded(data);
  };

  // const handlePick = () => {
  //   filePicker.current.click();
  // };

  return (
    <div className={styles.uploadFile}>
    <div className={styles.uploadZone}>

      <label  className={styles.labelFile}>
        {/* <button onClick={handlePick}>Pick file!</button> */}

        <input
          className={styles.inputFile}
          // htmlFor="picture"
          // id="picture"
          type="file"
          onChange={handleChange}
          // ref={filePicker}
          // name="file"
          placeHolder="Максимум 10мб"
          mutiple
          accept='image/*,.png,.jpg,.gif,.web'
        />
      </label>
      </div>
      <button className={styles["input-file-btn"]} onClick={handleUpload}>
        Загрузить файл!
      </button>

      {selectedFile && (
        <ul>
          <li>Name:{selectedFile.name}</li>
          <li>Type:{selectedFile.type}</li>
          <li>Size:{selectedFile.size}</li>
        </ul>
      )}

      {uploaded && (
        <div>
          <h2>{uploaded.fileName}</h2>
          <img alt="" src={uploaded.filPath} width="200" />
        </div>
      )}
    </div>
  );
};
// export { UploadFile };
