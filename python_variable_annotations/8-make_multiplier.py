#!/usr/bin/env python3
from typing import Callable

def make_multiplier(factor: float) -> Callable[[float], float]:
    def multiply(value: float) -> float:
        return value * factor
    return multiply

