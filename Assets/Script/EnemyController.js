#pragma strict

var hp = 3;
var BG : GameObject;

function Update () {

}

function Fired() {
	hp -= 1;
	if(hp == 0){
		Destroy(this.gameObject);
	}
}

function OnCollisionEnter2D(coll : Collision2D) {
	if(coll.gameObject.tag == "Player") {
		BG = GameObject.Find("_BG");
		BG.gameObject.SendMessage("EndGame");
	}
}