import instaIcon from '../assets/icons/insta.svg'
import Xsocial from '../assets/icons/x-social.svg'
import TiktokIcon from '../assets/icons/tiktok.svg'
import youtubeIcon from '../assets/icons/youtube.svg'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='py-5 bg-black text-white/60 border-t border-white/20'>
        <div className="container">
        <div className="flex flex-col sm:flex-row gap-4 sm:justify-between">
            <div className="text-center">
            © 2024 Your Company, Inc. All rights reserved.
            </div>
            <ul className="flex justify-center gap-2.5">
                <li><Image src={Xsocial} alt=''/></li>
                <li><Image src={instaIcon} alt=''/></li>
                <li><Image src={TiktokIcon} alt=''/></li>
                <li><Image src={youtubeIcon} alt=''/></li>
            </ul>
        </div>
        </div>
    </footer>
  )
}

export default Footer