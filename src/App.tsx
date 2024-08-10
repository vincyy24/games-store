import { Button, ButtonGroup } from "@chakra-ui/react";
import "./App.css";

function App() {
	return (
		<>
			<h1>Hello, World!</h1>
			<ButtonGroup>
				<Button colorScheme="blue">Click Me!</Button>
				<Button colorScheme="purple">Click Me!</Button>
				<Button colorScheme="green">Click Me!</Button>
				<Button colorScheme="yellow">Click Me!</Button>
				<Button colorScheme="orange">Click Me!</Button>
				<Button colorScheme="red">Click Me!</Button>
			</ButtonGroup>
		</>
	);
}

export default App;
