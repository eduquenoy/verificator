
var choixUrl = 0;
//var choixNom = 0;//Par défaut, on n'affiche pas le nom et le prénom
$('#choixUrl1').click(function() {
    if($('#choixUrl1').is(':checked')) { 
    //$('#urltest').css('visibility','hidden'); 
    $('#urltest').css('display','none'); 
    choixUrl = 0;
    }
 });
 $('#choixUrl2').click(function() {
    if($('#choixUrl2').is(':checked')) { 
    //    $('#urltest').css('visibility','visible') ;//On rend le formulaire de saisie d'URL visible
        $('#urltest').css('display','block') ;//On rend le formulaire de saisie d'URL visible
        choixUrl=1;
    }
 });


 /*$('#choixNom1').click(function() {
    if($('#choixNom1').is(':checked')) { 
    choixNom = 0;
    }
 });
 $('#choixNom2').click(function() {
    if($('#choixNom2').is(':checked')) { 
        choixNom=1;
    }
 });*/



 var choixDossier = 0;
 $('#choixDossier1').click(function() {
     if($('#choixDossier1').is(':checked')) { 
     $('#dossiertest').css('display','none'); 
     choixDossier = 0;
     }
  });
  $('#choixDossier2').click(function() {
     if($('#choixDossier2').is(':checked')) { 
         $('#dossiertest').css('display','block') ;//On rend le formulaire de saisie d'URL visible
         choixDossier=1;
     }
  });
 

 




var urlTest;
var dossierTest;

$('#form-submit').click(function(){//On a cliqué sur le bouton de soumission
    if(choixUrl==1){
        //Il faut lire le contenu du formulaire de saisie de l'URL
        urlTest = $('#basic-url').val();
    }else{
        urlTest = URLTEST;
    }
    if(choixDossier==1){
        //Il faut lire le contenu du formulaire de saisie du dossier à tester
        dossierTest = $('#basic-dossier').val();
    }else{
        dossierTest = DOSSIERTEST;
    }
    console.log(dossierTest);
    var liste = $("#floatingTextarea").val();
    liste = liste.trim();
    var patronyme = new Array();
    var temp=0;
    var tableau= new Array();
    var tableauComplet = liste.split("\n");
    var tableauCompose = 0; //A 1 si on récupère nom, prénom, id
    //On recherche une virgule :
    if(tableauComplet[0].indexOf(",")!=-1){
        console.log("Chaine composée");
        tableauCompose = 1;
        for(var i=0;i<tableauComplet.length;i++){
            temp = tableauComplet[i].split(",");
            tableau[i] = temp[2].trim();
            patronyme[i]=temp[0]+", "+temp[1];
           // console.log(tableau);
        }
    }else{
        console.log("Chaine simple");
        tableauCompose = 0;
        tableau = tableauComplet.slice();
    }
    //Il faut commencer par vider le tableau
    var i=0;
    $('#tableau').html("");
    for(i=0;i<tableau.length;i++){
        var chaine = '<tr><td id="ID'+i+'">'+tableau[i]+'</td><td id="base'+i+'"></td><td id="projet'+i+'"></td></tr>';
        $('#tableau').append(chaine);
        $('#base'+i).load("php/traitement.php?code="+tableau[i]+"&dossiertest="+dossierTest+"&urltest="+urlTest+"&type=0",function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success"){
                console.log(i);
                if($(this).text() == "existe"){
                    $(this).css("background-color","green");
                }else{
                    $(this).css("background-color","red");

                }
            }
            if(statusTxt == "error")
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          });
        $('#projet'+i).load("php/traitement.php?code="+tableau[i]+"&dossiertest="+dossierTest+"&urltest="+urlTest+"&type=1",function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success"){
                console.log(i);
                if($(this).text() == "existe"){
                    $(this).css("background-color","green");
                }else{
                    $(this).css("background-color","red");

                }
            }
            if(statusTxt == "error")
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          });
        if(tableauCompose == 1){//Iil faut ajouter nom, prenom
            //Le sélection est ID +  numéro
            $('#ID'+i).prepend(patronyme[i]+ " - ");
        }
    }

    //<tr><th scope="row">1</th><td>Mark</td><td>Otto</td></tr>
    //alert(tableau.length);
});

$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}