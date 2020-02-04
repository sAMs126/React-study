# React 学习笔记

## React 入门

### React 基本认识

[React 中文官网](https://react.docschina.org/)

**React 特点**

- **1.声明式设计** − React采用声明范式，可以轻松描述应用。
- **2.高效** − React通过对DOM的模拟，最大限度地减少与DOM的交互。
- **3.灵活** − React可以与已知的库或框架很好地配合。
- **4.JSX** − JSX 是 JavaScript 语法的扩展。
- **5.组件** − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
- **6.单向响应的数据流** − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

**React 高效的原因**

1. 虚拟（virtual）DOM，并不直接对DOM进行操作
2. DOM Diff 算法，最小化页面重绘

**React 相关 js 库**

- react.js：React 核心库
- react.js：提供 DOM 操作的 react 扩展库
- babel.js：解析 JSX 语法代码转为纯 JS 代码

**安装 react-devtools**

[Chrome 安装 React Devtools 调试工具](https://www.cnblogs.com/liubeimeng/p/10680420.html)

### React 基本使用

1. 在页面上创建一个元素

   ```html
   <div id="root"></div>
   ```

2. 使用 React 向元素中渲染指定字符

   ```jsx
   // 1. 创建虚拟 DOM，即 React DOM
   var vDom = <h1>Hello World</h1>;
   // 2. 将虚拟 React DOM 渲染到页面的真实 DOM 中
   ReactDOM.render(vDom, document.getElementById("root"));
   ```

### React JSX

JSX 是一个 JavaScript 的语法扩展，JSX 能够很好地描述 UI 应该呈现出它应有交互的本质形式。

#### JSX

React 定义了一种类似于 XML 的 JS 扩展语法，用来创建 React 的虚拟 DOM（元素） 对象，称之为 JavaScript XML，即 [JSX](https://zh-hans.reactjs.org/docs/glossary.html#jsx)。

Babel 的作用就是将 JSX 代码转译为 JS 代码，以便浏览器解析。

####  React DOM

**创建 React DOM**

Babel 会把 JSX 转译成一个名为 `React.createElement()` 函数调用。

两种示例代码完全等效

- jsx 语法 *（简化）*
    ```jsx
      var vDom = <h1>Hello World</h1>;
    ```

- JavaScript 语法 *（本质）*
    ```jsx
      const vDom = React.createElement('h1', null, 'Hello World');
    ```

**渲染 React DOM**

想要将一个 React 元素渲染到 DOM 节点中，只需把它们一起传入 `ReactDOM.render()` 。

```js
ReactDOM.render(virtualDOM, containerDOM); // virtualDOM：虚拟DOM，containerDOM：目标DOM
```

【例】显示 li 列表（[注意 Key 值的使用](https://reactjs.org/docs/reconciliation.html#recursing-on-children)）

```html
<!-- 声明元素 -->
<div id="root"></div>
```

```jsx
// 定义展示列表
const names = ['JQuery', 'Vue', 'Angular', 'React'];

// 创建 React DOM
const vDom = (
    <ul>
        {names.map((name, index) => (
            <li key={index}>{name}</li>
        ))}
    </ul>
);

ReactDOM.render(vDom, document.getElementById('root'));
```

#### 模块与组件

文章最后给出的参考文章已经解释的很详细了，这里只做抛砖引玉。

**模块**

模块仅仅是一个文件，一个脚本而已，它就是这么简单。通常来说就是单独实现特定功能的一个 JavaScript 程序模块。一般情况下，其内部会有一些数据*（ --> 内部的属性）*，以及对数据的一些操作*（ --> 内部的函数）*， 并只向外部暴露一些接口（方法）与外部其它模块通信 。

**组件**

即可重用的 UI 组件*（building block）*，其内部封装了展示所需*（required to render it）*的 template、style 和script，可以将组件视为组成用户界面的独立的可交互的功能单元。

**模块化**

将复杂的程序分解为可管理的模块的方式，减少 script 文件的请求次数并使得各个 script 文件的依赖更加清晰。简单来说，就是实现隔离（高内聚），一个模块仅实现特定的功能，开发时需要什么功能，就加载对应的模块。

**组件化**

将页面视为一个容器，页面上的各个部分相互独立，不同的页面根据内容的需要去放置相关组件即可完成整个页面。从而已达到复用的目的。

<details>
  <summary><font color=blue>组件和模块</font></summary>
  <pre style="text-align:center">
  <img src="https://s2.ax1x.com/2019/09/22/up5ygx.png"/>
  <a href="https://github.com/fouber/blog/issues/10">前端工程——基础篇</a><b>&nbsp; @张云龙</b></pre>
</details>

参考文章

[重谈react优势——react技术栈回顾](https://www.cnblogs.com/zhoulujun/p/9415303.html)

[Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)

[Modules, introduction](https://zh.javascript.info/modules-intro)

[JavaScript modules](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules)

[分析组件化与模块化之间的区别](https://www.jianshu.com/p/cac0beae8876)

推荐阅读

[前端工程——基础篇](https://github.com/fouber/blog/issues/10)

[前端组件化开发实践](https://tech.meituan.com/2015/07/10/frontend-component-practice.html)

------
## React 面向组件

### 定义组件

方式 1：（工厂函数模式）

```jsx
 // 1. 定义组件
// 方式1：使用工厂函数定义组件（简单组件）
function MyComponent() {
    return <h1>Hello World</h1>;
}

// 2. 渲染组件标签
ReactDOM.render(<MyComponent/>, document.getElementById('root'));
```

方式 2：（类模式）

```jsx
// 1. 定义组件
// 方式2：ES6类组件（复杂组件）
class MyComponent extends React.Component {
    render() {
        return <h1>Hello World</h1>;
    }
}

// 2. 渲染组件标签
ReactDOM.render(<MyComponent/>, document.getElementById('root'));
```

> 两种声明方式效果相同，如果定义组件时涉及到**组件状态**，则不能使用工厂模式

**注意**

- 定义组件名必须首字母大写
- 虚拟 DOM 元素只能有一个根元素
- 虚拟 DOM 元素必须有结束标签



### 组件三大属性

#### state

state 是组件对象最重要的一个属性，其值是对象。

React 把组件看作是一个状态机（state machines），通过与用户的交互，实现不同状态渲染 UI，让用户界面和数据保持一致。

当组件的 state 更新了，新的 state 会重新渲染用户界面（重新渲染组件），并不需要操作 DOM 。

**state 的相关操作**

1. 初始化操作（构造函数）

   ```jsx
   constructor(props) {
       super(props);
       this.state = {stateProp1: value1};
   }
   ```

2. 读取某一状态值

   ```jsx
   this.state.stateProp1
   ```

3. 更新状态 *（组件界面将更新）*

   ```jsx
   this.setState({
       stateProp1: value1
   });
   ```

【例】显示当前日期

```jsx
// 定义组件
class Clock extends React.Component {
    // 构造函数初始化
    constructor(props) {
        super(props);
        // 初始化参数
        this.state = {
            date: new Date()
        };
    }
    // 设置定时器
    componentDidMount() {
        // 在组件已经被渲染到 DOM 中后运行
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    // 清除计时器
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
	
    // 更新状态
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

//  渲染组件标签
ReactDOM.render(<Clock />, document.getElementById('root'));
```

【例】点击展示信息

```jsx
// 定义组件
class Clock extends React.Component {
    // 1. 构造函数初始化
    constructor(props) {
        super(props);
        // 初始化参数
        this.state = {
            flag: true
        };
        // 使用箭头函数代替 this.handleClick = this.handleClick.bind(this)
    }

    // 使用箭头函数不绑定 this
    handleClick = () => {
        const flag = !this.state.flag;
        this.setState({
            flag
        });
    };

    render() {
        return (
            <div>
                <h1 onClick={this.handleClick}>切换信息</h1>
                <h2>{this.state.flag ? 'hello world' : '你好 世界'}</h2>
            </div>
        );
    }
}

//  渲染组件标签
ReactDOM.render(<Clock />, document.getElementById('root'));
```

[使用 ES6 箭头函数不绑定 this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions#%E4%B8%8D%E7%BB%91%E5%AE%9Athis)

[class fields 绑定回调函数](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)

#### props

当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）转换为单个对象传递给组件，这个对象被称之为 “props”。

组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props。即所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。

【例】定义显示元素

```jsx
// 1. 定义组件
// 使用工厂函数定义组件（简单组件）
function Person(props) {
    return (
        <ul>
            <li>姓名：{props.name}</li>
            <li>年龄：{props.age}</li>
            <li>性别：{props.sex}</li>
        </ul>
    );
}


const p1 = {
    name: 'Tom',
    age: 18,
    sex: '女'
};

// 2. 渲染组件标签
ReactDOM.render(
    <Person name={p1.name} age={p1.age} sex={p1.sex} />,
    document.getElementById('root')
);
```

针对 props 中的属性值进行限定 （[使用 PropTypes 进行类型检查](https://react-1251415695.cos-website.ap-chengdu.myqcloud.com/docs/typechecking-with-proptypes.html)）

```jsx
Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};
```

设置默认属性值

```jsx
Person.defaultProps = {
    sex: '男',
    age: 18
};
```

将对象的所有属性通过 props 传递 （[解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)）

```jsx
ReactDOM.render(<Person {...p1}/>, document.getElementById('root'));
```

定义组件对象

```jsx
// ES6类组件（复杂组件）
// this 指代组件对象
class Person extends React.Component {
    render() {
        return (
            <ul>
                <li>姓名：{this.props.name}</li>
                <li>年龄：{this.props.age}</li>
                <li>性别：{this.props.sex}</li>
            </ul>
        );
    }
}
```

#### refs

【例】使用 ref 属性标识元素

```jsx
// 1. 定义组件
class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <input type="text" ref="content" />
                &nbsp;&nbsp;
                <button onClick={this.showInput}>提示</button>
            </div>
        );
    }

    showInput = () => {
        console.log(this.refs.content.value);
    };

}
// 2. 渲染组件标签
ReactDOM.render(<MyComponent />, document.getElementById('root'));
```

 通过 ref 获取组件内容特定标签对象，进行读取其相关数据

```jsx
// -- 定义组件 --
<input type="text" ref={input => (this.input = input)} />


// -- 定义方法 --
showInput = () => {
    console.log(this.input.value);
};
```

**事件处理**

React 事件的命名采用小驼峰式（camelCase），而不是纯小写。通过 onXxx 属性指定组件的事件处理函数。

使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。

React 使用的是自定义（合成）事件, 而不是使用的原生 DOM 事件。

React 中的事件是通过事件委托方式处理的（委托给组件最外层的元素）。

```jsx
class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="失去焦点提示内容" onBlur={this.handleBlur}/>
            </div>
        );
    }
    // 通过 event.target 得到发生事件的 DOM 元素对象
    handleBlur = (event) => {
        console.log(event.target.value);
    }
}

// 2. 渲染组件标签
ReactDOM.render(<MyComponent />, document.getElementById('root'));
```

### 组件组合

组件可以在其输出中引用其他组件。

> 1. 拆分组件：拆分界面，抽象组件
> 2. 实现静态组件：使用组件实现静态页面效果
> 3. 实现动态组件：
>    1. 动态显示初始化数据
>    2. 交互功能（绑定事件监听）

数据保存在哪个组件内？

- 某个组件需要 --- 保存在该组件内部
- 某些组件需要 --- 保存在共同的父组件

在子组件中改变父组件的状态

子组件中不能直接改变父组件的状态，状态在哪个组件，更新状态的行为就应该定义在哪个组件

==> 父组件定义函数，传递给子组件，子组件调用函数



【例】组件组合，父组件中声明方法，并在子组件中调用

```jsx
// 1. 定义组件
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ['吃饭', '睡觉', '上班']
        };
    }

    addToDo = todo => {
        const { todos } = this.state;
        todos.unshift(todo);
        this.setState({ todos });
    };

    render() {
        const { todos } = this.state;
        return (
            <div>
                <h1>Simple TODO List</h1>
                <Add count={todos.length} addToDo={this.addToDo} />
                <List todos={todos} />
            </div>
        );
    }
}
class Add extends React.Component {
    render() {
        return (
            <div>
                <input type="text" ref={input => (this.todoInput = input)} />
                <button onClick={this.add}>add #{this.props.count + 1}</button>
            </div>
        );
    }

    // 在子组件中改变父组件的状态
    add = () => {
        // console.log(this.todoInput.value);
        const todo = this.todoInput.value.trim();
        if (!todo) return;
        // console.log(this.props);
        this.props.addToDo(todo);
        this.todoInput.value = '';
    };
}
class List extends React.Component {
    render() {
        const { todos } = this.props;
        return (
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        );
    }
}

List.propTypes = {
    todos: PropTypes.array.isRequired
};

Add.propTypes = {
    count: PropTypes.number.isRequired,
    addToDo: PropTypes.func.isRequired
};

// 2. 渲染组件标签
ReactDOM.render(<App />, document.getElementById('root'));
```

### 表单

在 React 里，HTML 表单元素的工作方式和其他的 DOM 元素有些不同，这是因为表单元素通常会保持一些内部的 state。

【例】获取表单数据

```jsx
// 1. 定义组件
class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        // 初始化状态
        this.state = {
            password: ''
        };
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                账户：
                <input type="text" ref={input => (this.nameInput = input)} />
                &nbsp; 密码：
                <input 
                    type="password" 
                    value={this.state.password} 
                    onChange={this.handleChange}
                />
                &nbsp;
                <input type="submit" />
            </form>
        );
    }

    handleSubmit = e => {
        // 阻止事件默认行为
        e.preventDefault();

        const username = this.nameInput.value;
        const { password } = this.state;
        console.log(`账户为${username}，密码为${password}`);
    };

    handleChange = e => {
        // 读取当前输入的值
        const password = e.target.value;
        // 更新 stats 中的值
        this.setState({ password });
    };
}

// 2. 渲染组件标签
ReactDOM.render(<FormComponent />, document.getElementById('root'));
```

#### 受控组件

使用 JavaScript 函数可以很方便的处理表单的提交， 同时还可以访问用户填写的表单数据。

> 在 HTML 中，表单元素（如 \<input>、 \<textarea> 和 \<select>）之类的表单元素通常自己维护 state，并根据用户输入进行更新。而在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 setState() 来更新。

把两者结合起来，使 React 的 state 成为“唯一数据源”，渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。

在表单元素上设置表单的 value 属性，使其显示的值始终为 this.state.XX，这使得 React 的 state 成为唯一数据源。

```jsx
<input type="password" value={this.state.password} onChange={this.handleChange} />
```

由于 onChange 在每次按键时都会执行并更新 React 的 state，因此显示的值将随着用户输入而更新。

```jsx
handleChange = e => {
    // 读取当前输入的值
    const password = e.target.value;
    // 更新 stats 中的值
    this.setState({ password });
};
```

> :arrow_up_small: 对于受控组件来说，每个 state 突变都有一个相关的处理函数。这使得修改或验证用户输入变得简单。

#### 非受控组件

在一个受控组件中，表单数据是由 React 组件来管理的。另一种替代方案是使用非受控组件，这时表单数据将交由 DOM 节点来处理。

通过 ref 来从 DOM 节点中获取表单数据

```jsx
<input type="text" ref={input => (this.nameInput = input)} />
```

```jsx
handleSubmit = e => {
    const username = this.nameInput.value;
    console.log(`账户为${username}`);
};
```

[受控组件 vs 非受控组件](https://zh-hans.reactjs.org/docs/glossary.html#%E5%8F%97%E6%8E%A7%E7%BB%84%E4%BB%B6-vs-%E9%9D%9E%E5%8F%97%E6%8E%A7%E7%BB%84%E4%BB%B6)

参考：[Controlled and uncontrolled form inputs in React don't have to be complicated](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)

### 组件生命周期

React 声明周期方法图：:star:[React Lifecycle Methods diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/):star:

#### 挂载

第一次初始化渲染显示：`ReactDOM.render()`

当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：

- **[constructor()](https://zh-hans.reactjs.org/docs/react-component.html#constructor)**：初始化state、绑定事件实例

- [static getDerivedStateFromProps()](https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromprops)

- **[render()](https://zh-hans.reactjs.org/docs/react-component.html#render)**：插入虚拟 DOM

- **[componentDidMount()](https://zh-hans.reactjs.org/docs/react-component.html#componentdidmount)**：组件挂载完成，可用来实例化请求

#### 更新

每次更新：`state：this.setState()`

当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：

- static getDerivedStateFromProps()
- [shouldComponentUpdate()](https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate)

- **render()**

- [getSnapshotBeforeUpdate()](https://zh-hans.reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)

- **[componentDidUpdate()](https://zh-hans.reactjs.org/docs/react-component.html#componentdidupdate)**：组件内容更新完成

#### 卸载

移除组件：`ReactDOM.unmountComponentAtNode(containerDom);`

当组件从 DOM 中移除时会调用如下方法：

- **[componentWillUnmount()](https://zh-hans.reactjs.org/docs/react-component.html#componentwillunmount)**：组件将要被移除，可用来执行必要的清理工作

【例】定时淡入淡出效果展示

```jsx
// 1. 定义组件
class LifeComponent extends React.Component {
    constructor(props) {
        super(props);
        // 初始化状态
        this.state = {
            opacity: 1
        };
    }

    componentDidMount() {
        // 启动循环定时器
        this.intervalId = setInterval(() => {
            //注意区分：let 和 const
            let { opacity } = this.state;
            opacity -= 0.1;
            if (0 >= opacity) {
                opacity = 1;
            }
            this.setState({ opacity });
        }, 200);
    }

    distoryComponent = () => {
        // 销毁指定组件对象
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    };

    componentWillUnmount() {
        // 清理定时器
        clearInterval(this.intervalId);
    }

    render() {
        const { opacity } = this.state;
        return (
            <div>
                <h2 style={{ opacity }}>{this.props.msg}</h2>
                <button onClick={this.distoryComponent}>点击消失</button>
            </div>
        );
    }
}

// 2. 渲染组件标签
ReactDOM.render(
    <LifeComponent msg="淡入淡出效果展示" />,
    document.getElementById('root')
);
```

### 虚拟 DOM

> 虚拟 DOM（ Virtual DOM ）是一种编程概念。在这个概念里， UI 以一种理想化的，或者说“虚拟的”表现形式被保存于内存中，并通过如 ReactDOM 等类库使之与“真实的” DOM 同步。
>
> 这种方式赋予了 React 声明式的 API：希望让 UI 是什么状态，React 就确保 DOM 匹配该状态。从而从属性操作、事件处理和手动 DOM 更新中解放出来。
>
> Virtual DOM 是一种由 Javascript 类库基于浏览器 API 实现的概念。

### DOM Diff 算法

官方博文：[Diffing 算法](https://zh-hans.reactjs.org/docs/reconciliation.html#the-diffing-algorithm)

深入了解：:+1: ​[深入浅出 React（四）：虚拟 DOM Diff 算法解析](https://www.infoq.cn/article/react-dom-diff/)

Diff 基本原理：

![1Di0b9.png](https://s2.ax1x.com/2020/02/04/1Di0b9.png)

---

## React 应用

使用 React 脚手架创建 React 应用

```powershell
npx create-react-app app-name
```

默认创建完成后即可启动 React 脚手架

```powershell
cd my-app
npm start
```

【例】[使用 React 脚手架创建 React 应用](https://github.com/sAMs126/React-study/tree/master/stu/08_React%E5%BA%94%E7%94%A8/react-app)

---

## React AJAX

**[AJAX and APIs](https://zh-hans.reactjs.org/docs/faq-ajax.html)**

**何时请求**

在 componentDidMount() 生命周期函数中发起请求，并拿到 AJAX 请求返回数据的数据并通过 setState 来更新组件。

### AXIOS

[axios API](http://www.axios-js.com/zh-cn/docs/)

【例】通过 AXIOS 请求 GitHub 上 star 数量最多的项目（以字母 r 开头）

```jsx
// 1. 定义组件
class MostStarRepo extends React.Component {
    state = {
        repoName: '',
        repoUrl: ''
    };

    componentDidMount() {
        const url =
              'https://api.github.com/search/repositories?q=r&sort=stars&order=desc';
        axios
            .get(url)
            .then(response => {
            // handle success
            // console.log(response);
            // 得到数据
            const res = response.data;
            const { name, html_url } = res.items[0];
            // 更新状态
            this.setState({
                repoName: name,
                repoUrl: html_url
            });
        })
            .catch(error => {
            // handle error
            console.log(error);
        })
            .finally(() => {
            // always executed
        });
    }

    render() {
        const { repoName, repoUrl } = this.state;
        if (!repoName) {
            return <h2>LOADING...</h2>;
        } else {
            return (
                <h2>
                    Most star repo is&nbsp;
                    <a href={repoUrl}>{repoName}</a>
                </h2>
            );
        }
    }
}

// 2. 渲染组件标签
ReactDOM.render(<MostStarRepo />, document.getElementById('root'));
```

### FETCH

[Fetch API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)

[Using Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

【例】通过 Fetch 请求 GitHub 上 star 数量最多的项目（以字母 r 开头）

```jsx
fetch(url)
    .then(response => {
    return response.json();
})
    .then(res => {
    // handle success
    // 得到数据
    const { name, html_url } = res.items[0];
    // 更新状态
    this.setState({
        repoName: name,
        repoUrl: html_url
    });
});
```
### 在 React 应用中使用 AJAX

【例】[在react 应用中使用 AJAX](https://github.com/sAMs126/React-study/tree/master/stu/10_React%E5%BA%94%E7%94%A8%E4%B8%AD%E4%BD%BF%E7%94%A8AJAX/react-app)

在项目中引入 axios

```powershell
npm install axios
```

```js
import Axios from 'axios'
```

**组件间传值**

![1DCBM4.png](https://s2.ax1x.com/2020/02/04/1DCBM4.png)

---

## 技术总结

### 组件通信

#### 通过 props 传递

1. 共同的数据放在父组件上，特有的数据放在自己组件内部内部（state）
2. 通过 props 可以传递一般数据和函数数据，但是只能一层一层传递
3. 一般数据：
   1. 父组件传递数据给子组件
   2. 子组件读取数据
4. 函数数据：
   1. 子组件传递数据给父组件
   2. 子组件调用函数

#### 使用消息订阅-发布机制

依赖工具库：[PubSubJS](https://github.com/mroderick/PubSubJS) 

在项目中导入 

```
npm install pubsub-js --save
```

```js
import PubSub from 'pubsub-js'
```

**PubSubjs 使用**

- 发布消息

  ```js
  PubSub.publish('消息名称', 参数);
  ```

- 订阅消息

  ```js
  PubSub.subscribe('消息名称', 回调函数);
  ```

- 取消订阅

  ```js
  var token = PubSub.subscribe('消息名称', 回调函数);
  // 取消订阅
  PubSub.unsubscribe(token);
  ```

  【例】[在 react 应用中使用 PubSubjs](https://github.com/sAMs126/React-study/tree/master/stu/11_%E7%BB%84%E4%BB%B6%E9%97%B4%E9%80%9A%E4%BF%A1PubSubJS/react-app) 

### ES6 常用语法

1. 定义`变量` / `常量`：`const` / `let`
2. 解构赋值：`let {a,b} = this.props`、`import {aa} from 'xxx'` [详细介绍](http://es6.ruanyifeng.com/?search=%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC&x=0&y=0#docs/destructuring)

3. 箭头函数: 
   1. 常用场景：
      - 组件的自定义方法：xxx = () => {}
      - 匿名函数 
   2. 优点: 
      - 没有自己的 this，使用引用 this 查找的是外部 this

---

## react-router

**SPA 的理解**

1. 单页 Web 应用（ single page web application，SPA）
2. 整个应用只有一个完整的页面
3. 点击页面中的链接不会刷新页面，本身也不会向服务器发请求
4. 当点击路由链接时，只会做页面的局部更新
5. 数据都需要通过 ajax 请求获取，并在前端异步展现

### 路由的理解

1. 什么是路由？
   - 一个路由就是一个映射关系（key : value）
   - key 为路由路径，value 的值可以为 function 或者是 component
2. 路由分类
   - 后台路由：服务器端路由，value 是 function，用来处理客户端提交的请求并返
     回一个响应数据
   - 前台路由：浏览器端路由，value 是 component，当请求的是路由 path 时, 前端没有发送 http 请求，但界面会更新显示对应的组件
3. 后台路由
   - 注册路由：router.get(path,function(req,res))
   - 当 node 接收到一个请求时，根据请求路径找到匹配的路由，调用路由中的函数来处理请求，返回响应数据 
4. 前端路由
   - 注册路由：<Routepath = "/about" component = {About}> 
   - 当浏览器的 hash 变为 #about 时，当前路由组件就会变为 About 组件

### react-router 的基本使用

**路由相关组件**

[React Router 使用教程](http://www.ruanyifeng.com/blog/2016/05/react_router.html)

- `<BrowserRouter>`
- `<HashRouter>` 
- `<Route>` 
- `<Redirect>`
- `<Link>`
- `<NavLink>`
- `<Switch>`

在项目中引入

```powershell
npm install --save react-router-dom
```

编写入口 js 文件

```jsx
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './component/app';

import './index.css';

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
```

【例】[react-router 的基本使用](https://github.com/sAMs126/React-study/tree/master/stu/12_React-Router%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/react-app)

**如何编写路由**

1. 编写路由组件
2. 在父路由中指定路由标签
   - 路由链接：`<NavLink>`
   - 路由：`<Route>`

---

## React 中使用 ant-design

[antd 中文官网](https://ant.design/index-cn)

1. 引入 antd 

   ```powershell
   -- 安装 Ant Design of React
   npm install antd --save
   ```

2. 引入样式

   ```jsx
   import 'antd/dist/antd.css';
   ```

3. 组件使用

   ```jsx
   import { DatePicker } from 'antd';
   ReactDOM.render(<DatePicker />, mountNode);
   ```

4. 设置按需加载

   1. 下载依赖包

      ```powershell
      npm install react-app-rewired customize-cra babel-plugin-import --save-dev 
      ```

   2. 修改默认配置

      - package.json 

        ```json
          "scripts": {
            "start": "react-app-rewired start",
            "build": "react-app-rewired build",
            "test": "react-app-rewired test --env=jsdom"
          },
        ```

      - config-overrides.js

        ```js
        const { override, fixBabelImports } = require('customize-cra');
        module.exports = override(
       fixBabelImports('import', {
                libraryName: 'antd-mobile',
             style: 'css'
            })
        );
        ```
        
   
   3. 去掉引入的 css 样式
   
      ```jsx
      // import 'antd-mobile/dist/antd-mobile.css';
      ```

---

## Redux

[Redux 中文官网](https://www.redux.org.cn/)

**redux 是什么**

Redux 是 JavaScript 状态容器，提供可预测化的状态管理。

Redux 是一个独立专门用于做状态管理的 JS 库，其作用就是：集中式管理 React 应用中多个组件共享的状态

动态组件理解：

1. 构建静态组件
2. 设置初始化状态
3. 绑定事件监听

**为什么使用 redux**

1. 将数据和行为分开，方便维护

2. 解决 react 组件间数据传递

   1. react 数据传递是单向数据流（间接传递）
      - 父传给子：自上而下进行传递
      - 子传给父：通过回调函数进行传递

   2. 使用 [Context](https://zh-hans.reactjs.org/docs/context.html)
      - 维护一个类似于全局的变量
      - 是侵入式代码，不方便维护
   3. 使用[消息订阅模式](#使用消息订阅-发布机制)（事件模式）
      - 先在顶层组件上使用订阅功能
      - 在其他组件上消费实现定义好的功能

### redux 的核心 API

1. [createStore()](https://www.redux.org.cn/docs/api/createStore.html)
   - 创建包含指定 reducer 的 store 对象 
2. [store 对象](https://www.redux.org.cn/docs/api/Store.html)
   - redux 库最核心的管理对象
   - 内部维护着：state 和 reducer
3. [applyMiddleware()](https://www.redux.org.cn/docs/api/applyMiddleware.html)
   - 使用自定义功能的中间件来扩展 Redux
4. [combineReducers()](https://www.redux.org.cn/docs/api/combineReducers.html)
   - 合并多个 reducer 函数

### redux 的三个核心概念

1. [action](https://www.redux.org.cn/docs/basics/Actions.html)

   - 表示要执行行为的对象

   - 包含两个方面的属性

     - type：表示将要执行的动作，字符串常量，唯一，必要属性 
     - orthe_obj：数据属性，值类型任意，可选属性

   - 【例】：

     ```typescript
     const action={ type:'ADD', data:2 } 
     ```

   - action 创建函数

     - action 创建函数只是简单的返回一个 action
     
     ```typescript
     // 注意需使用 => ({})
     const add = (number) => ({
         type: 'INCREMENT',
         data: number
     })
     ```
     
     ```typescript
     function addTodo(text) {
       return {
         type: ADD_TODO,
         text
       }
     }    
     ```

2. [reducer](https://www.redux.org.cn/docs/basics/Reducers.html)

   - reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state

   - 【例】：

     ```javascript
     // state = 0 形参默认值
     function counter(state = 0, action) {
         switch (action.type) {
             case 'INCREMENT':
                 return state + action.data;
             case 'DECREMENT':
                 return state - action.data;
             default:
                 return state;
         }
     }
     ```

   - 注意：

     - 返回一个新的状态 
     - 不要修改原来的状态

3. [store](https://www.redux.org.cn/docs/basics/Store.html)

   - store 就是把 action 和 reducers 联系到一起的对象
   
   - 创建 store
   
     ```javascript
     import { createStore } from 'redux'
     import todoApp from './reducers'
     let store = createStore(todoApp)
     ```
   
   - store 的职责
   
     - 维持应用的 state；
     - 提供 [getState()](https://www.redux.org.cn/docs/api/Store.html#getState) 方法获取 state；
     - 提供 [dispatch(action)](https://www.redux.org.cn/docs/api/Store.html#dispatch) 方法分发 action，触发 reducer 调用，产生新的 state；
     - 通过 [subscribe(listener)](https://www.redux.org.cn/docs/api/Store.html#subscribe) 注册监听器，当产生了新的 state 时，自动调用；
     - 通过 [subscribe(listener)](https://www.redux.org.cn/docs/api/Store.html#subscribe) 返回的函数注销监听器。
   

【例】[使用 redux 编写应用](https://github.com/sAMs126/React-study/tree/master/stu/14_Redux/react-redux-demo)

redux 文件夹结构

```
redux
  |- action-types.js : 包含所有的 action type 常量字符串
  |- actions.js		 : 包含所有的 action creator
  |- reducers.js	 : 包含所有的 reducer 模块
  |- store.js		 : 生成一个 store 对象，并将其暴露出去(最核心)
```



redux 课外读物:slightly_smiling_face:

[[译] 2019 React Redux 完全指南 - 希里花斯](https://juejin.im/post/5cac8ccd6fb9a068530111c7#heading-0)

[通过三张图了解Redux中的重要概念](https://www.cnblogs.com/wilber2013/p/5403350.html)

---

### react-redux

[react-redux 官方网站【英】](https://react-redux.js.org/)

[react-redux 中文简译](https://www.redux.org.cn/docs/react-redux/)

react-redux 是一个 react 插件库 

react-redux 用来简化在 react 应用中使用 redux

**理解**：react - redux 将所有组件分为两大类

1. UI 组件
   - 只负责 UI 的呈现，不带有任何业务逻辑
   - 通过 props 接收数据（接收一般数据和函数）
   - 不使用任何 Redux 的 API
   - 归属在 components 文件夹下 
2. 容器组件
   - 负责管理数据和业务逻辑，不负责 UI 的呈现
   - 使用 Redux 的 API
   - 归属在 containers 文件夹下

#### 相关API

:smiley:API 参考：[【中】](https://www.redux.org.cn/docs/react-redux/api.html#api)

1. Provider

   - 让所有组件都可以得到 state 数据
   
  ```jsx
      <Provider store={store}>
     	...
      </Provider>
  ```

2. connect() 

   - 连接 React 组件与 Redux store
   - 连接操作不会改变原来的组件类。
     反而**返回**一个新的已与 Redux store 连接的组件类。

   - 包装 UI 组件生成容器组件

     ```js
     import { connect } from 'react-redux';
     
     export default connect(mapStateToProps, mapDispatchToProps)(App)
     ```

3. mapStateToprops()

   - 将外部的数据（即 state 对象）转换为 UI 组件的标签属性

     ```js
     const mapStateToProps = state => ({
         value: state
     })
     ```

4. mapDispatchToProps()

   - 将分发 action 的函数转换为 UI 组件的标签属性
   - 简洁语法可以直接指定为 actions 对象或包含多个 action 方法的对象



引入依赖

```powershell
npm install --save react-redux
```

【例】[在 react 应用中使用 react-redux](https://github.com/sAMs126/React-study/tree/master/stu/14_Redux/react-to-redux)

### redux异步编程

redux 面临的问题：

*redux 默认是不能进行异步处理，而应用又需要在 redux 中执行异步任务（ AJAX，定时器等）*

解决这个痛点需要用到 redux 的中间件（ [Middleware](https://www.redux.org.cn/docs/advanced/Middleware.html) ）--  **[Redux Thunk](https://github.com/reduxjs/redux-thunk)**

```powershell
npm install --save redux-thunk
```

【例】[使用 redux-thunk 进行 redux 异步编程](https://github.com/sAMs126/React-study/tree/master/stu/14_Redux/react-redux-thunk)

### 使用 redux 调试工具

1. 安装 chrome 浏览器插件 [redux-devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

2. 在项目中引入工具依赖包（在开发环境中引入）

   ```powershell
   npm install --save-dev redux-devtools-extension
   ```

3. 在 store.js 文件中调用

   ```diff
   
   +import { composeWithDevTools } from 'redux-devtools-extension';
   
   
   // 生成一个 store 对象
   const store = createStore(
       counter,
       // 应用上异步中间件
   -	applyMiddleware(thunk)
   +   composeWithDevTools(applyMiddleware(thunk))
   );
   
   export default store;
   ```

   