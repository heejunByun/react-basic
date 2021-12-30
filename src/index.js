import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
};

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
};

function Comment(props) {
  return (
    <div className='Comment'>
      <UserInfo user={props.author} />
      <div className='Comment-text'>
        {props.text}
      </div>
      <div className='Comment-date'>
        {/* {formatDate(props.date)} */}
      </div>
    </div>
  );
}


//추출
function Avatar(props) {
  return (
    <img className='Avatar' 
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  )
}

function UserInfo(props) {
  return (
    <div className='UserInfo'>
      <Avatar user={props.user} />
      <div className='UserInfo-name'>
        {props.user.name}
      </div>
    </div>
  );
}




ReactDOM.render(
  <App />, 
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

