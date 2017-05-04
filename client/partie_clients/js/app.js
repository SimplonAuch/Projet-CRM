console.log("Hello");
var customers = [];


function surligne(champ, erreur){

   if(erreur){
      champ.style.backgroundColor = "#fba";
   }
   else{
      champ.style.backgroundColor = "";
   }
}

function verifGender(champ){

   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}


function verifFirstName(champ) {

   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }  
}

function verifName(champ) {

   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }  
}



function verifCity(champ) {

   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }  
}

function verifAdress(champ) {

   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }  
}

function verifBirthdate(champ) {

   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }  
}

function verifZipCode(champ) {

   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }  
}

function verifPhoneNumber(champ) {

   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;

   }  
}

function verifForm(){

  
   var firstNameOk = verifFirstName; 
   var nameOk = verifName;
   var birthDateOk = verifBirthdate;
   

   if( firstNameOk && nameOk && birthDateOk){
      return true;
   }
   else
   {
           alert("Veuillez remplir correctement tous les champs");
      return false;
   }

}

$("button").on( 'click',function (event) {
   console.log('button click');
   event.preventDefault();
   verifForm();
   console.log(verifForm())
   if(true){
      alert("Votre client viens d'être enregistrer dans la base de données");
      $('form input').val("");
   } alert('Verifier le formulaire');

});


function getObject(){
   $.ajax({
      url:'/customer/getAll',
      method: 'GET',
      success: function(data){
         console.log(JSON.parse(data));
         customers = JSON.parse(data);
         // affiche(d);
      }
   });

}

function delObject(nbr){
   console.log(customers);
   customers.splice(nbr,1);
   console.log(customers);
   

   $.ajax({
      url:'/customers/update',
      method: 'POST',
      data:{
         db: JSON.stringify(customers)
      }
   });

}


$(function(){
   $("#customerTable").tablesorter();
});

var customers=[];

function recept(){
   $.ajax({
      url:"/customer/getAll",
      
      success : function(data){
      console.log(data);
      }
   })
   .done(function(data){
      customers=JSON.parse(data);
      // console.log(customers);
      load(customers);           
   });
}


function load(tab){
   for (i=0;i<tab.length;i++){
      $('tbody').append('<tr><td>'+tab[i].gender+'</td><td>'+tab[i].firstName+'</td><td>'+tab[i].name+'</td><td>'+tab[i].city+'</td><td>'+tab[i].address+'</td><td>'+tab[i].birthdate+'</td><td>'+tab[i].registrationDate+'</td><td>'+tab[i].zipCode+'</td><td>'+tab[i].phoneNumber+'</td><td><a href="#" class="sup" data-ind="'+i+'">X</a></td><td><a href="#" class="edt" data-ind="'+i+'">edit</a></td></tr>');
      }     
}

$(document).ready(function(){
   recept();
});

