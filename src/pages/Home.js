import React from 'react';
import './Home.scss';
import { arcLogo, profilePic } from '../constants/requiredAssets';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="pageBg">
      <img src={arcLogo} alt='arcgate' className='logo' />
      <div className='w-40 h-50 my-10'> <img src={profilePic} alt='arcgate' className='rounded-full outline outline-2 outline-white outline-offset-4' /></div>
      <div className='intro'>
        <h1 className='text-6xl subpixel-antialiased font-semibold'>Nitin Thada</h1>
        <p className='text-5xl subpixel-antialiased font-medium text-white my-5 max-w-2xl leading-tight'><span className='font-light italic text-orange-200'>Hello, </span> 
        <span className='font-thin text-white'>i am</span> Front End Developer. <span className='font-thin text-white'>Based in</span> Udaipur.</p>
      </div>
      <div className='buttons my-5'>
      <Link to={'/LatestTopNews'} >
        <button  className='rounded-full outline outline-2 outline-white outline-offset-4 text-lg text-white px-10 py-2 mx-5 bg-orange-600 hover:bg-orange-400 uppercase'>LATEST NEWS</button>
        </Link>
        <Link to={'/LatestMovies'} >
        <button className='rounded-full outline outline-2 outline-white outline-offset-4 text-lg text-white px-10 py-2 mx-5 bg-orange-600 hover:bg-orange-400 uppercase'>Latest Movies</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
