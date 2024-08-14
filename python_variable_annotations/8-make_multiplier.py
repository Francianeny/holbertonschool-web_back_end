#!/usr/bin/env python3
""" Multiplies the input value by the factor."""
from typing import Callable


def make_multiplier(factor: float) -> Callable[[float], float]:
    def multiply(value: float) -> float:
        """Returns float: The product of the input value and the factor."""
        return value * factor
    return multiply
