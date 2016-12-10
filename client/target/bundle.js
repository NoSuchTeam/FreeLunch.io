(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require ("../target/list/list.js")


},{"../target/list/list.js":2}],2:[function(require,module,exports){
var place = $(".place");
var hidden = $(".hidden");
var clicked = false



place.click(function(){
	// check the number div that was clicked (one indexed)
	var num = this.id
	console.log(num)

	if(hidden[num - 1].style.display == "none"){
		hidden[num - 1].style.display = "block"
	}else{
		hidden[num - 1].style.display = "none"
	}
	
})



var arr = [
	{
		name: "We have Money",
		address: "11802 N. FR 101 Willard MO 65781",
		phone: "417-444-4444",
		email: "goodstuff@gmail.com",
		website: "goodstuff.com",
		description: "we do good stuff. Hahahaha!!!"
	},
	{
		name: "We have Money",
		address: "11802 N. FR 101 Willard MO 65781",
		phone: "417-444-4444",
		email: "goodstuff@gmail.com",
		website: "goodstuff.com",
		description: "we do good stuff. Hahahaha!!!"
	},
	{
		name: "We have Money",
		address: "11802 N. FR 101 Willard MO 65781",
		phone: "417-444-4444",
		email: "goodstuff@gmail.com",
		website: "goodstuff.com",
		description: "we do good stuff. Hahahaha!!!"
	},
	{
		name: "We have Money",
		address: "11802 N. FR 101 Willard MO 65781",
		phone: "417-444-4444",
		email: "goodstuff@gmail.com",
		website: "goodstuff.com",
		description: "we do good stuff. Hahahaha!!!"
	},
	{
		name: "We have Money",
		address: "11802 N. FR 101 Willard MO 65781",
		phone: "417-444-4444",
		email: "goodstuff@gmail.com",
		website: "goodstuff.com",
		description: "we do good stuff. Hahahaha!!!"
	},
	{
		name: "We have Money",
		address: "11802 N. FR 101 Willard MO 65781",
		phone: "417-444-4444",
		email: "goodstuff@gmail.com",
		website: "goodstuff.com",
		description: "we do good stuff. Hahahaha!!!"
	}

];
for(var i = 0; i<arr.length; i++){
	jQuery('<div/>', {
	    class: 'place',
	    id: i
	}).appendTo('#links');
}


	


	
	jQuery('<div/>', {
		class: 'placeName show name',
		text: "working"
	}).appendTo('.place');

	jQuery('<div/>', {
		class: 'hidden',
		text: "work"
	}).appendTo('.name');

	jQuery('<div/>', {
		class: '',
		text: "Address"
	}).appendTo('.hidden');

	
	jQuery('<div/>', {
		class: '',
		text: "Phone"
	}).appendTo('.hidden');

	
	jQuery('<div/>', {
		class: '',
		text: "Email: "
	}).appendTo('.hidden');

	
	jQuery('<div/>', {
		class: '',
		text: "Website: "
	}).appendTo('.hidden');

	jQuery('<div/>', {
		class: '',
		text: "this is good stuff"
	}).appendTo('.place');

	





	


// <div class = "place" id = "1">
// 		<div class = "placeName show name">Save People</div>
// 		<div class = "hidden">
// 			<div class = "dont placeAddress">11802 S City Road Springfield MO 65781</div>
// 			<div class = "dont placePhone">417-458-4389</div>
// 			<div class = "dont placeEmail">savepeople@gmail.com</div>
// 			<div class = "dont placeWebsite">savepeople.com</div>
// 			<div class = "dont placeFacebook"></div>
// 			<div class = "dont placeTwitter"></div>
// 		</div>
// 		<div class = "dont placeDescription show">This is a place that saves people and does good stuff</div>
// 	</div>
},{}]},{},[1])