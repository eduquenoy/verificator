
<!DOCTYPE html>
<html>
<head>
    <title>Validateur d'URL</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes">
    <meta charset="utf-8">
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/animate.css">
</head>
<body style="background-color: #AEAEAE">
<div class="container">
<h1>Test d'URL sur le serveur d'expérimentation</h1>
<hr/>

<p>Par défault, l'URL est celle de base mais elle peut être modifiée. Il faut fournir une liste de comptes (1 par ligne) à tester 
mais il est également possible d'ajouter les noms et prénoms devant en séparant par des virgules, par exemple :<br>
Dupond, Marcel, hjz001<br/>
Zorglub, Irène, utg256<br/>
...<br/><br/>
Actuellement, on teste l'existence du dossier par défaut (par exemple "hz001") et d'un sous-dossier "wordpress"

</p>
<hr/>
<h2>URL du serveur</h2>
<div class="form-check">
  <input class="form-check-input" type="radio" name="choixUrl" id="choixUrl1" value="option1" checked>
  <label class="form-check-label" for="choixUrl1">
    Choix par défaut (http://experimentation.univ-littoral.fr)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="choixUrl" id="choixUrl2" value="option2">
  <label class="form-check-label" for="choixUrl2">
    Autre choix
  </label>
</div>
<div class="mb-3" id="urltest" style="display: none">
<label for="basic-url">URL de test</label>

  <input type="url" class="form-control w-100" id="basic-url" aria-describedby="basic-addon3">
</div>

<p></p>

<h2>Dossier à tester</h2>
<div class="form-check">
  <input class="form-check-input" type="radio" name="choixDossier" id="choixDossier1" value="option1" checked>
  <label class="form-check-label" for="choixDossier1">
    Choix par défaut (wordpress)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="choixDossier" id="choixDossier2" value="option2">
  <label class="form-check-label" for="choixDossier2">
    Autre choix
  </label>
</div>
<div class="mb-3" id="dossiertest" style="display: none">
<label for="basic-dossier">Dossier à tester</label>

  <input type="text" class="form-control w-100" id="basic-dossier" aria-describedby="basic-addon3">
</div>






<p class="text-left">Saisir la liste des identifiants</p>

<div class="form-floating" id="liste">
  <textarea class="form-control" placeholder="Saisissez ou collez la liste des ID. Il est possible de faire précéder l'ID du nom, prénom avec la virgule comme séparateur : Khölm, Albert, xgz20kj001 " id="floatingTextarea" style="height: 300px"></textarea>
  <label for="floatingTextarea2">Liste des ID</label>
</div>
<button type="submit" id="form-submit" class="btn btn-success btn-lg pull-right ">Submit</button>
        <div id="msgSubmit" class="h3 text-center hidden"></div>
        <div class="clearfix"></div>

</div>

<table class="table table-bordered table-responsive " style="width: 80%;margin-left: auto;
  margin-right: auto;" id="table-result">
  <thead class="thead-dark">
    <tr>
      <th scope="col" class="col-md-2">ID</th>
      <th scope="col" class="col-md-2" >Compte</th>
      <th scope="col" class="col-md-2">Wordpress</th>
    </tr>
  </thead>
  <tbody id="tableau">
    
  </tbody>
</table>
</body>
<script  type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
<script type="text/javascript" src="js/validator.min.js"></script>
<script type="text/javascript" src="application/_init.js"></script>
 <script type="text/javascript" src="js/messcripts.js"></script>
</htmlapplicatio>