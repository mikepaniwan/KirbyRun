#pragma strict

var hp = 3;
var BG : GameObject;
var Explosion : Transform;
var audioExplosion : AudioSource;

function Start() {
	
}

function Update () {

}

function Fired() {
	hp -= 1;
	if(hp == 0){
		audioExplosion.Play();
		Instantiate (Explosion, Vector3(transform.position.x, transform.position.y, 0), Quaternion.identity);
		Destroy(this.gameObject);
		Destroy(GameObject.Find("Explosion"));
	}
}

function OnCollisionEnter2D(coll : Collision2D) {
	if(coll.gameObject.tag == "Player") {
		BG = GameObject.Find("_BG");
		BG.gameObject.SendMessage("EndGame");
	}
}