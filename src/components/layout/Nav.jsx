import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import logo from "../../images/logo.svg"
import measering from "../../images/measering.svg"
import calculation from "../../images/calculation.svg"
export default function Nav() {
    return (
        <header>
            <div className={styles['nav-container']}>
                
                <div >
                    <Link to="/"><img src={logo} alt='logo'/></Link>
                    
                </div>

                <nav>
                    <ul>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>
                </nav>

                <div className={styles["buttons"]}>
                    <button className={styles["request-btn"]}><img src={measering} alt='img1'/>Make request</button>
                    <button className={styles["calc-btn"]}><img src={calculation} alt = 'img2'/>Calculation</button>
                </div>
            </div>
        </header>
    );
}
