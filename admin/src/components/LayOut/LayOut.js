import "./LayOut.scss"
import Header from '../Header/Header'

import ContentLayOut from "./ContentLayOut"

const LayOut = () => {
  return (
    <div className="layout">
        <Header />
        <ContentLayOut/>
        
    </div>
  )
}

export default LayOut