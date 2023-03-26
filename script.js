let theplayer1 = 0;
let theplayer2 = 0;
let randombeginner = Math.round(Math.random()*50);
let p1js = document.querySelector(".p1")
let p2js = document.querySelector(".p2")
let p1bjs = document.querySelector(".p1b")
let p2bjs = document.querySelector(".p2b")
let turn = 9;
    let therealplayer1 = 4;
    let turn1 = 0;
    let turn2 = 0;
    let theplayer1t = -1;
    let therealplayer2 = 4;
    let theplayer2t = -1;
    let h4randomjs = document.querySelector(".h4random")
    h4randomjs.innerHTML = "";

function test0() {

    if(theplayer1 === 0 && theplayer2 === 0) {

        p1js.addEventListener("click", function p1function() {
            p1js.style.display = "none";
            p2js.style.display = "none"
            p1bjs.style.display = "block";
            p2bjs.style.display = "block"
            console.log("etap 1 ", theplayer1)
            theplayer1 = 1;

        })

        p2js.addEventListener("click", function p1bfunction() {
            p1js.style.display = "none";
            p2js.style.display = "none"
            p1bjs.style.display = "block";
            p2bjs.style.display = "block"
            console.log(theplayer1)
            theplayer1 = -1
            }) 
        }


    if (theplayer2 === 0) {

        p1bjs.addEventListener("click", function p2function() {
            p1bjs.style.display = "none";
            p2bjs.style.display = "none"
            theplayer2 = 1;
            test()
            })

        }

        p2bjs.addEventListener("click", function p2bfunction() {
            p1bjs.style.display = "none";
            p2bjs.style.display = "none"
            theplayer2 = -1;
            test()
        })
    
    }
    test0()

function test() {
    if (theplayer1 == -1 && theplayer2 == 1 || theplayer1 == 1 && theplayer2 == -1) {
        alert("sa marche");
    
        morpion()
    }
}


function morpion() {
    const div1 = document.querySelector(".case1")
    const div2 = document.querySelector(".case2")
    const div3 = document.querySelector(".case3")
    const div4 = document.querySelector(".case4")
    const div5 = document.querySelector(".case5")
    const div6 = document.querySelector(".case6")
    const div7 = document.querySelector(".case7")
    const div8 = document.querySelector(".case8")
    const div9 = document.querySelector(".case9")

    div1.innerHTML = "";
    div2.innerHTML = "";
    div3.innerHTML = "";
    div4.innerHTML = "";
    div5.innerHTML = "";
    div6.innerHTML = "";
    div7.innerHTML = "";
    div8.innerHTML = "";
    div9.innerHTML = "";

    
    
    
    // h4random.style.color = "red";
    // h4random.style.fontSize = "3vh";
    // h4random.innerHTML = randombeginner;
    // randombeginner;
    // h4random.innerHTML = randombeginner;
    // randombeginner;
    // h4random.innerHTML = randombeginner;
    // randombeginner;
    // h4random.innerHTML = randombeginner;
    randombeginner = randombeginner % 2;
   
    

    // let turn = 9;
    // let therealplayer1 = 4;
    // let turn1 = 0;
    // let turn2 = 0;
    // let theplayer1t = -1;
    // let therealplayer2 = 4;
    // let theplayer2t = -1;

    
    const pairjs = document.querySelector(".pair")
    const impairjs = document.querySelector(".impair")
    const pairejs = document.querySelector(".paire")
    const impairejs = document.querySelector(".impaire")

    pairjs.addEventListener("click", function pairf(){
        if (theplayer1t === -1){
        
        pairjs.style.display = "none"
        pairejs.style.display = "block"
        impairjs.style.display = "none"
        impairejs.style.display = "block"
        theplayer1t = 0;
        }
    })

    impairjs.addEventListener("click", function pairef(){
        if (theplayer1t === -1){
        
        pairjs.style.display = "none"
        pairejs.style.display = "block"
        impairjs.style.display = "none"
        impairejs.style.display = "block"
        theplayer1t = 1;
        }
    })

    pairejs.addEventListener("click", function impairf(){
        if (theplayer2t === -1){
        
        pairejs.style.display = "none"
        impairejs.style.display = "none"
        theplayer2t = 0;
        whobegin()
        
        }
    })

    impairejs.addEventListener("click", function impairef(){
        if (theplayer2t === -1){
        
        pairejs.style.display = "none"
        impairejs.style.display = "none"
        theplayer2t = 1;
        whobegin()
        
        }
    })

    function whobegin() {
        if (theplayer1t === randombeginner) {
            therealplayer2 = 4;
            turn2 = 4;
            turn1 = 5;
            therealplayer1 = 5;
            alert("Joueur1 Commence")
            turnforp1()
        }

        else if (theplayer2t === randombeginner) {
            therealplayer2 = 5;
            turn2 = 5;
            turn1 = 4;
            therealplayer1 = 4;
            alert("Joueur2 Commence")
            turnforp2()
        }
        else if (theplayer1t !== randombeginner) {
            therealplayer2 = 4;
            turn2 = 4;
            turn1 = 5;
            therealplayer1 = 5;
            h4randomjs.style.display = "block"
            h4randomjs.innerHTML = randombeginner;
            h4randomjs.style.color = "red";
            h4randomjs.style.fontSize = "3vh"
            alert("Joueur1 Commence")
            turnforp1()
        }

        else if (theplayer2t !== randombeginner) {
            therealplayer2 = 5;
            turn2 = 5;
            turn1 = 4;
            therealplayer1 = 4;
            h4randomjs.style.display = "block"
            h4randomjs.innerHTML = randombeginner;
            h4randomjs.style.color = "red";
            h4randomjs.style.fontSize = "3vh"
            alert("Joueur2 Commence")
            turnforp2()
        }
    }
    function turnforp1(){
        if (therealplayer1 > therealplayer2) {
            
            
            if (div1.innerHTML === undefined || div1.innerHTML === "") {
                div1.addEventListener("click", function croix(){
                    
                    div1.innerHTML = "\u2716";
                    turn1-=  1;
                    therealplayer1-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp1b1();
                    }

                })
            }

            if (div2.innerHTML === undefined || div2.innerHTML === "") {
                div2.addEventListener("click", function croix(){
                
                    div2.innerHTML = "\u2716";
                    turn1-=  1;
                    therealplayer1-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp1b1();
                    }

                })
            }
            if (div3.innerHTML === undefined || div3.innerHTML === "") {
                div3.addEventListener("click", function croix(){
                
                    div3.innerHTML = "\u2716";
                    turn1-=  1;
                    therealplayer1-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp1b1();
                    }

                })
            }
            if (div4.innerHTML === undefined || div4.innerHTML === "") {
                div4.addEventListener("click", function croix(){
                
                    div4.innerHTML = "\u2716";
                    turn1-=  1;
                    therealplayer1-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp1b1();
                    }
                })
            }
            if (div5.innerHTML === undefined || div5.innerHTML === "") {
                div5.addEventListener("click", function croix(){
                
                    div5.innerHTML = "\u2716";
                    turn1-=  1;
                    therealplayer1-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp1b1();
                    }

                })
            }
            if (div6.innerHTML === undefined || div6.innerHTML === "") {
                div6.addEventListener("click", function croix(){
                
                    div6.innerHTML = "\u2716";
                    turn1-=  1;
                    therealplayer1-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp1b1();
                    }
                })
            }
            if (div7.innerHTML === undefined || div7.innerHTML === "") {
                div7.addEventListener("click", function croix(){
                
                    div7.innerHTML = "\u2716";
                    turn1-=  1;
                    therealplayer1-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp1b1();
                    }

                })
            }
            if (div8.innerHTML === undefined || div8.innerHTML === "") {
                div8.addEventListener("click", function croix(){
                
                    div8.innerHTML = "\u2716";
                    turn1-=  1;
                    therealplayer1-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp1b1();
                    }

                })
            }
            if (div9.innerHTML === undefined || div9.innerHTML === "") {
            div9.addEventListener("click", function croix(){
                
                    div9.innerHTML = "\u2716";
                    turn1-=  1;
                    therealplayer1-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp1b1();
                    }

                })
            }
        }

        

        function turnforp1b1(){
        if (therealplayer2 = therealplayer1){
            
            if (div1.innerHTML === undefined || div1.innerHTML === "") {
                div1.addEventListener("click", function rond(){
                
                    div1.innerHTML = "\u25cf";
                    turn2-=  1;
                    therealplayer2-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp1();
                    }

                })
            }
            if (div2.innerHTML === undefined || div2.innerHTML === "") {
                div2.addEventListener("click", function rond(){
                
                    div2.innerHTML = "\u25cf";
                    turn2-=  1;
                    therealplayer2-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp1();
                    }

                })
            }
            if (div3.innerHTML === undefined || div3.innerHTML === "") {
                div3.addEventListener("click", function rond(){
                
                    div3.innerHTML = "\u25cf";
                    turn2-=  1;
                    therealplayer2-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp1();
                    }

                })
            }
            if (div4.innerHTML === undefined || div4.innerHTML === "") {
                div4.addEventListener("click", function rond(){
                
                    div4.innerHTML = "\u25cf";
                    turn2-=  1;
                    therealplayer2-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp1();
                    }

                })
            }
            if (div5.innerHTML === undefined || div5.innerHTML === "") {
                div5.addEventListener("click", function rond(){
                
                    div5.innerHTML = "\u25cf";
                    turn2-=  1;
                    therealplayer2-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp1();
                    }

                })
            }
            if (div6.innerHTML === undefined || div6.innerHTML === "") {
            div6.addEventListener("click", function rond(){
                
                    div6.innerHTML = "\u25cf";
                    turn2-=  1;
                    therealplayer2-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp1();
                    }

                })
            }
            if (div7.innerHTML === undefined || div7.innerHTML === "") {
            div7.addEventListener("click", function rond(){
                
                    div7.innerHTML = "\u25cf";
                    turn2-=  1;
                    therealplayer2-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp1();
                    }

                })
            }
            if (div8.innerHTML === undefined || div8.innerHTML === "") {
                div8.addEventListener("click", function rond(){
                
                    div8.innerHTML = "\u25cf";
                    turn2-=  1;
                    therealplayer2-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp1();
                    }

                })
            }
            if (div9.innerHTML === undefined || div9.innerHTML === "") {
                div9.addEventListener("click", function rond(){
                
                    div9.innerHTML = "\u25cf";
                    turn2-=  1;
                    therealplayer2-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp1();
                    }

                })
                
            }
        }
        }
    }

    function turnforp2(){
        if (therealplayer2 > therealplayer1){
            
            if (div1.innerHTML === undefined || div1.innerHTML === "") {
                div1.addEventListener("click", function rond(){
                
                    div1.innerHTML = "\u25cf";
                    turn2-=  1;
                    therealplayer2-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp2b1();
                    }

                })
            }
            if (div2.innerHTML === undefined || div2.innerHTML === "") {
                div2.addEventListener("click", function rond(){
                
                    div2.innerHTML = "\u25cf";
                    turn2-=  1;
                    therealplayer2-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp2b1();
                    }

                })
            }
            if (div3.innerHTML === undefined || div3.innerHTML === "") {
                div3.addEventListener("click", function rond(){
                
                    div3.innerHTML = "\u25cf";
                    turn2-=  1;
                    therealplayer2-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp2b1();
                    }

                })
            }
            if (div4.innerHTML === undefined || div4.innerHTML === "") {
                div4.addEventListener("click", function rond(){
                
                    div4.innerHTML = "\u25cf";
                    turn2-=  1;
                    therealplayer2-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp2b1();
                    }

                })
            }
            if (div5.innerHTML === undefined || div5.innerHTML === "") {
                div5.addEventListener("click", function rond(){
                
                    div5.innerHTML = "\u25cf";
                    turn2-=  1;
                    therealplayer2-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp2b1();
                    }

                })
            }
            if (div6.innerHTML === undefined || div6.innerHTML === "") {
            div6.addEventListener("click", function rond(){
                
                    div6.innerHTML = "\u25cf";
                    turn2-=  1;
                    therealplayer2-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp2b1();
                    }

                })
            }
            if (div7.innerHTML === undefined || div7.innerHTML === "") {
            div7.addEventListener("click", function rond(){
                
                    div7.innerHTML = "\u25cf";
                    turn2-=  1;
                    therealplayer2-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp2b1();
                    }

                })
            }
            if (div8.innerHTML === undefined || div8.innerHTML === "") {
                div8.addEventListener("click", function rond(){
                
                    div8.innerHTML = "\u25cf";
                    turn2-=  1;
                    therealplayer2-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp2b1();
                    }

                })
            }
            if (div9.innerHTML === undefined || div9.innerHTML === "") {
                div9.addEventListener("click", function rond(){
                
                    div9.innerHTML = "\u25cf";
                    turn2-=  1;
                    therealplayer2-=1;

                    // Si Joueur2 Gagne
                    if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    // Si Joueur 1 Gagne
                    else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }

                    else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                        let divw2 = document.querySelector(".messagewin")
                        divw2.style.display = "block"
                        let bgw2 = document.querySelector(".bgw")
                        bgw2.style.display = "block"
                        let h4w2 = document.querySelector(".h4win")
                        h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                        h4w2.style.display = "block"
                        let buttonwin2 = document.querySelector(".buttonwin")
                        buttonwin2.innerHTML = "Oui"
                        buttonwin2.style.display = "block"
                    }
                    else {
                        return turnforp2b1();
                    }

                })
                
            }
        }

        function turnforp2b1(){
            if (therealplayer2 = therealplayer2) {
            
            
                if (div1.innerHTML === undefined || div1.innerHTML === "") {
                    div1.addEventListener("click", function croix(){
                        
                        div1.innerHTML = "\u2716";
                        turn1-=  1;
                        therealplayer1-=1;
    
                        // Si Joueur2 Gagne
                        if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
                        // Si Joueur 1 Gagne
                        else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
                        else {
                            return turnforp2();
                        }
    
                    })
                }
    
                if (div2.innerHTML === undefined || div2.innerHTML === "") {
                    div2.addEventListener("click", function croix(){
                    
                        div2.innerHTML = "\u2716";
                        turn1-=  1;
                        therealplayer1-=1;
    
                        // Si Joueur2 Gagne
                        if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
                        // Si Joueur 1 Gagne
                        else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
                        else {
                            return turnforp2();
                        }
    
                    })
                }
                if (div3.innerHTML === undefined || div3.innerHTML === "") {
                    div3.addEventListener("click", function croix(){
                    
                        div3.innerHTML = "\u2716";
                        turn1-=  1;
                        therealplayer1-=1;
    
                        // Si Joueur2 Gagne
                        if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
                        // Si Joueur 1 Gagne
                        else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
                        else {
                            return turnforp2();
                        }
    
                    })
                }
                if (div4.innerHTML === undefined || div4.innerHTML === "") {
                    div4.addEventListener("click", function croix(){
                    
                        div4.innerHTML = "\u2716";
                        turn1-=  1;
                        therealplayer1-=1;
    
                        // Si Joueur2 Gagne
                        if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
                        // Si Joueur 1 Gagne
                        else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
                        else {
                            return turnforp2();
                        }
                    })
                }
                if (div5.innerHTML === undefined || div5.innerHTML === "") {
                    div5.addEventListener("click", function croix(){
                    
                        div5.innerHTML = "\u2716";
                        turn1-=  1;
                        therealplayer1-=1;
    
                        // Si Joueur2 Gagne
                        if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
                        // Si Joueur 1 Gagne
                        else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
                        else {
                            return turnforp2();
                        }
    
                    })
                }
                if (div6.innerHTML === undefined || div6.innerHTML === "") {
                    div6.addEventListener("click", function croix(){
                    
                        div6.innerHTML = "\u2716";
                        turn1-=  1;
                        therealplayer1-=1;
    
                        // Si Joueur2 Gagne
                        if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
                        // Si Joueur 1 Gagne
                        else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
                        else {
                            return turnforp2();
                        }
                    })
                }
                if (div7.innerHTML === undefined || div7.innerHTML === "") {
                    div7.addEventListener("click", function croix(){
                    
                        div7.innerHTML = "\u2716";
                        turn1-=  1;
                        therealplayer1-=1;
    
                        // Si Joueur2 Gagne
                        if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
                        // Si Joueur 1 Gagne
                        else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
                        else {
                            return turnforp2();
                        }
    
                    })
                }
                if (div8.innerHTML === undefined || div8.innerHTML === "") {
                    div8.addEventListener("click", function croix(){
                    
                        div8.innerHTML = "\u2716";
                        turn1-=  1;
                        therealplayer1-=1;
    
                        // Si Joueur2 Gagne
                        if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
                        // Si Joueur 1 Gagne
                        else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
                        else {
                            return turnforp2();
                        }
    
                    })
                }
                if (div9.innerHTML === undefined || div9.innerHTML === "") {
                div9.addEventListener("click", function croix(){
                    
                        div9.innerHTML = "\u2716";
                        turn1-=  1;
                        therealplayer1-=1;
    
                        // Si Joueur2 Gagne
                        if (div1.innerHTML === "\u25cf" && div2.innerHTML === "\u25cf" && div3.innerHTML === "\u25cf" ){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div7.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div4.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u25cf" && div6.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div2.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div8.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u25cf" && div5.innerHTML === "\u25cf" && div9.innerHTML === "\u25cf"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u25cf" && div4.innerHTML === "\u25cf" && div7.innerHTML === "\u25cf") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 2 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
                        // Si Joueur 1 Gagne
                        else if (div1.innerHTML === "\u2716" && div2.innerHTML === "\u2716" && div3.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div7.innerHTM === "\u2716" && div8.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div4.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div6.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u2716" && div6.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div3.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div7.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div2.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div8.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u2716" && div5.innerHTML === "\u2716" && div9.innerHTML === "\u2716") {
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
    
                        else if (div1.innerHTML === "\u2716" && div4.innerHTML === "\u2716" && div7.innerHTML === "\u2716"){
                            let divw2 = document.querySelector(".messagewin")
                            divw2.style.display = "block"
                            let bgw2 = document.querySelector(".bgw")
                            bgw2.style.display = "block"
                            let h4w2 = document.querySelector(".h4win")
                            h4w2.innerHTML = "Bravo joueur 1 vous avez gagné !" + "<br>" + "Voulez-vous rejouer ?"
                            h4w2.style.display = "block"
                            let buttonwin2 = document.querySelector(".buttonwin")
                            buttonwin2.innerHTML = "Oui"
                            buttonwin2.style.display = "block"
                        }
                        else {
                            return turnforp2();
                        }
    
                    })
                }
            }
            }
        }
}


// const div1 = document.querySelector(".case1")
// div1.addEventListener("click", function test(){
// div1.innerHTML = "#00FF00"

// })
