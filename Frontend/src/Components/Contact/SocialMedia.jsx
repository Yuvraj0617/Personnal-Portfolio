import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

export default function SocialMedia() {
    return (
        <div className="text-center md:text-start">
            <p className="text-white text-xl font-bold">Connect with me:</p>
            <div className="flex space-x-4 mt-2">
                <a href="https://www.facebook.com/yubraj.sapkota.783302" className="text-white">
                    <FaFacebook size={28} className="hover:text-blue-600" />
                </a>
                <a href="https://www.linkedin.com/in/yubraj-sapkota-a11288339/" className="text-white">
                    <FaLinkedin size={28} className="hover:text-blue-500" />
                </a>
                <a href="https://www.instagram.com/yuvraaj_sapkota/" className="text-white">
                    <FaInstagram size={28} className="hover:text-pink-400" />
                </a>
                <a href="https://github.com/Yuvraj0617" className="text-white">
                    <FaGithub size={28} className="hover:text-gray-400" />
                </a>
            </div>
        </div>
    )
}
