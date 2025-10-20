from datetime import datetime
from typing import List
from .models import MachineState, Recommendation
from .utils import parse_dt, days_since

RULES = [
    {
        "id": "chuck_grease_weekly",
        "title": "Grease chuck (weekly)",
        "severity": "warning",
        "condition": lambda s, now: (lambda d=days_since(parse_dt(s.last_chuck_grease), now): d is None or d > 7)(),
        "detail": "Manual recommends greasing the chuck weekly to maintain clamping force and safety.",
        "action": "Grease chuck now and log next grease date (every 7 days).",
        "source": ":contentReference[oaicite:12]{index=12}"
    },
    {
        "id": "door_interlock_inspect_daily",
        "title": "Inspect door interlock / enclosure",
        "severity": "warning",
        "condition": lambda s, now: (lambda d=days_since(parse_dt(s.last_door_interlock_inspect), now): d is None or d >= 1)(),
        "detail": "Inspect door interlock for fit, fasteners, and obstructions. Do daily visual check of enclosure.",
        "action": "Inspect door interlock and enclosure; replace any bent/misaligned parts. Record inspection.",
        "source": ":contentReference[oaicite:13]{index=13} :contentReference[oaicite:14]{index=14}"
    },
    {
        "id": "coolant_check",
        "title": "Coolant: level & concentration",
        "severity": "warning",
        "condition": lambda s, now: (s.coolant_level_ok is False) or (s.coolant_concentration_pct is not None and (s.coolant_concentration_pct < 5.0)),
        "detail": "Maintain coolant concentration and level. Low coolant or improper coolant damages components.",
        "action": "Top up coolant / adjust concentration using recommended coolant concentrate. Clean filters if needed.",
        "source": ":contentReference[oaicite:15]{index=15} :contentReference[oaicite:16]{index=16}"
    },
    {
        "id": "low_lube_alert",
        "title": "Low lube detected",
        "severity": "critical",
        "condition": lambda s, now: bool(s.low_lube_alert),
        "detail": "System reports low lubrication (spindle or axis grease/oil).",
        "action": "Stop machine if necessary, refill spindle/axis lubrication reservoirs and verify lubrication system.",
        "source": ":contentReference[oaicite:17]{index=17}"
    },
    {
        "id": "hp_oil_or_gearbox",
        "title": "Check HPU / gearbox oil levels",
        "severity": "warning",
        "condition": lambda s, now: (s.hpu_oil_level_ok is False),
        "detail": "HPU oil or gearbox oil level warning present.",
        "action": "Check HPU oil and gearbox oil; add recommended oil grade per manual.",
        "source": ":contentReference[oaicite:18]{index=18} :contentReference[oaicite:19]{index=19}"
    },
    {
        "id": "lexan_window_replace_7yrs",
        "title": "Replace Lexan windows (7 years or damaged)",
        "severity": "info",
        "condition": lambda s, now: (lambda d=days_since(parse_dt(s.lexan_window_installed_date), now): d is not None and d >= 365*7)(),
        "detail": "Replace Lexan safety windows after 7 years or if damaged/reduced visibility.",
        "action": "Schedule Lexan window replacement or immediate replacement if damaged.",
        "source": ":contentReference[oaicite:20]{index=20}"
    },
    {
        "id": "robot_dcs_6months",
        "title": "Verify Robot DCS zones (6 months)",
        "severity": "info",
        "condition": lambda s, now: s.has_robot_cell is True and True,  
        "detail": "If robot cell is present, verify DCS / safety zones every 6 months.",
        "action": "Perform DCS verification and document results (recommended every 6 months).",
        "source": ":contentReference[oaicite:21]{index=21}"
    },
]

def evaluate_rules(state: MachineState) -> List[Recommendation]:
    now = datetime.utcnow()
    recs: List[Recommendation] = []

    for r in RULES:
        try:
            triggered = r["condition"](state, now)
        except Exception:
            triggered = False

        if triggered:
            until_due = None
            if r["id"] == "chuck_grease_weekly":
                last = parse_dt(state.last_chuck_grease)
                if last:
                    until_due = 7 - (now - last).days
            if r["id"] == "door_interlock_inspect_daily":
                last = parse_dt(state.last_door_interlock_inspect)
                if last:
                    until_due = 1 - (now - last).days

            recs.append(Recommendation(
                id=r["id"],
                title=r["title"],
                detail=r["detail"],
                severity=r["severity"],
                recommended_action=r["action"],
                source=r["source"],
                until_due=until_due
            ))

    return recs
