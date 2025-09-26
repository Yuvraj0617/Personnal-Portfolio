import Education from '../Components/About/Education'
export default function About() {
    return (
        <>
            <div id='Education' className='justify-center  p-2 sm:p-4 mb-8 sm:mb-12 lg:mb-16'>
                <div className='border-gray-300 w-full pt-2 sm:pt-4 rounded-3xl'>
                    <h4 className='font-bold text-amber-50  text-6xl  text-center'>Education</h4>
                    <div className='flex flex-col gap-4 sm:gap-6 mx-4 sm:mx-8 md:mx-12 lg:mx-20 px-4 sm:px-8 md:border-s border-gray-300 mt-8 '>
                       <Education />
                    </div>
                </div>
            </div>
        </>
    )
}
