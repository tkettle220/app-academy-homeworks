def sum_to(n)
  return nil if n < 1
  return 1 if n == 1
  n + sum_to(n-1)
end

def add_numbers(arr)
  return nil if arr.empty?
  return arr.first if arr.length == 1
  arr.pop + add_numbers(arr)
end

def gamma_fnc(n)
  return nil if n == 0
  return 1 if n == 1
  (n-1) * gamma_fnc(n-1)
end

def ice_cream_shop(flavors, favorite)
  flavor_cpy = flavors
  return false if flavors.empty?
  return true if flavor_cpy.pop == favorite
  ice_cream_shop(flavor_cpy, favorite)
end

def reverse(string)
  return string if string.length <= 1
  reverse(string[1..-1]) + string[0]
end
