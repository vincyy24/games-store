import {
	Button,
	Heading,
	HStack,
	Image,
	List,
	ListItem,
	SkeletonText,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	onSelectGenre: (genre: Genre | null) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
	const { data, error, isLoading } = useGenres();
	if (error) return null;

	if (isLoading) {
		const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		return (
			<List>
				{skeletons.map((id) => (
					<ListItem key={id} paddingY={3}>
						<SkeletonText></SkeletonText>
					</ListItem>
				))}
			</List>
		);
	}
	return (
		<>
			<Heading my={3}>Genres</Heading>
			<List>
				<ListItem paddingY="5px">
					<Button
						onClick={() => onSelectGenre(null)}
						fontSize="large">
						All Genres
					</Button>
				</ListItem>
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY={1.5}>
						<HStack>
							<Image
								boxSize="35px"
								borderRadius={8}
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button
								onClick={() => onSelectGenre(genre)}
								fontSize="large"
								variant={"link"}
								whiteSpace={"break-spaces"} textAlign={"left"} paddingLeft={"5px"}>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
