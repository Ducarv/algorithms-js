### Binary Search

# Concepts:
I think is more easy to explain this concept using examples:
 - You're trying to guess which number someone is thinking of, from 1 to 100. If you try one number at a time, you might need to make a hundred attempts. However, when we use binary search, we check the middle number each time. If the number is smaller than 50, we eliminate the 50 and all numbers higher than it. If the number is higher than 50, we eliminate everything below 50

   Example: 

   number is "33"
   List [1, 2, 3 ... 100]

   First tentative: 50 = false
   List [1, 2, 3 ... 49]

   Second tentative: 25 = false
   List [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37 ... 49]

   Third tentative: 37 = false
   List [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]

   Fourth tentative: 31 = false
   List [32, 33, 34, 35, 36]

   Fifth tentative: 34 = false
   List [32, 33]

   Sixth tentative: 32 = false
   List [ 33 ]

   Seventh tentative: 33 = true