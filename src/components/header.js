import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.png'

function change_favicon(img) {
    var favicon = document.querySelector('link[rel="shortcut icon"]');

    if (!favicon) {
        favicon = document.createElement('link');
        favicon.setAttribute('rel', 'shortcut icon');
        var head = document.querySelector('head');
        head.appendChild(favicon);
    }


    favicon.setAttribute('type', 'image/png');
    favicon.setAttribute('href', img);
}

change_favicon('/src/assets/img/favicon-16x16.png');

class Header extends Component {
	render(){
		return(
		  <div id="headerfixed">
		    <div id="topbar">
		      <div className="row">
		        <div className="col-sm-3"><Link to="/"><img class="black-logo" src="/src/assets/img/logo.png"/>
                 </Link></div>
		        <div className="col-sm-9">
		          <div id="menu">
		          	<Link to="/about">About</Link>
		          	<Link to="/browse">Browse Database</Link>
		          	<Link to="/featured">Featured 3D Artifacts</Link>
		          	<Link to="/challenges">Dev Challenges</Link>
		          	<Link to="/contact">Contact</Link>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		)
	}
}

export default Header;
