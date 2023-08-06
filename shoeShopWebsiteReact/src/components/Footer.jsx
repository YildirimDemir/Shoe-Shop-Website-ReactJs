import { useState } from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(){
    return(
        <footer>
            <div className="footer-row">
                <div className="footer-col">
                    <h3>Company</h3>
                    <ul>
                        <li>
                        <Link to="/products">Products</Link>
                        </li>
                        <li>
                        <Link to="/">Categories</Link>
                        </li>
                        <li>
                        <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Related Questions</h3>
                    <ul>
                        <li>
                        <Link to="/questions">Cargo</Link>
                        </li>
                        <li>
                        <Link to="/questions">Quality</Link>
                        </li>
                        <li>
                        <Link to="/questions">Suppliers</Link>
                        </li>
                        <li>
                        <Link to="/questions">Returns</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Trend Categories</h3>
                    <ul>
                        <li>
                        <Link to="/">Daily</Link>
                        </li>
                        <li>
                        <Link to="/">Sneakers</Link>
                        </li>
                        <li>
                        <Link to="/">Running</Link>
                        </li>
                        <li>
                        <Link to="/">Basketball</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-col social_media_icons">
                    <h3>Follow Us</h3>
                    <ul>
                    <a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="linkedin"><i class="fab fa-linkedin"></i></a>
                    </ul>
                </div>
            </div>
        </footer>
    )
}