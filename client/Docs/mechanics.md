# BUT DU JEU

- **Plateau de 9 \* 11 cellules =>** Rois opposés sur la longueur

- **Exemple de rois :** <img src='../src\assets\images\king01.webp' width="100"><img src='../src\assets\images\king02.webp' width="100"><img src="../src\assets\images\king03.webp" width="100">

- **Conditions de victoire =>** Détruire le château ennemi
- **Conditions de défaite =>** Se faire détruire son château
- **Pioches, Mains, Défausses & Decks =>** Une carte jouée finit dans la défausse. Au début de chacun de vos tours de jeu, vous perdez votre main, pour en repiocher une (**_9_** cartes).
  Quand votre pioche est vide, la défausse est mélangée pour devenir votre pioche, et ceux indéfiniment.

#

### **Rareté des cartes**

commun[gris],  
peu commune[vert],  
rare[bleu],  
epique[orange],  
mythique[violet],  
legendaire[or],  
divine[argent],

---

# TYPES DE CARTE

### **1. Terrains**

_Condition :_ Un terrain peut-être invoqué s'il est connecté au château via un ou des terrains  
_Coût :_ [Entre 0 & 100] Généralement peu coûteux (20)  
_Effets :_ []

### **2. Unités**

_Condition :_ Une unité peut-être invoqué seulement sur un terrain ou dans une ville alliée  
_Coût :_ Formule à élaborer  
_Effets :_ Selon unité  
_implication :_ Mal d'invocation

### **3. Magiques**

_Condition :_ Un sort peut-être casté si vous avez les ressources nécessaires  
_Coût :_ [Entre 0 & 100]  
_Effets :_ Bannissement  
_Cible :_ Unité, Terrain, Consommables, Sorts & sorts customisables

### **4. Consommables**

_Types :_ [Kits, Potions, Equipements]  
_Condition :_ Peut-être consommé si vous avez les ressources nécessaires  
_Target :_ Unité

### **5. Constructions**

_Type :_ [Création, Amélioration] || [Création/Amélioration 2en1]  
_Coût :_ Création coût fixe, Amélioration coût évolutif  
_Condition :_ Doit être escorté/porté par une unité invoquée jusqu'à son déploiement

---

# PIOCHES, MAINS, DEFAUSSES & DECKS

### **Main**

**Nombre de cartes en début de tour :** **9**  
Dans ce système de défausse rotative, plus la taille de la main est grande, **+** la probabilité d'obtenir des combos est grande && **+** la probabilité de les obtenir rapidement est grande.  
**Résumé en formule** : ProbDrawGoodCard = 1 / Nb cartes exp(nbComboCard)

**Composition de la main :** Une main peut-être composée de tous les types de cartes.  
La main pourra être constitué de tous les types de cartes de CoardGame.  
**importance des composition :**

1. 50% Unité
2. 16.6% Terrains
3. 22.2% Magie
4. 11.1% Conso/Constru

**Fin de tour :**
A chaque fin de tour, la main se vide (sauf effet contraire).  
**_implication :_** pas ou peu de stratégie dû a la sauvegarde de cartes

**Début de tour :**
Au début du tour, piocher autant de cartes que nécessaire pour remplir la main.  
**_implication :_** peu de temps de réflexion, pioche en début de tour, renforce la mécanique de conservation de carte

**Rotation de la défausse/pioche :** _SI_ la pioche est vide lors d'un tirage, alors la défausse devient la nouvelle pioche (mélangée).  
**_implication :_** accentue les erreurs d'équilibrage

---

# EFFETS

    **Nom D'effets** (Types) [cible] {activation} description
    *implication :*

**BOOST DE STAT :** (Effet d'unité / Consommable / Construction) [Unité] {jouée/cartes activated}
Augmente une ou plusieurs stats de bases d'une unité

**VOL DE VIE :** (Effet d'unité) [Unité] {cartes activated}  
transfert de la vie d'une unité a une autre, peut tuer

**REGENERATION :** (Effet d'unité / Sort / Consommable) [Unité] {jouée/cartes activated}  
Soigne de X PV quand appliquer et diminue l'effet de Regeneration de 1

**DISPARITION :** (Effet d'unité / Sort) [*] {jouée/defaussé}  
La cible ne finira pas dans la défausse mais dans un "void" et sortira de la rotation  
_implication :_ la carte ne peux pas revenir elle n'est jouable qu'une seule fois

**SACRIFICES :** (Effet d'unité / Sort / Construction) [*] {jouée/cartes activated}  
La cible alliée est détruite en échange d'un effet bénéfique

**EMPOISONNEMENT :** (Effet d'unité / Sort) [Unité] {jouée/cartes activated}  
La cible devient sujette à des empoisonnements, elle perdra des PV à chaque fin de tour:

**SOIN :** (Effet d'unité / Sort / Consommable / Construction) [Unité] {jouée/cartes activated}  
PAS BESOIN DE BLABLATER 106 ANS !!!

**REPOS :** (Effet d'unité / Sort / Consommable / Construction) [Unité] {jouée/cartes activated}

**FATIGUE :** (Effet d'unité / Sort / Consommable / Construction) [Unité] {jouée/cartes activated}

**PERCEPTION :** (Effet d'unité, Sort, Consommable) [Terrain]
Découverte des pièges invisibles

---

# MÉCANIQUES

    **Nom De La Mécanique** (Types) [cible] {activation}
    description
    implication :

piège -> construc -> visible(ou non) ->

**Créatures Neutres :**
Les créatures Neutres commencent à fortement apparaître vers le tour 10(Mid Game).
Leurs "Archétypes" définiront leurs comportements (Aggro, Fuyarde, Sédentaire, Nomade, etc...)

**_ARCHETYPES_** (Exemple: bandit) :

> Différents Membres :
>
> - Assassins (Comportements: Aggro)
> - Voleurs (Comportements: )
> - Extorqueurs (Comportements: Aggro)

    Comportements :
      Aggro
      Fuyard
      Sédentaire
      Nomade

Les créatures neutres ont une chance de générer des constructions de différents types autour d'elles.

**Pièges :**
Les pièges sont des constructions situés de façon aléatoire dans chacun des camps opposés.
Un piège sera bénéfique, désanvatageux ou neutre pour le joueur.

// + DE TERRAIN, + DE MAGIE
