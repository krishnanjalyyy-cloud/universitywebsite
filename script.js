function showMessage(){
	alert("Application form coming soon!");
}
let index = 0;

function showSlides()
{
let i;

let slides = document.getElementsByClassName("slides");

for(i = 0; i < slides.length; i++)
{
slides[i].style.display = "none";
}

index++;

if(index > slides.length)
{
index = 1;
}

slides[index-1].style.display = "block";

setTimeout(showSlides, 2000);
}

showSlides();