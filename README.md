<div align="center">

# China COVID-19 Forecast Hub Dashboard

**English** | [中文](README.zh.md)

</div>

Interactive forecasting and evaluation platform built on the [Hubverse](https://hubverse.io/) framework. Displays and compares multi-model probabilistic forecasts of SARS-CoV-2 positivity rate among influenza-like illness (ILI) cases in China.

**Live site:** [dailypartita.github.io/China-COVID-19-Forecast-Dashboard](https://dailypartita.github.io/China-COVID-19-Forecast-Dashboard/)

**Data source:** [China-COVID-19-Forecast-Hub](https://github.com/dailypartita/China-COVID-19-Forecast-Hub)

## Features

### Forecasts

- **Target:** SARS-CoV-2 positivity rate among ILI cases from national sentinel surveillance
- **Probabilistic output:** 23-quantile distributions with 95% prediction intervals
- **Interactivity:** Reference date selection, model toggles, interval levels, keyboard navigation

### Evaluation

- **Metrics:** WIS, AE median, 95% interval coverage
- **Views:** Table rankings and Plot heatmaps
- **Baseline:** Relative performance vs. `MUST-SEIRS`

### Data Access

Raw forecasts, target data, and Hub configuration are available via the [data page](https://dailypartita.github.io/China-COVID-19-Forecast-Dashboard/data.html) or the Forecast Hub repository.

## Active Models

| Team | Models |
|------|--------|
| GZNL | NextWave |
| XMU_CTModelling | FNN, LSTM, XGBoost, GRU, TCN |
| MUST | SEIRS |

See the [Evaluation page](https://dailypartita.github.io/China-COVID-19-Forecast-Dashboard/eval.html) for latest rankings.

## Data Updates

| Step | Schedule |
|------|----------|
| CDC sentinel report | Weekly (typically Wednesday) |
| Forecast submission deadline | Wednesday 23:59 Beijing time |
| Dashboard data refresh | Thursday 17:33 UTC (automated) |

Target data from [China CDC sentinel surveillance](https://www.chinacdc.cn/jksj/jksj04_14275/). Extraction tool: [cn_cdc_crawl](https://github.com/dailypartita/cn_cdc_crawl).

## Architecture

| Component | Description |
|-----------|-------------|
| Framework | [Hubverse Dashboard](https://docs.hubverse.io/en/latest/user-guide/dashboards.html) |
| Frontend | Quarto + Bootstrap |
| Visualization | PredTimeChart, PredEvals |
| Deployment | GitHub Actions → GitHub Pages |

### Configuration

- [`site-config.yml`](site-config.yml) — site settings
- [`predtimechart-config.yml`](predtimechart-config.yml) — forecast chart config
- [`predevals-config.yml`](predevals-config.yml) — evaluation config

### Workflows

- **Rebuild Site** (`build-site.yaml`) — build and deploy to `gh-pages`
- **Rebuild Data** (`build-data.yaml`) — sync forecast and evaluation data from Hub

## Contributing

### Submit forecasts

1. Register model metadata in the [Forecast Hub](https://github.com/dailypartita/China-COVID-19-Forecast-Hub)
2. Submit 23-quantile probabilistic forecasts (CSV) in Hubverse format
3. Complete weekly submissions by Wednesday 23:59 Beijing time

### Customize dashboard

- Edit `predevals-config.yml` for evaluation settings
- Edit `predtimechart-config.yml` for visualization defaults
- Add pages under `pages/`

## Links

- [Forecast Hub](https://github.com/dailypartita/China-COVID-19-Forecast-Hub)
- [Dashboard Issues](https://github.com/dailypartita/China-COVID-19-Forecast-Dashboard/issues)
- [Hubverse docs](https://docs.hubverse.io/)

## License

See [LICENSE](LICENSE).
