import { X } from 'lucide-react';

export default function HomeLab({onClose}) {
    return (
        <div className='fixed flex justify-center items-end inset-0 bg-black bg-opacity-[0.7] backdrop-blur-sm'>
            <div className='mt-10 flex flex-col gap-5 mb-4'>
                <button 
                    className='place-self-end text-white'
                    onClick={onClose}
                >
                    <X
                        size={30}
                    />
                </button>

                <div className='flex flex-col gap-5 items-center mx-4 bg-[#141413] text-white rounded-xl pb-[20px]'>
                    <img src='/HomeServer.png' className='w-[1500px] h-[450px] max-sm:h-[200px] object-cover rounded-xl'></img>

                    <h1 className='text-3xl font-extrabold'>
                        HomeLab
                    </h1>

                    <p className='text-1xl max-w-md text-center'>
                        A self host home server where I host services like 
                        file server, DNS server, Webapp, CI/CD pipeline, ...etc.
                        A playground for me to test and develop new applications.
                    </p>

                    <a href='https://homepage.fleeforezz.me' target='_blank' className='mt-7 underline'>
                        Head to dashboard ! 👉
                    </a>
                </div>
            </div>
        </div>
    )
};
