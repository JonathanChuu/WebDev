var houseKeeper1 = {
    name: "Victoria",
    languages: ["English", "Chinese"],
    yearsOfExperience: 4
}

function HouseKeeper (name, languages, yearsOfExperience){
    this.name = name;
    this.languages = languages;
    this.yearsOfExperience = yearsOfExperience;
}

var houseKeeper2 = new HouseKeeper("Marilia", ["Portuguese", "Latin"], 12);