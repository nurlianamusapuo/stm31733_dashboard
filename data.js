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
            "1.1 Apply basic knowledge of network administration",
            "1.2 Roles & responsibilities of Network Administrator",
            "1.3 Functions of Network Operating Center (NOC)",
            "1.4 Best practices in network administration"
        ],
        weeks: "Minggu 1 – 3",
        clo: "CLO 1",
        status: "selesai",   // selesai | sedang | belum
        progress: 100
    },
    {
        id: "T2",
        no: 2,
        title: "Fundamentals of Network Devices",
        subtopics: [
            "2.1 Virtual LAN (VLAN) concept",
            "2.2 Basic routing protocols (Static & Dynamic)",
            "2.3 Server types and Network Operating System (NOS)"
        ],
        weeks: "Minggu 4 – 6",
        clo: "CLO 1",
        status: "selesai",
        progress: 100
    },
    {
        id: "T3",
        no: 3,
        title: "Network Configuration",
        subtopics: [
            "3.1 Initial network device configuration (Switch & Router)",
            "3.2 VLAN and Trunking configuration",
            "3.3 Network routing (Static & RIPv2)",
            "3.4 DHCP configuration",
            "3.5 DNS configuration",
            "3.6 Basic network troubleshooting"
        ],
        weeks: "Minggu 7 – 10",
        clo: "CLO 2",
        status: "sedang",
        progress: 60
    },
    {
        id: "T4",
        no: 4,
        title: "Network Monitor",
        subtopics: [
            "4.1 Concept of network monitoring",
            "4.2 Network monitoring protocols (SNMP, NetFlow, SSH)",
            "4.3 Network monitoring tools (install, configure, report)"
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

// Simpan & muat data dari localStorage
function saveData() {
    localStorage.setItem("stm31733_topics",      JSON.stringify(TOPICS));
    localStorage.setItem("stm31733_assessments", JSON.stringify(ASSESSMENTS));
    localStorage.setItem("stm31733_students",    JSON.stringify(STUDENTS));
}

function loadData() {
    const t = localStorage.getItem("stm31733_topics");
    const a = localStorage.getItem("stm31733_assessments");
    const s = localStorage.getItem("stm31733_students");
    if (t) TOPICS.splice(0, TOPICS.length, ...JSON.parse(t));
    if (a) ASSESSMENTS.splice(0, ASSESSMENTS.length, ...JSON.parse(a));
    if (s) STUDENTS.splice(0, STUDENTS.length, ...JSON.parse(s));
}
