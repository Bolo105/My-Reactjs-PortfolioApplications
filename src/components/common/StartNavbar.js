import React, { useState } from 'react'
import { BsRocketTakeoff } from 'react-icons/bs';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Light = styled.nav`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) !important;
	background-color: #fff;
`;
const LinkNav = styled.a`
    font-size: 18px;
    text-transform: capitalize;
	text-decoration: none !important;
    font-weight: 500;
	margin-left: 20px;
	color: #000;
	cursor: pointer;
	&:hover {
		color: #00ff8c;
	}
`;


const TogglerIcon = styled.span`
    padding: 1px 5px;
	font-size: 18px;
	line-height: 0.3;
`;
const Head1 = styled.h5`
    font-weight: bold;
    color: #00ff8c;
    display: inline-block;
    padding-left: 15px;
    font-family: 'Kaushan Script', cursive;
    font-size: 35px;
    vertical-align: middle;
	letter-spacing: 1px;  
    &:hover {
      color: #42e73c;
    }
	@media screen and (max-width: 768px) {
		margin-left: -6px;
        font-size: 26px;
  }
  @media screen and (max-width: 576px) {
		margin-left: -10px;
        font-size: 22px;
  }
`;

function StartNavbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  return (
    <Light className="navbar navbar-expand-lg navbar-light  fixed-top">
		<div className="container">
			<div className="navbar-brand" href="/">
			<i><BsRocketTakeoff /></i><Head1>makeItHappen!!!</Head1>
			</div>
				 <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button" onClick={toggleMenu}>
					 <TogglerIcon className="navbar-toggler-icon"></TogglerIcon>
				</button>
			<div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<Link className="nav-item" to='/' style={{textDecoration: 'none'}}>
						<LinkNav className="nav-link" href="/">Home</LinkNav>
					</Link>
					<Link className="nav-item" to='/startabout' style={{textDecoration: 'none'}}>
						<LinkNav className="nav-link" href="/startabout">About</LinkNav>
					</Link>
					<Link class="nav-item dropdown" id='startgallery' style={{textDecoration: 'none'}}>
                      <LinkNav className="nav-link dropdown-toggle" href="/startgallery" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Portfolio
                      </LinkNav>
                             <ul class="dropdown-menu">
                                <Link to='/startgallerybase3' style={{textDecoration: 'none'}}><a class="dropdown-item" href="/startgallerybase3">React/Components</a></Link>
                                <Link to='/startgalleryapps' style={{textDecoration: 'none'}}><a class="dropdown-item" href="/startgalleryapps">React/Apps</a></Link>
								<Link to='/startgalleryapi' style={{textDecoration: 'none'}}><a class="dropdown-item" href="/startgalleryapps">React/API</a></Link>
                             </ul>
                    </Link>
					<Link className="nav-item" to='/startservices' style={{textDecoration: 'none'}}>
						<LinkNav className="nav-link" href="/startservices">Services</LinkNav>
					</Link>
					<Link className="nav-item" to='/startcontact' style={{textDecoration: 'none'}}>
						<LinkNav className="nav-link" href="/startcontact">Contact</LinkNav>
					</Link>
				</ul>
			</div>
		</div>
	</Light>
  )
}

export default StartNavbar;