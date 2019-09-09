require_relative "PolyTreeNode"
require "byebug"

class KnightPathFinder
  attr_reader :start_pos

  def initialize(start_pos)
    @start_pos = start_pos #ARRAY
    @root_node = PolyTreeNode.new(start_pos) # Instance of PolyTreeNode class
    @considered_positions = [start_pos]
    self.build_move_tree
  end

  #moves, not coordinates on board
  MOVES = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
  ]

  def self.valid_moves(pos)
    #8 possible moves from each child
    #rid of negative coordinates
    start_x, start_y = pos

    possible_moves = []
    #shovel in move to possible_moves

    MOVES.each do |move|
      move_x, move_y = move
      new_x = start_x + move_x
      new_y = start_y + move_y
      if new_x >= 0 && new_y >= 0 && new_x < 8 && new_y < 8
        possible_moves << [new_x, new_y]
      end

    end

    possible_moves
  end

  def new_move_positions(pos)
    all_moves = KnightPathFinder.valid_moves(pos) #accounts for all 8 possible moves 
    #from 8 possible moves, reject positions we've been to
    remaining_new_moves = all_moves.reject do |move|
      @considered_positions.include?(move)
    end

    @considered_positions.concat(remaining_new_moves)
    remaining_new_moves
  end

  def build_move_tree
    queue = [@root_node] #Instance of PolyTreeNode class that has value of @start_pos, the start position

    until queue.empty? #build tree here
      parent_node = queue.shift #first element of queue
      next_pos_moves = self.new_move_positions(parent_node.value) #output [[0,0]] => [[2, 1], [1, 2]]

      next_pos_moves.each do |ele| #iterate 
        child_node = PolyTreeNode.new(ele) #create 2 new children nodes
        # child_node.parent = parent_node
        # build branches from @root_node to the 2 children nodes
        parent_node.add_child(child_node)
        queue << child_node #shovel children into the queue for all possible nodes
      end
    end
  end

  def find_path(end_pos)
    end_node = @root_node.bfs(end_pos) #is end_pos in root_node, if so set end_node to it

    self.trace_path_back(end_node) #trace back to root when pass in end_node to class



  end

  def trace_path_back(end_node)
    path_array = [end_node.value]
    parent_node = end_node.parent
    
    until parent_node.parent.nil?
      path_array << parent_node.value
      parent_node = parent_node.parent
    end

    path_array << parent_node.value
    path_array.reverse
  end

end

kpf = KnightPathFinder.new([0, 0])

p kpf.find_path([2, 1]) # => [[0, 0], [2, 1]]
p kpf.find_path([3, 3]) # => [[0, 0], [2, 1], [3, 3]]
p kpf.find_path([7, 6]) # => [[0, 0], [1, 2], [2, 4], [3, 6], [5, 5], [7, 6]]
p kpf.find_path([6, 2]) # => [[0, 0], [1, 2], [2, 0], [4, 1], [6, 2]]