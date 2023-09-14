function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/BLDmr_1Ig/model.json",modelready)
}
function modelready(){
    classifier.classify(gotresult)
}
function gotresult(error,result){
    if (error) {
        console.error(error)
    } else {
        console.log(result)
        document.getElementById("resultlabel").innerHTML="I can hear-"+result[0].label
        document.getElementById("resultaccuracy").innerHTML="accuracy-"+(result[0].confidence*100).toFixed(2)+"%"
        randomr=Math.floor(Math.random()*255)+1
        randomg=Math.floor(Math.random()*255)+1
        randomb=Math.floor(Math.random()*255)+1
        document.getElementById("resultlabel").style.color="rgb("+randomr+","+randomg+","+randomb+")"
        document.getElementById("resultaccuracy").style.color="rgb("+randomr+","+randomg+","+randomb+")"
        img1=document.getElementById("ear")
        
        if (result[0].label=="dog") {
            img1.src="dog.png"
           
        } else if(result[0].label=="cat"){
            img1.src="cat.jpg"
            
        }
    }
}
