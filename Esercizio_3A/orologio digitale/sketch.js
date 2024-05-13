function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(100,120,180)

	let s = second()
	if(s < 10){
		s= "0" + s
	}

	let m = minute()
	if(m < 10){
		m= "0" + m
	}


	let h = hour()
	if(h < 10){
		h= "0" + h
	}

//
	let txt = h + ":" + m + ":" + s
//

	rect(0, height/3 * 0, second () / 60 * width, height/3) 
	rect (0, height/3 * 1, minute() / 60 * width, height/3) 
	rect(0, height/3 * 2, hour () / 24 * width, height/3)


	textAlign(CENTER, CENTER)
	textSize(100)
	fill(190,100,100)
	noStroke(0)



	text(txt, width/2, height/2)


}