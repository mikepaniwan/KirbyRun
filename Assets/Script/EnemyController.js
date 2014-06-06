#pragma strict

var hp = 3;

function Update () {

}

function Fired() {
	hp -= 1;
	if(hp == 0){
		Destroy(this.gameObject);
	}
}