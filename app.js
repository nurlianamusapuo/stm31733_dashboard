// ============================================================
// STM31733 Dashboard - Shared Utility Functions
// ============================================================

// Panggil loadData() di setiap halaman semasa muat
document.addEventListener("DOMContentLoaded", () => {
    loadData();
    setSidebarInfo();
    if (typeof pageInit === "function") pageInit();
});

// ---- Isi maklumat sidebar dari COURSE_INFO ----
function setSidebarInfo() {
    const el = document.getElementById("sf-info");
    if (!el) return;
    el.innerHTML = `
      <div style="font-size:10px;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:2px">Pensyarah Kursus</div>
      <div style="color:rgba(255,255,255,0.85);font-weight:600;font-size:11.5px">${COURSE_INFO.lecturer}</div>
      <div style="color:rgba(255,255,255,0.5);font-size:11px;margin-top:3px">${COURSE_INFO.class} · ${COURSE_INFO.semester}</div>
    `;
}

// ---- Status helpers ----
function statusBadge(status) {
    const map = {
        selesai: '<span class="badge badge-success">✓ Selesai</span>',
        sedang:  '<span class="badge badge-warning">⟳ Sedang</span>',
        belum:   '<span class="badge badge-neutral">— Belum</span>',
    };
    return map[status] || map.belum;
}

function pbStatusBadge(status) {
    const map = {
        selesai: '<span class="badge badge-success">✓ Selesai</span>',
        sedang:  '<span class="badge badge-warning">⟳ Aktif</span>',
        belum:   '<span class="badge badge-neutral">— Belum</span>',
    };
    return map[status] || map.belum;
}

// ---- Markah helpers ----
function calcCA(marks) {
    const keys = ["PB1","PB2","PB3","PB4","PB5"];
    const max   = [15,15,15,15,10];
    let total = 0;
    let hasMark = false;
    keys.forEach((k, i) => {
        if (marks[k] !== null && marks[k] !== "") {
            total += parseFloat(marks[k]) || 0;
            hasMark = true;
        }
    });
    return hasMark ? parseFloat(total.toFixed(2)) : null;
}

function calcTotal(marks) {
    const ca = calcCA(marks);
    const fa = marks.FA !== null && marks.FA !== "" ? parseFloat(marks.FA) : null;
    if (ca === null && fa === null) return null;
    return parseFloat(((ca || 0) + (fa || 0)).toFixed(2));
}

function caStatus(marks) {
    const ca = calcCA(marks);
    if (ca === null) return "tiada";
    if (ca >= COURSE_INFO.caPassMark) return "lulus";
    return "gagal";
}

function faStatus(marks) {
    const fa = marks.FA;
    if (fa === null || fa === "") return "tiada";
    if (parseFloat(fa) >= COURSE_INFO.faPassMark) return "lulus";
    return "gagal";
}

function overallStatus(marks) {
    const cs = caStatus(marks);
    const fs = faStatus(marks);
    if (cs === "tiada" || fs === "tiada") return "belum";
    if (cs === "lulus" && fs === "lulus") return "lulus";
    return "gagal";
}

function riskStatus(marks) {
    // Pelajar berisiko: ada markah CA tapi < 28 atau hampir gagal
    const ca = calcCA(marks);
    if (ca === null) return false;
    const submittedCount = ["PB1","PB2","PB3","PB4","PB5"].filter(k => marks[k] !== null && marks[k] !== "").length;
    if (submittedCount === 0) return false;
    // Jika semua sudah dihantar dan CA < lulus
    if (submittedCount === 5 && ca < COURSE_INFO.caPassMark) return true;
    // Jika sebahagian markah ada dan projected CA < lulus
    if (submittedCount > 0 && submittedCount < 5) {
        const projected = (ca / submittedCount) * 5;
        if (projected < COURSE_INFO.caPassMark) return true;
    }
    return false;
}

function markColor(val, max) {
    if (val === null || val === "") return "";
    const pct = (parseFloat(val) / max) * 100;
    if (pct >= 70) return "color:#16a34a;font-weight:700";
    if (pct >= 40) return "color:#d97706;font-weight:700";
    return "color:#dc2626;font-weight:700";
}

// ---- CLO Attainment ----
function calcCLOAttainment() {
    // CLO1 → PB1 (15), CLO2 → PB2+PB3+PB4 (45), CLO3 → PB5 (10)
    const cloMap = {
        CLO1: { keys: ["PB1"], max: 15 },
        CLO2: { keys: ["PB2","PB3","PB4"], max: 45 },
        CLO3: { keys: ["PB5"], max: 10 },
    };
    const result = { CLO1: null, CLO2: null, CLO3: null };
    for (const [clo, cfg] of Object.entries(cloMap)) {
        let totals = [];
        STUDENTS.forEach(s => {
            let sum = 0; let hasAny = false;
            cfg.keys.forEach(k => {
                if (s.marks[k] !== null && s.marks[k] !== "") {
                    sum += parseFloat(s.marks[k]) || 0;
                    hasAny = true;
                }
            });
            if (hasAny) totals.push(sum);
        });
        if (totals.length > 0) {
            const avg = totals.reduce((a,b)=>a+b,0) / totals.length;
            result[clo] = parseFloat(((avg / cfg.max) * 100).toFixed(1));
        }
    }
    return result;
}

// ---- Progress bar helper ----
function progressBar(pct, color = "blue") {
    const c = pct >= 70 ? "green" : pct >= 40 ? "amber" : pct > 0 ? "red" : "blue";
    return `<div class="progress-bar-wrap"><div class="progress-bar-fill ${c}" style="width:${pct}%"></div></div>`;
}

// ---- Semak marking selesai ----
function assessmentSubmittedCount(pbId) {
    return STUDENTS.filter(s => s.marks[pbId] !== null && s.marks[pbId] !== "").length;
}

// ---- Kira status PB automatik dari data pelajar ----
function calcPBStatus(pbId) {
    if (STUDENTS.length === 0) return "belum";
    const submitted = assessmentSubmittedCount(pbId);
    if (submitted === 0)               return "belum";
    if (submitted === STUDENTS.length) return "selesai";
    return "sedang";
}

// ---- Toast notification ----
function showToast(msg, type = "success") {
    let el = document.getElementById("toast");
    if (!el) {
        el = document.createElement("div");
        el.id = "toast";
        el.style.cssText = "position:fixed;bottom:24px;right:24px;z-index:9999;padding:12px 20px;border-radius:8px;font-size:13px;font-weight:600;max-width:320px;box-shadow:0 4px 16px rgba(0,0,0,0.15);transition:opacity 0.3s;";
        document.body.appendChild(el);
    }
    el.textContent = msg;
    el.style.background = type === "success" ? "#16a34a" : type === "error" ? "#dc2626" : "#1a56a0";
    el.style.color = "#fff";
    el.style.opacity = "1";
    clearTimeout(el._t);
    el._t = setTimeout(() => { el.style.opacity = "0"; }, 2800);
}

// ---- Active nav ----
function setActiveNav() {
    const page = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-item").forEach(a => {
        const href = a.getAttribute("href") || "";
        a.classList.toggle("active", href === page || (page === "" && href === "index.html"));
    });
}
