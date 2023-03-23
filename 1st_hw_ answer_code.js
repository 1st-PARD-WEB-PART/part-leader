import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// 입력 라벨을 나타내는 함수
function Label(props) {
  return (
    <label style={{ margin: '30px' }}>
      {props.labelText}
      {props.children}
    </label>
  );
}

// 입력 라벨과 입력 필드를 포함하는 함수
function InputLabel(props,) {
  return (
    <Label labelText={props.labelText}>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </Label>
  );
}

// 웹 어플리케이션의 메인 함수
function App() {
  // name, email, message 세 가지 상태를 생성하고 useState로 초기값을 빈 문자열로 설정
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // 폼(form)을 제출(submit)했을 때 호출되는 함수
  function handleSubmit(event) {
    event.preventDefault(); // 폼 제출 이벤트를 취소하고 console.log()를 호출하도록 합니다.
    console.log('Submitted:', name, email, message);
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  }

  // React에서 반환(return)되는 JSX 코드
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        {/* InputLabel 컴포넌트를 사용하여 입력 필드와 라벨을 그룹화 */}
        <InputLabel labelText="Name:" type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <InputLabel labelText="Email:" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <InputLabel labelText="Message:"  value={message} onChange={(event) => setMessage(event.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
