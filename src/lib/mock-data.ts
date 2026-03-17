import { Project, Task, Event, Notification, Recommendation, User, ProjectMember } from './types';

export const currentUser: User = {
  id: 'u1',
  nom: 'Ben Ali',
  prenom: 'Ahmed',
  email: 'ahmed.benali@fst.utm.tn',
  role: 'student',
  faculte: 'Sciences Informatiques',
  specialite: 'Génie Logiciel',
  competences: ['React', 'TypeScript', 'Python', 'Machine Learning'],
  idUniversitaire: 'FST2024001',
  avatar: '',
};

export const mockMembers: ProjectMember[] = [
  { id: 'm1', userId: 'u1', nom: 'Ahmed Ben Ali', email: 'ahmed@fst.utm.tn', role: 'Chef', avatar: '' },
  { id: 'm2', userId: 'u2', nom: 'Sara Trabelsi', email: 'sara@fst.utm.tn', role: 'Membre actif', avatar: '' },
  { id: 'm3', userId: 'u3', nom: 'Youssef Mrad', email: 'youssef@fst.utm.tn', role: 'Membre actif', avatar: '' },
  { id: 'm4', userId: 'u4', nom: 'Ines Gharbi', email: 'ines@fst.utm.tn', role: 'Observateur', avatar: '' },
];

export const mockProjects: Project[] = [
  {
    id: 'p1', titre: 'Application Mobile FST', description: 'Développement d\'une application mobile pour la faculté', categorie: 'Développement Mobile',
    dateDebut: '2024-09-01', dateFin: '2025-03-30', chefDeProjet: 'u1', chefDeProjetNom: 'Ahmed Ben Ali',
    statut: 'En cours', progression: 65, membres: mockMembers.slice(0, 3),
    ressources: [{ nom: 'Cahier des charges', lien: '#' }, { nom: 'Maquettes Figma', lien: '#' }],
  },
  {
    id: 'p2', titre: 'Système de Recommandation', description: 'ML-based recommendation system pour les cours', categorie: 'Intelligence Artificielle',
    dateDebut: '2024-10-15', dateFin: '2025-05-15', chefDeProjet: 'u2', chefDeProjetNom: 'Sara Trabelsi',
    statut: 'En cours', progression: 40, membres: mockMembers.slice(1, 4),
    ressources: [{ nom: 'Dataset', lien: '#' }],
  },
  {
    id: 'p3', titre: 'Plateforme E-Learning', description: 'Plateforme d\'apprentissage en ligne', categorie: 'Web Development',
    dateDebut: '2024-08-01', dateFin: '2025-01-31', chefDeProjet: 'u3', chefDeProjetNom: 'Youssef Mrad',
    statut: 'Terminé', progression: 100, membres: mockMembers,
    ressources: [],
  },
  {
    id: 'p4', titre: 'IoT Campus Monitoring', description: 'Surveillance IoT du campus', categorie: 'IoT',
    dateDebut: '2025-01-01', dateFin: '2025-06-30', chefDeProjet: 'u1', chefDeProjetNom: 'Ahmed Ben Ali',
    statut: 'Planifié', progression: 0, membres: mockMembers.slice(0, 2),
    ressources: [],
  },
  {
    id: 'p5', titre: 'Chatbot Universitaire', description: 'Assistant virtuel pour les étudiants', categorie: 'Intelligence Artificielle',
    dateDebut: '2024-11-01', dateFin: '2025-04-01', chefDeProjet: 'u4', chefDeProjetNom: 'Ines Gharbi',
    statut: 'En Retard', progression: 25, membres: mockMembers.slice(2, 4),
    ressources: [],
  },
];

export const mockTasks: Task[] = [
  { id: 't1', titre: 'Design UI/UX', description: 'Créer les maquettes', assigneA: 'u1', assigneNom: 'Ahmed Ben Ali', dateDebut: '2024-09-15', deadline: '2024-10-15', priorite: 'High', statut: 'Terminée', projectId: 'p1' },
  { id: 't2', titre: 'Backend API', description: 'Développer les endpoints REST', assigneA: 'u2', assigneNom: 'Sara Trabelsi', dateDebut: '2024-10-01', deadline: '2024-12-01', priorite: 'High', statut: 'En cours', projectId: 'p1' },
  { id: 't3', titre: 'Tests unitaires', description: 'Écrire les tests', assigneA: 'u3', assigneNom: 'Youssef Mrad', dateDebut: '2024-11-01', deadline: '2025-01-15', priorite: 'Medium', statut: 'Non commencée', projectId: 'p1' },
  { id: 't4', titre: 'Data Collection', description: 'Collecter les données d\'entraînement', assigneA: 'u2', assigneNom: 'Sara Trabelsi', dateDebut: '2024-10-20', deadline: '2024-12-20', priorite: 'High', statut: 'En cours', projectId: 'p2' },
  { id: 't5', titre: 'Model Training', description: 'Entraîner le modèle ML', assigneA: 'u3', assigneNom: 'Youssef Mrad', dateDebut: '2025-01-01', deadline: '2025-03-01', priorite: 'High', statut: 'Non commencée', projectId: 'p2' },
  { id: 't6', titre: 'Documentation', description: 'Rédiger la documentation', assigneA: 'u1', assigneNom: 'Ahmed Ben Ali', dateDebut: '2025-02-01', deadline: '2025-03-20', priorite: 'Low', statut: 'Non commencée', projectId: 'p1' },
];

export const mockEvents: Event[] = [
  { id: 'e1', titre: 'Hackathon FST 2025', description: 'Compétition de programmation de 48h', type: 'Compétition', lieu: 'Amphithéâtre A', dateHeure: '2025-04-15T09:00', nombrePlaces: 200, placesRestantes: 45, affiche: '', createurs: ['Club IEEE'], partenaires: ['Microsoft', 'Google'], participants: [] },
  { id: 'e2', titre: 'Workshop IA & Data Science', description: 'Atelier pratique sur le machine learning', type: 'Workshop', lieu: 'Salle B204', dateHeure: '2025-03-25T14:00', nombrePlaces: 50, placesRestantes: 12, affiche: '', createurs: ['Club Data Science'], partenaires: ['AWS'], participants: [] },
  { id: 'e3', titre: 'Journée Portes Ouvertes', description: 'Découverte de la faculté et des clubs', type: 'Conférence', lieu: 'Campus FST', dateHeure: '2025-05-10T08:30', nombrePlaces: 500, placesRestantes: 320, affiche: '', createurs: ['Administration FST'], partenaires: ['Ministère'], participants: [] },
  { id: 'e4', titre: 'Coding Night', description: 'Nuit de programmation collaborative', type: 'Compétition', lieu: 'Lab Informatique', dateHeure: '2025-04-01T20:00', nombrePlaces: 80, placesRestantes: 0, affiche: '', createurs: ['Club IEEE'], partenaires: [], participants: [] },
];

export const mockNotifications: Notification[] = [
  { id: 'n1', type: 'task', titre: 'Tâche assignée', message: 'Vous avez été assigné à "Documentation"', date: '2025-03-17T10:00', lu: false },
  { id: 'n2', type: 'task', titre: 'Deadline proche', message: 'La tâche "Backend API" arrive à échéance dans 2 jours', date: '2025-03-16T08:00', lu: false },
  { id: 'n3', type: 'project', titre: 'Projet en retard', message: 'Le projet "Chatbot Universitaire" est en retard', date: '2025-03-15T14:00', lu: true },
  { id: 'n4', type: 'event', titre: 'Événement bientôt', message: 'Workshop IA & Data Science dans 2 jours', date: '2025-03-15T09:00', lu: false },
  { id: 'n5', type: 'system', titre: 'Bienvenue', message: 'Bienvenue sur la plateforme FST Projects!', date: '2025-03-14T12:00', lu: true },
];

export const mockRecommendations: Recommendation[] = [
  { id: 'r1', projetId: 'p2', titre: 'Système de Recommandation', categorie: 'Intelligence Artificielle', competenceMatch: 85, competences: ['Python', 'Machine Learning'] },
  { id: 'r2', projetId: 'p5', titre: 'Chatbot Universitaire', categorie: 'Intelligence Artificielle', competenceMatch: 72, competences: ['Python', 'NLP'] },
  { id: 'r3', projetId: 'p4', titre: 'IoT Campus Monitoring', categorie: 'IoT', competenceMatch: 55, competences: ['React', 'TypeScript'] },
];

export const competencesList = [
  'React', 'TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 'Machine Learning',
  'Deep Learning', 'NLP', 'Computer Vision', 'IoT', 'Embedded Systems', 'Cybersecurity',
  'Cloud Computing', 'Docker', 'Kubernetes', 'Flutter', 'React Native', 'Node.js',
  'Spring Boot', 'PostgreSQL', 'MongoDB', 'UI/UX Design', 'Data Science',
];

export const facultesList = [
  'Sciences Informatiques', 'Mathématiques', 'Physique', 'Chimie', 'Biologie',
  'Géologie', 'Sciences de la Terre', 'Génie Électrique', 'Génie Mécanique',
];
