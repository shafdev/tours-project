import React,{ useState }  from "react";



const Tour =(props)=>{
    
    const [string,setString] = useState(false)
    const {id,name,info,image,price} = props.firstImage
    const removedItem = props.removeItem
    
    return(
      <article className="tour">

        <img src={image}/>

        <footer>
  
        <div className="title_and_price">
          <h2>{name}</h2>
          <h4>{price}</h4>
        </div>
        
        <p>{string ?  info : `${info.substring(0, 200)}...`}
  
        <button className='less-more' onClick={()=>setString(!string)}>
            {string ? 'Less':'More'}
        </button>
        </p>
        <button onClick={()=>removedItem(id)}>Remove This</button>
        </footer>
      </article>
    )
  }
  

  export default Tour;