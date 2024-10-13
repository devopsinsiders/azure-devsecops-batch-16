### Notes on Grafana Loki, Promtail, and Grafana Configuration for Extracting NGINX Logs from 4 VMs

#### Overview:
The goal is to set up **Loki** as the log aggregator, **Promtail** as the log shipper, and **Grafana** as the visualization layer to extract and view NGINX logs from 4 VMs. This stack provides an efficient solution for monitoring and analyzing logs from distributed sources.

---

#### 1. **Setting up Loki (Log Aggregator)**
Loki is a horizontally-scalable, highly available log aggregation system inspired by Prometheus. It is designed to store logs and process queries efficiently.

- **Install Loki:**
  1. Download the Loki binary from the [Loki releases page](https://github.com/grafana/loki/releases).
  2. Extract the binary and move it to a directory in your PATH (e.g., `/usr/local/bin`).

- **Create a Loki Configuration File:**
  Create a file named `loki-config.yaml` for configuration.

  **Basic Loki Configuration (loki-config.yaml):**
  ```yaml
  auth_enabled: false
  server:
    http_listen_port: 3100
  ingester:
    lifecycler:
      ring:
        kvstore:
          store: inmemory
        replication_factor: 1
  schema_config:
    configs:
      - from: 2020-10-24
        store: boltdb-shipper
        object_store: filesystem
        schema: v11
        index:
          prefix: index_
          period: 24h
  storage_config:
    boltdb_shipper:
      active_index_directory: /tmp/loki/index
      cache_location: /tmp/loki/boltdb-cache
      shared_store: filesystem
    filesystem:
      directory: /tmp/loki/chunks
  ```

- **Run Loki:**
  Start Loki with the following command:
  ```bash
  loki -config.file=loki-config.yaml
  ```

---

#### 2. **Setting up Promtail (Log Shipper)**
Promtail is responsible for collecting logs from the specified sources and sending them to Loki.

- **Install Promtail:**
  1. Download the Promtail binary from the [Promtail releases page](https://github.com/grafana/loki/releases).
  2. Extract the binary and move it to a directory in your PATH (e.g., `/usr/local/bin`).

- **Create a Promtail Configuration File:**
  Create a file named `promtail-config.yaml` for configuration.

  **Basic Promtail Configuration (promtail-config.yaml):**
  ```yaml
  server:
    http_listen_port: 9080
    grpc_listen_port: 0
  
  positions:
    filename: /tmp/positions.yaml
  
  clients:
    - url: http://<loki-ip>:3100/loki/api/v1/push
  
  scrape_configs:
    - job_name: nginx
      static_configs:
        - targets:
            - localhost
          labels:
            job: nginx
            __path__: /var/log/nginx/*.log
  ```

  Replace `<loki-ip>` with the IP address or hostname of your Loki instance.

- **Run Promtail:**
  Start Promtail with the following command:
  ```bash
  promtail -config.file=promtail-config.yaml
  ```

---

#### 3. **Setting up Grafana (Visualization Layer)**
Grafana allows you to visualize the logs collected by Loki.

- **Install Grafana:**
  1. Follow the instructions for your OS from the [Grafana installation page](https://grafana.com/docs/grafana/latest/installation/).
  
- **Add Loki as a Data Source:**
  1. Open Grafana in your browser (default is `http://localhost:3000`).
  2. Log in (default credentials are admin/admin).
  3. Navigate to **Configuration** > **Data Sources**.
  4. Click **Add Data Source** and select **Loki**.
  5. Configure the URL to point to your Loki instance (e.g., `http://<loki-ip>:3100`).
  6. Click **Save & Test** to ensure the connection is successful.

- **Create a Dashboard:**
  1. Navigate to **Dashboards** > **New Dashboard**.
  2. Click **Add new panel**.
  3. In the Query section, select **Loki** as the data source and enter a query to filter logs (e.g., `{job="nginx"}`).
  4. Customize your panel as needed and click **Save**.

---

### Conclusion
By following these steps, you will have a complete setup for extracting and visualizing NGINX logs from 4 VMs using Grafana Loki, Promtail, and Grafana. This setup will allow you to monitor logs in real-time, troubleshoot issues, and gain insights into your NGINX server's performance.