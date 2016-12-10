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

var data = {
	age: 43,
	city: "Springfield"
};

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
	}
];
// for each of the places.
for(var i = 0; i<arr.length; i++){

	jQuery('<div/>', {
	    class: 'place',
	    id: i,
	}).appendTo('#links');

	jQuery('<div/>', {
	    class: 'placeName show name',
	    text: arr[i].name
	}).appendTo('.place')[i];

	jQuery('<div/>', {
	    class: 'dont',
	    text: "Phone: "+ arr[i].phone
	}).appendTo('.place')[i];

	jQuery('<div/>', {
	    class: 'dont',
	    text: "Phone: "+ arr[i].email
	}).appendTo('.place')[i];

	jQuery('<div/>', {
	    class: 'dont',
	    text: "Phone: "+ arr[i].website
	}).appendTo('.place')[i];

	jQuery('<div/>', {
	    class: 'show',
	    text: "Phone: "+ arr[i].description
	}).appendTo('.place')[i];

}


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