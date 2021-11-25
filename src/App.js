import CSSModule from "./App.module.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FcBusinessman } from "react-icons/fc";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
const url = "https://jsonplaceholder.typicode.com/users";

function App() {
  //used state to handle the API data
  const [userState, setUserState] = useState([]);

  //function to fetch api data
  const getUser = () => {
    axios.get(url).then((resp) => {
      setUserState(resp.data);
    });
  };

  // I have implemented react hooks for to optimize and avoid rendering of react virtual DOM .
  useEffect(() => {
    getUser();
  }, []);

  return (
    <section>
      <h1>Contacts</h1>
      <h5>Real World Problem</h5>
      <div className={CSSModule.contact}>
        {/* used condition to stop empty arry and then rendering with array map */}
        {userState &&
          userState.map((item) => {
            return (
              <div key={item.id} className={CSSModule.userbox}>
                <h4 className={CSSModule.username}>{item.name} </h4>
                <address>
                  {item.address.suite} {item.address.street},{" "}
                  {item.address.city}, {item.address.zipcode}
                </address>
                <a href="#">
                  <MdOutlineMarkEmailUnread size={28} /> {item.email}
                </a>
                <a href="#">
                  <FcBusinessman size={28} /> {item.website}
                </a>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default App;
