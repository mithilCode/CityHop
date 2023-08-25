import React,{ useState } from "react";
import "./ImgUpload.module.scss";

import userimg from "../../Assets/Images/user_img.png";
import cameraicon from "../../Assets/Images/camera_icon.png";
const ImgUpload = (props) => {
  const [file, setFile] = useState("");
  const handleChange = (e) => {
    const data = e.target.files[0];
    setFile(data);
    props.setFileone(data);
  };
  return (
    <>
      <div className="input_set">
        <input
          className="input_type_file"
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleChange}
        />
        <img className="camera_icon" src={cameraicon} alt="" />
        <div className="profile_imgset">
          <img className="user_img" src={userimg} alt="" />
        </div>
        {file && (
          <div className="img_set">
            <img src={URL.createObjectURL(file)} alt="Profile Img" />
          </div>
        )}
      </div>
    </>
  );
};

export default ImgUpload;
