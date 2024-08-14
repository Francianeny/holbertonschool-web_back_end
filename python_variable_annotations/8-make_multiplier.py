#!/usr/bin/env python3
"""Annotate the below functions parameters and
return values with the appropriate types"""


from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """return list"""
    return [(i, len(i)) for i in lst]
