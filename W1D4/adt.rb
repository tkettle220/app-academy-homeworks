class Stack
  attr_accessor :stack

  def initialize
    @stack = []
  end

  def add(el)
    stack.push(el)
  end

  def remove
    stack.pop
  end

  def show
    stack
  end
end

class Queue
  attr_accessor :queue

  def initialize
    @queue = []
  end

  def enqueue(el)
    queue.unshift(el)
  end

  def dequeue
    queue.pop
  end

  def show
    queue
  end
end

class Map
  attr_accessor :map

  def initialize
    @map = []
  end

  def keys
    keys = []
    map.each {|arr| keys << arr.first}
    keys
  end

  def vals
    vals = []
    map.each {|arr| vals << arr.last}
    vals
  end

  def get_key_index(key)
  end

  def assign(key, val)
    key_index = keys.index(key)
    if key_index
      map[key_index] = [key, val]
    else
      map << [key,val]
    end
  end

  def lookup(key)
    key_index = keys.index(key)
    if key_index
      map[key_index].last
    else
      nil
    end
  end

  def remove(key)
    map.reject!{|arr| arr.first == key }
  end

end
