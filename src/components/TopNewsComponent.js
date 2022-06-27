import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { a1 } from '../constants/requiredAssets';
import '../style/newslisting.scss'
 
const TopNewsComponent = () => { 
 const topnews = useSelector ((state) => state.allTopnews.topnews);
 const renderTopNews = topnews.map((topnews) =>{
    const {id, title, description, published} = topnews;
   const description1 = description.replace(/<img[^>]*>/g,"");
    const url = id.replace(/(http(s?)):\/\//g,"");
   // var regex = /img.*?src=("|')(.*?)\1/i;
    //var image = description.match(regex)[2];
   
    return(
      <div key={id} className="grid grid-flow-col hover:shadow-lg m-5 border border-slate-300 p-3 rounded-md">
         <Link to={`//${url}`} target="_blank" title={url}>
         <div className='topNewsListing flex'>
          <div className='imgCaption'>     
          <img src={a1} alt={title} width="100px" className=' rounded-md' />
            {/* <img src={image} alt={image} width="200px" className=' rounded-md' />        */}
          </div>
          <div>
              <h1>{title}</h1>
              <p>{description1}</p>
              <small>{published}</small>
          </div>
          </div>
         </Link>
      </div>
  //   <div key={id} className="grid grid-flow-col hover:shadow-lg m-5 border border-slate-300 p-3 rounded-md">
  //     <Link to={`//${url}`} target="_blank" title={url}>
  //   <div className='topNewsListing flex'>    
  //     <div className='imgCaption'>     
  //       <img src={image} alt={image} width="200px" className=' rounded-md' />       
  //       </div>
  //     <div>
  //     <h1>{title}</h1>
  //     <p>{description1}</p>
  //     <small>{published}</small>
  //     </div>
     
  //   </div>   
  //   </Link>  
  // </div>
  //   // <div key={id}>
  //   // <div>{title}</div> <div>{description}</div> 
  //   //  </div>
   )
 })
  return(
  <>
  {renderTopNews}
  </>
  )
}


export default TopNewsComponent;