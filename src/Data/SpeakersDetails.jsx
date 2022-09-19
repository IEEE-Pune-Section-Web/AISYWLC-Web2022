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
		name: "Lt.Col.Rohit Mishra",
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
		name: "Ms.Shalaka Verma",
		image: {
			src: "https://drive.google.com/uc?export=view&id=17F_Cmuwk_JwXr9MKg3CPQpNZtBzbEQ7P",
			alt: "Ms.Shalaka Verma",
		},
		details: "Director, Customer Success, Modern Work At Microsoft",
		social: "https://www.linkedin.com/in/shalakaverma/",
	},
	{
		name: "Ms.Nirali Bhatia",
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
	
];

export default SpeakerDetails;
