function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(110,140,165)


	translate(width/2, height/2)


	noStroke()
	fill(0)

	push()
	fill(50)
	rotate(TAU / 60 * (hour() %12)+ TAU /12 / 60 * minute())
	rect(-8, 25, 16, -140)
	pop()

	push()
	fill(30)
	rotate(TAU / 60 * minute())
	rect(-10, 25, 20, -170)
	pop()

	push()
	fill(10)
	rotate(TAU / 60 * second())
	rect(-2, 25, 4, -180)
	circle(0,-160,24)
	pop()

	fill(255)
	circle(0, 0, 17)
}

