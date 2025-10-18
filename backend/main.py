from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import MaintenanceInput

app = FastAPI(
    title="Sistem Pakar Preventive Maintenance",
    description="Memberikan rekomendasi maintenance harian dan mingguan berdasarkan kondisi mesin",
    version="1.0"
)

# 🧩 Tambahkan ini agar React bisa akses API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Sistem Pakar Preventive Maintenance aktif 🚀"}

@app.post("/evaluate")
def evaluate_maintenance(data: MaintenanceInput):
    recommendations = []

    # --- Pemeriksaan Harian ---
    if data.chuck_condition.lower() != "baik":
        recommendations.append("Periksa kondisi chuck — bersihkan dan pastikan kuncian tidak aus.")

    if data.tailstock_condition.lower() != "baik":
        recommendations.append("Periksa tailstock — lakukan pelumasan dan pastikan sejajar dengan sumbu spindle.")

    if data.spindle_vibration.lower() == "ada getaran":
        recommendations.append("Periksa spindle — hentikan operasi dan lakukan balancing atau ganti bearing.")

    if data.lubrication_status.lower() != "lancar":
        recommendations.append("Cek sistem pelumasan — pastikan jalur oli tidak tersumbat.")

    # --- Pemeriksaan Mingguan ---
    if data.oil_pressure and data.oil_pressure.lower() != "normal":
        recommendations.append("Periksa tekanan oli hidrolik — isi atau ganti oli jika tekanan tidak stabil.")

    if data.coolant_filter and data.coolant_filter.lower() == "kotor":
        recommendations.append("Bersihkan filter pendingin (coolant filter) untuk menjaga sirkulasi cairan.")

    # --- Default jika semua baik ---
    if not recommendations:
        recommendations.append("Semua sistem dalam kondisi baik. Lanjutkan operasional normal ✅")

    return {
        "input": data,
        "rekomendasi": recommendations
    }
