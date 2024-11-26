// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, updateFilteredApps, activeTabId} = props

  const onClickTab = eachTab => {
    const {tabId} = eachTab
    updateFilteredApps(tabId)
  }
  return (
    <>
      {tabsList.map(eachTab => {
        const activeTab = activeTabId === eachTab.tabId ? 'bottom-border' : ''
        return (
          <li key={eachTab.tabId} className={`tab-list ${activeTab}`}>
            <button onClick={() => onClickTab(eachTab)} className="tab-button">
              {eachTab.displayText}
            </button>
          </li>
        )
      })}
    </>
  )
}
export default TabItem
