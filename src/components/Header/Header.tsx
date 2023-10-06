import PowerUpView from './PowerUpView'
import Textbox from './Textbox'
import Target from './Target'
import { useStartGame } from '../../Game'

const Header = () => {
  const startGame = useStartGame();

  return (
    <>
      <div className="header">
          <PowerUpView />
          <Textbox />
          <Target />
      </div>
      <button onClick={startGame} style={{ width: '100px', background: 'red' }}>
        Start Race
      </button>
    </>
  )
}

export default Header