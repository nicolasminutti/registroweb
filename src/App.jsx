import { useState } from 'react'
import { Registro } from './Registro'

export function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Registro />			
		</>
	)
}