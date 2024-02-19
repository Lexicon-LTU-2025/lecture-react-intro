import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import "./App.css";

// PascalCase is used when naming components and that is because then React understands that it is a component.
function App() {
  return (
    // This empty element is called a fragment and it's used so you can mulitple elements on the same component level in you JSX.
    <>
      <Navbar />
      <h1>This is my first App!</h1>
      <div>
        <p>This is the content of my app</p>
        <section>This is a section</section>
      </div>
      <Footer />
    </>
  );
}

export default App;
