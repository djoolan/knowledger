import React, { Component } from 'react'
import Navbar from './NavBar'
import Link from 'next/link'
import StyledHeader from './styles/StyledHeader'
import StyledTitle from './styles/StyledTitle'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => {
    NProgress.start()
}

Router.onRouteChangeComplete = () => {
    NProgress.done()
}

Router.onRouteChangeError = () => {
    console.log('Error loading page')
    NProgress.done()
}

const Header = () => (
    <StyledHeader>
        <div className="navbar">
            <StyledTitle>
                <Link href="/">
                    <a><span className="stabilo">Know</span>Ledger</a>
                </Link>
            </StyledTitle>
            <Navbar />
        </div>
        {/* <div className="sub-navbar">
            <p>Rechercher</p>
        </div>
        <div>
            <p>Mon panier</p>
        </div> */}
    </StyledHeader>
)

export default Header