#!/usr/bin/env python3
"""Provides a function to create a multiplier function with a
specified factor."""

from typing import Callable


def make_multiplier(factor: float) -> Callable[[float], float]:
    """
    Creates a multiplier function that multiplies its input by
    the given factor.

    Args:
        factor (float): The factor by which the input value will be
                        multiplied.

    Returns:
        Callable[[float], float]: A function that takes a float as input and
                                  returns the product of the input and the
                                  factor.
    """
    def multiply(value: float) -> float:
        """
        Multiplies the input value by the factor.

        Args:
            value (float): The value to be multiplied.

        Returns:
            float: The product of the input value and the factor.
        """
        return value * factor

    return multiply
