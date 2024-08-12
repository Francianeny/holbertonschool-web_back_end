#!/usr/bin/env python3
from typing import Iterable, Sequence, List, Tuple

def element_length(list: Iterable[Sequence])-> List[Tuple[Sequence, int]]:
    return [(i, len(i)) for i in list]
