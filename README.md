# udemy-Typescript-with-React

Udemy講座
[Typescript with modern React (i.e. hooks, context, suspense)](https://www.udemy.com/course/typescript-with-react-hooks-and-context/)

## 手始め

### ReactにTypeScriptをinstall

※`create-react-app`でアプリケーションを作りました。

```
$ yarn add typescript @types/node @types/react @types/react-dom
```

### App.tsxで書いてみる

ファイル`App.js`を`App.tsx`に変更

```javascript:App.tsx
import React from 'react';

const App = (): JSX.Element  => {
  const sum = (a: number, b: number): number => {
    return a + b;
  };
  return (
   <>
    <p>{sum(1, 2)}</p>
   </>
  );
};

export default App;
```

## webpackで導入

```terminal:install
$ yarn add -D @babel/core @babel/preset/env @babel/preset-react @babel/preset-typescript webpack webpack-cli webpack-dev-server babel-loader
$ yarn add react react-dom @types/react @types/react-dom
```

```javascript:.babelrc
{
    "presets": ["@babel/env", "@babel/react", "@babel/typescript"]
}
```

## TodoList

### useState

useStateに文字列型を指定

```javascript
const [value, setValue] = useState<string>('');
```

useStateにオブジェクト型を指定

```javascript
interface ITodo {
  text: string,
  complete: boolean
}

const [todos, setTodos] = useState<ITodo[]>([]);
```

### 関数に型指定

```javascript
const addTodo = (text: string): void => {
  const newTodos: ITodo[] = [...todos, { text, complete: false }];
  setTodos(newTodos);
};
```


### formEventの型指定

formの`onSubmit`関数の引数に`React.FormEvent`指定

```javascript
type formElem = React.FormEvent<HTMLFormElement>
const handleSubmit = (e: formElem): void => {
  e.preventDefault();
};

<form onSubmit={handleSubmit}>
</form>
```

### mapで展開するときの型指定

```javascript
<ul>
  {
    todos.map((todo: ITodo, index: number) => ( 
      <li key={index}>{todo.text}</li>
    ))
  }
</ul>
```
