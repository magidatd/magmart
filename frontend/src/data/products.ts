export const selectedProduct = {
	name: 'Stylish Jacket',
	price: 120,
	originalPrice: 150,
	description: 'This is a stylish jacket perfect for any occassion',
	brand: 'FashionBrand',
	material: 'Leather',
	sizes: ['S', 'M', 'L', 'XL'],
	colours: ['Red', 'Black'],
	images: [
		{
			url: 'https://picsum.photos/500/500?random=1',
			altText: 'Stylish Jacket 1',
		},
		{
			url: 'https://picsum.photos/500/500?random=2',
			altText: 'Stylish Jacket 2',
		},
	],
};

export const similarProducts = [
	{
		id: 1,
		name: 'Product 1',
		price: 100,
		images: [{ url: 'https://picsum.photos/500/500?random=3' }],
		altText: 'Product 1',
	},
	{
		id: 2,
		name: 'Product 2',
		price: 140,
		images: [{ url: 'https://picsum.photos/500/500?random=4' }],
		altText: 'Product 2',
	},
	{
		id: 3,
		name: 'Product 3',
		price: 110,
		images: [{ url: 'https://picsum.photos/500/500?random=5' }],
		altText: 'Product 3',
	},
	{
		id: 4,
		name: 'Product 1',
		price: 170,
		images: [{ url: 'https://picsum.photos/500/500?random=6' }],
		altText: 'Product 4',
	},
];
