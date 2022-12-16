import React from 'react'
import './Control.css'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <section className='conba container text-center'>
        <div className='row'>
        <div className='col-12 col-sm-6 divlink'>
          <Link to={'/mailer'}><h2>Send Mail</h2></Link>
        </div>
        <div className='col-12 col-sm-6 divlink'>
          <Link to={'/shop-post'}><h2>Shop Post</h2></Link>
        </div>
        <div className='col-12 col-sm-6 divlink'>
          <Link to={'/gallery-post'}><h2>Gallery Post</h2></Link>
        </div>
        <div className='col-12 col-sm-6 divlink'>
          <Link to={'/other'}><h2>Other</h2></Link>
        </div>
        </div>
      </section>
    </>
  )
}

export default Menu