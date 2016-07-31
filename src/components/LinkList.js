import React from 'react'
import { Link } from 'react-router'
import './LinkList.css'

const LinkList = (props) => {
  return (
    <section className="links">
      <div className="LinkList">
        <Link to="/">Home</Link>
        <Link to="/writing">Writing</Link>
        <Link to="/links">Links</Link>
      </div>
    </section>
  )
}

export default LinkList
