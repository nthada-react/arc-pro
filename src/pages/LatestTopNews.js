import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import rssParser from 'react-native-rss-parser';
import { setTopNews } from '../redux/actions/newsActions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopNewsComponent from '../components/TopNewsComponent';
 
const LatestTopNews = () => { 
  //const topnews = useSelector ((state) => state);
  const dispatch = useDispatch();

  const fetchTopNews = async () =>{
    const response = await fetch('https://feed.livehindustan.com/rss/3127')
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .catch((error)=>{
      console.log('Error', error)
    });
    dispatch(setTopNews(response.items))
   // console.log(response.items)
  }

  useEffect(()=>{
    fetchTopNews();
  })
  //console.log('topnews:', topnews)
  return(
    <div className="newsList">     
     <Header/>
     <div className="sm:container mx-auto px-4">
       <div className='flex justify-center text-3xl pt-4 text-center font-light  '>Today Latest News</div>
   <TopNewsComponent/> 
   </div>
     <Footer/>   
    </div>
  )
}


export default LatestTopNews;