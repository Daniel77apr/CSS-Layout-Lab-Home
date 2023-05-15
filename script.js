String.prototype.removeClass = function(...str) {
    /* Applied to a string of CSS classes, it accepts multiple classes as arguments and returns an array equal to the original, but without the given classes*/
    const arr = this.split(" ");
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        let different = true;
        for(let j = 0; j < str.length; j++) {
            if(arr[i] == str[j]) {
                different = false;
            }
        }
        if(different) {
            newArr.push(arr[i]);
        }
    }
    return newArr.join(" ");
};

// Navigation bar

const guidesButton = document.getElementById("guides");

const guidesDiv = document.getElementById("guides-div");

function slide() {
    guidesDiv.className += " translate";
}

function slideBack() {
    guidesDiv.className = guidesDiv.className.removeClass("translate");
}

guidesDiv.addEventListener("mouseover", slide);
guidesButton.addEventListener("mouseover", slide);
guidesDiv.addEventListener("mouseout", slideBack);
guidesButton.addEventListener("mouseout", slideBack);