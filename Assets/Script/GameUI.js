#pragma strict

var iceStyle : GUISkin;
var scoreGame : float = 0;
var PlayerObject : GameObject;

function Update() {
	scoreGame += 1;
}

function OnGUI() {
	GUI.skin = iceStyle;
	GUI.Label(new Rect(0,0,200,100),"Score: " + scoreGame);
	
	if(GUI.Button(new Rect(0,Screen.height-50,100,50),"Jump")) {
		if(PlayerObject.rigidbody2D.velocity.y == 0)
			PlayerObject.gameObject.SendMessage("Jumping");
	}
	
	if(GUI.RepeatButton(new Rect(Screen.width-100,Screen.height-50,100,50),"Slide")) {
		if(PlayerObject.rigidbody2D.velocity.y == 0)
			PlayerObject.gameObject.SendMessage("Slider");
	}
	
}

function AddScore() {
	scoreGame += 300;
}

function EndGame() {
	PlayerPrefs.SetInt("PlayerScore",scoreGame);
	Application.LoadLevel("EndGame");
}