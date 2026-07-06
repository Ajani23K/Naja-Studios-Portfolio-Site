import { RenovKitchen } from "@/assets"

export const NavMenus = [
    {
        label : "Home",
        url : "/",
        key: "home"
    },
    {
        label : "Works",
        url : "/?section=works",
        key: "works"
    },
    {
        label : "About",
        url : "/?section=about",
        key: "about"
    },
    {
        label : "Services",
        url : "/?section=services",
        key: "services"
    },
]
    export const ProjectsData = [
        {
            id: 1,
            title: "North Philadelphia Renovation",
            description: 
            "Renovating the living, dining, and kitchen space of a North Philadelphia home",
            renovated: ["Kitchen", "Living Room", "Dining Room"],
            image: RenovKitchen,
        },
    ]