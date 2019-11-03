# udemy-Typescript-with-React

Udemy講座
[Typescript with modern React (i.e. hooks, context, suspense)](https://www.udemy.com/course/typescript-with-react-hooks-and-context/)

## 手始め

### ReactにTypeScriptをinstall

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

## TodoList

### useState

useStateに型を指定

```javascript
const [value, setValue] = useState<string>('');
```

### formEvent

formの`onSubmit`関数の引数に`React.FormEvent`指定

```javascript
type formElem = React.FormEvent<HTMLFormElement>
const handleSubmit = (e: formElem): void => {
  e.preventDefault();
};

<form onSubmit={handleSubmit}>
</form>
```
