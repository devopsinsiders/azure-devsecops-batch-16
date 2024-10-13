### Notes on Prometheus and Grafana

#### **Prometheus:**
Prometheus is an open-source monitoring and alerting tool designed for reliability and scalability, especially in dynamic environments such as cloud-native and containerized infrastructures. It collects metrics from configured targets at specified intervals, evaluates rule expressions, displays results, and triggers alerts when specific conditions are observed.

- **Key Features:**
  - **Time Series Database:** Prometheus stores data as a time series, where data points are associated with a timestamp and optionally labels (metadata).
  - **Pull Model:** Prometheus uses a pull model for collecting metrics by scraping HTTP endpoints.
  - **PromQL (Prometheus Query Language):** A powerful query language for retrieving and manipulating time series data.
  - **Alerting:** Prometheus integrates with Alertmanager for handling alerts, based on defined alerting rules.
  - **Service Discovery:** Prometheus can automatically discover targets using various integrations like Kubernetes, Consul, EC2, etc.

- **Architecture:**
  - **Prometheus Server:** Scrapes and stores time-series data.
  - **Alertmanager:** Handles alerts triggered by the Prometheus server.
  - **Push Gateway:** Allows short-lived jobs to push metrics.
  - **Exporters:** Bridge tools that collect metrics from different systems, like the Node Exporter for system metrics.

#### **Grafana:**
Grafana is an open-source analytics and interactive visualization platform that works with a variety of data sources, including Prometheus. It allows you to create dashboards to monitor real-time data, generate reports, and set up alerts.

- **Key Features:**
  - **Multi-source support:** Works with Prometheus, Elasticsearch, InfluxDB, MySQL, PostgreSQL, and many more.
  - **Customizable Dashboards:** You can create and share interactive dashboards.
  - **Alerting:** It provides alerting features and can send notifications via Slack, email, or other services.
  - **Visualization:** Supports multiple visualization options like graphs, heatmaps, histograms, tables, etc.
  - **Templating:** Grafana allows you to create dynamic dashboards with template variables.

---

### **Setting up a Node Exporter Dashboard using Prometheus and Grafana**

**Step 1: Install Prometheus and Node Exporter**
1. **Prometheus Installation:**
   - Download the latest Prometheus binary from the official website.
   - Extract the binary and configure the `prometheus.yml` file to scrape metrics from Node Exporter:
     ```yaml
     scrape_configs:
       - job_name: 'node_exporter'
         static_configs:
           - targets: ['<node-exporter-ip>:9100']
     ```
   - Start Prometheus by running:
     ```bash
     ./prometheus --config.file=prometheus.yml
     ```

2. **Install Node Exporter:**
   - Download the Node Exporter binary for your system.
   - Start Node Exporter by running:
     ```bash
     ./node_exporter
     ```
   - The Node Exporter will start exposing system metrics on `http://localhost:9100/metrics`.

**Step 2: Install Grafana**
- Download and install Grafana from the [official website](https://grafana.com/oss/grafana/).
- Start Grafana and open it in a browser (default port: `3000`).

**Step 3: Add Prometheus as a Data Source in Grafana**
1. Login to Grafana (default username/password: `admin/admin`).
2. Navigate to **Configuration** → **Data Sources**.
3. Click **Add data source**, select **Prometheus**, and configure it with:
   - URL: `http://localhost:9090` (Prometheus address)
4. Click **Save & Test** to ensure the connection is successful.

**Step 4: Create a Grafana Dashboard for Node Exporter Metrics**
1. Go to **Create** → **Dashboard** in Grafana.
2. Click **Add new panel**.
3. Select **Prometheus** as the data source.
4. Use the following PromQL queries to display common Node Exporter metrics:
   
   - **CPU Usage**:
     ```promql
     100 - (avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)
     ```
   - **Memory Usage**:
     ```promql
     node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes
     ```
   - **Disk Usage**:
     ```promql
     node_filesystem_size_bytes - node_filesystem_free_bytes
     ```
   - **Network Traffic**:
     ```promql
     rate(node_network_receive_bytes_total[5m])
     ```
5. Customize the panel visualization (e.g., Graph, Gauge) and give your panel a title.
6. Click **Apply** to save the panel.
7. Repeat for additional panels as needed, grouping them into rows/sections.
8. Click **Save Dashboard** to store your configuration.

**Step 5: Set Up Alerts (Optional)**
1. Go to the panel's settings and click on **Alert**.
2. Configure the alert conditions (e.g., CPU usage > 80%).
3. Set notification channels like email or Slack.
4. Apply and save the alert configuration.

---

Now you have a complete Grafana dashboard monitoring system metrics from Node Exporter, with real-time data visualization and alerting capabilities!