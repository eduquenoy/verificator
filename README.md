# Vérificateur d'URL pour travaux pratiques

## description
Cette application a été développée pour vérifier rapidement l'installation d'un CMS Wordpress pendant une séance de travaux pratiques.
 
## configuration
Pour configurer l'application, commencez par renommer ou dupliquer le fichier `application/_init-sample.js` en `application/_init.js` puis configurez-le à votre convenance
 
 On suppose l'organisation suivante :
 - un serveur qui héberge les comptes des étudiants avec 1 dossier par étudiant à la racine, avec une URL comme `http://monsousdomaine.mondomaine.com`
 - on fait installer aux étudiants un CMS, par exemple Worpdress dans un dossier qui sera nommé de la même manière pour chaque étudiant, par exemple `wordpress`
 
Deux éléments sont alors compléter :
 - `URLTEST` : c'est l'URL qui accueille les comptes d'étudiants, donc pour l'exemple : 

    `var URLTEST = "http://monsite.univ-amoi.com";`

- `DOSSIERTEST` : c'est le dossier (même nom pour tout le monde) qui accueille le CMS à installer, par exemple Joomla :


    `var DOSSIERTEST = "joomla";`

## fonctionnement 
On peut soit utiliser l'URL par défaut (`URLTEST`) et le dossier par défault (`DOSSIERTEST`) soit utiliser un choix différent en cliquant sur __Autre choix__

Il faut ensuite fournir une liste de comptes à tester. Ces comptes correspondent aux dossiers qui seront testés. Par exemple, si la liste fournie est :

    john010
    marth301
    ted111

alors les URL testées seront les suivantes :

    http://monsite.univ-amoi.com/~john010
    http://monsite.univ-amoi.com/~marth301
    http://monsite.univ-amoi.com/~ted111

ainsi que :

    http://monsite.univ-amoi.com/~john010/joomla
    http://monsite.univ-amoi.com/~marth301/joomla
    http://monsite.univ-amoi.com/~ted111/joomla

On peut utiliser une liste qui comporte également le nom et le prénom de l'étudiant. Il suffit d'utiliser la virgule comme séparateur. Par exemple :
    
    Wayne, John, john010
    Kellys, Marthe, marth301
    Bear, Ted, ted111
