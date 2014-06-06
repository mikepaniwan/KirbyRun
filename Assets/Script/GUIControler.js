#pragma strict

var iceStyle : GUISkin;
var playerScore : int;

function Start() {
	playerScore = PlayerPrefs.GetInt("PlayerScore");
}

function OnGUI() {
	GUI.skin = iceStyle;
	GUI.Label(new Rect(Screen.width/2 - 50,20,300,100),"Score: " + playerScore);
	if(GUI.Button(new Rect(Screen.width/2 - 50,Screen.height/2 - 50,100,100),"Retry")) {
		Application.LoadLevel("Gameplay");
		PlayerPrefs.SetInt("PlayerScore",0);
	}
}