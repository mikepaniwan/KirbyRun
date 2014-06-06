#pragma strict

var x = 0;
var y = 0;
var prefab : Transform;
var prefab2 : Transform;
var bcamera : Camera;

function Start(){
	InvokeRepeating("Gen", 2, 2);
}

function Update () {
	
}

function Gen(){
	Debug.Log("Hi");
	x = Random.Range(0,3);
	WaitForSeconds(x);
	//camera.transform.position.x;
	var px = bcamera.transform.position.x;
	//Debug.Log()
	y = Random.Range(0,2);
	if(y == 0)
		Instantiate (prefab, Vector3(px + 10f, -6.417644f, 0), Quaternion.identity);
	else if( y == 1 ){
		Instantiate (prefab2, Vector3(px + 10f, 2.125208, 0), Quaternion.identity);
	}
	
}