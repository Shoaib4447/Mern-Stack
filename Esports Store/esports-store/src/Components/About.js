import React from 'react';
import './Css/About.css';
import Banner from './Banner';
// import App from '../App';
// Images
import games from '../Asserts/vehicle-staring.png';
import support from '../Asserts/rocket.png';
import apps from '../Asserts/console.png';


const About = () => {
  return (
    <>
      <Banner/>
      <div className="container section-padding shadow my-3">
        <div className="grid">
          <div className="row">
            <div className="col-sm-12 px-5">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque inventore eos tenetur velit doloribus quia facere ipsum blanditiis fugiat optio exercitationem voluptates fuga, maiores enim? Unde earum culpa perferendis nihil corrupti distinctio quae, ab, commodi ipsam atque officia error voluptate labore ex repudiandae dolor quibusdam ipsa odit, tempora praesentium. Nulla quis accusamus eum sunt nihil fugiat alias veritatis velit quas, quae ullam dolore sequi ea enim numquam officiis explicabo voluptate voluptates modi reiciendis cupiditate iusto! Possimus, id error. Accusamus veniam, laborum reprehenderit exercitationem eaque quis molestiae eos id beatae qui, cupiditate doloribus minus dolorem ea aut corporis laudantium a reiciendis aliquid nobis maiores vero fuga dolorum repellendus. Accusantium officia molestiae perferendis atque neque, consectetur, placeat, hic voluptatum nisi libero dolores! Natus amet labore in beatae iste, quibusdam ex consectetur quidem cupiditate ut, exercitationem tempora impedit ipsum minima culpa consequuntur iusto saepe eius est alias sed molestiae obcaecati aut at. Magni obcaecati aliquid voluptas iure dignissimos blanditiis officiis maxime! Ipsum cumque reprehenderit vero minima iste expedita. Tenetur doloremque sit perferendis minus praesentium totam officia laudantium ea blanditiis alias temporibus quod dolorum quibusdam voluptatum, unde doloribus animi consequatur amet molestias repellat labore beatae aliquid itaque? Hic tempora officiis tenetur? Non, doloremque maiores!</p>

              <div className="container section-padding">
                <div className="grid">
                  <div className="row d-flex justify-content-around">
                    <div className="col-sm-3 about_col_bg_img-1 py-5 px-3  m-1">
                      <p className='text-warning'>OUR ALL GAMES</p>
                      <h4 className='text-white'>OUR GAMES</h4>
                      <p className='text-white fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, et! classname='text-white'</p>
                      <div className='btn rounded-0 c-button'>ACHIEVEMENTS <i className=' bi-caret-right-fill'></i></div>
                      
                    </div>
                    <div className="col-sm-3 about_col_bg_img-2 py-5 px-3  m-1">
                      <p className='text-warning'>OUR DEVELOPER TEAM</p>
                      <h4 className='text-white'>CLOUX TEAM</h4>
                      <p className='text-white fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, et! cla3 sname='text-white'</p>
                      <div className='btn rounded-0 c-button'>ACHIEVEMENTS <i className=' bi-caret-right-fill'></i></div>
                    </div>
                    <div className="col-sm-3 about_col_bg_img-3 py-5 px-3  m-1">
                      <p className='text-warning'>DOCUMENTATIONS & SUPPORT</p>
                      <h4 className='text-white'>HELP CENTER</h4>
                      <p className='text-white fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, et! classname='text-white'</p>
                      <div className='btn rounded-0 c-button'>ACHIEVEMENTS <i className=' bi-caret-right-fill'></i></div>
                      
                    </div>
                  </div>
                </div>
              </div>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ratione ducimus repellat harum odit ipsam nihil nostrum quasi voluptatum accusantium fuga nobis blanditiis laudantium reiciendis, numquam quisquam. Ad deleniti consequuntur porro mollitia, excepturi blanditiis voluptate asperiores itaque aliquam, maxime ducimus delectus. Ab illum omnis eveniet a eum corporis dicta provident officia voluptatum saepe. Deserunt laboriosam, earum ea officiis quas molestias in tempore itaque cum enim eveniet exercitationem mollitia voluptates excepturi voluptate quo officia laudantium delectus aut quisquam! Architecto delectus enim ratione! Expedita reiciendis optio esse! Nesciunt, iure consequatur. Nobis voluptate a eveniet autem ipsum ad aliquid debitis esse laudantium alias.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita totam quaerat deserunt perspiciatis magnam culpa quis necessitatibus porro explicabo excepturi modi commodi temporibus laudantium debitis minus sint aut, non dolor quia! Adipisci deserunt molestias nostrum ullam? Dolorem esse natus iure accusantium et commodi atque quibusdam a ullam harum, necessitatibus, laudantium animi cumque voluptate. Ipsum, ipsam. Expedita consequuntur beatae itaque ipsum tenetur ratione dolore ullam ab est magni quod distinctio, voluptatum quibusdam mollitia aut sit? Ratione iusto cum esse aliquam voluptate optio deleniti magni molestiae? Totam eveniet perferendis repudiandae commodi eos alias id quos quibusdam vero, doloribus unde iusto error esse earum, vitae voluptatem ut quod voluptatibus provident molestias. Aliquid debitis corrupti excepturi fugiat expedita recusandae vero, perferendis a quam quisquam omnis voluptas provident itaque odit exercitationem, voluptatibus modi ut voluptatum incidunt neque nulla error ad. Obcaecati reiciendis facilis rem architecto sequi, ab numquam facere modi deserunt consequatur eum porro dolorum?</p>

              <div className="container">
                <div className="grid">
                  <div className="row">
                    <div className="col-md-4 col-sm-12 ">
                      <img className='img-fluid' src={games} alt="Games Icon" />
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <img className='img-fluid' src={support} alt="Games Icon" />
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <img className='img-fluid' src={apps} alt="Games Icon" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About;
