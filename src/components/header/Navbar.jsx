import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
            <div className="container d-flex justify-content-between">

                <a className="navbar-brand" href="#">ART FACTORY</a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">HOME</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href='#about'>ABOUT</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#services">SERVICES</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">FREQUENTLY QUESTIONS</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                DROP DOWN
                            </a>

                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">ABOUT US</a></li>
                                <li><a className="dropdown-item" href="#">FEATURES</a></li>
                                <li><a className="dropdown-item" href="#">FAQ'S</a></li>
                                <li><a className="dropdown-item" href="#">BLOGS</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACT US</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar