import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card>
			<Image
				// objectFit={"cover"}
				src={getCroppedImageUrl(game.background_image)}></Image>
			<CardBody>
				<Heading fontSize={"2xl"}>{game.name}</Heading>
				<HStack justifyContent="space-between" marginBlock={1}>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
						color={"gray.400"}></PlatformIconList>
					<CriticScore score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	);
};

export default GameCard;
