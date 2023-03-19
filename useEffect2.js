import React, { useState, useEffect } from "react";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  //remove the handle resize event listener, first return will be called, its called cleanup
  //cleanup the event listener and unsubscribe, anytime the event listerer unmounts
  return() => {
    window.removeEventListener('resize', handleResize);
    }
  },[])
  
  return (
    <>
      <div>{windowWidth}</div>
    </>
  );
}

//https://blog.webdevsimplified.com/2020-04/use-effect/
