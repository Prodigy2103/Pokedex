function getCardInfo({ spiritOne, id, name, index, type }) {
    return /*html*/ ` 
        <div class="card" onclick="showSingleView(${index})">
            <img src="${spiritOne}" alt="${name}">
            <div class="cardInfos">
                <p># ${id}</p>
                <p class="cardName ${type}">${name}</p>
                <div id="type${index}" class="typeForm"></div>
            </div>
        </div>
    `;
}

// function getViewCard({ type, name, id, spiritOne, index, height, weight, abilities }) {
//     return /*html*/ `
//         <div class="viewCard">
//                 <div class="viewMainCard">
//                     <div class="headline" ${type}>
//                         <span>${name}</span>
//                         <span>${id}</span>
//                     </div>
//                     <img src="${spiritOne}" alt="">
//                     <div class="viewCardTypes" id="viewCardType${index}">
//                     </div>
//                 </div>
//                 <div class="viewDesc">
//                     <nav>
//                         <span id="navInfo${index}" class="hoverEffect" onclick="renderInfo(${index})">Maininfo</span>
//                         <span id="navStats" onclick="renderStats(${index})">Statistic</span>
//                     </nav>
//                     <div id="desc${index}" class="contentDesc">
//                         <table>
//                             <tbody>
//                                 <tr>
//                                     <td>Height:</td>
//                                     <td>${height}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Weight:</td>
//                                     <td>${weight}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Abilities:</td>
//                                     <td>${abilities}</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>

//                 <div class="viewCardBtn">
//                     <button onclick="backward()">back</button>
//                     <button onclick="forward()">next</button>
//                 </div>
//             </div>
//     `;
// }

function getViewCard({ spiritOne, id, name, abilities, type, height, weight, statics }) {
    return /*html*/ `
        <div class="view-card ${type}">
            <img src="${spiritOne}" alt="${name}">
            <h2>#${id} ${name}</h2>
            <p>Height: ${height}</p>
            <p>Weight: ${weight}</p>
            <div>
                <h4>Abilities:</h4>
                <ul>
                    ${abilities.map(a => `<li>${a}</li>`).join("")}
                </ul>
            </div>
            <div class="stats">
                <h4>Basestats:</h4>
                <ul>
                    <li>HP: ${statics.hp}</li>
                    <li>Angriff: ${statics.attack}</li>
                    <li>Verteidigung: ${statics.defense}</li>
                    <li>Spezial-Angriff: ${statics.specialAttack}</li>
                    <li>Spezial-Verteidigung: ${statics.specialDefense}</li>
                    <li>Initiative: ${statics.speed}</li>
                </ul>
            </div>
            <div class="nav-btns">
                <button onclick="showPreviousPokemon()">⬅</button>
                <button onclick="showNextPokemon()">➡</button>
            </div>
        </div>
    `;
}