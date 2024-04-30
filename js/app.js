(()=>{

    console.log("Hello javascript")
    const version = 8.2
    let nom = String("Javascript")
    var prenom = "Brandan"
    console.log(prenom)
    let phone = 20.00
    const bool = true
    const x = null
    console.log(typeof nom)
    const langs = ["html","css","js", true]
    console.table(langs)
  
   
    console.log(langs.length)
    /* for(let i = 0; i < langs.length; i++){
        console.log(langs[i])
    } */
    let i = 0;
    while(i < langs.length){
        console.log(`Index ${i} : ${langs[i]}`)
        i++
    }
    const User = {
        nom: "Doe",
        prenom: "John",
        age: 30,
        ville: "NY",
        pays: "USA"
    }
    console.log(Object.values(User));
    for(let index in User){
        console.log(`${index} : ${User[index]}`)
    }
   
    langs.forEach((element) => {
        console.log(element)
    });
    const persons =[
        {
            nom : "Berner Lee",
            prenom : "Tim"
        },
        {
            nom : "Each",
            prenom: "Branden"
        },
        {
            nom : "Doe",
            prenom: "John"
        }
    ]
    console.log(Object.values(persons));
    console.table(persons)
    persons.map((cle) =>{
        console.log(cle.nom+' '+cle.prenom)
    })

    //opérateurs

})()



