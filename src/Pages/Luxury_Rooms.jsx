import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

const Deluxe_Rooms = () => {
  return (
    <div>
        
        <Header />

        <section className="site-hero overlay" data-stellar-background-ratio="0.5"  style={{ backgroundImage: "url(/images/PR-BG-IMG-1.jpg)" }}>
            <div className="container">
            <div className="row align-items-center site-hero-inner justify-content-center">
                <div className="col-md-12 text-center">
                    <div className="mb-5 element-animate">
                        <h1>Welcome To Our Luxury Rooms</h1>
                        <p>Discover our world's Luxury Room For VIP.</p>
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
            <div className="presidential-experience">
                <h2>LUXURY ROOMS EXPERIENCE</h2>
                <p>Step into the pinnacle of luxury and refinement with our Presidential Rooms.</p>
                <p>Each space is designed to offer an unparalleled level of comfort, sophistication, and privacy, ensuring an unforgettable stay.</p>
                <p>Experience the perfect fusion of timeless elegance and modern opulence.</p>
            </div>
        </section>
        
        <section className="presidnetial-rooms">
            <div className="container margin_120_95 pb-0" id='first_section'>
                <div className="row_version_list_1">
                    <div className='pinned-image rounded_container pinned-image--medium'>
                        <div className="pinned-image_container" style={{translate : "none", scale: "none", transform: "scale(1.05,1.05)", width:"93%"}}>
                            <img src="/images/About_Img_1.jpg" alt="Presidnetial_Image_1" className='presidential-rm'/>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="col-lg-8">
                            <div className="box-item-info" data-jarallax-element="-30" style={{transform : "translate(0px,10.643px,0px)"}}>
                                <small>From $150/Night</small>
                                <h2>Luxury Room</h2>
                                <p>
                                    Beautiful design with modern furnishings including a glamorous bay window with your own private view of Lucerne.
                                </p>
                                <div className="facilities clearfix">
                                    <ul>
                                        {/* <li>
                                            <i className='customicon-double-bed'></i>
                                            King Size Bed
                                        </li> */}
                                        <li>
                                            <i className="fas fa-bed"></i> 
                                            King Size Bed
                                        </li>

                                        <li>
                                            <i className='fas fa-wifi'></i>
                                            Free Wifi
                                        </li>
                                        <li>
                                            <i className='fas fa-tv'></i>
                                            32 Inc TV
                                        </li>
                                    </ul>
                                </div>
                                
                                <hr />

                                <div className='box_item_footer d-flex align-items-center justify-content-between'>
                                    <a href="#" className='btn_4 learn-more'>
                                        <span className='circle'>
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text">
                                            <Link to='/book-now'>Book Now</Link>
                                        </span>
                                    </a>
                                    <a href="" className='animated_link'>
                                        <strong>Read more</strong>
                                    </a>
                                </div>
                                <div id="jarallax-container-1" style={{
                                    position: "absolute",
                                    top: "0px",
                                    left: "0px",
                                    width: "100%",
                                    height: "100%",
                                    overflow: "hidden",
                                    zIndex: "-100",
                                    clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)"
                                }}
                                >
                                    <div style={{
                                        pointerEvents: "none",
                                        transformStyle: "preserve-3d",
                                        backfaceVisibility: "hidden",
                                        position: "fixed"
                                    }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row_version_list_1">
                    <div className='pinned-image rounded_container pinned-image--medium'>
                        <div className="pinned-image_container" style={{translate : "none", scale: "none", transform: "scale(1.05,1.05)", width:"93%"}}>
                            <img src="/images/About_Img-2.jpg" alt="Presidnetial_Image_1" className='presidential-rm'/>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="col-lg-8">
                            <div className="box-item-info" data-jarallax-element="-30" style={{transform : "translate(0px,10.643px,0px)"}}>
                                <small>From $150/Night</small>
                                <h2>Luxury Room</h2>
                                <p>
                                    Beautiful design with modern furnishings including a glamorous bay window with your own private view of Lucerne.
                                </p>
                                <div className="facilities clearfix">
                                    <ul>
                                        {/* <li>
                                            <i className='customicon-double-bed'></i>
                                            King Size Bed
                                        </li> */}
                                        <li>
                                            <i className="fas fa-bed"></i> 
                                            King Size Bed
                                        </li>

                                        <li>
                                            <i className='fas fa-wifi'></i>
                                            Free Wifi
                                        </li>
                                        <li>
                                            <i className='fas fa-tv'></i>
                                            32 Inc TV
                                        </li>
                                    </ul>
                                </div>
                                
                                <hr />

                                <div className='box_item_footer d-flex align-items-center justify-content-between'>
                                    <a href="#" className='btn_4 learn-more'>
                                        <span className='circle'>
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text">
                                            Book Now
                                        </span>
                                    </a>
                                    <a href="" className='animated_link'>
                                        <strong>Read more</strong>
                                    </a>
                                </div>
                                <div id="jarallax-container-1" style={{
                                    position: "absolute",
                                    top: "0px",
                                    left: "0px",
                                    width: "100%",
                                    height: "100%",
                                    overflow: "hidden",
                                    zIndex: "-100",
                                    clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)"
                                }}
                                >
                                    <div style={{
                                        pointerEvents: "none",
                                        transformStyle: "preserve-3d",
                                        backfaceVisibility: "hidden",
                                        position: "fixed"
                                    }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row_version_list_1">
                    <div className='pinned-image rounded_container pinned-image--medium'>
                        <div className="pinned-image_container" style={{translate : "none", scale: "none", transform: "scale(1.05,1.05)", width:"93%"}}>
                            <img src="/images/About_Img_3.jpg" alt="Presidnetial_Image_1" className='presidential-rm'/>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="col-lg-8">
                            <div className="box-item-info" data-jarallax-element="-30" style={{transform : "translate(0px,10.643px,0px)"}}>
                                <small>From $150/Night</small>
                                <h2>Luxury Room</h2>
                                <p>
                                    Beautiful design with modern furnishings including a glamorous bay window with your own private view of Lucerne.
                                </p>
                                <div className="facilities clearfix">
                                    <ul>
                                        {/* <li>
                                            <i className='customicon-double-bed'></i>
                                            King Size Bed
                                        </li> */}
                                        <li>
                                            <i className="fas fa-bed"></i> 
                                            King Size Bed
                                        </li>

                                        <li>
                                            <i className='fas fa-wifi'></i>
                                            Free Wifi
                                        </li>
                                        <li>
                                            <i className='fas fa-tv'></i>
                                            32 Inc TV
                                        </li>
                                    </ul>
                                </div>
                                
                                <hr />

                                <div className='box_item_footer d-flex align-items-center justify-content-between'>
                                    <a href="#" className='btn_4 learn-more'>
                                        <span className='circle'>
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text">
                                            Book Now
                                        </span>
                                    </a>
                                    <a href="" className='animated_link'>
                                        <strong>Read more</strong>
                                    </a>
                                </div>
                                <div id="jarallax-container-1" style={{
                                    position: "absolute",
                                    top: "0px",
                                    left: "0px",
                                    width: "100%",
                                    height: "100%",
                                    overflow: "hidden",
                                    zIndex: "-100",
                                    clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)"
                                }}
                                >
                                    <div style={{
                                        pointerEvents: "none",
                                        transformStyle: "preserve-3d",
                                        backfaceVisibility: "hidden",
                                        position: "fixed"
                                    }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row_version_list_1">
                    <div className='pinned-image rounded_container pinned-image--medium'>
                        <div className="pinned-image_container" style={{translate : "none", scale: "none", transform: "scale(1.05,1.05)", width:"93%"}}>
                            <img src="/images/About_Img_4.jpg" alt="Presidnetial_Image_1" className='presidential-rm'/>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="col-lg-8">
                            <div className="box-item-info" data-jarallax-element="-30" style={{transform : "translate(0px,10.643px,0px)"}}>
                                <small>From $150/Night</small>
                                <h2>Luxury Room</h2>
                                <p>
                                    Beautiful design with modern furnishings including a glamorous bay window with your own private view of Lucerne.
                                </p>
                                <div className="facilities clearfix">
                                    <ul>
                                        {/* <li>
                                            <i className='customicon-double-bed'></i>
                                            King Size Bed
                                        </li> */}
                                        <li>
                                            <i className="fas fa-bed"></i> 
                                            King Size Bed
                                        </li>

                                        <li>
                                            <i className='fas fa-wifi'></i>
                                            Free Wifi
                                        </li>
                                        <li>
                                            <i className='fas fa-tv'></i>
                                            32 Inc TV
                                        </li>
                                    </ul>
                                </div>
                                
                                <hr />

                                <div className='box_item_footer d-flex align-items-center justify-content-between'>
                                    <a href="#" className='btn_4 learn-more'>
                                        <span className='circle'>
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text">
                                            Book Now
                                        </span>
                                    </a>
                                    <a href="" className='animated_link'>
                                        <strong>Read more</strong>
                                    </a>
                                </div>
                                <div id="jarallax-container-1" style={{
                                    position: "absolute",
                                    top: "0px",
                                    left: "0px",
                                    width: "100%",
                                    height: "100%",
                                    overflow: "hidden",
                                    zIndex: "-100",
                                    clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)"
                                }}
                                >
                                    <div style={{
                                        pointerEvents: "none",
                                        transformStyle: "preserve-3d",
                                        backfaceVisibility: "hidden",
                                        position: "fixed"
                                    }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="main-facilities">
            <div className="container">
                <div className="row">
                    <div className='header-facilities'>
                        <small className='lux-hotel'>Luxury Hotel</small>
                        <h2 className='lux-h2'>Main Facilities</h2>
                    </div>
                </div>
                <div className="main-row-hotel">
                    <div className='section-hotel-facilities'>
                        <div className="row-hotel-facilities">
                            <div className="list-items-hotel">
                                <ul>
                                    <li>
                                        <i class="fa-solid fa-car"></i>
                                    </li>
                                        <h3 className='private-parking'>Private Parking</h3>
                                    <p className='private-hotel-para'>
                                        Ut enim ad minima veniam, quis <br /> nostrum exercitationem ullam <br /> corporis suscipit laboriosam.
                                    </p>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="row-hotel-facilities">
                            <div className="list-items-hotel">
                                <ul>
                                    <li>
                                        <i class="fas fa-wifi network"></i>
                                    </li>
                                        <h3 className='private-parking'>High Speed Wifi</h3>
                                    <p className='private-hotel-para'>
                                        Ut enim ad minima veniam, quis <br /> nostrum exercitationem ullam <br /> corporis suscipit laboriosam.
                                    </p>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="row-hotel-facilities">
                            <div className="list-items-hotel">
                                <ul>
                                    <li>
                                        <i class="fas fa-cocktail"></i>
                                    </li>
                                        <h3 className='private-parking'>Bar & Restaurant</h3>
                                    <p className='private-hotel-para'>
                                        Ut enim ad minima veniam, quis <br /> nostrum exercitationem ullam <br /> corporis suscipit laboriosam.
                                    </p>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="row-hotel-facilities">
                            <div className="list-items-hotel">
                                <ul>
                                    <li>
                                        <i class="fas fa-swimming-pool"></i>
                                    </li>
                                        <h3 className='private-parking'>Swimming Pool</h3>
                                    <p className='private-hotel-para'>
                                        Ut enim ad minima veniam, quis <br /> nostrum exercitationem ullam <br /> corporis suscipit laboriosam.
                                    </p>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </section>

        <Footer />                              

    </div>
  )
}

export default Deluxe_Rooms