const char = "q"

let reg   = /[a-zA-Z]/g;

if (char.match(reg)){
    console.log("alphabet")
}else if( char >= "0" && char <= "9" ){
    console.log("number")
}else{
    console.log("special char")
}
