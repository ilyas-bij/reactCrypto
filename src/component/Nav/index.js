import React from 'react'
import '../Scss/Nav.scss';
import {Link} from 'react-router-dom'


function NavBar() {
    window.addEventListener('scroll',function () {
        const header = document.querySelector('header');
        header.classList.toggle("sticky" , window.scrollY > 0)
    })
    function togellMenu() {
        const header = document.querySelector('.header');
        const navegation = document.querySelector('.navegation');
        header.classList.toggle("active")
        navegation.classList.toggle("active")
    }

    return (
     <header className='header' >
         <Link to='/' className='logo'>Crypto<span>Net</span> </Link>
        <div className='menu' onClick={togellMenu}>
                <ul className='navegation'>
                    <li> <Link to='/'  className='Link'>Home </Link></li>
                    <li> <Link to='/Market/spot' className='Link' >Market </Link></li>
                    <li> <Link to='/About' className='Link' > About</Link></li>
                    <li> <Link to='/Login' className='Link' > Login</Link></li>
                </ul>
         </div>
     </header>
    )
}

export default NavBar