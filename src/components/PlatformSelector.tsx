import {
	Button,
	Divider,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";
interface Props {
	selectedPlatform: Platform | null;
	onSelectPlatform: (platform: Platform | null) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
	const { data, error } = usePlatforms();
	if (error) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || "All Platforms"}
			</MenuButton>
			<MenuList>
				<MenuItem onClick={() => onSelectPlatform(null)}>
					All Platforms
				</MenuItem>
				<Divider />
				{data.map((platform: Platform) => (
					<MenuItem
						key={platform.id}
						onClick={() => onSelectPlatform(platform)}>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
