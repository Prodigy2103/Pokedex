// #region getCardInfo
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
// #endregion

// #region getViewCard
function getViewCard({
    types,
    name,
    id,
    spiritOne,
    index,
    height,
    weight,
    abilities,
    statics,
}) {
    return /*html*/ `
        <div class="viewCard ${types[0]}">
            <div class="viewMainCard">
                <div class="headline ${types[0]}">
                    <span>#${id}</span>
                    <span>${name}</span>
                </div>
                <img src="${spiritOne}" alt="${name}">
                
                <div class="viewCardTypes" id="viewCardType${index}">
                    ${types
                        .map(
                            (type) =>
                                `<span class="type-tag ${type}">${type}</span>`
                        )
                        .join("")}
                </div>
            </div>

            <div class="viewDesc">
                <nav>
                    <span id="navInfo${index}" class="hoverEffect" onclick="renderInfo(${index})">Maininfo</span>
                    <span id="navStats${index}" onclick="renderStats(${index})">Statistic</span>
                </nav>
                <div id="desc${index}" class="contentDesc">
                    <table>
                        <tbody>
                            <tr>
                                <td>Height:</td>
                                <td class="flex-space">${height}</td>
                            </tr>
                            <tr>
                                <td>Weight:</td>
                                <td class="flex-space">${weight}</td>
                            </tr>
                            <tr>
                                <td>Abilities:</td>
                                <td class="flex-space">${abilities.join(", ")}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="infoDesc" id="stats${index}" style="display: none;">
                <table>

                    <tbody>
                        <tr>
                            <td>HP</td>
                            <td class="flex-space">${statics.hp}</td>
                        </tr>
                        <tr>
                            <td>Attack</td>
                            <td class="flex-space">${statics.attack}</td>
                        </tr>
                        <tr>
                            <td>Defense</td>
                            <td class="flex-space">${statics.defense}</td>
                        </tr>
                        <tr>
                            <td>SP Attack</td>
                            <td class="flex-space">${statics.specialAttack}</td>
                        </tr>
                        <tr>
                            <td>SP- Defense</td>
                            <td class="flex-space">${statics.specialDefense}</td>
                        </tr>
                        <tr>
                            <td>Speed</td>
                            <td class="flex-space">${statics.speed}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="viewCardBtn">
                <button onclick="backward()">⬅ Back</button>
                <button onclick="forward()">Next ➡</button>
            </div>
        </div>
    `;
}
// #endregion