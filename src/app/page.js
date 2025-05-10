'use client';

import Link from 'next/link';
import Footer from '../components/layout/footer';
import Image from 'next/image';


export default function Home() {
    const teamMembers = [
        {
            id: 2,
            name: 'Dr. Neermal Latchoomun',
            role: 'Team Leader Green CEV',
            image: '/images/team/latchoomun.png',
            bio: 'HoD Genie Electromecanique et Automatismes Control Systems Engineering specialist',
            social: {
            },
        },
        {
            id: 1,
            name: 'Prof. Didier Aussel',
            role: '',
            image: '/images/team/aussel.png',
            bio: '',
            social: {
            },
        },
        
        {
            id: 3,
            name: 'Prof. David Rey',
            role: '',
            image: '/images/team/rey.png',
            bio: '',
            social: {
            },
        },
        {
            id: 4,
            name: 'Mr. D. Mawooa',
            role: '',
            image: '/images/team/mawooa.jpg',
            bio: '',
            social: {
            },
        },
        {
            id: 5,
            name: 'Dr. D. Sooben',
            role: '',
            image: '/images/team/sooben.png',
            bio: '',
            social: {
            },
        },
        {
            id: 6,
            name: 'Associate Professor Meead Saberi',
            role: '',
            image: '/images/team/saberi.png',
            bio: '',
            social: {
                
            },
        },
        {
            id: 7,
            name: 'Rajan Kaully',
            role: '',
            image: '/images/team/member3.png',
            bio: '',
            social: {
            },
        },
        {
            id: 8,
            name: 'Mr. Arvin Dhunnoo',
            role: 'Research Assistant',
            image: '/images/team/arvin.jpeg',
            bio: '',
            social: {
            },
        },
        {
            id: 9,
            name: 'Mr. Kritesh Seeruttun',
            role: 'Developer',
            image: '/images/team/kritesh.jpg',
            bio: 'Develop impactful digital solutions that drive performance and innovation.',
            social: {
                linkedin: 'https://mu.linkedin.com/in/kritesh-seeruttun-264440182'
            },
        },
    ];

    return (
        <div className="relative">
            {/* Hero section */}
            <div className="relative pt-14">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    


                    <div className="mx-auto mt-10 text-center sm:mt-12 lg:mt-14 max-w-2xl lg:max-w-none">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Green Charging of Electric Vehicles in Mauritius</h1>
                        <h4 className="text-xl font-semibold text-green-700 py-4"> Mission and Vision</h4>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            In an endeavor to help the Mauritian government achieve a reduction of greenhouse gas emissions by 40% in 2030 through a sustainable transport system, the Université des Mascareignes has embarked upon a very ambitious project which is the Smart and Sustainable Campus initiative in 2019. One of the main goals of the SSC project is to devise new methods for fostering the use of clean energies in all sectors of our economy. In this context, a team of 4 researchers at UdM, led by prof. Didier Aussel from Université de Perpignan, France, initiated the ‘Green Charging of Electric Vehicles’ project in collaboration with HSBC Ltd. and Business Mauritius.
                        </p>
                    </div>


                    <div className="mx-auto mt-10 sm:mt-12 lg:mt-14 max-w-2xl lg:max-w-none">
                        {/* Key Pillars */}
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
                            {/* Pillar 1 */}
                            <div className="flex flex-col">
                                <dt className="text-xl font-semibold text-green-700">Driving EV Adoption</dt>
                                <dd className="mt-4 text-base text-gray-600">
                                    The project aims to promote electric vehicle use in Mauritius by making charging stations more accessible and strategically
                                    distributed throughout the island. A traffic model tailored to local conditions has been developed to support this goal,
                                    alongside a nationwide survey of vehicle owners to gather valuable insights.
                                </dd>
                            </div>

                            {/* Pillar 2 */}
                            <div className="flex flex-col">
                                <dt className="text-xl font-semibold text-green-700">Empowering Clean Energy</dt>
                                <dd className="mt-4 text-base text-gray-600">
                                    A major focus is on optimizing solar energy for EV charging and facilitating the transition of public transport—including e-buses—
                                    to sustainable power sources. Ongoing research is assessing the feasibility of solar-based charging infrastructures.
                                </dd>
                            </div>

                            {/* Pillar 3 */}
                            <div className="flex flex-col">
                                <dt className="text-xl font-semibold text-green-700">Collaborative Impact</dt>
                                <dd className="mt-4 text-base text-gray-600">
                                    With funding from HSBC and support from partners like Business Mauritius, Leal Energie Ltd., the CEB,
                                    and the CNT, the three-year project has already made significant strides. A dedicated website has been developed,
                                    and outcomes have been shared through three workshops and one international webinar.
                                </dd>
                            </div>
                        </dl>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                                <p className="text-lg leading-7 text-gray-700 mb-12">
                                </p>
                            </div>
                    </div>


                    
                 
                    {/* Project Objectives */}                            
                     <section className="relative w-full h-full">
                    {/* Background image with opacity */}
                    <div
                        className="absolute inset-0"
                        style={{
                        backgroundImage: "url('../background/car layout.jpg')",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        opacity: 0.05, // Use a number, not a string
                        zIndex: 0
                        }}
                    ></div>

                    {/* Foreground content */}
                    <div className="py-4 px-6 max-w-5xl mx-auto" >
                        <h3 className="text-2xl md:text-3xl font-semibold text-green-700 mb-6 text-center">Project Objectives</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-disc list-inside text-lg">
                            <li>Promote the use of electric vehicles in Mauritius</li>
                            <li>Reduce Greenhouse Gas emissions</li>
                            <li>Boost clean energy use for charging</li>
                            <li>Enable large-scale solar EV charging</li>
                            <li>Optimize solar energy utilization</li>
                            <li>Deploy strategic island-wide charging stations</li>
                            <li>Transition public transport to electric mobility</li>
                            <li>Support green and sustainable tourism</li>
                        </ul>
                     </div>
                    </section>







                        
                    {/* Feature section */}
                    {/* <div className="mx-auto max-w-7xl sm:mt-24 text-gray-900 pb-16">
                        <div className="grid lg:max-w-5xl lg:w-full lg:grid-cols-3 lg:text-left mx-auto place-items-center gap-8 px-4 mb-16">
                            <div className="group rounded-lg border border-gray-200 px-6 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 text-center w-full max-w-sm">
                                <h2 className="mb-3 text-2xl font-semibold">
                                    Smart Booking <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">→</span>
                                </h2>
                                <p className="m-0 text-sm opacity-50 mx-auto">Book your charging slots with just a few clicks.</p>
                            </div>

                            <div className="group rounded-lg border border-gray-200 px-6 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 text-center w-full max-w-sm">
                                <h2 className="mb-3 text-2xl font-semibold">
                                    Compare Schemes <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">→</span>
                                </h2>
                                <p className="m-0 text-sm opacity-50 mx-auto">Compare different charging schemes and find the best fit.</p>
                            </div>

                            <div className="group rounded-lg border border-gray-200 px-6 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 text-center w-full max-w-sm">
                                <h2 className="mb-3 text-2xl font-semibold">
                                    Profile Management <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">→</span>
                                </h2>
                                <p className="m-0 text-sm opacity-50 mx-auto">Manage your profile and track your charging history.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

                            {/* Team Members */}
                            <section className="bg-gray-100 py-16" style={{
                                backgroundImage: "url('../background/blue_car.jpg')",
                                width: '100%',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                            }}>
                                <div className="container mx-auto px-4">
                                    <h2 className="text-4xl font-extrabold text-center text-white mb-12">
                                    Meet Our Team Members
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                    {teamMembers.map((member) => (
                                        <div
                                        key={member.id}
                                        className="bg-white rounded-2xl shadow-lg overflow-hidden text-center p-6 hover:shadow-2xl transition-shadow duration-300"
                                        >
                                        <div className="w-32 h-32 mx-auto relative mb-4">
                                            <Image
                                            src={member.image}
                                            alt={member.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-full"
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                        <p className="text-blue-700 font-medium mb-2">{member.role}</p>
                                        <p className="text-gray-600 text-sm">{member.bio}</p>
                                        <div className="mt-6 flex space-x-4">
                                                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                        </svg>
                                                    </a>
                                                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            </section>

            <Footer />
        </div>

        
    );
}
