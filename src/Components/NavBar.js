import { Component } from "react";
import '../styles/NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tabs, currentTab, changeTab } = this.props;
    const pageTabs = tabs.map((tab) => 
      <div
        key={tab}
        id={tab}
        className={`nav-tab ${tab === currentTab}`}
        onClick={(e) => changeTab(tab)}
      >
        {tab}
      </div>)
    return (
      <nav>
        {pageTabs}
      </nav>
    )
  }
}

export default NavBar;
