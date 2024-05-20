# Task: Practicing Linux Commands

**Additional Notes on Terminal Commands:**

1. **cp:**
   - *Purpose:* Copies files or directories from one location to another.
   - *Example:* `cp file1.txt /backup`
   - *Output:* (No output if successful)

2. **mv:**
   - *Purpose:* Moves or renames files or directories.
   - *Example:* `mv old_file.txt new_location/`
   - *Output:* (No output if successful)

3. **rm:**
   - *Purpose:* Removes (deletes) files.
   - *Example:* `rm unwanted_file.txt`
   - *Output:* (No output if successful)

4. **rm -r:**
   - *Purpose:* Removes directories and their contents recursively.
   - *Example:* `rm -r old_directory/`
   - *Output:* (No output if successful)

5. **grep:**
    - *Purpose:* Searches for a pattern in a file.
    - *Example:* `grep "keyword" file.txt`
    - *Output:* (Displays lines containing the specified keyword)

6. **grep -i:**
    - *Purpose:* Case-insensitive search using grep.
    - *Example:* `grep -i "pattern" file.txt`
    - *Output:* (Displays lines containing the specified pattern, regardless of case)

7. **lscpu:**
   - *Purpose:* Displays information about the CPU architecture and processing units.
   - *Example:* `lscpu`
   - *Output:* (Displays CPU-related information)

8. **free -h:**
   - *Purpose:* Shows the amount of free and used system memory in a human-readable format.
   - *Example:* `free -h`
   - *Output:* (Displays memory usage information)

9. **df -h:**
   - *Purpose:* Reports the amount of disk space used and available on file systems.
   - *Example:* `df -h`
   - *Output:* (Shows disk space usage information)

10. **cat /etc/os-release:**
   - *Purpose:* Displays information about the operating system.
   - *Example:* `cat /etc/os-release`
   - *Output:* (Shows details about the OS release)

11. **hostname -I:**
   - *Purpose:* Shows the IP addresses assigned to the host.
   - *Example:* `hostname -I`
   - *Output:* (Displays IP addresses)

12. **uptime:**
   - *Purpose:* Shows how long the system has been running.
   - *Example:* `uptime`
   - *Output:* (Displays system uptime)

13. **top:**
   - *Purpose:* Provides a dynamic, real-time overview of a running system's performance.
   - *Example:* `top`
   - *Output:* (Displays system resource usage)

14. **kill -9:**
   - *Purpose:* Forces the termination of a process.
   - *Example:* `kill -9 process_id`
   - *Output:* (No output if successful)

15. **du -sh:**
   - *Purpose:* Shows the disk usage of a directory in a human-readable format.
   - *Example:* `du -sh directory_name`
   - *Output:* (Displays directory disk usage)

16. **date:**
   - *Purpose:* Prints or sets the system date and time.
   - *Example:* `date`
   - *Output:* (Displays the current date and time)

---

**File Structure Summary:**

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