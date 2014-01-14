var iAmLazy = {

	label : 'Menu',
	children : [
		{
			label : "Link 1",
			href : "/link-1/",
			children : [
				{
					label : "Sublink 1",
					href : "/link-1/sublink-1/"
				},
				{
					label : "Sublink 2 with a really long name",
					href : "/link-1/sublink-2/",
					children : [
						{
							label : "Subsublink 1",
							href : "/link-1/sublink-1/subsublink-2",
							children : [
								{
									label : "Super deep link 1",
									href : "/link-1/sublink-1/subsublink-2/super-deep-link-1/"
								},
								{
									label : "Super deep link 2",
									href : "/link-1/sublink-1/subsublink-2/super-deep-link-2/",
									children : [
										{
											label : "Don't do this",
											href : "/link-1/sublink-1/subsublink-2/super-deep-link-1/dont-do-this/"
										},
										{
											label : "But you can if you want",
											href : "/link-1/sublink-1/subsublink-2/super-deep-link-2/but-you-can-if-you-want/"
										}
									]
								}
							]
						},
						{
							label : "Subsublink 2 with a really long name",
							href : "/link-1/sublink-1/subsublink-2"
						}
					]
				},
				{
					label : "Sublink 3",
					href : "/link-1/sublink-3/"
				},
				{
					label : "Sublink 4",
					href : "/link-1/sublink-4/"
				},
				{
					label : "Sublink 5",
					href : "/link-1/sublink-5/"
				},
				{
					label : "Sublink 6",
					href : "/link-1/sublink-6/"
				},
				{
					label : "Sublink 7",
					href : "/link-1/sublink-7/"
				},
				{
					label : "Sublink 8",
					href : "/link-1/sublink-8/"
				},
				{
					label : "Sublink 9",
					href : "/link-1/sublink-9/"
				},
				{
					label : "Sublink 10",
					href : "/link-1/sublink-10/"
				}
			]
		},
		{
			label : "Link 2",
			href : "/link-2/",
			children : [
				{
					label : "Sublink 1",
					href : "/link-2/sublink-1/"
				},
				{
					label : "Sublink 2",
					href : "/link-2/sublink-2/"
				},
				{
					label : "Sublink 3",
					href : "/link-2/sublink-3/"
				}
			]
		},
		{
			label : "Link 3",
			href : "/link-3/",
			children : [
				{
					label : "Sublink 1",
					href : "/link-3/sublink-1/"
				},
				{
					label : "Sublink 2",
					href : "/link-3/sublink-2/"
				},
				{
					label : "Sublink 3",
					href : "/link-3/sublink-3/"
				},
				{
					label : "Sublink 4",
					href : "/link-3/sublink-4/"
				},
				{
					label : "Sublink 5",
					href : "/link-3/sublink-5/"
				},
				{
					label : "Sublink 6",
					href : "/link-3/sublink-6/"
				}
			]
		},
		{
			label : "Link 4",
			href : "/link-4/"
		},
		{
			label : "Link 5",
			href : "/link-5/",
			children : [
				{
					label : "Sublink 1",
					href : "/link-5/sublink-1/"
				},
				{
					label : "Sublink 2",
					href : "/link-5/sublink-2/"
				},
				{
					label : "Sublink 3",
					href : "/link-5/sublink-3/"
				},
				{
					label : "Sublink 4",
					href : "/link-5/sublink-4/"
				}
			]
		},
		{
			label : "Link 6",
			href : "/link-6/"
		},
		{
			label : "Link 7",
			href : "/link-7/"
		},
		{
			label : "Link 8"
		},
		{
			label : "Link 9",
			href : "/link-9/",
			children : [
				{
					label : "Sublink 1",
					href : "/link-9/sublink-1/"
				},
				{
					label : "Sublink 2",
					href : "/link-9/sublink-2/"
				},
				{
					label : "Sublink 3",
					href : "/link-9/sublink-3/"
				},
				{
					label : "Sublink 4",
					href : "/link-9/sublink-4/"
				}
			]
		}
	]
};