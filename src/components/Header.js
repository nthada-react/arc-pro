import React from 'react';
import '../style/header.scss'
import { arcLogo } from '../constants/requiredAssets';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='header p-6 flex justify-between items-center'>
            <img src={arcLogo} alt='arcgate' className='logo' />
            <div className='menu uppercase font-semibold  text-white text-sm'>
            <Link to={'/'} className="px-2 hover:text-red-200 hover:underline" >Home</Link>|
            <Link to={'/LatestTopNews'} className="px-2 hover:text-red-200 hover:underline">Latest News</Link>|
            <Link to={'/LatestMovies'} className="px-2 hover:text-red-200 hover:underline" >Latest Movies</Link>
                </div> 
        </div>
      );

}

export default Header;