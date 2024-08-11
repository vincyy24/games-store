import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<HStack>
			<Text>☀️</Text>
			<Switch
				colorScheme="green"
				isChecked={colorMode === "dark"}
				onChange={toggleColorMode}
			/>
			<Text>🌙</Text>
		</HStack>
	);
};

export default ColorModeSwitch;
