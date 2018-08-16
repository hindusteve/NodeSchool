/* Lesson 1 {Hello World}
Write a program that prints the text "HELLO WORLD" to the console
  (stdout).


  console.log("HELLO WORLD")

  */

/* //LESSON 2 code {Baby Steps}
 Write a program that accepts one or more numbers as command-line arguments
  and prints the sum of those numbers to the console (stdout).


//console.log(process.argv) --> can keep this in while running own test via node, but needs to be taken out for verify portion


i = 2;  // N: need to start index at 2 b/c first 2 arguments to process.argv are arguments to the shell
total = 0;

while (i < (process.argv.length)) {

	total = total + Number(process.argv[i]);
	i++;

}

console.log(total)

	*/ 

/* Lesson 3 code {My First I/O}
Write a program that uses a single synchronous filesystem operation to
  read a file and print the number of newlines (\n) it contains to the
  console (stdout) */
  
/*var fs = require('fs')

var fileObject
var fileString
var newLineArray

fileObject = fs.readFileSync(process.argv[2])

fileString = fileObject.toString()

newLineArray = fileString.split('\n')

console.log(newLineArray.length - 1)
*/

//Lesson 4 code {My First Async I/O}

// Write a program that uses a single asynchronous filesystem operation to
// read a file and print the number of newlines it contains to the console
// (stdout), similar to running cat file | wc -l.

// The full path to the file to read will be provided as the first
// command-line argument.


/* var newLineCount
var fileObject
var fileString


function readTheFile(callback) {

	newLineCount = fs.readFile(process.argv[2], function doneReading(err, fileObject) {
		if (err) {
			callback(err)
		} else {
			fileString = fileObject.toString()
			newLineCount = (fileString.split('\n')).length-1
			callback(newLineCount)
		}
	})
}

function logNewLines(message){
	console.log(message)
}

readTheFile(logNewLines)
*/


// Lesson 5 code {Filtered LS}
// Create a program that prints a list of files in a given directory,
//   filtered by the extension of the files. You will be provided a directory
//   name as the first argument to your program (e.g. '/path/to/dir/') and a
//   file extension to filter by as the second argument.

// For example, if you get 'txt' as the second argument then you will need to
//  filter the list to only files that end with .txt. Note that the second
//  argument will not come prefixed with a '.'.

/*
var fs = require('fs')
var path = require('path')
var directoryName = process.argv[2]
var ext = '.' + process.argv[3]

function printFiles() {
	fs.readdir(directoryName, function filterFiles(err, files) {

		for (i = 0; i < files.length; i++) {
			if (path.extname(files[i]) === ext) {
				console.log(files[i]);
			}
		}
	});
}

printFiles();*/

/*
 ## MAKE IT MODULAR (Exercise 6 of 13)

  This problem is the same as the previous but introduces the concept of
  modules. You will need to create two files to solve this.

  You must write a module file to do most of the work. The module must
  export a single function that takes three arguments: the directory name,
  the filename extension string and a callback function, in that order. The
  filename extension argument must be the same as what was passed to your
  program. Don't turn it into a RegExp or prefix with "." or do anything
  except pass it to your module where you can do what you need to make your
  filter work.

  The callback function must be called using the idiomatic node(err, data)
  convention. This convention stipulates that unless there's an error, the
  first argument passed to the callback will be null, and the second will be
  your data. In this exercise, the data will be your filtered list of files,
  as an Array. If you receive an error, e.g. from your call to
  fs.readdir(), the callback must be called with the error, and only the
  error, as the first argument.

You must not print directly to the console from your module file, only
  from your original program.

  In the case of an error bubbling up to your original program file, simply
  check for it and print an informative message to the console.

  These four things are the contract that your module must follow.

   1. Export a single function that takes exactly the arguments described.
   2. Call the callback exactly once with an error or some data as described.
   3. Don't change anything else, like global variables or stdout.
   4. Handle all the errors that may occur and pass them to the callback.

  The benefit of having a contract is that your module can be used by anyone
  who expects this contract. So your module could be used by anyone else who
  does learnyounode, or the verifier, and just work.


var directoryName = process.argv[2]
var ext = process.argv[3]
var myModule = require('./printfiles.js')

function fileList(err, data) {
	if(err)
		console.log("The program encountered error " + err);

	data.forEach(function(file){
		console.log(file);
	});
}


myModule(directoryName, ext, fileList); 

********************

 ## HTTP CLIENT (Exercise 7 of 13)

  Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Write the String contents of each
  "data" event from the response to a new line on the console (stdout).

 ─────────────────────────────────────────────────────────────────────────────

 ## HINTS

  For this exercise you will need to use the http core module.

  Documentation on the http module can be found by pointing your browser
  here:
  file://C:\Users\abhij\AppData\Roaming\npm\node_modules\learnyounode\node_a
  pidoc\http.html

  The http.get() method is a shortcut for simple GET requests, use it to
  simplify your solution. The first argument to http.get() can be the URL
  you want to GET; provide a callback as the second argument.

  Unlike other callback functions, this one has the signature:

     function callback (response) { |* ... *| }


  Where the response object is a Node Stream object. You can treat Node
  Streams as objects that emit events. The three events that are of most
  interest are: "data", "error" and "end". You listen to an event like so:

     response.on("data", function (data) { |* ... *| })

  The "data" event is emitted when a chunk of data is available and can be
  processed. The size of the chunk depends upon the underlying data source.

  The response object / Stream that you get from http.get() also has a
  setEncoding() method. If you call this method with "utf8", the "data"
  events will emit Strings rather than the standard Node Buffer objects
  which you have to explicitly convert to Strings.
  */

var http = require('http');

var targetUrl = process.argv[2];

http.get(targetUrl, function(response) {
	response.on('data', function(data) {
		console.log(data);
	}).setEncoding("utf8")
	});

/*  http.get("http://www.google.com/index.html", function(res) {
  		console.log("Got response: " + res.statusCode);
	}).on('error', function(e) {
  		console.log("Got error: " + e.message);
	});

  function cb(response) {
  	response.on("data", function(data){

  	});*/
