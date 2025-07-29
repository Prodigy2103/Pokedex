function getCardInfo({ spiritOne, id, name, index, type }) {
    return /*html*/ ` 
        <div class="card" onclick="">
                <img src="${spiritOne}" alt="">
            <div class="cardInfos">
                <p># ${id}</p>
                <p class="cardName ${type}">${name}</p>
                <div id='type${index}' class="typeForm">
                </div>
            </div>
        </div>
`;
}

function getViewCard({ spiritTwo, id, name, index, height, weight, abilities, type }) {
    return /*html*/ `
        <div class="viewCard">
                <div class="viewMainCard">
                    <div class="headline" ${type}>
                        <span>${name}</span>
                        <span>${id}</span>
                    </div>
                    <img src="${spiritTwo}" alt="<">
                    <div class="viewCardTypes" id="viewCardType${index}">
                    </div>
                </div>
                <div class="viewDesc">
                    <nav>
                        <span id="navInfo${index}" class="hoverEffect" onclick="renderInfo(${index})">Maininfo</span>
                        <span id="navStats" onclick="renderStats(${index})">Statistic</span>
                    </nav>
                    <div id="desc${index}" class="contentDesc">
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
                                    <td>${abilities}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="viewCardBtn">
                    <button onclick="backward">back</button>
                    <button onclick="forward">next</button>
                </div>
            </div>
    `;
}
