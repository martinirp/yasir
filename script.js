// DEEPWORMS
const deepWormJawValue = 500;
const deepWormSpikeRootsValue = 650;
const deepWormSpikeValue = 800;

//DIREMAWS
const diremawBrainpanValue = 350;
const diremawLegsValue = 270;
const slimeValue = 50;

//CALCULADORA
function button(){
    //COLETA DOS DEEPWORMS
    var input = document.getElementById("quantidadeJaw")
    let deepWormJaw = input.value;

    var input = document.getElementById("quantidadeSpikeRoots")
    let deepWormSpikeRoots = input.value;

    var input = document.getElementById("quantidadeSpike")
    let deepWormSpike = input.value;

    // COLETA DOS DIREMAWS
    var input = document.getElementById("quantidadebrainpan")
    let diremawBrainpan = input.value;

    var input = document.getElementById("quantidadelegs")
    let diremawLegs = input.value;

    var input = document.getElementById("quantidadeslime")
    let slime = input.value;
  
    //SOMA DOS DEEPWORMS
    let deepResult = (deepWormJawValue * deepWormJaw) + (deepWormSpikeRootsValue * deepWormSpikeRoots) + (deepWormSpikeValue * deepWormSpike)
    //SOMA DOS DIREMAWS 
    let direResult = (diremawBrainpanValue * diremawBrainpan) + (diremawLegsValue * diremawLegs) + (slimeValue * slime)
    //RESULTANTE
    let resultante = deepResult + direResult
    
    console.log(`O Loot do yasir será ${resultante}`)
    document.getElementById("final").innerText = (`O Loot do yasir será ${resultante}`)
};

