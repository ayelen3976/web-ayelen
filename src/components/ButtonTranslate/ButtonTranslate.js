import React, { useState, useCallback, useEffect } from "react";
import "react-toggle/style.css";
import Toggle from "react-toggle";
import "./ButtonTranslate.scss";
import arg from "./../../assets/argentina.png";
function ButtonTranslate(props) {
  //  const handleChange = useCallback(
  //    () => {
  //      props.setCheckBox(!props.checkBox)
  //    },
  //    [props.checkBox],
  // );

  function handleChange(e) {
    props.setCheckBox(!props.checkBox);
  }

  console.log(!props.checkBox, "STATE");
  return (
    <>
      <div className="custom-control custom-switch" style={{ marginTop: "7%" }}>
        <label>
          <Toggle
            defaultChecked={props.checkBox}
            icons={{
              checked: <img src={arg} alt="icon" className="img-icon" />,
              unchecked: <img src={arg} alt="icon" className="img-icon" />
            }}
            className="custom-classname"
            onChange={handleChange}
          />
        </label>
      </div>
    </>
  );
}

export default ButtonTranslate;
