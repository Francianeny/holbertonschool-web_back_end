#!/usr/bin/env python3
"""Provides a function to calculate the length of elements
in a list of sequences."""


from typing import Iterable, Sequence, List, Tuple


def element_length(list: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns List[Tuple[Sequence, int]]: A list of tuples where each
    tuple contains a sequence from the input and its corresponding length."""
    return [(i, len(i)) for i in list]
