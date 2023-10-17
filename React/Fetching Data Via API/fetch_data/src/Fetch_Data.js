import React,{useState, useEffect} from 'react';
import './styles.css'
const Fetch_Data = () => {
    const [albums, setAblums] = useState([]);
    // Colors
    const colors = ['red', 'blue', 'green'];

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then((response)=>response.json())
        .then((data)=>setAblums(data))
        .catch((error)=>console.error('Error fetching data',error));
    },[])

  return (
    <div>
      <h1>ABLUMS TITLES ARE LISTED BELOW</h1>
      <ol>
        {albums.map((album,index)=>(
            <li 
            key={album.id}
            style={{ color: colors[index % colors.length],margin:40 }}
            >
            {console.log(index)}
            {album.title} ---- {album.userId}</li>
            
        ))}
      </ol>
    </div>
  )
}

export default Fetch_Data;
