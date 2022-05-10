import React,{ useState ,useEffect}  from "react";
import Tour from "./Tour";
import data from "./data";
// const firstImage = data[0]
// const imgaeName = data[0].name
// const persons = [
//   {firstname : "Malcom", lastname: "Reynolds"},
//   {firstname : "Kaylee", lastname: "Frye"},
//   {firstname : "Jayne", lastname: "Cobb"}
// ];

// function logger(item){
//   console.log(item.firstname)
//   console.log(item.lastname)
// }
// persons.map(logger)

// console.log(firstImage)
// const text = 'hello text 1'
// const result = text.substring(0,4)
// console.log(result)


// const handleClick =()=>{
//   console.log('clicked')
// }




function App() {
  const [loading,setLoading] = useState(true)
  const [tourdata,setTourData] = useState([])
  console.log(tourdata.length==0)
  // if(tourdata.length!=0){
  //   setLoading(false)
  // }
  const removeItem = (id)=> {
    const removed = tourdata.filter((item)=>{
                      return item.id !== id
                     })
    // console.log(id)
    setTourData(removed)
    }
    
  const fetchData = async ()=>{
    const url = 'https://course-api.com/react-tours-project'

    try{
      const response = await fetch(url)
      const resdata = await response.json()
      setLoading(false)
      setTourData(resdata)
      console.log(resdata)
    }catch(error){
      setLoading(true)
      console.log(error)
    }
    
  }

useEffect(()=>{
  fetchData()
}
,[])


  return (
    <>
    {/* ternary operator : if the page is loading then render loading else render element */}
    {loading ? 
    <div>loading</div>:

    <div >
      {tourdata.map((item)=>{
        return <Tour 
        
        key={item.id} 
        firstImage= {item} 
        removeItem={removeItem}
        />
      }
      )}
    </div>
    }
    </>

    
  );
}

export default App;
