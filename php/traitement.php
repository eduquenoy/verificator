<?php
//echo rand(0,9999); //On va générer un nombre aléatoire entre 0 et 9999
//print_r($_GET);
$code = $_GET["code"];
$urltest = $_GET["urltest"];
$dossiertest = $_GET["dossiertest"];
$type = $_GET["type"];//Type d'info à renvoyer : 0: répertoire de base, 1:wordpress
if($type==0){
    echo (urlExist($urltest."/~".$code) ? "existe" : "n'existe pas");
}else{
    echo (urlExist($urltest."/~".$code."/".$dossiertest) ? "existe" : "n'existe pas");
}

function urlExist($url) {
    $file_headers = @get_headers($url);
    //var_dump($file_headers);

    if($file_headers[0] == 'HTTP/1.1 404 Not Found' || $file_headers[0] == 'HTTP/1.1 401 Unauthorized' || $file_headers[0] =='HTTP/1.1 400 Bad Request'){
        return false;
    }else{
        return true;
    }
}
?>