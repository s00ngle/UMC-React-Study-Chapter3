import React from "react";
import "./App.css";
import MyHeader from "./MyHeader";
import MyMain from "./MyMain";
import MyFooter from "./Myfooter";

function App() {
    return (
        <React.Fragment>
            <MyHeader />
            <MyMain />
            <MyFooter />
        </React.Fragment>
    );
}

export default App;
