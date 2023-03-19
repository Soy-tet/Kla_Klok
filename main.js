function random(){
    var tiger = document.getElementById("tiger");
    var guard = document.getElementById("guard");
    var chicken = document.getElementById("chicken");
    var loster = document.getElementById("loster");
    var crab = document.getElementById("crab");
    var fish = document.getElementById("fish");

    var array = ["tiger","guard", "chicken", "loster", "crab","fish"];
    var select = Math.floor(Math.random()*6);
    var select2 = Math.floor(Math.random()*6);
    var select3 = Math.floor(Math.random()*6);
    var tiger2 = "url(https://media.istockphoto.com/id/1218181961/vector/blue-crab-in-watercolor-style.jpg?s=170667a&w=0&k=20&c=3wzqW8EZU3vApf_RH29STAc-BD4OFFmuQoCrhvs6gjU=)";
    var guard2 = "url(https://i.ebayimg.com/images/g/bwIAAOSw-aliaKEO/s-l500.jpg)";
    var chicken2 = "url(https://img.freepik.com/free-vector/cute-chicken-chef-holding-fried-chicken-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-3132.jpg?w=2000)";
    var loster2 = "url(https://t3.ftcdn.net/jpg/03/61/43/86/360_F_361438655_qHRf82mnNvKFU0PwxOkAevO9RSzxF7ov.jpg)";
    var crab2 = "url(https://t3.ftcdn.net/jpg/03/61/43/86/360_F_361438655_qHRf82mnNvKFU0PwxOkAevO9RSzxF7ov.jpg)";
    var fish2 = "url(https://aquaorinoco.com/16119/cirrhilabrus-rubrisquamis-red-velvet-fairy-wrasse.jpg)";
    var array2 = [tiger2,guard2,chicken2,loster2,crab2,fish2];
    var echo1 = array2[select];
    var echo2 = array2[select2];
    var echo3 = array2[select3];
    var answer1 = document.getElementById("num1").style.backgroundImage=echo1;
    var answer2 = document.getElementById("num2").style.backgroundImage=echo2;
    var answer3 = document.getElementById("num3").style.backgroundImage=echo3;
}