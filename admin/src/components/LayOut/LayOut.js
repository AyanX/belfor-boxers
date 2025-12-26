import "./LayOut.scss"
import Header from '../Header/Header'

import ContentLayOut from "./ContentLayOut"
import Messages from "../Messages/Messages"
import NavBar from "../NavBar/NavBar"

const LayOut = () => {
  return (
    <div className="layout">
        <NavBar />
        <Header />
        <Messages />
        <ContentLayOut/>
    </div>
  )
}

export default LayOut