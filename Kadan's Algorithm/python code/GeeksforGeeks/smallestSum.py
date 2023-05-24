def minSubArray(nums, target):
    length = len(nums)

    if length == 1:
        return nums[0]

    maxInt = 2 ** 50
    currentSum = 0
    minSum = maxInt + 1

    for i in range(length):
        currentSum = currentSum + nums[i]

        if currentSum < minSum:
            minSum = currentSum

        if currentSum > 0:
            currentSum = 0

    return minSum