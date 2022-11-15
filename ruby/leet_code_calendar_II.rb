class MyCalendarTwo
    def initialize()
       @calendar = [] 
    end

    def book(start, finish)
        
        if @calendar.length == 0
            @calendar.append([{start: start, finish: finish}])
            return true
        end
        
        @calendar.each do |event|
            if event.length == 2
                crash = MyCalendarTwo.find_collisions(event.first, start, finish)
                return false if crash
            elsif event.length == 1
                crash = MyCalendarTwo.find_collisions(event.first, start, finish)
                if crash 
                    event.append({start: start, finish: finish}) 
                    return true
                end
            end
        end
        @calendar.append([{start: start, finish: finish}])
        true 
    end
    
    def self.find_collisions(event, start, finish)
        ((start < event[:finish]) && (finish > event[:start]))
    end
end




# Your MyCalendarTwo object will be instantiated and called as such:
# obj = MyCalendarTwo.new()
# param_1 = obj.book(start, end)
