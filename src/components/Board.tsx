// Board.tsx
import { BoardProps } from 'boardgame.io/react';
const { MyGameState } = require('./Game.ts');

// interface MyGameProps extends BoardProps<typeof MyGameState> {
//     // Additional custom properties for your component
// }

// export function MyGameBoard(props: MyGameProps) {
//     const cellData: any = Array(91).fill().map(() => Array());
// }


// * Git Hub
// * Branch : placeOnBoard-feature
// *
// import {
//     choosed
// } from './script.js';
// import {
//     fetchCastle
// } from './ajax.js';
// import {
//     unitMoveSettings, unitMove
// } from './move.js';
// import { ReactElement } from 'react';
// export {
//     cellData,
//     redirectActionOnClick
// };

// var cellData = Array(91).fill().map(() => Array());

// // * Application des infos des cartes -> dans case
// function place(cell) {
//     let id = cell.id.slice(2);
//     let cardObj = choosed['sqlObj'];
//     id = parseInt(id);
//     // console.log(choosed['sqlObj']);



//     if (cellData[id]['land'] && cardObj.type == 'unit' && !cellData[id]['unit']) { // ? SI un terrain existe sur la case ciblée & que la carte sélectionnée est une unité

//         cellData[id][cardObj.type] = cardObj;
//         // si les infos d'une carte est sélectionnée
//         let bgUrl = cardObj.bdBgUrl;
//         // console.log(bgUrl);
//         cell.style.background = bgUrl + ", " + cell.style.background; // applique la carte à la case selectionnée // ! STYLE
//         document.querySelector("#" + choosed['cID']).style.display = "none";
//         // console.log(document.querySelector("#" + choosed['cID']));
//         choosed['sqlObj'] = "";
//     } else if (!cellData[id]['land'] && cardObj.type == 'land' && isValidLandPlacement(id)) { // ? SI la carte sélectionnée est un terrain
//         cellData[id][cardObj.type] = cardObj;
//         // si les infos d'une carte est sélectionnée
//         let bgUrl = cardObj.bdBgUrl;
//         // console.log(bgUrl);
//         cell.style.background = bgUrl; // applique la carte à la case selectionnée // ! STYLE
//         document.querySelector("#" + choosed['cID']).style.display = "none";
//         // console.log(document.querySelector("#" + choosed['cID']));
//         choosed['sqlObj'] = "";
//     }
// }


// function castle() {

//     cellData[39]['land'] = fetchCastle();
//     cellData[51]['land'] = fetchCastle();
//     document.querySelector("#id39").style.background = cellData[39]['land'].bdBgUrl;
//     document.querySelector("#id51").style.background = cellData[51]['land'].bdBgUrl;

//     console.log(document.querySelector("#id51").style.background);
//     // console.log(cellData[39]['land'], cellData[51]['land']);
// }
// castle();

// function isValidLandPlacement(id) {

//     if ((id > 12) && cellData[id - 13]['land']) {
//         return true;
//     } else if ((id % 13 != 0) && cellData[id - 1]['land']) {
//         return true;
//     } else if ((id % 13 != 12) && cellData[id + 1]['land']) {
//         return true;
//     } else if ((id < 78) && cellData[id + 13]['land']) {
//         return true;
//     }

//     return false;
// }

// function redirectActionOnClick(cell) {
//     let id = cell.id.slice(2);
//     id = parseInt(id);

//     if (choosed['sqlObj'] != "" && !cellData[id]['unit']) { // ? SI une (unité) DE LA MAIN est sélectionnée et qu'il n'y a pas d'unité déjà présente sur la cellule
//         place(cell);
//     } else if (choosed['sqlObj'] == "" && cellData[id]['unit']) { // ? SI aucune carte DE LA MAIN n'est sélectionnée et qu'il y a une unité déjà présente sur la cellule
//         unitMoveSettings(cell); // ? (Stocke les données de l'unité sélectionnée)
//     } else if (choosed['boardObj'] && (cellData[id]['land'])) { // ? SI une unité du board est sélectionnée
//         unitMove(cell); // ? Déplacer une unité vers la cellule sélectionnée
//     }
// }