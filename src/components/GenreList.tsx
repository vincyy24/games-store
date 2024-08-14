import useGenres from "../hooks/useGenres";

const GenreList = () => {
	const { genres } = useGenres();
	return (
		<ul>
			{genres.map(({ id, name }) => (
				<li key={id}>{name}</li>
			))}
		</ul>
	);
};

export default GenreList;
