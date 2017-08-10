require "byebug"

arr = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

def sluggish_octo(arr)
  len = arr.length
  biggest = ""
  (0...len).each do |i|
    fish1 = arr[i]
    is_biggest = true

    (0...len).each do |i2|
      fish2 = arr[i2]
      is_biggest = false if fish2.length > fish1.length
    end

    biggest = fish1 if (is_biggest && fish1.length > biggest.length )
  end
  biggest
end

def dominant_octo(arr)
  arr.sort {|x,y| x.length <=> y.length}.last
end

def clever_octo(arr)
  biggest = ""
  arr.each { |el| biggest = el if el.length > biggest.length}
  biggest
end

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]


def slow_dance(str, tiles_array)
  tiles_array.each_with_index do |tile, i|
    return i if str == tile
  end
end

tile_hash = Hash.new

["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up"].each_with_index do |tile, i|
  tile_hash[tile] = i
end

def constant_dance(str, tile_hash)
  tile_hash[str]
end



p constant_dance("right-down", tile_hash)
