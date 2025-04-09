import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

const Book_Now = () => {
  return (
    <div>
        <Header />
        <section className="site-hero site-hero-innerpage overlay" data-stellar-background-ratio="0.5" style={{ backgroundImage: "url(images/big_image_1.jpg)" }}>
            <div className="container">
                <div className="row align-items-center site-hero-inner justify-content-center">
                    <div className="col-md-12 text-center">
                        <div className="mb-5 element-animate">
                            <h1>Reservation</h1>
                            <p>Discover our world's #1 Luxury Room For VIP.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="site-section">
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                <h2 className="mb-5">Reservation Form</h2>
                <form action="#" method="post">
                    <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="">Arrival Date</label>
                        <div style={{ position: "relative" }}>
                        <span
                            className="fa fa-calendar icon"
                            style={{ position: "absolute", right: 10, top: 10 }}
                        />
                        <input
                            type="text"
                            className="form-control"
                            id="arrival_date"
                        />
                        </div>
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="">Departure Date</label>
                        <div style={{ position: "relative" }}>
                        <span
                            className="fa fa-calendar icon"
                            style={{ position: "absolute", right: 10, top: 10 }}
                        />
                        <input
                            type="text"
                            className="form-control"
                            id="departure_date"
                        />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6 form-group">
                        <label htmlFor="room">Room</label>
                        <select name="" id="room" className="form-control">
                        <option value="">1 Room</option>
                        <option value="">2 Rooms</option>
                        <option value="">3 Rooms</option>
                        <option value="">4 Rooms</option>
                        <option value="">5 Rooms</option>
                        </select>
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="room">Guests</label>
                        <select name="" id="room" className="form-control">
                        <option value="">1 Guest</option>
                        <option value="">2 Guests</option>
                        <option value="">3 Guests</option>
                        <option value="">4 Guests</option>
                        <option value="">5+ Guests</option>
                        </select>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12 form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control " />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12 form-group">
                        <label htmlFor="message">Write a Note</label>
                        <textarea
                        name="message"
                        id="message"
                        className="form-control "
                        cols={30}
                        rows={8}
                        defaultValue={""}
                        />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6 form-group">
                        <input
                        type="submit"
                        defaultValue="Reserve Now"
                        className="btn btn-primary"
                        />
                    </div>
                    </div>
                </form>
                </div>
                <div className="col-md-1" />
                <div className="col-md-5">
                <h3 className="mb-5">Featured Room</h3>
                <div className="media d-block room mb-0">
                    <figure>
                    <img
                        src="images/img_1.jpg"
                        alt="Generic placeholder image"
                        className="img-fluid"
                    />
                    <div className="overlap-text">
                        <span>
                        Featured Room
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        </span>
                    </div>
                    </figure>
                    <div className="media-body">
                    <h3 className="mt-0">
                        <a href="#">Presidential Room</a>
                    </h3>
                    <ul className="room-specs">
                        <li>
                        <span className="ion-ios-people-outline" /> 2 Guests
                        </li>
                        <li>
                        <span className="ion-ios-crop" /> 22 ft <sup>2</sup>
                        </li>
                    </ul>
                    <p>
                        Nulla vel metus scelerisque ante sollicitudin. Fusce condimentum
                        nunc ac nisi vulputate fringilla.{" "}
                    </p>
                    <p>
                        <a href="#" className="btn btn-primary btn-sm">
                        Book Now From $20
                        </a>
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section
            className="section-cover"
            data-stellar-background-ratio="0.5"
            style={{ backgroundImage: "url(images/img_5.jpg)" }}
        >
            <div className="container">
            <div className="row justify-content-center align-items-center intro">
                <div className="col-md-9 text-center element-animate">
                <h2>Relax and Enjoy your Holiday</h2>
                <p className="lead mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                    quidem tempore expedita facere facilis, dolores!
                </p>
                <div className="btn-play-wrap">
                    <a
                    href="https://vimeo.com/channels/staffpicks/93951774"
                    className="btn-play popup-vimeo "
                    >
                    <span className="ion-ios-play" />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </section>
        <Footer />

    </div>
  )
}

export default Book_Now