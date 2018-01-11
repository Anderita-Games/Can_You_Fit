#pragma strict

function OnCollisionStay(col : Collision) {
	
	if (col.collider.name == "Player") {
		PlayerPrefs.SetInt("GameOver", 1);
	}
	if (col.collider.name == "Ground") {
		yield WaitForSeconds (1);
		Destroy (gameObject);
	}
	if (PlayerPrefs.GetInt("GameOver") == 1) {
		Destroy (gameObject);
	}
}