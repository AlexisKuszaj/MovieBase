
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

const NavBar = (props) => {
    return (
        <nav class="navbar navbar-light bg-light">
			<div className="navbar-inline">

<span class=" movienav navbar-brand mb-0 h1">Movie<span className="base">Base</span></span>
			</div>
            <ul>
                <li>Home</li>
                <li>Favorites</li>
            </ul>
</nav>
    )
}

export default NavBar