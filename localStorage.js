window.addEventListener('load',init);

function init(){
	

		if(typeof(Storage) !== "undefined") {
    		// Code for localStorage/sessionStorage.

		} else {
    		alert("Sorry! No Web Storage support...");
		}


	//LOCAL STORAGE

	var localStorageButton = document.getElementById('localStorageButton');
	localStorageButton.addEventListener('click',storageTeam);

	var retrieveLocalStorageButton = document.getElementById('retrieveLocalStorageButton');
	retrieveLocalStorageButton.addEventListener('click',retrieveLocalStorageData);

	//SESSION STORAGE

	var sessionStorageButton = document.getElementById('sessionStorageButton');
	sessionStorageButton.addEventListener('click',storageCity);

	var retrieveSessionStorageButton = document.getElementById('retrieveSessionStorageButton');
	retrieveSessionStorageButton.addEventListener('click',retrieveSessionStorageData);
}

function storageTeam(){
	var selectTeam = document.getElementById('selectTeam').value;

	//Storing the data
	localStorage.setItem("footballTeam", selectTeam);
	document.getElementById("team").innerHTML = "Stored!";
	

}

function retrieveLocalStorageData(){
	// Retrieving the data	
	document.getElementById("team").innerHTML = localStorage.getItem("footballTeam");
	

}


function storageCity(){
	var selectCity = document.getElementById('selectCity').value;

	//Storing the data
	sessionStorage.setItem("city", selectCity);
	document.getElementById("city").innerHTML = "Stored!";

}

function retrieveSessionStorageData(){
	// Retrieving the data	
	document.getElementById("city").innerHTML = sessionStorage.getItem("city");	

}