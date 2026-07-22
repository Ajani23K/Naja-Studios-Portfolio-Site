import { RenovKitchen } from "@/assets"

    export const NavMenus = [
        {
            label : "Home",
            url : "/",
            key: "home",
            type: "section"
        },
        {
            label : "Works",
            url : "/works",
            key: "works",
            type: "page"
        },
        {
            label : "About",
            url : "/?section=about",
            key: "about",
            type: "section"
        },
        {
            label : "Services",
            url : "/?section=services",
            key: "services",
            type: "section"
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

   export const ServicesData = [
        {
            id: 1,
            title: "Interior Design & Decorating",
            description:
            "Personalized interior design, décor selection, furnishings, color planning, and cohesive styling tailored to your lifestyle.",
        },
        {
            id: 2,
            title: "Kitchen & Bathroom Renovations",
            description:
            "Functional and stylish kitchen remodels and bathroom upgrades designed to improve comfort, efficiency, and value.",
        },
        {
            id: 3,
            title: "Room Transformations",
            description:
            "Complete redesigns for living rooms, bedrooms, entryways, home offices, and other spaces to create beautiful, functional environments.",
        },
        {
            id: 4,
            title: "Organization & Storage Solutions",
            description:
            "Custom closet organization and space-planning solutions that maximize storage while maintaining a clean, elegant appearance.",
        },
        {
            id: 5,
            title: "Theme & Lifestyle Design",
            description:
            "Mood boards, personality-inspired interiors, and themed room designs that reflect your unique style and vision.",
        },
        {
            id: 6,
            title: "Acoustic Solutions",
            description:
            "Apartment acoustic treatment and soundproofing to create quieter, more comfortable living spaces.",
        },
    ];