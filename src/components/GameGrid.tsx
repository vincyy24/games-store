import { SimpleGrid, Text } from "@chakra-ui/react";
import type { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const { data, error, isLoading } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6];
	if (error) return <Text>{error}</Text>;

	let elements = skeletons.map((skeleton) => (
		<GameCardContainer key={skeleton}>
			<GameCardSkeleton></GameCardSkeleton>
		</GameCardContainer>
	));

	if (!isLoading)
		elements = data.map((item) => (
			<GameCardContainer key={item.id}>
				<GameCard game={item} />
			</GameCardContainer>
		));

	return (
		<SimpleGrid
			columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
			paddingY={4}
			spacing={6}>
			{...elements}
		</SimpleGrid>
	);
};

export default GameGrid;
