#!/usr/bin/env python3
"""
Calculate the sum of a mixed list containing integers and floats.
"""
from typing import List, Union


def sum_mixed_list(mxd_list: List[Union[int, float]]) -> float:
    """Returns float: The sum of the numbers in the input list,
    converted to float.
    """
    return float(sum(mxd_list))
