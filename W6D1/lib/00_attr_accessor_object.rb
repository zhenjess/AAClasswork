class AttrAccessorObject
  def self.my_attr_accessor(*names) # :apple, :orange
    # ...
    names.each do |name| # [:apple, :orange] #get method
      define_method(name) {
        instance_variable_get("@#{name}")
      }
      define_method("#{name}=") do |new_value| #set method
        instance_variable_set("@#{name}", new_value) #syntax for set ≈
      end
      
    end
  end
end
