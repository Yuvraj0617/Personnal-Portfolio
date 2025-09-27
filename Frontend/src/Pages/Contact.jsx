import { useForm } from 'react-hook-form';
import ContactMsg from '../Components/Contact/ContactMsg';
import Axios from 'axios';
import { toast } from 'react-toastify';
import base_url from '../../utils/Backendcall';
import SocialMedia from '../Components/Contact/SocialMedia';
export default function Contact() {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await Axios.post(`${base_url}/api/contact`, data);
            console.log('Success:', response.data);
            toast.success('Message sent successfully!');
            reset();
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error('Failed to send message.');
        }
    };

    return (
        <>
            <div id='Contact' className='w-full mx-auto mt-20'>
                <div className='text-center mb-8 text-neutral-50'>
                    <h1 className='text-6xl font-bold'>Get In Touch</h1>
                    <p className='mt-2 text-2xl'>Let's work together and make something awesome</p>
                </div>

                <div className='flex md:flex-row flex-col items-center justify-between gap-6 '>
                    <div className='text-neutral-50 text-center md:text-left w-full md:w-1/2'>
                        <div className=' bg-gray-700 rounded-lg shadow-xl md:max-w-max m-6 p-6'>
                            <h1 className='text-4xl font-bold'>Contact Info</h1>
                            <ContactMsg />
                        </div>
                        <div className='bg-gray-700 flex rounded-lg shadow-xl max-w-max m-6 p-6 '>
                            <SocialMedia />
                        </div>
                    </div>
                    <div className='mt-4 md:mr-8 m-3 md:w-1/2  p-6 bg-gray-800 rounded-lg shadow-xl'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid grid-cols-1 gap-4 '>
                                <h1 className='text-4xl font-bold text-neutral-50'>Let's kick up together</h1>
                                <input
                                    type="text"
                                    className="bg-gray-700 border border-amber-300 p-3 rounded-md text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Your Name"
                                    {...register("name", { required: true })}
                                />
                                <input
                                    type="email"
                                    className="bg-gray-700 border border-amber-300 p-3 rounded-md text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Your Email"
                                    {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                                />
                                <input
                                    type="text"
                                    className="bg-gray-700 border border-amber-300 p-3 rounded-md text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Subject"
                                    {...register("subject", { required: true })}
                                />
                                <textarea
                                    className="bg-gray-700 border border-amber-300 p-3 rounded-md text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Your Message"
                                    {...register("message", { required: true })}
                                />
                            </div>
                            <div className='flex justify-center md:justify-start'>
                            <button
                                className="mt-4 bg-amber-500 text-gray-900 text-xl font-semibold p-3 rounded-md hover:bg-amber-600"
                                type="submit">Send  Message
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


