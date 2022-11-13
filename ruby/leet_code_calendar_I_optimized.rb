class MyCalendar
    def initialize()
       @calendar = [] 
    end

    def book(start, finish)
        if @calendar.length == 0
            @calendar.append({start: start, finish: finish})
            return true
        end
        @calendar.each do |event| 
            if ((start < event[:finish]) && (finish > event[:start]))
                return false
            end
        end
       @calendar.append({start: start, finish: finish})
       true 
    end
end

# Note:

# Solution approved by sumbit button