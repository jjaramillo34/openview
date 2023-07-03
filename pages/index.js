import React from 'react';
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import Navbar from "../components/_App/Navbar";
import Banner from "../components/HomeOne/Banner";
import CategoryTwo from "../components/Common/CategoryTwo";
import ListingArea from "../components/Common/ListingArea";
import ListingAreaOne from "../components/Common/ListingAreaOne";
import ListingAreaTwo from "../components/Common/ListingAreaTwo";
import DestinationsOne from "../components/Common/DestinationsOne";
import Feedback from "../components/Common/Feedback";
import EventsArea from "../components/HomeOne/EventsArea";
import HowItWorks from "../components/Common/HowItWorks";
import Blog from "../components/HomeOne/Blog";
import AppDownload from "../components/Common/AppDownload";
import Footer from "../components/_App/Footer";
import Footer1 from "../components/_App/Footer1";

// new components importas
import { motion } from "framer-motion";
import Video from "../components/HomeOne/Video";
import SpotsAreaOne from "../components/Common/SpotsAreaOne";

const Index = ({ user, listings, spots }) => {
	console.log(listings);
	console.log(spots);
	return (
		<>
			<Navbar 
				userRole={user} 
			/> 
			{/* here was the Banner testing new components */}
			{/* <Banner /> */}
			<Video />

			<CategoryTwo 
				titleOne={true} 
			/>

			{listings && (
				<ListingAreaTwo
					bgColor="bg-f9f9f9"
					titleOne={true}
					listings={listings}
				/>
			)}
			
			{listings && (
				<ListingArea
					bgColor="bg-f9f9f9"
					titleOne={true}
					listings={listings}	
				/>
			)}

			{spots && (
				<SpotsAreaOne
					bgColor="bg-f9f9f9"
					titleOne={true}
					spots={spots}
				/>
			)}

			console.log(spots);

			<DestinationsOne 
				titleOne={true} 
				paddingBottom70="pb-70" 
			/>

			<Feedback 
				title={true} 
				bgImage="bg-image" 
			/>

			<EventsArea />

			<HowItWorks 
				bgColor="bg-f9f9f9" 
			/>

			<Blog />

			<AppDownload />

			{/*<Footer />*/}

			<Footer1 />
		</>
	);
};

let page = "1";
let keyword = "";

export async function getServerSideProps({ query }) {
	page = query.page ? query.page : "1";
	keyword = query.keyword;

	const payload = {
		params: {
			page,
			limit: 6,
			keyword,
		},
	};
	const url = `${baseUrl}/api/v1/spots`;
	const response = await axios.get(url, payload);

	return {
		props: {
			spots: response.data.spots,
			totalPages: response.data.totalPages,
		},
	};

}


export default Index;
