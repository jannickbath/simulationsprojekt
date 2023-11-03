import React from 'react'
import Header from '../Header/Header'
import Tracks from '../Tracks'

type Props = {
    type: "jungle" | "road" | "air"
}

const Scene: React.FC<Props> = ({type}) => {
  return (
    <div className={`scene scene-${type}`}>
        <Header />
        <Tracks />
    </div>
  )
}

export default Scene