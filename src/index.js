import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Greeting + Login
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props); //?
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.test = {test:"A"};
    this.state = {isLoggedIn: false};
  } 

  handleLoginClick() {
    console.log("this 11" , this);
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    console.log("this 22 " , this);
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    console.log("redner test" , this);

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );

  }
}

//MailBox
function Mailbox(props) {
  const unreadMessage = props.unreadMsg;
  return (
    <div>
      <h1>Hello</h1>
      {unreadMessage.length > 0 &&
        <h2>
          You have {unreadMessage.length} unread messages.
        </h2>
      }
    </div>
  );
}
const message = ['React' , 'Re: React', 'Re: Re: React'];


//WarningBanner 
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className='warning'>
      Warning!
    </div>
  )
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this); 
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }

};

ReactDOM.render(
  // <LoginControl />,
  // <Mailbox unreadMsg={message} />,
  <Page />,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

