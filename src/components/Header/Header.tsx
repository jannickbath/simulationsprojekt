import PowerUpView from './PowerUpView'
import Textbox from './Textbox'
import Target from './Target'
import Utility from './Utility'
import { useProgressLoop } from '../../Game'

const Header = () => {
  useProgressLoop();

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