import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "51dfb6b4ff9541c092e7f32f6a32b59d",
	},
});
