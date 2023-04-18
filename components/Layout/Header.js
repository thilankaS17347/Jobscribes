/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from "react";

const Header = ({handleOpen,handleRemove,openClass}) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
          const scrollCheck = window.scrollY > 100
          if (scrollCheck !== scroll) {
            setScroll(scrollCheck)
          }
        })
      })
    return (
        <>
            <header className={scroll ? "header sticky-bar stick" : "header sticky-bar"}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                            <Link legacyBehavior href="/index-2"><a className="d-flex"><img alt="jobsribes" src="assets/imgs/template/jobhub-logo.svg" /></a></Link>
                            </div>
                        </div>
                        <div className="header-nav">
                            <nav className="nav-main-menu">
                                <ul className="main-menu">
                                <li >
                                        <Link legacyBehavior href="/index-2"><a>Home</a></Link>                      
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/jobs-list"><a>Find a Job</a></Link>                                        
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/companies-grid"><a>Recruiters</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/candidates-grid"><a>candidates grid</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/page-pricing"><a>pricing-plan</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/page-contact"><a>Contact</a></Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className={`burger-icon burger-icon-white ${openClass && "burger-close"}`} 
                            onClick={()=>{handleOpen(); handleRemove()}}>
                                <span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" /></div>
                        </div>
                        <div className="header-right">
                            <div className="block-signin">
                                <Link legacyBehavior href="page-register"><a className="text-link-bd-btom hover-up">Register</a></Link>

                                <Link legacyBehavior href="page-signin"><a className="btn btn-default btn-shadow ml-40 hover-up"style={{backgroundColor:'blue'}}>Sign in</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            
        </>
    );
};

export default Header;
