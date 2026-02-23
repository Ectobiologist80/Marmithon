# Projet Marmithon

Toutes les images utilisés sur ce site ont été générés par l'IA Générative Gemini Pro.
Une partie du code CSS a été amélioré par une l'IA Générative Gemini Pro dans un but esthétique.

## Présentation du projet
Notre site Marmithon imite un site web de cuisine où l'on peut chercher des recettes. 
L'objectif est de montrer coment des interactions banales déclenchent des mécanismes de collecte de données souvent invisible pour l'utilisateur.

## Analyse de la menace
La menace étudiée est le suivi comportemental par cookies.
* Le site utilise des cookies pour stocker des informations directement dans le navigateur de l'utilisateur.
* Nous collectons le type de consentement, la configuration technique, un identifiant de session unique et les centres d'intérêt (dernière recette consultée ou recherche effectuée).
* La collecte commence dès l'interaction avec la bannière de cookies ou lors de la navigation sur le site.

## Implications et Risques
L'accumulation de ces données permet d'effectuer du profilage et de la corrélation. 
* En enregistrant les intérêt, un annonceur peut déduire les goûts culinaires ou le niveau de cuisine pour proposer des publicités ciblées.
* L'identifiant de session et les informations techniques permettant de vous reconnaître d'une page à l'autre, même sans compte utilisateur.

## Scénario
### Scénario 1 : Accepter les cookies
Lorsqu'on arrive sur le site, une pop-up apparait vous demandant si vous souhaitez accepter les cookies, cliquez sur "tout accepter".
Vous pourrez alors vous baladez sur la page d'accueil du site et voir qu'une console de logs se situe tout en bas.
Dans celle-ci on retrouve les horaires où ont été effectués les différentes actions.

Initialement, le site récupère le type de consentement de l'utilisateur (ici, il est accepté), la taille de l'écran de l'appareil, la langue du navigateur et génère un identifiant pour la session.
On peut ensuite cliquer sur les différents index du header (accueil, recettes, catégories, ect...) ainsi que sur le bouton chercher après avoir rentré du texte afin de récupérer le dernier interêt de l'utilisateur dans la console de logs.

Enfin, il est possible de cliquer sur le bouton 'telecharger' afin de récuperer un fichier texte contenant l'ensemble des logs ainsi que les cookies précédemment mentionnés

### Scénario 2 : Refuser les cookies
Lorsqu'on arrive sur le site et que la pop-up apparaît, cliquez cette fois-ci sur le bouton "Refuser".
En consultant la console de logs en bas de page, vous verrez que l'action est bien enregistrée à l'horaire précise du clic, mais le comportement du site change radicalement.

Dans ce cas précis, le site enregistre uniquement le type de consentement (ici, il est refusé) via un cookie technique nécessaire pour ne plus afficher la bannière. Contrairement au premier scénario, aucune information personnelle comme la taille de l'écran ou la langue du navigateur n'est collectée, et aucun identifiant de session n'est généré.
Si vous tentez de naviguer dans les menus du header ou d'utiliser la barre de recherche, la console de logs confirmera que vos intérêts ne sont plus suivis. Le système ignore volontairement ces interactions pour respecter votre choix de confidentialité, illustrant ainsi la différence entre une navigation suivie et une navigation privée.
