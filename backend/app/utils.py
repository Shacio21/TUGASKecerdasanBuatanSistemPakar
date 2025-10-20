from datetime import datetime

def parse_dt(s: str | None) -> datetime | None:
    if not s:
        return None
    try:
        return datetime.fromisoformat(s)
    except Exception:
        return None

def days_since(dt: datetime | None, ref: datetime) -> int | None:
    if not dt:
        return None
    return (ref - dt).days
