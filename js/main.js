window.addEventListener("load", () => {
    alert('Not finished yet !');

    let easyBtn = document.querySelector("#easyBtn");
    let hardBtn = document.querySelector("#hardBtn");
    const boxes = document.querySelectorAll('.color');

    /**
     * A RGB color
     * Values between 0 a 256
     * @param {red} r 
     * @param {green} g 
     * @param {blue} b 
     */
    function color(r,g,b) {
        this.r= 0;
        this.g=0;
        this.b=0;
    };

    let colors = [];

    const disableBoxes = () => {
        for (const box of boxes) {
            box.removeEventListener("click", function(){});
        }
    }

    // This value will be 3 or 6
    let numBoxes = 6;

    /**
     * Hard button listener
     * It put 3 boxes with a random color each one
     * The other 3 boxes will be hidden
     */
    easyBtn.addEventListener("click", function(){
        hardBtn.classList.remove("selected");
        easyBtn.classList.add("selected");
        let chosenColor = colorDivs(3);
        rightColor(boxes,chosenColor,3);
    });

    /**
     * Hard button listener
     * It put 6 boxes with a random color each one
     */
    hardBtn.addEventListener("click", function(){
        easyBtn.classList.remove("selected");
        hardBtn.classList.add("selected");
        let chosenColor = colorDivs(6);
    });

    /**
     * 
     * @param {number of boxes that we want to put random colors} boxesNumber 
     */
    const generateRandomColores = (boxesNumber) => {
        colors = [];
        for (let iterator = 0; iterator < boxesNumber; iterator++) {
            const newColor = new color(0,0,0);
            newColor.r = Math.floor(Math.random() * 256);
            newColor.g = Math.floor(Math.random() * 256);
            newColor.b = Math.floor(Math.random() * 256);
            colors.push(newColor);
        }
        return colors;
    };

    //Listener for the boxes
    const rightColor = (boxes,chosenColorPoistion,numberOfColors) =>{
        if(numberOfColors===3){
            let cont = 0;
            for (const box of boxes) {
                box.addEventListener("click", function(){
                    let chosenColor = chosenColorPoistion;
                    if(colors[cont].r == chosenColor.r && colors[cont].g == chosenColor.g && colors[cont].b == chosenColor.b){
                        document.body.style.backgroundColor = "green";
                        disableBoxes();
                        return;
                    }
                    else{
                        box.style.display = 'none';
                        cont++;
                    }
                    if(cont === 2){
                        document.body.style.backgroundColor = "red";
                        disableBoxes();
                        return;
                    }
                });
            }
        }
    }
    

    /**
     * 
     * @param {*} numberOfColors 
     */
    const colorDivs = (numberOfColors) =>{
        const colors = generateRandomColores(numberOfColors);
        let cont = 0;
        for (const box of boxes) {
            if(cont >=3 && numberOfColors === 3){
                boxes[cont].style.display = 'none';
            }else{
                let thisColor = colors[cont];
                const r = thisColor.r;
                const g = thisColor.g;
                const b = thisColor.b;
                boxes[cont].style.background = "rgba(" +r+","+g+","+b+")"; 
                boxes[cont].style.display = 'block';
            }
            cont++;
        }
        const chosenColorPoistion = Math.floor(Math.random() * numberOfColors);
        const chosenColor = colors[chosenColorPoistion];
        document.querySelector('.chosenColor').textContent = chosenColor.r + ',' + chosenColor.g + ',' + chosenColor.b ;
        document.querySelector('.correcto').style.background = "rgba("+chosenColor.r+","+chosenColor.g+","+chosenColor.b+")";
        return chosenColor;
    }




});