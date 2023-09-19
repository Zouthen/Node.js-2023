import { getExtinctDinosaurs } from "./dinosaurFactory.js";

function getDinoInfo() {
    const extinctDinosaurs = getExtinctDinosaurs();
    console.log(`There are ${extinctDinosaurs.length} extinct dinosaurs`);
    console.table(extinctDinosaurs);
}

getDinoInfo();