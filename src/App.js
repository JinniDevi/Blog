/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']); 
  // useState : 데이터 변경 시 자동으로 html 전체 렌더링 - 자주 변경될 것들
  let [따봉, 따봉변경] = useState(0);

  function 함수() {
    alert('정상 작동');
  }



  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color:'orange', fontSize:'16px'} }>ReactBlog</h4>
      </div>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다 순 정렬</button>
      <span onClick={ ()=>{
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy) 
        } }>👩🏻</span>
      <div className='list'>
        <h4>{ 글제목[0] }<span onClick={ ()=>{ 따봉변경(따봉+1) } }> 👍 </span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>글제목</h4>
        <p>2월 17일 발행</p>
      </div>
      

      
        <Modal></Modal>
        <Modal2></Modal2>

    </div>
  );
}

// 컴포넌트 만들면 good -> 반복적인 html 축약, 큰 페이지들, 자주 변경되는 UI들
function Modal() {
  return (
    <>
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    <div></div>
    </>
  )
}

let Modal2 = () => {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
