import { type Resolvers } from '../types';

export const resolvers: Resolvers = {
	Query: {
		games: (parent, args, { db }) => {
			return db.games;
		},
		game: (parent, args, { db }) => {
			return db.games.find((review) => review.id === args.id) ?? null;
		},
		authors: (parent, args, { db }) => {
			return db.authors;
		},
		author: (parent, args, { db }) => {
			return db.authors.find((review) => review.id === args.id) ?? null;
		},
		reviews: (parent, args, { db }) => {
			return db.reviews;
		},
		review: (parent, args, { db }) => {
			return db.reviews.find((review) => review.id === args.id) ?? null;
		},
	},
	Game: {
		reviews: (parent, args, { db }) => {
			return db.reviews.filter((review) => review.game_id === parent.id);
		},
	},
	Author: {
		reviews: (parent, args, { db }) => {
			return db.reviews.filter(
				(review) => review.author_id === parent.id
			);
		},
	},
	Review: {
		game: (parent, args, { db }) => {
			const { game_id } = db.reviews.find(
				(review) => review.id === parent.id
			);

			return db.games.find((game) => game.id === game_id);
		},
		author: (parent, args, { db }) => {
			const { author_id } = db.reviews.find(
				(review) => review.id === parent.id
			);

			return db.authors.find((author) => author.id === author_id);
		},
	},
	Mutation: {
		deleteGame: (_, args, { db }) => {
			let deletedGame = null;

			db.games = db.games.map((game) => {
				if (game.id !== args.id) {
					return game;
				} else {
					deletedGame = game;
				}
			});

			return deletedGame;
		},
		addGame: (_, args, { db }) => {
			let game = {
				...args.game,
				id: Math.floor(Math.random() * 100000).toString(),
			};

			db.games.push(game);

			return game;
		},
		updateGame: (_, args, { db }) => {
			let updatedGame = null;

			db.games = db.games.map((game) => {
				if (game.id === args.id) {
					updatedGame = { ...game, ...args.edits };
					return updatedGame;
				}
				return game;
			});

			return updatedGame;
		},
	},
};
