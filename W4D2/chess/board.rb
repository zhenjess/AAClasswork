require_relative "Piece"
class Board

  attr_reader :rows

  def initialize
    @rows = Array.new(8) {Array.new(8)}
    @sentinel = NullPiece.new
  end

  def [](pos)
    row, col = pos
    @rows[row][col]
  end

  def []=(pos, val)
    row, col = pos
    @rows[row][col] = val
  end

  def move_piece(color, start_pos, end_pos)
    if self[start_pos] == @sentinel #when actual piece wanted is not at the pos
      raise "No piece at start position."
    else self[end_pos] != @sentinel #when piece is not a NullPiece, can occupy pos
      raise "Cannot move to end position."
    end
  end

  def valid_pos?(pos)
    row, col = pos
    if (row >= 8 || row < 0) && (col >= 8 || col < 0)
      return false
    else
      return true
    end
  end

  def add_piece(piece, pos)
    if pos == @sentinel 
      
  end

end
