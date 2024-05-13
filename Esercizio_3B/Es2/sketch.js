let posizioneX, posizioneY
let velX, velY

function setup() {
	createCanvas(windowWidth, windowHeight)

	posizioneX = width/2
	posizioneY = height/2

	velX=15
	velY=8

}
function windowResized () {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {

	background(200)
	circle(posizioneX, posizioneY, 30)

	posizioneX = posizioneX + velX
	posizioneY = posizioneY + velY

	if(posizioneX >= width) {
		velX= -velX
	}
	if(posizioneX < 0){
		velX= -velX
	}


	if(posizioneY >= width) {
		velY= -velY
	}
	if(posizioneY < 0){
		velY= -velY
	}
}