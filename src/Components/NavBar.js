import React, { Component } from 'react'


export class NavBar extends Component {
  

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">VikashNews</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item"> <a className="nav-link" href="/">About</a></li>
      <li className="nav-item"> <a className="nav-link" href="/">business</a></li>
      <li className="nav-item"> <a className="nav-link" href="/">Entertainment</a></li>
      <li className="nav-item"> <a className="nav-link" href="/">general</a></li>
      <li className="nav-item"> <a className="nav-link" href="/">health</a></li>
      <li className="nav-item"> <a className="nav-link" href="/">sports</a></li>
      <li className="nav-item"> <a className="nav-link" href="/">technalogy</a></li>







       
    
  
    </ul>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar
