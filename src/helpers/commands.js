export const commands = [
  {
    command: 'help',
    description: 'Provide help information about commands',
    type: 'text'
  },
  {
    command: 'up',
    description: 'Go to parent directory',
    type: 'directory'
  },
  {
    command: 'cd path_to_directory',
    description: 'Change current directory',
    type: 'directory'
  },
  {
    command: 'ls',
    description: 'List files in current directory',
    type: 'file'
  }, {
    command: 'cat path_to_file',
    description: 'View contents of a file',
    type: 'file'
  },
  {
    command: 'add new_file_name',
    description: 'Create a new file',
    type: 'file'
  }, {
    command: 'rn path_to_file new_filename',
    description: 'Rename a file',
    type: 'file'
  }, {
    command: 'cp path_to_file path_to_new_directory',
    description: 'Copy a file',
    type: 'file'
  }, {
    command: 'mv path_to_file path_to_new_directory',
    description: 'Move a file',
    type: 'file'
  }, {
    command: 'rm path_to_file',
    description: 'Remove a file',
    type: 'file'
  }, {
    command: 'os --EOL',
    description: 'View EOL type',
    type: 'text'
  }, {
    command: 'os --cpus',
    description: 'View number of CPUs',
    type: 'text'
  }, {
    command: 'os --homedir',
    description: 'View home directory',
    type: 'text'
  }, {
    command: 'os --username',
    description: 'View username',
    type: 'text'
  }, {
    command: 'os --architecture',
    description: 'View architecture',
    type: 'text'
  }, {
    command: 'hash path_to_file',
    description: 'View hash of a file',
    type: 'file'
  }, {
    command: 'compress path_to_file path_to_destination',
    description: 'Compress a file',
    type: 'file'
  }, {
    command: 'decompress path_to_file path_to_destination',
    description: 'Decompress a file',
    type: 'file'
  }
]
