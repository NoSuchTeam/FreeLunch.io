var place = $(".place");
var dont = $(".dont");
var clicked = false

place.click(function(){
	var num = this.id
	console.log(place[num])
if(!clicked){
	
	for(var i = 0; i<place[num - 1].length; i++){
		dont[i].style.display = "block"
		clicked = true
	}
}else{
	for(var i = 0; i<dont.length; i++){
		dont[i].style.display = "none"
		clicked = false
	}
}
	
})