
import { IoIosMail } from "react-icons/io"
import { FaWhatsapp } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
export default function ContactMsg() {
    return (
        <>
            <div className='mt-4'>
                <div className='flex items-center gap-2'>
                    <div className='text-2xl md:w-12 md:h-12 h-auto w-auto flex items-center justify-center  bg-amber-500 rounded-full p-1'>
                        <IoIosMail className='text-2xl text-white md:w-auto md:h-auto' size={30} />
                    </div>
                    <div className='text-neutral-50'>
                        <p className='text-xl font-bold text-start'>Email me</p>
                        <span className='md:text-xl text-sm'>yubrajsapkota21@gmail.com</span>
                    </div>
                </div>

                <div className='flex items-center gap-2 mt-6'>
                    <div className='text-2xl md:w-12 md:h-12 h-auto w-auto flex items-center justify-center bg-amber-500 rounded-full p-1'>
                        <FaWhatsapp className='text-2xl text-white md:w-auto w- md:h-auto' size={30} />
                    </div>
                    <div className='text-neutral-50'>
                        <p className='text-xl font-bold'>Whatsapp</p>
                        <span className='md:text-xl text-sm'>+91 9876543210</span>
                    </div>
                </div>

                <div className='flex items-center gap-2 mt-6'>
                    <div className='text-2xl md:w-12 md:h-12 h-auto w-auto flex items-center justify-center bg-amber-500 rounded-full p-1'>
                        <FaLocationDot className='text-2xl text-white md:w-auto md:h-auto' size={30} />
                    </div>
                    <div className='text-neutral-50'>
                        <p className='text-xl font-bold'>Location</p>
                        <span className='text-xl'>Remote</span>
                    </div>
                </div>
            </div>
        </>
    )
}
