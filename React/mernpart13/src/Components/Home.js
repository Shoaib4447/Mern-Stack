import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <div className='text-center'>
      <h1>Home</h1>
      <p> <Link to='/about'> Lorem ipsum dolor </Link> sit amet consectetur, adipisicing elit. Pariatur ab voluptatem commodi dolor odit distinctio tenetur, ex labore modi perspiciatis facilis, impedit est iusto veniam similique ipsam quia atque reprehenderit, itaque eius incidunt corporis? Cum vel ipsum, quam voluptatum nostrum dignissimos, incidunt, illo cumque doloribus facilis quod quasi? Magnam, laboriosam!</p>
    </div>
  )
}

export default Home;
