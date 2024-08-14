#!/usr/bin/env python3
"""Provides a function to create a multiplier function with a
specified factor."""
from typing import Callable


def make_multiplier(factor: float) -> Callable[[float], float]:
    """Creates a multiplier function that multiplies its input by
    the given factor."""
    def multiply(value: float) -> float:
        """Multiplies the input value by the factor."""
        return value * factor
    """Returns float: The product of the input value and the factor."""
    return multiply
