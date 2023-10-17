import React from 'react';
import { Link } from 'react-router-dom';
import './Css/Home.css';
import CTA from './CTA';
import social from './Social';

// Images
import heroimg1 from '../Asserts/Heroimg1.jpg';
import heroimg2 from '../Asserts/Heroimg2.jpg';
import aboutTeam from '../Asserts/esport-about-team.jpg';
import teamvictory from '../Asserts/esport-victories.jpg';
import Social from './Social';
import tailercoloum from '../Asserts/trailercoloumn.jpg'
import sponsorcoloumn from '../Asserts/sponsorcoloumn.jpg'


const Home = () => {

  return (
    <>
        {/* Hero Section */}
        <div id='carouselExampleCaptions' className='carousel slide carousel-fade'>
        <div className='carousel-inner'>
            <div className='carousel-item active c-item d-flex flex-column align-items-start'>
            <img src={heroimg1} className='d-block w-100 img-fluid c-img' alt='Heroimg 1 not working' />
            <div className='carousel-caption top-0 mt-4 d-none d-md-block '>
                <h1 className='  c-label mt-5 text-uppercase'>We are the <br/><span >champions</span></h1>
                <p className=' lead mt-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati impedit tempora voluptatum sequi illum sunt saepe optio. Voluptate adipisci dolores dolore, nulla suscipit, temporibus voluptatum voluptatibus nesciunt iusto quam mollitia!</p>
                <div className='btn rounded-0 c-button'>ACHIEVEMENTS <i className=' bi-caret-right-fill'></i></div>
            </div>
            </div>
            <div className='carousel-item active c-item'>
            <img src={heroimg2} className='d-block w-100 img-fluid c-img' alt='Heroimg 1 not working' />
            <div className='carousel-caption top-0 mt-4 d-none d-md-block'>
                <h1 className='  c-label mt-5 text-uppercase'>CLOUX <br /> <span >ESPORTS TEAM</span></h1>
                <p className=' lead mt-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati impedit tempora voluptatum sequi illum sunt saepe optio. Voluptate adipisci dolores dolore, nulla suscipit, temporibus voluptatum voluptatibus nesciunt iusto quam mollitia!</p>
                <div className='btn rounded-0 c-button'>ACHIEVEMENTS <i className=' bi-caret-right-fill'></i></div>
            </div>
            </div>

        </div>
        <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='prev'>
            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
        </button>
        <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='next'>
            <span className='carousel-control-next-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
        </button>
    </div>

    {/* About Section */}
    <div className='container section-padding'>
        <div className='grid'>
            <div className='row'>
                <div className='col-md-5'>
                    <img className='img-fluid' src={aboutTeam} alt='About Section Image not Working' />
                </div>
                <div className='col-md-7 col-padding col-mb-p-none d-flex flex-column align-items-start justify-content-center'>
                    <h3 className='About-label'>ABOUT CLOUX <br/><span className='text-warning mrgn-top'>ESPORT TEAM</span></h3>
                    <p className='mt-top'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex lorem.</p>
                    <Link to='/about'>
                        <div className='btn rounded-0 c-button '>READ MORE</div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    {/* Victory Section */}
    <section className='section-padding victory-background z-1'>
        <div className='container  '>
            <div className='grid'>
                <div className='row'>
                <div className='col-md-7 col-padding col-mb-p-none d-flex flex-column align-items-start justify-content-center pe-5'>
                        <h3 className='About-label text-white'>VICTORIES<br/><span className='text-warning mrgn-top'>OF
                        CLOUX</span>
                        </h3>
                        <p className='mt-top text-white'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex lorem.</p>
                        <div className='btn rounded-0 c-button '>ALL ACHIVEMENTS <i className=' bi-caret-right-fill'></i></div>
                    </div>
                    <div className='col-md-5 '>
                        <img className='img-fluid' src={teamvictory} alt='About Section Image not Working' />
                    </div>
                <div className='row mt-5'>
                    <div className='col-md-4'>
                        <span className='text-warning victory-numbers-1'> 1ST</span>
                        <p className='text-white victory-desc-1'>Lorem ipsum dolor sit amet.</p>
                        <h3 className='text-warning victory-heading-1'>GLORIA XTRA 2017 LEAGUE</h3>
                    </div>
                    <div className='col-md-4'>
                        <span className='text-warning victory-numbers-2'>2ND</span>
                        <p className='text-white victory-desc-2'>Lorem ipsum dolor sit amet.</p>
                        <h3 className='text-warning victory-heading-2'>GLORIA XTRA 2017 LEAGUE</h3>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
    {/* Our Team Section */}
    <div className='container section-padding'>
        <div className='grid'>
            <div className='row'>
                <div className='col-md-5 '>
                    <img className='img-fluid shadow' src={aboutTeam} alt='About Section Image not Working' />
                </div>
                <div className='col-md-7 col-padding col-mb-p-none d-flex flex-column align-items-start justify-content-center'>
                    <h3 className='About-label'>OUR TEAMS
                        <br/><span className='text-warning mrgn-top'>& PLAYERS</span>
                    </h3>
                    <p className='mt-top'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex lorem.</p>
                </div>
            </div>
        </div>
    </div>
    
    {/* All Videos and Trailers Section */}
    <section className='section-padding trailer-background z-1'>
        <div className='container  '>
            <div className='grid'>
                <div className='row'>
                <div className='col-md-5 '>
                        <img className='img-fluid shadow' src={tailercoloum} alt='tailercoloum Image not Working' />
                    </div>
                <div className='col-md-7 col-padding col-mb-p-none d-flex flex-column align-items-start justify-content-center'>
                        <h3 className='About-label text-white'>ALL VIDEOS <br/><span className='text-warning mrgn-top'>& TRAILERS</span></h3>
                        <p className='mt-top text-white'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex lorem.</p>
                        <div className='btn rounded-0 c-button '>ALL VIDEOS</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    {/* Become a sponsor */}
    <div className='container section-padding'>
        <div className='grid'>
            <div className='row'>
                <div className='col-md-5'>
                    <img className='img-fluid shadow' src={sponsorcoloumn} alt='sponsorcoloumn Image not Working' />
                </div>
                <div className='col-md-7 col-padding col-mb-p-none d-flex flex-column align-items-start justify-content-center'>
                    <h3 className='About-label'>BECOME A <br/><span className='text-warning mrgn-top'>SPONSOR</span></h3>
                    <p className='mt-top'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex lorem.</p>
                    <div className="d-flex">
                        <Link to='/'><div className='btn rounded-0 c-button '>READ MORE</div></Link>
                        <Link to='/contact'><div className='btn rounded-0 c-button ms-4 lead'>CONTACT</div></Link>
                        </div>
                </div>
            </div>
        </div>
    </div>

    {/* CTA */}
    <CTA/>

    {/* Social Section */}
    <Social/>

    </>
  )
}

export default Home
