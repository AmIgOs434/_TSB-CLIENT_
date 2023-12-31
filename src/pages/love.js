import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import { fetch_my_device} from "../http/deviceAPI";
import Wpages from './wpages';
import { fetchLove } from '../http/userAPI';
import jwt_decode from "jwt-decode";
import useState from 'react-usestateref'
import $ from 'jquery'
import LoveList from './lovelist';
import { useNavigate } from 'react-router-dom';


const Shop = observer( ()=>{
   
  const {device} = useContext(Context)
  const [love1,setlove,setloveRef] = useState(null)
  const [sv,setsv,setsvRef] = useState(0)
  const [arr,setarr,setarrRef] = useState()




  const navigate = useNavigate()



  
  const get = async()=>{
  let arr = []
  
  const user_ = localStorage.getItem('token')
  if (user_){
    const user = jwt_decode(user_)
    const ww = await fetchLove(user.id)
 
    Promise.all(ww.map(async id => {
     let response
     try {
       response =await fetch_my_device(id.deviceId) 

       if(response.data!=null){
         arr.push(response.data)
       }
      
  
     } catch (err) {
       return err;
     }
     return arr
   })).then(data => {
     setarr(arr)
     if(arr.length ===0){
      $('.display_no_login').addClass('display_on')
     }
     device.setLoves(arr)})
  }else{
    $('.display_no_login').addClass('display_on')
  }


}

 

  
  


  useEffect(() => {

    get()
   
}, [])




  return (
    <div class="app1">

<div class='nachalo_shop'>

   </div>
<Wpages/>
<div class='display_flex_on'onClick={() => navigate(-1)} >

<svg  cursor='pointer' viewBox="0 0 1024 1024" width='70px' class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M506.6 423.6m-29.8 0a29.8 29.8 0 1 0 59.6 0 29.8 29.8 0 1 0-59.6 0Z" fill="#0F0F0F"></path><path d="M717.8 114.5c-83.5 0-158.4 65.4-211.2 122-52.7-56.6-127.7-122-211.2-122-159.5 0-273.9 129.3-273.9 288.9C21.5 562.9 429.3 913 506.6 913s485.1-350.1 485.1-509.7c0.1-159.5-114.4-288.8-273.9-288.8z" fill="#ffffff"></path><path d="M506.6 926c-22 0-61-20.1-116-59.6-51.5-37-109.9-86.4-164.6-139-65.4-63-217.5-220.6-217.5-324 0-81.4 28.6-157.1 80.6-213.1 53.2-57.2 126.4-88.8 206.3-88.8 40 0 81.8 14.1 124.2 41.9 28.1 18.4 56.6 42.8 86.9 74.2 30.3-31.5 58.9-55.8 86.9-74.2 42.5-27.8 84.3-41.9 124.2-41.9 79.9 0 153.2 31.5 206.3 88.8 52 56 80.6 131.7 80.6 213.1 0 103.4-152.1 261-217.5 324-54.6 52.6-113.1 102-164.6 139-54.8 39.5-93.8 59.6-115.8 59.6zM295.4 127.5c-72.6 0-139.1 28.6-187.3 80.4-47.5 51.2-73.7 120.6-73.7 195.4 0 64.8 78.3 178.9 209.6 305.3 53.8 51.8 111.2 100.3 161.7 136.6 56.1 40.4 88.9 54.8 100.9 54.8s44.7-14.4 100.9-54.8c50.5-36.3 108-84.9 161.7-136.6 131.2-126.4 209.6-240.5 209.6-305.3 0-74.9-26.2-144.2-73.7-195.4-48.2-51.9-114.7-80.4-187.3-80.4-61.8 0-127.8 38.5-201.7 117.9-2.5 2.6-5.9 4.1-9.5 4.1s-7.1-1.5-9.5-4.1C423.2 166 357.2 127.5 295.4 127.5z" fill="#141414"></path><path d="M353.9 415.6m-33.8 0a33.8 33.8 0 1 0 67.6 0 33.8 33.8 0 1 0-67.6 0Z" fill="#0F0F0F"></path><path d="M659.3 415.6m-33.8 0a33.8 33.8 0 1 0 67.6 0 33.8 33.8 0 1 0-67.6 0Z" fill="#0F0F0F"></path><path d="M411.6 538.5c0 52.3 42.8 95 95 95 52.3 0 95-42.8 95-95v-31.7h-190v31.7z" fill="#5B5143"></path><path d="M506.6 646.5c-59.6 0-108-48.5-108-108v-31.7c0-7.2 5.8-13 13-13h190.1c7.2 0 13 5.8 13 13v31.7c0 59.5-48.5 108-108.1 108z m-82-126.7v18.7c0 45.2 36.8 82 82 82s82-36.8 82-82v-18.7h-164z" fill="#141414"></path><path d="M450.4 578.9a54.7 27.5 0 1 0 109.4 0 54.7 27.5 0 1 0-109.4 0Z" fill="#EA64F9"></path><path d="M256 502.7a32.1 27.5 0 1 0 64.2 0 32.1 27.5 0 1 0-64.2 0Z" fill="#EFAFF9"></path><path d="M703.3 502.7a32.1 27.5 0 1 0 64.2 0 32.1 27.5 0 1 0-64.2 0Z" fill="#EFAFF9"></path></g></svg>

</div>
<div class='display_no_login '>


<div class='heart_no_login'>
<div >
<svg  width='100px' opacity={0.8} id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m314.885 276.186c-6.9 0-12.494 5.594-12.494 12.494s5.594 12.494 12.494 12.494 12.494-5.594 12.494-12.494-5.594-12.494-12.494-12.494z"/><path d="m282.455 314.855h-52.911c-4.142 0-7.499 3.358-7.499 7.499s3.357 7.499 7.499 7.499h52.911c4.142 0 7.499-3.358 7.499-7.499s-3.357-7.499-7.499-7.499z"/><circle cx="197.115" cy="288.68" r="12.494"/><path d="m503.262 139.282c0-.001 0-.001 0 0-3.559-57.047-37.303-103.779-86.32-125.896-51.874-23.407-111.634-15.78-160.946 20.251-49.31-36.026-109.075-43.646-160.961-20.232-49.133 22.172-82.746 68.966-86.295 125.876v.001c-2.857 45.771 14.006 94.15 48.764 139.905s0 0 0 0c27.672 36.42 66.292 71.016 115.228 103.299v56.613h-11.875c-20.099 0-36.451 16.352-36.451 36.451s16.352 36.451 36.451 36.451h48.326c9.823 0 18.982-3.917 25.703-10.623 6.595 6.56 15.679 10.622 25.694 10.622h48.326c20.099 0 36.451-16.352 36.451-36.451v-97.133c46.052-31.112 82.615-64.331 109.131-99.229 34.756-45.739 51.622-94.118 48.774-139.905zm-272.627 315.489c-4.107 5.924-6.505 13.214-6.505 20.778 0 7.249 2.194 12.321 2.305 12.748-4.01 5.438-10.36 8.704-17.251 8.704h-48.326c-11.829 0-21.452-9.623-21.452-21.452 0-11.828 9.623-21.452 21.452-21.452h19.374c4.142 0 7.499-3.358 7.499-7.499v-29.778c11.082 6.619 22.577 13.131 34.51 19.523 2.715 1.454 5.522 2.72 8.394 3.808zm99.723 20.778c0 11.828-9.623 21.452-21.452 21.452h-48.326c-11.647 0-21.451-9.453-21.451-21.452 0-11.762 9.566-21.452 21.451-21.452h19.375c4.142 0 7.499-3.358 7.499-7.499v-9.078c.773-.378 1.539-.77 2.299-1.177 14.136-7.573 27.663-15.312 40.605-23.202zm-84.724-33.232v-19.195c3.415.776 6.89 1.184 10.368 1.184 5.574 0 11.145-1.008 16.453-3.001v17.793h-11.875c-5.325.001-10.381 1.158-14.946 3.219zm196.911-172.204c-26.149 34.416-62.621 67.246-108.823 98.049-.008.005-.017.009-.025.014-19.866 13.244-41.226 25.873-62.606 37.327 0 0-.001 0-.001.001-.001 0-.002 0-.002.001-9.221 4.946-20.195 5.047-29.515.331-.013-.007-.024-.016-.037-.022-9.656-4.921-35.293-19.398-57.21-33.669-.008-.005-.018-.009-.025-.014-49.073-31.951-87.58-66.123-114.851-102.016-32.552-42.851-48.368-87.77-45.738-129.9 3.14-50.363 32.11-92.658 77.494-113.139 48.353-21.82 104.498-13.644 150.19 21.869 2.755 2.124 6.582 2.054 9.204 0 45.695-35.518 101.835-43.7 150.175-21.887 45.397 20.484 74.376 62.786 77.519 113.156 2.619 42.145-13.2 87.064-45.749 129.899z"/><path d="m417.021 111.526-16.29-16.29c-11.385-11.385-29.91-11.385-41.296 0l-3.163 3.163-3.163-3.163c-11.385-11.385-29.91-11.385-41.295 0l-16.29 16.29c-11.411 11.411-11.413 29.882 0 41.295l3.163 3.163-3.163 3.163c-11.385 11.385-11.385 29.91 0 41.295l16.29 16.29c11.385 11.385 29.91 11.385 41.295 0l3.163-3.163 3.163 3.163c11.386 11.385 29.91 11.386 41.296 0l16.29-16.29c11.412-11.412 11.413-29.883 0-41.295l-3.163-3.163 3.163-3.163c11.411-11.411 11.412-29.882 0-41.295zm-74.518 94.601c-5.537 5.537-14.547 5.537-20.084 0l-16.29-16.29c-5.537-5.537-5.537-14.547 0-20.084l3.163-3.163c10.978 10.978 25.447 25.447 36.374 36.374zm63.911-16.29-16.29 16.29c-5.537 5.537-14.547 5.537-20.084 0-35.31-35.31-27.763-27.763-63.912-63.911-5.549-5.549-5.551-14.533 0-20.084l16.29-16.29c5.536-5.536 14.547-5.537 20.084 0l63.911 63.911c5.552 5.551 5.552 14.533.001 20.084zm0-47.621-3.163 3.163-36.374-36.374 3.163-3.163c5.537-5.537 14.547-5.537 20.084 0l16.29 16.29c5.551 5.551 5.551 14.533 0 20.084z"/></g></svg>

</div>
<div class='mt-5'>
{'У вас ещё нет избранных вещей :('}
</div>
   <div class='nachalo_shop'>

   </div>
   </div>
   </div>

    <section class="shop_grid_area section-padding-0">


            <div class="display_cart">


                <div class="col-12 col-md-12 col-lg-12 gy-0">
                    <div class="shop_grid_product_area">


                        <div class="row gx-1 overflow-hidden ">
               

        
            
                        <LoveList device={arr}/>
          
       
          

            </div>
            </div>
            </div>
            </div>
            </section>
            </div>
  )
})

export default Shop