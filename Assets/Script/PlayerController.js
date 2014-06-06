#pragma strict

var ice : CircleCollider2D;
var animator : Animator;
var prefabBullet : Transform;
var spawned : boolean = false;
var decay : float;
var BG : GameObject;

function Start() {
	ice = this.collider2D;
	animator = this.GetComponent(Animator);
}

function Update () {
	Reset();
	if(rigidbody2D.velocity.y == 0){
		if(Input.GetKey(KeyCode.UpArrow)) {
			animator.SetInteger("Activity",2);
			rigidbody2D.velocity.y = 20f; 
		}
		else if(Input.GetKey(KeyCode.DownArrow)) {
			Debug.Log(transform.localScale.y);
			animator.SetInteger("Activity",1);
			ice.radius = 0.3;
		}
		else  {
			animator.SetInteger("Activity",0);
			ice.radius = 0.65; 
		}
	}
	if(Input.GetKey(KeyCode.Space) && !spawned) {
			decay = 1f;
    		spawned = true;
			Instantiate (prefabBullet, Vector3(transform.position.x+1.0f, transform.position.y, 0), Quaternion.identity);
			animator.SetInteger("Activity",3);
	}
}

function Reset()
{
    if(spawned && decay > 0)
    {
       decay -= 0.1f;
    }
    if(decay < 0)
    {
       decay = 0;
       spawned = false;
    }
}

function OnTriggerEnter2D(coll: Collider2D) {
	if (coll.gameObject.tag == "Coin"){
		Destroy(coll.gameObject);
	 	BG.gameObject.SendMessage("AddScore");
	}else if(coll.gameObject.name == "EndGround") {
		BG.gameObject.SendMessage("EndGame");
	}
	else if(coll.gameObject.tag == "SlideNext") {
		rigidbody2D.velocity.x = 10f;
	}
}