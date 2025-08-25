const countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

const daysAway = () => {
    let days = [];
    for (i=1; i<=100 ; i++) {
        days.push(i)
    }
    return days
};

const hotelStars = [1,2,3,4,5];

const holidayActivities = [
  "Go ice skating",
  "Visit a beach",
  "Hike a scenic trail",
  "Take a city walking tour",
  "Go camping under the stars",
  "Visit a museum or gallery",
  "Have a picnic in the park",
  "Decorate for the holidays",
  "Host a BBQ",
  "Do a digital detox day",
  "Go skiing or snowboarding",
  "Attend a local festival",
  "Try a new cuisine",
  "Relax at a spa or hot spring",
  "Visit a national park",
  "Explore a new town or village",
  "Go on a road trip",
  "Take a cooking class",
  "Do yoga on the beach or in nature",
  "Watch fireworks",
  "Volunteer at a community event",
  "Do a wine or brewery tour",
  "Go paddleboarding or kayaking",
  "Build a snowman or sandcastle",
  "Have a board game or movie marathon",
  "Write postcards to friends",
  "Take a scenic bike ride",
  "Go stargazing",
  "Visit a theme park",
  "Try indoor rock climbing",
  "Make handmade crafts or gifts",
  "Read a book in a hammock",
  "Host a cultural dinner night",
  "Go horseback riding",
  "Do a holiday scavenger hunt",
  "Attend a live concert or play",
  "Bake seasonal treats",
  "Learn a local dance or tradition",
  "Fly a kite on a windy day",
  "Take holiday photos",
  "Go fruit or pumpkin picking",
  "Explore a farmers’ market",
  "Have a bonfire night",
  "Go fishing or boating",
  "Take a scenic train ride",
  "Try snowshoeing or sledding",
  "Do a sunrise or sunset hike",
  "Plan a themed costume party",
  "Make a time capsule",
  "Create a holiday scrapbook"
];


// Make an object collecting our arrays together for easier use

const holidayOptions = {
    country: countryList,
    duration: daysAway(),
    hotelQuality: hotelStars,
    activites: holidayActivities
};


// Creating a random number generator function, taking input n and returning random number from 0 -> n-1

function randomNumber(n) {
    return Math.floor(Math.random()*n)
};

let ourTrip = []

for (let attribute in holidayOptions) {

    switch(attribute){
        case 'country': ourTrip.push(holidayOptions.country[randomNumber(holidayOptions[attribute].length)])
            break
        case 'duration': ourTrip.push(holidayOptions.duration[randomNumber(holidayOptions[attribute].length) ])
            break
        case 'hotelQuality': ourTrip.push(holidayOptions.hotelQuality[randomNumber(holidayOptions[attribute].length) ])
            break
        case 'activites': 
            ourTrip.push(holidayOptions.activites[randomNumber(holidayOptions[attribute].length) ]);
            ourTrip.push(holidayOptions.activites[randomNumber(holidayOptions[attribute].length) ]);
            ourTrip.push(holidayOptions.activites[randomNumber(holidayOptions[attribute].length) ]);
            break
    }
}

// Formatting our array in a more readable presentation
for (let i=0; i<=3; i++) {
    if (i===0){console.log(`\nYour destination country is: ${ourTrip[i]}`)};
    if (i===1){console.log(`You are staying for ${ourTrip[i]} days`)};
    if (i===2){console.log(`You are staying in a ${ourTrip[i]} star hotel`)};
    if (i===3){console.log(`Whilst away, you should: ${ourTrip[i]} or ${ourTrip[i+1].toLowerCase()} or ${ourTrip[i+2].toLowerCase()}\n`)};

}

