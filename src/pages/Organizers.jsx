import Fade from "react-reveal/Fade";
import { Container } from "../components/Container";
import { Helmet } from "react-helmet";
import { OrganizerCard } from "../components/OrganizerCard";
import { SpeakerCard } from "../components/SpeakerCard";
import { ORGANIZERS_DATA } from "../data/organizers";

export const Organizers = () => {
	return (
		<div>
			<Helmet>
				<title>DigiMark 2022 - Organizers</title>
			</Helmet>
			<Container className="py-24 space-y-12">
				<Fade top>
					<div className="space-y-5">
						<h1 className="text-6xl font-bold">Organizers.</h1>
						<p className="text-xl text-gray-500">
							lorem
						</p>
					</div>
				</Fade>

				<Fade>
					<div className="space-y-14">
						<div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
							{ORGANIZERS_DATA.map((organizer) => (
								<OrganizerCard
									key={organizer.name}
									className="w-full"
									name={organizer.name}
									avatar_url={organizer.avatar_url}
									event_role={organizer.event_role}
									professional_role={organizer.professional_role}
									institution={organizer.institution}
									social_media={organizer.social_media}
								/>
							))}
						</div>
					</div>
				</Fade>
			</Container>
		</div>
	);
};
