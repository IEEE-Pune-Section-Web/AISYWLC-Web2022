// For Images refer this https://stackoverflow.com/questions/15557392/how-do-i-display-images-from-google-drive-on-a-website

const CommiteeDetails = [
	{
		name: "Advisory Commitee",
		members: [
			{
				name: "Mr. Deepak Mathur",
				img: "https://drive.google.com/uc?export=view&id=1nMOnX2sfmxijR6fWrZj4MhXy2qTQrdrs",
				title: "Director, IEEE Region 10",
			},
			{
				name: "Dr Rajashree Jain",
				img: "https://drive.google.com/uc?export=view&id=1Ycu0REqEkGOyyI5kOvr48Bo428IevOH-",
				title: "Secretary, IEEE India Council",
			},

			{
				name: "Prof. G.S. Mani",
				img: "https://drive.google.com/uc?export=view&id=13Slvau_Xpa_xP9sRNiMVWHeHXYssOOFi",
				title: "Former Chair, IEEE Pune Section",
			},
			{
				name: "Dr. Rajesh Ingle",
				img: "https://drive.google.com/uc?export=view&id=1eOpJuIoNrh6h5o70DoYJT06YI8jTjZCP",
				title: "Vice Chair, IEEE India Council",
			},
			{
				name: "Prof. Prerna Gaur",
				img: "https://drive.google.com/uc?export=view&id=1YvW-yatdOGaVSgsllEqeyNiAV0O4wuIi",
				title: "Treasurer, IEEE India Council",
			},
			{
				name: "Mr. Puneet Mishra",
				img: "https://drive.google.com/uc?export=view&id=1uaBhCFReYmX1W6ykEXZjxZkxN5dAFZbK",
				title:
					"Chair, IEEE APS and MTT-S Joint Chapter, IEEE Bangalore Section",
			},
		],
	},
	{
		name: "General Chairs",
		members: [
			{
				name: "Dr Suresh Nair",
				img: "https://drive.google.com/uc?export=view&id=1R9FSn8TAku5seiG--lpx8N0WwiJuWAxJ",
				title: "Chair, IEEE India Council",
			},
			{
				name: "Mr. Girish Khilari",
				img: "https://drive.google.com/uc?export=view&id=1Q0SLZ3RfSVLMpOL5O_hujlpuU_OhZlH-",
				title: "Chair, IEEE Pune Section",
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
						img: "https://drive.google.com/uc?export=view&id=1w-SHhxlc8mfiCPl_yq6vD3V3q_tUjMHq",
						title: "Student Activity Committee Chair, IEEE India Council",
					},
					{
						name: "Dr. Sunil Somani",
						img: "https://drive.google.com/uc?export=view&id=1f9spKeBdGEpa697xg9fW7XvLhDi79xbm",
						title: "Student Activity Committee Chair, IEEE Pune Section",
					},
				],
			},
			{
				name: "Young Professionals",
				members: [
					{
						name: "Mr. Shahim Baker",
						img: "https://drive.google.com/uc?export=view&id=1qVPiA9qoFeYUr01H9YKtYbhxvfhzAR2O",
						title: "Vice Chair, IEEE India Council Young Professionals",
					},
					{
						name: "Mr. Dhiraj Chaurasia",
						img: "https://drive.google.com/uc?export=view&id=1m6O6hXhGJCqG-Nwe1_KHe-SDk1L5a3Ru",
						title: "Chair, IEEE Pune Section Young Professionals",
					},
				],
			},
			{
				name: "Women in Engineering",
				members: [
					{
						name: "Dr. Mini Ulanat",
						img: "https://drive.google.com/uc?export=view&id=1b22XQn5leFvg-5T06rQ5f02uo8Im7NFf",
						title: "Vice Chair, WIE, IEEE India Council",
					},
					{
						name: "Dr. Shailaja Patil",
						img: "https://drive.google.com/uc?export=view&id=1laJFhkjlkp5Dlg4Xux6DnGD97WbBNaua",
						title: "Chair, WIE, IEEE Pune Section",
					},
				],
			},
			{
				name: "Life Members",
				members: [
					{
						name: "Er. R.K. Asthana",
						img: "https://drive.google.com/uc?export=view&id=1rv_AiL3i_p2f87xv_17DgZU19vH_DnjM",
						title: "Chair, IEEE Region 10 Life Members Committee",
					},
					{
						name: "Prof. Mandar Khujekar",
						img: "https://drive.google.com/uc?export=view&id=1MHifhrnlVpJlY8cSdvRky5MHgQDKw_2D",
						title: "chair, IEEE I&M Society Chapter, Pune Section",
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
				title: "Vice Chair, IEEE Pune Section",
			},
			{
				name: "Dr. Neha Sharma",
				img: "https://drive.google.com/uc?export=view&id=1PDpZvRYE29OxAAHS6EhCjpovpIspK8yl",
				title: "Secretary, IEEE Pune Section",
			},
			{
				name: "Dr. Amar Buchade",
				img: "https://drive.google.com/uc?export=view&id=1iOPVEzPgpsHD4tA7zu3UUGT3xtBUc8Id",
				title: "Treasurer, IEEE Pune Section",
			},
			{
				name: "Dr. Archana Thosar",
				img: "https://drive.google.com/uc?export=view&id=1SLFxRrSe0g61ahiq0IK5BSiAAu0SRuaa",
				title: "SB Councelor, COEP IEEE Student Branch",
			},
			{
				name: "Dr. Virendra Shete",
				img: "https://drive.google.com/uc?export=view&id=1M9crXC1rXQj2yJlQchdtFFeDnhmUoo9N",
				title: "Chair, IEEE Education Society Chapter, IEEE Pune Section",
			},
		],
	},
	{
		name: "Event Management Leads",
		members: [
			{
				name: "Vaishnavi Nair",
				img: "https://drive.google.com/uc?export=view&id=1_Xi1k8LI0kCwxT2VZK3KsW3OXeFBzyJB",
				title: "Core Committee Member",
			},
			{
				name: "Mohd. Athar Rangila",
				img: "https://drive.google.com/uc?export=view&id=1SU2XfQwNjI6oUYQSEHf0pjIx_G54iFzl",
				title: "Core Committee Member",
			},
			{
				name: "Nupur Kulkarni",
				img: "https://drive.google.com/uc?export=view&id=1-OEMPWDDsXsm8Qgk4awGAL2XDd77FMWn",
				title: "Core Committee Member",
			},
			{
				name: "Shalini Satapathy",
				img: "https://drive.google.com/uc?export=view&id=1vlFd5UCGH-kdjOa3svWdtJucSARmjSPv",
				title: "Core Committee Member",
			},
			{
				name: "Gokul CM",
				img: "https://drive.google.com/uc?export=view&id=1wnnYirte900nPBdPN9SBBffGEwEYZOct",
				title: "Core Committee Member",
			},
			{
				name: "Saraja Rambole",
				img: "https://drive.google.com/uc?export=view&id=1MPWQJQwl1qTQEoWcKaqspCqMX1JYHDIo",
				title: "YP, Speaker Management Team Lead",
			},
			{
				name: "Meghna Das",
				img: "https://drive.google.com/uc?export=view&id=1Z_yOS4jAHrfhFIV4jMzzlcXtESZas3t8",
				title: "WIE Track Lead",
			},
			{
				name: "Akalbir Singh Chadda",
				img: "https://drive.google.com/uc?export=view&id=1-T8cdmMG04XS4UHVivWqx8-F9qXLT6wP",
				title: "Student Track Lead",
			},
			{
				name: "Shreya Ekande",
				img: "https://drive.google.com/uc?export=view&id=19JD-0YeCUePIqp4wcW-N2qeEiL6ZSgcj",
				title: "Marketing and Publicity Team Lead",
			},
			{
				name: "Abirami Chandramouli",
				img: "https://drive.google.com/uc?export=view&id=1dFWY-tzoSRB2Xmg5gELsOn8rIJjdjyBb",
				title: "Marketing and Publicity Team Lead",
			},
			{
				name: "Parv Gupta",
				img: "https://drive.google.com/uc?export=view&id=1YS4FDe1pt4pz7ea2q_RnCVwfvdEbKSGn",
				title: "Website Team Lead",
			},
			{
				name: "Akarsh Ashok",
				img: "https://drive.google.com/uc?export=view&id=1iDrAI6iWIOXmIiNZh87ARH7b0wgFeraI",
				title: "Website Team Lead",
			},
			{
				name: "Vaishnavi Gurav",
				img: "https://drive.google.com/uc?export=view&id=1RAxd-uZ_yuu1sCVkp7VsNXcQBnFCYmXK",
				title: "Content Team Lead",
			},
			{
				name: "Isha Dasharathe",
				img: "https://drive.google.com/uc?export=view&id=1vXUXVmpWNhwBAZFIXaCHeHJerSV5HZlq",
				title: "Content Team Lead",
			},
			{
				name: "Yash Pisey",
				img: "https://drive.google.com/uc?export=view&id=1Rf-WqD2QxPUCQO_Ul2YjGMvVna-Q51JM",
				title: "Sponsorship Team Lead",
			},
			{
				name: "Aniketh Shenoy",
				img: "https://drive.google.com/uc?export=view&id=1VhoN43paEOJ9ZO5VOPlScVkG4SEVn_le",
				title: "Sponsorship Team Lead",
			},
			{
				name: "Shatakshi Vishwakarma",
				img: "https://drive.google.com/uc?export=view&id=1kZF3S4ZPYn_6At13B2ykfPSufeV9AxNU",
				title: "Design Team Lead",
			},
			{
				name: "Joel John Kandathil",
				img: "https://drive.google.com/uc?export=view&id=1ZAvH_GMEfRAK6Zw5NOwj3RzUIIGjHDgw",
				title: "Design Team Lead",
			},
			{
				name: "Krishna Varshney",
				img: "https://drive.google.com/uc?export=view&id=1mciX28QKZHxfpvvdCeGb5ezJBmrbrl28",
				title: "Videography Team Lead",
			},
			{
				name: "Shivraj Patil",
				img: "https://drive.google.com/uc?export=view&id=1YHXoGWBoDhcBHgimLe7ImL0KeZoZ_fLN",
				title: "Technical Team Lead",
			},
			{
				name: "Gaurav Nanak Duhlani",
				img: "https://drive.google.com/uc?export=view&id=1VrK1GpxPqlmdclUP1MFXAKd7KqrsmK09",
				title: "Traveling and Logistics Team Lead",
			},
			{
				name: "Mohammed Khalid",
				img: "https://drive.google.com/uc?export=view&id=1kTk06B-QR6utfcX3ch5gnJOXbYsOrs0J",
				title: "Traveling and Logistics Team Lead",
			},
			{
				name: "Nishita Pali",
				img: "https://drive.google.com/uc?export=view&id=1iM6MlP2mLZRlJFI7AtEbi5DNIeKtT88D",
				title: "Registration Team Lead",
			},
			{
				name: "Priya Sirsat",
				img: "https://drive.google.com/uc?export=view&id=1huLz9BqKesqR01gqTZK8MOpbe8VW6DHb",
				title: "Anchoring Team Lead",
			},
		],
	},
];

export default CommiteeDetails;
