import React from 'react'
import './Footer.css'

export default () => (
  <footer className="footer">
    <div className="container">
      <h4>
        <a href="https://twitter.com/selfsetco/" target="blank" rel="noreferrer">@selfsetco</a>
      </h4>
    </div>
    <div className="container">
      <span>
        © Copyright {new Date().getFullYear()} All rights reserved.<br />
        Crafted by <a href="https://selfset.co/">the self set co.</a>
      </span>
    </div>
  </footer >
)
