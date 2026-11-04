// ============================================================
// STM31733 Network Administration - Dashboard Data
// Kelas: S12627 | Semester 3 / Tahun 2
// ============================================================

const COURSE_INFO = {
    code: "STM31733",
    name: "Network Administration",
    lecturer: "Nurliana binti Musa",
    class: "STM 3",
    semester: "Sesi 1 2026/2027",
    classCode: "S12627",
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
            { text: "1.1 Basic knowledge of network administration",   checked: false },
            { text: "1.2 Tasks  in network administration", checked: false },
            { text: "1.3 Functions of a Network Operating Center (NOC)",       checked: false },
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
            { text: "2.3 Server concepts",            checked: false }
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
            { text: "3.1 Initial network device configuration", checked: false },
            { text: "3.2 VLAN and Trunking configuration",                        checked: false },
            { text: "3.3 Implement Network routing (Static & RIPv2)",                       checked: false },
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
            { text: "4.3 Network monitoring tools",      checked: false }
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
const DATA_VERSION = "4";

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
const GSHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRVi7c6TVDDTGU0MzE0jtu7kddq1PmbhvSbXAZPCRpa6zdpTc_8EVjB0QmDwxSQYnVcyfCDT-8ZE5mj/pub?gid=1043945462&single=true&output=csv";

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

// ============================================================
// JADUAL AKADEMIK — Fleksibel (boleh tetapkan hari & jam)
// ============================================================

const SCHEDULE_CONFIG_KEY = "stm31733_schedule_config";

// Nama hari (0=Ahad, 1=Isnin, 2=Selasa, 3=Rabu, 4=Khamis, 5=Jumaat, 6=Sabtu)
const DAY_NAMES = ["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"];
const DAY_SHORT = ["Ahd","Isn","Sel","Rab","Kam","Jum","Sab"];

function getScheduleConfig() {
    const saved = localStorage.getItem(SCHEDULE_CONFIG_KEY);
    if (saved) return JSON.parse(saved);
    // Default: Selasa 2j + Jumaat 3j
    return {
        semesterStart: "",      // YYYY-MM-DD — tarikh mula semester
        midtermBreak:  "",      // YYYY-MM-DD — tarikh mula cuti pertengahan
        midtermWeeks:  1,       // bilangan minggu cuti
        classDays: [            // hari kelas & jam
            { day: 1, hours: 0 },  // Isnin
            { day: 2, hours: 2 },  // Selasa
            { day: 3, hours: 0 },  // Rabu
            { day: 4, hours: 0 },  // Khamis
            { day: 5, hours: 3 },  // Jumaat
        ]
    };
}

function saveScheduleConfig(cfg) {
    localStorage.setItem(SCHEDULE_CONFIG_KEY, JSON.stringify(cfg));
}

// Definisi slot kelas per subtopik (dalam jam)
// Setiap entry: { ref, label, hours, pbAfter }
// pbAfter: penilaian yang diadakan SELEPAS subtopik ini (null jika tiada)
const SUBTOPIC_SCHEDULE = [
    { ref: "T1.1", topicId: "T1", label: "1.1 Basic knowledge of network administration",   hours: 1,   pbAfter: null },
    { ref: "T1.2", topicId: "T1", label: "1.2 Tasks  in network administration", hours: 1,   pbAfter: null },
    { ref: "T1.3", topicId: "T1", label: "1.3 Functions of a Network Operating Center (NOC)",       hours: 1,   pbAfter: null },
    { ref: "T1.4", topicId: "T1", label: "1.4 Best practices in network administration",          hours: 1,   pbAfter: null },
    { ref: "T2.1", topicId: "T2", label: "2.1 Virtual LAN (VLAN) concept",                        hours: 1,   pbAfter: null },
    { ref: "T2.2", topicId: "T2", label: "2.2 Basic routing protocols (Static & Dynamic)",        hours: 1,   pbAfter: null },
    { ref: "T2.3", topicId: "T2", label: "2.3 Server concepts",   hours: 1,   pbAfter: "PB1" },  // Test 1j selepas T2.3
    { ref: "T3.1", topicId: "T3", label: "3.1 Initial network device configuration",              hours: 7.5, pbAfter: null },
    { ref: "T3.2", topicId: "T3", label: "3.2 VLAN and Trunking configuration",                   hours: 8.5, pbAfter: "PB2" },  // Practical 1 (3j) selepas T3.2
    { ref: "T3.3", topicId: "T3", label: "3.3 Implement Network routing (Static & RIPv2)",                  hours: 8.5, pbAfter: "PB3" },  // Practical 2 (3j) selepas T3.3
    { ref: "T3.4", topicId: "T3", label: "3.4 DHCP configuration",                               hours: 8.5, pbAfter: null },
    { ref: "T3.5", topicId: "T3", label: "3.5 DNS configuration",                                hours: 8,   pbAfter: null },
    { ref: "T3.6", topicId: "T3", label: "3.6 Basic network troubleshooting",                    hours: 6,   pbAfter: "PB4" },  // Practical 3 (3j) selepas T3.6
    { ref: "T4.1", topicId: "T4", label: "4.1 Concept of network monitoring",                    hours: 0.5, pbAfter: null },
    { ref: "T4.2", topicId: "T4", label: "4.2 Network monitoring protocols (SNMP, NetFlow, SSH)", hours: 0.5, pbAfter: null },
    { ref: "T4.3", topicId: "T4", label: "4.3 Network monitoring tools",                         hours: 3,   pbAfter: "PB5" },  // Presentation (2j) selepas T4.3
];

// Jam penilaian
const PB_HOURS = { PB1: 1, PB2: 3, PB3: 3, PB4: 3, PB5: 2 };

// ---- Kira tarikh hari pertama (dayOfWeek) pada atau selepas tarikh mula ----
// dayOfWeek: 0=Ahad, 1=Isnin, ... 6=Sabtu
function firstDayOnOrAfter(startDateStr, dayOfWeek) {
    const d = new Date(startDateStr + "T00:00:00");
    const diff = (dayOfWeek - d.getDay() + 7) % 7;
    return new Date(d.getTime() + diff * 86400000);
}

// ---- Jana 14 minggu akademik (fleksibel hari kelas) ----
function generateAcademicWeeks(cfg) {
    if (!cfg.semesterStart) return [];

    const classDays = (cfg.classDays || []).filter(cd => cd.hours > 0).sort((a,b) => a.day - b.day);
    if (classDays.length === 0) return [];

    const msPerWeek = 7 * 86400000;

    // Tentukan Isnin minggu pertama kelas
    // Cari hari kelas terawal, kemudian kira Isnin minggu tersebut
    const firstClassDay = classDays[0].day; // hari kelas terawal
    const firstClassDate = firstDayOnOrAfter(cfg.semesterStart, firstClassDay);
    // Isnin minggu yang sama (day=1)
    const mondayOffset = (firstClassDate.getDay() - 1 + 7) % 7;
    let weekMonday = new Date(firstClassDate.getTime() - mondayOffset * 86400000);

    const breakStart = cfg.midtermBreak ? new Date(cfg.midtermBreak + "T00:00:00") : null;
    const breakCount = parseInt(cfg.midtermWeeks) || 1;

    const weeks = [];
    let academicWeek = 1;
    let calendarWeek = 0;

    while (academicWeek <= 14) {
        calendarWeek++;

        // Semak cuti — bandingkan dengan Isnin minggu ini
        const isBreak = breakStart &&
            weekMonday >= breakStart &&
            weekMonday < new Date(breakStart.getTime() + breakCount * msPerWeek);

        // Kira tarikh setiap hari kelas minggu ini
        const classDates = classDays.map(cd => {
            const d = new Date(weekMonday.getTime() + (cd.day - 1) * 86400000);
            // Jika hari=0 (Ahad), offset dari Isnin adalah -1 hari (Ahad sebelumnya) — handle edge case
            const offset = cd.day === 0 ? 6 : (cd.day - 1);
            return {
                day:    cd.day,
                dayName: DAY_NAMES[cd.day],
                dayShort: DAY_SHORT[cd.day],
                hours:  cd.hours,
                date:   new Date(weekMonday.getTime() + offset * 86400000).toISOString().slice(0,10)
            };
        });

        // Tarikh pertama & terakhir kelas dalam minggu untuk paparan
        const firstDate = classDates[0].date;
        const lastDate  = classDates[classDates.length-1].date;

        if (isBreak) {
            weeks.push({ calWeek: calendarWeek, acWeek: null, firstDate, lastDate, classDates, isBreak: true, label: "Cuti Pertengahan Semester" });
        } else {
            weeks.push({ calWeek: calendarWeek, acWeek: academicWeek, firstDate, lastDate, classDates, isBreak: false, label: "Minggu " + academicWeek });
            academicWeek++;
        }
        weekMonday = new Date(weekMonday.getTime() + msPerWeek);
    }
    return weeks;
}

// ---- Agihkan subtopik & PB ke dalam slot minggu (fleksibel) ----
function allocateSchedule(weeks) {
    const slots = [];
    weeks.forEach((w, i) => {
        if (!w.isBreak) {
            w.classDates.forEach(cd => {
                slots.push({ weekIdx: i, dayName: cd.dayName, dayShort: cd.dayShort, day: cd.day, date: cd.date, hoursLeft: cd.hours });
            });
        }
    });

    const allocation = []; // { weekIdx, day, date, type, ref, label, hours }
    let slotIdx = 0;

    const addItem = (type, ref, label, hours) => {
        let remaining = hours;
        while (remaining > 0 && slotIdx < slots.length) {
            const slot = slots[slotIdx];
            const take = Math.min(remaining, slot.hoursLeft);
            allocation.push({
                weekIdx: slot.weekIdx,
                day:     slot.day,
                date:    slot.date,
                type,     // "subtopic" | "pb"
                ref,
                label,
                hours:   take,
                partial: take < hours,
            });
            slot.hoursLeft -= take;
            remaining      -= take;
            if (slot.hoursLeft <= 0) slotIdx++;
        }
    };

    SUBTOPIC_SCHEDULE.forEach(st => {
        addItem("subtopic", st.ref, st.label, st.hours);
        if (st.pbAfter) {
            const pbName = ASSESSMENTS.find(a => a.id === st.pbAfter)?.name || st.pbAfter;
            addItem("pb", st.pbAfter, pbName + " (" + st.pbAfter + ")", PB_HOURS[st.pbAfter] || 1);
        }
    });

    return allocation;
}

// ---- Kumpulkan allocation ikut minggu ----
function groupAllocationByWeek(weeks, allocation) {
    return weeks.map((w, i) => {
        const items = allocation.filter(a => a.weekIdx === i);
        // Kira unik subtopik & topik dalam minggu ini
        const subtopicRefs = [...new Set(items.filter(a=>a.type==="subtopic").map(a=>a.ref))];
        const pbRefs       = [...new Set(items.filter(a=>a.type==="pb").map(a=>a.ref))];
        const topicIds     = [...new Set(subtopicRefs.map(r => {
            const st = SUBTOPIC_SCHEDULE.find(s=>s.ref===r);
            return st ? st.topicId : null;
        }).filter(Boolean))];
        return { ...w, items, subtopicRefs, pbRefs, topicIds };
    });
}
