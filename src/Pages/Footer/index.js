import FooterWrapper from "./FooterWrapper";
import {Link} from "react-router-dom";


const Footer = () => {
	return (
		<FooterWrapper>
			<div className="container">
				<div className="row w-100 text-center">
					<div className="col-4 active">
						<Link to={"/"}>Alarm</Link>
					</div>
					<div className="col-4">
						<Link to={"/"}>Stopwatch</Link>
					</div>
					<div className="col-4">
						<Link to={"/"}>Countdown</Link>
					</div>
				</div>
			</div>
		</FooterWrapper>
	)
}

export default Footer;