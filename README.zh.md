<div align="center">

# 中国 COVID-19 预测中心 Dashboard

[English](README.md) | **中文**

</div>

基于 [Hubverse](https://hubverse.io/) 框架构建的交互式预测与评估平台，用于展示和比较中国门急诊 ILI 病例中 SARS-CoV-2 阳性率的多模型概率预测结果。

**在线访问：** [dailypartita.github.io/China-COVID-19-Forecast-Dashboard](https://dailypartita.github.io/China-COVID-19-Forecast-Dashboard/)

**数据来源：** [China-COVID-19-Forecast-Hub](https://github.com/dailypartita/China-COVID-19-Forecast-Hub)

## 平台功能

### 预测可视化（Forecasts）

- **监测指标：** 全国急性呼吸道传染病哨点监测中，门急诊流感样病例（ILI）的 SARS-CoV-2 阳性率
- **概率预测：** 23 分位数完整预测分布，支持 95% 置信区间展示
- **交互能力：** 参考日期切换、模型显隐、置信区间调整、键盘导航

### 模型评估（Evaluation）

- **评估指标：** WIS、AE median、95% 区间覆盖率
- **对比方式：** Table 综合排名与 Plot 热力图双视图
- **相对评估：** 以 `MUST-SEIRS` 为基准模型的相对表现分析

### 数据获取

原始预测数据、目标数据及 Hub 配置可通过 [数据获取页面](https://dailypartita.github.io/China-COVID-19-Forecast-Dashboard/data.html) 或 Forecast Hub 仓库直接访问。

## 参与模型

当前活跃模型（7 个）：

| 团队 | 模型 |
|------|------|
| GZNL | NextWave（新冠阳性率周期演变 / 下一波情景预测） |
| XMU_CTModelling | FNN, LSTM, XGBoost, GRU, TCN |
| MUST | SEIRS |

最新排名与详细指标请查看 Dashboard [Evaluation 页面](https://dailypartita.github.io/China-COVID-19-Forecast-Dashboard/eval.html)。

## 数据更新

| 环节 | 时间 |
|------|------|
| CDC 哨点监测报告发布 | 每周（通常周三） |
| 模型预测提交截止 | 每周三 23:59（北京时间） |
| Dashboard 数据更新 | 每周四 17:33 UTC（自动） |

监测数据来源于中国疾控中心[《全国急性呼吸道传染病哨点监测情况》](https://www.chinacdc.cn/jksj/jksj04_14275/)，结构化提取工具：[cn_cdc_crawl](https://github.com/dailypartita/cn_cdc_crawl)。

## 技术架构

| 组件 | 说明 |
|------|------|
| 框架 | [Hubverse Dashboard](https://docs.hubverse.io/en/latest/user-guide/dashboards.html) |
| 前端 | Quarto + Bootstrap |
| 可视化 | PredTimeChart（预测）、PredEvals（评估） |
| 部署 | GitHub Actions → GitHub Pages |

### 配置文件

- [`site-config.yml`](site-config.yml) — 站点基本配置
- [`predtimechart-config.yml`](predtimechart-config.yml) — 预测图表配置
- [`predevals-config.yml`](predevals-config.yml) — 模型评估配置

### 自动化工作流

- **Rebuild Site**（`build-site.yaml`）— 构建并部署静态站点至 `gh-pages` 分支
- **Rebuild Data**（`build-data.yaml`）— 从 Hub 拉取数据，更新预测与评估数据分支

## 参与贡献

### 提交预测模型

1. 在 [Forecast Hub](https://github.com/dailypartita/China-COVID-19-Forecast-Hub) 注册模型元数据
2. 按 Hubverse 标准格式提交 23 分位数概率预测（CSV）
3. 每周三 23:59 前完成当周预测提交

### 自定义 Dashboard

- 修改 `predevals-config.yml` 调整评估指标与评估集
- 修改 `predtimechart-config.yml` 调整可视化默认选项
- 在 `pages/` 目录添加自定义页面

## 相关链接

- [Forecast Hub 仓库](https://github.com/dailypartita/China-COVID-19-Forecast-Hub)
- [Dashboard Issues](https://github.com/dailypartita/China-COVID-19-Forecast-Dashboard/issues)
- [Hubverse 文档](https://docs.hubverse.io/)

## 许可证

详见 [LICENSE](LICENSE) 文件。
