//someone did a fraud with me and after getting code didn't pay me i hope his teacher will find out this


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var x=0;
var y=0;
var check=0;
var xq ;

function myFunction(p1,p2,p3,p4){
	
	
	
	 c = document.getElementById("myCanvas");
 ctx = c.getContext("2d");   
	
    
	
	
	
	 
	   
	     
	 
	   
   
	
	
	
	
	
	
	
	
	
	
                                      // this is like build in function for canvas
 ctx.beginPath();
ctx.arc(p1, p2, p3, p4, 2 * Math.PI);
 ctx.stroke();
 
return;
}








function myFunctionn(){
	
	
	
	
	x=Math.floor(Math.random() * 300)+90                                          // this function will get random values from 90 to 300
	y=Math.floor(Math.random() * 300)+90
	
	var ctx = c.getContext("2d");
ctx.font = "30px Arial";

ctx.strokeText("+", x , y); //20 se 100                                                           // this function will draw plus sign
	
}




c.onclick = function() {
	canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');                                                               // this function will draw circle again on new plus sign location
ctx.clearRect(0, 0, canvas.width, canvas.height);

myFunction(x+10, y-15, 80, 0);

var ctx = c.getContext("2d");
ctx.font = "30px Arial";


ctx.strokeText("+", x , y); //20 se 100

fline();




}	
	
	
	
function fline(){
	





ctx.beginPath();
ctx.moveTo(x+10, y-10);                                                      // this function is used to draw line
ctx.lineTo(x+64, y+42);
ctx.stroke();

return;


}	


function secFunctionn(){
	                                                   
	myFunction(x+10, y-10, 40, 0);                                          // this is again code for circle
	
	ctx.beginPath();
ctx.moveTo(x+10, y-10);
ctx.lineTo(x+32, y-42);
ctx.stroke();
	
	
	
}

function lastone(){                                       
	
 ctx.beginPath();
ctx.arc(x+10, y-15, 80, 0, 2 * Math.PI);                                // this again drawing function which will draw green circle
ctx.fillStyle = "green";
ctx.fill();
 ctx.stroke();
 
	 ctx.beginPath();
ctx.arc(x+10, y-10, 40, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();
 ctx.stroke();
 
 
 
 ctx.font = "30px Arial";                                              // this will draw an arc on new position 
ctx.strokeText("+", x , y); //20 se 100
 
 ctx.beginPath();
ctx.moveTo(x+10, y-10);
ctx.lineTo(x+64, y+42);
ctx.stroke();
	
	ctx.beginPath();
ctx.moveTo(x+10, y-10);
ctx.lineTo(x+32, y-42);
ctx.stroke();
	
	
	
	
}
	
	
function fourth(){
	 ctx.beginPath();
ctx.arc(x+10, y-15, 80, 0, 2 * Math.PI);                                             // this is for 4th button it will create a circle
ctx.fillStyle = "white";
ctx.fill();
 ctx.stroke();
 
  ctx.beginPath();
ctx.arc(x-70, y-15, 8, 0, 2 * Math.PI);                                         // this code is for markers which is basically a circle
ctx.fillStyle = "blue";
ctx.fill();
 ctx.stroke();

 ctx.beginPath();
ctx.arc(x+87, y-15, 8, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();
 ctx.stroke();


 ctx.beginPath();
ctx.arc(x+10, y-95, 8, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();
 ctx.stroke();



 ctx.beginPath();
ctx.arc(x+10, y+66, 8, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();
 ctx.stroke();


	 ctx.beginPath();
ctx.arc(x+10, y-15, 8, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();
 ctx.stroke();


}

function fifth(){
	check=1;
	canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
ctx.rect(20, 20, 350, 300);
ctx.fillStyle = "green";
ctx.fill();
ctx.stroke();
	
	
ctx.beginPath();
ctx.moveTo(80, 80);
ctx.lineTo(300, 80);


ctx.moveTo(90, 90);
ctx.lineTo(90, 180);

ctx.moveTo(90, 90);
ctx.lineTo(170, 90);

ctx.moveTo(90, 110);
ctx.lineTo(220, 110);


ctx.moveTo(90, 130);
ctx.lineTo(220, 130);


ctx.moveTo(90, 150);
ctx.lineTo(220, 150);





 ctx.lineWidth = 30;

 ctx.strokeStyle = '#ff0000';
ctx.stroke();


ctx.beginPath();
ctx.moveTo(220, 150);
ctx.lineTo(250, 100);


ctx.moveTo(130, 175);
ctx.lineTo(150, 150);


 ctx.lineWidth = 30;

 ctx.strokeStyle = 'green';
ctx.stroke();
	
	
	
	
	
	
	
	
}
	
	
	
	function myEnterFunction() {                    // this function will run when mouse enter
		if(check==1){

				
  ctx.beginPath();
//ctx.arc(25, 24, 5, 0, 2 * Math.PI);
ctx.arc(Math.floor(Math.random() * 335) + 25, Math.floor(Math.random() * 35) + 24, 5, 0, 2 * Math.PI);               // this will enter dot in random position
ctx.fillStyle = "blue";
ctx.fill();

  ctx.beginPath();
//ctx.arc(25, 24, 5, 0, 2 * Math.PI);
ctx.arc(Math.floor(Math.random() * 32) + 25, Math.floor(Math.random() * 245) + 24, 5, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();

 ctx.beginPath();
//ctx.arc(25, 24, 5, 0, 2 * Math.PI);
ctx.arc(Math.floor(Math.random() * 335) + 25, Math.floor(Math.random() * 125) + 175, 5, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();
		
		
 ctx.beginPath();
//ctx.arc(25, 24, 5, 0, 2 * Math.PI);
ctx.arc(Math.floor(Math.random() * 80) + 245, Math.floor(Math.random() * 125) + 125, 5, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();		
		
		
  ctx.beginPath();
//ctx.arc(25, 24, 5, 0, 2 * Math.PI);
ctx.arc(Math.floor(Math.random() * 335) + 25, Math.floor(Math.random() * 35) + 24, 5, 0, 2 * Math.PI);               // this will enter dot in random position
ctx.fillStyle = "blue";
ctx.fill();

  ctx.beginPath();
//ctx.arc(25, 24, 5, 0, 2 * Math.PI);
ctx.arc(Math.floor(Math.random() * 32) + 25, Math.floor(Math.random() * 245) + 24, 5, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();

 ctx.beginPath();
//ctx.arc(25, 24, 5, 0, 2 * Math.PI);
ctx.arc(Math.floor(Math.random() * 335) + 25, Math.floor(Math.random() * 125) + 175, 5, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();
		
		
 ctx.beginPath();
//ctx.arc(25, 24, 5, 0, 2 * Math.PI);
ctx.arc(Math.floor(Math.random() * 80) + 245, Math.floor(Math.random() * 125) + 125, 5, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();			
		
	  ctx.beginPath();
//ctx.arc(25, 24, 5, 0, 2 * Math.PI);
ctx.arc(Math.floor(Math.random() * 335) + 25, Math.floor(Math.random() * 35) + 24, 5, 0, 2 * Math.PI);               // this will enter dot in random position
ctx.fillStyle = "blue";
ctx.fill();

  ctx.beginPath();
//ctx.arc(25, 24, 5, 0, 2 * Math.PI);
ctx.arc(Math.floor(Math.random() * 32) + 25, Math.floor(Math.random() * 245) + 24, 5, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();	
		
		
		
		}
}
	
	
function sixth(){

var gy = document.getElementById("buttong");                        
 gy.style.display = "block";                                          // it will activate the form for button 6
canvas = document.getElementById('myCanvas');                             // it will remove canvas which we used in first 5 buttons
ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);
var gx = document.getElementById("map");                      
 gx.style.display = "block";


}	
	
	
	
	      // Initialize and add the map
      function initMap() {
	  
	  	 xq = document.getElementById("cars").value;                 // this belonds to form of button 6
		 
		 z = document.getElementById("cars2").value;
		  
	  if(xq=="Newman"){                                             // checking the source and destination 
		  if(z=="Olympic dam"){
			  
			const uluru2 = { lat: -22.344, lng: 130.036 };             // lattitude and logititude of source
		  
		  
	const uluru1 = { lat: -23.344, lng: 119.036 };                     // lattitude and logititude of destination
	   
	     
	 
	   
        // The location of Uluru
        const uluru = { lat: -20.344, lng: 131.036 };
		
		  
		  
		
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {                 // creating map
          zoom: 4,
          center: uluru,
        });
		
		
		
	  
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({                                       // pointing marker
          position: uluru,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"                           }
        });
		
		
		  const marker1 = new google.maps.Marker({
          position: uluru1 ,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"                           }
        });
		
		
		  const marker2 = new google.maps.Marker({
          position: uluru2 ,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"                           }
        });
		
		
		 var pathBetween = new google.maps.Polyline({
      path: [uluru1,uluru2],
      strokeColor: '#FFFF00',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
			 var pathBetween1 = new google.maps.Polyline({
      path: [uluru1,uluru],
      strokeColor: '#800080',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
				 var pathBetween2 = new google.maps.Polyline({
      path: [uluru2,uluru],
      strokeColor: '#800080',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
		pathBetween.setMap(map);                                                         //creating path
		
		pathBetween2.setMap(map);
		pathBetween1.setMap(map);
		
	  }
		
		
      }
	
	
	
	
	
	
	
	
	
	
	
	 if(xq=="Newman"){
		  if(z=="Anna creek"){
			  
			  const uluru2 = { lat: -28.344, lng: 135.036 };
		  
		  
	const uluru1 = { lat: -23.344, lng: 119.036 };
	   
	     
	 
	   
        // The location of Uluru
        const uluru = { lat: -20.344, lng: 131.036 };
		
		  
		  
		
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: uluru,
        });
		
		
		
	  
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"                           }
        });
		
		
		  const marker1 = new google.maps.Marker({
          position: uluru1 ,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"                           }
        });
		
		
		  const marker2 = new google.maps.Marker({
          position: uluru2 ,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"                           }
        });
		
		
		 var pathBetween = new google.maps.Polyline({
      path: [uluru1,uluru2],
      strokeColor: '#FFFF00',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
			 var pathBetween1 = new google.maps.Polyline({
      path: [uluru1,uluru],
      strokeColor: '#800080',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
				 var pathBetween2 = new google.maps.Polyline({
      path: [uluru2,uluru],
      strokeColor: '#800080',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
		pathBetween.setMap(map);
		
		pathBetween2.setMap(map);
		pathBetween1.setMap(map);
		
	  }
		
		
      }
	
	
	
	
	
	
	
	
	
	
		 if(xq=="Newman"){
		  if(z=="Durham"){
			  
				  const uluru2 = { lat: -32.344, lng: 140.036 };
		  
		  
const uluru1 = { lat: -23.344, lng: 119.036 };
	   
	     
	 
	   
        // The location of Uluru
        const uluru = { lat: -20.344, lng: 131.036 };
		
		  
		  
		
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: uluru,
        });
		
		
		
	  
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"                           }
        });
		
		
		  const marker1 = new google.maps.Marker({
          position: uluru1 ,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"                           }
        });
		
		
		  const marker2 = new google.maps.Marker({
          position: uluru2 ,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"                           }
        });
		
		
		 var pathBetween = new google.maps.Polyline({
      path: [uluru1,uluru2],
      strokeColor: '#FFFF00',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
			 var pathBetween1 = new google.maps.Polyline({
      path: [uluru1,uluru],
      strokeColor: '#800080',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
				 var pathBetween2 = new google.maps.Polyline({
      path: [uluru2,uluru],
      strokeColor: '#800080',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
		pathBetween.setMap(map);
		
		pathBetween2.setMap(map);
		pathBetween1.setMap(map);
		
	  }
		
		
      }
	
	
	
	
	
	
	
	
	  if(xq=="Telfer"){
		  if(z=="Olympic dam"){
			  
			  const uluru2 = { lat: -22.344, lng: 130.036 };
		 
		  
	const uluru1 = { lat: -25.344, lng: 119.036 };
	   
	     
	 
	   
        // The location of Uluru
        const uluru = { lat: -20.344, lng: 131.036 };
		
		  
		  
		
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: uluru,
        });
		
		
		
	  
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"                           }
        });
		
		
		  const marker1 = new google.maps.Marker({
          position: uluru1 ,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"                           }
        });
		
		
		  const marker2 = new google.maps.Marker({
          position: uluru2 ,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"                           }
        });
		
		
		 var pathBetween = new google.maps.Polyline({
      path: [uluru1,uluru2],
      strokeColor: '#FFFF00',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
			 var pathBetween1 = new google.maps.Polyline({
      path: [uluru1,uluru],
      strokeColor: '#800080',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
				 var pathBetween2 = new google.maps.Polyline({
      path: [uluru2,uluru],
      strokeColor: '#800080',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
		pathBetween.setMap(map);
		
		pathBetween2.setMap(map);
		pathBetween1.setMap(map);
		
	  }
		
		
      }
	
	
	
	
	
	
	
	
	
	
	
	 if(xq=="Telfer"){
		  if(z=="Anna creek"){
			  
			  const uluru2 = { lat: -28.344, lng: 135.036 };
		   
		  
		const uluru1 = { lat: -25.344, lng: 119.036 };
	   
	     
	 
	   
        // The location of Uluru
        const uluru = { lat: -20.344, lng: 131.036 };
		
		  
		  
		
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: uluru,
        });
		
		
		
	  
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"                           }
        });
		
		
		  const marker1 = new google.maps.Marker({
          position: uluru1 ,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"                           }
        });
		
		
		  const marker2 = new google.maps.Marker({
          position: uluru2 ,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"                           }
        });
		
		
		 var pathBetween = new google.maps.Polyline({
      path: [uluru1,uluru2],
      strokeColor: '#FFFF00',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
			 var pathBetween1 = new google.maps.Polyline({
      path: [uluru1,uluru],
      strokeColor: '#800080',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
				 var pathBetween2 = new google.maps.Polyline({
      path: [uluru2,uluru],
      strokeColor: '#800080',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
		pathBetween.setMap(map);
		
		pathBetween2.setMap(map);
		pathBetween1.setMap(map);
		
	  }
		
		
      }
	
	
	
	
	
	
	
	
	
	
		 if(xq=="Telfer"){
		  if(z=="Durham"){
			  
			  const uluru2 = { lat: -32.344, lng: 140.036 };
		
		  
	const uluru1 = { lat: -25.344, lng: 119.036 };
	   
	     
	 
	   
        // The location of Uluru
        const uluru = { lat: -20.344, lng: 131.036 };
		
		  
		  
		
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: uluru,
        });
		
		
		
	  
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"                           }
        });
		
		
		  const marker1 = new google.maps.Marker({
          position: uluru1 ,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"                           }
        });
		
		
		  const marker2 = new google.maps.Marker({
          position: uluru2 ,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"                           }
        });
		
		
		 var pathBetween = new google.maps.Polyline({
      path: [uluru1,uluru2],
      strokeColor: '#FFFF00',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
			 var pathBetween1 = new google.maps.Polyline({
      path: [uluru1,uluru],
      strokeColor: '#800080',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
				 var pathBetween2 = new google.maps.Polyline({
      path: [uluru2,uluru],
      strokeColor: '#800080',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
		pathBetween.setMap(map);
		
		pathBetween2.setMap(map);
		pathBetween1.setMap(map);
		
	  }
		
		
      }
	
	
	
	
	
	
	
		  if(xq=="Marble Bar"){
		  if(z=="Olympic dam"){
			  
			  const uluru2 = { lat: -22.344, lng: 130.036 };
		 
		  
	const uluru1 = { lat: -20.344, lng: 128.036 };
	   
	     
	 
	   
        // The location of Uluru
        const uluru = { lat: -20.344, lng: 131.036 };
		
		  
		  
		
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: uluru,
        });
		
		
		
	  
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"                           }
        });
		
		
		  const marker1 = new google.maps.Marker({
          position: uluru1 ,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"                           }
        });
		
		
		  const marker2 = new google.maps.Marker({
          position: uluru2 ,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"                           }
        });
		
		
		 var pathBetween = new google.maps.Polyline({
      path: [uluru1,uluru2],
      strokeColor: '#FFFF00',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
			 var pathBetween1 = new google.maps.Polyline({
      path: [uluru1,uluru],
      strokeColor: '#800080',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
				 var pathBetween2 = new google.maps.Polyline({
      path: [uluru2,uluru],
      strokeColor: '#800080',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
		pathBetween.setMap(map);
		
		pathBetween2.setMap(map);
		pathBetween1.setMap(map);
		
	  }
		
		
      }
	
	
	
	
	
	
	
	
	
	
	
	 if(xq=="Marble Bar"){
		  if(z=="Anna creek"){
			  
			  const uluru2 = { lat: -28.344, lng: 135.036 };
		   
		  
		const uluru1 = { lat: -20.344, lng: 128.036 };
	   
	     
	 
	   
        // The location of Uluru
        const uluru = { lat: -20.344, lng: 131.036 };
		
		  
		  
		
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: uluru,
        });
		
		
		
	  
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"                           }
        });
		
		
		  const marker1 = new google.maps.Marker({
          position: uluru1 ,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"                           }
        });
		
		
		  const marker2 = new google.maps.Marker({
          position: uluru2 ,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"                           }
        });
		
		
		 var pathBetween = new google.maps.Polyline({
      path: [uluru1,uluru2],
      strokeColor: '#FFFF00',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
			 var pathBetween1 = new google.maps.Polyline({
      path: [uluru1,uluru],
      strokeColor: '#800080',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
				 var pathBetween2 = new google.maps.Polyline({
      path: [uluru2,uluru],
      strokeColor: '#800080',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
		pathBetween.setMap(map);
		
		pathBetween2.setMap(map);
		pathBetween1.setMap(map);
		
	  }
		
		
      }
	
	
	
	
	
	
	
	
	
	
		 if(xq=="Marble Bar"){
		  if(z=="Durham"){
			  
			  const uluru2 = { lat: -32.344, lng: 140.036 };
		
		  
	const uluru1 = { lat: -20.344, lng: 128.036 };
	   
	     
	 
	   
        // The location of Uluru
        const uluru = { lat: -20.344, lng: 131.036 };
		
		  
		  
		
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: uluru,
        });
		
		
		
	  
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"                           }
        });
		
		
		  const marker1 = new google.maps.Marker({
          position: uluru1 ,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"                           }
        });
		
		
		  const marker2 = new google.maps.Marker({
          position: uluru2 ,
          map: map,
		  icon: {                             
  url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"                           }
        });
		
		
		 var pathBetween = new google.maps.Polyline({
      path: [uluru1,uluru2],
      strokeColor: '#FFFF00',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
			 var pathBetween1 = new google.maps.Polyline({
      path: [uluru1,uluru],
      strokeColor: '#800080',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
				 var pathBetween2 = new google.maps.Polyline({
      path: [uluru2,uluru],
      strokeColor: '#800080',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
		
		
		pathBetween.setMap(map);
		
		pathBetween2.setMap(map);
		pathBetween1.setMap(map);
		
	  }
		
		
      }
	
	
	
	
	  }
	
	
