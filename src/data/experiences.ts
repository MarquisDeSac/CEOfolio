export interface ExperienceItem {
    company: string;
    role: string;
    type: string;
    date: string;
    duration: string;
    location: string;
    desc: string[];
    skills: string[];
    color: string;
    icon: string;
}

export const experiences = {
    fr: [
        {
            company: 'VHEX Lab Co., Ltd.',
            role: 'Développeur Unity 3D WebGL',
            type: 'Stage',
            date: 'Mars 2025 - Juin 2025',
            duration: '4 mois',
            location: 'Suwon-si, Gyeonggi-do, Corée du Sud',
            desc: [
                'Système de diagnostic web mesurant les styles de communication des utilisateurs via des vidéos courtes basées sur des scénarios.',
                'Les utilisateurs peuvent choisir une voix (clonage vocal ou TTS) ou enregistrer leur propre réponse via microphone.',
                'Le système collecte les données vocales pour l\'entraînement de modèles IA, utilisant à la fois texte et vidéo.',
                'Les données collectées entraînent et intègrent un modèle IA qui génère un rapport détaillé du style de communication.',
                'Les utilisateurs peuvent choisir d\'utiliser leur propre voix via IA pour écouter leur réponse.'
            ],
            skills: ['Unity 3D', 'Unity WebGL', 'Unity VR', 'C#', 'Intelligence Artificielle (IA)', 'Réalité Virtuelle (RV)'],
            color: 'neon-blue',
            icon: 'i-ri-code-s-slash-line'
        },
        {
            company: 'VHEX Lab / Seoul, COEX',
            role: 'Présentateur Projet - World IT Show 2025',
            type: 'Projet',
            date: 'Avril 2025',
            duration: '1 mois',
            location: 'Séoul, Corée du Sud',
            desc: [
                'Gestion d\'un stand de présentation présentant des projets de simulation VR développés par le VHEX Lab au COEX.',
                'Démonstrations claires et techniquement détaillées, bien reçues par les visiteurs et félicitées par les superviseurs.',
                'Représentation de l\'équipe du labo dans un environnement international et interculturel.',
                'Renforcement des compétences en prise de parole, communication technique et interaction multilingue (Anglais, Coréen).'
            ],
            skills: ['Public Speaking', 'Communication Technique', 'Communication Interculturelle', 'VR Demonstration', 'Audience Engagement', 'Booth Management'],
            color: 'neon-pink',
            icon: 'i-ri-presentation-line'
        }
    ],
    en: [
        {
            company: 'VHEX Lab Co., Ltd.',
            role: 'Unity 3D WebGL Developer',
            type: 'Internship',
            date: 'March 2025 - June 2025',
            duration: '4 months',
            location: 'Suwon-si, Gyeonggi-do, South Korea',
            desc: [
                'Web-based diagnostic system that measures users’ communication styles through short-form, scenario-based videos.',
                'Users can either choose one of the provided voice options (using voice cloning or TTS) or record their own response via a microphone.',
                'The system collects voice data to be used in AI model training, utilizing both text and video inputs.',
                'The collected data is used to train and embed an AI model, which in turn generates a detailed communication style report.',
                'Users can choose to use their own voice via AI to listen to their chosen response.'
            ],
            skills: ['Unity 3D', 'Unity WebGL', 'Unity VR', 'C#', 'Artificial Intelligence (AI)', 'Virtual Reality (VR)'],
            color: 'neon-blue',
            icon: 'i-ri-code-s-slash-line'
        },
        {
            company: 'VHEX Lab / Seoul, COEX',
            role: 'Project Presenter - World IT Show 2025',
            type: 'Project',
            date: 'April 2025',
            duration: '1 month',
            location: 'Seoul, South Korea',
            desc: [
                'Managed a presentation booth showcasing virtual reality simulation projects developed by the VHEX Lab at the COEX Convention & Exhibition Center.',
                'Delivered clear and technically detailed demonstrations, well received by attendees and later praised by the lab supervisors.',
                'Represented the lab team in an international and intercultural environment.',
                'Strengthened public speaking, technical communication, and multilingual (English, Korean) interaction skills.'
            ],
            skills: ['Public Speaking', 'Technical Communication', 'Intercultural Communication', 'VR Demonstration', 'Audience Engagement', 'Booth Management'],
            color: 'neon-pink',
            icon: 'i-ri-presentation-line'
        }
    ]
}
