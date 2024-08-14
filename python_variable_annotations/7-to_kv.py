#!/usr/bin/env python3
"""Convert a key-value pair into a tuple where the value is squared
and converted to float."""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Returns Tuple[str, float]: A tuple containing the key and the squared
    value as a float."""
    return (k, float(v**2))
