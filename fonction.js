$( document ).ready(function() {
    console.log( "ready!" );

    var peau = ["assets/img/peau0.png", "assets/img/peau1.png" , "assets/img/peau2.png" ];
    var peauPosition = 0;
    $('#BoutonPeau').mousedown(function (){
    	peauPosition++
    	if (peauPosition==3) {
    		peauPosition=0	
    	}	
    $('#peau').attr("src", peau[peauPosition])
    });



    var bouche = ["assets/img/bouche0.png","assets/img/bouche1.png","assets/img/bouche2.png","assets/img/bouche3.png","assets/img/bouche4.png",]
    var bouchePosition = 0;
    $('#BoutonBouche').mousedown(function (){
    	bouchePosition++
    	if (bouchePosition==5) {
    		bouchePosition=0	
    	}	
    $('#bouche').attr("src", bouche[bouchePosition])
    });



    var hair = ["assets/img/hair0.png","assets/img/hair1.png","assets/img/hair2.png","assets/img/hair3.png","assets/img/hair4.png","assets/img/hair5.png",]
    var hairPosition = 0;
    $('#BoutonHair').mousedown(function (){
    	hairPosition++
    	if (hairPosition==6) {
    		hairPosition=0	
    	}	
    $('#hair').attr("src", hair[hairPosition])
    });



    var hairG = ["assets/img/hairG0.png","assets/img/hairG1.png","assets/img/hairG2.png","assets/img/hairG3.png",]
    var hairGPosition = 0;
    $('#BoutonHairG').mousedown(function (){
    	hairGPosition++
    	if (hairGPosition==4) {
    		hairGPosition=0	
    	}
    $('#hairG').attr("src", hairG[hairGPosition])
    });



    var cornes = ["assets/img/cornes0.png","assets/img/cornes1.png","assets/img/cornes2.png","assets/img/cornes3.png",]
    var cornesPosition = 0;
    $('#BoutonCornes').mousedown(function (){
    	cornesPosition++
    	if (cornesPosition==4) {
    		cornesPosition=0	
    	}	
    $('#cornes').attr("src", cornes[cornesPosition])
    });



    var veste = ["assets/img/veste0.png","assets/img/veste1.png","assets/img/veste2.png","assets/img/veste3.png",]
    var vestePosition = 0;
    $('#BoutonVeste').mousedown(function (){
    	vestePosition++
    	if (vestePosition==4) {
    		vestePosition=0	
    	}	
    $('#veste').attr("src", veste[vestePosition])
    });    



    // création d'un bouton aléatoire
    $('#BoutonRandom').mousedown(function(){
    	peauPosition= Math.floor(Math.random()*3)
    	$('#peau').attr("src", peau[peauPosition])
    	bouchePosition= Math.floor(Math.random()*5)
    	$('#bouche').attr("src", bouche[bouchePosition])
    	hairPosition= Math.floor(Math.random()*6)
    	$('#hair').attr("src", hair[hairPosition])
    	hairGPosition= Math.floor(Math.random()*4)
    	$('#hairG').attr("src", hairG[hairGPosition])
    	cornesPosition= Math.floor(Math.random()*4)
    	$('#cornes').attr("src", cornes[cornesPosition])
    	vestePosition= Math.floor(Math.random()*4)
    	$('#veste').attr("src", veste[vestePosition])
    });


$("body").mousemove(function(event) {
  var eye = $(".eye");
  var x = (eye.offset().left) + (eye.width() / 2);
  var y = (eye.offset().top) + (eye.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 180;
  eye.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});




    // petit code pour récupérer la position de la souris 
    $(document).ready(function(){
    $(document).mousemove(function(event){ 
    $("span").text("X: " + event.pageX + ", Y: " + event.pageY);
    });
});
});


// []
