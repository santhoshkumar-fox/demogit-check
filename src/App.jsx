import React from "react";
import Home from "./components/Home/Home";
import Popup from "./components/popup/Popup";
import "./app.css";

const App = () => {
  return (
    <div className="containerApp">
      <Home />
      <Popups data={["santhosh", "vellingiri"]} />
    </div>
  );
};

// ############################# data_init ######################################

const showallData = () => {
  // let [alldata ,setAllData] = useState({})

  const localLength = localStorage.length;
  console.log("[Storage-Length]", localLength);
  const all_datum = [];

  for (var i = 0; i <= localLength; i++) {
    const getName = localStorage.key(i);

    if (getName !== null) {
      const spliter = getName.split("h");
      console.log("[spliter]");
      console.log(spliter[0]);
      const first_value = spliter[0];
      if (first_value === "sant") {
        try {
          const obj_data = JSON.parse(localStorage.getItem(getName));
          console.log(obj_data);
          all_datum.push(obj_data);
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
  console.log("[ALL]    ", all_datum);

  return all_datum;
};

// ############################# data_pop_Container_component ######################################

const Popups = (props) => {
  console.log("HI");
  let data1 = showallData();
  const f = data1.map((e, index) => {
    console.log("hi");
    return <Popup name={e.data} key={index} id={e.id} />;
  });
  return f;
};

export default App;
