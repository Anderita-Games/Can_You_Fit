#pragma strict

function Start () {
	
}

function Update () {
	if (Input.GetKey (KeyCode.RightArrow)) {
		GetComponent.<Rigidbody>().velocity.x = 8;
	}else if (Input.GetKey (KeyCode.LeftArrow)) {
		GetComponent.<Rigidbody>().velocity.x = -8;
	}else {
		GetComponent.<Rigidbody>().velocity.x = 0;
	}

	if (Input.GetMouseButton(0)) {
		if (Input.mousePosition.x - (Screen.width / 2) > 0) {
			GetComponent.<Rigidbody>().velocity.x = 8;
		}else if (Input.mousePosition.x - (Screen.width / 2) < 0) {
			GetComponent.<Rigidbody>().velocity.x = -8;
		}else {
			GetComponent.<Rigidbody>().velocity.x = 0;
		}
	}

	if (transform.position.y < -8.75) {
		if (PlayerPrefs.GetInt("GameOver") == -1) {
			this.gameObject.transform.position.x = 0;
			this.gameObject.transform.position.y = -2.25;
		}else if (PlayerPrefs.GetInt("Restart Cube") == 1) {
			PlayerPrefs.SetInt("GameOver", 1);
			this.gameObject.transform.position.x = 0;
			this.gameObject.transform.position.y = -2.25;
			PlayerPrefs.SetInt("Restart Cube", 0);
		}
	}
}
