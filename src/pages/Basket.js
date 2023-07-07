
import { DELIVERY_ROUTE, ORDER_ROUTE } from '../utils/consts';
import { useNavigate, } from 'react-router-dom';
import BasketList from '../components/BasketList'
import { useEffect } from 'react';
import React from 'react'
import jwt_decode from "jwt-decode";
import set_message from './set_message.js'
import $ from 'jquery'
import useState from 'react-usestateref'
import Wpages from './wpages';
import { GetUser, get_peomo_by, get_peomo_by_ident } from '../http/userAPI';

const Basket = ()=>{
  const [summa,SetData1] = useState(0)
  const [skid,Setskid] = useState(1)
  const [col_vo,SetData2] = useState()
  const [itog,Setitog] = useState(0)
  const [promo,Setpromo] = useState('')
  const [skidka,Setskidka,SetskidkaRef] = useState(0)

  const [ user,seruser,userRef] = useState()
  const navigate = useNavigate()


  const getpromo = async() => {

    const storedToken = localStorage.getItem('token');
    const userId = jwt_decode(storedToken).id
   const promo1 = await get_peomo_by_ident(userId,promo)

if(promo1.data!==null&&promo1.data!='Превышено количество активаций промокода'){
  $('.admin_display_off').addClass('admin_display_on')
    $('.ok_promo').addClass('d_fle')
    $('.promo_inp').prop("disabled",true)
    set_message('Промокод активирован :)','completed')
    Setskidka(promo1.data.skidka)

    Setskid(1-(promo1.data.skidka/100))


}
if(promo1.data==='Превышено количество активаций промокода'){
  set_message('Промокод закончился :( ','standart')
}

if(promo1.data===null){
  set_message('Такого промокода не существует :( ','error')
}
  }





  const getBlack = async() => {
    if(!user){
      const storedToken = localStorage.getItem('token');
      const userId = jwt_decode(storedToken).id
      const user = await GetUser(userId)
      seruser(user)

      if(user.data.promocode){
        Setpromo(user.data.promocode)
        
        const promo1 = await get_peomo_by(user.data.promocode)
         Setskidka(promo1.data.skidka)
         Setskid(1-(promo1.data.skidka/100))
        $('.admin_display_off').addClass('admin_display_on')
        $('.ok_promo').addClass('d_fle')
        $('.promo_inp').prop("disabled",true)

      }
   
    }

    var mar = $('.mar')
    var float_left = $('.float_left')
    mar.addClass('black1')

    float_left.addClass('black1')
    $(window).scroll(function() {
      var scrolled = $(window).scrollTop();
      if ( scrolled > 100 ) {
        mar.removeClass('black1')
        float_left.removeClass('black1')
      }else{
        mar.addClass('black1')
        float_left.addClass('black1')
      }
    })

 

  }





  useEffect(()=>{


    
    getBlack()
  },[])


  useEffect(()=>{

    $('.cross').click(function(){
        set_message('This is an awesome message!');
    });
     
    $('.btn-2').click(function(){
        set_message('I agree that your message is awesome!');
    });
},[])



const itog1 = async(summa) => {
 if(summa!=0&&skidka!=0){
  const sum = summa * (1-(skidka/100))

 }
}

const setOrder = async(col_vo) => {

    if (col_vo === 0 ){
      $('.basket_no_items').addClass('basket_yes_items')
      set_message('В вашей корзине пусто :( ','standart')
    }else{
      $('.basket_no_items').removeClass('basket_yes_items')
      navigate(DELIVERY_ROUTE)
    }
}
  return (

    <div>
      <Wpages/>
        <div  class='start_basket'>
            <div class='basket'>
                  <div class='float'> Корзина</div>
                  <div class='float s_2'> Доставка</div>
                  <div class='float s_2'> Оплата</div>
                  <div class='float s_2' onClick={() => navigate(ORDER_ROUTE)}> Мои Заказы</div>
                
            </div>
        </div>

        <div class='row container_basket'>

        <div class= 'col-12 col-md-7 '>

        <BasketList SetData1={SetData1} SetData2 ={SetData2}/>
    <div class='basket_no_device'>
        <div class='heart_no_login mt-'>
<div >
<svg  width='100px' opacity={0.8} id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m314.885 276.186c-6.9 0-12.494 5.594-12.494 12.494s5.594 12.494 12.494 12.494 12.494-5.594 12.494-12.494-5.594-12.494-12.494-12.494z"/><path d="m282.455 314.855h-52.911c-4.142 0-7.499 3.358-7.499 7.499s3.357 7.499 7.499 7.499h52.911c4.142 0 7.499-3.358 7.499-7.499s-3.357-7.499-7.499-7.499z"/><circle cx="197.115" cy="288.68" r="12.494"/><path d="m503.262 139.282c0-.001 0-.001 0 0-3.559-57.047-37.303-103.779-86.32-125.896-51.874-23.407-111.634-15.78-160.946 20.251-49.31-36.026-109.075-43.646-160.961-20.232-49.133 22.172-82.746 68.966-86.295 125.876v.001c-2.857 45.771 14.006 94.15 48.764 139.905s0 0 0 0c27.672 36.42 66.292 71.016 115.228 103.299v56.613h-11.875c-20.099 0-36.451 16.352-36.451 36.451s16.352 36.451 36.451 36.451h48.326c9.823 0 18.982-3.917 25.703-10.623 6.595 6.56 15.679 10.622 25.694 10.622h48.326c20.099 0 36.451-16.352 36.451-36.451v-97.133c46.052-31.112 82.615-64.331 109.131-99.229 34.756-45.739 51.622-94.118 48.774-139.905zm-272.627 315.489c-4.107 5.924-6.505 13.214-6.505 20.778 0 7.249 2.194 12.321 2.305 12.748-4.01 5.438-10.36 8.704-17.251 8.704h-48.326c-11.829 0-21.452-9.623-21.452-21.452 0-11.828 9.623-21.452 21.452-21.452h19.374c4.142 0 7.499-3.358 7.499-7.499v-29.778c11.082 6.619 22.577 13.131 34.51 19.523 2.715 1.454 5.522 2.72 8.394 3.808zm99.723 20.778c0 11.828-9.623 21.452-21.452 21.452h-48.326c-11.647 0-21.451-9.453-21.451-21.452 0-11.762 9.566-21.452 21.451-21.452h19.375c4.142 0 7.499-3.358 7.499-7.499v-9.078c.773-.378 1.539-.77 2.299-1.177 14.136-7.573 27.663-15.312 40.605-23.202zm-84.724-33.232v-19.195c3.415.776 6.89 1.184 10.368 1.184 5.574 0 11.145-1.008 16.453-3.001v17.793h-11.875c-5.325.001-10.381 1.158-14.946 3.219zm196.911-172.204c-26.149 34.416-62.621 67.246-108.823 98.049-.008.005-.017.009-.025.014-19.866 13.244-41.226 25.873-62.606 37.327 0 0-.001 0-.001.001-.001 0-.002 0-.002.001-9.221 4.946-20.195 5.047-29.515.331-.013-.007-.024-.016-.037-.022-9.656-4.921-35.293-19.398-57.21-33.669-.008-.005-.018-.009-.025-.014-49.073-31.951-87.58-66.123-114.851-102.016-32.552-42.851-48.368-87.77-45.738-129.9 3.14-50.363 32.11-92.658 77.494-113.139 48.353-21.82 104.498-13.644 150.19 21.869 2.755 2.124 6.582 2.054 9.204 0 45.695-35.518 101.835-43.7 150.175-21.887 45.397 20.484 74.376 62.786 77.519 113.156 2.619 42.145-13.2 87.064-45.749 129.899z"/><path d="m417.021 111.526-16.29-16.29c-11.385-11.385-29.91-11.385-41.296 0l-3.163 3.163-3.163-3.163c-11.385-11.385-29.91-11.385-41.295 0l-16.29 16.29c-11.411 11.411-11.413 29.882 0 41.295l3.163 3.163-3.163 3.163c-11.385 11.385-11.385 29.91 0 41.295l16.29 16.29c11.385 11.385 29.91 11.385 41.295 0l3.163-3.163 3.163 3.163c11.386 11.385 29.91 11.386 41.296 0l16.29-16.29c11.412-11.412 11.413-29.883 0-41.295l-3.163-3.163 3.163-3.163c11.411-11.411 11.412-29.882 0-41.295zm-74.518 94.601c-5.537 5.537-14.547 5.537-20.084 0l-16.29-16.29c-5.537-5.537-5.537-14.547 0-20.084l3.163-3.163c10.978 10.978 25.447 25.447 36.374 36.374zm63.911-16.29-16.29 16.29c-5.537 5.537-14.547 5.537-20.084 0-35.31-35.31-27.763-27.763-63.912-63.911-5.549-5.549-5.551-14.533 0-20.084l16.29-16.29c5.536-5.536 14.547-5.537 20.084 0l63.911 63.911c5.552 5.551 5.552 14.533.001 20.084zm0-47.621-3.163 3.163-36.374-36.374 3.163-3.163c5.537-5.537 14.547-5.537 20.084 0l16.29 16.29c5.551 5.551 5.551 14.533 0 20.084z"/></g></svg>

</div>
<div class='mt-5'>
{'В корзинке пусто :('}
</div>
   <div class='nachalo_shop'>

   </div>
   </div>
   </div>

      

        </div>     

        <div class= 'col-12  col-md-5 ' >
            
        <div class='basket_menu'>
             
        <div class='order_item_1_header'>
 Новый заказ



  </div>
             <div class='basket_menu_text1 _d-flex'>
             <div class='mb-20'>Промокод :</div>

              <div class='display_flex'>
              <input  class='promo_inp' value={promo}  onChange={e => Setpromo(e.target.value)}/> 
              <div style={{position:'unset'}} class='mb-20 color5 choose svg2 savg change_img admin_display_off '>
              </div>
              <div class='ok_promo' onClick={getpromo}>OK</div>
              </div>  


             </div>
             <div class='basket_menu_text1'>
              Всего товаров : 
              <div class='float_right'>
              {col_vo}
             </div>
             </div>
             
             <div class='basket_menu_text1'>
              Сумма:
              <div class='float_right'  onChange={e => itog1(summa)}>
              {summa}₽
             </div>
             </div>

             <div class='basket_menu_text1'>
              Скидка:
              <div class='float_right'>
              {SetskidkaRef.current}%
             </div>
             </div>

             

             <div class=' itog'>
              Итого :
              <div class='float_right'>
              {Math.round(summa*skid)}₽
             </div>
             </div>
            <div class='d-flex'>
            <div onClick={() =>setOrder(col_vo) } class='but_basket'>
                Оформить заказ
             </div></div> 
        </div>


        </div>
        </div>
        <div class="message-box"></div>
    </div>
    
  )
}
  
export default Basket


