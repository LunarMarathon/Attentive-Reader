function countWords(str) {
    const arr = str.split(' ');
    return arr.filter(word => word !== '').length;
}

const read = (maxWords, maxLines, words) => {
    let lineString = '';
    let blockString = '';
    let divContainer = document.getElementById("container");
    let div = document.createElement('div');
    // div.id = 'container';
    div.className = 'blocks';
    div.innerHTML = '';
    // divContainer.appendChild(div);

    // var div1 = document.getElementById("b1")
    // div1.textContent = '';
    for (let i = 0; i < maxLines; i++) {
        for (let i = 0; i < maxWords; i++) {
            if (words.length > 0) {
                // How does the words.length decrease and not stay the same?
                lineString += words.shift() + ' ';
                // console.log("Creating lines :)")
            }
        }
        blockString += lineString + "\n"
        lineString = ""
    }

    // div1.textContent = blockString
    div.innerHTML += blockString;
    divContainer.appendChild(div);
    // console.log(blockString)
    blockString = ""
    if (words.length > 0) {
        read(maxWords, maxLines, words);
    }
}

function createCards() {
    var content = document.getElementById("textContent").value;
    var numWords = document.getElementById("numWords").value;
    var numLines = document.getElementById("numLines").value;
    // var content = "The banded broadbill (Eurylaimus javanicus) is a species of typical broadbill found in Mainland Southeast Asia and the Greater Sunda Islands. It inhabits a variety of forests, mostly in lowland areas. A striking, large-bodied bird, it is mostly purplish-red, with yellow-streaked black wings, a bright blue beak, a blackish face, and greyish chin and upper breast. Females can usually be told apart from males by their lack of a neckband. The species mainly eats arthropods, but also feeds on snails, lizards, frogs, and figs. Breeding occurs during the dry season on the "
    // console.log(countWords(content));
    const words = content.split(' ');
    // console.log(words)
    read(parseInt(numWords), parseInt(numLines) , words);
}

function clearCards(){
    const divContainer = document.getElementById("container");
    divContainer.innerHTML=""
}

function clearTextArea(){
    const pastedContent = document.getElementById("textContent");
    pastedContent.value = ""
}