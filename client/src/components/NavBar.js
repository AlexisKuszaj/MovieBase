
import SearchBox from "./SearchBox";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

const NavBar = (props) => {
    // const [searchValue, setSearchValue] = useState('');
    return (
        <nav class="navbar navbar-light">
			<div className="navbar-inline">

<span class=" movienav navbar-brand mb-0 h1">Movie<span className="base">Base</span></span>

{/* <SearchBox/> */}
			</div>
</nav>
    )
}

export default NavBar