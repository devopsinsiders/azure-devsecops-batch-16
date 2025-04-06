import React from 'react';

const AboutUs = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="jumbotron jumbotron-fluid bg-info text-white text-center py-5 mb-5">
                <div className="container">
                    <h1 className="display-2 fw-bold">About Us</h1>
                    <p className="lead">
                        At DevOps Insiders, we are passionate about empowering professionals through world-class tech education.
                    </p>
                </div>
            </div>

            <div className="container mb-5">
                {/* Our Story Section */}
                <section className="mb-5">
                    <h2 className="mb-3">Our Story</h2>
                    <p>
                        DevOps Insiders was born out of a desire to bridge the gap between rapidly evolving technology and continuous learning.
                        Our journey began with a small group of enthusiasts determined to make technical education accessible,
                        engaging, and effective for everyone.
                    </p>
                </section>

                {/* Our Mission Section */}
                <section className="mb-5">
                    <h2 className="mb-3">Our Mission</h2>
                    <p>
                        Our mission is to provide high-quality, up-to-date courses and hands-on experiences in DevOps, cloud computing,
                        and modern software development. We aim to create a vibrant community where learning and innovation thrive.
                    </p>
                </section>

                {/* Meet Our Team Section */}
                <section>
                    <h2 className="mb-4">Meet Our Team</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Alice Johnson</h5>
                                    <p className="card-text">CEO & Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Bob Smith</h5>
                                    <p className="card-text">CTO & Co-Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Carol Williams</h5>
                                    <p className="card-text">Lead Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
