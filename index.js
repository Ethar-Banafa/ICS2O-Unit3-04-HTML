// JavaScript File
function Area(){
    var base1= document.getElementById("base1");
    var base2= document.getElementById("base2");
    var Height= document.getElementById("height");
    var base1value= +base1.value;
    var base2value= +base2.value;
    var heightvalue= +Height.value
    var submit= ((base1value+base2value)*(heightvalue/2));
    var divsubmit= document.getElementById("divsubmit");
    divsubmit.innerHTML= submit;
}