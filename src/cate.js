export default
function Cate(){
    return(  
 <div class="items">
 <div class="row container">
     <div class="col-md-3">
         <div class="item1">
             <img src={props.image} alt="something"/>
             <div class="text">{props.text}</div>
             <span><i class="fa-regular fa-star"></i></span>
             <span>{props.rating}</span>
             <div class="price"> $ {props.price}</div>
         </div>
     </div>
 </div>
 </div>
    )
}