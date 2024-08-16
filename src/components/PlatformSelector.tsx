import {
	Button,
	Divider,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	type MenuItemProps,
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
	const activeMenuItemStyles = (id: number | null): MenuItemProps =>
		id === selectedPlatform?.id
			? { fontWeight: "bold", fontSize: "large" }
			: { fontWeight: "normal", fontSize: "initial" };
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || "All Platforms"}
			</MenuButton>
			<MenuList>
				<MenuItem
					{...activeMenuItemStyles(null)}
					onClick={() => onSelectPlatform(null)}>
					All Platforms
				</MenuItem>
				<Divider />
				{data.map((platform: Platform) => (
					<MenuItem
						{...activeMenuItemStyles(platform.id)}
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
