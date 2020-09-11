 const bude = document.body;
 const abv = document.getElementById("abv");
 const heading = document.getElementById("heading");
 const bodie = document.getElementById("bodie");
 const search = document.getElementById("search");
 const result = document.getElementById("result");
 const click = document.getElementById("click");
 const IP = document.getElementById("ip");
 const Lat = document.getElementById("lat");
 const Lng = document.getElementById("lng");
 const status = document.getElementById("status");
 const country = document.getElementById("country");
 const code = document.getElementById("code");
 const city = document.getElementById("city");
 const reg = document.getElementById("reg");
 const regN = document.getElementById("regN");
 const timeZ = document.getElementById("timezone");
 const zip = document.getElementById("zip");
 const isp = document.getElementById("isp");
 const org = document.getElementById("org");
 const rev = document.getElementById("rev");
 const as = document.getElementById("as");
 const mob = document.getElementById("mob");
 const prox = document.getElementById("prox");
 const host = document.getElementById("Host");
 const info = document.getElementById("info");

 const res1 = document.getElementById("res1");
 const res2 = document.getElementById("res2");
 const res3 = document.getElementById("res3");
 const res4 = document.getElementById("res4");
 const res5 = document.getElementById("res5");
 const res6 = document.getElementById("res6");
 const res7 = document.getElementById("res7");
 const res8 = document.getElementById("res8");
 const res9 = document.getElementById("res9");
 const res10 = document.getElementById("res10");
 const res11 = document.getElementById("res11");
 const res12 = document.getElementById("res12");
 const res13 = document.getElementById("res13");
 const res14 = document.getElementById("res14");
 const res15 = document.getElementById("res15");
 const res16 = document.getElementById("res16");
 const res17 = document.getElementById("res17");
 const res18 = document.getElementById("res18");

 const map = document.getElementById("map");

 map.style.position = "relative";
 map.style.right = "0";
 map.style.left = "0";
 map.style.width = "350px";
 map.style.height = "290px";
 map.style.marginBottom = "40px";
 map.style.borderStyle = "solid";
 map.style.borderWidth = "1px";
 map.style.outlineStyle = "none";
 map.style.display = "none";

 function showPOS(position) {
     const latln = position.coords.latitude + "," + position.coords.longitude;

     map.setAttribute("src", "https://www.google.com/maps/embed/v1/view?zoom=14&center=" + latln + "&key=AIzaSyAw5U2ZFFxR0dhiV6ZE8Oi-ecOm2OPX-RU");

 }

 const LoadRequest = new XMLHttpRequest()
 LoadRequest.onreadystatechange = yourLocation;
 LoadRequest.open("GET", "http://ip-api.com/json/?fields=status,lat,lon,proxy,hosting,mobile,isp,org,as,query,country,countryCode,region,regionName,reverse,zip,city,timezone", true);
 LoadRequest.send();

 function yourLocation() {
     if (!navigator.onLine) {
         alert("Network Connection Error");
     } else {
         const loadResult = JSON.parse(LoadRequest.responseText);
         res1.innerHTML = loadResult.query;
         res1.style.color = "#000";
         res2.innerHTML = loadResult.lat;
         res2.style.color = "#000";
         res3.innerHTML = loadResult.lon;
         res3.style.color = "#000";
         res4.innerHTML = loadResult.status;
         res4.style.color = "#000";
         res5.innerHTML = loadResult.country;
         res5.style.color = "#000";
         res6.innerHTML = loadResult.countryCode;
         res6.style.color = "#000";
         res7.innerHTML = loadResult.city;
         res7.style.color = "#000";
         res8.innerHTML = loadResult.region;
         res8.style.color = "#000";
         res9.innerHTML = loadResult.regionName;
         res9.style.color = "#000";
         res10.innerHTML = loadResult.timezone;
         res10.style.color = "#000";
         res11.innerHTML = loadResult.zip;
         res11.style.color = "#000";
         res12.innerHTML = loadResult.isp;
         res12.style.color = "#000";
         res13.innerHTML = loadResult.org;
         res13.style.color = "#000";
         res14.innerHTML = loadResult.as;
         res14.style.color = "#000";
         res15.innerHTML = loadResult.reverse;
         res15.style.color = "#000";
         res16.innerHTML = loadResult.mobile;
         res16.style.color = "#000";
         res17.innerHTML = loadResult.proxy;
         res17.style.color = "#000";
         res18.innerHTML = loadResult.hosting;
         res18.style.color = "#000";

         map.style.display = "block";
         if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition(showPOS);
         }

     }
 }


 bude.style.backgroundColor = "#F8F8F8";
 bude.style.fontStyle = "italic";
 bude.style.fontFamily = "sans-serif";
 bude.style.overflow = "auto";

 abv.style.position = "fixed";
 abv.style.right = "0";
 abv.style.left = "0";
 abv.style.top = "0";
 abv.style.color = "#fff";
 abv.style.backgroundColor = "#1B4DE2";
 abv.style.backgroundAttachment = "fixed";
 abv.style.height = "70px";

 bodie.style.marginTop = "90px";
 bodie.style.position = "fixed";
 bodie.style.right = "0";
 bodie.style.left = "0";

 search.style.borderRadius = "4px";
 search.style.outlineStyle = "none";
 search.style.borderStyle = "solid";
 search.style.borderWidth = "1px";
 search.style.padding = "5px";
 search.style.color = "#2F2F2F";
 search.style.backgroundColor = "#fff";

 click.style.borderRadius = "6px";
 click.style.borderStyle = "solid";
 click.style.borderWidth = "1px";
 click.style.padding = "8px";
 click.style.color = "#F9F9F9";
 click.style.backgroundColor = "#1B4DE2";
 click.style.backgroundAttachment = "scroll";
 click.style.outlineStyle = "none";

 function Colour() {
     click.style.color = "#F9F9F9";
     click.style.backgroundColor = "#1B4DE2";
 }

 function changeColor() {
     click.style.color = "#1B4DE2";
     click.style.backgroundColor = "#F9F9F9";

     const Request = new XMLHttpRequest();
     Request.onreadystatechange = Locate;
     Request.open("GET", "http://ip-api.com/json/" + search.value + "?fields=status,lat,lon,proxy,hosting,mobile,isp,org,as,query,country,countryCode,region,regionName,reverse,zip,city,timezone", true);
     Request.send();

     function Locate() {
         if (!navigator.onLine) {
             alert("Network Connection Error");
         } else {
             setTimeout(Colour, 6000);
             const Result = JSON.parse(Request.responseText);
             res1.innerHTML = Result.query;
             res1.style.color = "#000";
             res2.innerHTML = Result.lat;
             res2.style.color = "#000";
             res3.innerHTML = Result.lon;
             res3.style.color = "#000";
             res4.innerHTML = Result.status;
             res4.style.color = "#000";
             res5.innerHTML = Result.country;
             res5.style.color = "#000";
             res6.innerHTML = Result.countryCode;
             res6.style.color = "#000";
             res7.innerHTML = Result.city;
             res7.style.color = "#000";
             res8.innerHTML = Result.region;
             res8.style.color = "#000";
             res9.innerHTML = Result.regionName;
             res9.style.color = "#000";
             res10.innerHTML = Result.timezone;
             res10.style.color = "#000";
             res11.innerHTML = Result.zip;
             res11.style.color = "#000";
             res12.innerHTML = Result.isp;
             res12.style.color = "#000";
             res13.innerHTML = Result.org;
             res13.style.color = "#000";
             res14.innerHTML = Result.as;
             res14.style.color = "#000";
             res15.innerHTML = Result.reverse;
             res15.style.color = "#000";
             res16.innerHTML = Result.mobile;
             res16.style.color = "#000";
             res17.innerHTML = Result.proxy;
             res17.style.color = "#000";
             res18.innerHTML = Result.hosting;
             res18.style.color = "#000";

             map.style.display = "block";

             const latlon = Result.lat + "," + Result.lon;

             map.setAttribute("src", "https://www.google.com/maps/embed/v1/view?zoom=14&center=" + latlon + "&key=AIzaSyAw5U2ZFFxR0dhiV6ZE8Oi-ecOm2OPX-RU");
         }
     }
 }
 click.onclick = changeColor;

 result.style.marginTop = "200px";
 result.style.marginBottom = "0px";
 result.style.backgroundColor = "#ffffff";
 result.style.borderRadius = "6px";
 result.style.position = "fixed";
 result.style.right = "0";
 result.style.left = "0";
 result.style.color = "#00054B";
 result.style.overflow = "auto";
 result.style.height = "300px";

 heading.style.fontStyle = "italic";
 heading.style.fontFamily = "Sans-serif";
 heading.style.fontStyle = "italic";
 heading.style.fontSize = "30px";
 heading.style.color = "#ffffff";
 heading.style.fontWeight = "5px";

 info.style.cssFloat = "right";
 info.style.marginRight = "20px";
 info.onclick = function() {
     About.style.display = "block";
 }

 const About = document.getElementById("about");
 About.style.position = "fixed";
 About.style.zIndex = "4";
 About.style.backgroundColor = "white";
 About.style.marginTop = "200px";
 About.style.width = "270px";
 About.style.height = "200px";
 About.style.marginLeft = "30px";
 About.style.borderStyle = "solid";
 About.style.borderRadius = "3px";
 About.style.borderColor = "#1B4DE2";
 About.style.display = "none";
 About.style.color = "#040D2F";

 const ok = document.getElementById("ok");
 ok.style.backgroundColor = "#fff";
 ok.style.color = "#1B4DE2";
 ok.style.borderStyle = "solid";
 ok.style.borderColor = "#1B4DE2";
 ok.style.borderRadius = "1px";
 ok.onclick = function() {
     About.style.display = "none";
 }