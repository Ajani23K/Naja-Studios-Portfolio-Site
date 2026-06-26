import React from 'react'
import { Button } from "@/components/ui/button";
import { NavMenus } from '@/utlis/helper';
import { cn } from "@/lib/utils";

const Header = () => {


    const [activeSection, setActiveSection] = React.useState("home");

    // read URL on load + back/forward navigation

    React.useEffect(() => {
      const syncFromUrl = () => {
        const params = new URLSearchParams(window.location.search);
        const section = params.get("section");
        setActiveSection(section || "home");
      };
      syncFromUrl();

      window.addEventListener("popstate", syncFromUrl);

      return () => window.removeEventListener("popstate", syncFromUrl);
    }, [])
    const handleNavigationalLinkClick = (menu) => {
      const url = new URL(window.location);
      if(menu.key === "home") {
        url.search = "";
        window.history.pushState({}, "", url);

        window.scrollTo({top: 0, behavior: "smooth"});
        setActiveSection("home")
        return;
      }
      //other sections

      url.searchParams.set("section", menu.key);
      window.history.pushState({}, "", url);

      document.getElementById(menu.key)?.scrollIntoView({behavior: "smooth", block: "start"});

      setActiveSection(menu.key);
    };

  return (
    <header className="flex items-center justify-between w-full container mx-auto p-4 md:p-8 fixed top-0 left-0 z-50">
        <h2 className="text-2xl md:text-3xl italic font-serif font-normal text-neutral-700">AnnaMarie King.</h2>
        <nav>
            <ul className ="flex items-center gap-6">
                {NavMenus.map((menu, index) => {
                  const isActive = activeSection === menu.key;

                  return (
                    <li key={menu.key}>
                    <a 
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigationalLinkClick(menu);
                      }}
                      className={cn(
                      "text-neutral-600 hover:text-neutral-800 hover:font-semibold transition-all ease-in-out duration-75 p-2.5", 
                      isActive && "text-neutral-800 font-semibold",
                    )}
                     href ={menu.url}>{menu.label}</a>
                  </li>
                  )
              })}
            </ul>
        </nav>
        <a href='/#contact'>
          <Button size="sm" className={"cursor-pointer"} > Contact </Button>
        </a>
    </header>
  )
}

export default Header;