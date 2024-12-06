import { useEffect, useState } from 'react'

interface ComponentHookUseEffectProps {}

function eventFn() {
  console.log('h1 clicado')
}

/**
 * useEffect
 * @description Realizar efeitos colaterais como buscar dados, manipular o DOM, configurar subscrições e mais, em componentes funcionais.
 * - Semelhante a Component Lifecycle Methods: useEffect pode imitar componentDidMount, componentDidUpdate e componentWillUnmount.
 * - Array de Dependências: Controla quando o efeito é executado. Se o array estiver vazio, o efeito executa uma vez após o primeiro render.
 * - Função de Limpeza: Usada para limpar efeitos colaterais (ex: remover um listener de eventos).
 * Vantagens:
 - Flexibilidade: Permite realizar diversos tipos de efeitos colaterais de maneira declarativa.
 * - Organização: Mantém o código mais limpo e organizado, separado por propósito.
 */

export function ComponentHookUseEffect({}: ComponentHookUseEffectProps) {
  const [count, setCount] = useState(0)

  // componentDidUpdate - executa toda vez que o componente é atualizado
  useEffect(() => {
    console.log('componentDidUpdate')
  })

  // componentDidMount - executa uma única vez quando o componente é montado
  useEffect(() => {
    console.log('componentDidMount')
    // sem dependência, executa uma única vez
  }, [])

  // com dependência, executa toda vez que a dependência mudar
  useEffect(() => {
    console.log(`contador mudou para ${count}`)
    // com dependência, executa toda vez que a dependência mudar
  }, [count])

  // usar javascript puro
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn)

    // componentWillUnmount - executa toda vez que o componente é desmontado
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn)
    }
  }, [])

  function handleIncrement() {
    setCount(prevCounter => prevCounter + 1)
  }

  return (
    <div>
      <h1>Hello UseEffect!</h1>
      <p>Countador: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}
