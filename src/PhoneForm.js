import React, { useState } from "react";

const PhoneForm = ({ onCreate }) => {
    const [inputs, setInputs] = useState({
        name: "",
        phone: "",
    });

    const { name, phone } = inputs;

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setInputs({
            ...inputs, //이전의 inputs을 복사(spread operator)
            [name]: value, //새로운 값만 덮어쓰여짐
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(inputs);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name" value={name} onChange={handleChange} />
                <input name="phone" value={phone} onChange={handleChange} />
                <button type="submit">등록</button>
            </form>
        </div>
    );
};

export default PhoneForm;
