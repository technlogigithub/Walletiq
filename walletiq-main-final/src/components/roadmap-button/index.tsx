import Button from '../button';
import Download from "../../images/icons/download-white.svg";

const RoadmapButton = () => {

    return (
        <div className="roadmap-button">
            <Button text="Download Whitepaper" icon={Download}  className="token-wallet-btn" />
        </div>


    );
};
export default RoadmapButton;
