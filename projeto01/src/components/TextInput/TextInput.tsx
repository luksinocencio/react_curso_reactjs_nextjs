import { ChangeEvent } from 'react'
import './TextInput.module.css'

interface TextInputProps {
  searchValue: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function TextInput({ searchValue, handleChange }: TextInputProps) {
  return (
    <input
      className='text-input'
      onChange={handleChange}
      value={searchValue}
      type='search'
      placeholder='Type your search'
    />
  )
}
