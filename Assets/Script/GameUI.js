#pragma strict

var iceStyle : GUISkin;
var scoreGame : float = 0;
var PlayerObject : GameObject;
static var turn : boolean = false;

function Update() {
	scoreGame += 1;

}

function OnGUI() {
	GUI.skin = iceStyle;
	GUI.Label(new Rect(0,0,200,100),"Score: " + scoreGame);
	
	if(GUI.Button(new Rect(0,Screen.height-Screen.height/5,Screen.width/4,Screen.height/5),"Jump")) {
		if(PlayerObject.rigidbody2D.velocity.y == 0)
			PlayerObject.gameObject.SendMessage("Jumping");
			turn = true;
	}else {
		turn = false;
	}
	
	if(GUI.RepeatButton(new Rect(Screen.width-Screen.width/4,Screen.height-Screen.height/5,Screen.width/4,Screen.height/5),"Slide")) {
		if(PlayerObject.rigidbody2D.velocity.y == 0)
			PlayerObject.gameObject.SendMessage("Slider");
			turn = true;
	}
	else {
		turn = false;
	}
	
}

function AddScore() {
	scoreGame += 300;
}

function EndGame() {
	PlayerPrefs.SetInt("PlayerScore",scoreGame);
	Application.LoadLevel("EndGame");
}