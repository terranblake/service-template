/*
"0000000000000000000000000000000000000000",
"b3184c5c85cdd3c88ea41efcd2d7256c11fc691b",
"Terran",
"Blake",
"<terranblake@gmail.com>",
"1563412390",
"-0700\tclone:",
"from",
"https://github.com/jnordberg/service-template.git\nb3184c5c85cdd3c88ea41efcd2d7256c11fc691b",
"7a6c8c07343e6d3f51be8d64c6750f8ff9e334b1",
"Terran",
"Blake",
"<terranblake@gmail.com>",
"1563412978",
"-0700\tcommit:",
"add",
"pacakge-lock\n"
*/

import { readFileSync } from 'fs';
const logs = readFileSync(__dirname + '/../.git/logs/HEAD').toString();
const logsArray = logs.split(' ');

const sha = logsArray[1];
const contributor = logsArray[logsArray.length - 5];

module.exports = {
	sha,
	contributor
};