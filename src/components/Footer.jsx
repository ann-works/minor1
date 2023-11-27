import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="fcontainer">
                    <div className="frow">
                        <div className="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li>about us</li>
                                <li>our services</li>
                                <li>privacy policy</li>
                                <li>affiliate program</li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li>FAQ</li>
                                <li>shipping</li>
                                <li>returns</li>
                                <li>order status</li>
                                <li>payment options</li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>our products</h4>
                            <ul>
                                <li>Brush</li>
                                <li>Bottle</li>
                                <li>Bowls</li>
                                <li>Artifacts</li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer