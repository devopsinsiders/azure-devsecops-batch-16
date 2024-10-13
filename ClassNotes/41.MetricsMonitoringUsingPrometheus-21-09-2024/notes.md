### Prometheus Monitoring using Node Exporter

**Overview:**
Prometheus is a powerful open-source monitoring and alerting toolkit designed for reliability and scalability. It collects time-series data from systems and services, stores it, and allows for querying and alerting. For monitoring the health and performance of Linux machines, Prometheus uses the **Node Exporter**. The Node Exporter exposes hardware and OS metrics, such as CPU usage, memory usage, disk I/O, and network statistics.

#### 1. **Prometheus Architecture**
Prometheus follows a pull-based model where it scrapes metrics from targets at specified intervals. The components involved in Prometheus monitoring with Node Exporter include:

- **Prometheus Server:** Collects metrics by scraping HTTP endpoints and stores time-series data.
- **Node Exporter:** Installed on Linux servers to expose machine metrics.
- **Alertmanager (optional):** Handles alerts triggered by Prometheus rules.
- **Grafana (optional):** Provides a visualization layer for the metrics collected by Prometheus.

#### 2. **Node Exporter**
Node Exporter is a lightweight application that runs on Linux systems and exposes metrics about the system's health and performance in a format Prometheus can scrape.

**Key Metrics Exposed by Node Exporter:**
- **CPU Usage** (`node_cpu_seconds_total`)
- **Memory Usage** (`node_memory_Active_bytes`, `node_memory_MemAvailable_bytes`)
- **Disk I/O** (`node_disk_read_bytes_total`, `node_disk_written_bytes_total`)
- **Filesystem Usage** (`node_filesystem_avail_bytes`, `node_filesystem_size_bytes`)
- **Network I/O** (`node_network_receive_bytes_total`, `node_network_transmit_bytes_total`)
- **System Load** (`node_load1`, `node_load5`, `node_load15`)

#### 3. **Steps to Set Up Prometheus with Node Exporter**

1. **Install Node Exporter on the Target Machine:**
   - Download Node Exporter from the [official GitHub release page](https://github.com/prometheus/node_exporter).
   - Extract the downloaded tarball:
     ```bash
     tar xvfz node_exporter-*.tar.gz
     ```
   - Move the binary to `/usr/local/bin/`:
     ```bash
     sudo mv node_exporter-*/node_exporter /usr/local/bin/
     ```
   - Create a systemd service file for Node Exporter:
     ```bash
     sudo vim /etc/systemd/system/node_exporter.service
     ```
     Add the following content:
     ```ini
     [Unit]
     Description=Prometheus Node Exporter
     After=network.target
     
     [Service]
     User=node_exporter
     ExecStart=/usr/local/bin/node_exporter
     
     [Install]
     WantedBy=default.target
     ```
   - Start and enable the Node Exporter service:
     ```bash
     sudo systemctl daemon-reload
     sudo systemctl enable node_exporter
     sudo systemctl start node_exporter
     ```

2. **Install and Configure Prometheus:**
   - Download Prometheus from the [Prometheus download page](https://prometheus.io/download/).
   - Extract and configure the `prometheus.yml` file to scrape the Node Exporter:
     ```yaml
     scrape_configs:
       - job_name: 'node_exporter'
         static_configs:
           - targets: ['<node_exporter_ip>:9100']
     ```

3. **Scraping Node Exporter Metrics:**
   - Prometheus will automatically scrape metrics from the Node Exporter based on the configuration in `prometheus.yml`.
   - By default, Node Exporter exposes metrics on port `9100`.

4. **Visualizing Metrics in Grafana (Optional):**
   - Install Grafana and configure it to use Prometheus as the data source.
   - Use pre-built Grafana dashboards for Node Exporter metrics from the Grafana community for system performance monitoring.

#### 4. **Prometheus Queries (PromQL) for Node Exporter Metrics**
PromQL (Prometheus Query Language) allows querying the metrics scraped by Prometheus. Below are a few common queries:

- **CPU Usage:**
  ```promql
  rate(node_cpu_seconds_total{mode!="idle"}[5m])
  ```
- **Memory Usage:**
  ```promql
  node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes * 100
  ```
- **Disk Usage:**
  ```promql
  node_filesystem_avail_bytes / node_filesystem_size_bytes * 100
  ```
- **Network Traffic:**
  ```promql
  rate(node_network_receive_bytes_total[5m])
  ```
  ```promql
  rate(node_network_transmit_bytes_total[5m])
  ```

#### 5. **Alerting on Critical System Metrics**
You can configure Prometheus to alert when specific conditions are met. For example:

- **High CPU Usage Alert:**
  ```yaml
  - alert: HighCPUUsage
    expr: rate(node_cpu_seconds_total{mode!="idle"}[5m]) > 0.9
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: "Instance {{ $labels.instance }} CPU usage is too high"
      description: "CPU usage for {{ $labels.instance }} is above 90%."
  ```

#### 6. **Best Practices for Node Exporter Monitoring**
- Ensure you scrape metrics at regular intervals that match your system requirements. The default scrape interval is 15 seconds, but it can be adjusted.
- For large environments, use **Service Discovery** or a **target relabeling** mechanism to dynamically configure scrape targets.
- Use Grafana for real-time dashboards to visualize performance metrics.
- Configure alerts to get notified when resource thresholds are breached (e.g., high CPU usage, low disk space, etc.).
- Secure Node Exporter and Prometheus by using firewalls and setting up authentication if necessary.

#### 7. **Scaling Considerations**
- For large-scale environments (e.g., 100+ VMs), ensure that your Prometheus server is capable of handling the load. Consider horizontal scaling by using **Prometheus federation**.
- Use **Thanos** or **Cortex** to provide long-term storage and querying scalability for Prometheus.

---

With Prometheus and Node Exporter, you can easily monitor your Linux-based infrastructure and set up alerts for key system metrics, helping you ensure that your systems are running smoothly.