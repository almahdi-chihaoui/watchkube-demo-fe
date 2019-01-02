import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

const API = 'http://192.168.39.91:30030/users';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
    };
  }


  componentDidMount() {

    axios.get(API)
      .then(result => this.setState({user: result.data.user}))
      .catch(error => console.error(error));
  }

  render() {
    return <div>Hello {this.state.user}</div>;
  }
}

ReactDOM.render(<Index />, document.getElementById("index"));
