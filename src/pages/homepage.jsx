
import React from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import Home from "@/containers/home";
import About from "@/containers/about";
import Services from "@/containers/services"
import Contact from "@/containers/contact"
import { useLocation } from "react-router-dom";

const HomePage = () => {
 const location = useLocation();

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");

    if (section) {
      
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [location]);

  return <div className="w-screen min-h-screen flex-1">
    {/*header*/}
    <Header />
  
    {/*home section*/}
    <Home />
    {/*about*/}
    <section id="about">
        <About />
    </section>
    {/*services*/}
    <section id="services">
        <Services />
    </section>
    

    {/*contact*/}
    <section id="contact">
        <Contact/>
    </section>
    
    {/*footer*/}
  </div>
};

export default HomePage;