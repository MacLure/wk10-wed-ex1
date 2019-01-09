def longest_Consecutive(arr, k)
    string_list = []

    arr.each_cons(k) do |word|
        string_list << word.join
    end

    return string_list.max{| a, b | a.length <=> b.length }

end

puts longest_Consecutive(['hi', 'marbles', 'mittens', 'bye', 'lorem', 'ipsum', 'to', 'a', 'hippocampus'], 3);  # -> 'marblesmittensbye'
