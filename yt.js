var el = document.getElementById("submit");
el.addEventListener("click", function() {
	var url = document.getElementById("url");
	alert(YouTubeGetID(url.value));
}

/*function YouTubeGetID(){
	var url = document.getElementById("url");

	var ID = '';
	url = url.value.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
	if(url[2] !== undefined) {
		ID = url[2].split(/[^0-9a-z_\-]/i);
		ID = ID[0];
	}
	else {
		ID = url;
	}
	//return ID;
	alert(ID);
} */

function YouTubeGetID(url){
  var ID = '';
  url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if(url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  }
  else {
    ID = url;
  }
    return ID;
}
