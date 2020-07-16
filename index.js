const { exec } = require("child_process");

function execute_command(command) {
    /*  exec function used to run a command in the command prompt, returns an error 
        if there is an error while running
        Parameters:
          command (str): the specific command that is executed
    */
    exec(command, (error, stdout, stderr) => {
      if (error) {
          document.getElementById("output").innerHTML = "An error has occured";
          return;
      }
      if (stderr) {
          document.getElementById("output").innerHTML = "A stderr has occurred";
          return;
      }
    });
}

var repoPath = "";  // string, the path to the repository

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('userDir').addEventListener('click', () => {
        // user inputs path to repository, empties input after saving string
        repoPath = document.getElementById("repo_path").value;
        document.getElementById("repo_path").value = "";
    });
    document.getElementById('addFolder').addEventListener('click', () => {
        // user inputs name of new folder, need to add path to repository to put the folder
        // in the right place, calles execute_command to run command, empties input
        execute_command("cd " + repoPath  + " && mkdir " + document.getElementById("folder_name").value);
        document.getElementById("folder_name").value = "";
    });
    document.getElementById('gitInit').addEventListener('click', () => {
        // initailzes git in current directory
        execute_command("cd " + repoPath  + " && git init");
  });
});

