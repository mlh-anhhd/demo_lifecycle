import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this)
  };

  setNewNumber() {
    this.setState({data: this.state.data + 1})
  }
  render() {
    return (
       <div>
          <button onClick = {this.setNewNumber}>INCREMENT</button>
          <Content myNumber = {this.state.data}></Content>
      </div>
    );
  }
}

class Content extends React.Component {
  
  // Mounting
  componentWillMount() {
    console.log('Component WILL MOUNT!')
  }

  componentDidMount() {
    console.log('Component DID MOUNT!')
  }

  // Updating
  // shouldComponentUpdate(newProps) {
  //   let shouldUpdate = this.props.myNumber !== newProps.myNumber;
  //   // console.log(this.props.myNumber);
  //   if (shouldUpdate) {
  //     return false
  //   }
  //   return true;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   if (prevProps.myNumber < this.props.myNumber) {
  //     return true
  //   }
  //   return null;
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // if(snapshot !== null) {
    //   // console.log(prevProps.myNumber);
    //   return true
    // }
    console.log('Component DID UPDATE!')
  }

  // Unmounting
  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }

  // Error Handling
  // componentDidCatch(error, errorInfo) {
  //   this.setState({  
  //     error: error,
  //     errorInfo: errorInfo
  //   })
  // }

  render() {
    return (
       <div>
          <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}
export default App;
