// Write your code here
import './index.css'

const AppItem = props => {
  const {app} = props
  const {appName, appId, imageUrl, category} = app
  return (
    <li className="app-list">
      <div>
        <img className="app-image" alt={appName} src={imageUrl} />
      </div>
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
