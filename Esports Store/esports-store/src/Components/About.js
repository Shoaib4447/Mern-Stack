import React from 'react';
import './Css/About.css';
import Banner from './Banner';
import { Link} from 'react-router-dom';
// import App from '../App';
// Images
import games from '../Asserts/console.png'
import support from '../Asserts/vehicle-staring.png';
import apps from '../Asserts/rocket.png';



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
                      <div className='btn rounded-0 c-button'>READ MORE <i className=' bi-caret-right-fill'></i></div>
                      
                    </div>
                    <div className="col-sm-3 about_col_bg_img-2 py-5 px-3  m-1">
                      <p className='text-warning'>OUR DEVELOPER TEAM</p>
                      <h4 className='text-white'>CLOUX TEAM</h4>
                      <p className='text-white fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, et! cla3 sname='text-white'</p>
                      <div className='btn rounded-0 c-button'> ALL GAMES <i className=' bi-caret-right-fill'></i></div>
                    </div>
                    <div className="col-sm-3 about_col_bg_img-3 py-5 px-3  m-1">
                      <p className='text-warning'>DOCUMENTATIONS & SUPPORT</p>
                      <h4 className='text-white'>HELP CENTER</h4>
                      <p className='text-white fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, et! classname='text-white'</p>
                      <div className='btn rounded-0 c-button'>CONTACT<i className='bi-caret-right-fill'></i></div>
                    </div>
                  </div>
                </div>
              </div>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ratione ducimus repellat harum odit ipsam nihil nostrum quasi voluptatum accusantium fuga nobis blanditiis laudantium reiciendis, numquam quisquam. Ad deleniti consequuntur porro mollitia, excepturi blanditiis voluptate asperiores itaque aliquam, maxime ducimus delectus. Ab illum omnis eveniet a eum corporis dicta provident officia voluptatum saepe. Deserunt laboriosam, earum ea officiis quas molestias in tempore itaque cum enim eveniet exercitationem mollitia voluptates excepturi voluptate quo officia laudantium delectus aut quisquam! Architecto delectus enim ratione! Expedita reiciendis optio esse! Nesciunt, iure consequatur. Nobis voluptate a eveniet autem ipsum ad aliquid debitis esse laudantium alias.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita totam quaerat deserunt perspiciatis magnam culpa quis necessitatibus porro explicabo excepturi modi commodi temporibus laudantium debitis minus sint aut, non dolor quia! Adipisci deserunt molestias nostrum ullam? Dolorem esse natus iure accusantium et commodi atque quibusdam a ullam harum, necessitatibus, laudantium animi cumque voluptate. Ipsum, ipsam. Expedita consequuntur beatae itaque ipsum tenetur ratione dolore ullam ab est magni quod distinctio, voluptatum quibusdam mollitia aut sit? Ratione iusto cum esse aliquam voluptate optio deleniti magni molestiae? Totam eveniet perferendis repudiandae commodi eos alias id quos quibusdam vero, doloribus unde iusto error esse earum, vitae voluptatem ut quod voluptatibus provident molestias. Aliquid debitis corrupti excepturi fugiat expedita recusandae vero, perferendis a quam quisquam omnis voluptas provident itaque odit exercitationem, voluptatibus modi ut voluptatum incidunt neque nulla error ad. Obcaecati reiciendis facilis rem architecto sequi, ab numquam facere modi deserunt consequatur eum porro dolorum?</p>

              <div className="container">
                <div className="grid">
                  <div className="row my-5">
                    <div className="col-md-4 col-sm-12 d-flex flex-column  align-items-center p-4">
                      <img className='img-fluid mb-4'  width={90} src={games} alt="Games Icon" />
                      <h4 className='text-warning'>BEST GAMES</h4>
                      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum eius, delectus laborum dolorem pariatur illum eaque fugit neque expedita.</p>


                    </div>
                    <div className="col-md-4 col-sm-12 d-flex flex-column  align-items-center p-4">
                      <img className='img-fluid mb-4' width={90} src={support} alt="Games Icon" />
                      <h4 className='text-warning'>SUPPORT</h4>
                      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum eius, delectus laborum dolorem pariatur illum eaque fugit neque expedita.</p>
                    </div>
                    <div className="col-md-4 col-sm-12 d-flex flex-column  align-items-center p-4">
                      <img className='img-fluid mb-4' width={90} src={apps} alt="Games Icon" />
                      <h4 className='text-warning'>MOBILE APPS</h4>
                      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum eius, delectus laborum dolorem pariatur illum eaque fugit neque expedita.</p>
                    </div>
                  </div>
                </div>
              </div>

              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis nulla fugiat pariatur, rem voluptate id doloribus culpa, dolorum perferendis adipisci aut neque laborum esse at sequi exercitationem corrupti numquam eos saepe odio. Exercitationem, optio nostrum. Neque, doloribus temporibus magni voluptatum eius corrupti molestias facilis repellendus magnam sapiente impedit numquam blanditiis possimus culpa, libero excepturi? Consequatur, consectetur cumque possimus distinctio accusantium cupiditate quos illum vitae unde. Vitae, est nam, optio alias blanditiis error cupiditate sit ipsum odit placeat pariatur non impedit natus sequi. Asperiores culpa, error perspiciatis voluptate beatae reprehenderit inventore, mollitia maiores possimus iste ipsam expedita eligendi molestiae repellendus sequi esse minima tempore est quo libero dolore quidem. Maxime obcaecati dignissimos perspiciatis sed itaque excepturi libero doloremque nihil, nam incidunt accusantium aliquid distinctio alias velit dicta corrupti ab, fuga non voluptas id? Delectus beatae officia veniam odit doloribus cum repellat totam animi, voluptates hic enim ipsum quaerat consectetur alias ullam.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia neque aliquam veniam, sed sunt ipsa velit maiores repellat, nihil officia in ullam. Libero impedit maiores quam odio repellendus error dolorem quidem expedita magnam, doloribus ab blanditiis architecto commodi ipsa ad modi temporibus laborum sed! Quae sunt quam molestias amet? Iusto laboriosam sunt nemo repellat a porro hic molestiae saepe iste cum, doloremque cupiditate magnam quis quisquam libero quod nulla praesentium.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quibusdam commodi est omnis. Laboriosam, magnam quidem. Ipsum laborum iure omnis sapiente autem corporis laboriosam quas expedita dolores commodi illum cumque nostrum quisquam asperiores, qui obcaecati atque velit quo! Ea fuga ab necessitatibus voluptas sed magnam soluta aperiam veniam eum! Rerum asperiores aliquam, impedit nisi, perferendis unde dolorum velit magnam blanditiis, atque cum maxime ab voluptatum ullam porro neque fuga sequi voluptatem possimus nemo. Vero debitis repellat dolorem voluptates repellendus ut officia iste nulla. Dolores fugiat esse molestias adipisci voluptatum repellendus dicta eum est alias pariatur. Minus recusandae perferendis quisquam pariatur. Expedita dignissimos laborum, placeat accusantium quibusdam eveniet iusto iste sapiente omnis nemo recusandae quo nisi sit nesciunt sequi quod facilis aliquid tenetur accusamus eum? Iste quisquam vel rerum, ducimus facere iure similique praesentium doloribus nulla, illo laudantium ullam porro cum molestias doloremque quae quod labore maiores corrupti ad at dolorum earum quam officia? Sit, debitis exercitationem alias aut odio eligendi natus? Exercitationem aspernatur ipsam eius ex saepe, alias beatae vero labore hic magni ab enim veniam veritatis molestias commodi rerum.</p>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About;
