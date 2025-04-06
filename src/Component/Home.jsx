import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        
        <Header />

        <section className="site-hero overlay" data-stellar-background-ratio="0.5"  style={{ backgroundImage: "url(/images/big_image_1.jpg)" }}>
            <div className="container">
            <div className="row align-items-center site-hero-inner justify-content-center">
                <div className="col-md-12 text-center">
                    <div className="mb-5 element-animate">
                        <h1>Welcome To Our Luxury Rooms</h1>
                        <p>Discover our world's Luxury Room For VIP.</p>
                        <p>
                        <a href="booknow.html" className="btn btn-primary">
                            Book Now
                        </a>
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <section className="site-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="heading-wrap text-center element-animate">
                            <h4 className="sub-heading">Stay with our luxury rooms</h4>
                            <h2 className="heading">Stay and Enjoy</h2>
                            <p className="mb-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                                illo similique natus, a recusandae? Dolorum, unde a quibusdam est?
                                Corporis deleniti obcaecati quibusdam inventore fuga eveniet! Qui
                                delectus tempore amet!
                            </p>
                            <p>
                            <a href="#" className="btn btn-primary btn-sm">
                                More About Us
                            </a>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-1" />
                        <div className="col-md-7">
                        <img src="images/f_img_1.png" alt="Image placeholder" className="img-md-fluid" />
                    </div>
                </div>
            </div>
        </section>

        <section className="site-section bg-light">
            <div className="container">
            <div className="row mb-5">
                <div className="col-md-12 heading-wrap text-center">
                <h4 className="sub-heading">Our Luxury Rooms</h4>
                <h2 className="heading">Featured Rooms</h2>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-7">
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
                <div className="col-md-5 room-thumbnail-absolute">
                <a
                    href="#"
                    className="media d-block room bg first-room"
                    style={{ backgroundImage: "url(images/img_2.jpg)" }}
                >
                    {/* <figure> */}
                    <div className="overlap-text">
                    <span>
                        Hotel Room
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                    </span>
                    <span className="pricing-from">from $22</span>
                    </div>
                    {/* </figure> */}
                </a>
                <a
                    href="#"
                    className="media d-block room bg second-room"
                    style={{ backgroundImage: "url(images/img_4.jpg)" }}
                >
                    {/* <figure> */}
                    <div className="overlap-text">
                    <span>
                        Hotel Room
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                    </span>
                    <span className="pricing-from">from $22</span>
                    </div>
                    {/* </figure> */}
                </a>
                </div>
            </div>
            </div>
        </section>

        <section className="section-cover" data-stellar-background-ratio="0.5" style={{ backgroundImage: "url(images/img_5.jpg)" }}>
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

        <section className="site-section bg-light">
            <div className="container">
            <div className="row mb-5">
                <div className="col-md-12 heading-wrap text-center">
                <h4 className="sub-heading">Our Blog</h4>
                <h2 className="heading">Our Recent Blog</h2>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-4">
                <div className="post-entry">
                    <img
                    src="images/img_3.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                    />
                    <div className="body-text">
                    <div className="category">Rooms</div>
                    <h3 className="mb-3">
                        <a href="#">New Rooms</a>
                    </h3>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                        deserunt illo quis similique dolore voluptatem culpa voluptas
                        rerum, dolor totam.
                    </p>
                    <p>
                        <a
                        href="#"
                        className="btn btn-primary btn-outline-primary btn-sm"
                        >
                        Read More
                        </a>
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="post-entry">
                    <img
                    src="images/img_6.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                    />
                    <div className="body-text">
                    <div className="category">News</div>
                    <h3 className="mb-3">
                        <a href="#">New Staff Added</a>
                    </h3>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                        deserunt illo quis similique dolore voluptatem culpa voluptas
                        rerum, dolor totam.
                    </p>
                    <p>
                        <a
                        href="#"
                        className="btn btn-primary btn-outline-primary btn-sm"
                        >
                        Read More
                        </a>
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="post-entry">
                    <img
                    src="images/img_5.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                    />
                    <div className="body-text">
                    <div className="category">New Rooms</div>
                    <h3 className="mb-3">
                        <a href="#">Big Rooms for All</a>
                    </h3>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                        deserunt illo quis similique dolore voluptatem culpa voluptas
                        rerum, dolor totam.
                    </p>
                    <p>
                        <a
                        href="#"
                        className="btn btn-primary btn-outline-primary btn-sm"
                        >
                        Read More
                        </a>
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        <Footer />

        {/* <div id="loader" className="show fullscreen">
            <svg className="circular" width="48px" height="48px">
            <circle
                className="path-bg"
                cx={24}
                cy={24}
                r={22}
                fill="none"
                strokeWidth={4}
                stroke="#eeeeee"
            />
            <circle
                className="path"
                cx={24}
                cy={24}
                r={22}
                fill="none"
                strokeWidth={4}
                strokeMiterlimit={10}
                stroke="#f4b214"
            />
            </svg>
        </div> */}

    </div>
  )
}

export default Home