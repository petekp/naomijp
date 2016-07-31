import React from 'react'
import { Link } from 'react-router'
import './LinkList.css'

const LinkList = (props) => {
  return (
    <section className="links">
      <div className="LinkList">
        <a href="https://medium.com/humane-roots">Medium</a>
        <a href="https://www.linkedin.com/in/njpetrash">LinkedIn</a>
        <a href="mailto:naomi.petrash@gmail.com?subject=Hello">Email</a>
      </div>
    </section>
  )
}

export default LinkList
