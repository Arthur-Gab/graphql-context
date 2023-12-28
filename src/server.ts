import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

/* Resolvers */
import { resolvers } from './resolvers';

/* Generate TypeDefs */
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

const typeDefs = loadSchemaSync('schema.graphql', {
	loaders: [new GraphQLFileLoader()],
});

import _db from './_db';

interface MyContext {
	db: {
		games: [
			{
				id: string;
				title: string;
				platform: [string];
			}
		];
		authors: [
			{
				id: string;
				name: string;
				verified: boolean;
			}
		];
		reviews: [
			{
				id: string;
				rating: number;
				content: string;
				author_id: string;
				game_id: string;
			}
		];
	};
}

// server setup
const startApolloServer = async () => {
	const server = new ApolloServer<MyContext>({
		//typeDefs
		typeDefs,
		//resolvers
		resolvers,
	});

	const { url } = await startStandaloneServer(server, {
		listen: {
			port: 4000,
		},
		context: async ({ req, res }) => ({
			db: _db,
		}),
	});

	console.info(`
    Server runnin on ${new URL(url)}
`);
};

startApolloServer();
