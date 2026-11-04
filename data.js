// ============================================================
// STM31733 Network Administration - Dashboard Data
// Kelas: S12627 | Semester 3 / Tahun 2
// ============================================================

const COURSE_INFO = {
    code: "STM31733",
    name: "Network Administration",
    lecturer: "Nurliana Binti Musa",
    class: "S12627",
    semester: "Semester 3 / Tahun 2",
    totalStudents: 15,
    caWeight: 70,
    faWeight: 30,
    caPassMark: 28,   // 40% daripada 70
    faPassMark: 12,   // 40% daripada 30
};

const TOPICS = [
    {
        id: "T1",
        no: 1,
        title: "Introduction to Network Administration",
        subtopics: [
            { text: "1.1 Apply basic knowledge of network administration",   checked: false },
            { text: "1.2 Roles & responsibilities of Network Administrator", checked: false },
            { text: "1.3 Functions of Network Operating Center (NOC)",       checked: false },
            { text: "1.4 Best practices in network administration",          checked: false }
        ],
        weeks: "Minggu 1 – 3",
        clo: "CLO 1",
        status: "belum",
        progress: 0
    },
    {
        id: "T2",
        no: 2,
        title: "Fundamentals of Network Devices",
        subtopics: [
            { text: "2.1 Virtual LAN (VLAN) concept",                                 checked: false },
            { text: "2.2 Basic routing protocols (Static & Dynamic)",                 checked: false },
            { text: "2.3 Server types and Network Operating System (NOS)",            checked: false }
        ],
        weeks: "Minggu 4 – 6",
        clo: "CLO 1",
        status: "belum",
        progress: 0
    },
    {
        id: "T3",
        no: 3,
        title: "Network Configuration",
        subtopics: [
            { text: "3.1 Initial network device configuration (Switch & Router)", checked: false },
            { text: "3.2 VLAN and Trunking configuration",                        checked: false },
            { text: "3.3 Network routing (Static & RIPv2)",                       checked: false },
            { text: "3.4 DHCP configuration",                                     checked: false },
            { text: "3.5 DNS configuration",                                      checked: false },
            { text: "3.6 Basic network troubleshooting",                          checked: false }
        ],
        weeks: "Minggu 7 – 10",
        clo: "CLO 2",
        status: "sedang",
        progress: 0
    },
    {
        id: "T4",
        no: 4,
        title: "Network Monitor",
        subtopics: [
            { text: "4.1 Concept of network monitoring",                              checked: false },
            { text: "4.2 Network monitoring protocols (SNMP, NetFlow, SSH)",          checked: false },
            { text: "4.3 Network monitoring tools (install, configure, report)",      checked: false }
        ],
        weeks: "Minggu 11 – 13",
        clo: "CLO 3",
        status: "belum",
        progress: 0
    }
];

const ASSESSMENTS = [
    { id: "PB1", name: "Test",          type: "test",         weight: 15, maxMark: 15, clo: "CLO 1", topics: "T1, T2", status: "selesai" },
    { id: "PB2", name: "Practical 1",   type: "practical",    weight: 15, maxMark: 15, clo: "CLO 2", topics: "T3",     status: "selesai" },
    { id: "PB3", name: "Practical 2",   type: "practical",    weight: 15, maxMark: 15, clo: "CLO 2", topics: "T3",     status: "sedang"  },
    { id: "PB4", name: "Practical 3",   type: "practical",    weight: 15, maxMark: 15, clo: "CLO 2", topics: "T3",     status: "belum"   },
    { id: "PB5", name: "Presentation",  type: "presentation", weight: 10, maxMark: 10, clo: "CLO 3", topics: "T4",     status: "belum"   },
    { id: "FA",  name: "Final Assessment", type: "final",     weight: 30, maxMark: 30, clo: "CLO 1,2,3", topics: "All", status: "belum" },
];

// Senarai 15 pelajar — nama boleh diedit
const STUDENTS = [
    { id: 1,  name: "Ahmad Farid bin Azman",       marks: { PB1: null, PB2: null, PB3: null, PB4: null, PB5: null, FA: null } },
    { id: 2,  name: "Amirah Husna bt Zainal",      marks: { PB1: null, PB2: null, PB3: null, PB4: null, PB5: null, FA: null } },
    { id: 3,  name: "Danial Hakim bin Rosli",      marks: { PB1: null, PB2: null, PB3: null, PB4: null, PB5: null, FA: null } },
    { id: 4,  name: "Farhana bt Mohd Noor",        marks: { PB1: null, PB2: null, PB3: null, PB4: null, PB5: null, FA: null } },
    { id: 5,  name: "Hafizuddin bin Kamal",        marks: { PB1: null, PB2: null, PB3: null, PB4: null, PB5: null, FA: null } },
    { id: 6,  name: "Izzatul Husna bt Ibrahim",    marks: { PB1: null, PB2: null, PB3: null, PB4: null, PB5: null, FA: null } },
    { id: 7,  name: "Khairul Azwan bin Saad",      marks: { PB1: null, PB2: null, PB3: null, PB4: null, PB5: null, FA: null } },
    { id: 8,  name: "Liyana bt Othman",            marks: { PB1: null, PB2: null, PB3: null, PB4: null, PB5: null, FA: null } },
    { id: 9,  name: "Muhammad Izzwan bin Yusof",   marks: { PB1: null, PB2: null, PB3: null, PB4: null, PB5: null, FA: null } },
    { id: 10, name: "Norashikin bt Ramli",         marks: { PB1: null, PB2: null, PB3: null, PB4: null, PB5: null, FA: null } },
    { id: 11, name: "Nur Syazwani bt Hamid",       marks: { PB1: null, PB2: null, PB3: null, PB4: null, PB5: null, FA: null } },
    { id: 12, name: "Razif bin Zulkifli",          marks: { PB1: null, PB2: null, PB3: null, PB4: null, PB5: null, FA: null } },
    { id: 13, name: "Siti Hajar bt Abdul Halim",   marks: { PB1: null, PB2: null, PB3: null, PB4: null, PB5: null, FA: null } },
    { id: 14, name: "Wan Hafifi bin Wan Daud",     marks: { PB1: null, PB2: null, PB3: null, PB4: null, PB5: null, FA: null } },
    { id: 15, name: "Zulaikha bt Mokhtar",         marks: { PB1: null, PB2: null, PB3: null, PB4: null, PB5: null, FA: null } },
];

// Versi data — naik nombor apabila format data berubah
const DATA_VERSION = "3";

// Simpan & muat data dari localStorage
function saveData() {
    localStorage.setItem("stm31733_version",     DATA_VERSION);
    localStorage.setItem("stm31733_topics",      JSON.stringify(TOPICS));
    localStorage.setItem("stm31733_assessments", JSON.stringify(ASSESSMENTS));
    localStorage.setItem("stm31733_students",    JSON.stringify(STUDENTS));
}

function loadData() {
    // Semak versi — jika berbeza atau tiada, buang data lama & guna default
    const savedVersion = localStorage.getItem("stm31733_version");
    if (savedVersion !== DATA_VERSION) {
        localStorage.removeItem("stm31733_topics");
        localStorage.removeItem("stm31733_assessments");
        localStorage.removeItem("stm31733_students");
        localStorage.setItem("stm31733_version", DATA_VERSION);
        return; // guna data default dari data.js
    }

    const t = localStorage.getItem("stm31733_topics");
    const a = localStorage.getItem("stm31733_assessments");
    const s = localStorage.getItem("stm31733_students");
    if (t) TOPICS.splice(0, TOPICS.length, ...JSON.parse(t));
    if (a) ASSESSMENTS.splice(0, ASSESSMENTS.length, ...JSON.parse(a));
    if (s) STUDENTS.splice(0, STUDENTS.length, ...JSON.parse(s));
}

// ============================================================
// GOOGLE SHEETS INTEGRATION
// ============================================================

// URL CSV Google Sheets (Published to Web → CSV)
const GSHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vToi9iXwluPp10EMBe5g8Y6JCKLzSpk39WKZWxpA9q6lpVzO5R9_XcTMf6uNPtBO5eicwhGOewpT2Z3/pub?gid=1681097774&single=true&output=csv";

// Proxy untuk atasi CORS (jika diperlukan)
const CORS_PROXY = "https://api.allorigins.win/raw?url=";

// Status sync terakhir
let lastSyncTime = null;
let isSyncing    = false;

// ---- Parse CSV dengan sokongan quoted fields ----
function parseCSVText(text) {
    const rows = [];
    const lines = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
    for (const line of lines) {
        if (!line.trim()) continue;
        const cols = [];
        let cur = "", inQuote = false;
        for (let i = 0; i < line.length; i++) {
            const ch = line[i];
            if (ch === '"') {
                if (inQuote && line[i+1] === '"') { cur += '"'; i++; }
                else inQuote = !inQuote;
            } else if (ch === ',' && !inQuote) {
                cols.push(cur.trim()); cur = "";
            } else {
                cur += ch;
            }
        }
        cols.push(cur.trim());
        rows.push(cols);
    }
    return rows;
}

// ---- Parse data pelajar dari rows CSV ----
// Struktur sheet: Row 1 = kumpulan header (TEST, PRACTICAL 1, ...)
//                 Row 2 = sub-header (NO PEND, NAMA, 15, 15, ...)
//                 Row 3+ = data pelajar
// Index lajur: 0=NoPend, 1=Nama, 2=PB1, 3=PB2, 4=PB3, 5=PB4, 6=PB5, 7=TotalCA(skip), 8=FA
function parseStudentsFromCSV(rows) {
    const dataRows = rows.slice(2); // skip 2 baris header
    const parsed = [];
    let autoId = 1;
    for (const row of dataRows) {
        const nama = (row[1] || "").trim();
        if (!nama) continue; // skip baris kosong
        const toNum = (v) => {
            const n = parseFloat((v || "").toString().replace(",", "."));
            return isNaN(n) ? null : n;
        };
        parsed.push({
            id:   autoId++,
            name: nama,
            noPend: (row[0] || "").trim(),
            marks: {
                PB1: toNum(row[2]),
                PB2: toNum(row[3]),
                PB3: toNum(row[4]),
                PB4: toNum(row[5]),
                PB5: toNum(row[6]),
                FA:  toNum(row[8]),
            }
        });
    }
    return parsed;
}

// ---- Tarik data dari Google Sheets ----
async function fetchFromGoogleSheets(onSuccess, onError) {
    if (isSyncing) return;
    isSyncing = true;
    updateSyncUI("loading");

    // Cuba direct fetch dahulu, kemudian fallback ke proxy jika CORS error
    const urls = [
        GSHEET_CSV_URL,
        CORS_PROXY + encodeURIComponent(GSHEET_CSV_URL)
    ];

    let lastErr = null;
    for (const url of urls) {
        try {
            const resp = await fetch(url, { cache: "no-store" });
            if (!resp.ok) throw new Error("HTTP " + resp.status);
            const text = await resp.text();
            if (!text || text.length < 10) throw new Error("Data kosong");

            const rows    = parseCSVText(text);
            const students = parseStudentsFromCSV(rows);

            if (students.length === 0) throw new Error("Tiada data pelajar ditemui");

            // Kemaskini array STUDENTS
            STUDENTS.splice(0, STUDENTS.length, ...students);
            saveData();

            lastSyncTime = new Date();
            isSyncing = false;
            updateSyncUI("success");
            if (typeof onSuccess === "function") onSuccess(students.length);
            return;
        } catch (err) {
            lastErr = err;
        }
    }

    // Semua URL gagal
    isSyncing = false;
    updateSyncUI("error");
    if (typeof onError === "function") onError(lastErr);
}

// ---- Kemaskini UI sync indicator ----
function updateSyncUI(state) {
    const btn = document.getElementById("syncBtn");
    const lbl = document.getElementById("syncStatus");
    if (!btn && !lbl) return;

    if (state === "loading") {
        if (btn) { btn.disabled = true; btn.textContent = "⟳ Menyegerak..."; }
        if (lbl) { lbl.textContent = "Sedang mengambil data..."; lbl.style.color = "#d97706"; }
    } else if (state === "success") {
        if (btn) { btn.disabled = false; btn.textContent = "🔄 Refresh dari Google Sheets"; }
        if (lbl) {
            const t = lastSyncTime ? lastSyncTime.toLocaleTimeString("ms-MY") : "";
            lbl.textContent = "✅ Dikemaskini: " + t;
            lbl.style.color = "#16a34a";
        }
    } else if (state === "error") {
        if (btn) { btn.disabled = false; btn.textContent = "🔄 Refresh dari Google Sheets"; }
        if (lbl) { lbl.textContent = "❌ Gagal — semak URL atau sambungan internet"; lbl.style.color = "#dc2626"; }
    }
}

// ---- Auto-refresh setiap 5 minit ----
function startAutoRefresh(onSuccess, onError) {
    setInterval(() => {
        fetchFromGoogleSheets(onSuccess, onError);
    }, 5 * 60 * 1000); // 5 minit
}
