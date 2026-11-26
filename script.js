const prodottiIniziali = [
    // --- 2026 ---
    {
        id: 1,
        categoria: "Smartphone",
        marca: "Samsung",
        modello: "Galaxy S26 Ultra",
        anno: 2026,
        prezzo: 1249.00,
        prezzoListino: 1479.00,
        voto: 4.8,
        numeroRecensioni: 310,
        cosaFa: "Top di gamma 2026 per produttività avanzata, zoom ottico e prestazioni di fascia massima.",
        linkAmazon: "https://www.amazon.it/?tag=TUO-TAG-21",
        linkUfficiale: "https://www.samsung.com/it/",
        ultimoAggiornamento: "2026-11-26",
        pro: ["Prestazioni di vertice", "S Pen integrata", "Display antiriflesso"],
        contro: ["Dimensioni e peso importanti"],
        specifiche: { "Display": "6.9\" Dynamic AMOLED 120Hz", "Processore": "Snapdragon Gen 5 Elite", "Memoria": "512 GB", "Batteria": "5000 mAh" }
    },
    {
        id: 2,
        categoria: "PC Portatili",
        marca: "ASUS",
        modello: "TUF Gaming F16",
        anno: 2026,
        prezzo: 1099.00,
        prezzoListino: 1349.00,
        voto: 4.8,
        numeroRecensioni: 190,
        cosaFa: "Notebook robusto adatto a gaming, virtualizzazione, sviluppo software e carichi pesanti.",
        linkAmazon: "https://www.amazon.it/?tag=TUO-TAG-21",
        linkUfficiale: "https://www.asus.com/it/",
        ultimoAggiornamento: "2026-11-26",
        pro: ["Ottima dissipazione", "Schermo 16:10 165Hz", "RAM e SSD espandibili"],
        contro: ["Peso intorno ai 2.2 kg"],
        specifiche: { "Display": "16\" FHD+ 165Hz IPS", "Processore": "Intel Core i7-13650HX", "Scheda Video": "NVIDIA RTX 4060 8GB", "RAM / SSD": "16 GB DDR5 / 1 TB NVMe" }
    },

    // --- 2025 ---
    {
        id: 3,
        categoria: "Smartphone",
        marca: "Apple",
        modello: "iPhone 16 Pro",
        anno: 2025,
        prezzo: 1049.00,
        prezzoListino: 1239.00,
        voto: 4.8,
        numeroRecensioni: 890,
        cosaFa: "Smartphone compatto con scocca in titanio, video ProRes e integrazione completa nell'ecosistema Apple.",
        linkAmazon: "https://www.amazon.it/?tag=TUO-TAG-21",
        linkUfficiale: "https://www.apple.com/it/iphone/",
        ultimoAggiornamento: "2026-11-26",
        pro: ["Qualità video elevata", "Costruzione solida", "Supporto software lungo"],
        contro: ["Prezzo ancora sostenuto"],
        specifiche: { "Display": "6.3\" Super Retina XDR 120Hz", "Processore": "Apple A18 Pro", "Memoria": "256 GB", "Batteria": "Fino a 27h video" }
    },
    {
        id: 4,
        categoria: "Smartphone",
        marca: "Xiaomi",
        modello: "15T Pro",
        anno: 2025,
        prezzo: 649.00,
        prezzoListino: 799.00,
        voto: 4.6,
        numeroRecensioni: 285,
        cosaFa: "Pensato per chi cerca ottica Leica, batteria ampia e ricarica rapida senza spendere al massimo.",
        linkAmazon: "https://www.amazon.it/?tag=TUO-TAG-21",
        linkUfficiale: "https://www.mi.com/it/",
        ultimoAggiornamento: "2026-11-26",
        pro: ["Ricarica rapida", "Ottimo rapporto qualità/prezzo", "Schermo 144Hz"],
        contro: ["Software ricco di app preinstallate"],
        specifiche: { "Display": "6.67\" AMOLED 144Hz", "Processore": "Dimensity 9400+", "RAM / Memoria": "12 GB / 512 GB", "Batteria": "5500 mAh" }
    },
    {
        id: 5,
        categoria: "Smartwatch",
        marca: "Huawei",
        modello: "Watch GT 5",
        anno: 2025,
        prezzo: 199.00,
        prezzoListino: 249.00,
        voto: 4.7,
        numeroRecensioni: 780,
        cosaFa: "Smartwatch elegante con cassa in acciaio, chiamate Bluetooth e autonomia fino a due settimane.",
        linkAmazon: "https://www.amazon.it/?tag=TUO-TAG-21",
        linkUfficiale: "https://consumer.huawei.com/it/",
        ultimoAggiornamento: "2026-11-26",
        pro: ["Batteria duratura", "Materiali curati", "Compatibile Android e iOS"],
        contro: ["Pagamenti NFC limitati"],
        specifiche: { "Display": "1.43\" AMOLED", "Autonomia": "Fino a 14 giorni", "Impermeabilità": "5 ATM + IP69K", "Peso": "48 g" }
    },

    // --- 2024 ---
    {
        id: 6,
        categoria: "Smartphone",
        marca: "Google",
        modello: "Pixel 9 Pro",
        anno: 2024,
        prezzo: 749.00,
        prezzoListino: 1099.00,
        voto: 4.7,
        numeroRecensioni: 640,
        cosaFa: "Punto di riferimento per fotografia computazionale e Android pulito con aggiornamenti a lungo termine.",
        linkAmazon: "https://www.amazon.it/?tag=TUO-TAG-21",
        linkUfficiale: "https://store.google.com/it/",
        ultimoAggiornamento: "2026-11-26",
        pro: ["Ottima fotocamera", "Android pulito", "Sconto forte rispetto al lancio"],
        contro: ["Ricarica non velocissima"],
        specifiche: { "Display": "6.3\" Super Actua 120Hz", "Processore": "Google Tensor G4", "RAM / Memoria": "16 GB / 256 GB", "Batteria": "4700 mAh" }
    },
    {
        id: 7,
        categoria: "PC Portatili",
        marca: "Lenovo",
        modello: "IdeaPad Slim 5",
        anno: 2024,
        prezzo: 629.00,
        prezzoListino: 849.00,
        voto: 4.6,
        numeroRecensioni: 410,
        cosaFa: "Portatile leggero in alluminio ideale per studio, programmazione leggera e mobilità quotidiana.",
        linkAmazon: "https://www.amazon.it/?tag=TUO-TAG-21",
        linkUfficiale: "https://www.lenovo.com/it/it/",
        ultimoAggiornamento: "2026-11-26",
        pro: ["Tastiera comoda", "Peso ridotto (1.46 kg)", "Buona autonomia"],
        contro: ["Grafica solo integrata"],
        specifiche: { "Display": "14\" OLED WUXGA", "Processore": "AMD Ryzen 7 8845HS", "RAM / SSD": "16 GB / 512 GB SSD", "Peso": "1.46 kg" }
    },
    {
        id: 8,
        categoria: "Frigoriferi",
        marca: "LG",
        modello: "Combinato GBP62DSXCC1",
        anno: 2024,
        prezzo: 679.00,
        prezzoListino: 899.00,
        voto: 4.7,
        numeroRecensioni: 510,
        cosaFa: "Frigorifero Total No Frost silenzioso con cassetti a temperatura controllata per carne, pesce e verdura.",
        linkAmazon: "https://www.amazon.it/?tag=TUO-TAG-21",
        linkUfficiale: "https://www.lg.com/it",
        ultimoAggiornamento: "2026-11-26",
        pro: ["Total No Frost", "Silenzioso (35 dB)", "384 litri"],
        contro: ["Altezza 203 cm"],
        specifiche: { "Capacità Totale": "384 Litri", "Sistema": "Total No Frost", "Rumorosità": "35 dB", "Dimensioni": "203 x 59.5 x 68.2 cm" }
    },

    // --- 2023 ---
    {
        id: 9,
        categoria: "Smartwatch",
        marca: "Garmin",
        modello: "Forerunner 265",
        anno: 2023,
        prezzo: 349.00,
        prezzoListino: 499.00,
        voto: 4.8,
        numeroRecensioni: 920,
        cosaFa: "Sportwatch con GPS multibanda ad alta precisione e metriche avanzate per corsa e allenamento.",
        linkAmazon: "https://www.amazon.it/?tag=TUO-TAG-21",
        linkUfficiale: "https://www.garmin.com/it-IT/",
        ultimoAggiornamento: "2026-11-26",
        pro: ["GPS preciso", "Fino a 13 giorni di batteria", "Leggero (47 g)"],
        contro: ["Senza microfono per chiamate"],
        specifiche: { "Display": "1.3\" AMOLED Touch", "Autonomia": "Fino a 13 giorni", "Impermeabilità": "5 ATM", "Peso": "47 g" }
    },
    {
        id: 10,
        categoria: "Frigoriferi",
        marca: "Bosch",
        modello: "Serie 4 KGN39VLEB",
        anno: 2023,
        prezzo: 619.00,
        prezzoListino: 829.00,
        voto: 4.6,
        numeroRecensioni: 730,
        cosaFa: "Frigorifero combinato NoFrost con cassetti VitaFresh per conservare più a lungo frutta e verdura.",
        linkAmazon: "https://www.amazon.it/?tag=TUO-TAG-21",
        linkUfficiale: "https://www.bosch-home.com/it/",
        ultimoAggiornamento: "2026-11-26",
        pro: ["Costruzione affidabile", "Cassetti VitaFresh", "NoFrost"],
        contro: ["Classe energetica E"],
        specifiche: { "Capacità Totale": "368 Litri", "Sistema": "NoFrost", "Rumorosità": "39 dB", "Dimensioni": "203 x 60 x 66 cm" }
    },

    // --- 2022 ---
    {
        id: 11,
        categoria: "Smartphone",
        marca: "Samsung",
        modello: "Galaxy S22",
        anno: 2022,
        prezzo: 379.00,
        prezzoListino: 879.00,
        voto: 4.5,
        numeroRecensioni: 1840,
        cosaFa: "Modello del 2022 compatto e maneggevole, interessante oggi solo se trovato a prezzo contenuto.",
        linkAmazon: "https://www.amazon.it/?tag=TUO-TAG-21",
        linkUfficiale: "https://www.samsung.com/it/",
        ultimoAggiornamento: "2026-11-26",
        pro: ["Molto compatto", "Buon comparto foto", "Prezzo ribassato"],
        contro: ["Batteria ridotta rispetto ai modelli recenti", "Ciclo aggiornamenti quasi concluso"],
        specifiche: { "Display": "6.1\" Dynamic AMOLED 120Hz", "Processore": "Exynos 2200", "Memoria": "128 GB", "Batteria": "3700 mAh" }
    },
    {
        id: 12,
        categoria: "Forni e Microonde",
        marca: "Whirlpool",
        modello: "Forno Incasso AKZ9 6230 IX",
        anno: 2022,
        prezzo: 329.00,
        prezzoListino: 479.00,
        voto: 4.6,
        numeroRecensioni: 1120,
        cosaFa: "Forno elettrico multifunzione da incasso con cavità ampia da 73 litri e pulizia catalitica.",
        linkAmazon: "https://www.amazon.it/?tag=TUO-TAG-21",
        linkUfficiale: "https://www.whirlpool.it/",
        ultimoAggiornamento: "2026-11-26",
        pro: ["Cavità XXL 73L", "Distribuzione uniforme del calore", "Prezzo accessibile"],
        contro: ["Installazione da incasso"],
        specifiche: { "Capacità": "73 Litri", "Tipologia": "Elettrico Multifunzione", "Pulizia": "Catalitica", "Dimensioni": "59.5 x 59.5 x 56.4 cm" }
    }
];

const PRODUTTI_PER_PAGINA = 12;
const CSV_AUTOMATICO_URL = "dati/catalogo-2022-2026.csv";
const STORAGE_KEY = "techCompareProdotti2026";

let prodotti = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [...prodottiIniziali];
let selectedIds = [];
let limiteVisibile = PRODUTTI_PER_PAGINA;

const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const brandFilter = document.getElementById("brandFilter");
const yearFilter = document.getElementById("yearFilter");
const sortFilter = document.getElementById("sortFilter");
const onlyOffersCheckbox = document.getElementById("onlyOffersCheckbox");
const resultsCount = document.getElementById("resultsCount");
const syncStatus = document.getElementById("syncStatus");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const csvFileInput = document.getElementById("csvFileInput");

const compareBar = document.getElementById("compareBar");
const compareCount = document.getElementById("compareCount");
const openCompareBtn = document.getElementById("openCompareBtn");
const clearCompareBtn = document.getElementById("clearCompareBtn");
const compareModal = document.getElementById("compareModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const compareTableContainer = document.getElementById("compareTableContainer");

const addModal = document.getElementById("addModal");
const openAddModalBtn = document.getElementById("openAddModalBtn");
const closeAddModalBtn = document.getElementById("closeAddModalBtn");
const addProductForm = document.getElementById("addProductForm");

function oggiISO() {
    return new Date().toISOString().slice(0, 10);
}

function salvaCatalogo() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prodotti));
}

function parseTestoCSV(testo, origineLabel = "CSV") {
    const righe = testo.split(/\r?\n/).map(r => r.trim()).filter(Boolean);
    if (righe.length < 2) {
        return { aggiunti: 0, aggiornati: 0 };
    }

    const separatore = righe[0].includes(";") ? ";" : ",";
    let aggiunti = 0;
    let aggiornati = 0;

    for (let i = 1; i < righe.length; i++) {
        const cols = righe[i].split(separatore).map(c => c.trim());
        if (cols.length < 5) continue;

        const [
            categoria, marca, modello, anno, prezzo,
            prezzoListino, voto, numeroRecensioni,
            cosaFa, linkAmazon, linkUfficiale, specGreche
        ] = cols;

        const prezzoNum = parseFloat((prezzo || "0").replace(",", "."));
        if (!marca || !modello || isNaN(prezzoNum)) continue;

        const annoNum = parseInt(anno, 10) || 2025;
        const listinoNum = prezzoListino ? parseFloat(prezzoListino.replace(",", ".")) : null;
        const specificheObj = {};

        if (specGreche) {
            specGreche.split("|").forEach(coppia => {
                const idx = coppia.indexOf(":");
                if (idx > -1) {
                    const k = coppia.slice(0, idx).trim();
                    const v = coppia.slice(idx + 1).trim();
                    if (k && v) specificheObj[k] = v;
                }
            });
        }

        const indiceEsistente = prodotti.findIndex(
            p => p.marca.toLowerCase() === marca.toLowerCase() &&
                 p.modello.toLowerCase() === modello.toLowerCase() &&
                 Number(p.anno) === annoNum
        );

        const record = {
            id: indiceEsistente > -1 ? prodotti[indiceEsistente].id : (Date.now() + i + Math.floor(Math.random() * 1000)),
            categoria: categoria || "Altri Elettrodomestici",
            marca,
            modello,
            anno: annoNum,
            prezzo: prezzoNum,
            prezzoListino: listinoNum && !isNaN(listinoNum) ? listinoNum : null,
            voto: parseFloat((voto || "4.5").replace(",", ".")) || 4.5,
            numeroRecensioni: parseInt(numeroRecensioni, 10) || 1,
            cosaFa: cosaFa || "Prodotto importato da catalogo.",
            linkAmazon: linkAmazon || "https://www.amazon.it/?tag=TUO-TAG-21",
            linkUfficiale: linkUfficiale || "https://www.",
            ultimoAggiornamento: oggiISO(),
            pro: [`Caricato da ${origineLabel}`],
            contro: ["Verificare disponibilità attuale"],
            specifiche: Object.keys(specificheObj).length ? specificheObj : { "Anno": String(annoNum) }
        };

        if (indiceEsistente > -1) {
            prodotti[indiceEsistente] = { ...prodotti[indiceEsistente], ...record };
            aggiornati++;
        } else {
            prodotti.unshift(record);
            aggiunti++;
        }
    }

    return { aggiunti, aggiornati };
}

async function caricaCSVAutomatico() {
    if (window.location.protocol === "file:") {
        syncStatus.textContent = "Modalità locale (usa Importa CSV o Live Server)";
        return;
    }

    try {
        const res = await fetch(`${CSV_AUTOMATICO_URL}?t=${Date.now()}`, { cache: "no-store" });
        if (!res.ok) {
            syncStatus.textContent = "Catalogo attivo";
            return;
        }

        const testo = await res.text();
        const esito = parseTestoCSV(testo, CSV_AUTOMATICO_URL);
        if (esito.aggiunti > 0 || esito.aggiornati > 0) {
            salvaCatalogo();
            aggiornaFiltroMarche();
            renderProducts(true);
        }
        syncStatus.textContent = `Aggiornato (${oggiISO()})`;
    } catch (err) {
        syncStatus.textContent = "Catalogo attivo";
    }
}

function aggiornaFiltroMarche() {
    const categoriaCorrente = categoryFilter.value;
    const annoCorrente = yearFilter.value;
    const marcaPrecedente = brandFilter.value;

    const candidati = prodotti.filter(p => {
        const okCat = categoriaCorrente === "all" || p.categoria === categoriaCorrente;
        const okAnno = annoCorrente === "all" || String(p.anno) === annoCorrente;
        return okCat && okAnno;
    });

    const marcheUniche = [...new Set(candidati.map(p => p.marca.trim()))]
        .sort((a, b) => a.localeCompare(b, "it"));

    brandFilter.innerHTML = `<option value="all">Tutte le marche (${marcheUniche.length})</option>`;
    marcheUniche.forEach(marca => {
        const opt = document.createElement("option");
        opt.value = marca;
        opt.textContent = marca;
        brandFilter.appendChild(opt);
    });

    brandFilter.value = marcheUniche.includes(marcaPrecedente) ? marcaPrecedente : "all";
}

function calcolaSconto(prezzo, listino) {
    if (!listino || listino <= prezzo) return 0;
    return Math.round(((listino - prezzo) / listino) * 100);
}

function getProdottiFiltrati() {
    const query = searchInput.value.toLowerCase().trim();
    const category = categoryFilter.value;
    const brand = brandFilter.value;
    const year = yearFilter.value;
    const sortBy = sortFilter.value;
    const soloOfferte = onlyOffersCheckbox.checked;

    const filtrati = prodotti.filter(p => {
        const sconto = calcolaSconto(p.prezzo, p.prezzoListino);
        if (soloOfferte && sconto <= 0) return false;

        const matchCategoria = category === "all" || p.categoria === category;
        const matchMarca = brand === "all" || p.marca.toLowerCase() === brand.toLowerCase();
        const matchAnno = year === "all" || String(p.anno) === year;
        const testoRicerca = `${p.categoria} ${p.marca} ${p.modello} ${p.anno} ${p.cosaFa} ${Object.values(p.specifiche).join(" ")}`.toLowerCase();
        const matchQuery = testoRicerca.includes(query);
        return matchCategoria && matchMarca && matchAnno && matchQuery;
    });

    filtrati.sort((a, b) => {
        if (sortBy === "year-desc") return (b.anno || 0) - (a.anno || 0);
        if (sortBy === "price-asc") return a.prezzo - b.prezzo;
        if (sortBy === "price-desc") return b.prezzo - a.prezzo;
        if (sortBy === "discount") return calcolaSconto(b.prezzo, b.prezzoListino) - calcolaSconto(a.prezzo, a.prezzoListino);
        if (sortBy === "rating") return b.voto - a.voto;
        return 0;
    });

    return filtrati;
}

function renderProducts(resetPage = false) {
    if (resetPage) limiteVisibile = PRODUTTI_PER_PAGINA;

    const filtrati = getProdottiFiltrati();
    const daMostrare = filtrati.slice(0, limiteVisibile);

    resultsCount.textContent = `Mostrati ${daMostrare.length} di ${filtrati.length} prodott${filtrati.length === 1 ? "o" : "i"} (archivio totale: ${prodotti.length})`;
    productsGrid.innerHTML = "";

    if (daMostrare.length === 0) {
        productsGrid.innerHTML = `<p>Nessun prodotto trovato con questi filtri.</p>`;
        loadMoreBtn.classList.add("hidden");
        return;
    }

    daMostrare.forEach(p => {
        const sconto = calcolaSconto(p.prezzo, p.prezzoListino);
        const isSelected = selectedIds.includes(p.id);
        const primeTreSpec = Object.entries(p.specifiche).slice(0, 3);

        const card = document.createElement("article");
        card.className = `card ${isSelected ? "selected" : ""}`;
        card.innerHTML = `
            ${sconto > 0 ? `<span class="badge-discount">-${sconto}%</span>` : ""}
            <div>
                <div class="card-meta">
                    <span class="card-brand-badge">${p.marca}</span>
                    <span class="card-category">${p.categoria}</span>
                    ${p.anno ? `<span class="card-year-badge">${p.anno}</span>` : ""}
                </div>
                <h3 class="card-title">${p.marca} ${p.modello}</h3>
                <div class="rating">★ ${p.voto} (${p.numeroRecensioni} recensioni)</div>
                <p class="card-summary">${p.cosaFa}</p>
                <ul class="specs-preview">
                    ${primeTreSpec.map(([chiave, valore]) => `
                        <li><span>${chiave}:</span> <strong>${valore}</strong></li>
                    `).join("")}
                </ul>
            </div>

            <div>
                <div class="price-box">
                    ${sconto > 0 ? `<span class="old-price">€${p.prezzoListino.toFixed(2)}</span>` : ""}
                    <span class="current-price">€${p.prezzo.toFixed(2)}</span>
                </div>
                <div class="updated-at">Prezzo verificato: ${p.ultimoAggiornamento || oggiISO()}</div>

                <div class="card-actions">
                    <a href="${p.linkAmazon}" target="_blank" rel="nofollow noopener" class="btn-amazon">
                        Vedi offerta su Amazon
                    </a>
                    <div class="links-row">
                        <a href="${p.linkUfficiale}" target="_blank" rel="noopener" class="btn-official">
                            Sito Ufficiale
                        </a>
                        <button class="btn-compare ${isSelected ? "active" : ""}" onclick="toggleCompare(${p.id})">
                            ${isSelected ? "✓ Selezionato" : "+ Confronta"}
                        </button>
                    </div>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });

    loadMoreBtn.classList.toggle("hidden", daMostrare.length >= filtrati.length);
}

csvFileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        const esito = parseTestoCSV(event.target.result, file.name);
        if (esito.aggiunti === 0 && esito.aggiornati === 0) {
            alert("Nessuna riga valida trovata nel file CSV.");
            return;
        }
        salvaCatalogo();
        aggiornaFiltroMarche();
        renderProducts(true);
        alert(`Importazione completata: ${esito.aggiunti} nuovi prodotti, ${esito.aggiornati} aggiornati.`);
        csvFileInput.value = "";
    };
    reader.readAsText(file, "UTF-8");
});

function toggleCompare(id) {
    if (selectedIds.includes(id)) {
        selectedIds = selectedIds.filter(item => item !== id);
    } else {
        if (selectedIds.length >= 3) {
            alert("Puoi confrontare massimo 3 prodotti alla volta.");
            return;
        }
        selectedIds.push(id);
    }
    aggiornaBarraConfronto();
    renderProducts(false);
}

function aggiornaBarraConfronto() {
    compareCount.textContent = selectedIds.length;
    compareBar.classList.toggle("hidden", selectedIds.length === 0);
}

function apriTabellaConfronto() {
    if (selectedIds.length < 2) {
        alert("Seleziona almeno 2 prodotti per confrontarli.");
        return;
    }

    const selezionati = prodotti.filter(p => selectedIds.includes(p.id));
    const tutteLeSpecifiche = new Set();
    selezionati.forEach(p => Object.keys(p.specifiche).forEach(k => tutteLeSpecifiche.add(k)));

    let html = `<table class="compare-table">
        <thead>
            <tr>
                <th>Caratteristica</th>
                ${selezionati.map(p => `<th>${p.marca} ${p.modello}<br><small>${p.categoria} (${p.anno || "—"})</small></th>`).join("")}
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Marca e Anno</th>
                ${selezionati.map(p => `<td><strong>${p.marca}</strong> · Anno ${p.anno || "—"}</td>`).join("")}
            </tr>
            <tr>
                <th>Prezzo Attuale</th>
                ${selezionati.map(p => `<td><strong>€${p.prezzo.toFixed(2)}</strong><br><small>Agg. ${p.ultimoAggiornamento || oggiISO()}</small></td>`).join("")}
            </tr>
            <tr>
                <th>Valutazione</th>
                ${selezionati.map(p => `<td>★ ${p.voto} (${p.numeroRecensioni} recensioni)</td>`).join("")}
            </tr>
            <tr>
                <th>A chi è adatto</th>
                ${selezionati.map(p => `<td>${p.cosaFa}</td>`).join("")}
            </tr>
            ${Array.from(tutteLeSpecifiche).map(spec => `
                <tr>
                    <th>${spec}</th>
                    ${selezionati.map(p => `<td>${p.specifiche[spec] || "—"}</td>`).join("")}
                </tr>
            `).join("")}
            <tr>
                <th>Pro</th>
                ${selezionati.map(p => `
                    <td><ul class="pro-list">${p.pro.map(item => `<li>${item}</li>`).join("")}</ul></td>
                `).join("")}
            </tr>
            <tr>
                <th>Contro</th>
                ${selezionati.map(p => `
                    <td><ul class="contro-list">${p.contro.map(item => `<li>${item}</li>`).join("")}</ul></td>
                `).join("")}
            </tr>
            <tr>
                <th>Acquisto</th>
                ${selezionati.map(p => `
                    <td>
                        <a href="${p.linkAmazon}" target="_blank" rel="nofollow noopener" class="btn-amazon" style="display:block; margin-bottom:6px;">Amazon</a>
                        <a href="${p.linkUfficiale}" target="_blank" rel="noopener" class="btn-official" style="display:block;">Sito Ufficiale</a>
                    </td>
                `).join("")}
            </tr>
        </tbody>
    </table>`;

    compareTableContainer.innerHTML = html;
    compareModal.classList.remove("hidden");
}

addProductForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const righeSpec = document.getElementById("newSpecifiche").value.split("\n");
    const specificheObj = {};
    righeSpec.forEach(riga => {
        const idx = riga.indexOf(":");
        if (idx > -1) {
            const chiave = riga.slice(0, idx).trim();
            const valore = riga.slice(idx + 1).trim();
            if (chiave && valore) specificheObj[chiave] = valore;
        }
    });

    const nuovoProdotto = {
        id: Date.now(),
        categoria: document.getElementById("newCategoria").value,
        marca: document.getElementById("newMarca").value.trim(),
        modello: document.getElementById("newModello").value.trim(),
        anno: parseInt(document.getElementById("newAnno").value, 10) || 2026,
        prezzo: parseFloat(document.getElementById("newPrezzo").value),
        prezzoListino: parseFloat(document.getElementById("newListino").value) || null,
        voto: 4.5,
        numeroRecensioni: 1,
        cosaFa: document.getElementById("newCosaFa").value.trim(),
        linkAmazon: document.getElementById("newLinkAmazon").value.trim(),
        linkUfficiale: document.getElementById("newLinkUfficiale").value.trim(),
        ultimoAggiornamento: oggiISO(),
        pro: ["Nuovo inserimento a catalogo"],
        contro: ["Da valutare nel tempo"],
        specifiche: Object.keys(specificheObj).length ? specificheObj : { "Info": "Vedi sito ufficiale" }
    };

    prodotti.unshift(nuovoProdotto);
    salvaCatalogo();

    aggiornaFiltroMarche();
    renderProducts(true);
    addProductForm.reset();
    addModal.classList.add("hidden");
});

searchInput.addEventListener("input", () => renderProducts(true));
categoryFilter.addEventListener("change", () => {
    aggiornaFiltroMarche();
    renderProducts(true);
});
yearFilter.addEventListener("change", () => {
    aggiornaFiltroMarche();
    renderProducts(true);
});
brandFilter.addEventListener("change", () => renderProducts(true));
sortFilter.addEventListener("change", () => renderProducts(true));
onlyOffersCheckbox.addEventListener("change", () => renderProducts(true));

loadMoreBtn.addEventListener("click", () => {
    limiteVisibile += PRODUTTI_PER_PAGINA;
    renderProducts(false);
});

resetFiltersBtn.addEventListener("click", () => {
    searchInput.value = "";
    categoryFilter.value = "all";
    yearFilter.value = "all";
    onlyOffersCheckbox.checked = false;
    aggiornaFiltroMarche();
    brandFilter.value = "all";
    sortFilter.value = "featured";
    renderProducts(true);
});

openCompareBtn.addEventListener("click", apriTabellaConfronto);
clearCompareBtn.addEventListener("click", () => {
    selectedIds = [];
    aggiornaBarraConfronto();
    renderProducts(false);
});

closeModalBtn.addEventListener("click", () => compareModal.classList.add("hidden"));
compareModal.addEventListener("click", (e) => {
    if (e.target === compareModal) compareModal.classList.add("hidden");
});

openAddModalBtn.addEventListener("click", () => addModal.classList.remove("hidden"));
closeAddModalBtn.addEventListener("click", () => addModal.classList.add("hidden"));
addModal.addEventListener("click", (e) => {
    if (e.target === addModal) addModal.classList.add("hidden");
});

// Avvio iniziale
aggiornaFiltroMarche();
renderProducts(true);
caricaCSVAutomatico();