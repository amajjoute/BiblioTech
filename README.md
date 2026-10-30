# BiblioTech

BiblioTech est une application web de gestion d'une collection personnelle de livres. Elle permet d'ajouter des livres, de consulter la collection, de rechercher une entrée et de modifier les informations d'un livre. Les données sont enregistrées dans le navigateur avec `localStorage`.

## Fonctionnalités disponibles

- Ajouter un livre avec un titre et un auteur obligatoires.
- Renseigner l'année, le genre, le statut de lecture et une description (facultatifs).
- Afficher la collection enregistrée au chargement de la page.
- Rechercher par titre, auteur ou année en choisissant le champ de recherche.
- Modifier un livre existant depuis sa ligne dans le tableau. Les changements sont sauvegardés dans `localStorage`.
- Consulter le tableau sur mobile grâce au défilement horizontal.

## Fonctionnalités à terminer

- Supprimer un livre et demander une confirmation avant la suppression.
- Trier les livres par titre, auteur ou année.
- Mettre à jour dynamiquement le compteur de livres dans l'en-tête.

## Technologies

- HTML5
- JavaScript moderne avec modules ES6
- Tailwind CSS 4
- `localStorage` pour la persistance des données

## Organisation des fichiers

```text
.
├── index.html
├── css/
│   ├── input.css   # Source Tailwind et variables de thème
│   └── style.css   # CSS généré par Tailwind
└── js/
    ├── main.js     # Démarrage et coordination des événements
    ├── state.js    # Collection de livres et sauvegarde locale
    ├── ui.js       # Affichage du tableau et formulaire d'édition
    └── utils.js    # Fonctions utilitaires, dont la recherche
```

## Lancer le projet

Prérequis : Node.js et npm.

1. Installer les dépendances :

   ```bash
   npm install
   ```

2. Générer le CSS et le mettre à jour pendant le développement :

   ```bash
   npm run dev
   ```

3. Ouvrir `index.html` avec un serveur web local, par exemple l'extension **Live Server** de Visual Studio Code. Les modules JavaScript ES6 doivent être servis via HTTP.

Pour générer le CSS une seule fois :

```bash
npm run build
```

## Données locales

La collection est enregistrée dans le stockage local du navigateur sous la clé `books`. Elle reste disponible après le rechargement de la page, dans le même navigateur et sur la même origine. Effacer les données du site dans le navigateur supprime aussi cette collection.

## Modèle d'un livre

Chaque livre utilise les propriétés suivantes :

| Propriété | Description |
| --- | --- |
| `id` | Identifiant unique du livre |
| `title` | Titre (obligatoire) |
| `author` | Auteur (obligatoire) |
| `year` | Année de publication (facultative) |
| `genre` | Genre (facultatif) |
| `description` | Description (facultative) |
| `status` | Statut : `to-read`, `reading` ou `read` |

## Contexte pédagogique

Ce projet individuel met en pratique la manipulation du DOM, les événements, les modules JavaScript, la validation côté client et la persistance avec `localStorage`. Le brief prévoit également la recherche, le tri, la suppression, un workflow Git avec branches et Pull Requests, un tableau Kanban et le déploiement de l'application.
