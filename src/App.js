import React from "react";
import "./App.css";
import MyHeader from "./MyHeader";
import MyMain from "./MyMain";
import MyFooter from "./Myfooter";
import Counter from "./Counter";
import PhoneForm from "./PhoneForm";

function App() {
    const handleCreate = (data) => {
        console.log(data);
    };

    return (
        <React.Fragment>
            <MyHeader />
            <MyMain />
            <MyFooter />
            <Counter />
            <PhoneForm onCreate={handleCreate} />
        </React.Fragment>
    );
}

export default App;
