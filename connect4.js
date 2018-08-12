var connect4 = {
    check_status : function(state_map, player) {
	return state_map.reduce(function(accumulator, line) {
	    return accumulator || line.indexOf(player.repeat(4)) !== -1
	}, false)
    }
}

module.exports = connect4;
