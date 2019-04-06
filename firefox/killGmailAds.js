/*
Find the Ads that hide inside the email list and delete them
*/

function killAds() {
	var list = document.getElementsByClassName('aKB');

	for (let item of list) {
		item.parentNode.removeChild(item);
		console.log("Deleted Ad: " + item.textContent);
	}

}
killAds();

window.addEventListener('mouseup', killAds);
