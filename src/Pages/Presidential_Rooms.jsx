import React from 'react'
import { Link } from 'react-router-dom'

const Presidential_Rooms = () => {
  return (

    <div>

      <header role="banner">

          <nav className="navbar navbar-expand-md navbar-dark bg-light">

              <div className="container">

                  <Link className="navbar-brand" to='/'>
                      LuxuryHotel
                  </Link>

                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
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

                              <a className="nav-link dropdown-toggle" href="rooms.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Rooms
                              </a>
                              
                              <div className="dropdown-menu" aria-labelledby="dropdown04">

                                  <Link className="dropdown-item" to="/presidential_room">
                                      Presidential Room
                                  </Link>

                                  <Link className="dropdown-item" to="/luxury_room">
                                      Luxury Room
                                  </Link>

                                  <Link className="dropdown-item" to="/Deluxe_Room">
                                      Deluxe Room
                                  </Link>

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

      <section className="site-hero overlay" data-stellar-background-ratio="0.5"  style={{ backgroundImage: "url(/images/PR-BG-IMG-1.jpg)" }}>
            <div className="container">
            <div className="row align-items-center site-hero-inner justify-content-center">
                <div className="col-md-12 text-center">
                    <div className="mb-5 element-animate">
                        <h1>Welcome To Our Presidential Rooms</h1>
                        <p>Discover our world's Presidential Room For VIP.</p>
                        <p>
                        <Link to='/book-now' className="btn btn-primary">
                            Book Now
                        </Link>
                        </p>
                    </div>
                </div>
            </div>
            </div>
      </section>

        <section className='presi-room'>
            <div class="presidential-experience">
                <h2>PRESIDENTIAL ROOMS EXPERIENCE</h2>
                <p>Step into the pinnacle of luxury and refinement with our Presidential Rooms.</p>
                <p>Each space is designed to offer an unparalleled level of comfort, sophistication, and privacy, ensuring an unforgettable stay.</p>
                <p>Experience the perfect fusion of timeless elegance and modern opulence.</p>
            </div>

        </section>

        <section className="presidentail-room-1">
            <div className="item-wrapper">
                <div className="item-img">
                    <div className="image-container">
                        <img src="/images/Presi-img-1.jpg" alt="Presi-1-img" className='img-presi-1'/>
                    </div>
                </div>
                <div className="room-details">
                    <h3>Presidential Room</h3>.
                    <p>
                        Luxurious design with elegant furnishings, including a private lounge area and breathtaking city views.
                    </p>
                    <div className="room-features">
                        <span>🛏️ King Size Bed</span>
                        <span>📶 Free Wifi</span>
                        <span>📺 42 Inch TV</span>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Presidential_Rooms