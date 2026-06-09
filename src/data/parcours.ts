export interface ParcoursItem {
    year: string;
    title: string;
    subtitle?: string;
    place: string;
    desc: string;
    color: string;
    icon: string;
    skills?: string[];
    links?: { name: string; url: string; icon: string }[];
}

export const parcours = {
    fr: [
        {
            year: 'Sept. 2025',
            title: 'Master Audiovisuel, Médias Interactifs Numériques et Jeux',
            subtitle: 'Conception de jeux et médias interactifs',
            place: 'Institut National Universitaire Champollion',
            desc: 'Spécialisation à venir en conception de jeux vidéo et médias interactifs avancés.',
            color: 'neon-pink',
            icon: 'i-ri-gamepad-line',
            skills: [],
            links: [
                { name: "INUC", url: "https://www.univ-jfc.fr/", icon: "i-ri-building-line" },
                { name: "Master AMINJ", url: "https://www.univ-jfc.fr/masters/audiovisuel-medias-interactifs-numeriques-jeu", icon: "i-ri-graduation-cap-line" }
            ]
        },
        {
            year: 'Sept. 2024 - Juin 2025',
            title: 'Exchange Student - Software & Computer Engineering',
            subtitle: 'Digital Media Major',
            place: 'Ajou University (Corée du Sud)',
            desc: 'Semestre d\'échange international axé sur les technologies immersives et le développement graphique.',
            color: 'neon-blue',
            icon: 'i-ri-plane-line',
            skills: ['Unity 3D', 'AR/VR', 'Godot', 'WebGL', 'Processing', 'Korean', 'English'],
            links: [
                { name: "Ajou University", url: "https://www.ajou.ac.kr/en/index.do#2759", icon: "i-ri-building-line" },
                { name: "College of Computing", url: "https://www.ajou.ac.kr/en/admission/college-of-computing-and-informatics.do", icon: "i-ri-graduation-cap-line" }
            ]
        },
        {
            year: '2020 - 2025',
            title: 'Licence Informatique',
            subtitle: 'Parcours Ingénierie Systèmes et Logiciels',
            place: 'Université Marie et Louis Pasteur',
            desc: 'Formation fondamentale en développement logiciel, algorithmique et gestion de bases de données.',
            color: 'sunset-purple',
            icon: 'i-ri-book-open-line',
            skills: ['C', 'Java', 'Python', 'HTML/CSS', 'SQL', 'Databases'],
            links: [
                { name: "UFR ST", url: "https://www.umlp.fr/composantes/ufr-st", icon: "i-ri-building-line" },
                { name: "Licence Informatique", url: "https://formations.univ-fcomte.fr/fr/index/formations/feuilleter-le-catalogue/licence-lmd-XA/licence-informatique-M4MKYC5V.html", icon: "i-ri-graduation-cap-line" }
            ]
        }
    ],
    en: [
        {
            year: 'Sept. 2025',
            title: 'Master Audio-visual, Interactive Digital Media and Games',
            subtitle: 'Game Design & Interactive Media',
            place: 'Institut National Universitaire Champollion',
            desc: 'Upcoming specialization in video game design and advanced interactive media.',
            color: 'neon-pink',
            icon: 'i-ri-gamepad-line',
            skills: [],
            links: [
                { name: "INUC", url: "https://www.univ-jfc.fr/", icon: "i-ri-building-line" },
                { name: "Master AMINJ", url: "https://www.univ-jfc.fr/masters/audiovisuel-medias-interactifs-numeriques-jeu", icon: "i-ri-graduation-cap-line" }
            ]
        },
        {
            year: 'Sept. 2024 - June 2025',
            title: 'Exchange Student - Software & Computer Engineering',
            subtitle: 'Digital Media Major',
            place: 'Ajou University (South Korea)',
            desc: 'International exchange semester focused on immersive technologies and graphic development.',
            color: 'neon-blue',
            icon: 'i-ri-plane-line',
            skills: ['Unity 3D', 'AR/VR', 'Godot', 'WebGL', 'Processing', 'Korean', 'English'],
            links: [
                { name: "Ajou University", url: "https://www.ajou.ac.kr/en/index.do#2759", icon: "i-ri-building-line" },
                { name: "College of Computing", url: "https://www.ajou.ac.kr/en/admission/college-of-computing-and-informatics.do", icon: "i-ri-graduation-cap-line" }
            ]
        },
        {
            year: '2020 - 2025',
            title: 'Bachelor in Computer Science',
            subtitle: 'Systems and Software Engineering Track',
            place: 'Marie and Louis Pasteur University',
            desc: 'Fundamental training in software development, algorithmics, and database management.',
            color: 'sunset-purple',
            icon: 'i-ri-book-open-line',
            skills: ['C', 'Java', 'Python', 'HTML/CSS', 'SQL', 'Databases'],
            links: [
                { name: "UFR ST", url: "https://www.umlp.fr/composantes/ufr-st", icon: "i-ri-building-line" },
                { name: "Bachelor in CS", url: "https://formations.univ-fcomte.fr/fr/index/formations/feuilleter-le-catalogue/licence-lmd-XA/licence-informatique-M4MKYC5V.html", icon: "i-ri-graduation-cap-line" }
            ]
        }
    ]
}
