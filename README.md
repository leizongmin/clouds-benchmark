# clouds-benchmark
clouds模块性能测试

## 性能测试

执行以下函数：

```javascript
function test_add (a, b) {
  return a + b;
}
```

每个测试重复执行10次，测试结果去掉最大值和最小值，再取平均值

+ 测试机器配置：Aliyun ECS / 1 CPU / 2G RAM
+ Node.js版本：Node v0.12.5
+ Redis版本：3.0.2 stable
+ clouds@0.1.12
+ dnode@1.2.1
+ eureca.io@0.6.41

----------

### 并发调用100次测试结果

模块      | 平均时间
----------|-------
clouds    | 54ms
eureca.io | 70ms
dnode     | 84ms

### 并发调用1000次测试结果

模块      | 平均时间
----------|-------
clouds    | 314ms
eureca.io | 351ms
dnode     | 1203ms

### 并发调用10000次测试结果

模块      | 平均时间
----------|-------
clouds    | 2948ms
eureca.io | 3364ms
dnode     | 50466ms

----------

### 并发调用100次测试完整数据

#### clouds

```
$ node run clouds 100

call 100 times, spent 100ms
call 100 times, spent 77ms
call 100 times, spent 61ms
call 100 times, spent 68ms
call 100 times, spent 43ms
call 100 times, spent 53ms
call 100 times, spent 53ms
call 100 times, spent 65ms
call 100 times, spent 44ms
call 100 times, spent 45ms
-------
project [clouds]
call 100 times, average 54ms
```

#### eureca.io

```
$ node run eureca.io 100

* using primus:engine.io
http://localhost:8000/ eureca.io
call 100 times, spent 110ms
call 100 times, spent 134ms
call 100 times, spent 78ms
call 100 times, spent 107ms
call 100 times, spent 67ms
call 100 times, spent 69ms
call 100 times, spent 53ms
call 100 times, spent 49ms
call 100 times, spent 39ms
call 100 times, spent 40ms
-------
project [eureca.io]
call 100 times, average 70ms
```

#### dnode

```
$ node run dnode 100

call 100 times, spent 105ms
call 100 times, spent 107ms
call 100 times, spent 75ms
call 100 times, spent 81ms
call 100 times, spent 73ms
call 100 times, spent 76ms
call 100 times, spent 75ms
call 100 times, spent 75ms
call 100 times, spent 110ms
call 100 times, spent 98ms
-------
project [dnode]
call 100 times, average 84ms
```

### 并发调用1000次测试完整数据

#### clouds

```
$ node run clouds 1000

call 1000 times, spent 574ms
call 1000 times, spent 366ms
call 1000 times, spent 346ms
call 1000 times, spent 341ms
call 1000 times, spent 294ms
call 1000 times, spent 298ms
call 1000 times, spent 303ms
call 1000 times, spent 286ms
call 1000 times, spent 285ms
call 1000 times, spent 285ms
-------
project [clouds]
call 1000 times, average 314ms
```

#### eureca.io

```
$ node run eureca.io 1000

* using primus:engine.io
http://localhost:8000/ eureca.io
call 1000 times, spent 579ms
call 1000 times, spent 378ms
call 1000 times, spent 348ms
call 1000 times, spent 338ms
call 1000 times, spent 319ms
call 1000 times, spent 381ms
call 1000 times, spent 328ms
call 1000 times, spent 331ms
call 1000 times, spent 360ms
call 1000 times, spent 348ms
-------
project [eureca.io]
call 1000 times, average 351ms
```

#### dnode

```
$ node run dnode 1000

call 1000 times, spent 545ms
call 1000 times, spent 725ms
call 1000 times, spent 787ms
call 1000 times, spent 940ms
call 1000 times, spent 1031ms
call 1000 times, spent 1107ms
call 1000 times, spent 980ms
call 1000 times, spent 1775ms
call 1000 times, spent 1480ms
call 1000 times, spent 2271ms
-------
project [dnode]
call 1000 times, average 1203ms
```


### 并发调用10000次测试完整数据

#### clouds

```
$ node run clouds 10000

call 10000 times, spent 4496ms
call 10000 times, spent 2923ms
call 10000 times, spent 2900ms
call 10000 times, spent 3011ms
call 10000 times, spent 2878ms
call 10000 times, spent 2908ms
call 10000 times, spent 2932ms
call 10000 times, spent 2928ms
call 10000 times, spent 3094ms
call 10000 times, spent 2892ms
-------
project [clouds]
call 10000 times, average 2948ms
```

#### eureca.io

```
$ node run eureca.io 10000

* using primus:engine.io
http://localhost:8000/ eureca.io
call 10000 times, spent 3802ms
call 10000 times, spent 3458ms
call 10000 times, spent 3309ms
call 10000 times, spent 3283ms
call 10000 times, spent 3298ms
call 10000 times, spent 3462ms
call 10000 times, spent 3227ms
call 10000 times, spent 3346ms
call 10000 times, spent 3381ms
call 10000 times, spent 3379ms
-------
project [eureca.io]
call 10000 times, average 3364ms
```

#### dnode

```
$ node run dnode 10000

call 10000 times, spent 4929ms
call 10000 times, spent 20553ms
call 10000 times, spent 31273ms
call 10000 times, spent 51400ms
call 10000 times, spent 62952ms
call 10000 times, spent 62112ms
call 10000 times, spent 70961ms
call 10000 times, spent 60748ms
call 10000 times, spent 59355ms
call 10000 times, spent 71497ms
-------
project [dnode]
call 10000 times, average 50466ms
```
