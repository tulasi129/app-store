import './index.css'

const AppItem = props => {
  const {appList} = props
  const {appName, imageUrl} = appList
  return (
    <li className="each-app-container">
      <img className="image" src={imageUrl} alt={appName} />
      <p className="paragraph">{appName}</p>
    </li>
  )
}
export default AppItem
