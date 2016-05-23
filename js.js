$(document).ready(function() {
    var countries = {  
        Bangladesh:{
            Students: "Mohammed, Atiqur, Bibi, Abu, Saleha",
            Flag: "http://cdn.wonderfulengineering.com/wp-content/uploads/2015/07/Bangladesh-Flag-14.jpg",
            Capital:"Dhaka",
            Animal:"Bengal tiger",
            Language:"Bangla",
            Population:"156.6 million", 
        },
         "Dominican Republic":{
            Students: "Nicole, franny,",
            Flag: "http://www.vexillologymatters.org/images/dominican-republic.png",
            Capital:"Santo Domingo",
            Animal:"Ashy-faced Owl",
            Language:"spanish",
            Population:"10.4 million", 
         },
         Yemen :{
            Students: "fardos, raed, mamdou",
            Flag: ":00http://yemenflag.facts.co/yemenflagpicture1.png",
            Capital:"sana'a",
            Animal:"leopard",
            Language:"arabic",
            Population:"24.41 million", 
         },
         Nepal:{
            Students: "sange, dawa",
            Flag:"http://i2.cdn.turner.com/cnnnext/dam/assets/150425145655-nepal-flag-exlarge-169.jpg",
            Capital:"kathmandu",
            Animal:"cow",
            Language:"nepali",
            Population:"27.8 million",
         }
    };
    
    $("#CountriesButton").click(function() {
        var UserSelectedCountry = $("#CountriesInput").val();
        $("#Population").text(countries[UserSelectedCountry].Population);
        $("#Language").text(countries[UserSelectedCountry].Language);
        $("#Capital").text(countries[UserSelectedCountry].Capital);
        $("#ListOfStudents").text(countries[UserSelectedCountry].Students);
        $("#Animal").text(countries[UserSelectedCountry].Animal);
    });
});       