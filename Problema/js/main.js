var ciencia = $(".ciencia");
var romantica = $(".romantica");
var infantil = $(".infantil");
var terror = $(".terror");
var accion = $(".accion");
var row = $(".row");
var colocar =  $(".colocar");
var section = $(".cine");
/*function retornar (element) {
	 if (section.change){
	 	function all (element){
			infantil.show();
			ciencia.show();
			romantica.show();
			terror.show();
			accion.show();
			colocar.addClass("row");
		}
	} 
}
*/
$("#all").click(function(){
    infantil.show();
	ciencia.show();
	romantica.show();
	terror.show();
	accion.show();
	colocar.addClass("row");
}); 
function kids (element) {
	infantil.show();
	ciencia.hide();
	romantica.hide();
	terror.hide();
	accion.hide();
	row.removeClass();
}
function scifi (element) {
	ciencia.show();
	infantil.hide();
	romantica.hide();
	terror.hide();
	accion.hide();
	row.removeClass();
}
function love (element){
	romantica.show();
	infantil.hide();
	terror.hide();
	accion.hide();
	ciencia.hide();
	row.removeClass();
}
function action (element) {
	romantica.hide();
	infantil.hide();
	romantica.hide();
	terror.hide();
	accion.show();
	ciencia.hide();
	row.removeClass();
}
function scary (element){
	romantica.hide();
	infantil.hide();
	romantica.hide();
	terror.show();
	accion.hide();
	ciencia.hide();
	row.removeClass();
}