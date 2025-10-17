import React, { useState } from "react";
import "./AvatarChanger.css";

function AvatarChanger({ avatar, setAvatar, generateAvatar, changeAvatar }) {
  return (
    <div className="avatar-container">
      <button className="arrow-button-changer" onClick={changeAvatar}>
        ←
      </button>
      <img src={avatar} alt="Avatar" className="avatar-img" />
      <button className="arrow-button-changer" onClick={changeAvatar}>
        →
      </button>
    </div>
  );
}

export default AvatarChanger;
