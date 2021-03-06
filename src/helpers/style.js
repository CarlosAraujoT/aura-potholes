const styles = [
	{
		featureType: "all",
		elementType: "labels.text.fill",
		stylers: [
			// {
			// 	saturation: 36,
			// },
			// {
			// 	color: "#000000",
			// },
			// {
			// 	lightness: 40,
			// },
		],
	},
	// {
	// 	featureType: "all",
	// 	elementType: "labels.text.stroke",
	// 	stylers: [
	// 		{
	// 			visibility: "on",
	// 		},
	// 		{
	// 			color: "#000000",
	// 		},
	// 		{
	// 			lightness: 16,
	// 		},
	// 	],
	// },
	{
		featureType: "all",
		elementType: "labels.icon",
		stylers: [
			{
				visibility: "off",
			},
		],
	},
	// {
	// 	featureType: "administrative",
	// 	elementType: "geometry.fill",
	// 	stylers: [
	// 		{
	// 			color: "#000000",
	// 		},
	// 		{
	// 			lightness: 20,
	// 		},
	// 	],
	// },
	// {
	// 	featureType: "administrative",
	// 	elementType: "geometry.stroke",
	// 	stylers: [
	// 		{
	// 			color: "#000000",
	// 		},
	// 		{
	// 			lightness: 17,
	// 		},
	// 		{
	// 			weight: 1.2,
	// 		},
	// 	],
	// },
	// {
	// 	featureType: "administrative.locality",
	// 	elementType: "labels",
	// 	stylers: [
	// 		{
	// 			visibility: "simplified",
	// 		},
	// 		{
	// 			color: "#bec4c8",
	// 		},
	// 	],
	// },
	{
		featureType: "administrative.neighborhood",
		elementType: "labels",
		stylers: [
			{
				visibility: "simplified",
			},
		],
	},
	{
		featureType: "administrative.neighborhood",
		elementType: "labels.text.fill",
		stylers: [
			{
				lightness: "17",
			},
		],
	},
	{
		featureType: "administrative.land_parcel",
		elementType: "labels",
		stylers: [
			{
				visibility: "off",
			},
		],
	},
	// {
	// 	featureType: "landscape",
	// 	elementType: "geometry",
	// 	stylers: [
	// 		{
	// 			color: "#000000",
	// 		},
	// 		{
	// 			lightness: 20,
	// 		},
	// 	],
	// },
	{
		featureType: "landscape",
		elementType: "labels",
		stylers: [
			{
				visibility: "on",
			},
		],
	},
	{
		featureType: "landscape.man_made",
		elementType: "labels",
		stylers: [
			{
				visibility: "off",
			},
		],
	},
	{
		featureType: "landscape.man_made",
		elementType: "labels.text",
		stylers: [
			{
				visibility: "off",
			},
		],
	},
	{
		featureType: "landscape.natural",
		elementType: "labels",
		stylers: [
			{
				visibility: "on",
			},
		],
	},
	// {
	// 	featureType: "poi",
	// 	elementType: "geometry",
	// 	stylers: [
	// 		{
	// 			color: "#000000",
	// 		},
	// 		{
	// 			lightness: 21,
	// 		},
	// 	],
	// },
	{
		featureType: "poi",
		elementType: "labels",
		stylers: [
			{
				visibility: "off",
			},
		],
	},
	{
		featureType: "road",
		elementType: "labels",
		stylers: [
			{
				visibility: "on",
			},
		],
	},
	// {
	// 	featureType: "road.highway",
	// 	elementType: "geometry",
	// 	stylers: [
	// 		{
	// 			visibility: "on",
	// 		},
	// 		{
	// 			color: "#2c97de",
	// 		},
	// 	],
	// },
	{
		featureType: "road.highway",
		elementType: "geometry.fill",
		stylers: [
			{
				lightness: 17,
			},
		],
	},
	// {
	// 	featureType: "road.highway",
	// 	elementType: "geometry.stroke",
	// 	stylers: [
	// 		{
	// 			color: "#000000",
	// 		},
	// 		{
	// 			lightness: 29,
	// 		},
	// 		{
	// 			weight: 0.2,
	// 		},
	// 	],
	// },
	{
		featureType: "road.highway",
		elementType: "labels",
		stylers: [
			{
				invert_lightness: true,
			},
			{
				visibility: "off",
			},
		],
	},
	// {
	// 	featureType: "road.highway.controlled_access",
	// 	elementType: "geometry.fill",
	// 	stylers: [
	// 		{
	// 			color: "#3b3b3b",
	// 		},
	// 	],
	// },
	// {
	// 	featureType: "road.arterial",
	// 	elementType: "geometry",
	// 	stylers: [
	// 		{
	// 			color: "#000000",
	// 		},
	// 		{
	// 			lightness: 18,
	// 		},
	// 	],
	// },
	// {
	// 	featureType: "road.arterial",
	// 	elementType: "geometry.fill",
	// 	stylers: [
	// 		{
	// 			color: "#2c97de",
	// 		},
	// 		{
	// 			lightness: "39",
	// 		},
	// 		{
	// 			gamma: "0.43",
	// 		},
	// 		{
	// 			saturation: "-47",
	// 		},
	// 	],
	// },
	{
		featureType: "road.arterial",
		elementType: "labels",
		stylers: [
			{
				visibility: "off",
			},
		],
	},
	// {
	// 	featureType: "road.local",
	// 	elementType: "geometry",
	// 	stylers: [
	// 		{
	// 			color: "#000000",
	// 		},
	// 		{
	// 			lightness: 16,
	// 		},
	// 	],
	// },
	// {
	// 	featureType: "road.local",
	// 	elementType: "geometry.stroke",
	// 	stylers: [
	// 		{
	// 			color: "#555555",
	// 		},
	// 	],
	// },
	{
		featureType: "road.local",
		elementType: "labels",
		stylers: [
			{
				visibility: "on",
			},
		],
	},
	// {
	// 	featureType: "transit",
	// 	elementType: "geometry",
	// 	stylers: [
	// 		{
	// 			color: "#000000",
	// 		},
	// 		{
	// 			lightness: 19,
	// 		},
	// 	],
	// },
	// {
	// 	featureType: "water",
	// 	elementType: "geometry",
	// 	stylers: [
	// 		{
	// 			color: "#000000",
	// 		},
	// 		{
	// 			lightness: 17,
	// 		},
	// 	],
	// },
];

export default styles;


/*
const streets = '#0E3163'
const plants = '#05143D'
const road = '"3A79DC'
const red = "#E54D3D"

const styles = [
	{
		featureType: "all",
		elementType: "labels.text",
		stylers: [
			{
				visibility: "off"	
			}
		]
	},
	{
		featureType: "all",
		elementType: "labels.text.fill",
		stylers: [
			{
				visibility: 'off'
			},
			// {
			// 	saturation: 36,
			// },
			// {
			// 	color: red,
			// },
			// {
			// 	lightness: 40,
			// },
		],
	},
	{
		featureType: "all",
		elementType: "labels.text.stroke",
		stylers: [
			{
				visibility: "off",
			},
			{
				color: "#000000",
			},
			{
				lightness: 16,
			},
		],
	},
	{
		featureType: "all",
		elementType: "labels.icon",
		stylers: [
			{
				visibility: "off",
			},
		],
	},
	{
		featureType: "administrative",
		elementType: "geometry.fill",
		stylers: [
			{
				color: plants,
			},
			{
				// lightness: 20,
			},
		],
	},
	{
		featureType: "administrative",
		elementType: "geometry.stroke",
		stylers: [
			{
				color: "#000000",
			},
			// {
			// 	lightness: 17,
			// },
			// {
			// 	weight: 1.2,
			// },
		],
	},
	{
		featureType: "administrative.locality",
		elementType: "labels",
		stylers: [
			{
				visibility: "simplified",
			},
			{
				color: "#bec4c8",
			},
		],
	},
	{
		featureType: "administrative.neighborhood",
		elementType: "labels",
		stylers: [
			{
				visibility: "simplified",
			},
		],
	},
	{
		featureType: "administrative.neighborhood",
		elementType: "labels.text.fill",
		stylers: [
			{
				lightness: "17",
			},
		],
	},
	{
		featureType: "administrative.land_parcel",
		elementType: "labels",
		stylers: [
			{
				visibility: "off",
			},
		],
	},
	{
		featureType: "landscape",
		elementType: "geometry",
		stylers: [
			{
				color: plants,
			},
			{
				// lightness: 20,
			},
		],
	},
	{
		featureType: "landscape",
		elementType: "labels",
		stylers: [
			{
				visibility: "on",
			},
		],
	},
	{
		featureType: "landscape.man_made",
		elementType: "labels",
		stylers: [
			{
				visibility: "off",
			},
		],
	},
	{
		featureType: "landscape.man_made",
		elementType: "labels.text",
		stylers: [
			{
				visibility: "off",
			},
		],
	},
	{
		featureType: "landscape.natural",
		elementType: "labels",
		stylers: [
			{
				visibility: "on",
			},
		],
	},
	{
		featureType: "poi",
		elementType: "geometry",
		stylers: [
			{
				color: plants,
			},
			{
				// lightness: 21,
			},
		],
	},
	{
		featureType: "poi",
		elementType: "labels",
		stylers: [
			{
				visibility: "off",
			},
		],
	},
	{
		featureType: "road",
		elementType: "labels",
		stylers: [
			{
				visibility: "on",
			},
		],
	},
	{
		featureType: "road.highway",
		elementType: "geometry",
		stylers: [
			{
				visibility: "on",
			},
			{
				color: streets,
			},
		],
	},
	{
		featureType: "road.highway",
		elementType: "geometry.fill",
		stylers: [
			{
				lightness: 17,
			},
		],
	},
	{
		featureType: "road.highway",
		elementType: "geometry.stroke",
		stylers: [
			{
				color: streets,
			},
			{
				// lightness: 29,
			},
			{
				weight: 0.2,
			},
		],
	},
	{
		featureType: "road.highway",
		elementType: "labels",
		stylers: [
			{
				invert_lightness: true,
			},
			{
				visibility: "off",
			},
		],
	},
	{
		featureType: "road.highway.controlled_access",
		elementType: "geometry.fill",
		stylers: [
			{
				color: streets,
			},
		],
	},
	{
		featureType: "road.arterial",
		elementType: "geometry",
		stylers: [
			{
				color: streets,
			},
			{
				// lightness: 18,
			},
		],
	},
	{
		featureType: "road.arterial",
		elementType: "geometry.fill",
		stylers: [
			{
				color: streets,
			},
			// {
			// 	lightness: "39",
			// },
			// {
			// 	gamma: "0.43",
			// },
			// {
			// 	saturation: "-47",
			// },
		],
	},
	{
		featureType: "road.arterial",
		elementType: "labels",
		stylers: [
			{
				visibility: "off",
			},
		],
	},
	{
		featureType: "road.local",
		elementType: "geometry",
		stylers: [
			{
				color: streets,
			},
			{
				// lightness: 16,
			},
		],
	},
	{
		featureType: "road.local",
		elementType: "geometry.stroke",
		stylers: [
			{
				color: streets,
			},
		],
	},
	{
		featureType: "road.local",
		elementType: "labels",
		stylers: [
			{
				visibility: "on",
			},
		],
	},
	{
		featureType: "transit",
		elementType: "geometry",
		stylers: [
			{
				color: "#000000",
			},
			{
				lightness: 19,
			},
		],
	},
	{
		featureType: "water",
		elementType: "geometry",
		stylers: [
			{
				color: "#000000",
			},
			{
				lightness: 17,
			},
		],
	},
];

export default styles;



*/