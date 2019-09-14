def bad_two_sum?(arr, target_sum) # O(n^2)
  (0...arr.length-1).each do |i1|
    (i1+1...arr.length).each do |i2|
      if arr[i1] + arr[i2] == target_sum
        return true
      end
    end
  end

  false
end

def okay_two_sum?(arr, target_sum)
  arr = arr.sort
  arr[0...arr.length - 1].each_with_index do |ele, i|
    return true if (ele + arr[i+1]) == target_sum
  end
  false
end

def two_sum?(arr, target_sum)
  sums = Hash.new(0)
  arr.each do |n|
    sums[n] += n 
  end
  arr.each do ||
end


arr = [0, 1, 5, 7]
p okay_two_sum?(arr, 6) # => should be true
p okay_two_sum?(arr, 10) # => should be false
p bad_two_sum?(arr, 6) # => should be true
p bad_two_sum?(arr, 10) # => should be false
# p two_sum?(arr, 6) # => should be true
# p two_sum?(arr, 10) # => should be false