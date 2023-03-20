function random(){
    var tiger5 = document.getElementById("num1").style.backgroundImage="url(https://media.tenor.com/Oc4BMhwjoV0AAAAd/timer-time.gif)";
    var guard5 = document.getElementById("num2").style.backgroundImage="url(https://media.tenor.com/Oc4BMhwjoV0AAAAd/timer-time.gif)";
    var chicken5 = document.getElementById("num3").style.backgroundImage="url(https://media.tenor.com/Oc4BMhwjoV0AAAAd/timer-time.gif)";
    // var loster = document.getElementById("loster");
    // var crab = document.getElementById("crab");
    // var fish = document.getElementById("fish");
setTimeout(() => {
    var array = ["tiger","guard", "chicken", "loster", "crab","fish"];
    var select = Math.floor(Math.random()*6);
    var select2 = Math.floor(Math.random()*6);
    var select3 = Math.floor(Math.random()*6);
    var tiger2 = "url(https://t3.ftcdn.net/jpg/05/64/39/76/360_F_564397616_QVNoMGlbYY1T4NAZFIXKHYu8OROH3QVA.jpg)";
    var guard2 = "url(https://m.media-amazon.com/images/I/612SY+4mhgL._AC_SL1384_.jpg)";
    var chicken2 = "url(https://as1.ftcdn.net/v2/jpg/05/52/99/70/500_F_552997022_T3K4dfb5Ini4N9xaXuK5C7aNJqZWtjPm.jpg)";
    var loster2 = "url(https://cs4.pikabu.ru/post_img/big/2014/08/08/8/1407497474_1637522375.jpg)";
    var crab2 = "url(https://img.freepik.com/premium-photo/beautiful-large-lobster-blue-red-color-bottom-sea_124507-39422.jpg?w=2000)";
    var fish2 = "url(https://us.123rf.com/450wm/waichi2013th/waichi2013th2211/waichi2013th221100477/194212545-watercolor-whale-hand-painted-illustration-animal-watercolor-art-design-for-art-print-decoration.jpg?ver=6)";
    var array2 = [tiger2,guard2,chicken2,loster2,crab2,fish2];
    var echo1 = array2[select];
    var echo2 = array2[select2];
    var echo3 = array2[select3];
    var answer1 = document.getElementById("num1").style.backgroundImage=echo1;
    var answer2 = document.getElementById("num2").style.backgroundImage=echo2;
    var answer3 = document.getElementById("num3").style.backgroundImage=echo3;
    console.log(select);
    console.log(select2);
    console.log(select3);
    var tiger5 = document.getElementById("num1").style.backgroundImage=echo1;
    var guard5 = document.getElementById("num2").style.display=echo2;
    var chicken5 = document.getElementById("num3").style.display=echo3;
}, 9500);

}
// function settime(){
//     setTimeout(()=> {
//         document.getElementById("result").style.display="";
//      }
//      ,3000);
// }