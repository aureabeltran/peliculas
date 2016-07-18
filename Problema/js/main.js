var ciencia = $(".ciencia");
var romantica = $(".romantica");
var infantil = $(".infantil");
var terror = $(".terror");
var accion = $(".accion");
var row = $(".row");
var colocar =  $(".colocar");
var section = $(".cine");
//con esto muestro todas mis categorias
$("#all").click(function(){
    infantil.show();
	ciencia.show();
	romantica.show();
	terror.show();
	accion.show();
	colocar.addClass("row");
}); 
//Esto es una por una
function kids (element) {
	infantil.show();
	ciencia.hide();
	romantica.hide();
	terror.hide();
	accion.hide();
	row.removeClass();
	section.addClass("index");
}
function scifi (element) {
	ciencia.show();
	infantil.hide();
	romantica.hide();
	terror.hide();
	accion.hide();
	row.removeClass();
	section.addClass("index");
}
function love (element){
	romantica.show();
	infantil.hide();
	terror.hide();
	accion.hide();
	ciencia.hide();
	row.removeClass();
	section.addClass("index");
}
function action (element) {
	romantica.hide();
	infantil.hide();
	romantica.hide();
	terror.hide();
	accion.show();
	ciencia.hide();
	row.removeClass();
	section.addClass("index");
}
function scary (element){
	romantica.hide();
	infantil.hide();
	romantica.hide();
	terror.show();
	accion.hide();
	ciencia.hide();
	row.removeClass();
	section.addClass("index");
}