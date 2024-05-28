(() => {

    console.log("Hello javascript");
    const version = 8.2;
    let nom = String("Javascript");
    var prenom = "Brandan";
    console.log(prenom);
    let phone = 20.00;
    const bool = true;
    const x = null;
    console.log(typeof nom);
    const langs = ["html", "css", "js", true];
    console.table(langs);

    console.log(langs.length);
    /* for(let i = 0; i < langs.length; i++){
        console.log(langs[i])
    } */
    let i = 0;
    while (i < langs.length) {
        console.log(`Index ${i} : ${langs[i]}`);
        i++;
    }
    const User = {
        nom: "Doe",
        prenom: "John",
        age: 30,
        ville: "NY",
        pays: "USA"
    };
    console.log(Object.values(User));
    for (let index in User) {
        console.log(`${index} : ${User[index]}`);
    }

    langs.forEach(element => {
        console.log(element);
    });
    const persons = [{
        nom: "Berner Lee",
        prenom: "Tim"
    }, {
        nom: "Each",
        prenom: "Branden"
    }, {
        nom: "Doe",
        prenom: "John"
    }];
    console.log(Object.values(persons));
    console.table(persons);
    persons.map(cle => {
        console.log(cle.nom + ' ' + cle.prenom);
    });

    //opérateurs = + - * / % > < ? ?? : 
    let age = 24;
    let annee = 2024;
    console.log(age % 2);

    console.log(`Vous êtes né en ${annee - age}`);
    age % 2 == 0 ? console.log("Nombre paire") : console.log("nombre impaire");

    let prix = 55; //ht 55 * 5.5 / 100
    let taxe = 5.5;

    console.log(`Le prix TTC ${prix * taxe / 100 + prix}`);
    // ttc


    const product = [{ name: "car", price: 6000 }, { name: "Bike", price: 150 }, { name: "phone", price: 700 }, { name: "Watch", price: 200 }, { name: "pen", price: 8 }, { name: "bag", price: 50 }];

    console.log(product);

    console.log(Object.values(product[0]));

    console.log(product[1].price);
    /* product.map((cle) =>{
        console.log(cle.name+' '+cle.price)
    }) */
    for (let data of product) {
        console.log(data.name);
    }
    const filterRedItems = product.filter(row => row.price < 100);
    console.table(filterRedItems);

    const personne_1 = {
        nom: "Berner Lee",
        prenom: "Tim"
    };
    const personne_2 = {
        nom: "Doe",
        prenom: "John"
    };
    const people = [];

    people.push(personne_1, personne_2);
    console.table(people);
    console.log(people[0]);

    const adventurer = {
        name: "test",
        age: 30
    };

    /*const dogName = adventurer?.age?? "le nom n'existe pas"; //chainage optionnel
    console.log(dogName)*/
})();