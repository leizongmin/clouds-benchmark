# 性能测试2

Redis、rabbitmq-server和clouds-controller在服务器1上

服务的server和client在服务器2

注：eureca.io和dnode不需要依赖第三方服务，不参与测试

### 并发调用100次测试完整数据

#### clouds

```
$ node run clouds 100

call 100 times, spent 59ms
call 100 times, spent 50ms
call 100 times, spent 47ms
call 100 times, spent 25ms
call 100 times, spent 23ms
call 100 times, spent 20ms
call 100 times, spent 31ms
call 100 times, spent 21ms
call 100 times, spent 20ms
call 100 times, spent 20ms
-------
project [clouds]
call 100 times, average 29ms
```

#### clouds (with clouds-controller)

```
$ node run clouds2 100

call 100 times, spent 82ms
call 100 times, spent 70ms
call 100 times, spent 59ms
call 100 times, spent 65ms
call 100 times, spent 55ms
call 100 times, spent 52ms
call 100 times, spent 54ms
call 100 times, spent 52ms
call 100 times, spent 51ms
call 100 times, spent 53ms
-------
project [clouds2]
call 100 times, average 57ms
```

#### amqp-rpc

```
$ node run amqp-rpc 100

call 100 times, spent 155ms
call 100 times, spent 82ms
call 100 times, spent 88ms
call 100 times, spent 78ms
call 100 times, spent 64ms
call 100 times, spent 80ms
call 100 times, spent 39ms
call 100 times, spent 64ms
call 100 times, spent 72ms
call 100 times, spent 35ms
-------
project [amqp-rpc]
call 100 times, average 64ms
```


### 并发调用1000次测试完整数据

#### clouds

```
$ node run clouds 1000

call 1000 times, spent 261ms
call 1000 times, spent 139ms
call 1000 times, spent 154ms
call 1000 times, spent 132ms
call 1000 times, spent 117ms
call 1000 times, spent 110ms
call 1000 times, spent 117ms
call 1000 times, spent 104ms
call 1000 times, spent 103ms
call 1000 times, spent 108ms
-------
project [clouds]
call 1000 times, average 122ms
```

#### clouds (with clouds-controller)

```
$ node run clouds2 1000

call 1000 times, spent 260ms
call 1000 times, spent 129ms
call 1000 times, spent 123ms
call 1000 times, spent 127ms
call 1000 times, spent 105ms
call 1000 times, spent 142ms
call 1000 times, spent 111ms
call 1000 times, spent 112ms
call 1000 times, spent 110ms
call 1000 times, spent 104ms
-------
project [clouds2]
call 1000 times, average 119ms
```

#### amqp-rpc

```
$ node run amqp-rpc 1000

call 1000 times, spent 388ms
call 1000 times, spent 282ms
call 1000 times, spent 263ms
call 1000 times, spent 242ms
call 1000 times, spent 265ms
call 1000 times, spent 260ms
call 1000 times, spent 267ms
call 1000 times, spent 280ms
call 1000 times, spent 267ms
call 1000 times, spent 273ms
-------
project [amqp-rpc]
call 1000 times, average 269ms
```


### 并发调用10000次测试完整数据

#### clouds

```
$ node run clouds 10000

call 10000 times, spent 1880ms
call 10000 times, spent 891ms
call 10000 times, spent 943ms
call 10000 times, spent 1064ms
call 10000 times, spent 914ms
call 10000 times, spent 893ms
call 10000 times, spent 898ms
call 10000 times, spent 891ms
call 10000 times, spent 1004ms
call 10000 times, spent 920ms
-------
project [clouds]
call 10000 times, average 1043ms
```

#### clouds (with clouds-controller)

```
$ node run clouds2 10000

call 10000 times, spent 1497ms
call 10000 times, spent 847ms
call 10000 times, spent 835ms
call 10000 times, spent 755ms
call 10000 times, spent 756ms
call 10000 times, spent 864ms
call 10000 times, spent 715ms
call 10000 times, spent 704ms
call 10000 times, spent 670ms
call 10000 times, spent 705ms
-------
project [clouds2]
call 10000 times, average 748ms
```

#### amqp-rpc

```
$ node run amqp-rpc 10000

call 10000 times, spent 2545ms
call 10000 times, spent 2429ms
call 10000 times, spent 2671ms
call 10000 times, spent 2815ms
call 10000 times, spent 2511ms
call 10000 times, spent 2853ms
call 10000 times, spent 2746ms
call 10000 times, spent 3337ms
call 10000 times, spent 3845ms
call 10000 times, spent 4069ms
-------
project [amqp-rpc]
call 10000 times, average 2915ms
```
