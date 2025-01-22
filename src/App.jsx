import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Social from "./components/Social";
import Projects from "./components/Projects";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Social />
        </>
      ),
    },
  ]);
  return (
    <div className="relative bg-black-100 flex items-center justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
