#pragma strict
import System.Collections.Generic;

var Game_Status : boolean = false;
var Game_Started : boolean  = false;
var original : GameObject;
var imports = new List.<int>();
var Counter : int;

var Score : int = 0;
var Score_UI : UnityEngine.UI.Text;
var Highscore_UI : UnityEngine.UI.Text;
var Timer_UI : UnityEngine.UI.Text;
var Timer : int;
var Start_UI : GameObject;
var End_UI : GameObject;
var Game_UI : GameObject;

function Start () {
	PlayerPrefs.SetInt("GameOver", -1);
	Game_Status = true;
	Game_Started = false;
	Game_UI.SetActive(false);
	End_UI.SetActive(false);
	Start_UI.SetActive(true);
}

function Update () {
	Score_UI.text = "Score: " + Score.ToString();
	Highscore_UI.text = "HighScore: " + PlayerPrefs.GetInt("HighScore");
	Timer_UI.text = Timer.ToString();
	if (PlayerPrefs.GetInt("GameOver") == 1) {
		Game_Status = false;
		Game_Started = false;
		End_UI.SetActive(true);
	}else if (Score > PlayerPrefs.GetInt("HighScore")) {
		PlayerPrefs.SetInt("HighScore", Score);
	}
}

function StartGame () {
	if (Game_Started == false) {
		PlayerPrefs.SetInt("GameOver", 0);
		PlayerPrefs.SetInt("Restart Cube", 1);
		Game_Status = true;
		Game_Started = true;
		Game_UI.SetActive(true);
		End_UI.SetActive(false);
		Start_UI.SetActive(false);
		Score = 0;
		Timer = 10;
		Spawner();
		TimerSetter();
	}
}

function QuitGame () {
	Application.Quit ();
}

function Spawner () {
	while (Game_Status == true) {
		var Partial : float = 0;
		while (Partial < 10) {
			if (Game_Status == false) {
				return;
			}
			yield WaitForSeconds (.1);
			Partial = Partial + .1;
		}
		var Opening = 8;
		while (Opening > 0 && Game_Status == true) { //CREATING THE BLOCKS
			var Rando = Random.Range(-4,5);
			while(imports.Contains(Rando)) {
				Rando = Random.Range(-4,5);
			}
    		var Spike = Instantiate(original, new Vector3 (Rando, 6.5, 0),  Quaternion.identity);
    		Counter++;
    		Spike.name = "Block #" + Counter;
    		imports.Add (Rando);
    		Opening--;
   		}
		imports.Clear();
		Score++;
		Time.timeScale = 1.0 + Score / 100;
	}
}

function TimerSetter () {
	while (Game_Status == true) {
		if (Timer <= 0) {
			Timer = 10;
		}else {
			Timer--;
		}
		var Partial : float = 0;
		while (Partial < 1) { //BECAUSE I WANNA BREAK THE FUCKING WHILE LOOP!!!!
			if (Game_Status == false) {
				return;
			}
			yield WaitForSeconds (.1);
			Partial = Partial + .1;
		}
	}
}