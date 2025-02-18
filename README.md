# Test Technique - Développeur React/TypeScript

## Objectifs
Évaluer les compétences en développement front-end avec un focus sur :
- Création et gestion dynamique de formulaires avec validation en temps réel.
- Intégration et consommation d’APIs externes pour l’affichage et la sélection de données.
- Implémentation d’un design responsive et d’animations pour améliorer l’expérience utilisateur.
- Application et customisation avancée du thème Material UI.
- Qualité du code et bonnes pratiques TypeScript.

--- 

## Consignes

### API :
L'API suivante sera utilisée pour récupérer les données nécessaires :

**Base URL** : `https://technical-test-261563463206.europe-west9.run.app`

**Endpoints** :
- `/roles` - GET - Liste des postes disponibles
- `/airlines` - GET - Liste des compagnies aériennes
- `/form` - POST - Soumission des données du formulaire

### Spécifications du formulaire :
- Champs requis :
  - Nom : champ texte obligatoire.
  - Email : champ email avec validation de format, obligatoire.
  - Âge : champ nombre, facultatif.
  - Date de début de contrat : date picker obligatoire, avec une date comprise entre le 1er janvier 2000 et la date du jour.
  - Poste & Compagnie aérienne : sélections via données récupérées par API (obligatoire).
  - Anglais : case à cocher obligatoire indiquant si le candidat parle anglais.
- Réactivité & Design :
  - Mise en place d’un layout responsive (grille simple sur mobile, deux colonnes sur desktop).
  - Animations et retours visuels lors du focus et de la validation des champs.
  - Thème Material UI customisé (réglé dans `theme.ts`).

### Fonctionnalités attendues :
- Validation en temps réel des saisies.
- Affichage d’un message d’erreur ou de succès après la soumission, avec possibilité de réinitialiser le formulaire.
- Soumission des données via un POST sur l’endpoint `/form`.

---

## Bonus
- Mise en place de tests unitaires pour valider les principales fonctionnalités du formulaire.

---

## Instructions d'utilisation
- Installer les dépendances via `pnpm install` ou `npm install`.
- Lancer le serveur de développement avec `pnpm dev` ou `npm dev`.
