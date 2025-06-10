![Snake Game Demo](./.github/snake_demo.gif)


# 🐍 HEI Snake Game  
*(Calculatrice et cahier de leçon autorisés)*  

## 🎯 Objectifs

Développer un mini-moteur du **Snake Game** en console, en appliquant les principes de **Clean Code** :

- **DRY** 
- **KISS**
- **YAGNI**
- **Naming**
- **Factory**
- **Builder**
- **State**
- **Strategy**

---

## 🕹️ Contexte

Vous devez implémenter une version simplifiée du jeu **Snake** :

- Une grille de 10x10 cases
- Un serpent qui avance automatiquement
- De la nourriture apparaît à des positions aléatoires
- À chaque tick :
  - Le serpent avance
  - Il peut manger
  - Il peut mourir (collision mur ou corps)
- Le jeu passe par plusieurs **états** (menu, en cours, terminé)
- Le comportement du serpent est découplé par **stratégie de déplacement**

---

## ⛏️ Contraintes techniques

- Vous pouvez utiliser **Java**, **Python** ou **JavaScript**, selon vos préférences.

- Aucune interface graphique n’est demandée. Le jeu doit pouvoir tourner dans une console.

- L’accent est mis sur la **lisibilité**, la **clarté**, et la **maintenabilité** du code.

---

## 🧱 Classes & Concepts attendus

### 1. `Point`
Représente une position sur la grille (`x`, `y`).

### 2. `Direction` (Enum)
Valeurs possibles : `UP`, `DOWN`, `LEFT`, `RIGHT`.

### 3. `Snake`
Gère le déplacement, le corps du serpent, sa croissance et les collisions.

### 4. `FoodFactory`
Fabrique responsable de la génération aléatoire de nourriture (hors du corps du serpent).

### 5. `SnakeBuilder`
Construit un serpent initial (position, longueur, direction).

### 6. `MoveStrategy` (Strategy Pattern)
- Définit une interface `computeNextPosition(snake, direction)`
- Peut être remplacée pour tester différentes IA, ou différents modes de jeu

### 7. `GameState` (State Pattern)
- Interface ou classe abstraite
- Implémentations :
  - `MenuState`
  - `RunningState`
  - `GameOverState`

### 8. `Game`
- Gère l’état courant du jeu (`GameState`)
- Avance le jeu à chaque tick
- Coordonne le serpent, la nourriture, les collisions

### 9. `Game`
Gère la boucle de jeu et l’ensemble de la logique (déplacement, fin de partie, croissance...).

---

## 🧪 Étapes de développement (suggestion)

| Étape | Fonctionnalité | Principes appliqués |
|-------|----------------|---------------------|
| ✅ 1 | Déplacement simple du serpent | KISS, Naming |
| ✅ 2 | Apparition de nourriture | Factory, YAGNI |
| ✅ 3 | Croissance du serpent | DRY |
| ✅ 4 | Détection de collision avec les murs | KISS |
| ✅ 5 | Collision avec soi-même | DRY |
| ✅ 6 | Initialisation via Builder | Builder |
| ✅ 7 | Séparation du comportement de mouvement | Strategy |
| ✅ 8 | Gestion des états du jeu (menu, en cours, terminé) | State |

---

## 📝 Livrables attendus

À la fin de la séance, vous devez fournir :

- ✅ Un code fonctionnel, clair et bien structuré
- ✅ Des noms de classes, fonctions, variables explicites
- ✅ Un `README.md` (ou commentaire principal) expliquant comment lancer le jeu
- ✅ Une petite démonstration console si possible

--- 

## 🖥️ Affichage et Contrôles

### 🎮 Représentation dans le terminal

- **Serpent** : chaque segment est représenté par un caractère `*` ou `#`
- **Nourriture** : représentée par un caractère `@` ou `$`
- **Grille** : une matrice de 10x10 cases (affichée avec des points `.` ou des espaces)

#### Exemple de rendu :
. . . . . . . . . .

. . . . . @ . . . .

. . * * * . . . . .

. . . . . . . . . .

. . . . . . . . . .


> 🔁 La grille est réaffichée à chaque "tick" du jeu.

---

### ⌨️ Contrôles clavier

Le joueur peut changer la direction du serpent via les **touches suivantes** :

| Touche | Direction |
|--------|-----------|
| `W`    | Haut      |
| `S`    | Bas       |
| `A`    | Gauche    |
| `D`    | Droite    |

  
Si la lecture de clavier en temps réel est complexe à gérer dans votre environnement, voici deux alternatives acceptables :

- **Entrée manuelle** : demandez la direction à chaque tick (`input()` en Python, `Scanner` en Java)
- **Simulation** : passez une liste de directions prédéfinies pour tester la logique

---

## 💡 Bonus (facultatif)

- Ajouter un **système de score** (1 point par nourriture mangée)
- Journaliser les actions du jeu à chaque tick (ex : "le serpent avance à [x, y]")
- Ajouter des **tests unitaires** (par ex. collision, déplacement…)

---

## 📌 Conseils

- Gardez votre code **simple** : évitez les complications inutiles.
- Utilisez des noms clairs dès le départ.
- Refactorez dès que possible, même un petit bout de code.
- Codez progressivement, et testez à chaque étape.

---

## 🧘‍♂️ Mot de Julien

Bon courage, que votre **code** et votre **serpent** soient avec vous…  
…comme votre ombre ! 🚀🐍  
