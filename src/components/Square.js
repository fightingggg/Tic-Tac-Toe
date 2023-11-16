// 함수형 컴포넌트
import React from 'react';
import "./square.css";

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;






// 클래스형 컴포넌트
// import React, { Component } from 'react'
// // import React from "react";
// import "./square.css"

// export default class Square extends Component {
//   render() {
//     return (
      
//       <button 
//         className="square" 
//         onClick={()=>{
  
//          this.props.onClick()}}>
//         {this.props.value}
//       </button>
     
//     )
//   }
// }












// constructor(props){
 //   super(props);
 //   this.state = {
 //     squares : Array(9).fill(null)
 //   }
 // }
