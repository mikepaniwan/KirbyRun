#pragma strict

var iceStyle : GUISkin;
var scoreGame : float = 0;

function Update() {
	scoreGame += 1;
}

function OnGUI() {
	GUI.skin = iceStyle;
	GUI.Label(new Rect(0,0,200,100),"Score: " + scoreGame);
}