import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Links=()=>{
    return(<>
    
        <div className="flex items-center justify-center gap-9 mt-9">
<div className="flex gap-9">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="text-blue-600 transition-transform h-14 hover:scale-110" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-pink-500 transition-transform h-14 hover:scale-110" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="text-blue-700 transition-transform h-14 hover:scale-110" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-blue-400 transition-transform h-14 hover:scale-110" />
      </a>
    </div>
    </div>
    </>)
}

export default Links;