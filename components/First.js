import gql from "graphql-tag";
import { Query } from "react-apollo";

export const QUERY = gql`
	query {
		Product {
			StartingPrice
			ProductName
			ProductImageLink
			Id
			Category
		}
	}
`;

export default function First() {
	return (
		<section>
			<Query query={QUERY} fetchPolicy={"cache-and-network"}>
				{({ loading, data, error }) => {
					if (error) {
						return <div>Error..</div>;
					}
					return <div>{JSON.stringify(data)}</div>;
				}}
			</Query>
		</section>
	);
}
