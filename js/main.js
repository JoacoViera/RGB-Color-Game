window.addEventListener("load", () => {
    alert('Not finished yet !');

    var easyBtn = document.querySelector("#easyBtn");
    var hardBtn = document.querySelector("#hardBtn");

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
        numBoxes = 3;

        const colors = generateRandomColores(numBoxes);

        const boxes = document.querySelectorAll('.color');
        console.log(boxes.length);
        let cont = 0;
        for (const box of boxes) {
            if(cont >=3){
                boxes[cont].style.display = 'none';
            }else{
                let thisColor = colors[cont];
                const r = thisColor.r;
                const g = thisColor.g;
                const b = thisColor.b;
                boxes[cont].style.background = "rgba(" +r+","+g+","+b+")"; 
            }
            cont++;
        }

        const chosenColor = colors[Math.floor(Math.random() * 3)];
        document.querySelector('.chosenColor').textContent = chosenColor.r + ',' + chosenColor.g + ',' + chosenColor.b ;
    });

    /**
     * Hard button listener
     * It put 6 boxes with a random color each one
     */
    hardBtn.addEventListener("click", function(){
        easyBtn.classList.remove("selected");
        hardBtn.classList.add("selected");
        numBoxes = 6;

        const colors = generateRandomColores(numBoxes);
        const boxes = document.querySelectorAll('.color');

        for (const box of boxes) {
            box.style.display = 'block';
        }

        for (let iterator = 0; iterator < boxes.length; iterator++) {
            let thisColor = colors[iterator];
            const r = thisColor.r;
            const g = thisColor.g;
            const b = thisColor.b;
            boxes[iterator].style.background = "rgba(" +r+","+g+","+b+")"; 
        }

        const chosenColor = colors[Math.floor(Math.random() * 6)];
        document.querySelector('.chosenColor').textContent = chosenColor.r + ',' + chosenColor.g + ',' + chosenColor.b;
    });

    /**
     * 
     * @param {number of boxes that we want to put random colors} boxesNumber 
     */
    const generateRandomColores = (boxesNumber) => {
        let colors = [];
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
    const boxes = document.querySelectorAll('.color');
    boxes[0].addEventListener("click", function(){
        boxes[0].style.display = 'none';
    });




});