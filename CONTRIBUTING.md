# Contributing to ngx-iselect
Vous souhaitez contribuer au developpment de ngx-iselect et par consequent de l'open source ?. Veuillez lire ce qui suit pour decouvrir comment faire.

## Using the issue tracker
Utilisez l'[issue tracker](https://github.com/paulido/ngx-iselect/issues) uniquement pour les actions suivantes.
rapports de bogues;
demandes de fonctionnalités;
soumission de pull requests.

Toute utilisation que ne respecte pas cela sera supprimé. Merci de comprendre.

## Issues assignment

L'équipe principale examinera les questions en suspens, les analysera et fournira des conseils sur la manière de proceder. Si vous ne recevez pas de reponse immediatement, cela ne veut pas dire que votre preocupation n'a pas été prise en compte. Nous ferons de notre mieux pour vous repondre le plutot possible.

## Issues and labels

Our bug tracker utilizes several labels to help organize and identify issues. Here's what they represent and how we use them:

    browser bug - Issues that are reported to us, but actually are the result of a browser-specific bug. These are diagnosed with reduced test cases and result in an issue opened on that browser's own bug tracker.
    confirmed - Issues that have been confirmed with a reduced test case and identify a bug in Bootstrap.
    css - Issues stemming from our compiled CSS or source Sass files.
    docs - Issues for improving or updating our documentation.
    examples - Issues involving the example templates included in our docs.
    feature - Issues asking for a new feature to be added, or an existing one to be extended or modified. New features require a minor version bump (e.g., v3.0.0 to v3.1.0).
    build - Issues with our build system, which is used to run all our tests, concatenate and compile source files, and more.
    help wanted - Issues we need or would love help from the community to resolve.
    js - Issues stemming from our compiled or source JavaScript files.
    meta - Issues with the project itself or our GitHub repository.

For a complete look at our labels, see the project labels page.

## Bug report

Un bogue est un problème démontrable causé par le code contenu dans le dépôt. Les bons rapports de bogues sont extrêmement utiles, alors merci !

Lignes directrices pour les rapports de bogues :

    Validez votre HTML pour vous assurer que votre problème n'est pas causé par une simple erreur dans votre propre code.

    Utilisez la recherche de problèmes sur GitHub - vérifiez si le problème a déjà été signalé.

    Vérifiez si le problème a été corrigé - essayez de le reproduire en utilisant la dernière version 
    Isoler le problème - idéalement, créer un cas de test réduit et un exemple réel. Ces CodePen v4 et CodePen v5 sont des modèles utiles.

Un bon rapport de bogue ne devrait pas obliger les autres à vous poursuivre pour obtenir plus d'informations. Essayez d'être aussi détaillé que possible dans votre rapport. Quel est votre environnement ? Quelles sont les étapes permettant de reproduire le problème ? Quel(s) navigateur(s) et quel système d'exploitation rencontrent le problème ? D'autres navigateurs présentent-ils le problème différemment ? Quel est le résultat escompté ? Tous ces détails aideront les gens à corriger les bogues potentiels.

## Feature requests
Les demandes de fonctionnalités sont les bienvenues. Mais prenez le temps de vérifier si votre idée correspond à la portée et aux objectifs du projet. C'est à vous de présenter des arguments solides pour convaincre les développeurs du projet du bien-fondé de cette fonctionnalité. Veuillez fournir autant de détails et de contexte que possible.


## Pull request

Les pull requests servent à apporter 
des correctifs;
des patchs;
de nouvelle fonctionnalités.

Les pull requests constituent une aide precieuse pour l'evolution du code. Nous encourageons donc les pulls requests. Cependants ceux-ci doivent:
respectifs les objectifs du projets
bien documenté.
Suivez les etapes suivantes pour créer des pull requests :
1. Forker le projet
2. Cloner votre fork
```
git clone https://github.com/<your-username>/ngx-iselect.git

```
3. Configurer votre clone

```
cd ngx-iselect
git add remote origin https://github.com/paulido/ngx-iselect.git
```

4. Si vous avez cloner il y'a un bon moment - mettre à jour votre clone :

```
git checkout main
git pull origin main

```

5. Créer une nouvelle branche de fonctionnalite

```
git checkout -b <topic-branch-name>

```
