import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
	const { data } = useGenres();
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
