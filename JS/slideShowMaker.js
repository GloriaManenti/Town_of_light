//Here I have added an array including the addresses of all images employed for the slideshow
var imageAddresses=["images/image1.png", "images/image2.png","images/image3.png",
"images/image4.jpg","images/image5.png","images/image6.jpg",
"images/image7.png","images/image8.png","images/image9.jpg","images/image10.jpg","images/image11.jpg","images/image12.jpg",
"images/image13.jpg","images/image14.jpg","images/image15.png","images/image16.jpg","images/image17.png","images/image18.jpg"];
var chosenImage=null;
// using a selector to select the image to be changed in the slideshow
chosenImage=document.getElementById("imageSS")
counter=0;

// Here I have provided a function that 

function imageChanger(){
// to start from the beginning if we have reached the last image
	if(counter>(imageAddresses.length-1)){
		counter=0;
	}
	chosenImage.setAttribute("src",imageAddresses[counter])
	chosenImage.setAttribute("height","600px")
	counter=counter+1;
	setTimeout("imageChanger()",2500); 
}

window.onload=imageChanger;
