export const commands = [
  {
    command: "help",
    description: "Provide help information about commands",
  },
  {
    command: "up",
    description: "Go to parent directory",
  },
  {
    command: "cd /path/to/directory/or/file",
    description:
      "Change current directory. Use with dot like ./path/to/directory/or/file for relative path",
  },
  {
    command: "ls",
    description:
      "List files in current directory. You can use 'tab' button for looking for files or directories",
  },
  {
    command: "cat path_to_file",
    description:
      "View contents of a file. Use with dot like ./path/to/file for relative path. If you already in the directory, use 'file_name'",
  },
  {
    command: "add new_file_name",
    description: "Create a new file",
  },
  {
    command: "rn path_to_file new_filename",
    description: "Rename a file. Use with dot for relative path.",
  },
  {
    command: "cp path_to_file path_to_new_directory",
    description: "Copy a file. Use with dot for relative path.",
  },
  {
    command: "mv path_to_file path_to_new_directory",
    description: "Move a file. Use with dot for relative path.",
  },
  {
    command: "rm path_to_file",
    description: "Remove a file",
  },
  {
    command: "os --EOL",
    description: "View EOL type",
  },
  {
    command: "os --cpus",
    description: "View number of CPUs",
  },
  {
    command: "os --homedir",
    description: "View home directory",
  },
  {
    command: "os --username",
    description: "View username",
  },
  {
    command: "os --architecture",
    description: "View architecture",
  },
  {
    command: "hash path_to_file",
    description: "View hash of a file",
  },
  {
    command: "compress path_to_file path_to_destination",
    description: "Compress a file",
  },
  {
    command: "decompress path_to_file path_to_destination",
    description: "Decompress a file",
  },
];
