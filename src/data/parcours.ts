export interface ParcoursItem {
    year: string;
    title: string;
    subtitle?: string;
    place: string;
    desc: string;
    color: string;
    icon: string;
    skills?: string[];
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
            skills: []
        },
        {
            year: 'Sept. 2024 - Juin 2025',
            title: 'Exchange Student - Software & Computer Engineering',
            subtitle: 'Digital Media Major',
            place: 'Ajou University (Corée du Sud)',
            desc: 'Semestre d\'échange international axé sur les technologies immersives et le développement graphique.',
            color: 'neon-blue',
            icon: 'i-ri-plane-line',
            skills: ['Unity 3D', 'AR/VR', 'Godot', 'WebGL', 'Processing', 'Korean', 'English']
        },
        {
            year: '2020 - 2025',
            title: 'Licence Informatique',
            subtitle: 'Parcours Ingénierie Systèmes et Logiciels',
            place: 'Université Marie et Louis Pasteur',
            desc: 'Formation fondamentale en développement logiciel, algorithmique et gestion de bases de données.',
            color: 'sunset-purple',
            icon: 'i-ri-book-open-line',
            skills: ['C', 'Java', 'Python', 'HTML/CSS', 'SQL', 'Databases']
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
            skills: []
        },
        {
            year: 'Sept. 2024 - June 2025',
            title: 'Exchange Student - Software & Computer Engineering',
            subtitle: 'Digital Media Major',
            place: 'Ajou University (South Korea)',
            desc: 'International exchange semester focused on immersive technologies and graphic development.',
            color: 'neon-blue',
            icon: 'i-ri-plane-line',
            skills: ['Unity 3D', 'AR/VR', 'Godot', 'WebGL', 'Processing', 'Korean', 'English']
        },
        {
            year: '2020 - 2025',
            title: 'Bachelor in Computer Science',
            subtitle: 'Systems and Software Engineering Track',
            place: 'Marie and Louis Pasteur University',
            desc: 'Fundamental training in software development, algorithmics, and database management.',
            color: 'sunset-purple',
            icon: 'i-ri-book-open-line',
            skills: ['C', 'Java', 'Python', 'HTML/CSS', 'SQL', 'Databases']
        }
    ]
}
