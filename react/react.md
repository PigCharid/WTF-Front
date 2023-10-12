# 快速入门

* 创建和嵌套组件
* 使用 JSX 编写标签 
* 添加样式 
* 显示数据 
* 条件渲染
  * 三元运算符
  * && 
* 渲染列表
* 响应事件
* 更新页面

```
State的更新会导致组件的重新渲染
在设计页面的时候，把相互不会影响的组件进行抽离
设计原则：如果顶层数据的更新需要导致所有内容的更新，则状态放在顶层，如果局部更新，则状态和局部内容抽离成组件
```

* 使用Hook

```
只能在组件的顶层调用Hook
React的Hook规则禁止在循环、条件语句、或嵌套函数中调用Hook
主要原因是为了确保React能够在组件渲染时正确追踪组件状态和副作用的执行
```

* 组件间共享数据
  * 通过props传递
  * 全局状态共享

# React 哲学

# 描述用户界面

* 组件
  * 定义组件
  * 使用组件
* 组件的导入和导出
* 使用JSX
* 在JSX中通过{}使用js
* 将Props传递给组件
* 条件渲染
* 列表渲染

# 添加交互

* 响应事件

  * 将时间作为props传递

  * 事件传播

    * 阻止传播

      ```
      <button onClick={e => {
            e.stopPropagation();
            onClick();
          }}>
      ```

    * 阻止默认行为

      ```
      <form onSubmit={e => {
            e.preventDefault();
            alert('提交表单！');
          }}>
      ```

* State：组件的记忆

* 渲染和提交

* State如同一张快照
* 把State更新加入队列
* 更新State对象

```
在更新对象的时候，注意不能只更新某一个字段，要不可能会造成其他字段为空
正确的方式是利用解构赋值先复制其他对象，然后再更新单独某个字段
用一个函数更新多个字段
function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }
```

* 更新State数组

# 状态管理

* 用State响应输入

```
也就是通过State控制UI
```

* 选择State的结构
  * 合并关联的State
  * 避免相互矛盾的State
  * 避免冗余的State
  * 避免重复的State
  * 避免深度嵌套的State
* 在组件之间共享状态
* 对State进行保留和重置
* 迁移状态逻辑到Reducer

```
一个State如果涉及到很多操作，增删改查都有的话，可以使用Reducer进行分发优化
```

* 使用Context深层传递参数
  * createContext
  * useContext
  * Context.Provider
* 使用reducer和Context扩展你的应用

# 应急方案

* 使用Ref
* 使用ref操作DOM
* 使用Effect同步
* 你可能不需要Effect
* 响应式Effect的生命周期
* 将事件在Effect中分开
* 移除Effect依赖
* 使用自定义Hook复用逻辑

