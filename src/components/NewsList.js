import React from 'react';
import { useSelector } from 'react-redux';
import '../style/listing.scss'
//import { Player } from 'video-react';
import ModalBox from './ModalBox';
import {  playIcon } from '../constants/requiredAssets';


const NewsList = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [singleNews, setSingleNews] = React.useState(false);
  
  function openModal(latestNews) {
   setIsOpen(true);
   console.log('fgfgfg',latestNews)
    setSingleNews(latestNews)
  }

  function closeModal() {
    setIsOpen(false);
  }







    const latestNews = useSelector((state) => state.latestNews.latestNews);
    const renderList = latestNews.map((latestNews) =>{
      const {id, title, images, category}  = latestNews;
      return(         
        <div key={id} className="grid grid-flow-col hover:shadow-lg">
          <div onClick={()=>{openModal(latestNews)}} className='border border-slate-300 hover:border-0 p-3 rounded-md bocColumn'>
          <img src={images} alt={images} width="100%" />
            <h1>{title}</h1>
            <p>{category}</p>
            <div className='HoverEffect border border-slate-300 p-3 rounded-md '>
            <span className="btn-play"><img src={playIcon} alt="icon" width='60' /></span>
              <p>Watch Movies</p>
            <h1>{title}</h1>
          </div>
          </div>     
        </div>
        
      )
    });   


  return <>
  <div className="container mx-auto pt-6 pb-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
  {renderList} 
  </div>
  </div>
  {modalIsOpen && <ModalBox singleNews={singleNews} modalIsOpen={modalIsOpen} closeModal={closeModal} />}
  
  </>
};



export default NewsList;
