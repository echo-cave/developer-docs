# 语句接口

## 简介

> 动漫也好、小说也好、网络也好，不论在哪里，我们总会看到有那么一两个句子能穿透你的心。我们把这些句子汇聚起来，形成回声洞网络，以传递更多的感动。如果可以，我们希望我们没有停止服务的那一天。
>
> 简单来说，回声洞指的就是一句话，可以是动漫中的台词，也可以是网络上的各种小段子。 或是感动，或是开心，有或是单纯的回忆。来到这里，留下你所喜欢的那一句句话，与大家分享，这就是回声洞存在的目的。

该接口也是我们（RDPStudio）自 2021 年以来稳定提供的接口。目前接口经历了这些变化：

* 2021 初版接口，首次开放使用。服务地址：`http://cave_v2.rdpstudio.top:31000`

## 时间规划

| 时间         | 版本 | 影响接口                                     | 调整                                            | 技术栈                  |
|------------|----|------------------------------------------|-----------------------------------------------|----------------------|
| 2021 年 8 月 | v2 | `http://cave_v2.rdpstudio.top:31000` | 发布                     | Python                  |

由于回声洞目前属于公益性运营，为了保证资源的公平利用和不过度消耗公益资金，我们会定期的屏蔽某些大流量的站点。若您的站点的流量较大，您需要提前联系我们获得授权后再开始使用。对于超过阈值的站点，我们有可能会通过一定途径（例如邮件）等方式联系您，若 24 小时无回应则域名将暂时进入黑名单。

## 接口说明

> **请注意：**
> 为了回声洞的长久发展，我们恳求您在使用回声洞服务得同时 **尽可能** 得加入回声洞的链接（如：添加友情链接，为回声洞文本附加超链接）。

### 请求地址

| 地址                            | 协议    | 方法  | QPS 限制 | 线路 |
|-------------------------------|-------|-----|--------|----|
| `cave_v2.rdpstudio.top:31000/api` | HTTP | GET | 4     | 全球 |

### 请求参数

| 参数       | 值   | 可选 | 说明                 |
|----------|-----|----|--------------------|
| encode   | 见后表 | 是  | 编码格式            |


#### 返回编码（参数）

| 参数   | 说明                                |
|------|-----------------------------------|
| 其他 | 返回纯洁文本                            |
| json | 返回格式化后的 JSON 文本                   |
| js   | 返回指定选择器的同步调用函数。默认选择器为：`.cave` |