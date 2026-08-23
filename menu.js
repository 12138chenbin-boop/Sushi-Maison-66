const MENU = {

    pranzo: {

        rules:
        "Menu Pranzo · All You Can Eat · Coperto compreso · Bevande escluse.",

        categories: [

            {
                name: "DIM SUM",

                items: [

                    ["01",
                    "Ravioli di carne",
                    "Ravioli al vapore ripieni di carne, verdure e cipolle",
                    "glutine, uova"],

                    ["02",
                    "Ravioli di gamberi",
                    "Ravioli al vapore ripieni di gamberi, carne, funghi secchi e castagna d’acqua",
                    "glutine, crostacei"],

                    ["03",
                    "Ravioli di verdure",
                    "Ravioli al vapore ripieni di verdure miste",
                    "glutine, soia"],

                    ["05",
                    "Ravioli misti",
                    "Ravioli di gamberi, carne e verdure",
                    "glutine, crostacei, uova"],

                    ["07",
                    "Edamame",
                    "Baccelli di soia al vapore e sale",
                    "soia"],

                    ["08",
                    "Involtino di verdure",
                    "Verdure orientali avvolte in sfoglia di riso",
                    "glutine, uova"],

                    ["10",
                    "Involtino vietnamita",
                    "Verdure orientali, gamberi, funghi e spaghetti di soia",
                    "crostacei, glutine, uova"]

                ]
            },


            {
                name: "INSALATE",

                items: [

                    ["15",
                    "Wakame",
                    "Alghe con salsa ponzu e sesamo",
                    "sesamo, soia"],

                    ["16",
                    "Goma Wakame",
                    "Alghe marinate in salsa dolce-piccante e sesamo",
                    "sesamo"],

                    ["18",
                    "Insalata mista",
                    "Lattuga, carote, mais e sesamo",
                    "sesamo"],

                    ["20",
                    "Polpo e rucola",
                    "Insalata di polpo e rucola in salsa yuzu",
                    "molluschi"]

                ]
            },


            {
                name: "ZUPPE",

                items: [

                    ["25",
                    "Zuppa di miso",
                    "Miso, alghe, tofu ed erba cipollina",
                    "soia"]

                ]
            },


            {
                name: "CARPACCI",

                items: [

                    ["31",
                    "Carpaccio di salmone",
                    "Salmone crudo a fette sottili con salsa ponzu e sesamo",
                    "pesce, soia, sesamo"]

                ]
            },


            {
                name: "GUNKAN",

                items: [

                    ["34",
                    "Gunkan sake",
                    "Salmone, tobiko, maionese, tabasco e sesamo",
                    "pesce, uova, sesamo"],

                    ["35",
                    "Gunkan salmone",
                    "Salmone con tartare spicy",
                    "pesce, uova"],

                    ["37",
                    "Gunkan ebi",
                    "Zucchina, tartare di gambero, maionese e tobiko",
                    "crostacei, uova"],

                    ["38",
                    "Gunkan taste",
                    "Salmone, philadelphia, teriyaki e kataifi",
                    "pesce, lattosio, soia"]

                ]
            },


            {
                name: "NIGIRI",

                items: [

                    ["45",
                    "Nigiri salmone",
                    "Riso con salmone crudo",
                    "pesce"],

                    ["46",
                    "Nigiri tonno",
                    "Riso con tonno crudo",
                    "pesce"],

                    ["47",
                    "Nigiri branzino",
                    "Riso con branzino crudo",
                    "pesce"],

                    ["48",
                    "Nigiri gambero",
                    "Riso con gambero cotto",
                    "crostacei"]

                ]
            },


            {
                name: "SASHIMI",

                items: [

                    ["55",
                    "Sashimi salmone",
                    "Fette di salmone crudo",
                    "pesce"],

                    ["56",
                    "Sashimi misto",
                    "Salmone, tonno e branzino",
                    "pesce"]

                ]
            },


            {
                name: "TARTARE",

                items: [

                    ["60",
                    "Tartare salmone",
                    "Salmone a cubetti con salsa ponzu e sesamo",
                    "pesce, soia, sesamo"],

                    ["61",
                    "Tartare tonno",
                    "Tonno a cubetti con salsa ponzu e sesamo",
                    "pesce, soia, sesamo"]

                ]
            },


            {
                name: "URAMAKI",

                items: [

                    ["70",
                    "Salmon Roll",
                    "Salmone, philadelphia e sesamo",
                    "pesce, lattosio, sesamo"],

                    ["71",
                    "Ura Tonno Avocado",
                    "Tonno, avocado e sesamo",
                    "pesce, sesamo"],

                    ["72",
                    "Ura California",
                    "Surimi di granchio, avocado e maionese",
                    "crostacei, uova"],

                    ["73",
                    "Ura Spicy Salmone",
                    "Tartare di salmone piccante",
                    "pesce"],

                    ["75",
                    "Miura Maki",
                    "Salmone grigliato, philadelphia e teriyaki",
                    "pesce, lattosio, soia"],

                    ["78",
                    "Ura Ebiten",
                    "Gambero fritto, maionese, kataifi e teriyaki",
                    "crostacei, uova, glutine"]

                ]
            },


            {
                name: "HOSOMAKI",

                items: [

                    ["90",
                    "Hoso Salmone",
                    "Salmone, riso e alga nori",
                    "pesce"],

                    ["91",
                    "Hoso Avocado",
                    "Avocado, riso e alga nori",
                    ""],

                    ["93",
                    "Hoso Tonno",
                    "Tonno, riso e alga nori",
                    "pesce"]

                ]
            },


            {
                name: "TEMAKI",

                items: [

                    ["95",
                    "Temaki Salmone Avocado",
                    "Salmone e avocado",
                    "pesce"],

                    ["96",
                    "Temaki Ebiten",
                    "Gambero fritto, insalata e maionese",
                    "crostacei, uova"],

                    ["97",
                    "Temaki Miura",
                    "Salmone grigliato, philadelphia e teriyaki",
                    "pesce, lattosio"]

                ]
            },


            {
                name: "RISO E PASTA",

                items: [

                    ["100",
                    "Riso bianco",
                    "Riso bianco",
                    ""],

                    ["104",
                    "Riso saltato con verdure",
                    "Riso, uova e verdure",
                    "uova"],

                    ["105",
                    "Riso saltato con gamberi",
                    "Riso, uova, verdure e gamberi",
                    "crostacei, uova"],

                    ["110",
                    "Spaghetti di riso",
                    "Spaghetti di riso, verdure e gamberi",
                    "crostacei"],

                    ["111",
                    "Spaghetti di soia",
                    "Spaghetti di soia, verdure e gamberi",
                    "soia, crostacei"]

                ]
            },


            {
                name: "FRITTURE",

                items: [

                    ["120",
                    "Tempura di verdure",
                    "Verdure di stagione",
                    "glutine"],

                    ["122",
                    "Tempura di gamberoni",
                    "Gamberoni fritti",
                    "glutine, crostacei"],

                    ["125",
                    "Patatine fritte",
                    "Patate fritte e salate",
                    ""]

                ]
            },


            {
                name: "PIASTRA",

                items: [

                    ["130",
                    "Spiedini di gamberi",
                    "Gamberi con salsa teriyaki",
                    "crostacei, soia"],

                    ["131",
                    "Spiedini di pollo",
                    "Pollo con salsa teriyaki e sesamo",
                    "soia, sesamo"],

                    ["134",
                    "Salmone alla piastra",
                    "Salmone con salsa teriyaki",
                    "pesce, soia"]

                ]
            }

        ]
    },


    cena: {

        rules:
        "Menu Cena · €27 · All You Can Eat · Coperto compreso · Bevande escluse.",

        categories: [

            {
                name: "PIATTI SPECIALI",

                items: [

                    ["M01",
                    "Scampi Esotic",
                    "Scampi marinati con salsa ponzu",
                    "crostacei"],

                    ["M02",
                    "Poke Maison",
                    "Riso, mango, avocado, wakame, salmone e gamberi",
                    "pesce, crostacei"],

                    ["M03",
                    "Italia Roll",
                    "Fiori di zucca, philadelphia, avocado e gamberi rossi",
                    "crostacei, lattosio"],

                    ["M04",
                    "Tartare Black",
                    "Tartare di salmone e riso venere",
                    "pesce"],

                    ["M08",
                    "Sashimi Plus",
                    "Salmone, tonno, branzino, gambero rosso e scampo",
                    "pesce, crostacei"],

                    ["M13",
                    "Carpaccio Capesante",
                    "Carpaccio di capesante con salsa ponzu",
                    "molluschi"],

                    ["M16",
                    "Carpaccio Burrata",
                    "Salmone con salsa burrata",
                    "pesce, lattosio"]

                ]
            },


            {
                name: "DIM SUM",

                items: [

                    ["01",
                    "Ravioli di carne",
                    "Ravioli al vapore ripieni di carne e verdure",
                    "glutine"],

                    ["02",
                    "Ravioli di gamberi",
                    "Ravioli al vapore con gamberi",
                    "crostacei"],

                    ["04",
                    "Ravioli di cristallo",
                    "Ravioli al vapore con gamberi",
                    "crostacei"],

                    ["13",
                    "Gyoza alla griglia",
                    "Ravioli di carne alla griglia",
                    "glutine"],

                    ["07",
                    "Edamame",
                    "Baccelli di soia al vapore",
                    "soia"],

                    ["14",
                    "Nuvole di drago",
                    "Chips di gamberi",
                    "crostacei"]

                ]
            },


            {
                name: "NIGIRI",

                items: [

                    ["45",
                    "Nigiri Salmone",
                    "Riso con salmone",
                    "pesce"],

                    ["46",
                    "Nigiri Tonno",
                    "Riso con tonno",
                    "pesce"],

                    ["47",
                    "Nigiri Branzino",
                    "Riso con branzino",
                    "pesce"],

                    ["48",
                    "Nigiri Gambero",
                    "Riso con gambero cotto",
                    "crostacei"],

                    ["49",
                    "Nigiri Flambè",
                    "Salmone scottato alla fiamma",
                    "pesce"]

                ]
            },


            {
                name: "SASHIMI",

                items: [

                    ["55",
                    "Sashimi Salmone",
                    "Fette di salmone crudo",
                    "pesce"],

                    ["56",
                    "Sashimi Misto",
                    "Salmone, tonno e branzino",
                    "pesce"],

                    ["58",
                    "Sashimi Mix Speciale",
                    "Pesce misto con gamberi rossi",
                    "pesce, crostacei"]

                ]
            },


            {
                name: "GUNKAN",

                items: [

                    ["34",
                    "Gunkan Sake",
                    "Salmone, tobiko, maionese e sesamo",
                    "pesce, uova"],

                    ["35",
                    "Gunkan Salmone",
                    "Salmone con tartare spicy",
                    "pesce"],

                    ["36",
                    "Gunkan Tonno",
                    "Tonno con tartare spicy",
                    "pesce"],

                    ["41",
                    "Gunkan White",
                    "Philadelphia, sesamo e teriyaki",
                    "lattosio, sesamo"]

                ]
            },


            {
                name: "URAMAKI",

                items: [

                    ["69",
                    "Salmon Fresh",
                    "Salmone, philadelphia e kataifi",
                    "pesce, lattosio"],

                    ["70",
                    "Salmon Roll",
                    "Salmone, philadelphia e sesamo",
                    "pesce, lattosio"],

                    ["71",
                    "Ura Tonno Avocado",
                    "Tonno, avocado e sesamo",
                    "pesce"],

                    ["72",
                    "Ura California",
                    "Surimi di granchio, avocado e maionese",
                    "crostacei, uova"],

                    ["73",
                    "Ura Spicy Salmone",
                    "Tartare di salmone piccante",
                    "pesce"],

                    ["75",
                    "Miura Maki",
                    "Salmone grigliato, philadelphia e teriyaki",
                    "pesce, lattosio"],

                    ["78",
                    "Ura Ebiten",
                    "Gambero fritto, maionese, kataifi e teriyaki",
                    "crostacei, uova"],

                    ["79",
                    "Tiger Roll",
                    "Gamberi fritti, avocado e salmone",
                    "crostacei, pesce"],

                    ["86",
                    "Rainbow Roll",
                    "Salmone, avocado e pesce misto",
                    "pesce"]

                ]
            },


            {
                name: "HOSOMAKI",

                items: [

                    ["90",
                    "Hoso Salmone",
                    "Salmone, riso e alga nori",
                    "pesce"],

                    ["91",
                    "Hoso Avocado",
                    "Avocado, riso e alga nori",
                    ""],

                    ["93",
                    "Hoso Tonno",
                    "Tonno, riso e alga nori",
                    "pesce"],

                    ["210",
                    "Hoso Fritto",
                    "Salmone fritto con spicy salmon",
                    "pesce"]

                ]
            },


            {
                name: "TEMAKI",

                items: [

                    ["95",
                    "Temaki Salmone Avocado",
                    "Salmone e avocado",
                    "pesce"],

                    ["96",
                    "Temaki Ebiten",
                    "Gambero fritto e maionese",
                    "crostacei, uova"],

                    ["97",
                    "Temaki Miura",
                    "Salmone grigliato, philadelphia e teriyaki",
                    "pesce, lattosio"]

                ]
            },


            {
                name: "RISO E PASTA",

                items: [

                    ["100",
                    "Riso bianco",
                    "Riso bianco",
                    ""],

                    ["104",
                    "Riso saltato con verdure",
                    "Riso, uova e verdure",
                    "uova"],

                    ["105",
                    "Riso saltato con gamberi",
                    "Riso, verdure e gamberi",
                    "crostacei"],

                    ["110",
                    "Spaghetti di riso",
                    "Verdure e gamberi",
                    "crostacei"],

                    ["111",
                    "Spaghetti di soia",
                    "Verdure e gamberi",
                    "soia"]

                ]
            },


            {
                name: "FRITTURE",

                items: [

                    ["120",
                    "Tempura di verdure",
                    "Verdure di stagione",
                    "glutine"],

                    ["121",
                    "Tempura mista",
                    "Verdure e gamberoni",
                    "glutine, crostacei"],

                    ["122",
                    "Tempura di gamberoni",
                    "Gamberoni fritti",
                    "crostacei"],

                    ["124",
                    "Calamari fritti",
                    "Calamari impanati e fritti",
                    "molluschi"]

                ]
            },


            {
                name: "CUCINA FUSION",

                items: [

                    ["161",
                    "Gamberi al limone",
                    "Gamberi saltati con limone",
                    "crostacei"],

                    ["313",
                    "Gamberi al curry",
                    "Gamberi con patate al curry",
                    "crostacei"],

                    ["314",
                    "Gamberi in agrodolce",
                    "Gamberi, peperoni e ananas",
                    "crostacei"],

                    ["316",
                    "Pollo agrodolce",
                    "Pollo con peperoni e ananas",
                    ""]

                ]
            }

        ]
    }

};


let currentService = "pranzo";

let currentCategory = "ALL";

let searchText = "";


function normalize(text) {

    return String(text || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

}


function escapeHTML(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function renderCategories() {

    const container =
        document.getElementById("categoryButtons");

    container.innerHTML = "";

    const allButton =
        document.createElement("button");

    allButton.className =
        "category-button active";

    allButton.textContent =
        "TUTTO";

    allButton.dataset.category =
        "ALL";

    container.appendChild(allButton);


    MENU[currentService].categories
        .forEach(category => {

            const button =
                document.createElement("button");

            button.className =
                "category-button";

            button.textContent =
                category.name;

            button.dataset.category =
                category.name;

            container.appendChild(button);

        });


    container
        .querySelectorAll(".category-button")
        .forEach(button => {

            button.addEventListener("click", () => {

                currentCategory =
                    button.dataset.category;

                container
                    .querySelectorAll(".category-button")
                    .forEach(item => {

                        item.classList.toggle(
                            "active",
                            item === button
                        );

                    });

                renderMenu();

            });

        });

}


function renderRules() {

    document.getElementById("menuRules")
        .textContent =
        MENU[currentService].rules;

}


function renderMenu() {

    const container =
        document.getElementById("menuContainer");

    container.innerHTML = "";

    let total = 0;


    MENU[currentService]
        .categories
        .forEach(category => {

            if (
                currentCategory !== "ALL" &&
                currentCategory !== category.name
            ) {
                return;
            }


            const items =
                category.items.filter(item => {

                    if (!searchText) {
                        return true;
                    }

                    return normalize(
                        item.join(" ")
                    ).includes(
                        normalize(searchText)
                    );

                });


            if (!items.length) {
                return;
            }


            total += items.length;


            const section =
                document.createElement("section");

            section.className =
                "menu-category";


            section.innerHTML = `

                <div class="category-header">

                    <h3>
                        ${escapeHTML(category.name)}
                    </h3>

                    <span>
                        ${items.length} PIATTI
                    </span>

                </div>

                <div class="menu-items"></div>

            `;


            const itemsContainer =
                section.querySelector(".menu-items");


            items.forEach(item => {

                const number = item[0];

                const name = item[1];

                const description = item[2];

                const allergens = item[3];


                const article =
                    document.createElement("article");

                article.className =
                    "menu-item";


                article.innerHTML = `

                    <div class="item-number">
                        ${escapeHTML(number)}
                    </div>

                    <div>

                        <div class="item-name">
                            ${escapeHTML(name)}
                        </div>

                        <div class="item-description">
                            ${escapeHTML(description)}
                        </div>

                        ${
                            allergens
                            ?
                            `
                            <div class="item-allergens">
                                Allergeni:
                                ${escapeHTML(allergens)}
                            </div>
                            `
                            :
                            ""
                        }

                    </div>

                    <div class="item-included">
                        INCLUSO
                    </div>

                `;


                itemsContainer.appendChild(article);

            });


            container.appendChild(section);

        });


    document.getElementById("resultCounter")
        .textContent =
        `${total} PIATTI · ${
            currentService === "pranzo"
            ? "MENU PRANZO"
            : "MENU CENA"
        }`;


    if (total === 0) {

        container.innerHTML = `

            <div class="empty-message">

                Nessun piatto trovato.

                <br><br>

                Prova un altro termine.

            </div>

        `;

    }

}


/* =========================
   SERVICE SWITCH
========================= */

document
    .querySelectorAll(".service-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            currentService =
                button.dataset.service;

            currentCategory =
                "ALL";

            searchText =
                "";

            document.getElementById("menuSearch")
                .value = "";


            document
                .querySelectorAll(".service-button")
                .forEach(item => {

                    item.classList.toggle(
                        "active",
                        item === button
                    );

                });


            renderRules();

            renderCategories();

            renderMenu();

        });

    });


/* =========================
   SEARCH
========================= */

document
    .getElementById("menuSearch")
    .addEventListener("input", event => {

        searchText =
            event.target.value.trim();

        renderMenu();

    });


/* =========================
   CLEAR
========================= */

document
    .getElementById("clearSearch")
    .addEventListener("click", () => {

        searchText = "";

        document.getElementById("menuSearch")
            .value = "";

        renderMenu();

    });


/* =========================
   START
========================= */

renderRules();

renderCategories();

renderMenu();
