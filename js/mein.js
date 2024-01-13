let switch_Btn=false



function buy() {
	if (! switch_Btn){
		console.log("gg");
		document.getElementById("disk").style.background="blue";
		document.getElementById("disk").innerHTML="в корзине"
		switch_Btn=true
	}else{
		document.getElementById("disk").style.background="white";
		document.getElementById("disk").innerHTML="дабавить в корзину"
	}
}
