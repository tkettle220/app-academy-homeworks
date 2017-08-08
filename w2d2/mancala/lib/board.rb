class Board
  attr_accessor :cups, :name1, :name2

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14) {Array.new}
    (0..5).each {|i| cups[i] = [:stone, :stone, :stone, :stone]}
    (7..12).each {|i| cups[i] = [:stone, :stone, :stone, :stone]}
  end

  # def place_stones
  #   # helper method to #initialize every non-store cup with four stones each
  # end

  def valid_move?(start_pos)
    raise "Invalid starting cup" unless (1..6).include?(start_pos)
  end

  def make_move(start_pos, current_player_name)
    if current_player_name == name2
      @cups.rotate!(7)
      start_pos = (start_pos + 7) %14
    end
    num_stones = cups[start_pos].length
    @cups[start_pos] = []
    cup_index = nil
    num_stones.times do |i|
      cup_index = (start_pos + i + 1)%13
      cups[cup_index] << :stone
    end
    if current_player_name == name2
      @cups.rotate!(7)
      cup_index = (cup_index + 7)%14
    end
    render
    next_turn(cup_index)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
    return :switch if cups[ending_cup_idx-1].count == 1
    return :prompt if [6,13].include?(ending_cup_idx)
    return ending_cup_idx
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    return true if cups[0..5].all?(&:empty?) || cups[7..12].all?(&:empty?)
    return false
  end

  def winner
    return name1 if cups[0..5].all?(&:empty?)
    return name2
  end
end
