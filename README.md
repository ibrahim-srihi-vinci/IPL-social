# IPL-social
Examen DevOps Janvier2025

## Auteur
- Nom : Srihi
- Prénom : Ibrahim
- Email : ibrahim.srihi@student.vinci.be

## URL du projet
https://github.com/ibrahim-srihi-vinci/IPL-social

## Description
Ce projet d'examen de DevOps consiste à créer un environnement DevOps avec une pipeline CI utilisant GitHub Actions, incluant une fonction de validation de mot de passe en JavaScript développée selon les principes du TDD. La pipeline CI s'exécute lors des PR ou MR vers la branche principale "main".

1.Validation de mot de passe :
  La fonction validatePassword vérifie qu'une chaîne de caractères est un mot de passe valide selon les critères suivants :
  Contient au moins 8 caractères.
  Contient au moins un caractère spécial.
  Contient au moins un chiffre.
  Ne contient pas la chaîne de caractères "IPL" (insensible à la casse).

2.Tests unitaires :
  Les tests pour la fonction de validation de mot de passe sont écrits dans un fichier séparé passwordChecker.test.js en utilisant le framework de test Jest.

## Commande pour exécuter les tests
npm test
