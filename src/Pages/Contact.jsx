import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

const Contact = () => {
  return (
    <div>

        <Header />

        <section className="site-hero site-hero-innerpage overlay" data-stellar-background-ratio="0.5" style={{ backgroundImage: "url(images/big_image_1.jpg)" }}>
            <div className="container">
                <div className="row align-items-center site-hero-inner justify-content-center">
                    <div className="col-md-12 text-center">
                        <div className="mb-5 element-animate">
                            <h1>Contact Us</h1>
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
                        <h2 className="mb-5">Contact Form</h2>
                        <form action="#" method="post">
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" className="form-control " />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" id="phone" className="form-control " />
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
                                    <label htmlFor="message">Write Message</label>
                                    <textarea name="message" id="message" className="form-control " cols={30} rows={8} defaultValue={""} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="submit" defaultValue="Send Message" className="btn btn-primary" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-1" />
                    <div className="col-md-5">
                        <h3 className="mb-5">
                            Paragraph
                        </h3>
                        <p className="mb-5">
                            <img src="images/img_4.jpg" alt="" className="img-fluid" />
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                            labore aspernatur cumque inventore voluptatibus odit doloribus!
                            Ducimus, animi perferendis repellat. Ducimus harum alias quas,
                            quibusdam provident ea sed, sapiente quo.
                        </p>
                        <p>
                            Ullam cumque eveniet, fugiat quas maiores, non modi eos deleniti
                            minima, nesciunt assumenda sequi vitae culpa labore nulla! Cumque
                            vero, magnam ab optio quidem debitis dignissimos nihil nesciunt
                            vitae impedit!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section  className="section-cover" data-stellar-background-ratio="0.5" style={{ backgroundImage: "url(images/img_5.jpg)" }}>
            <div className="container">
                <div className="row justify-content-center align-items-center intro">
                    <div className="col-md-9 text-center element-animate">
                        <h2>Relax and Enjoy your Holiday</h2>
                        <p className="lead mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                            quidem tempore expedita facere facilis, dolores!
                        </p>
                        <div className="btn-play-wrap">
                            <a href="https://vimeo.com/channels/staffpicks/93951774" className="btn-play popup-vimeo">
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

export default Contact