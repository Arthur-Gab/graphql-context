let games = [
	{
		id: '1',
		title: 'Zelda',
		platform: ['PS5', 'Nintendo Switch'],
	},
	{
		id: '2',
		title: 'Super Mario Odyssey',
		platform: ['Nintendo Switch'],
	},
	{
		id: '3',
		title: 'Cyberpunk 2077',
		platform: ['PS5', 'Xbox Series X', 'PC'],
	},
	{
		id: '4',
		title: "Assassin's Creed Valhalla",
		platform: ['PS5', 'Xbox Series X', 'PC'],
	},
	{
		id: '5',
		title: 'FIFA 22',
		platform: ['PS4', 'Xbox One', 'Nintendo Switch'],
	},
];

let authors = [
	{ id: '1', name: 'Mario', verified: true },
	{ id: '2', name: 'Luigi', verified: false },
	{ id: '3', name: 'Princess Peach', verified: true },
	{ id: '4', name: 'Bowser', verified: false },
	{ id: '5', name: 'Yoshi', verified: true },
];

let reviews = [
	{
		id: '1',
		rating: 9,
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		author_id: '1',
		game_id: '2',
	},
	{
		id: '2',
		rating: 8,
		content:
			'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
		author_id: '3',
		game_id: '4',
	},
	{
		id: '3',
		rating: 7,
		content:
			'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		author_id: '5',
		game_id: '1',
	},
	{
		id: '4',
		rating: 10,
		content:
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		author_id: '2',
		game_id: '3',
	},
	{
		id: '5',
		rating: 6,
		content:
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		author_id: '4',
		game_id: '5',
	},
];

export default { games, authors, reviews };
