let Page;
let Tag;


let dbPhotographers = new Database("https://natachalng.github.io/NatachaLang_6_21122020/data/FishEyeDataFR.json");
dbPhotographers.load().then(
    function () {
        Page = new PhotographerList("#photographer", dbPhotographers);
        Tag = new TagList("#header__filters", dbPhotographers)
        Page.init();
        Tag.init();
    }
);


