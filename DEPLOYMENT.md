# Guide de Déploiement Vercel & Configuration DNS OVH

Ce guide vous accompagne pour déployer votre projet sur Vercel et configurer votre nom de domaine `run-convert.com` chez OVH.

## 1. Déploiement sur Vercel

Si ce n'est pas déjà fait, connectez votre dépôt GitHub à Vercel :

1.  Allez sur [Vercel Dashboard](https://vercel.com/dashboard).
2.  Cliquez sur **"Add New..."** > **"Project"**.
3.  Importez votre dépôt Git `speed-converter`.
4.  Laissez les réglages par défaut (Vite est généralement détecté automatiquement).
5.  Cliquez sur **"Deploy"**.

## 2. Configuration du Domaine sur Vercel

Une fois le projet déployé :

1.  Allez dans l'onglet **Settings** de votre projet Vercel.
2.  Cliquez sur **Domains** dans le menu latéral.
3.  Entrez `run-convert.com` dans le champ d'ajout de domaine et cliquez sur **Add**.
4.  Vercel va vous proposer une configuration recommandée (généralement un enregistrement A et un CNAME).
    *   **Type** : A
    *   **Name** : @ (ou vide)
    *   **Value** : `76.76.21.21`
    *   **Type** : CNAME
    *   **Name** : www
    *   **Value** : `cname.vercel-dns.com`

## 3. Configuration DNS sur OVH

Connectez-vous à votre compte OVH :

1.  Allez dans la section **Web Cloud**.
2.  Dans la barre latérale gauche, cliquez sur **Noms de domaine** puis choisissez `run-convert.com`.
3.  Cliquez sur l'onglet **Zone DNS**.

### A. Nettoyage (Important)
Avant d'ajouter les nouvelles entrées, supprimez ou modifiez les entrées existantes qui pourraient entrer en conflit (souvent des entrées de type `A` et `CNAME` pointant vers les serveurs par défaut d'OVH).
*   Recherchez les entrées de type `A` pour le sous-domaine vide (indiqué par un point `.` ou `@`).
*   Recherchez les entrées de type `CNAME` pour `www`.

### B. Ajout des enregistrements Vercel

Cliquez sur le bouton **Ajouter une entrée** à droite.

**Pour le domaine racine (`run-convert.com`) :**
1.  Sélectionnez **A**.
2.  Sous-domaine : laissez vide (ou mettez `@` si demandé).
3.  Cible : `76.76.21.21`
4.  Validez.

**Pour le sous-domaine `www` (`www.run-convert.com`) :**
1.  Cliquez sur **Ajouter une entrée**.
2.  Sélectionnez **CNAME**.
3.  Sous-domaine : `www`
4.  Cible : `cname.vercel-dns.com.` (n'oubliez pas le point à la fin si OVH le demande, sinon sans).
5.  Validez.

## 4. Vérification

Retournez sur le tableau de bord Vercel dans la section **Domains**. Vercel va vérifier la propagation DNS. Cela peut prendre de quelques minutes à quelques heures (généralement rapide).

Une fois les icônes devenues vertes, votre site sera accessible via `https://run-convert.com` et `https://www.run-convert.com`.

## 5. Mises à jour du site

Vercel est configuré pour le **déploiement continu**. Cela signifie que :

1.  À chaque fois que vous faites un **push** sur la branche `main` de votre dépôt GitHub, Vercel détecte automatiquement le changement.
2.  Il lance une nouvelle construction (build) de votre site.
3.  Si la construction réussit, il met à jour le site en ligne instantanément.

Vous n'avez rien à faire manuellement sur Vercel pour les mises à jour courantes. Modifiez simplement votre code, committez, et pushez :

```bash
git add .
git commit -m "Description de vos modifications"
git push origin main
```
