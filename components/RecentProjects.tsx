import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/Pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
    return (
        <div className='py-20' id="projects">
            <h1 className='heading'>
            مجموعة مختارة من{' '}
            <span className='text-purple'> أحدث المشاريع </span>
            </h1>

            <div className='flex w-full flex-wrap items-between justify-between p-4 gap-x-24 gap-y-8 mt-10'>
                {projects.map(({id,title,des,img,iconLists,link})=>(
                    <div className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-full' key={id}>
                        <PinContainer title={link} href={link}>
                            <div className='relative flex items-center justify-center sm:w-96 lg:w-full overflow-hidden sm:h-[40vh] h-[23vh]  mb-10'>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    <img className='w-full' src='./bg.png' alt='bg-img' />
                                </div>
                                <img src={img} alt={title} className='z-10 absolute bottom-0' />
                            </div>
                            <h1 className='font-bold lg:text-xl md:text-xl text-base line-clamp-1'> {title}</h1>
                            <p className='lg:text-sm pt-3 lg:font-normal font-light text-sm line-clamp-2'> {des} </p>
                            <div className='gap-5 flex flex-wrap items-center justify-between mt-7 mb-3'>
                                <div className='flex items-center'>
                                    {iconLists.map((icon,index)=>(
                                        <div  className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' key={icon} style={{transform : `translateX(-${5 * index * 2}px)`}}>
                                            <img src={icon} alt={icon} className='p-2' />
                                        </div>
                                    ))}
                                </div>

                                <div className='flex justify-center items-center'>
                                    <p className='flex lg:text-sm md:text-xs text-sm text-purple'>
                                    تصفح الموقع مباشرة
                                    </p>
                                    <FaLocationArrow className='ms-3' color='#CBACF9' />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects
