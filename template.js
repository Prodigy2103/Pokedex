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
function getViewCard(p) {
    return /*html*/ `
        <div class="viewCard ${p.type[0]}">
            <div class="viewMainCard">
                <div class="headline ${p.type[0]}">
                    <span>#${p.id}</span>
                    <span>${p.name}</span>
                </div>
                <img src="${p.spiritOne}" alt="${p.name}">
                
                <div class="viewCardTypes" id="viewCardType${currentViewIndex}">
                    ${p.type
                        .map(
                            (type) =>
                                `<span class="type-tag ${type}">${type}</span>`
                        )
                        .join("")}
                </div>
            </div>

            <div class="viewDesc">
                <nav>
                    <span id="navInfo${currentViewIndex}" class="hoverEffect" onclick="renderInfo(${currentViewIndex})">Maininfo</span>
                    <span id="navStats${currentViewIndex}" onclick="renderStats(${currentViewIndex})">Statistic</span>
                </nav>
                <div id="desc${currentViewIndex}" class="contentDesc">
                    <table>
                        <tbody>
                            <tr>
                                <td>Height:</td>
                                <td class="flex-space">${p.height}</td>
                            </tr>
                            <tr>
                                <td>Weight:</td>
                                <td class="flex-space">${p.weight}</td>
                            </tr>
                            <tr>
                                <td>Abilities:</td>
                                <td class="flex-space">${p.abilities.join(", ")}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="infoDesc" id="stats${currentViewIndex}" style="display: none;">
                <table>
                    <tbody>
                        <tr>
                            <td>HP</td>
                            <td class="flex-space">${p.statics.hp}</td>
                        </tr>
                        <tr>
                            <td>Attack</td>
                            <td class="flex-space">${p.statics.attack}</td>
                        </tr>
                        <tr>
                            <td>Defense</td>
                            <td class="flex-space">${p.statics.defense}</td>
                        </tr>
                        <tr>
                            <td>SP Attack</td>
                            <td class="flex-space">${p.statics.specialAttack}</td>
                        </tr>
                        <tr>
                            <td>SP- Defense</td>
                            <td class="flex-space">${p.statics.specialDefense}</td>
                        </tr>
                        <tr>
                            <td>Speed</td>
                            <td class="flex-space">${p.statics.speed}</td>
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
