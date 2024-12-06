/**
 * use Hooks apenas no nível superior
 * Não use Hooks dentro de loops, condições ou funções aninhadas
 */

import { ComponentHookUseRef } from './ComponentHookUseRef.tsx'

interface AppProps {}

export function App({}: AppProps) {
  return (
    <div>
      <h1>Hello App</h1>
      <ComponentHookUseRef />
    </div>
  )
}
