var SpeechRecognition=window.webkitSpeechRecognition;

 var speech=new SpeechRecognition();

 console.log("speech");

 function Start() {
    document.getElementById("textbox").innerHTML="";
     speech.start();
     }
     speech.onresult=function (event) {
       var speech1=event.results[0][0].transcript;
       document.getElementById("textbox").innerHTML=speech1;  
       console.log(speech1);
         if(speech1=="take my selfie") {
           console.log("taking the selfie---------")
             speak();
         }

     }

     
    
     function speak() {
       var synth =window.speechSynthesis;

       speak_data="Taking your Selfie in 5 seconds";

       var utterThis=new SpeechSynthesisUtterance(speak_data);

       synth.speak(utterThis);

       Webcam.attach(camera);

     setTimeout(function(){
     take_snapshot();
     save();
     },5000);
     }
     
     camera=document.getElementById("camera")
    Webcam.set({
      width:360,
      height:250,
      image_format :'png',
      png_quality:90
    });

    function take_snapshot() {
      Webcam.snap(function(data_uri) {
        document.getElementById("display").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
      });
    }
    
    function save() {
      link=document.getElementById("link");
      image=document.getElementById("selfie_image").src;
      link.href=image;
      link.click();

    }