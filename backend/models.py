from pydantic import BaseModel
from typing import Optional

class MaintenanceInput(BaseModel):
    chuck_condition: str
    tailstock_condition: str
    spindle_vibration: str
    lubrication_status: str
    oil_pressure: Optional[str] = None
    coolant_filter: Optional[str] = None
