import React, { useEffect } from 'react'


import { useNavigate } from 'react-router-dom';


import useState from 'react-usestateref'
import { get_item_order } from '../http/deviceAPI';
const OrderItem = ({order})=>{

    const [col_dev,setcol_dev,setcol_devRef] = useState()
    const [className1,SetclassName1,SetclassName1Ref] = useState()
    const [items,SetItems,SetItemsRef] = useState(null)
    const [data,Setdata,SetdataRef] = useState(null)
    const get_items = async()=>{
     

        let date = new Date(order.createdAt)
            let options = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
            }
        let formatted = date.toLocaleDateString('ru-RU', options)
        Setdata(formatted)
       
        if(items=== null){
           const response =await get_item_order(order.id) 
            SetItems(response)
          

            
      }
      var x= 0
      var col_dev = SetItemsRef.current?.data?.map(d=>(x+=(d.quantity) ),x=0).reverse()[0]
      
      setcol_dev(col_dev)
    }


useEffect(()=>{
    get_items()
    
const className1 = order.status === 'Товар получен' ? "bg_color_green" : "";
SetclassName1(className1)

})


  return (
     


 
    <div class='order_item'>
    <div class='order_item_1'>
    <div class= {`order_item_1_header order_item_1_header_1 order_item_1_header_2 ${className1}`} >
       Заказ от: {SetdataRef.current}
  
  <div class='support_svg'>
  
  
       <svg width="30px" height="30px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" >
      <title>support</title>
      <g id="Page-1"  stroke-width="1"  fill-rule="evenodd">
          <g id="support"  transform="translate(42.666667, 42.666667)">
              <path d="M379.734355,174.506667 C373.121022,106.666667 333.014355,-2.13162821e-14 209.067688,-2.13162821e-14 C85.1210217,-2.13162821e-14 45.014355,106.666667 38.4010217,174.506667 C15.2012632,183.311569 -0.101643453,205.585799 0.000508304259,230.4 L0.000508304259,260.266667 C0.000508304259,293.256475 26.7445463,320 59.734355,320 C92.7241638,320 119.467688,293.256475 119.467688,260.266667 L119.467688,230.4 C119.360431,206.121456 104.619564,184.304973 82.134355,175.146667 C86.4010217,135.893333 107.307688,42.6666667 209.067688,42.6666667 C310.827688,42.6666667 331.521022,135.893333 335.787688,175.146667 C313.347976,184.324806 298.68156,206.155851 298.667688,230.4 L298.667688,260.266667 C298.760356,283.199651 311.928618,304.070103 332.587688,314.026667 C323.627688,330.88 300.801022,353.706667 244.694355,360.533333 C233.478863,343.50282 211.780225,336.789048 192.906491,344.509658 C174.032757,352.230268 163.260418,372.226826 167.196286,392.235189 C171.132153,412.243552 188.675885,426.666667 209.067688,426.666667 C225.181549,426.577424 239.870491,417.417465 247.041022,402.986667 C338.561022,392.533333 367.787688,345.386667 376.961022,317.653333 C401.778455,309.61433 418.468885,286.351502 418.134355,260.266667 L418.134355,230.4 C418.23702,205.585799 402.934114,183.311569 379.734355,174.506667 Z M76.8010217,260.266667 C76.8010217,269.692326 69.1600148,277.333333 59.734355,277.333333 C50.3086953,277.333333 42.6676884,269.692326 42.6676884,260.266667 L42.6676884,230.4 C42.6676884,224.302667 45.9205765,218.668499 51.2010216,215.619833 C56.4814667,212.571166 62.9872434,212.571166 68.2676885,215.619833 C73.5481336,218.668499 76.8010217,224.302667 76.8010217,230.4 L76.8010217,260.266667 Z M341.334355,230.4 C341.334355,220.97434 348.975362,213.333333 358.401022,213.333333 C367.826681,213.333333 375.467688,220.97434 375.467688,230.4 L375.467688,260.266667 C375.467688,269.692326 367.826681,277.333333 358.401022,277.333333 C348.975362,277.333333 341.334355,269.692326 341.334355,260.266667 L341.334355,230.4 Z">
  
  </path>
          </g>
      </g>
  </svg>
  </div>
  
    </div>

    <div class='order_item_info_0'>
  <div class='order_item_info'>
  
  {SetItemsRef.current?.data?.map(item=>
  
  <div> 

  <div class='order_item_img'>
      <img src={item.img}/>
      <div class='order_item_info_0'>
        <div class='displa_'>

      {item.quantity}, {item.size},   <div
            class='color5 color5_'style={{backgroundColor:`${item.color}`, width:'10px', height:'10px'}}    
            >
               </div>         </div>   
  </div>
  </div>
  
  </div>
  )
}
  </div>
  <div class='order_item_info_2'>
  
      <div class='vertical-line_0'>
  
      </div>
   
   <div class='ord_info'>
    
   <div>
        Адрес доставки : {order.address}
        </div>
       <div>
        Статус заказа : {order.status}
        </div>
        <div>
        Сумма заказа : {order.final_price} Руб
      </div>
  
      <div>
        Всего товаров : {setcol_devRef.current}
      </div>
      </div>
  
  
  
  
  </div>
  
  </div>
    </div>
    </div>



  )
}

export default OrderItem