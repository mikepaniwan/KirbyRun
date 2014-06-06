#pragma strict

function OnTriggerEnter2D (collider : Collider2D) {
	if(collider.tag == "Obstracle") {
		//Debug.Log("Ice");
		Destroy(collider.gameObject);
	}
	var boxMap : BoxCollider2D = collider;
	collider.transform.position.x += 6 * (boxMap.size.x-0.6f);
}