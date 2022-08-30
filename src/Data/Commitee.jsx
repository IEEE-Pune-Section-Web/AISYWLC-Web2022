// For Images refer this https://stackoverflow.com/questions/15557392/how-do-i-display-images-from-google-drive-on-a-website

const CommiteeDetails = [
	{
		name: "Advisory Commitee",
		members: [
			{
				name: "Mr. Deepak Mathur",
				img: "https://drive.google.com/uc?export=view&id=1nMOnX2sfmxijR6fWrZj4MhXy2qTQrdrs",
				title: "",
			},
			{
				name: "Dr Rajashree Jain",
				img: "https://drive.google.com/uc?export=view&id=1Ycu0REqEkGOyyI5kOvr48Bo428IevOH-",
				title: "",
			},

			{
				name: "Prof. G.S. Mani",
				img: "https://drive.google.com/uc?export=view&id=13Slvau_Xpa_xP9sRNiMVWHeHXYssOOFi",
				title: "",
			},
			{
				name: "Dr. Rajesh Ingle",
				img: "https://drive.google.com/uc?export=view&id=1eOpJuIoNrh6h5o70DoYJT06YI8jTjZCP",
				title: "",
			},
			{
				name: "Prof. Prerna Gaur",
				img: "https://drive.google.com/uc?export=view&id=1YvW-yatdOGaVSgsllEqeyNiAV0O4wuIi",
				title: "",
			},
			{
				name: "Mr. Puneet Mishra",
				img: "https://drive.google.com/uc?export=view&id=1uaBhCFReYmX1W6ykEXZjxZkxN5dAFZbK",
				title: "",
			},
		],
	},
	{
		name: "General Chairs",
		members: [
			{
				name: "Dr Suresh Nair",
				img: "https://drive.google.com/uc?export=view&id=1R9FSn8TAku5seiG--lpx8N0WwiJuWAxJ",
				title: "",
			},
			{
				name: "Mr. Girish Khilari",
				img: "https://drive.google.com/uc?export=view&id=1Q0SLZ3RfSVLMpOL5O_hujlpuU_OhZlH-",
				title: "",
			},
		],
	},
	{
		name: "Track Chairs",
		tracks: [
			{
				name: "Student Activities Commitee",
				members: [
					{
						name: "Dr. Vijayalatha Reddy",
						img: "https://drive.google.com/uc?export=view&id=1l76AJMQCXyUBCeOgP-Q1M1KRiJdLHuBI",
					},
					{
						name: "Dr. Sunil Somani",
						img: "https://drive.google.com/uc?export=view&id=1TlPNCGJBTcPLGtAXqB2ghnK7Scs16k5q",
					},
				],
			},
			{
				name: "Young Professional",
				members: [
					{
						name: "Mr. Shahim Baker",
						img: "https://drive.google.com/uc?export=view&id=1n9cctcdetWBxgM-GCXtomv-z1ZquKCV1",
					},
					{
						name: "Mr. Dhiraj Chaurasia",
						img: "https://drive.google.com/uc?export=view&id=1suPXeJLk40oYSadQkc_-azx0bnNGJHgj",
					},
				],
			},
			{
				name: "Women in Engineering",
				members: [
					{
						name: "Dr. Mini Ulanat",
						img: "https://drive.google.com/uc?export=view&id=1suPXeJLk40oYSadQkc_-azx0bnNGJHgj",
					},
					{
						name: "Dr. Shailaja Patil",
						img: "https://drive.google.com/uc?export=view&id=1laJFhkjlkp5Dlg4Xux6DnGD97WbBNaua",
					},
				],
			},
			{
				name: "Life Member",
				members: [
					{
						name: "Dr. R.K. Asthana",
						img: "https://drive.google.com/uc?export=view&id=1EKVjsJFX3SG_hvInPZ5JAv9TiGusUh78",
					},
					{
						name: "Prof. Mandar Khujekar",
						img: "https://drive.google.com/uc?export=view&id=1MHifhrnlVpJlY8cSdvRky5MHgQDKw_2D",
					},
				],
			},
		],
	},
	{
		name: "IEEE Pune Section Committee",
		members: [
			{
				name: "Dr. Pradeep Mane",
				img: "https://drive.google.com/uc?export=view&id=1eFXaC7hTSBovHNZJsRERIWJnNVlxZyTh",
			},
			{
				name: "Dr. Neha Sharma",
				img: "https://drive.google.com/uc?export=view&id=1PDpZvRYE29OxAAHS6EhCjpovpIspK8yl",
			},
			{
				name: "Dr. Amar Buchade",
				img: "https://drive.google.com/uc?export=view&id=1iOPVEzPgpsHD4tA7zu3UUGT3xtBUc8Id",
			},
			{
				name: "Dr. Archana Thosar",
				img: "https://drive.google.com/uc?export=view&id=1SLFxRrSe0g61ahiq0IK5BSiAAu0SRuaa",
			},
			{
				name: "Dr. Virendra Shete",
				img: "https://drive.google.com/uc?export=view&id=1M9crXC1rXQj2yJlQchdtFFeDnhmUoo9N",
			},
		],
	},
	{
		name: "Event Management Leads",
		members: [
			{
				name: "Vaishnavi Nair",
				img: "https://drive.google.com/uc?export=view&id=1_Xi1k8LI0kCwxT2VZK3KsW3OXeFBzyJB",
			},
			{
				name: "Mohd. Athar Rangila",
				img: "https://drive.google.com/uc?export=view&id=1SU2XfQwNjI6oUYQSEHf0pjIx_G54iFzl",
			},
			{
				name: "Nupur Kulkarni",
				img: "https://drive.google.com/uc?export=view&id=1-OEMPWDDsXsm8Qgk4awGAL2XDd77FMWn",
			},
			{
				name: "Shalini Satapathy",
				img: "https://drive.google.com/uc?export=view&id=1vlFd5UCGH-kdjOa3svWdtJucSARmjSPv",
			},
			{
				name: "Gokul CM",
				img: "https://drive.google.com/uc?export=view&id=1wnnYirte900nPBdPN9SBBffGEwEYZOct",
			},
			{
				name: "Saraja Rambole",
				img: "https://drive.google.com/uc?export=view&id=1MPWQJQwl1qTQEoWcKaqspCqMX1JYHDIo",
			},
			{
				name: "Meghna Das",
				img: "https://drive.google.com/uc?export=view&id=1Z_yOS4jAHrfhFIV4jMzzlcXtESZas3t8",
			},
			{
				name: "Akalbir Singh Chadda",
				img: "https://drive.google.com/uc?export=view&id=1-T8cdmMG04XS4UHVivWqx8-F9qXLT6wP",
			},
			{
				name: "Shreya Ekande",
				img: "https://drive.google.com/uc?export=view&id=19JD-0YeCUePIqp4wcW-N2qeEiL6ZSgcj",
			},
			{
				name: "Abirami Chandramouli",
				img: "https://drive.google.com/uc?export=view&id=1dFWY-tzoSRB2Xmg5gELsOn8rIJjdjyBb",
			},
			{
				name: "Parv Gupta",
				img: "https://drive.google.com/uc?export=view&id=1YS4FDe1pt4pz7ea2q_RnCVwfvdEbKSGn",
			},
			{
				name: "Akarsh Ashok",
				img: "https://drive.google.com/uc?export=view&id=1iDrAI6iWIOXmIiNZh87ARH7b0wgFeraI",
			},
			{
				name: "Vaishnavi Gurav",
				img: "https://drive.google.com/uc?export=view&id=1RAxd-uZ_yuu1sCVkp7VsNXcQBnFCYmXK",
			},
			{
				name: "Yash Pisey",
				img: "https://drive.google.com/uc?export=view&id=1Rf-WqD2QxPUCQO_Ul2YjGMvVna-Q51JM",
			},
			{
				name: "Aniketh Shenoy",
				img: "https://drive.google.com/uc?export=view&id=1VhoN43paEOJ9ZO5VOPlScVkG4SEVn_le",
			},
			{
				name: "Shatakshi Vishwakarma",
				img: "https://drive.google.com/uc?export=view&id=1kZF3S4ZPYn_6At13B2ykfPSufeV9AxNU",
			},
			{
				name: "Joel John Kandathil",
				img: "https://drive.google.com/uc?export=view&id=1ZAvH_GMEfRAK6Zw5NOwj3RzUIIGjHDgw",
			},
			{
				name: "Krishna Varshney",
				img: "https://drive.google.com/uc?export=view&id=1mciX28QKZHxfpvvdCeGb5ezJBmrbrl28",
			},
			{
				name: "Shivraj Patil",
				img: "https://drive.google.com/uc?export=view&id=1YHXoGWBoDhcBHgimLe7ImL0KeZoZ_fLN",
			},
			{
				name: "Gaurav Nanak Duhlani",
				img: "https://drive.google.com/uc?export=view&id=1VrK1GpxPqlmdclUP1MFXAKd7KqrsmK09",
			},
			{
				name: "Nishita Pali",
				img: "https://drive.google.com/uc?export=view&id=1iM6MlP2mLZRlJFI7AtEbi5DNIeKtT88D",
			},
			
			{
				name: "Isha Dasharathe",
				img: "https://drive.google.com/uc?export=view&id=1vXUXVmpWNhwBAZFIXaCHeHJerSV5HZlq",
			},
			
			{
				name: "Priya Sirsat",
				img: "https://drive.google.com/uc?export=view&id=1huLz9BqKesqR01gqTZK8MOpbe8VW6DHb",
			},
			
			{
				name: "Mohammed Khalid",
				img: "https://drive.google.com/uc?export=view&id=1kTk06B-QR6utfcX3ch5gnJOXbYsOrs0J",
			},
		],
	},
];

export default CommiteeDetails;
