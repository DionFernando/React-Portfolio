// src/data/projects.ts
import carnage from "../assets/projects/carnage.png";
import booking from "../assets/projects/booking.png";
import sneakerz from "../assets/projects/sneakerz.png";
import bookclub from "../assets/projects/BookClub.png";

export type Project = {
    title: string;
    description: string;
    image: string;
    github: string;
};

export const PROJECTS: Project[] = [
    {
        title: "Carnage Management System",
        description: "Full-stack app with auth, CRUD, and real-time updates.",
        image: carnage,
        github: "https://github.com/DionFernando/CarnageManagement.git",
    },
    {
        title: "Booking.com",
        description:
            "A hotel and car booking platform with search, filters, and booking features.",
        image: booking,
        github: "https://github.com/DionFernando/Booking.com.git",
    },
    {
        title: "Sneakerz E-commerce",
        description: "E-commerce site with product pages, cart, and checkout flow.",
        image: sneakerz,
        github: "https://github.com/DionFernando/SneakerZ-EcommerceWebsite.git",
    },
    {
        title: "BookClub Library Management System",
        description:
            "A library management system with user auth, book catalog, and borrowing features.",
        image: bookclub,
        github: "https://github.com/DionFernando/BookClub-frontend.git",
    },
];
