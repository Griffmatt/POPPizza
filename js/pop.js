$('#giftCardFor a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
    $('.check').click(function() {
        $('.check').not(this).prop('checked', false);
    });



function randomPizzaTop() {
    const veg = document.querySelector("#onlyVeg");
    const meat = document.querySelector("#onlyMeat");
    const premiumTop = document.querySelector("#premium");
    const pizzaBtn = document.querySelector("#randomPizzaBtn");
    const oneTop = document.querySelector("#firstTop");
    const twoTop = document.querySelector("#secondTop");
    const threeTop = document.querySelector("#thirdTop");
    let meatArray = ["Pepperoni", "Ham", "Hamburg", "Sausage"];
    let premMeatArray = ["Chicken", "Bacon"];
    let vegArray = ["Peppers", "Onions", "Mushrooms", "Jalapenos"];
    let premVegArray = ["Eggplant"];
    let allVeg = vegArray.concat(premVegArray);
    let allMeat = meatArray.concat(premMeatArray);
    let topCombine = meatArray.concat(vegArray);
    let premCombine = premMeatArray.concat(premVegArray);
    let allCombine = topCombine.concat(premCombine);
    let rand;
    if (premiumTop.checked) {
        let n = []
        if (veg.checked){
            for(let i = 0; i < 3; i++) {
                rand = (Math.floor(Math.random()* (allVeg.length)));
                if (n.includes(rand)) {
                    i -= 1;
                    continue;
                }
                else {
                n.push(rand);
                }
            }
            oneTop.innerHTML = allVeg[n[0]];
            twoTop.innerHTML = allVeg[n[1]];
            threeTop.innerHTML = allVeg[n[2]];          
        }
        else if(meat.checked) {
            for(let i = 0; i < 3; i++) {
                rand = (Math.floor(Math.random()* (allMeat.length)));
                if (n.includes(rand)) {
                    i -= 1;
                    continue;
                }
                else {
                n.push(rand);
                }
            }
            oneTop.innerHTML = allMeat[n[0]]
            twoTop.innerHTML = allMeat[n[1]]
            threeTop.innerHTML = allMeat[n[2]]
     }
        else {
            for(let i = 0; i < 3; i++) {
                rand = (Math.floor(Math.random()* (allCombine.length)));
                if (n.includes(rand)) {
                    i -= 1;
                    continue;
                }
                else {
                n.push(rand);
                }
            }
            oneTop.innerHTML = allCombine[n[0]]
            twoTop.innerHTML = allCombine[n[1]]
            threeTop.innerHTML = allCombine[n[2]]
        }
    }
    else if (veg.checked){
       let n = []
        for(let i = 0; i < 3; i++) {
            rand = (Math.floor(Math.random()* (vegArray.length)));
                if (n.includes(rand)) {
                    i -= 1;
                    continue;
                }
                else {
                n.push(rand);
                }
            }
        oneTop.innerHTML = vegArray[n[0]]
        twoTop.innerHTML = vegArray[n[1]]
        threeTop.innerHTML = vegArray[n[2]]
    }
    else if (meat.checked){
        let n =[]
        for(let i = 0; i < 3; i++) {
            rand = (Math.floor(Math.random()* (meatArray.length)));
                if (n.includes(rand)) {
                    i -= 1;   
                    continue;
                }
                else {
                n.push(rand);
                }
            }
        oneTop.innerHTML = meatArray[n[0]]
        twoTop.innerHTML = meatArray[n[1]]
        threeTop.innerHTML = meatArray[n[2]]
    }
    else {
       let n =[];
        for(let i = 0; i < 3; i++) {
            rand = (Math.floor(Math.random()* (topCombine.length)));
                if (n.includes(rand)) {
                    i -= 1;
                    continue;
                }
                else {
                n.push(rand);
                }
        }
        oneTop.innerHTML = topCombine[n[0]]
        twoTop.innerHTML = topCombine[n[1]]
        threeTop.innerHTML = topCombine[n[2]]
    }
    const pepperoniImg = document.getElementById("pepperoni");
    const hamImg = document.getElementById("ham");
    const hamburgImg = document.getElementById("hamburg");
    const sausageImg = document.getElementById("sausage");
    const peppersImg = document.getElementById("peppers");
    const onionsImg = document.getElementById("onions");
    const mushroomsImg = document.getElementById("mushrooms");
    const jalapenoImg = document.getElementById("jalapeno");
    const chickenImg = document.getElementById("chicken");
    const  baconImg = document.getElementById("bacon");
    const eggplantImg = document.getElementById("eggplant");
    pepperoniImg.setAttribute("hidden", true);
    hamImg.setAttribute("hidden", true);
    hamburgImg.setAttribute("hidden", true);
    sausageImg.setAttribute("hidden", true);
    peppersImg.setAttribute("hidden", true);
    onionsImg.setAttribute("hidden", true);
    mushroomsImg.setAttribute("hidden", true);
    jalapenoImg.setAttribute("hidden", true);
    chickenImg.setAttribute("hidden", true);
    baconImg.setAttribute("hidden", true);
    eggplantImg.setAttribute("hidden", true);


    if (oneTop.innerHTML === "Pepperoni" || twoTop.innerHTML === "Pepperoni" || threeTop.innerHTML === "Pepperoni") {
        pepperoniImg.removeAttribute("hidden");
    }
    if (oneTop.innerHTML === "Ham" || twoTop.innerHTML === "Ham" || threeTop.innerHTML === "Ham") {
        hamImg.removeAttribute("hidden");
    }
    if (oneTop.innerHTML === "Hamburg" || twoTop.innerHTML === "Hamburg" || threeTop.innerHTML === "Hamburg") {
        hamburgImg.removeAttribute("hidden");
    }
    if (oneTop.innerHTML === "Sausage" || twoTop.innerHTML === "Sausage" || threeTop.innerHTML === "Sausage") {
        sausageImg.removeAttribute("hidden");
    }
    if (oneTop.innerHTML === "Peppers" || twoTop.innerHTML === "Peppers" || threeTop.innerHTML === "Peppers") {
        peppersImg.removeAttribute("hidden");
    }
    if (oneTop.innerHTML === "Onions" || twoTop.innerHTML === "Onions" || threeTop.innerHTML === "Onions") {
        onionsImg.removeAttribute("hidden");
    }
    if (oneTop.innerHTML === "Mushrooms" || twoTop.innerHTML === "Mushrooms" || threeTop.innerHTML === "Mushrooms") {
        mushroomsImg.removeAttribute("hidden");
    }
    if (oneTop.innerHTML === "Jalapenos" || twoTop.innerHTML === "Jalapenos" || threeTop.innerHTML === "Jalapenos") {
        jalapenoImg.removeAttribute("hidden");
    }
    if (oneTop.innerHTML === "Chicken" || twoTop.innerHTML === "Chicken" || threeTop.innerHTML === "Chicken") {
        chickenImg.removeAttribute("hidden");
    }
    if (oneTop.innerHTML === "Bacon" || twoTop.innerHTML === "Bacon" || threeTop.innerHTML === "Bacon") {
        baconImg.removeAttribute("hidden");
    }
    if (oneTop.innerHTML === "Eggplant" || twoTop.innerHTML === "Eggplant" || threeTop.innerHTML === "Eggplant") {
        eggplantImg.removeAttribute("hidden");
    }

}