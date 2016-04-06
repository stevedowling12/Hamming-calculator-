var compute;

//compute the hamming distance between 2 DNA strands

compute = function (s1, s2) {
	// this is the hamming distance

	var distance = 0;

// return the distance
for (var i = 0; i < s1.length; i ++) {
	if (s1 [i] != s2 [i]) {
		distance += 1;

	}
//Return error if strands are not of equal length
	if (s1.length != s2.length)
		throw new Error ("DNA strands must be of equal length")

}

	return distance;

};

module.exports = {

	compute: compute
};