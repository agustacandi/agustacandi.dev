interface Project {
    name: string;
    image: string;
    description: string;
    type: 'solo' | 'team' | 'school';
}

export const projects: Array<Project> = [
    {
        name: "Twibbon Generator",
        image: "/projects/twibbon-generator.png",
        description: "A web app to generate a twibbon for your profile picture.",
        type: "solo"
    },
    {
        name: "Tajwid Tutor",
        image: "https://source.unsplash.com/805x405/?technology",
        description: "A mobile app to learn tajwid.",
        type: "solo"
    },
    {
        name: "PT. Elkin Jaya Abadi Dashboard",
        image: "https://source.unsplash.com/807x407/?technology",
        description: "AC maintenance dashboard for PT. Elkin Jaya Abadi.",
        type: "solo"
    },
    {
        name: "Rentalkeun",
        image: "https://source.unsplash.com/808x408/?technology",
        description: "A desktop app to manage rental car.",
        type: "school"
    },
    {
        name: "RePOSin",
        image: "https://source.unsplash.com/809x409/?technology",
        description: "A desktop app to manage point of sale.",
        type: "school"
    },
    {
        name: "Epasys (Electronic Parking System)",
        image: "https://source.unsplash.com/810x410/?technology",
        description: "A mobile app to manage parking system with QR integrated.",
        type: "school"
    },
    {
        name: "JTI Skripsi",
        image: "https://source.unsplash.com/810x410/?technology",
        description: "A web app to manage thesis in JTI Politeknik Negeri Jember.",
        type: "school"
    },
    {
        name: "Doorlock",
        image: "https://source.unsplash.com/811x411/?technology",
        description: "Doorlock System with Face Recognition using CNN Algorithm",
        type: "school"
    },
    {
        name: "Enterprise Risk Management System Bank Syariah Indonesia",
        image: "/projects/erms-bsi.png",
        description: "A web app to manage risk in Bank Syariah Indonesia.",
        type: "team"
    },
    {
        name: "PEMILU.AI Dashboard",
        image: "https://source.unsplash.com/800x400/?technology",
        description: "A dashboard to monitor and manage user data in PEMILU.AI.",
        type: "team"
    },
    {
        name: "PEMILU.AI Mobile App",
        image: "https://source.unsplash.com/801x401/?technology",
        description: "A mobile app to monitor and manage user data in PEMILU.AI.",
        type: "team"
    },
    {
        name: "Paradoc Dashboard",
        image: "https://source.unsplash.com/802x402/?technology",
        description: "A dashboard to monitor and manage user data in Paradoc.",
        type: "team"
    },
    {
        name: "Edu Finance Pro",
        image: "https://source.unsplash.com/803x403/?technology",
        description: "A web app to manage finance in education.",
        type: "team"
    },
    {
        name: "PDAM Go Purabaya",
        image: "https://source.unsplash.com/804x404/?technology",
        description: "A mobile app to manage water usage in PDAM Purabaya Madium.",
        type: "team"
    }
];