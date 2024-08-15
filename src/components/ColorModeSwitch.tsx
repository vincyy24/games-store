import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<HStack>
			<Text onClick={toggleColorMode} cursor="pointer">
				☀️
			</Text>
			<Switch
				colorScheme="green"
				isChecked={colorMode === "dark"}
				onChange={toggleColorMode}
			/>
			<Text onClick={toggleColorMode} cursor="pointer">
				🌙
			</Text>
		</HStack>
	);
};

export default ColorModeSwitch;
