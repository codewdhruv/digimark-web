import ReactPlayer from "react-player";
import { MdDateRange, MdLaunch, MdSchedule } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { Container } from "../Container";

export const About = () => {
	return (
		<div className="py-24">
			<Container className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-20">
				<div className="w-full space-y-10">
					<div className="space-y-3">
						<h1 className="text-4xl font-display font-semibold">
							DigiMark 2022 - Digital Marketing
Special 14-Day Mastercammp
						</h1>
						<p className="text-xl text-gray-500">
							"Learn how to set up winning campaigns using Facebook, 
Google, YouTube, SEO, Email, Retargeting, and Google Analytics"
						</p>
					</div>

					<p>
						The DigiMark Program is designed to transform you into a digital powerhouse with in-depth expertise in every branch of online marketing. The camp is structured around a proven learning path prescribed by senior industry leaders. <br/>

						Hands-on learning with live projects and simulation exams complements world-class learning content in SEO, PPC, social media, and web analytics. 
<br/><br/>
Learners have the ﬂexibility to attend as many of the 7 days straight live online instructor-led classes as necessary. Mentoring sessions by international keynote inﬂuencers and thought leaders round out the learning, adding a global dimension to the training.
					</p>

					<div className="space-y-3">
						<div className="flex items-center text-gray-500 space-x-3">
							<div className="w-8 flex justify-center">
								<MdDateRange size={24} />
							</div>
							<span className="text-base">20th June 2022 - 4th July 2022</span>
						</div>
						<div className="flex items-center text-gray-500 space-x-3">
							<div className="w-8 flex justify-center">
								<MdSchedule size={24} />
							</div>
							<span className="text-base">Monday, Wednesday, Friday 6.30 PM to 8.30 PM</span>
						</div>
						<div className="flex items-center text-gray-500 space-x-3">
							<div className="w-8 flex justify-center">
								<MdSchedule size={24} />
							</div>
							<span className="text-base">Tuesday, Thursday, Saturday 3.00 PM to 4.00 PM</span>
						</div>
						<div className="flex items-center text-gray-500 space-x-3">
							<div className="w-8 flex justify-center">
								<FaYoutube size={24} />
							</div>
							<span className="text-base">Microsoft Teams</span>
						</div>
					</div>
					<div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6">
						<a
							className="w-full md:w-auto bg-blue-700 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm text-white space-x-3 shadow-md transition-all hover:bg-blue-800 hover:px-8"
							href="https://gdg.community.dev/events/details/google-gdg-jakarta-presents-gdg-jakarta-devfest-2021/"
							target="_blank"
							rel="noreferrer"
						>
							<span className="tracking-wider">Register</span>
							<span>
								<MdLaunch size={16} />
							</span>
						</a>
						<a
							className="w-full md:w-auto border-blue-700 border inline-flex items-center justify-center rounded-full px-6 py-3 text-sm text-blue-700 space-x-3 transition-all hover:bg-gray-50 hover:px-8"
							href="https://gdg.community.dev/devfest/"
							target="_blank"
							rel="noreferrer"
						>
							<span className="tracking-wider">Download Brochure</span>
							<span>
								<MdLaunch size={16} />
							</span>
						</a>
					</div>
				</div>
				<div className="w-full">
					<div className="rounded-md overflow-hidden">
						<ReactPlayer
							width="100%"
							url="https://youtu.be/ugP5--8A1qI"
							controls
						/>
					</div>
				</div>
			</Container>
		</div>
	);
};
