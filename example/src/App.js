import React from "react";

import { connect } from "redux-react-clone";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handlePageChange = this.handlePageChange.bind(this);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <div>hello world</div>;
  }
}

export default App;
