# clouds-benchmark
clouds模块性能测试

## 本地性能测试

__所有服务、客户端均运行在同一台机器__

执行以下函数：

```javascript
function test_add (a, b) {
  return a + b;
}
```

每个测试重复执行10次，测试结果去掉最大值和最小值，再取平均值

服务器配置：

+ 系统：Aliyun ECS / 1 CPU / 2G RAM
+ Node.js版本：Node v0.12.5
+ Redis版本：3.0.2 stable
+ rabbitmq-server：3.2.4

NPM模块版本：

+ clouds@0.1.12
+ clouds-controller@0.0.2
+ dnode@1.2.1
+ eureca.io@0.6.41
+ amqp-rpc@0.0.8

----------

### 并发调用100次测试结果

模块                              | 平均时间
----------------------------------|-------
clouds                            | 54ms
clouds (with clouds-controller)   | 79ms
eureca.io                         | 70ms
dnode                             | 84ms
amqp-rpc                          | 126ms

### 并发调用1000次测试结果

模块                              | 平均时间
----------------------------------|-------
clouds                            | 314ms
clouds (with clouds-controller)   | 222ms
eureca.io                         | 351ms
dnode                             | 1203ms
amqp-rpc                          | 669ms

### 并发调用10000次测试结果

模块                              | 平均时间
----------------------------------|-------
clouds                            | 2948ms
clouds (with clouds-controller)   | 1780ms
eureca.io                         | 3364ms
dnode                             | 50466ms
amqp-rpc                          | 7205ms
