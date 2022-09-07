import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import { MdOutlineAddCircle } from "react-icons/md";
import Popup from "../popup/Popup";


// ############################# Home ######################################

const Home = () => {
  let [data, setData] = useState("");

  const changer = (e) => {
    console.log(e.target.value);
    setData(String(e.target.value));
  };

  const submit = () => {
    submiter(data);
    // showallData();
    // clearLocalstorage();
    window.location.reload();
  };

  return (
    <div className="container">
      <h3>Todo Lister</h3>
      <div className="addcon">
        <input placeholder="Type the Remainder!" onChange={changer}></input>
      </div>
      {/*         
        <div className='addvar'>
            <input placeholder='Type the Remainder!' onChange={changer} type='date' className='dateTimecon'></input>
            {/* <button id="btn" onClick={submit}>Add</button> */}
      <button className="btnAdd" onClick={submit}>
        Add
      </button>
    </div>
  );
};

// ############################# valueSubmit ######################################

const submiter = (value) => {
  const setname = "santhosh";

  const iscount = localStorage.getItem("iscount");

  if (iscount === null) {
    localStorage.setItem("iscount", "true");
    localStorage.setItem("count", 1);
  } else {
    const count_value = localStorage.getItem("count");
    localStorage.setItem("count", Number(count_value) + 1);
  }

  const counter = localStorage.getItem("count");
  const data_obj = {
    data: String(value),
    ischecked: false,
    id: `${setname}${counter}`,
  };
  localStorage.setItem(`${setname}${counter}`, JSON.stringify(data_obj));
  console.log("created!");
};

const clearLocalstorage = () => {
  localStorage.clear();
};

export default Home;
