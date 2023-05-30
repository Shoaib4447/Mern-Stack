import { React, useEffect, useState } from 'react';
import MyModal from './MyModal';
// React Portal or Modal

const About = () => {
  

  return (
      <div>
        <div className='text-center'>
          <MyModal title='About' content='About Modal Body' button = 'Close About Modal'/> 
          <h1>About</h1>
          <p>React Portal is a feature in React that allows you to render components into a different part of the DOM (Document Object Model) hierarchy that is outside the parent component's normal rendering flow. It enables you to render components outside their usual position in the component tree and attach them to a different DOM element, such as the document body or a specific container.</p>
        </div>
    </div>
  )
}

export default About;
