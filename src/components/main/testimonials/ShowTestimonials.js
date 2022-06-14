import Testimonial from "./Testimonial";
import { testimonialData } from "../../../testimonialData";
import { useState } from "react";

// creates a array that holds the Testimonial data stored in testimonialData.js, mapped to data.  Then passes the data through the testimonial elements.
let testimonialComponents = testimonialData.map((data) => {
  return <Testimonial data={data} />;
});

function RevealTestimony(props) {
  const [showTestimony, setShowTestimony] = useState(false);
  function handleRevealTestimony() {
    setShowTestimony(!showTestimony);
  }

  return (
    <>
      <button onClick={handleRevealTestimony}>Reveal Testimonials</button>
      <div className="cardContainer">
        {/* calls testimonialComponents if true else it shows empty  */}
        {showTestimony ? testimonialComponents : <></>}
      </div>
    </>
  );
}

export default RevealTestimony;
