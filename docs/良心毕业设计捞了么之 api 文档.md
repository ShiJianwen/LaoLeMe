# 良心毕业设计捞了么之 api 文档

标签（空格分隔）： Web

---

###用户相关
1.用户注册
```javascript
    url： '/api/v1/user'
    method: 'post'
    data: {
        username:
        password:
        realname:
        sex:
        phone:
        addr:
    }
    res: {
        msg:
        user: {}
    }
```
2.修改用户资料
```javascript
    url： '/api/v1/user/:uid'
    method: 'put'
    params: {uid: 用户id}
    data: Object
    res: {
        msg: 
    }
```
3.删除用户
```javascript
    url： '/api/v1/user/:uid'
    method: 'delete'
    params: {uid: 用户id}
    res: {
        msg:
    }
```
4.获取用户资料
```javascript
    url： '/api/v1/user/:uid'
    method: 'get'
    params: {uid: 用户id}
    res: {
        username:
        realname:
        sex:
        phone:
        addr:
    }
```
5.用户登录
```javascript
    url: '/api/v1/login?type='
    method: 'post'
    query: {type: 1：普通用户 2：店家 3：管理员}
    data: {
        username:
        password:
    }
    res: {
        msg:
        user: {}
    }
```
###店家相关
1.店家注册
```javascript
    url： '/api/v1/boss'
    method: 'post'
    data: Object
    res: {
        msg:
    }
```
2.修改店家资料
```javascript
    url: '/api/v1/boss/:bid'
    method: 'put'
    params: {bid: 店家id}
    data: Object
    res: {
        msg:
    }
```
3.获取店家资料
```javascript
    url: '/api/v1/boss/:bid'
    method: 'get'
    params: {bid: 店家id}
    res: {
        msg:
        boss:
    }
```
4.删除店家
```javascript
    url: '/api/v1/boss/:bid'
    method: 'delete'
    params: {bid: 店家id}
    res: {
        msg:
    }
```
###店铺相关
1.开店注册
```javascript
    url: '/api/v1/restaurant'
    method: 'post'
    data: Object
    res: {
        msg:
    }
```
2.修改店铺资料
```javascript
    url: '/api/v1/restaurant/:rid'
    method: 'put'
    params: {rid: 店铺id}
    data: Object
    res: {
        msg:
    }
```
3.获取店铺列表
```javascript
    url: '/api/v1/restaurant?offset=&q=&rid='
    method: 'get'
    query: {offset: 间隔, q: 查询字段, rid: 店铺id（获取指定店铺时需要）}
    res: {
        msg: 
        restaurants: []
    }
```
4.删除店铺
```javascript
    url: '/api/v1/restaurant/:rid'
    method: 'delete'
    params: {rid: 店铺id}
    res: {
        msg:
    }
```
###菜品相关
1.新增菜品
```javascript
    url: '/api/v1/food'
    method: 'post'
    data: Object
    res: {
        msg:
    }
```
2.修改菜品资料
```javascript
    url: '/api/v1/food/:fid'
    method: 'put'
    params: {fid: 菜品id}
    data: Object
    res: {
        msg:
    }
```
3.获取菜品列表
```javascript
    url: '/api/v1/food?offset=&q=&fid='
    method: 'get'
    query: {offset: 间隔, q: 查询字段, fid: 菜品id}
    res: {
        msg:
        foods: []
    }
```
4.删除菜品
```javascript
    url: '/api/v1/food/:fid'
    method: 'delete'
    params: {fid: 菜品id}
    res: {
        msg:
    }
```
###订单相关
1.新增订单
```javascript
    url: '/api/v1/order'
    method: 'post'
    data: Object
    res: {
        msg:
    }
```
2.取消订单
```javascript
    url: '/api/v1/order/:oid'
    method: 'delete'
    params: {oid: 订单id}
    res: {
        msg:
    }
```
3.修改订单状态
```javascript
    url: '/api/v1/order/:oid'
    method: 'put'
    params: {oid: 订单id}
    data: Object
    res: {
        msg:
    }
```
4.获取订单列表
```javascript
    url: '/api/v1/order?offset=&q=&oid='
    method: 'get'
    query: {offset: 间隔, q: 查询字段, oid: 订单id}
    res: {
        msg:
        orders: []
    }
```
###评论相关
1.新增评论
```javascript
    url: '/api/v1/comment'
    method: 'post'
    data: Object
    res: {
        msg:
    }
```
2.删除评论
```javascript
    url: '/apr/v1/comment/:cid'
    method: 'delete'
    params: {cid: 评论id}
    res: {
        msg:
    }
```
3.获取评论列表
```javascript
    url: '/api/v1/comment?offset=&uid='
    method: 'get'
    query: {offset: 间隔, uid: 用户id}
    res: {
        msg: 
        comments: []
    }
```
###反馈
1.新增反馈
```javascript
    url: '/api/v1/feedback'
    method: 'post'
    data: Object
    res: {
        msg:
    }
```



