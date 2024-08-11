import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
	return (
		<HStack justifyContent={"space-between"} padding={2}>
			<HStack>
				<Image src={logo} boxSize={"60px"} />
				<Text>Rawg.io</Text>
			</HStack>
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
