import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css'
import { useStateValue } from '../StateProvider';
import logo from '../images/dog_logo.png'
import { auth } from 'firebase';


function Header() {

    const [{ basket, user }] = useStateValue();
    const currentUser = auth.currentUser;
    console.log(currentUser);

    const handleSignOut = () => {
        auth().signOut();
    }

    return (
        <nav className='header'>

            <Link to='/'>
                <img className='header__logo' src={logo} alt='Dog logo' />
            </Link>

            <div className='header__search'>
                <input type="text" className='header__searchInput' />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className='header__nav'>

                <Link to={!user && '/login'} className='header__link'>
                    <div onClick={handleSignOut} className='header__option'>
                        <span className='header__optionLineOne'>Hello User</span>
                        <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Ask Professional</span>
                        <span className='header__optionLineTwo'>Support</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to='/checkout' className='header__link'>
                    <div className='header__optionBasket'>
                        <ShoppingCartIcon />
                        {/* shopping basket icon */}
                        <span className='header__optionLineTwo header__basketCount'>
                            {basket.length}
                        </span>
                    </div>
                </Link>

            </div>

        </nav >
    )
}

export default Header