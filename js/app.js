// $('#my-form').submit(function(){
	

// 	return false;
// });

// "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.places%20where%20text%3D%22"+ location +"%22&format=json"
// "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%20"+locationID+"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";


$("#my-form").submit(function(event) {
	event.preventDefault();

	var location = $('#location').val().split(' ').join('%20'); // Adds %20 for spaces.
	
	$.ajax({
		url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.places%20where%20text%3D%22"+ location +"%22&format=json",
		type: "GET", 
		data: {},
		success: function(data){
			var locationId;
			if (data.query.results.place[0].Admin3 != null) {
				locationId =data.query.results.place[0].woeid;
			}
			else if ()
			console.log(data);
			$.ajax({
				url:"https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%20"+locationId+"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
				type:"GET",
				data:{},
				success: function(data){
					var temp = data.query.results.channel.item.condition.temp;
					var text = data.query.results.channel.item.condition.text;
					var weather = temp + " degrees " + text;
					$("#weather").html(weather);
				},
				error: function(data){

				}
			})
		},
		error: function(data){
			console.log("Error when getting WOEID.", data);
		}
	});
	
});






















  

// $("#my-form").submit(function(event){
// 	event.preventDefault();
// 	var form = $("#my-form");
// 	var username = form.find('input[name="q"]');
// 	var error = false;

// 	console.log(username.val());
	
// 	if(username.val() == '') {
// 		username.css("border-color", "red");
// 		error = true;
// 	}


// 	if(!error){
// 		//do my ajax here
// 		$.ajax({
// 			url:form.attr('action'),
// 			type:form.attr('method'),
// 			data:form.serialize(),
// 			dataType:'jsonp',
// 			success:function(data){
				
// 				for (var i=0;i<10;i++) {
// 					var i_username = data.data[i].username;
// 					var i_profile_picture = data.data[i].profile_picture;
// 					var i_full_name = data.data[i].full_name;
// 					console.log(data.data[0].username);
// 				}
// 			},
// 			error:function(data){
// 				console.log(data);

// 			}
// 		});
// 	}
	
// });