# Docker `exec`

The `docker exec` command is used to run a command in an already running Docker container. This allows you to interact with the container in real-time and execute tasks without having to restart or modify the container.

#### Key Points:
- **Syntax**: `docker exec [OPTIONS] CONTAINER COMMAND [ARG...]`
- **Use Case**: Running a command in an already running container, for instance, to troubleshoot, inspect, or perform maintenance tasks.
- **Common Options**:
  - `-it`: Combines `-i` (interactive) and `-t` (allocate a pseudo-TTY) to run commands interactively, e.g., opening a shell session.
  - `-d`: Run the command in detached mode (in the background).
  - `--user`: Run the command as a specific user.
  - `--env`: Set an environment variable for the execution.

#### Examples:
- **Start a shell session** in a container:  
  ```bash
  docker exec -it <container_id> /bin/bash
  ```
  This will start an interactive bash shell session inside the container.
  
- **Run a specific command** in a container:  
  ```bash
  docker exec <container_id> ls /usr/share
  ```
  This will list the files in the `/usr/share` directory inside the container.

#### Important Considerations:
- The `docker exec` command only works on containers that are running.
- It's commonly used for debugging or performing tasks such as modifying configuration files, inspecting log files, or manually installing software inside the container.

---

# Docker Port Mapping

Docker port mapping allows you to expose container ports to the host system, making them accessible from outside the container.

#### Key Points:
- **Syntax**: `docker run -p <host_port>:<container_port>`
- **Use Case**: To expose the container's internal port to the outside world, typically needed when running web services (e.g., HTTP servers) inside containers.
- **Mapping Ports**: 
  - `<host_port>`: The port on the host system where you want to access the service.
  - `<container_port>`: The port within the container that the application listens to.

#### Example:
- **Map a container’s port to the host system**:  
  ```bash
  docker run -p 8080:80 nginx
  ```
  This maps port 80 inside the container (where Nginx runs by default) to port 8080 on the host machine. Now, accessing `http://localhost:8080` will interact with the Nginx service running in the container.

#### Multiple Port Mappings:
You can map multiple ports by specifying more `-p` flags:
```bash
docker run -p 8080:80 -p 443:443 nginx
```
This exposes both HTTP (port 80) and HTTPS (port 443) services to the host system.

#### Considerations:
- If the host port is already in use, Docker will throw an error.
- You can use port ranges (e.g., `-p 8080-8090:80-90`) for mapping multiple ports.

#### Docker Port Command:
To inspect the port mappings of a running container, you can use:
```bash
docker port <container_id>
```
This will display the port mapping between the host and the container.

#### Conclusion:
Port mapping allows Docker containers to communicate with the outside world, especially when you want to expose a web service or any network service. It helps in managing communication between the container and external clients or services running on the host machine.