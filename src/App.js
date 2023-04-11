import React from "react";
import "./App.css";
import MyHeader from "./MyHeader";
import MyMain from "./MyMain";
import MyFooter from "./Myfooter";
import Counter from "./Counter";

function App() {
    return (
        <React.Fragment>
            <MyHeader />
            <MyMain />
            <MyFooter />
            <Counter />
        </React.Fragment>
    );
}

export default App;
