#pragma strict

var CameraSpeed : float ;

function Start () {
	CameraSpeed = 7f;
}

function Update() {
	transform.position.x += CameraSpeed * Time.deltaTime;
}
