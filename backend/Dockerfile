# Gunakan base image Python
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy requirements dan install dependensi
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Copy seluruh project backend
COPY . .

# Expose port FastAPI
EXPOSE 8000

# Jalankan FastAPI
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
