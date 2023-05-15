import React from 'react';
import HomeImg from './Images/Home.jpg'

const Home = () => {
  return (
    <div className='container text-center'>
        <div className='row align-items-start'>
            <div className='col'>
                <h3 className='display-3'>Home</h3>
                <img className='img-fluid' src={HomeImg} alt="Img" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eius earum voluptatibus odio quasi quod rem quos totam quam itaque sed ipsa veritatis aspernatur, optio officiis quaerat illo exercitationem quas et! Eligendi optio debitis eum similique modi veniam aperiam placeat, deserunt consectetur pariatur cum provident explicabo assumenda maiores sint, quae aliquid. Labore ipsa voluptatibus explicabo neque. Cum qui repellat iste ex optio debitis inventore, ipsa sapiente ab id perspiciatis nobis.</p>
            </div>
        </div>
    </div>
  )
}

export default Home;
