/**
 * @author Mani
 */
function myfun()
{
var x= document.getElementById("ig");
var y= 0;
var z= ["Images/1.jpg","Images/ppa.jpg","Images/images.jpg","Images/pad.jpg",
"Images/s.jpg","Images/i.jpg","Images/ix.jpg",
"Images/ii.jpg","Images/inx.jpg","Images/24.jpg"];

function changeimage()
{
	x.setAttribute("src",z[y]);
	y++;
	if(y>=z.length){
	y=0;
	}
}
setInterval(changeimage,2000);
}

window.onload=function()
{
myfun();
};

