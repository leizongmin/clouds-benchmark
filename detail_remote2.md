# 性能测试3

Redis、rabbitmq-server和clouds-controller在服务器2上

服务的server运行在服务器1，client运行在服务器3

### 并发调用100次测试完整数据

#### clouds

```
$ node run clouds 100

call 100 times, spent 55ms
call 100 times, spent 34ms
call 100 times, spent 32ms
call 100 times, spent 28ms
call 100 times, spent 17ms
call 100 times, spent 19ms
call 100 times, spent 21ms
call 100 times, spent 23ms
call 100 times, spent 16ms
call 100 times, spent 22ms
-------
project [clouds]
call 100 times, average 24ms
```

#### clouds (with clouds-controller)

```
$ node run clouds2 100

call 100 times, spent 43ms
call 100 times, spent 65ms
call 100 times, spent 60ms
call 100 times, spent 23ms
call 100 times, spent 51ms
call 100 times, spent 55ms
call 100 times, spent 52ms
call 100 times, spent 55ms
call 100 times, spent 69ms
call 100 times, spent 58ms
-------
project [clouds2]
call 100 times, average 54ms
```

#### eureca.io

```
$ node run eureca.io 100

* using primus:engine.io
http://10.117.31.128:8000/ eureca.io
call 100 times, spent 101ms
call 100 times, spent 82ms
call 100 times, spent 51ms
call 100 times, spent 76ms
call 100 times, spent 50ms
call 100 times, spent 56ms
call 100 times, spent 46ms
call 100 times, spent 38ms
call 100 times, spent 31ms
call 100 times, spent 29ms
-------
project [eureca.io]
call 100 times, average 47ms
```

#### dnode

```
$ node run dnode 100

call 100 times, spent 70ms
call 100 times, spent 78ms
call 100 times, spent 62ms
call 100 times, spent 70ms
call 100 times, spent 62ms
call 100 times, spent 68ms
call 100 times, spent 27ms
call 100 times, spent 24ms
call 100 times, spent 95ms
call 100 times, spent 71ms
-------
project [dnode]
call 100 times, average 63ms
```

#### amqp-rpc

```
$ node run amqp-rpc 100

call 100 times, spent 161ms
call 100 times, spent 93ms
call 100 times, spent 96ms
call 100 times, spent 68ms
call 100 times, spent 68ms
call 100 times, spent 79ms
call 100 times, spent 49ms
call 100 times, spent 68ms
call 100 times, spent 71ms
call 100 times, spent 67ms
-------
project [amqp-rpc]
call 100 times, average 70ms
```


### 并发调用1000次测试完整数据

#### clouds

```
$ node run clouds 1000

call 1000 times, spent 311ms
call 1000 times, spent 146ms
call 1000 times, spent 131ms
call 1000 times, spent 122ms
call 1000 times, spent 104ms
call 1000 times, spent 97ms
call 1000 times, spent 114ms
call 1000 times, spent 94ms
call 1000 times, spent 99ms
call 1000 times, spent 96ms
-------
project [clouds]
call 1000 times, average 138ms
```

#### clouds (with clouds-controller)

```
$ node run clouds2 1000

call 1000 times, spent 294ms
call 1000 times, spent 128ms
call 1000 times, spent 80ms
call 1000 times, spent 90ms
call 1000 times, spent 113ms
call 1000 times, spent 87ms
call 1000 times, spent 116ms
call 1000 times, spent 113ms
call 1000 times, spent 119ms
call 1000 times, spent 108ms
-------
project [clouds2]
call 1000 times, average 131ms
```

#### eureca.io

```
$ node run eureca.io 1000

* using primus:engine.io
http://10.117.31.128:8000/ eureca.io
call 1000 times, spent 414ms
call 1000 times, spent 260ms
call 1000 times, spent 254ms
call 1000 times, spent 272ms
call 1000 times, spent 246ms
call 1000 times, spent 255ms
call 1000 times, spent 254ms
call 1000 times, spent 251ms
call 1000 times, spent 255ms
call 1000 times, spent 260ms
-------
project [eureca.io]
call 1000 times, average 257ms
```

#### dnode

```
$ node run dnode 1000

call 1000 times, spent 335ms
call 1000 times, spent 431ms
call 1000 times, spent 483ms
call 1000 times, spent 776ms
call 1000 times, spent 716ms
call 1000 times, spent 1060ms
call 1000 times, spent 732ms
call 1000 times, spent 1460ms
call 1000 times, spent 1116ms
call 1000 times, spent 655ms
-------
project [dnode]
call 1000 times, average 741ms
```

#### amqp-rpc

```
$ node run amqp-rpc 1000

call 1000 times, spent 374ms
call 1000 times, spent 250ms
call 1000 times, spent 252ms
call 1000 times, spent 290ms
call 1000 times, spent 272ms
call 1000 times, spent 288ms
call 1000 times, spent 284ms
call 1000 times, spent 247ms
call 1000 times, spent 259ms
call 1000 times, spent 255ms
-------
project [amqp-rpc]
call 1000 times, average 268ms
```


### 并发调用10000次测试完整数据

#### clouds

```
$ node run clouds 10000

call 10000 times, spent 2124ms
call 10000 times, spent 994ms
call 10000 times, spent 943ms
call 10000 times, spent 1008ms
call 10000 times, spent 1070ms
call 10000 times, spent 1030ms
call 10000 times, spent 982ms
call 10000 times, spent 1042ms
call 10000 times, spent 1018ms
call 10000 times, spent 1091ms
-------
project [clouds]
call 10000 times, average 1162ms
```

#### clouds (with clouds-controller)

```
$ node run clouds2 10000

call 10000 times, spent 1670ms
call 10000 times, spent 789ms
call 10000 times, spent 760ms
call 10000 times, spent 730ms
call 10000 times, spent 817ms
call 10000 times, spent 987ms
call 10000 times, spent 733ms
call 10000 times, spent 747ms
call 10000 times, spent 755ms
call 10000 times, spent 793ms
-------
project [clouds2]
call 10000 times, average 765ms
```

#### eureca.io

```
$ node run eureca.io 10000

* using primus:engine.io
http://10.117.31.128:8000/ eureca.io
call 10000 times, spent 2166ms
call 10000 times, spent 2837ms
call 10000 times, spent 2068ms
call 10000 times, spent 2026ms
call 10000 times, spent 2135ms
call 10000 times, spent 2024ms
call 10000 times, spent 2055ms
call 10000 times, spent 2207ms
call 10000 times, spent 2009ms
call 10000 times, spent 2017ms
-------
project [eureca.io]
call 10000 times, average 2087ms
```

#### dnode

```
$ node run dnode 10000

call 10000 times, spent 2884ms
call 10000 times, spent 17147ms
call 10000 times, spent 32008ms
call 10000 times, spent 49419ms
call 10000 times, spent 66963ms
call 10000 times, spent 56385ms
call 10000 times, spent 55483ms
call 10000 times, spent 46651ms
call 10000 times, spent 54414ms
call 10000 times, spent 53145ms
-------
project [dnode]
call 10000 times, average 43798ms
```

#### amqp-rpc

```
$ node run amqp-rpc 10000

call 10000 times, spent 2683ms
call 10000 times, spent 2595ms
call 10000 times, spent 2817ms
call 10000 times, spent 3051ms
call 10000 times, spent 3199ms
call 10000 times, spent 2988ms
call 10000 times, spent 3077ms
call 10000 times, spent 3508ms
call 10000 times, spent 4161ms
call 10000 times, spent 4105ms
-------
project [amqp-rpc]
call 10000 times, average 3178ms
```

