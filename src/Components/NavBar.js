import { Component } from "react";
import '../styles/NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      tabs,
      currentTab,
      changeTab
    } = this.props;
    const pageTabs = tabs.map((tab) => 
      <div
        key={tab.text}
        id={tab.text}
        className={`nav-tab ${tab.text === currentTab} ${tab.status}`}
        onClick={(e) => changeTab(tab.text)}
      >
        {tab.text}
      </div>)
    return (
      <nav>
        {pageTabs}
      </nav>
    )
  }
}

export default NavBar;
