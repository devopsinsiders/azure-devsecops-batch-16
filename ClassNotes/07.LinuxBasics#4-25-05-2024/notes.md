# File Structure Summary:

1. **/etc:**
   - *Purpose:* Configuration files and settings for the system and applications.

2. **/home:**
   - *Purpose:* Home directories for user accounts.

3. **/lib:**
   - *Purpose:* Essential libraries for binaries in /bin and /sbin.

4. **/opt:**
   - *Purpose:* Optional software packages.

5. **/bin:**
   - *Purpose:* Essential user command binaries.

6. **/sbin:**
   - *Purpose:* Essential system command binaries.

7. **/tmp:**
   - *Purpose:* Temporary files.

8. **/usr:**
   - *Purpose:* Secondary hierarchy for user data, programs, and documentation.

9. **/var:**
   - *Purpose:* Variable files – data that changes frequently.

10. **/proc:**
    - *Purpose:* Virtual file system providing information about processes and system status.

11. **/root:**
    - *Purpose:* Home directory for the root user.

# Understanding Paths and File Redirection:

**Absolute Path:**  
An absolute path refers to the full path of a file or directory from the root directory (/). It starts from the root directory and includes all directories leading to the target directory or file. For example: `/home/user/documents/file.txt`

**Relative Path:**  
A relative path refers to the path of a file or directory relative to the current working directory. It does not start from the root directory but instead navigates from the current location. For example, if the current directory is `/home/user`, and the file you want to reference is in the documents directory, you can use a relative path like `documents/file.txt`.