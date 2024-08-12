import { Badge } from "@chakra-ui/react";

interface Props {
	score: number;
}
const CriticScore = ({ score }: Props) => {
	const colorScheme = score > 75 ? "green" : score < 30 ? "red" : "yellow";
	return (
		<Badge
			paddingX={2}
			borderRadius={1}
			colorScheme={colorScheme}
			fontSize={"14px"}>
			{score}
		</Badge>
	);
};

export default CriticScore;
