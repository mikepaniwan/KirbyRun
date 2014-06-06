#pragma strict

var ice : CircleCollider2D;
var animator : Animator;
var prefabBullet : Transform;
var spawned : boolean = false;
var decay : float;

function Start() {
	ice = this.collider2D;
	animator = this.GetComponent(Animator);
}

function Update () {
	Reset();
	if(rigidbody2D.velocity.y == 0){
		if(Input.GetKey(KeyCode.Space)) {
			animator.SetInteger("Activity",2);
			rigidbody2D.velocity.y = 20f; 
		}
		else if(Input.GetKey(KeyCode.Z)) {
			Debug.Log(transform.localScale.y);
			animator.SetInteger("Activity",1);
			ice.radius = 0.3;
		}
		else if(Input.GetKey(KeyCode.X) && !spawned) {
			decay = 1f;
    		spawned = true;
			Instantiate (prefabBullet, Vector3(transform.position.x+1.0f, transform.position.y, 0), Quaternion.identity);
			animator.SetInteger("Activity",3);
		}
		else  {
			animator.SetInteger("Activity",0);
			ice.radius = 0.65; 
		}
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