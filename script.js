function beforesubmit(){
    
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("inputdate.value",inputdate.value);// in string so convert to locale

    let formattedDate = new Date(inputdate.value).toLocaleDateString(en-IN);
    outputdate.value = formattedDate;
    
  
}