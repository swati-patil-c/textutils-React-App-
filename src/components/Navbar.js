import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const { mode, themeColors, } = props;
  return (
        <nav className={`navbar navbar-expand-lg bg-body-tertia bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid">

    <Link className="navbar-brand" to="#">{props.title}</Link>

   

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            {/* About link */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
      </ul>
      <div className={`btn-group gap-80  me-5 bg-${props.mode} role="group" aria-label="Basic radio toggle button group "}`} >
      <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onChange={()=> props.changeTheme('pink')}/>
      <label className="btn btn-outline-secondary" htmlFor="btnradio1">Pink</label>

      <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"onChange={()=> props.changeTheme('green')}/>
      <label className="btn btn-outline-secondary" htmlFor="btnradio2">Green</label>

      <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"onChange={()=> props.changeTheme('purple')}/>
      <label className="btn btn-outline-secondary" htmlFor="btnradio3">Purple</label>
    </div>
      <div className={`form-check form-switch p-3 me-3 gap-4 text-${props.mode==='light'?'black':'light'}`}>
      <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="switchCheckDefault"/>
      <label className="form-check-label" htmlFor="switchCheckDefault" >Enable dark mode</label>
      </div>
      <form className="d-flex gap-4" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

//props 
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
}
//default prop
Navbar.defaultProps = {
  title: 'set title here!',
  about: 'about text'
};

