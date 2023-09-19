const extinctDinosaurs = ["🦎", "🐊", "🐦"]

/* export  */function getExtinctDinosaurs(){
    return extinctDinosaurs;
}

/* export  */function addExtinctDinosaur(extinctDinosaur){
    extinctDinosaurs.push(extinctDinosaur);
}

/* export default {
    getExtinctDinosaurs,
    addExtinctDinosaur
}; */

export {
    getExtinctDinosaurs,
    addExtinctDinosaur
}