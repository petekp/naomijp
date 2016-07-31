import React from 'react'
import LinkList from './LinkList'
import './App.css'

const App = (props) => {
  return (
    <div>
      <div className="background"></div>
      <main role="main">
        <div className="wrapper">
          {props.children}
          <LinkList />
        </div>
      </main>
    </div>
  )
}

export default App
