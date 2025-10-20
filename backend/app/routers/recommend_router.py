from fastapi import APIRouter
from typing import List
from ..models import MachineState, Recommendation
from ..rules import evaluate_rules

router = APIRouter(
    prefix="/recommend",
    tags=["recommendations"]
)

@router.post("/", response_model=List[Recommendation])
def recommend(state: MachineState):
    """Receive current machine state and return maintenance recommendations"""
    recs = evaluate_rules(state)
    return recs
