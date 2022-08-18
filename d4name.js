const abc= new XMLHttpRequest();
abc.open("GET" , "https://restcountries.com/v2/all");
abc.send();
abc.responseType ="json";
abc.onload= function displayResult(){
    const latlng=abc.response;
    console.log("show all reqion:", latlng[2])
    console.log("show all subregion:" , latlng.subregion)
}