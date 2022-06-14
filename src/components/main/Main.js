import "./main-css.css";
import "./testimonials/Testimonial";
import "./testimonials/testimonial-css.css";
import RevealTestimony from "./testimonials/ShowTestimonials";
import HeroSplash from "./Hero";

function Main() {
  return (
    <div>
      <HeroSplash />
      <RevealTestimony />
    </div>
  );
}

export default Main;
