const xhr = new XMLHttpRequest();
xhr.open("GET" ,"https://restcountries.com/v2/all");
xhr.send();
xhr.responseType="json";
xhr.onload = function displayResult(){
    const flag = xhr.response;
    console.log("show all flag:" ,flag);
    console.log("countriesflag" , flag(png))
}