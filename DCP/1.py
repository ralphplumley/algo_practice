# Given an array of numbers, return whether any two sums to K.
# For example, given [10, 15, 3, 7] and K of 17, return true since 10 + 7 is 17.

def two_sum(lst, k):
  value_to_index = {}

  for i, num in enumerate(lst):
    value_to_index[num] = i

  print(value_to_index)
  for i, num in enumerate(lst):
    if (k - num) in value_to_index and i != value_to_index[k - num]:
      return true

  return false