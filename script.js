function firstLast6(arr) {

    if(arr[0] == 6) {
        return true;
    }

    if(arr[arr.length-1] == 6){
        return true;
    }else{
        return false;
    }
}

function has23 (arr) {
    if (arr[0] == 2 || arr[0] == 3 || arr[0] == 2 || arr[1] == 3) {
        return true;
    }
    return false;
}

/* fix23 */
function fix23 (arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == 2 && arr[i + 1] == 3){
            return arr[i +1]
        }
        return arr;
    }


}

/* countYZ */
function countYZ (str){
    str=str.toLowerCase();
    var num = 0;
    for(var i = 0; i < str.length; i++){
        if (str[i] == " "){
            if (str[i-1] == "y" || str[i-1] == "z"){
                num++;
            }
        }
    }
    if (str[str.length - 1] == "y" || str[str.length - 1] == "z") {
        num++;
    }
    return num;
}


/* endOther */
function endOther (strX, strY){
    strX = strX.toLowerCase();
    strY = strY.toLowerCase();
    if (strY.endsWith(strX) || strX.endsWith(strY)){
        return true;
    } else {
        return false;
    }
}

/* starOut */
function starOut (str){
    var result = "";
    for(var i = 0; i < str.length; i++){
        if (str[i] != "*" && str[i-1] != "*" && str[i+1] != "*"){
            result = result + str[i];
        }
    }
    return result;
}

function getSandwich(str){
    var breadNum = 0;
    for(var i =0; i < str.length; i++)
        if (str.substring(i, i+5) == "bread"){
            breadNum = breadNum + 1;
        } if (breadNum >=2){
            return str.substring((str.indexOf("bread")+5), str.lastIndexOf("bread"));
    } else if (breadNum < 2){
        return "";
    }
}




/* canBalance */
function canBalance (arr){
    var sum1 = 0;
    var sum2 = 0;
    for(var i = 0; i < arr.length; i++){
        sum1 = sum1 + arr[i];
        for(var j = i +1; j < arr.length; j++){
            sum2 = sum2 + arr[j];
        }
        if (sum1 == sum2){
            return true;
        }
        sum2 = 0;
    }
    return false;
}

function countClumps(arr){
    var clump = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == arr[i+1]){
            for(var x = i+1; x < arr.length; x++){
                if(arr[i]==arr[x] && arr[i] !=arr[x+1]){
                    clump = clump+1
                }else{
                    break;
                }
            }
        }
    }
    return clump;
}

function evenlySpaced(a, b, c){
    var large = Math.max(a,b,c);
    var small = Math.min(a,b,c);
    var e = (large + small) / 2;
    if(e == a || e == b || e == c ){
        return true;
    }else{
        return false;
    }
    //if((b - a) == (c - b)){
}




//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}


