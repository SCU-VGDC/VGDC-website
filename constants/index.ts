// Interfaces:
type Link = Readonly<{
    link: string;
    icon: string;
}>;

// Constants:
export const LINKS: Record<string, Link> = {
    'discord': {
        'link': 'https://discord.gg/YsdJJZN7KK',
        'icon': '/icons/discord.svg',
    },
    'github': {
        'link': 'https://github.com/SCU-VGDC',
        'icon': '/icons/github.svg',
    },
    'linkedin': {
        'link': 'https://www.linkedin.com/company/scu-vgdc',
        'icon': '/icons/linkedin.svg',
    }
};

// Functions:
export function goToSection(sectionID: string) {
    console.log(sectionID);
    const element = document.getElementById(sectionID);

    window.scrollTo({
      top: window.scrollY + element!.getBoundingClientRect().top, 
      behavior: "smooth",
    });
};
