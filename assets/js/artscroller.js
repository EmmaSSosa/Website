var modal=document.getElementById('myModal');var span=document.getElementsByClassName("close")[0];span.onclick=function(){ 
modal.style.display="none"}
window.onclick=function(event){if(event.target==modal){modal.style.display="none"}}
var images=document.querySelectorAll('.scrolled');var modalImg=document.getElementById("img01");var captionText=document.getElementById("caption");for(var i=0;i<images.length;i++){images[i].onclick=function(){modal.style.display="block";modalImg.src=this.src;modalImg.alt=this.alt;captionText.innerHTML=this.alt}}