import { useDispatch } from "react-redux";
import { initializeStore } from "../lib/redux";
import { initializeApollo } from "../lib/apollo";
import useInterval from "../lib/useInterval";
import Layout from "../components/Layout";
import { QUERY } from "../components/First";
import First from "../components/First";

const IndexPage = () => {
	return (
		<Layout>
			<First />
		</Layout>
	);
};

export async function getStaticProps() {
	const reduxStore = initializeStore();
	const apolloClient = initializeApollo();
	const { dispatch } = reduxStore;

	// dispatch({
	// 	type: "TICK",
	// 	light: true,
	// 	lastUpdate: Date.now()
	// });

	await apolloClient.query({
		query: QUERY
	});

	return {
		props: {
			initialReduxState: reduxStore.getState(),
			initialApolloState: apolloClient.cache.extract()
		},
		unstable_revalidate: 1
	};
}

export default IndexPage;
