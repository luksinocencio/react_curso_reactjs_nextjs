import { useState } from 'react'

interface ComponentHookUseStateProps {}

/**
 * useState
 * @description Gerenciador de estado em componentes funcionais do React.
 */

export function ComponentHookUseState({}: ComponentHookUseStateProps) {
  const [count, setCount] = useState(0)

  function handleIncrement() {
    setCount(prevCounter => prevCounter + 1)
  }

  return (
    <div>
      <h1>Hello useState!</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}
