import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { TbDeviceNintendo } from "react-icons/tb";

interface Props {
	platforms: Platform[];
	color: string;
}
const PlatformIconList = ({ platforms, color }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		android: FaAndroid,
		ios: MdPhoneIphone,
		linux: FaLinux,
		mac: FaApple,
		nintendo: TbDeviceNintendo,
		pc: FaWindows,
		playstation: FaPlaystation,
		web: BsGlobe,
		xbox: FaXbox,
	};
	return (
		<HStack margin={1}>
			{platforms.map(({ slug, id }) => (
				<Icon key={id} color={color} as={iconMap[slug]} />
			))}
		</HStack>
	);
};

export default PlatformIconList;
