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

function getViewCard({ type, name, id, spiritOne, index, height, weight, abilities, statics }) {
    return /*html*/ `
        <div class="viewCard ${type}">
            <div class="viewMainCard">
                <div class="headline ${type}">
                    <span>#${id}</span>
                    <span>${name}</span>
                </div>
                <img src="${spiritOne}" alt="${name}">
                <div class="viewCardTypes" id="viewCardType${index}">
                </div>
            </div>

            <div class="viewDesc">
                <nav>
                    <span id="navInfo${index}" class="hoverEffect" onclick="renderInfo(${index})">Maininfo</span>
                    <span id="navStats${index}" onclick="renderStats(${index})">Statistic</span>
                </nav>
                <div id="desc${index}" class="contentDesc">
                    <!-- Default: Info-View -->
                    <table>
                        <tbody>
                            <tr>
                                <td>Height:</td>
                                <td>${height}</td>
                            </tr>
                            <tr>
                                <td>Weight:</td>
                                <td>${weight}</td>
                            </tr>
                            <tr>
                                <td>Abilities:</td>
                                <td>${abilities.join(", ")}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="stats" id="stats${index}" style="display: none;">
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

            <div class="viewCardBtn">
                <button onclick="backward()">⬅ Back</button>
                <button onclick="forward()">Next ➡</button>
            </div>
        </div>
    `;
}
