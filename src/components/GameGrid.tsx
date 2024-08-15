import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
	selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
	const { data, error, isLoading } = useGames(selectedGenre);
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
			padding={4}
			spacing={3}>
			{...elements}
		</SimpleGrid>
	);
};

export default GameGrid;
