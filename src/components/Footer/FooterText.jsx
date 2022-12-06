import React from 'react'
import './Footer.css'

const FooterText = () => {
  return (
    <div className='container text-center footer-text pt-3 pb-3'>
        <div className='fs-1'>
            <a href=""><i className="fa-brands fa-instagram me-3"></i></a>
            <a href=""><i className="fa-brands fa-linkedin ms-3"></i></a>
        </div>
        <p>© Suzanne Montgomery - Painter</p>
    </div>
  )
}

export default FooterText