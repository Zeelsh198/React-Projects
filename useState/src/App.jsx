// File name - HookCounterOne.js
// useEffect is defined here

import { useState, useEffect } from "react";
import './App.css'
function HookCounterOne() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `You clicked ${count} times`;
	}, [count]);

	return (
		<div>
      <h1>useState & useEffect</h1>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Click {count} times
			</button>
		</div>
	);
}
export default HookCounterOne;


