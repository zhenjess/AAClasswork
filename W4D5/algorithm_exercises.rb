require "byebug"

### my_min
# Phase 1
def my_min(arr)               #O(n^2) time complexity for this function
  smallest = arr[0]

  (0...arr.length).each do |i|
    (0...arr.length).each do |j|
      if arr[i] < arr[j] && arr[i] <= smallest
        smallest = arr[i]
      end
    end
  end

  smallest
end

# Phase 2
def my_min2(arr)              #O(n) time complexity, iterate through arr once
  smallest = arr[0] 
  arr.each { |n| smallest = n if n < smallest }
  smallest
end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min(list)  # =>  -5
# p my_min2(list)  # =>  -5


### largest_contiguous_subsum
# Phase 1
def largest_contiguous_subsum(list)    #O(n^2 * n) = O(n^3) time complexity for this function
  subarrays = []

  (0...list.length).each do |i|   #nested loop is O(n^2)
    (i...list.length).each do |j|
      subarrays << list[i..j]     #O(n) for list[i..j]
    end
  end

  # new_arr = subarrays.map do |subarray|
  #   subarray.sum
  # end
  
  # new_arr.max
  subarrays.map(&:sum).max
end

def largest_contiguous_subsum2(list)
  current = list.shift    # 2
  largest_sum = current   # 2
  # debugger
  list.each do |el|       # [3, -6, 7, -6, 7]
    if current < 0
      current = 0
    end
    current += el
    largest_sum = current unless current < largest_sum
  end

  largest_sum
end

list1 = [5, 3, -7]
# p largest_contiguous_subsum(list1) # => 8
p largest_contiguous_subsum2(list1) # => 8

list2 = [2, 3, -6, 7, -6, 7]
# p largest_contiguous_subsum(list2) # => 8 (from [7, -6, 7])
p largest_contiguous_subsum2(list2) # => 8

list3 = [-5, -1, -3]
# p largest_contiguous_subsum(list3) # => -1 (from [-1])
p largest_contiguous_subsum2(list3) # => -1 (from [-1])
