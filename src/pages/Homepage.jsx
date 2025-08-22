import Hero from "../layouts/Hero";
import Project from "../layouts/Project";
import Testimonial from "../layouts/Testimonial";
import Journey from "../layouts/Journey";
import Blog from "../layouts/Blog";
import Contact from "../layouts/Contact";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-color-100 dark:bg-color-900 text-color-900 dark:text-color-100">
      <main className="flex-grow">
        <Hero />
        <Project />
        <Journey />
        <Testimonial />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}