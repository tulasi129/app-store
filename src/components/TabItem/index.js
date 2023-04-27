import './index.css'

const TabItem = props => {
  const {tabItemList, selectedTabItem, isActive} = props
  const {displayText, tabId} = tabItemList
  const onTabItemClick = () => selectedTabItem(tabId)
  const tabItemClassName = isActive ? 'highlight' : ''
  return (
    <li className="tabItem-container">
      <button
        className={`tabeItem-button ${tabItemClassName}`}
        onClick={onTabItemClick}
        type="button"
      >
        <p className={`tabeItem ${tabItemClassName}`}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
