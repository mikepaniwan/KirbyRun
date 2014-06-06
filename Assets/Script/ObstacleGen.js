#pragma strict

var prefab : Transform;
var prefab2 : Transform;
var prefab3 : Transform;
var prefab4 : Transform;
var bcamera : Camera;


function Start(){
	InvokeRepeating("Gen", 2, 2);
	InvokeRepeating("GenCoin", 2, 0.3f);
}

function Update () {
	
}

function Gen(){
	Debug.Log("Hi");
	var x = Random.Range(0.1f,2f);
	WaitForSeconds(x);
	//camera.transform.position.x;
	var px = bcamera.transform.position.x;
	//Debug.Log()
	var y = Random.Range(0,3);
	if(y == 0){
		Instantiate (prefab, Vector3(px + 10f, -6.417644f, 0), Quaternion.identity);
	}
	else if( y == 1 ){
		Instantiate (prefab2, Vector3(px + 10f, 3.125208, 0), Quaternion.identity);
	}
	else if( y == 2 ){
	//1.5 - -2.2
		var enemyY = Random.Range(-2.2f,1.5f);
		Instantiate (prefab3, Vector3(px + 10f, enemyY, 0), Quaternion.identity);
	}
}
	
function GenCoin(){
	var px = bcamera.transform.position.x;
	var y = Random.Range(0,2);
	if(y == 0){
		var enemyY = Random.Range(-2.2f,1.5f);
		Instantiate (prefab4, Vector3(px + 10f, enemyY, 0), Quaternion.identity);
	}
}
	
	
