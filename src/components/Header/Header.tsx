import PowerUpView from './PowerUpView'
import Textbox from './Textbox'
import Target from './Target'
import Utility from './Utility'

const Header = () => {
  return (
    <>
      <div className="header">
          <PowerUpView />
          <Textbox />
          <Target />
      </div>
      <Utility />
    </>
  )
}

export default Header