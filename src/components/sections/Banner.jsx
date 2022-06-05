export const Banner = () => {
	return (
		<div>
			<div style={{ height: 700 }}>
				<img
					className="w-full h-full object-cover object-left-top md:object-top"
					src={require("../../assets/images/banner-2-main.png").default}
					alt=""
				/>
			</div>
		</div>
	);
};
