# Guide SEO : Référencer votre site sur Google

Maintenant que votre site est optimisé techniquement (méta-tags, sitemap, robots.txt), vous devez signaler son existence à Google.

## Étape 1 : Google Search Console

C'est l'outil officiel et gratuit de Google pour gérer votre présence dans les résultats de recherche.

1.  Allez sur [Google Search Console](https://search.google.com/search-console).
2.  Connectez-vous avec votre compte Google.
3.  Ajoutez une propriété :
    *   Choisissez le type **"Domaine"** (recommandé) et entrez `run-convert.com`.
    *   Google va vous demander de vérifier la propriété via un enregistrement DNS (TXT).
    *   Copiez le code TXT fourni.
    *   Allez sur votre compte **OVH** > **Zone DNS** > **Ajouter une entrée** > **TXT**.
    *   Collez le code et validez.
    *   Revenez sur la Search Console et cliquez sur **Valider**.

## Étape 2 : Soumettre le Sitemap

Une fois votre propriété validée dans la Search Console :

1.  Dans le menu de gauche, cliquez sur **Sitemaps**.
2.  Dans la zone "Ajouter un sitemap", entrez `sitemap.xml`.
3.  Cliquez sur **Envoyer**.

Cela indique directement à Google quelles pages visiter.

## Étape 3 : Google Analytics (Optionnel)

Pour suivre le trafic de votre site (nombre de visiteurs, provenance...) :

1.  Créez un compte sur [Google Analytics](https://analytics.google.com/).
2.  Créez une propriété pour `run-convert.com`.
3.  Récupérez votre **ID de mesure** (G-XXXXXXXXXX) :
    *   Cliquez sur la roue dentée **Administration** (en bas à gauche).
    *   Dans la colonne "Propriété", cliquez sur **Flux de données** (Data Streams).
    *   Cliquez sur le flux correspondant à votre site (Web).
    *   L'**ID de mesure** s'affiche en haut à droite (commence par `G-`).
4.  Il faudra ajouter un petit script dans votre `index.html` (demandez-moi si vous souhaitez le faire).

## Conseils pour le référencement

*   **Backlinks** : Essayez d'obtenir des liens vers votre site depuis d'autres sites (forums de course à pied, blogs, réseaux sociaux). C'est le facteur le plus important.
*   **Contenu** : Si vous ajoutez du texte explicatif sur la page (comment utiliser le convertisseur, pourquoi convertir...), cela aidera Google à comprendre le sujet de la page.
