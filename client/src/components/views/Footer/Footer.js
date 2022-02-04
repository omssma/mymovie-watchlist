import React from "react";
import { Icon } from "antd";

function Footer() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.5rem",
        backgroundColor: "#ECECF2"
      }}
    >
      <p>
        {" "}
        <strong> Keep on Coding</strong> <Icon type="" />
      </p>
    </div>
  );
}

export default Footer;
