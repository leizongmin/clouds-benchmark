# 本地调用结果完整数据

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

#### clouds (with clouds-controller)

```
$ node run clouds2 100

call 100 times, spent 124ms
call 100 times, spent 96ms
call 100 times, spent 84ms
call 100 times, spent 84ms
call 100 times, spent 76ms
call 100 times, spent 79ms
call 100 times, spent 88ms
call 100 times, spent 66ms
call 100 times, spent 84ms
call 100 times, spent 73ms
-------
project [clouds2]
call 100 times, average 79ms
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

#### amqp-rpc

```
$ node run amqp-rpc 100

call 100 times, spent 204ms
call 100 times, spent 135ms
call 100 times, spent 120ms
call 100 times, spent 125ms
call 100 times, spent 113ms
call 100 times, spent 126ms
call 100 times, spent 124ms
call 100 times, spent 124ms
call 100 times, spent 131ms
call 100 times, spent 129ms
-------
project [amqp-rpc]
call 100 times, average 126ms
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

#### clouds (with clouds-controller)

```
$ node run clouds2 1000

call 1000 times, spent 562ms
call 1000 times, spent 252ms
call 1000 times, spent 221ms
call 1000 times, spent 222ms
call 1000 times, spent 205ms
call 1000 times, spent 215ms
call 1000 times, spent 216ms
call 1000 times, spent 208ms
call 1000 times, spent 235ms
call 1000 times, spent 209ms
-------
project [clouds2]
call 1000 times, average 222ms
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

#### amqp-rpc

```
$ node run amqp-rpc 1000

call 1000 times, spent 778ms
call 1000 times, spent 689ms
call 1000 times, spent 621ms
call 1000 times, spent 626ms
call 1000 times, spent 628ms
call 1000 times, spent 685ms
call 1000 times, spent 681ms
call 1000 times, spent 691ms
call 1000 times, spent 692ms
call 1000 times, spent 667ms
-------
project [amqp-rpc]
call 1000 times, average 669ms
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

#### clouds (with clouds-controller)

```
$ node run clouds2 10000

call 10000 times, spent 3662ms
call 10000 times, spent 1665ms
call 10000 times, spent 1645ms
call 10000 times, spent 1586ms
call 10000 times, spent 1695ms
call 10000 times, spent 2528ms
call 10000 times, spent 1608ms
call 10000 times, spent 1693ms
call 10000 times, spent 1780ms
call 10000 times, spent 1626ms
-------
project [clouds2]
call 10000 times, average 1780ms
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

#### amqp-rpc

```
$ node run amqp-rpc 10000

call 10000 times, spent 7063ms
call 10000 times, spent 6570ms
call 10000 times, spent 6668ms
call 10000 times, spent 6958ms
call 10000 times, spent 7272ms
call 10000 times, spent 7276ms
call 10000 times, spent 7363ms
call 10000 times, spent 7586ms
call 10000 times, spent 7456ms
call 10000 times, spent 7892ms
-------
project [amqp-rpc]
call 10000 times, average 7205ms
```
