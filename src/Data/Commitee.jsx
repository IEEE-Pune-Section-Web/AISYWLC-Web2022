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
				name: "Dr Suresh Nair",
				img: "https://drive.google.com/uc?export=view&id=1R9FSn8TAku5seiG--lpx8N0WwiJuWAxJ",
				title: "Chair, IEEE India Council",
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
					"Board of Governor, Global IEEE AESS",
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
		name: "AISYWLC'22 Team",
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
				title: "Speaker Management, YP Track",
			},
			{
				name: "Meghna Das",
				img: "https://drive.google.com/uc?export=view&id=1Z_yOS4jAHrfhFIV4jMzzlcXtESZas3t8",
				title: "Speaker Management, WIE Track",
			},
			{
				name: "Akalbir Singh Chadda",
				img: "https://drive.google.com/uc?export=view&id=1-T8cdmMG04XS4UHVivWqx8-F9qXLT6wP",
				title: "Speaker Management, SAC Track",
			},
			{
				name: "Khushi Bansal",
				img: "https://drive.google.com/uc?export=view&id=1-T8cdmMG04XS4UHVivWqx8-F9qXLT6wP",
				title: "Speaker Management Team",
			},
			{
				name: "Aniketh Shenoy",
				img: "https://drive.google.com/uc?export=view&id=1VhoN43paEOJ9ZO5VOPlScVkG4SEVn_le",
				title: "Speaker Management, Sponsorship & Anchoring Team",
			},
			{
				name: "Shreya Ekande",
				img: "https://drive.google.com/uc?export=view&id=19JD-0YeCUePIqp4wcW-N2qeEiL6ZSgcj",
				title: "Marketing and Publicity Team",
			},
			{
				name: "Rashi Shrivastava",
				img: "https://drive.google.com/uc?export=view&id=1bJ3Hl1ng6exzJZWSfr-xwiYkLyUPYcF2",
				title: "Marketing and Publicity Team",
			},
			{
				name: "Abirami Chandramouli",
				img: "https://drive.google.com/uc?export=view&id=1dFWY-tzoSRB2Xmg5gELsOn8rIJjdjyBb",
				title: "Marketing and Publicity Team",
			},
			{
				name: "Shivam Grover",
				img: "https://drive.google.com/uc?export=view&id=1imPdTFgwvAIHujwfCIWUGbqcyCZqWJSR",
				title: "Marketing and Publicity Team",
			},
			{
				name: "Arushi Bhope",
				img: "https://drive.google.com/uc?export=view&id=1W3JMwvHlarIvjNH6ylmddHmWiTA82EnS",
				title: "Marketing and Publicity Team",
			},
			{
				name: "Ruchita Patil",
				img: "https://drive.google.com/uc?export=view&id=1jIAJd2IflLfP2mszqT4x9NUABhtjs8rT",
				title: "Marketing and Publicity Team",
			},
			{
				name: "Prasad Babar",
				img: "https://drive.google.com/uc?export=view&id=1RfQ_rzIaIpcQu10ViV64svfko0UyDktB",
				title: "Marketing and Publicity Team",
			},
			{
				name: "Parv Gupta",
				img: "https://drive.google.com/uc?export=view&id=1YS4FDe1pt4pz7ea2q_RnCVwfvdEbKSGn",
				title: "Website Team",
			},
			{
				name: "Akarsh Ashok",
				img: "https://drive.google.com/uc?export=view&id=1iDrAI6iWIOXmIiNZh87ARH7b0wgFeraI",
				title: "Website Team",
			},
			{
				name: "Yash Chavan",
				img: "https://drive.google.com/uc?export=view&id=1_Cbk0TThVGuR4bLM1ebWON-etGiLn3rh",
				title: "Website Team",
			},
			{
				name: "Gaurav Boob",
				img: "https://drive.google.com/uc?export=view&id=1AlghHxhR6PuISKP6BNdgX70Cer7IdYnp",
				title: "Website Team",
			},
			{
				name: "Mayuri Thorat",
				img: "https://drive.google.com/uc?export=view&id=1xSa37c_rsPjfAxrqNhcv_AncAfnRJKKg",
				title: "Website Team",
			},
			{
				name: "Harshwardhan Lokhande",
				img: "https://drive.google.com/uc?export=view&id=1yrvMxYuwFDwEnouK2Z8h9BsHHNNPwO1K",
				title: "Website Team",
			},
			{
				name: "Abishlal N S",
				img: "https://drive.google.com/uc?export=view&id=1L3sx5KRTLI29s-PQpe4BuW92Q5O3PNW4",
				title: "Website Team",
			},
			{
				name: "Divyansh Bansal",
				img: "https://drive.google.com/uc?export=view&id=1onxMMffAQHvhlr-InYqpoQRmzDzRXqWi",
				title: "Website Team",
			},
			{
				name: "Yash Pisey",
				img: "https://drive.google.com/uc?export=view&id=1Rf-WqD2QxPUCQO_Ul2YjGMvVna-Q51JM",
				title: "Sponsorship Team",
			},
			{
				name: "Mohit Raj Bhurat",
				img: "https://drive.google.com/uc?export=view&id=1-vvd8AfIh_qwVqvgfzKa8dtBE4JmCWpP",
				title: "Sponsorship Team",
			},
			{
				name: "Atul Jha",
				img: "https://drive.google.com/uc?export=view&id=1zDo3doLBjZd74Fe0FQhEwBcx2oMmVkgN",
				title: "Sponsorship Team",
			},
			{
				name: "Aarjav Vajpayee",
				img: "https://drive.google.com/uc?export=view&id=1RuPLXzxoHbg1H_RtxZH8H8Tw5DHbFwik",
				title: "Sponsorship Team",
			},
			{
				name: "Shatakshi Vishwakarma",
				img: "https://drive.google.com/uc?export=view&id=1kZF3S4ZPYn_6At13B2ykfPSufeV9AxNU",
				title: "Design Team",
			},
			{
				name: "Joel John Kandathil",
				img: "https://drive.google.com/uc?export=view&id=1ZAvH_GMEfRAK6Zw5NOwj3RzUIIGjHDgw",
				title: "Design Team",
			},
			{
				name: "Krishna Varshney",
				img: "https://drive.google.com/uc?export=view&id=1mciX28QKZHxfpvvdCeGb5ezJBmrbrl28",
				title: "Design Team",
			},
			{
				name: "Prajwal Wakhare",
				img: "https://drive.google.com/uc?export=view&id=1_mmlaqyEuFH1v-xvWuUM5pxKji0mzZSv",
				title: "Design Team",
			},
			{
				name: "Gopisetty Haritha",
				img: "https://drive.google.com/uc?export=view&id=1VTXJgn1ONU_HLeaCjWqqoXSoVF7WRUQZ",
				title: "Design Team",
			},
			{
				name: "Dev Jadav",
				img: "https://drive.google.com/uc?export=view&id=1S2qJ8PxeBH9pmzlZQHHJlDDaobntUJ-M",
				title: "Design Team",
			},
			{
				name: "Mohammed Aashik",
				img: "https://drive.google.com/uc?export=view&id=17Cc20Q2hGSyQwqDJtp6h-p5SBW1PUJrF",
				title: "Design Team",
			},
			{
				name: "Shivraj Patil",
				img: "https://drive.google.com/uc?export=view&id=1YHXoGWBoDhcBHgimLe7ImL0KeZoZ_fLN",
				title: "Technical Team",
			},
			/*{
				name: "K Thomas Mathew",
				img: "https://drive.google.com/uc?export=",
				title: "Technical Team",
			},*/
			{
				name: "Gaurav Duhlani",
				img: "https://drive.google.com/uc?export=view&id=1VrK1GpxPqlmdclUP1MFXAKd7KqrsmK09",
				title: "Logistics and Hospitality Team",
			},
			{
				name: "Gopal Tanpure",
				img: "https://drive.google.com/uc?export=view&id=1isVszcCX-Otg2eNFNX3SMQhuvPeN5gIn",
				title: "Logistics and Hospitality Team",
			},
			{
				name: "Iqra Khan",
				img: "https://drive.google.com/uc?export=1iqPrIWQNqBtuLia0Ouk6W0WdcXel-cq-",
				title: "Logistics and Hospitality Team",
			},
			{
				name: "Mohammed Khalid",
				img: "https://drive.google.com/uc?export=view&id=1kTk06B-QR6utfcX3ch5gnJOXbYsOrs0J",
				title: "Logistics and Hospitality & Anchoring Team",
			},
			{
				name: "Nishita Pali",
				img: "https://drive.google.com/uc?export=view&id=1iM6MlP2mLZRlJFI7AtEbi5DNIeKtT88D",
				title: "Registration Team",
			},
			{
				name: "Samruddhi Naukudkar",
				img: "https://drive.google.com/uc?export=view&id=1l3spkHevWNLSAIBW8418PXJgSvbZbBZa",
				title: "Registration Team",
			},
			{
				name: "Dikshita S Aladakatti",
				img: "https://drive.google.com/uc?export=view&id=1e4svaIWLkxz6Ue5cM9BciovprkWMfQ2M",
				title: "Registration Team",
			},
			/*
				name: "Shantosh Cumarasurier",
				img: "https://drive.google.com/uc?export=view&id=",
				title: "Registration Team",
			},*/
			{
				name: "Adil Shaikh",
				img: "https://drive.google.com/uc?export=view&id=1dep5vK1x-dkaw3NwcsNDO1vgEeXb5_Im",
				title: "Networking Team",
			},
			{
				name: "Ridham Chitre",
				img: "https://drive.google.com/uc?export=view&id=1PtCOJQDltBEIeuiiK4VUSkvqcJJyGQEv",
				title: "Networking Team",
			},
			{
				name: "Aparna Ganesh",
				img: "https://drive.google.com/uc?export=view&id=1uu5tQUVhP-JXvOOegwQgwYa10mQ9tK2m",
				title: "Networking Team",
			},
			{
				name: "Akhilesh Sobilla",
				img: "https://drive.google.com/uc?export=view&id=1XSKjQFY8cnuOb6aQ2YsX7scOcxqXYwGc",
				title: "Networking Team",
			},
			{
				name: "Priya Sirsat",
				img: "https://drive.google.com/uc?export=view&id=1huLz9BqKesqR01gqTZK8MOpbe8VW6DHb",
				title: "Anchoring Team",
			},
			{
				name: "Sohan Joshi",
				img: "https://drive.google.com/uc?export=view&id=1_FTnlJFm6kgT_gOh775ckfon8bEZRI3J",
				title: "Anchoring Team",
			},
			{
				name: "Samiksha Mulik",
				img: "https://drive.google.com/uc?export=view&id=1gD3dUNbUgIXGxU2HdxJmtsX-jJ-cO_y5",
				title: "Anchoring Team",
			},
			{
				name: "Vaishnavi Arora",
				img: "https://drive.google.com/uc?export=view&id=17ZJ5qQI0AsjnEXzLMVCGK199bS4tYD-b",
				title: "Anchoring Team & WIE Track",
			},
			{
				name: "Soumil Khanna",
				img: "https://drive.google.com/uc?export=view&id=1FAtaups6n_SWmK1o8miQ5RNOShObP2UC",
				title: "Anchoring Team",
			},
			{
				name: "Sheryl Thoppil",
				img: "https://drive.google.com/uc?export=view&id=1d8tuaFEOjQEk8c-aVz00Lr4mPlFRfTtK",
				title: "Anchoring Team & YP Track",
			},
			{
				name: "Vaishnavi Gurav",
				img: "https://drive.google.com/uc?export=view&id=1RAxd-uZ_yuu1sCVkp7VsNXcQBnFCYmXK",
				title: "Content Team",
			},
			{
				name: "Isha Dasharathe",
				img: "https://drive.google.com/uc?export=view&id=1vXUXVmpWNhwBAZFIXaCHeHJerSV5HZlq",
				title: "Content Team",
			},
			{
				name: "Srishti Tiwari",
				img: "https://drive.google.com/uc?export=view&id=1Z4DNJfF3UcORsCgkEQ3OegeTxV1yO4Ce",
				title: "Content Team",
			},
			{
				name: "Saurabh Kumar",
				img: "https://drive.google.com/uc?export=view&id=1pw3gijRXvtgDIDe-uH4WmHThtLTna-7K",
				title: "Content Team",
			},
			{
				name: "VN Mani Sha",
				img: "https://drive.google.com/uc?export=view&id=1z5jsqevjdfgJxKqWQhNmVeT9MEPO6IwI",
				title: "Content Team",
			},
			{
				name: "Manoj Kumar",
				img: "https://drive.google.com/uc?export=view&id=1x-16_hNxGmc_VPp9oFwlQnf_V7_-Cf35",
				title: "Content Team",
			},
			{
				name: "Gouri Badiger",
				img: "https://drive.google.com/uc?export=view&id=1Ue-ydsf1ySGK33RVP3Vl1zo2W43J_--X",
				title: "Content Team",
			},
			{
				name: "Vedant Dumbhare",
				img: "https://drive.google.com/uc?export=view&id=1ZE9qNdn8scUvRe_rYOxAfsAY-qrVMA5u",
				title: "Content Team",
			},
			{
				name: "Hemant Date",
				img: "https://drive.google.com/uc?export=view&id=1pU5PIZehQWZ4-0iq8fTqzeW6yj8Fx7MI",
				title: "Content Team",
			},
			{
				name: "Rutuja Jangle",
				img: "https://drive.google.com/uc?export=view&id=1-bS9tJ-rszKZavge5xgx9nZ-QQJx0uG0",
				title: "WIE Track",
			},
			{
				name: "Chaitanyasuma Jain",
				img: "https://drive.google.com/uc?export=view&id=1NSFzaU6Vv_KXxCpmObWXKh_c-7n0DNtX",
				title: "YP Track",
			},
			{
				name: "Devang Pingle",
				img: "https://drive.google.com/uc?export=view&id=1_XQe8CwOlNWRmzp43_dcJgQLCsHMZWss",
				title: "SAC Track, Networking Team",
			},
		],
	},
];

export default CommiteeDetails;
