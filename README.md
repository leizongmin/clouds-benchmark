# clouds-benchmark
clouds模块性能测试

执行以下函数：

```javascript
function test_add (a, b) {
  return a + b;
}
```

每个测试重复执行10次，测试结果去掉最大值和最小值，再取平均值， __值越小越好__

服务器配置：

+ 服务器1：Aliyun ECS / 1 CPU / 2G RAM
+ 服务器2：Aliyun ECS / 2 CPU / 2G RAM
+ 服务器3：Aliyun ECS / 1 CPU / 2G RAM
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

## 性能测试1

__所有服务、客户端均运行在同一台机器（服务器1）__

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



## 性能测试2

Redis、rabbitmq-server和clouds-controller在服务器1上

服务的server和client在服务器2

注：eureca.io和dnode不需要依赖第三方服务，不参与测试

### 并发调用100次测试结果

模块                              | 平均时间
----------------------------------|-------
clouds                            | 29ms
clouds (with clouds-controller)   | 57ms
eureca.io                         | --
dnode                             | --
amqp-rpc                          | 64ms

### 并发调用1000次测试结果

模块                              | 平均时间
----------------------------------|-------
clouds                            | 122ms
clouds (with clouds-controller)   | 119ms
eureca.io                         | --
dnode                             | --
amqp-rpc                          | 269ms

### 并发调用10000次测试结果

模块                              | 平均时间
----------------------------------|-------
clouds                            | 1043ms
clouds (with clouds-controller)   | 748ms
eureca.io                         | --
dnode                             | --
amqp-rpc                          | 2915ms



## 性能测试3

Redis、rabbitmq-server和clouds-controller在服务器2上

服务的server运行在服务器1，client运行在服务器3

### 并发调用100次测试结果

模块                              | 平均时间
----------------------------------|-------
clouds                            | 24ms
clouds (with clouds-controller)   | 54ms
eureca.io                         | 47ms
dnode                             | 63ms
amqp-rpc                          | 70ms

### 并发调用1000次测试结果

模块                              | 平均时间
----------------------------------|-------
clouds                            | 138ms
clouds (with clouds-controller)   | 131ms
eureca.io                         | 257ms
dnode                             | 741ms
amqp-rpc                          | 268ms

### 并发调用10000次测试结果

模块                              | 平均时间
----------------------------------|-------
clouds                            | 1162ms
clouds (with clouds-controller)   | 765ms
eureca.io                         | 2087ms
dnode                             | 43798ms
amqp-rpc                          | 3178ms
