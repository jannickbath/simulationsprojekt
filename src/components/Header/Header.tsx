import PowerUpView from './PowerUpView'
import Textbox from './Textbox'
import Target from './Target'

const Header = () => {
  return (
    <div className="header">
        <PowerUpView />
        <Textbox />
        <Target />
    </div>
  )
}

export default Header