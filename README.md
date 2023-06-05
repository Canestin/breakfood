# BreakFood - Manuel de déploiement

<br>
<div align="center">
<img src="https://raw.githubusercontent.com/Canestin/assets/main/img/breakfood.png" alt="Logo BreakFood" width="300">
</div>

<br>
Ce projet est une application mobile de partage de recettes équilibrées, développée avec React Native Expo. L'application permet aux utilisateurs de découvrir, partager et apprécier des recettes saines et équilibrées, tout en bénéficiant des conseils d'experts en nutrition.

## Fonctionnalités principales

- Recherche de recettes par ingrédients, restrictions alimentaires et objectifs de santé.
- Profils de créateurs de contenu certifiés avec des informations sur leurs compétences et leurs spécialités en nutrition.
- Interaction sociale entre les utilisateurs (commentaires, likes, partages).
- Conseils nutritionnels personnalisés en fonction du profil de santé de l'utilisateur.
- Fonctionnalité de création et de partage de recettes par les utilisateurs.

## Lancement de l'Application

Si vous souhaitez juste lancer le projet pour le voir, je vous invite à :

- Télécharger l'Application mobile Expo Go
  - App Store : https://apps.apple.com/fr/app/expo-go/id982107779
  - Play Store : https://play.google.com/store/apps/details?id=host.exp.exponent&hl=fr&gl=US
- Scanner le Code QR Suivant (vous serez redirigez vers l'Application Expo Go tétéchargée précédemment et l'App se lancera)

<br>
<div align="left">
<img src="https://raw.githubusercontent.com/Canestin/assets/main/img/breakfood-qr-code.png" alt="Logo BreakFood" width="200">
</div>
<br>

## Outils utilisés

- React Native : framework de développement d'applications mobiles.
- Expo : plateforme de développement d'applications React Native.
- JavaScript : langage de programmation utilisé pour le développement de l'application.
- Supabase : base de données en temps réel utilisée pour stocker les recettes, les profils des utilisateurs et les données sociales.
- Redux : bibliothèque de gestion de l'état de l'application.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- Node.js : version 16.x ou supérieure
- NPM : version 8.x ou supérieure

## Installation

1. Clonez ce dépôt de code sur votre machine locale.
2. Accédez au répertoire du projet.
3. Exécutez la commande `npm install` pour installer les dépendances du projet.
4. Configurez Supabase & Twilio : https://supabase.com/docs/guides/auth/phone-login/twilio
5. Créez un fichier `.env` à la racine du projet et configurez les variables d'environnement nécessaires (par exemple, les informations d'accès à Supabase et Twilio).
6. Exécutez la commande `expo start` pour lancer l'application en mode de développement.

### variables d'environnement nécessaires

| Variable     | Type   | Description                                                                                                                                                                                                                                      |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SUPABASE_URL | String | L'URL de connexion à la base de données Supabase. Assurez-vous de fournir l'URL correcte pour établir une connexion réussie.                                                                                                                     |
| SUPABASE_KEY | String | La clé d'API nécessaire pour accéder à la base de données Supabase. Cette clé vous permettra d'authentifier et d'autoriser les requêtes vers la base de données. Veillez à garder cette clé confidentielle et à ne pas la partager publiquement. |

## Configuration

Avant de lancer l'application en mode de production, assurez-vous de configurer les paramètres appropriés pour l'environnement de production, tels que les clés d'API, les URL de serveur, etc. Vous pouvez généralement les définir dans le fichier `.env` ou dans les fichiers de configuration spécifiques.

## Déploiement

Pour déployer l'application sur un appareil ou un émulateur, vous pouvez utiliser les commandes Expo suivantes :

- `expo build:android` : pour construire une version Android de l'application.
- `expo build:ios` : pour construire une version iOS de l'application.

Suivez les instructions fournies par Expo pour compléter le processus de déploiement.

## Licence

Ce projet est sous licence MIT. Veuillez consulter le fichier [LICENSE](LICENSE) pour plus d'informations sur les conditions de licence.

---

Merci d'avoir choisi notre application de partage de recettes équilibrées ! Nous espérons que vous l'apprécierez et qu'elle vous aidera à maintenir une alimentation saine et délicieuse. Si vous avez des questions ou des commentaires, n'hésitez pas à nous contacter.

Bon appétit !
