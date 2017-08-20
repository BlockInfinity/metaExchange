// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Button color="primary">primary</Button>
      </div>
    );
  }
}

export default Home;

// export default class Home extends Component {
//   render() {
//     return (
//       <div>
//         <div className={styles.container} data-tid="container">
//           <h2>Home</h2>
//           <Link to="/counter">to Counter</Link>
//         </div>
//       </div>
//     );
//   }
// }
