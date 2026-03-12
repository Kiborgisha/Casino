const items = {
    trash: [
        { name: "Рваный носок", image: "https://cdn-icons-png.flaticon.com/512/3170/3170733.png" },
        { name: "Грязная майка", image: "https://cdn-icons-png.flaticon.com/512/3170/3170720.png" },
        { name: "Дырявые джинсы", image: "https://cdn-icons-png.flaticon.com/512/3170/3170741.png" },
        { name: "Растянутые трусы", image: "https://cdn-icons-png.flaticon.com/512/3170/3170755.png" },
        { name: "Носки с дыркой", image: "https://cdn-icons-png.flaticon.com/512/3170/3170733.png" },
        { name: "Футболка с пятном", image: "https://cdn-icons-png.flaticon.com/512/3170/3170710.png" },
        { name: "Кепка мятая", image: "https://cdn-icons-png.flaticon.com/512/3170/3170766.png" },
        { name: "Ремень порванный", image: "https://cdn-icons-png.flaticon.com/512/3170/3170777.png" },
        { name: "Шнурки грязные", image: "https://cdn-icons-png.flaticon.com/512/3170/3170788.png" }
    ],
    
    normal: [
        { name: "Обычная футболка", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200" },
        { name: "Простые джинсы", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200" },
        { name: "Худи базовая", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200" }
    ],
    
    decent: [
        { name: "Футболка Adidas (подделка)", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=200" },
        { name: "Джинсы (сток)", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200" },
        { name: "Худи Nike (копия)", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=200" }
    ]
};

const cases = [
    {
        id: 1,
        name: "УЛИЧНЫЙ КЕЙС",
        image: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
        price: 50,
        description: "Шанс легендарки 0.01%",
        items: [
            { rarity: "trash", chance: 24.975, item: items.trash[0] },
            { rarity: "trash", chance: 24.975, item: items.trash[1] },
            { rarity: "trash", chance: 24.975, item: items.trash[2] },
            { rarity: "trash", chance: 24.975, item: items.trash[3] },
            { rarity: "normal", chance: 0.045, item: items.normal[0] },
            { rarity: "normal", chance: 0.045, item: items.normal[1] },
            { rarity: "decent", chance: 0.005, item: items.decent[0] },
            { rarity: "decent", chance: 0.005, item: items.decent[1] }
        ]
    },
    {
        id: 2,
        name: "НОЧНОЙ КЕЙС",
        image: "https://cdn-icons-png.flaticon.com/512/3132/3132705.png",
        price: 100,
        description: "Шанс легендарки 0.02%",
        items: [
            { rarity: "trash", chance: 24.975, item: items.trash[4] },
            { rarity: "trash", chance: 24.975, item: items.trash[5] },
            { rarity: "trash", chance: 24.975, item: items.trash[6] },
            { rarity: "trash", chance: 24.975, item: items.trash[7] },
            { rarity: "normal", chance: 0.045, item: items.normal[2] },
            { rarity: "normal", chance: 0.045, item: items.normal[0] },
            { rarity: "decent", chance: 0.005, item: items.decent[2] },
            { rarity: "decent", chance: 0.005, item: items.decent[1] }
        ]
    },
    {
        id: 3,
        name: "ЭЛИТНЫЙ КЕЙС",
        image: "https://cdn-icons-png.flaticon.com/512/3132/3132710.png",
        price: 200,
        description: "Шанс легендарки 0.05%",
        items: [
            { rarity: "trash", chance: 24.975, item: items.trash[0] },
            { rarity: "trash", chance: 24.975, item: items.trash[2] },
            { rarity: "trash", chance: 24.975, item: items.trash[4] },
            { rarity: "trash", chance: 24.975, item: items.trash[6] },
            { rarity: "normal", chance: 0.03, item: items.normal[0] },
            { rarity: "normal", chance: 0.03, item: items.normal[1] },
            { rarity: "normal", chance: 0.03, item: items.normal[2] },
            { rarity: "decent", chance: 0.01, item: items.decent[0] }
        ]
    }
];