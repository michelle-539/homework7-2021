var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML=video.volume * 100 +"%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skipping ahead");
	
	if (video.currentTime > 67.453967) {
		video.currentTime = 0
		video.play()
	} 
	else {video.currentTime += 15
		video.play()
	}
	console.log("Current location is " +video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	volumeValue = document.querySelector("#mute").value
	if (volumeValue = video.muted) {
		document.querySelector("#mute").innerHTML="Mute"
		video.muted=false
		
	}

	else {
		document.querySelector("#mute").innerHTML="Unmute"
		video.muted=true
	}
});

	

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Removing CSS");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Adding CSS");
	video.classList.remove("oldSchool")
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *=0.95
	console.log("New speed is "+video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /=0.95
	console.log("New speed is "+video.playbackRate)
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing volume");
	console.log(this.value)
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML=video.volume * 100 +"%"
});

