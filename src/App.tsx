import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

	return (
		<>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
				templateColumns={{
					base: "1fr",
					lg: "220px 1fr",
				}}>
				<GridItem area={"nav"}>
					<NavBar />
			</GridItem>
				<Show above="lg">
					<GridItem area={"aside"} paddingX={5}>
						<GenreList
							selectedGenre={selectedGenre}
							onSelectGenre={(genre) => setSelectedGenre(genre)}
						/>
					</GridItem>
				</Show>
				<GridItem area={"main"} px={4}>
					<PlatformSelector
						selectedPlatform={selectedPlatform}
						onSelectPlatform={(platform) =>
							setSelectedPlatform(platform)
						}
					/>
					<GameGrid
						selectedGenre={selectedGenre}
						selectedPlatform={selectedPlatform}
					/>
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
