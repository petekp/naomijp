import React from 'react'

const PageHeader = (props) => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      {props.children}
    </header>
  )
}

export default PageHeader
