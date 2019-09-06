class PolyTreeNode

    attr_reader :value, :parent, :children

    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    # def parent=(parent_node)
    #     #if start with no parent, then set parent to new node and add self to other parent's children array
    #     if self.parent.nil?   # Initial setting: if this node doesn't have a parent right now
    #         @parent = parent_node  #set parent to new node
            
    #         #check again since resetted @parent to parent_node
    #         unless self.parent.nil? || parent_node.children.include?(self) # add self to other parent's children array
    #             parent_node.children << self
    #         end
    #     else # Reassignment: if this node already has a parent 
    #         # reassignment to nil (remove parent)
    #         if parent_node.nil?
    #             self.parent.children

    #             #now we need to remove this node from the previous parent.children array

    #             @parent = parent_node

    #         #reassignemtn to different node instance (change parent to new node)
    #         else
 
    #         end
    #     end
    # end


    def parent=(parent_node)
        unless self.parent.nil? #those without previous parent
            self.parent.children.delete(self) #delete self from parent
        end
        
        #once reassign there is no access to the old parent
        unless parent_node.nil? || parent_node.children.include?(self) #.children method called on parent_node
            parent_node.children << self
        end
        @parent = parent_node
    end

    def add_child(child_node)
        child_node.parent = self  #set parent's child to our child
    end

    def remove_child(child_node)
        if self.children.include?(child_node)
            child_node.parent = nil
        else
            raise "That node is not your child"
        end
    end
end

#     1
#    / \
#   2   3
#  / \ / \
# 4  5 6  7


#  start

#1   start without a parent  => set new parent to nil       # set to nil again
#2                           => set new parent to new_node  # set parent
#3   start WITH a parent     => set new parent to nil       #remove old parent
#4                           => set new parent to new_node  #change parents