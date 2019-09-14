### Phase 1
def first_anagram?(str1, str2)   #may be O(2n + n!)
  str1_arr = str1.chars
  perms = str1_arr.permutation.to_a
  perms.include?(str2.chars)
end

# testing first_anagram?
# p first_anagram?("gizmo", "sally")        #=> false
# p first_anagram?("elvis", "lives")        #=> true

#first_anagram: 

### Phase 2
def second_anagram?(str1, str2) #O(n^2) time complexity b/c we're just iterating through the str1 and indexing the char
 str1.each_char do |char|
    i = str2.index(char)
    unless i.nil?
      str2[i] = ""
    end
  end
  str2 == ""
end

# p second_anagram?("gizmo", "sally")        #=> false
# p second_anagram?("elvis", "lives")        #=> true

### Phase 3   
def third_anagram?(str1, str2)  #O(n log n) for .sort
  str1.chars.sort == str2.chars.sort
end

# p third_anagram?("gizmo", "sally")        #=> false
# p third_anagram?("elvis", "lives")        #=> true

####Phase 4
def fourth_anagram?(str1, str2)
  # counter = Hash.new { |h, k| h[k] = [0,0] } #{'e'=>[1,1], 'l'=>[1,1], 'v'=>[1,1], 'i'=>[1,1], 's'=>[1,1]}

  # str1.each_char do |char|
  #   counter[char][0] += 1
  # end

  # str2.each_char do |char|
  #   counter[char][-1] += 1
  # end

  # counter.values.all? { |subarr| subarr.first == subarr.last }    # [[1,1], [1,1], [1,1], [1,1], [1,1]]
  counter = Hash.new(0)
  str1.each_char do |char_1|#{'e'=> 1, 'l'=>1, 'v'=>1, 'i'=>1, 's'=>1}
    counter[char_1] += 1
  end 
  str2.each_char do |char_2| #{'e'=> 0, 'l'=>0, 'v'=>0, 'i'=>0, 's'=>0}
    counter[char_2] -= 1
  end
  counter.values.all? { |zero| zero == 0 }
end
p fourth_anagram?("gizmo", "sally")        #=> false, [1, 1, 1, 1, 1, -1, -1, -2, -1]
p fourth_anagram?("elvis", "lives") 