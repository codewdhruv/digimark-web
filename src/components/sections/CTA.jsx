import { Container } from "../Container";

export const CTA = () => {
	return (
		<section className="py-24 bg-gray-100">
			<Container className="space-y-10 text-center">
				<div className="space-y-5">
					<h1 className="text-3xl text-gray-700 font-semibold">
						Keep in touch with{" "}
						<span className="text-blue-700">#DigiMark2022</span> for the
						latest announcements
					</h1>
					<p className="text-xl text-gray-500">
						Want us to host a webinar at your university to spread the word on DigiMark 2022?. Fill in the Webinar Request and @Team Cause will get back to you.
					</p>
				</div>
				<div>
					<a
						className="bg-blue-700 hover:bg-blue-800 transition-all px-8 py-3 rounded-md text-white"
						href="https://bit.ly/DigiMark-Request-A-Webinar"
						target="_blank"
						rel="noreferrer"
					>
						Request A Webinar
					</a>
				</div>
			</Container>
		</section>
	);
};
