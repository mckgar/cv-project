import '../styles/NavBar.css';

const NavBar = (props) => {
  const {
    tabs,
    currentTab,
    changeTab
  } = props;
  const pageTabs = tabs.map((tab) => 
    <div
      key={tab.text}
      id={tab.text}
      className={`nav-tab ${tab.text === currentTab} ${tab.status}`}
      onClick={() => changeTab(tab.text)}
    >
      {tab.text}
    </div>
  )
  return (
    <nav>
      {pageTabs}
    </nav>
  )
}

export default NavBar;
