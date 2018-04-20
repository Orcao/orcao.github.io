const renscore_ap_threshhold = [0,88,163,211,252,293,334,375,416,457,470];
const renscore_ap_bonus = [0,2,4,6,8,10,12,14,16,18,20];

const renscore_dr_threshhold = [0,68,123,191,232,272,313,354,395,436,463,470,477,484,491,497,504,511,518,525,532,538,545,552,557,566,572,579,586,593,600,606,613,620,627,634,641,647];
const renscore_dr_bonus = [0,1,2,3,4,5,6,7,8,9,10,15,20,25,30,35,40,45,50,55,60,65,70,75,85,90,100,105,115,120,125,130,135,145,150,155,160,165];

const ap_threshhold = [0,100,140,170,184,209,235,245,249,253,257,261,265,269,273,277,281,285,289,293,297,301,305,309];
const ap_bonus = [0,5,10,15,20,30,40,48,57,69,83,101,122,137,142,148,154,160,167,174,181,188,196,200];

const dp_threshhold = [0,203,211,218,226,233,241,248,256,263,271,278,286,293,301,309,316,324,331,339,346]; 
const dp_bonus = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function getCurrentRenAPBonus(MAP,AwAP,DP){
    var renownscore = ((MAP + AwAP)/2) + DP;
    var index = 0;
    for(index = 0, len = arr.length; index < len && renscore_ap_threshhold[index] < renownscore; index++){
    }
    return renscore_ap_bonus[index];
}

function test(){
    document.getElementById("t1").innerHTML = getCurrentRenAPBonus(0,0,0);
    document.getElementById("t2").innerHTML = getCurrentRenAPBonus(171,172,224);
    document.getElementById("t3").innerHTML = getCurrentRenAPBonus(650,650,650);
    document.getElementById("t4").innerHTML = "TEST VALUES";
}