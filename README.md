# China COVID-19 Forecast Hub Dashboard

## 项目概述

中国COVID-19预测中心Dashboard是一个基于[Hubverse框架](https://hubverse.io/)构建的交互式预测与评估平台，专门用于展示和评估中国科室流感中SARS-CoV-2阳性率的预测模型表现。该平台提供了专业的时间序列可视化和多模型性能评估功能。

🌐 **在线访问**: [https://dailypartita.github.io/China-COVID-19-Forecast-Dashboard/](https://dailypartita.github.io/China-COVID-19-Forecast-Dashboard/)

📊 **数据源**: [China-COVID-19-Forecast-Hub](https://github.com/dailypartita/China-COVID-19-Forecast-Hub)

## ✨ 主要功能

### 📈 预测可视化
- **目标指标**: 科室流感中SARS-CoV-2阳性率 (SARS-CoV-2 positivity rate among department influenza)
- **时间跨度**: 从2025年1月到9月的完整时间序列展示
- **概率预测**: 基于23个分位数的概率分布预测，支持95%置信区间显示
- **交互式控件**: 
  - 🎯 目标日期选择器 (Current/As of日期切换)
  - 🎨 模型颜色编码和显示切换
  - 📊 置信区间级别调整 (95%/50%等)
  - ⌨️ 键盘导航支持 (左右方向键浏览不同周次预测)

### 🎯 模型评估
- **评估指标**: WIS、MAE、区间覆盖率等多维度评估
- **模型对比**: 4个预测模型的综合性能比较
- **相对性能**: 基于基准模型的相对评估分析
- **可视化结果**: 表格和热力图形式展示模型表现

### 📊 数据管理
- **历史数据**: 从2025年1月开始的完整时间序列观测数据（黑色实线显示）
- **Oracle数据**: 基于实际观测值生成的评估标准参考数据
- **模型输出**: 4个GZNL-test模型的标准化概率预测结果
- **实时同步**: 中文界面说明"此dashboard显示中国COVID-19预测结果，数据来源于中国疾控中心每周急性呼吸道综合症监测点监测。"

## 🏆 模型性能概览

### 📊 表格视图 - 综合性能排名(2025-08-21轮次)

| 模型 | Rel. WIS | WIS | Rel. MAE | MAE | 50% Cov. | 95% Cov. | 排名 |
|------|----------|-----|----------|-----|----------|----------|------|
| **GZNL-test_002** | **0.56** | **0.5** | 1.03 | 0.8 | 80.0 | 100.0 | 🥇 |
| GZNL-test_001 | 1.00 | 0.9 | 1.00 | 0.8 | 100.0 | 100.0 | 🥈 |
| GZNL-test_004 | 1.13 | 1.0 | 1.87 | 1.4 | 40.0 | 40.0 | 🥉 |
| GZNL-test_003 | 1.22 | 1.1 | 2.20 | 1.7 | 40.0 | 60.0 | ❌ |

### 🔥 热力图视图 - 时间序列表现分析

**评估时间范围**: 2025-07-31 至 2025-08-28
- **🟣 GZNL-test_002**: 在多个时间点表现最优(深紫色区域最多)
- **🟢 GZNL-test_001**: 整体表现稳定，作为基准模型
- **🟡 GZNL-test_003/004**: 在某些时间点表现较差(黄色区域)

**最佳模型**: GZNL-test_002 (在Table和Plot视图中均表现最优)

## 🛠️ 技术架构

### 框架与工具
- **Dashboard框架**: [Hubverse Dashboard](https://docs.hubverse.io/en/latest/user-guide/dashboards.html)
- **前端**: Quarto + Bootstrap
- **数据处理**: R + hubverse生态系统
- **部署**: GitHub Actions + GitHub Pages
- **可视化**: PredTimeChart + PredEvals

### 核心组件
- **PredTimeChart**: 预测时间序列可视化模块
- **PredEvals**: 模型评估与比较模块  
- **自动化流程**: 每周四17:33 UTC自动更新数据
- **响应式设计**: 支持桌面和移动端访问

## 📋 配置文件

### 关键配置
- [`site-config.yml`](site-config.yml) - 网站基本配置
- [`predtimechart-config.yml`](predtimechart-config.yml) - 预测图表配置
- [`predevals-config.yml`](predevals-config.yml) - 模型评估配置

### 数据配置
- **评估期间**: 2025-08-21起的所有可用轮次
- **评估范围**: 中国(CN)地区，horizons -3到1
- **基准模型**: GZNL-test_001
- **评估指标**: WIS, AE_median, interval_coverage_50, interval_coverage_95

## 🚀 快速开始

### 查看在线Dashboard
直接访问: [https://dailypartita.github.io/China-COVID-19-Forecast-Dashboard/](https://dailypartita.github.io/China-COVID-19-Forecast-Dashboard/)

### 本地部署
```bash
git clone https://github.com/dailypartita/China-COVID-19-Forecast-Dashboard.git
cd China-COVID-19-Forecast-Dashboard
# 按照.github/workflows/中的说明配置GitHub Actions
```

### 更新数据
- **自动更新**: 每周四17:33 UTC通过GitHub Actions自动执行
- **手动触发**: 在GitHub Actions页面手动运行workflows

## 📊 数据访问

### Hub数据仓库
- **主仓库**: [China-COVID-19-Forecast-Hub](https://github.com/dailypartita/China-COVID-19-Forecast-Hub)
- **模型输出**: `/model-output/` 目录
- **目标数据**: `/target-data/time-series.csv`
- **Oracle数据**: `/target-data/oracle-output.csv`

### 配置信息
- **任务配置**: `/hub-config/tasks.json`
- **模型元数据**: `/model-metadata/` 目录

## 🔄 自动化工作流

### 数据构建流程
1. **数据获取**: 从Hub仓库获取最新模型输出
2. **Oracle生成**: 基于目标数据生成评估标准
3. **评估计算**: 运行hubPredEvalsData计算模型评分
4. **可视化更新**: 更新PredTimeChart和PredEvals数据
5. **网站部署**: 自动部署到GitHub Pages

### 更新频率
- **网站内容**: 每次main分支更新时重建
- **预测数据**: 每周四自动更新
- **评估数据**: 每周四自动更新

## 🤝 贡献指南

### 添加新模型
1. 在Hub仓库的`/model-metadata/`中添加模型元数据
2. 在`/model-output/`中上传预测结果
3. Dashboard将自动识别并包含新模型

### 自定义配置
- 修改`predevals-config.yml`调整评估设置
- 修改`predtimechart-config.yml`调整可视化选项
- 在`pages/`目录添加自定义页面

## 📞 联系方式

- **项目维护**: [GitHub Issues](https://github.com/dailypartita/China-COVID-19-Forecast-Dashboard/issues)
- **数据问题**: [Hub Issues](https://github.com/dailypartita/China-COVID-19-Forecast-Hub/issues)
- **技术支持**: 参考[Hubverse文档](https://docs.hubverse.io/)

## 📄 许可证

本项目遵循相应的开源许可证，详见LICENSE文件。

---

*Built with ❤️ using the [Hubverse](https://hubverse.io/) ecosystem*