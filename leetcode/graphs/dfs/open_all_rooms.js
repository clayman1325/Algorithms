var canVisitAllRooms = function(rooms) {
    if(rooms.length == 1) return 1;

    let visited    = new Array(rooms.length).fill(false);
    visited[0]     = true;

    dfs(rooms, 0, 1, visited)

    const hasFalse = visited.find((element) => element == false);

    return hasFalse == undefined ? true : false
};

function dfs(rooms, room, roomsCount, visited) {
    if(room != 0 && room.length == 0) return roomsCount

    const nextRooms = rooms[room];

    for(let i = 0; i < nextRooms.length; i++) {
        const nextRoom = nextRooms[i];

        if(!visited[nextRoom]) {
            visited[nextRoom] = true;

            roomsCount = Math.max(roomsCount, dfs(rooms, nextRoom, roomsCount+1, visited))
        }
    }

    return roomsCount;
}