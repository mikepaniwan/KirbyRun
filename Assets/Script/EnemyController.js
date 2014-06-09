#pragma strict

var hp = 3;
var BG : GameObject;
var Explosion : Transform;
var audioExplosion : AudioSource;
var turn : boolean = false;

function Start() {
	
}

function Update () {
	if(Input.GetMouseButtonDown(0))
    {
        turn = true;
    }
 
    if(Input.GetMouseButtonUp(0))
    {
        turn = false;
    }
 
  
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