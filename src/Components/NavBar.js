import { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tabs } = this.props;
    const pageTabs = tabs.map((tab) => <div id={tab} className='nav-tab'>{tab}</div>)
    return (
      <nav>
        {pageTabs}
      </nav>
    )
  }
}

export default NavBar;
