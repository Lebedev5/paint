const cnv = document.getElementById('canvas'),
	  ctx = cnv.getContext('2d');

cnv.setAttribute('width', getComputedStyle(cnv).width);
cnv.setAttribute('height', getComputedStyle(cnv).height);


cnv.onmousedown = function(event){
	ctx.beginPath();
	ctx.strokeStyle = "rgb(" + (Math.random() * 1000 % 256) + ", " + (Math.random() * 1000 % 256) + ", " + (Math.random() * 1000 % 256) + ")";
	ctx.moveTo(event.pageX - parseInt(getComputedStyle(cnv).left) - 2, event.pageY - parseInt(getComputedStyle(cnv).top) - 2); // -2 is the border-left and -right


	document.onmousemove = function(event){
		ctx.lineTo(event.pageX - parseInt(getComputedStyle(cnv).left) - 2, event.pageY - parseInt(getComputedStyle(cnv).top) - 2);
		ctx.stroke();
	}

	
	document.onmouseup = function(){
		document.onmousemove = null;
	}

};