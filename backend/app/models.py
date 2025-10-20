from pydantic import BaseModel, Field
from typing import Dict, Any

class MachineState(BaseModel):
    machine_id: str
    last_chuck_grease: str | None = None
    last_door_interlock_inspect: str | None = None
    last_coolant_change: str | None = None
    last_lubrication_cycle: str | None = None
    hpu_oil_level_ok: bool | None = True
    coolant_level_ok: bool | None = True
    low_lube_alert: bool | None = False
    has_robot_cell: bool | None = False
    lexan_window_installed_date: str | None = None
    coolant_concentration_pct: float | None = None
    notes: Dict[str, Any] = Field(default_factory=dict)

class Recommendation(BaseModel):
    id: str
    title: str
    detail: str
    severity: str
    recommended_action: str
    source: str
    until_due: int | None = None
