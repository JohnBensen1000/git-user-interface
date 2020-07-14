document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('fork-main').addEventListener('click', () => {
    const { exec } = require("child_process");

    exec("dir", (error, stdout, stderr) => {
        if (error) {
            document.getElementById("output").innerHTML = `error: ${error.message}`;
            return;
        }
        if (stderr) {
            document.getElementById("output").innerHTML = `stderr: ${stderr}`;
            return;
        }
        document.getElementById("output").innerHTML = `stdout: ${stdout}`;
    });
  });
});