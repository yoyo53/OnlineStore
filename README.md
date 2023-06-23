# OnlineStore
[![](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)](https://firebase.google.com/)
[![](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
[![](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)](https://vuejs.org/)

Water warriors vous propose les meilleurs pistolets à eau à des prix défiant toute concurrence ! Venez découvrir notre [site](https://cyb0nix.github.io/OnlineStore/) dès naintenant.

## Démonstration

Afin de démontrer la viabilité de cette solution, une version de démonstration a été déployée depuis ce dépôt GitHub.  
La base de données PostgreSQL est déployée sur [neon.tech](https://neon.tech), le back-end sur [Fly.io](https://fly.io) et le front-end sur [GitHub Pages](https://pages.github.com/).  
URL de l'API (back-end) : <https://online-store.fly.dev/>  
URL du site web (front-end) : <https://cyb0nix.github.io/OnlineStore/>

## Installation

Cette application web ayant été réalisée en mode n-tier, cela signifie qu’elle est constituée de trois parties distinctes pouvant ainsi être déployée de manière indépendante (possiblement sur des serveurs différents) :
- Les bases de données utilisées par l’application (Postgres et Firebase Storage)
- Le back-end (API Express.js pour interagir avec les bases de données)
- Le front-end (site web statique qui interagit avec l’API)

### Création des bases de données

La première étape du déploiement consiste donc à créer et configurer ces bases de données utilisées par l’application. Elles sont au nombre de deux :
-	Une base de données PostgreSQL pour stocker toutes les données textuelles
-	Un bucket Firebase Storage pour stocker les documents et images

\
**Étape 1 : Création de la base de données PostgreSQL**
1. Créez une nouvelle instance PostgreSQL sur l’hébergeur de votre choix (ou votre propre serveur).
2. Dans cette instance, créez une nouvelle base de données ainsi qu’un nouvel utilisateur ayant tous les droits sur cette base de données.
3. Conservez le nom de domaine de l’instance PostgreSQL, le nom de la base de donnée ainsi que le nom et le mot de passe de l’utilisateur pour les étapes suivantes.

\
**Étape 2 : Création du bucket Firebase Storage**
1. Rendez-vous sur le site Web de Firebase (https://firebase.google.com/) et créez un nouveau compte si vous n'en avez pas déjà un.
2. Dans la console Firebase, ajoutez votre projet en cliquant sur le bouton "Ajouter un projet" et suivez les instructions pour le configurer.
3. Une fois le projet créé, accédez à la section "Storage" dans la console Firebase.
4. Activez le stockage et suivez les instructions pour configurer votre bucket de stockage en mode production.
5. Enregistrez ensuite votre application web en cliquant sur le bouton “Ajouter une application” et ignorez la partie “Ajouter le SDK firebase”.
6. Rendez-vous ensuite dans les paramètres de votre projet, partie “comptes de service” et cliquez sur le bouton “Générer une nouvelle clé privée”. 
7. Conservez le fichier JSON ainsi généré pour les étapes suivantes.

### Déploiement du back-end

Assurez-vous d'avoir Node.js et Git installés sur votre machine avant de commencer.

\
**Étape 1 : Cloner le dépôt GitHub**
1. Ouvrez une ligne de commande ou un terminal.
2. Naviguez vers le répertoire où vous souhaitez cloner le projet.
3. Exécutez la commande suivante pour cloner le dépôt depuis GitHub :
```bash
git clone https://github.com/yoyo53/e-courtage.git
```

\
**Étape 2 : Configuration du back-end**
1. Accédez au répertoire du back-end :
```bash
cd e-courtage/back
```
2. Exécutez la commande suivante pour installer les dépendances :
```bash
npm install
```

\
**Étape 3 : Configuration des variables d'environnement**
1. Dans le répertoire du back-end, recherchez un fichier `.env.example`.
2. Dupliquez ce fichier et renommez la copie en `.env`.
3. Ouvrez le fichier `.env` dans un éditeur de texte.
4. Configurez les variables d'environnement avec les informations de connexion pour les bases de données PostgreSQL et Firebase Storage créées précédemment.

\
**Étape 4 : Exécution du back-end**
1. Exécutez la commande suivante pour démarrer le serveur :
```bash
npm start
```
Le serveur back-end est désormais en cours d'exécution.

### Déploiement du front-end

Assurez-vous d'avoir Node.js et Git installés sur votre machine avant de commencer. Si le déploiement est fait sur la même machine que le back-end, commencez directement à l’étape 2.

\
**Étape 1 : Cloner le dépôt GitHub**
1. Ouvrez une ligne de commande ou un terminal.
2. Naviguez vers le répertoire où vous souhaitez cloner le projet.
3. Exécutez la commande suivante pour cloner le dépôt depuis GitHub :
```bash
git clone https://github.com/yoyo53/e-courtage.git
```

\
**Étape 2 : Configuration du front-end**
1. Accédez au répertoire du front-end :
```bash
cd e-courtage/front
```
2. Exécutez la commande suivante pour installer les dépendances :
```bash
npm install
```

\
**Étape 3 : Configuration de des paramètres du front-end**
1. Dans le répertoire du front-end, recherchez un fichier `config.js`.
2. Ouvrez le fichier `config.js` dans un éditeur de texte.
3. Remplacez la valeur de la variable **api_url** par l’url de votre back-end.
4. Remplacez la valeur de la variable **base_url** par l'url de base sur laquelle votre application sera déployée.

\
**Étape 4 : Compilation du front-end**
1. Exécutez la commande suivante pour compiler le front-end en un site web statique :
```bash
npm run build
```
Le résultat de cette compilation sera disponible dans le dossier dist. Le contenu de ce dossier peut ensuite être déployé comme un site internet statique sur le fournisseur d’hébergement web de votre choix.
