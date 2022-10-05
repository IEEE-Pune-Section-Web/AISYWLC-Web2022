// For Images refer this https://stackoverflow.com/questions/15557392/how-do-i-display-images-from-google-drive-on-a-website
const SpeakerDetails = [
	{
		name: "Major Vandana Sharma",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1BW5IGmYQgXgesadF_Ch5vRXysTiHvxgo",
			alt: "Major Vandana Sharma",
		},
		details:
			"TEDx Speaker, International Woman Icon, Military Veteran, Adj Faculty IIM Kashipur",
		social: "https://www.linkedin.com/in/majorvansharma/",
	},
	{
		name: "Dr. Ramalatha Marimuthu",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1Ka44ngayxT05viSMvezq_VE0Pu1b73B_",
			alt: "Dr. Ramalatha Marimuthu",
		},
		details: "Director at iExplore Foundation for Sustainable Development",
		social: "https://www.linkedin.com/in/ramalatha-marimuthu-995b4a15/",
	},
	{
		name: "Lt.Col. Rohit Mishra",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1rOqrs7tdPC_e_AetbTBsvHZY2BL6v8x7",
			alt: "Lt.Col.Rohit Mishra",
		},
		details: "Founder Director-Mission Fight Back,Army Veteran,TEDx Speaker",
		social: "https://www.linkedin.com/in/rohit-mishra-6981aa108/",
	},
	{
		name: "CA Rachana Ranade",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1bqG_SP-zxLuEXxfyYu6s_2AFEcQw4zQl",
			alt: "CA Rachana Ranade",
		},
		details: "Finance Influencer with 3.7 Million+ Subscribers on YouTube",
		social: "https://www.linkedin.com/in/carachanaranade/",
	},
	{
		name: "Ms. Shalaka Verma",
		image: {
			src: "https://drive.google.com/uc?export=view&id=17F_Cmuwk_JwXr9MKg3CPQpNZtBzbEQ7P",
			alt: "Ms.Shalaka Verma",
		},
		details: "Director, Customer Success, Modern Work At Microsoft",
		social: "https://www.linkedin.com/in/shalakaverma/",
	},
	{
		name: "Ms. Nirali Bhatia",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1YqrqPdi6aUT6O_VpC93T643QEExEknYg",
			alt: "Ms.Nirali Bhatia",
		},
		details:
			"Director @ V4WEB Technologies, TEDx Speaker,Founder of CyberBAAP",
		social: "https://www.linkedin.com/in/nirali-bhatia/",
	},
	{
		name: "Dr. Mini Ulanat",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1b22XQn5leFvg-5T06rQ5f02uo8Im7NFf",
			alt: "Dr. Mini Ulanat",
		},
		details:
			"Chair, IEEE Kerala Section Vice- Chair, WIE, India Council - 2021-22",
		social: "https://www.linkedin.com/in/mini-ulanat/",
	},
	{
		name: "Prof. Kshitij Patukale",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1KV_cXSKlqWDzryTcKP3fmlWHdI14e7_f",
			alt: "Prof. Kshitij Patukale",
		},
		details:
			"Founder-Director, Bhishma School of Indic Studies, Pune",
		social: "https://www.linkedin.com",
	},
	{
		name: "Mr. Dinanath Kholkar",
		image: {
			src: "https://drive.google.com/uc?export=view&id=16yJ88RmVPKXzwrzmlmMl6aEFpNGVS9su",
			alt: "Mr. Dinanath Kholkar",
		},
		details:
			"Senior Vice President and Global Head of Partner Ecosystems & Alliances at TCS",
		social: "https://www.linkedin.com/in/dinanathkholkar/",
	},
	{
		name: "Ms. Ishika Nirula",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1Xw9bR92rbRva4FaVsMDSkhozJ9c9v03h",
			alt: "Ms. Ishika Nirula",
		},
		details:
			"Founder & CEO of Women In Business Network Organization",
		social: "https://www.linkedin.com/in/ishika-nirula-546b34191/",
	},
	{
		name: "Dr. Ravindra Dey",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1ImcvSez-j6W7PBMETINm1e0rGiq4646d",
			alt: "Dr. Ravindra Dey",
		},
		details:
			"Professor (Head of OB and HR) at Xavier Institute of Management and Research, Mumbai",
		social: "https://www.linkedin.com/in/dr-ravindra-dey-4702625/",
	},
	{
		name: "Mr. Suraj Chaurasiya",
		image: {
			src: "https://drive.google.com/uc?export=view&id=16cG7_wfv0xVWB6exk2bXgKlni0dKMn9B",
			alt: "Mr. Suraj Chaurasiya",
		},
		details:
			"SCM at Bayer AG, Ex. Co-founder EcoBugy (TU Berlin Alumni)",
		social: "https://www.linkedin.com/in/suraj-mani-chaurasiya-2056a51a/",
	},
	{
		name: "Mr. Shahim Baker",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1qVPiA9qoFeYUr01H9YKtYbhxvfhzAR2O",
			alt: "Mr. Shahim Baker",
		},
		details:
			"CEO at Baker & Grey, Vice Chair(YP), IEEE India Council",
		social: "https://www.linkedin.com/in/shahimbaker/",
	},
	{
		name: "Dr. Dasmit Singh",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1DLjfLfZDpuJWq5EnrLvSTsN4bcno4C1r",
			alt: "Dr. Dasmit Singh",
		},
		details:
			"Professor and Head, Dept. of Paediatric Surgery, B.J. Govt. Medical College and Sassoon Hospital",
		social: "https://www.linkedin.com",
	},
	{
		name: "Mr. Harbans L Bajaj",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1LG29Veng2N4vZgHQOayQe2MRaA4q9hAN",
			alt: "Mr. Harbans L Bajaj",
		},
		details:
			"Advisory Board of and Indian Energy Exchange & Joint Electricity Regulatory Commission",
		social: "https://www.linkedin.com",
	},
	{
		name: "Mr. R Muralidharan",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1OZ4psp2Rzvl4Z9ulIGtrEFsNpb2uLdQ0",
			alt: "Mr. R Muralidharan",
		},
		details:
			"Chair, LMAG, Bombay Section, CTO at Tata Advanced Systems, Mumbai, INDIA",
		social: "https://www.linkedin.com",
	},
	{
		name: "Mr. G.S. Mani",
		image: {
			src: "https://drive.google.com/uc?export=view&id=13Slvau_Xpa_xP9sRNiMVWHeHXYssOOFi",
			alt: "Mr. G.S. Mani",
		},
		details:
			"Former Chair, IEEE Pune Section",
		social: "https://www.linkedin.com",
	},
	{
		name: "Er. R.K. Asthana",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1rv_AiL3i_p2f87xv_17DgZU19vH_DnjM",
			alt: "Er. R.K. Asthana",
		},
		details:
			"Chair, IEEE Region 10 Life Members Committee",
		social: "https://www.linkedin.com",
	},
	{
		name: "Mr. Koruthu Varughese",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1m69Ek-S3a1Yy21ghSAhig6F9ycoNpT4X",
			alt: "Mr. Koruthu Varughese",
		},
		details:
			"Chair of IEEE LMAG Kerala, Immediate past Chair of IEEE EMBS Kerala Chapter",
		social: "https://www.linkedin.com",
	},
	{
		name: "Mr. Sundaresh Subramaniam",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1kIEsNjxf36IWu4CjEAdw8XKFOCBSf17K",
			alt: "Mr. Sundaresh Subramaniam",
		},
		details:
			"Chair, LMAG Madras Section",
		social: "https://www.linkedin.com",
	},
	{
		name: "Mr. Puneet Mishra",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1W0mgHQSHLavQKxKy5U_qhL8aMW2zatka",
			alt: "Mr. Puneet Mishra",
		},
		details:
			"Board of Governor, Global IEEE AESS",
		social: "https://www.linkedin.com/in/puneet-kumar-mishra-252aba5",
	},
	{
		name: "Mr. John Day",
		image: {
			src: "https://drive.google.com/uc?export=view&id=12-hd0-1Oz7wsKl99KS3qfbXyvwsqBCJI",
			alt: "Mr. John Day",
		},
		details:
			"Director, Member Products & Programs at IEEE",
		social: "https://www.linkedin.com/in/johnday/",
	},
	{
		name: "Ms. Ramya Narendra",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1EEObVsjRnqVO0W2i0U01TSewF2ictcwo",
			alt: "Ms. Ramya Narendra",
		},
		details:
			"Chair YP AG IEEE Hyderabad Section, Lead Ambassdor of IEEE Collabratec",
		social: "https://www.linkedin.com/in/narendra-ramya/",
	},
	{
		name: "Mr. Sai Prashanth Mallellu",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1I60XrJ6UZ1ZF37N7YG6iaAYAk2BLJDi3",
			alt: "Mr. Sai Prashanth Mallellu",
		},
		details:
			"YP Representative, IEEE Education Society BOG, IEEE Computer Society REM Scholar",
		social: "https://www.linkedin.com/in/sai-prashanth-mallellu-bab491196/",
	},
	{
		name: "Mr. Niranjan Kumar S",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1Il2xAJ8p7l351OCAuxiwQVsb-5bUO6aK",
			alt: "Mr. Niranjan Kumar S",
		},
		details:
			"Richard E Merwin Scholar, Chair - IEEE Computer Society SB Chapter, Chair - IEEE SAC",
		social: "https://www.linkedin.com/in/niranjan-kumar-s-a9205b183/",
	},
	{
		name: "Mr. Akarsh Ashok",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1tdjsUzfpZJoIi7haace3I_3PN2cwPqBq",
			alt: "Mr. Akarsh Ashok",
		},
		details:
			"Webmaster, IEEE PELS SAC, Webmaster, IEEE R10 IMC, Webmaster, IEEE India Council SCT",
		social: "https://www.linkedin.com/in/akarsh-ashok/",
	},
	{
		name: "Mr. Aniketh Shenoy",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1VhoN43paEOJ9ZO5VOPlScVkG4SEVn_le",
			alt: "Mr. Aniketh Shenoy",
		},
		details:
			"Webinar, Online Training and Industry Relations Team Coordinator, IEEE India Council",
		social: "https://www.linkedin.com/in/anikethshenoy/",
	},
	{
		name: "Ms. Khushi Desarda",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1JjgNRFG7aPfk8R1B22gtoXZgaviQtzqw",
			alt: "Ms. Khushi Desarda",
		},
		details:
			"Former TIAA Intern, Pursuing IT Engineering from PCCOE, Pune",
		social: "https://www.linkedin.com/in/khushi-desarda-3b14531aa/",
	},
	{
		name: "Ms. Priyanka Jayakumar",
		image: {
			src: "https://drive.google.com/uc?export=view&id=12HKQ4P0FdYSjYc83y1fiqsr19pNAXK7D",
			alt: "Ms. Priyanka Jayakumar",
		},
		details:
			"Section Student Representative, IEEE Madras Section",
		social: "https://www.linkedin.com/in/priyanka-jayakumar-8949441b0/",
	},
	{
		name: "Dr. Mohamed Rawidean Mohd Kassim",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1x7A6rqbmRHd78YttUYqxinRBcgmCmW1Q",
			alt: "Dr. Mohamed Rawidean Mohd Kassim",
		},
		details: "R10, Regional Coordinator IEEE Computer Society",
		social: "https://www.linkedin.com/in/mohamed-rawidean-mohd-kassim-977580200/",
	},
	{
		name: "Dr. Jayanta Roy",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1yvS9gZKSDSjqBFQlkohyMlE6ehcSG9rk",
			alt: "Dr. Jayanta Roy",
		},
		details: "Reader-F at NCRA-TIFR",
		social: "https://www.linkedin.com/",
	},
	{
		name: "Dr. Prerna Gaur",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1q4kk7Pi1IkQTDu2PL15vu5w_0umfUaXI",
			alt: "Dr. Prerna Gaur",
		},
		details: "Treasurer, IEEE India Council",
		social: "https://www.linkedin.com/",
	},
	{
		name: "Dr. Sri Niwas Singh",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1EcRICJhw2NHIRWWS1lKVIvrPqnFnO7YQ",
			alt: "Dr. Sri Niwas Singh",
		},
		details: "Immediate Past Chair, IEEE India Council",
		social: "https://www.linkedin.com/",
	},
	{
		name: "Dr. R. B. Jadeja",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1GbzVcgsEu50fBfNrXaOWCvb_gTqUN6Ta",
			alt: "Dr. R. B. Jadeja",
		},
		details: "Vice Chair – Branding & Member Benefits, IEEE India Council",
		social: "https://www.linkedin.com/",
	},
	{
		name: "Dr. B. Satyanarayana",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1CJ3WYphKQYEfL25KhwG94oEL5aTUPB4Y",
			alt: "Dr. B. Satyanarayana",
		},
		details: "Chair, IEEE Bombay Section",
		social: "https://www.linkedin.com/",
	},
	{
		name: "Dr. K. Porkumaran",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1Sb8CYUHtDPJkCMZjBEVOQ-WtSKw5eTX0",
			alt: "Dr. K. Porkumaran",
		},
		details: "Chair, IEEE Madras Section",
		social: "https://www.linkedin.com/",
	},
	{
		name: "Dr. Satish Singh",
		image: {
			src: "https://drive.google.com/uc?export=view&id=1uNKOJ8devlAy6nkElzvxzcobNhq-mx7a",
			alt: "Dr. Satish Singh",
		},
		details: "Chair, IEEE Uttar Pradesh Section",
		social: "https://www.linkedin.com/",
	},
];
export default SpeakerDetails;
