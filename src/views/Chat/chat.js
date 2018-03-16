import React, {Component} from 'react';
import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupButton
} from 'reactstrap';

import socketIOClient from "socket.io-client";

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://127.0.0.1:4001",

      color: 'white'

    };
  }

  // sending sockets
  send() {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('change color', this.state.color) // change 'red' to this.state.color
  }

  ///

  // adding the function
  setColor(color) {
    this.setState({ color })
  }

  ///

  render() {
    // testing for socket connections

    const socket = socketIOClient(this.state.endpoint);
    socket.on('change color', (col) => {
      document.body.style.backgroundColor = col
    })

    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={() => this.send() }>Change Color</button>

        <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
        <button id="red" onClick={() => this.setColor('red')}>Red</button>

      </div>
    )
  }
}

export default Chat;
