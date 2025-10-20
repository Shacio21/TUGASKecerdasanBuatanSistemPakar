from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import recommend_router

app = FastAPI(title="Lathe PM Expert System (Haas ST-20)")

# ✅ Tambahkan konfigurasi CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],
)

# Include router dari folder routers
app.include_router(recommend_router.router)

@app.get("/")
def root():
    return {"msg": "Lathe PM Expert System (Haas ST-20) - send POST /recommend"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
