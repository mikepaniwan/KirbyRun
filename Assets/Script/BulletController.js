#pragma strict

function Update () {
	rigidbody2D.velocity.x = 30f;
}

function OnCollisionEnter2D(coll: Collision2D) {
//	if (coll.gameObject.tag == "Enemy")
//		coll.gameObject.SendMessage("ApplyDamage", 10);
	if(coll.gameObject.tag == "Obstracle" || coll.gameObject.tag == "Enemy"){
		Destroy(this.gameObject);
//		Debug.Log("true");
		if(coll.gameObject.tag == "Enemy"){
			Debug.Log("true");	
			coll.gameObject.SendMessage("Fired");
		}
	}
}