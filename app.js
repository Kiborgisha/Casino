let balance = 1000;
let inventory = [];
let selectedCase = null;
let isSpinning = false;

const casesShowcase = document.getElementById('casesShowcase');
const openingArea = document.getElementById('openingArea');
const selectedCaseTitle = document.getElementById('selectedCaseTitle');
const slotMachine = document.getElementById('slotMachine');
const openBtn = document.getElementById('openBtn');
const backBtn = document.getElementById('backBtn');
const balanceSpan = document.getElementById('balance');
const inventoryItems = document.getElementById('inventoryItems');

function updateBalance() {
    balanceSpan.textContent = balance + ' ₽';
}

function updateInventory() {
    inventoryItems.innerHTML = inventory.map(item => `
        <div class="inventory-item">
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
        </div>
    `).join('');
}

function getRandomItem(caseItems) {
    const rand = Math.random() * 100;
    let sum = 0;
    
    for (let item of caseItems) {
        sum += item.chance;
        if (rand <= sum) {
            return item.item;
        }
    }
    return caseItems[0].item;
}

function openCase() {
    if (!selectedCase) return;
    if (balance < selectedCase.price) {
        alert('Недостаточно рублей!');
        return;
    }
    if (isSpinning) return;

    isSpinning = true;
    openBtn.disabled = true;

    balance -= selectedCase.price;
    updateBalance();

    let spinCount = 0;
    const itemsCount = 20;
    
    function showRandomItem() {
        const randomItem = getRandomItem(selectedCase.items);
        slotMachine.innerHTML = `
            <div class="drop-item flying">
                <img src="${randomItem.image}" alt="">
                <h3>???</h3>
            </div>
        `;
        
        spinCount++;
        
        if (spinCount < itemsCount) {
            setTimeout(showRandomItem, 100);
        } else {
            const wonItem = getRandomItem(selectedCase.items);
            inventory.push(wonItem);
            
            slotMachine.innerHTML = `
                <div class="drop-item final">
                    <img src="${wonItem.image}" alt="${wonItem.name}">
                    <h3>${wonItem.name}</h3>
                </div>
            `;
            
            updateInventory();
            isSpinning = false;
            openBtn.disabled = false;
        }
    }
    
    showRandomItem();
}

function selectCase(caseItem) {
    selectedCase = caseItem;
    casesShowcase.style.display = 'none';
    openingArea.style.display = 'block';
    selectedCaseTitle.textContent = caseItem.name;
    openBtn.textContent = `🔓 Открыть кейс (${caseItem.price} ₽)`;
    
    const rarities = {};
    caseItem.items.forEach(item => {
        rarities[item.rarity] = (rarities[item.rarity] || 0) + item.chance;
    });
    
    slotMachine.innerHTML = `
        <div class="rarity-legend">
            Шансы выпадения:<br>
            ${Object.entries(rarities).map(([rarity, chance]) => {
                const emoji = rarity === 'trash' ? '👽' : rarity === 'normal' ? '📦' : '✨';
                const name = rarity === 'trash' ? 'неочень' : rarity === 'normal' ? 'Обычное' : 'Неплохое';
                return `${emoji} ${name}: ${chance.toFixed(3)}%`;
            }).join(' | ')}
        </div>
    `;
}

function backToCases() {
    selectedCase = null;
    casesShowcase.style.display = 'flex';
    openingArea.style.display = 'none';
}

function renderCases() {
    casesShowcase.innerHTML = cases.map(c => {
        const caseString = JSON.stringify(c).replace(/"/g, '&quot;');
        return `
            <div class="case-item" onclick="selectCase(${caseString})">
                <img src="${c.image}" alt="${c.name}">
                <h3>${c.name}</h3>
                <div class="price">💰 ${c.price} ₽</div>
                <div class="case-description">${c.description}</div>
            </div>
        `;
    }).join('');
}

renderCases();
updateInventory();
updateBalance();

openBtn.addEventListener('click', openCase);
backBtn.addEventListener('click', backToCases);

window.selectCase = selectCase;