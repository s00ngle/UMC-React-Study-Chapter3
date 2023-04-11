// import React, { Component } from "react";

// class Counter extends Component {
//     constructor(props) {
//         super(props); // constructor 정의 시 반드시 필요!
//         this.state = {
//             // state의 초기값 설정 부분
//             number: 0,
//         };
//     }

//     render() {
//         const { number } = this.state;
//         return (
//             <div>
//                 <h1>{number}</h1>
//                 <button
//                     onClick={() => {
//                         this.setState({ number: number + 1 });
//                     }}
//                 >
//                     +1
//                 </button>
//             </div>
//         );
//     }
// }

import React, { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <h1>{number}</h1>
            <button
                onClick={() => {
                    setNumber(number + 1);
                }}
            >
                +1
            </button>
            <button
                onClick={() => {
                    setNumber(number - 1);
                }}
            >
                -1
            </button>
        </div>
    );
}

export default Counter;
