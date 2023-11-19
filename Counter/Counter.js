// import { useState } from 'react';
// import './App.css';
// import Board from './components/Board'
// import Test from './Test';
// import Square from './components/Square'
// function App() {

//   return (
//     <div className="game">
//       <div className="game-boaed">
//         <Board/>
//       </div>


//     </div>
//   )
// }

// export default App;





// import React, { useState } from 'react';

// const IterationSample = () => {
//   // names 상태는 객체 배열로, 각 객체는 id와 text 프로퍼티를 가짐
//   const [names, setNames] = useState([
//     { id: 1, text: '눈사람' },
//     { id: 2, text: '얼음' },
//     { id: 3, text: '눈' },
//     { id: 4, text: '바람' }
//   ]);

//   // inputText 상태는 사용자 입력을 관리함
//   const [inputText, setInputText] = useState('');

//   // nextId 상태는 새로운 항목에 대한 고유 ID를 관리함
//   const [nextId, setNextId] = useState(5); 

//   // onChange 핸들러는 input 요소의 변경을 감지하여 inputText 상태를 업데이트함
//   const onChange = (e) => setInputText(e.target.value);

//   // onClick 핸들러는 새로운 항목을 names 배열에 추가함
//   const onClick = () => {
//     const nextNames = names.concat({ id: nextId, text: inputText }); // 새 객체를 만들어서 기존 배열에 연결
//     setNextId(nextId + 1); // nextId 값을 증가
//     setNames(nextNames);    // names 상태를 업데이트하여 화면에 새 항목을 표시
//     setInputText('');       // 입력 필드를 비움
//   };

//   // onRemove 핸들러는 특정 id를 가진 항목을 names 배열에서 제거함
//   const onRemove = id => {
//     const nextNames = names.filter(name => name.id !== id); // 제거하고자 하는 id를 제외한 새 배열 생성
//     setNames(nextNames); // names 상태를 업데이트하여 화면에서 항목을 제거
//   };

//   // names 배열을 map하여 각 항목을 리스트 아이템으로 변환
//   // 각 리스트 아이템에는 텍스트와 제거 버튼이 포함됨
//   const namesList = names.map(name => (
//     <li key={name.id}>
//       {name.text}
//       <button onClick={() => onRemove(name.id)}>제거</button> {/* 제거 버튼에 onRemove 핸들러 연결 */}
//     </li>
//   ));

//   return (
//     <>
//       <input value={inputText} onChange={onChange} />
//       <button onClick={onClick}>추가</button>
//       <ul>{namesList}</ul>
//     </>
//   );
// };

// export default IterationSample;









import React, { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  // 증가 함수
  const handleIncrease = () => {
    setCount(count + 1);
  };

  // 감소 함수
  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="Counter">
      <div className="count-display">{count}</div>
      <div className="buttons">
        <button className="button increase" onClick={handleIncrease}>증가 +</button>
        <button className="button decrease" onClick={handleDecrease}>감소 -</button>
      </div>
    </div>
  );
}

export default Counter;