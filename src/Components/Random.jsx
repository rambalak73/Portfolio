import React from 'react';

function ScrollingText() {
  return (
    <marquee 
      behavior="scroll" 
      direction="left" 
      scrollamount="5" 
      onMouseOver={(e) => e.target.stop()} 
      onMouseOut={(e) => e.target.start()}
    >
      Hover over this text or image to pause the scrolling!
      {/* <img src="https://via.placeholder.com/50" alt="Example Image" /> */}
    </marquee>
  );
}

export default ScrollingText;
