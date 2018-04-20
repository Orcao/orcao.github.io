const renscore_ap_threshhold = [0,88,163,211,252,293,334,375,416,457,470];
const renscore_ap_bonus = [0,2,4,6,8,10,12,14,16,18,20];

const renscore_dp_threshhold = [0,68,123,191,232,272,313,354,395,436,463,470,477,484,491,497,504,511,518,525,532,538,545,552,557,566,572,579,586,593,600,606,613,620,627,634,641,647];
const renscore_dp_bonus = [0,1,2,3,4,5,6,7,8,9,10,15,20,25,30,35,40,45,50,55,60,65,70,75,85,90,100,105,115,120,125,130,135,145,150,155,160,165];

const ap_threshhold = [0,100,140,170,184,209,235,245,249,253,257,261,265,269,273,277,281,285,289,293,297,301,305,309];
const ap_bonus = [0,5,10,15,20,30,40,48,57,69,83,101,122,137,142,148,154,160,167,174,181,188,196,200];

const dp_threshhold = [0,203,211,218,226,233,241,248,256,263,271,278,286,293,301,309,316,324,331,339,346]; 
const dp_bonus = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

var renownap_index = 0;
var renowndp_index = 0;
var mhap_index = 0;
var awap_index = 0;
var dp_index = 0;

function getCurrentRenAPIndex(MHAP,AwAP,DP){
    var renownscore = ((MHAP + AwAP)/2) + DP;
    var index = 0;
    for(var len = renscore_ap_threshhold.length; index < len && renscore_ap_threshhold[index] <= renownscore; index++){
    }
    index--;
    return index;
}

function getCurrentRenDPIndex(MHAP,AwAP,DP){
    var renownscore = ((MHAP + AwAP)/2) + DP;
    var index = 0;
    for(var len = renscore_dp_threshhold.length; index < len && renscore_dp_threshhold[index] <= renownscore; index++){
    }
    index--;
    return index;
}

function getCurrentAPIndex(AP){
    var index = 0;
    for(var len = ap_threshhold.length; index < len && ap_threshhold[index] <= AP; index++){
    }
    index--;
    return index;
}

function getCurrentDPIndex(DP){
    var index = 0;
    for(var len = dp_threshhold.length; index < len && dp_threshhold[index] <= DP; index++){
    }
    index--;
    return index;
}


function updateIndices(MHAP,AwAP,DP){
    renownap_index = getCurrentRenAPIndex(MHAP,AwAP,DP);
    renowndp_index = getCurrentRenDPIndex(MHAP,AwAP,DP);
    mhap_index = getCurrentAPIndex(MHAP);
    awap_index = getCurrentAPIndex(AwAP);
    dp_index = getCurrentDPIndex(DP);
}

function updateDoc(){
    var MHAP = document.getElementById("MHAP").valueAsNumber;
    var AwAP = document.getElementById("AwAP").valueAsNumber;
    var DP = document.getElementById("DP").valueAsNumber;
    updateIndices(MHAP,AwAP,DP);

    //Previous Tier Values
    var temp_index =((renownap_index <= 0) ? 0 : (renownap_index - 1));
    document.getElementById("preRAPThr").innerHTML = renscore_ap_threshhold[temp_index];
    document.getElementById("preRAPB").innerHTML = renscore_ap_bonus[temp_index];
    
    temp_index =((mhap_index <= 0) ? 0 : (mhap_index - 1));
    document.getElementById("preMHAPThr").innerHTML = ap_threshhold[temp_index];
    document.getElementById("preMHAPB").innerHTML = ap_bonus[temp_index];
    
    temp_index =((awap_index <= 0) ? 0 : (awap_index - 1));
    document.getElementById("preAwAPThr").innerHTML = ap_threshhold[temp_index];
    document.getElementById("preAwAPB").innerHTML = ap_bonus[temp_index];
    
    temp_index =((renowndp_index <= 0) ? 0 : (renowndp_index - 1));
    document.getElementById("preRDPThr").innerHTML = renscore_dp_threshhold[temp_index];
    document.getElementById("preRDPB").innerHTML = renscore_dp_bonus[temp_index];
    
    temp_index =((dp_index <= 0) ? 0 : (dp_index - 1));
    document.getElementById("preDPThr").innerHTML = dp_threshhold[temp_index];
    document.getElementById("preDPB").innerHTML = dp_bonus[temp_index]+"%";

    //Current Tier Values
    document.getElementById("curRAPThr").innerHTML = renscore_ap_threshhold[renownap_index];
    document.getElementById("curRAPB").innerHTML = renscore_ap_bonus[renownap_index];
    document.getElementById("curMHAPThr").innerHTML = ap_threshhold[mhap_index];
    document.getElementById("curMHAPB").innerHTML = ap_bonus[mhap_index];
    document.getElementById("curAwAPThr").innerHTML = ap_threshhold[awap_index];
    document.getElementById("curAwAPB").innerHTML = ap_bonus[awap_index];
    document.getElementById("curRDPThr").innerHTML = renscore_dp_threshhold[renowndp_index];
    document.getElementById("curRDPB").innerHTML = renscore_dp_bonus[renowndp_index];
    document.getElementById("curDPThr").innerHTML = dp_threshhold[dp_index];
    document.getElementById("curDPB").innerHTML = dp_bonus[dp_index]+"%";

    //Next Tier Values
    //Previous Tier Values
    var temp_index =((renownap_index + 1 >= renscore_ap_threshhold.length) ? 0 : (renownap_index + 1));
    document.getElementById("nexRAPThr").innerHTML = renscore_ap_threshhold[temp_index];
    document.getElementById("nexRAPB").innerHTML = renscore_ap_bonus[temp_index];
    
    temp_index =((mhap_index + 1 >= ap_threshhold.length) ? 0 : (mhap_index + 1));
    document.getElementById("nexMHAPThr").innerHTML = ap_threshhold[temp_index];
    document.getElementById("nexMHAPB").innerHTML = ap_bonus[temp_index];
    
    temp_index =((awap_index + 1 >= ap_threshhold.length) ? 0 : (awap_index + 1));
    document.getElementById("nexAwAPThr").innerHTML = ap_threshhold[temp_index];
    document.getElementById("nexAwAPB").innerHTML = ap_bonus[temp_index];
    
    temp_index =((renowndp_index + 1 >= renscore_dp_threshhold.length) ? 0 : (renowndp_index + 1));
    document.getElementById("nexRDPThr").innerHTML = renscore_dp_threshhold[temp_index];
    document.getElementById("nexRDPB").innerHTML = renscore_dp_bonus[temp_index];
    
    temp_index =((dp_index + 1 >= dp_threshhold.length) ? 0 : (dp_index + 1));
    document.getElementById("nexDPThr").innerHTML = dp_threshhold[temp_index];
    document.getElementById("nexDPB").innerHTML = dp_bonus[temp_index]+"%";
}