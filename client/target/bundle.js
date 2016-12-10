(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require ("../target/list/list.js")


},{"../target/list/list.js":2}],2:[function(require,module,exports){
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
},{}]},{},[1])