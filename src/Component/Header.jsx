import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header role="banner">
        <nav className="navbar navbar-expand-md navbar-dark bg-light">
        <div className="container">
            <Link className="navbar-brand" to='/'>
                LuxuryHotel
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarsExample05"
                aria-controls="navbarsExample05"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse navbar-light" id="navbarsExample05">
                <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to='/'>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="rooms.html"
                            id="dropdown04"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Rooms
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdown04">
                            <a className="dropdown-item" href="rooms.html">
                            Room Videos
                            </a>
                            <a className="dropdown-item" href="rooms.html">
                            Presidential Room
                            </a>
                            <a className="dropdown-item" href="rooms.html">
                            Luxury Room
                            </a>
                            <a className="dropdown-item" href="rooms.html">
                            Deluxe Room
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/blog'>
                            Blog
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/about'>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/contact'>
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item cta">
                        <Link className="nav-link" to='/book-now'>
                            <span>Book Now</span>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
        </nav>
    </header>
  )
}

export default Header