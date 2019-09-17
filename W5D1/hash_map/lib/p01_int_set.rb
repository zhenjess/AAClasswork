class MaxIntSet
  
  attr_reader :store
  
  def initialize(max)
    @store = Array.new(max)
  end

  def insert(num)
    raise "Out of bounds" if num > store.length || num < 0
    store[num] = true
  end

  def remove(num)
    store[num] = false #set to false removes it
  end

  def include?(num)
    store[num] #value of index is true/false
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  attr_reader :store
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    store[num % store.length] << num unless self.include?(num) #num % store.length gives subarr the num belongs in
  end

  def remove(num)
    store[num % store.length].delete(num)
  end

  def include?(num)
    store[num % store.length].each do |ele|
      return true if ele == num
    end
    false
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    idx = num % store.length #look for idx, check if num is within store and check in subarr
    idx #returns subarr where the element is/would be
  end

  def num_buckets
    store.length
  end
end

class ResizingIntSet
  attr_reader :count, :store

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  # def send
  #   num_buckets
  # end

  def insert(num)
    if count == num_buckets
      resize! #
    end
    unless self.include?(num)
      store[num % store.length] << num 
      @count += 1
    end
  end

  def remove(num)
    if self.include?(num)
      store[num % store.length].delete(num)
      @count -= 1
    end
  end

  def include?(num)
    store[num % store.length].each do |ele|
      return true if ele == num
    end
    false
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
      new_store = Array.new(num_buckets * 2) {Array.new}
      @store.flatten.each do |ele|
        new_store[ele % new_store.length] << ele
      end
      @store = new_store
    end

end
