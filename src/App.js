import React from "react";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Animal from "./Components/Animal";
import { useState } from "react";
import { Cartcontext } from "./Context/Cartcontext";

const App = () => {
  const [title, settitle] = useState("DOG");
   const [cartCount,setCartCount]=useState(0);
  return (
    <div>
      <Cartcontext.Provider value={{cartCount,setCartCount}}>

      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 g-0">
            <Menu changeTitle={settitle} />
          </div>
          <div className="col-10">
            <Animal title={title} />
          </div>
        </div>
      </div>
      </Cartcontext.Provider>
    </div>
  );
};

export default App;
