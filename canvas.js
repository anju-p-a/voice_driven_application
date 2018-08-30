
var moveHorizontal = 0
var moveVertical = 0
var scale = 50
var size = 1
// Above parameters are used in changing the position ans size of circle

function circle(commandPassed) {
  switch(commandPassed) {
    case "draw":
        drawCircle()
        break;

    default: changeCircle(commandPassed)
    break;

}}
//applying the transformation as  per commanf
function transform(commandPassed,context) {

  switch(commandPassed) {
  case "down" :
      moveHorizontal = moveHorizontal + scale
      context.transform(1,0,0,1,0,moveHorizontal)
      break;
  case "up" :
      moveHorizontal = moveHorizontal - scale
      context.transform(1,0,0,1,0,moveHorizontal)
      break;
  case "left" :
      moveVertical = moveVertical - scale
      context.transform(1,0,0,1,moveVertical,0)
      break;
  case "right":
     moveVertical = moveVertical + scale
     context.transform(1,0,0,1,moveVertical,0)
     break;
  case "big":
     size = size + 0.5
     context.transform(size,0,0,size,0,0)
     break;
  case "small" :
    size = size - 0.5
    context.transform(size,0,0,size,0,0)
    break;

  default:
}}
function drawCircle() {
  var myCanvas = document.getElementById('canvaslayout')
   var context = myCanvas.getContext('2d')
   context.setTransform(1,0,0,1,0,0) // resets it back to original
  context.clearRect(0,0,myCanvas.width,myCanvas.height)//clears the canvas of the previous drawing
   // x,y,r start angle,end angle, false is optional ,by default clockwise arc
   context.beginPath()

    context.arc(100,100,35,0, 360,false)
   context.stroke()

}
function changeCircle(commandPassed) {
  var myCanvas = document.getElementById('canvaslayout')
   var context = myCanvas.getContext('2d')

    context.clearRect(0,0,myCanvas.width,myCanvas.height)
    context.beginPath()
   // last two for horizontal and vertical movement
   //first two for  horizontal scaling and skewing (making it slanted)
   //last two for verical scaling and skewing
   transform(commandPassed,context)
   context.arc(100,100,35,0, 360,false)
   context.stroke()
   context.save()
}
