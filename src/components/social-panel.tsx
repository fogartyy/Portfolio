import SocialButton from "./social-button";

import { FaGithub, FaLink } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";

const SocialPanel = () =>{
    return(
        <div className="social-panel w-full">
            <SocialButton icon={<FaGithub/>}></SocialButton>
            <SocialButton icon={<FaLinkedin/>}></SocialButton>
        </div>
    );
};

export default SocialPanel;