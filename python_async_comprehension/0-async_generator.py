#!/usr/bin/env python3
"""async_generator"""
import asyncio
import random


async def async_generator():
    """Define an asynchronous function called async_generator"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
