import { Component } from 'react';
import '../styles/App.css';

import Header from './Header';
import NavBar from './NavBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'General'
    }
  }
  render() {
    return (
      <div className="App">
        <Header title='CV Creator' />
        <NavBar tabs={['General', 'Education', 'Experience']} />
      </div>
    );
  }
}

export default App;
