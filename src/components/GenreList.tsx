import {
	HStack,
	Image,
	List,
	ListItem,
	SkeletonText,
	Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
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
		<List>
			{data.map(({ id, name, image_background }) => (
				<ListItem key={id} paddingY="5px">
					<HStack>
						<Image
							boxSize="35px"
							borderRadius={8}
							src={getCroppedImageUrl(image_background)}
						/>
						<Text fontSize="large">{name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
