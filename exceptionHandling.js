function demo(){
try{    // Try block will mainly used to TypeError , reference Error and some of the synatx errors
    // var a=10;
    console.log(a());

}
catch(e){
    console.log(e);
}
finally{
    console.log("End of the program")
}
}
demo();
console.log("hello");
