var path = require('path')
var fs = require('fs')

module.exports = function (folder, fileExtension, callback) {


	// 08/12 - need to create a variable to hold files I want
	// 08/12 - sticking a little on idea of cb that only calls err, or calls (null, files)
	fs.readdir(folder, function cb(err, files) { // cb is a call back, files is a variable that will be the array output of readdir
		var filteredFiles = new Array;

		if(err)
			return(callback(err));

		files.forEach(function(file){
			if((path.extname(file)) === fileExtension) {
				// code to add current 'file' to filteredFiles
				filteredFiles.push(file);
			}
		})

		return(callback(null, filteredFiles));
	})
}

