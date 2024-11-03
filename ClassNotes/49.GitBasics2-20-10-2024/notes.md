### 2.1 Getting a Git Repository
- **Creating a New Repository**: 
  - Use `git init` to create a new Git repository in the current directory.
  - Alternatively, clone an existing repository with `git clone <repository-url>`.
  
- **Directory Structure**: 
  - The `.git` directory contains all the metadata and version control information.

### 2.2 Recording Changes to the Repository
- **Staging Changes**:
  - Use `git add <file>` to stage specific files.
  - Use `git add .` to stage all changes in the current directory.

- **Committing Changes**:
  - Use `git commit -m "commit message"` to commit staged changes with a message.
  - Optionally, `git commit -a -m "commit message"` stages and commits all tracked files.

### 2.3 Viewing the Commit History
- **Log Command**: 
  - Use `git log` to view the commit history.
  - Options include `git log --oneline` for a condensed view, and `git log --graph` to see a visual representation of branches and merges.

- **Filtering Commits**:
  - Use `git log <filename>` to view commits affecting a specific file.
  - Use `git log --author=<name>` to filter by author.

### 2.4 Undoing Things
- **Unstaging Changes**:
  - Use `git reset <file>` to unstage a file.
  - Use `git reset` to unstage all changes.

- **Reverting Commits**:
  - Use `git revert <commit>` to create a new commit that undoes changes from a specified commit.
  
- **Amending Commits**:
  - Use `git commit --amend` to modify the most recent commit (message or changes).

### 2.5 Working with Remotes
- **Adding Remotes**:
  - Use `git remote add <name> <url>` to add a remote repository.
  
- **Fetching and Pulling**:
  - Use `git fetch <remote>` to update local tracking branches with changes from the remote.
  - Use `git pull <remote> <branch>` to fetch and merge changes from a remote branch.

- **Pushing Changes**:
  - Use `git push <remote> <branch>` to push local commits to the specified remote branch.

### 2.6 Tagging
- **Creating Tags**:
  - Use `git tag <tag-name>` to create a lightweight tag.
  - Use `git tag -a <tag-name> -m "message"` for an annotated tag with a message.

- **Listing Tags**:
  - Use `git tag` to list all tags.

- **Pushing Tags**:
  - Use `git push <remote> <tag-name>` to push a specific tag to the remote.
  - Use `git push --tags` to push all tags.

### 2.7 Git Aliases
- **Creating Aliases**:
  - Use `git config --global alias.<alias-name> <git-command>` to create an alias.
  - Example: `git config --global alias.co checkout` allows you to use `git co` instead of `git checkout`.

- **Viewing Aliases**:
  - Use `git config --get-regexp alias` to list all defined aliases.

### 2.8 Summary
- Git is a powerful version control system that helps manage code changes efficiently.
- Key commands include initializing repositories, staging and committing changes, viewing history, managing remotes, tagging, and creating aliases to simplify workflows.
- Understanding these fundamentals enables effective collaboration and version management in software development.
