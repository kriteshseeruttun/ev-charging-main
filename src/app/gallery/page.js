'use client';

import Image from 'next/image';
import Footer from '../../components/layout/footer';
export default function Gallery() {
    // Sample gallery items - replace with your actual images
    const galleryItems = [
        {
            id: 1,
            title: 'Charging Station 1',
            description: 'Modern EV charging station with multiple ports',
            imageUrl: '/images/car-1.jpg',
        },
        {
            id: 2,
            title: 'Charging Station 2',
            description: 'Solar-powered charging station',
            imageUrl: '/images/car-2.jpg',
        },
        {
            id: 3,
            title: 'Charging Station 3',
            description: 'Fast charging station for electric vehicles',
            imageUrl: '/images/car-3.jpg',
        },
    ];

    const images = [
        { src :'/gallery/banner.jpg', alt: 'Image 2' },
        { src :'/gallery/entry_1.jpg', alt: 'Image 3' },
        { src :'/gallery/entry_2.jpg', alt: 'Image 4' },
        { src :'/gallery/dissemination.gif', alt: 'Image 5' },
        { src :'/gallery/research_paper.png', alt: 'Image 6' },
        { src :'/gallery/article_1.jpg', alt: 'Image 7' },
        { src :'/gallery/article_2.jpg', alt: 'Image 8' },
        { src :'/gallery/article_3.jpg', alt: 'Image 9' },
        { src :'/gallery/article_4.jpg', alt: 'Image 10' },
        { src :'/gallery/article_5.jpg', alt: 'Image 11' },
      ];

    const images2 = [
        { src :'/gallery/banner.jpg', width:400, height: 600, alt: 'Image 2' },
        { src :'/gallery/entry_1.jpg', width:600, height: 600, alt: 'Image 3' },
        { src :'/gallery/entry_2.jpg', width:800, height: 600, alt: 'Image 4' },
        { src :'/gallery/dissemination.gif', width:400, height: 600, alt: 'Image 5' },
        { src :'/gallery/research_paper.png', width:400, height: 600, alt: 'Image 6' },
        { src :'/gallery/article_1.jpg', width:800, height: 800, alt: 'Image 7' },
        { src :'/gallery/article_2.jpg', width:800, height: 600, alt: 'Image 8' },
        { src :'/gallery/article_3.jpg', width:400, height: 600, alt: 'Image 9' },
        { src :'/gallery/article_4.jpg', width:800, height: 600, alt: 'Image 10' },
        { src :'/gallery/article_5.jpg', width:400, height: 600, alt: 'Image 11' },
      ];

    return (
        <div className="relative">
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-blue-600">Gallery</h2>
                    {/* <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Charging Stations</p> */}
                    <p className="mt-6 text-lg leading-8 text-gray-600">Explore gallery to find out about our events, articles...</p>
                </div>

                {/* <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {galleryItems.map(item => (
                        <article key={item.id} className="flex flex-col items-start">
                            <div className="relative w-full">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    width={800}
                                    height={600}
                                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                    priority={item.id === 1}
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">{item.title}</h3>
                                </div>
                                <p className="mt-5 text-sm leading-6 text-gray-600">{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div> */}

                {/* <div className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {images.map((img, idx) => (
                        <div key={idx} className="relative w-full aspect-square overflow-hidden rounded-lg shadow">
                            <Image
                            src={img.src}
                            alt={img.alt}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        ))}
                    </div>
                </div> */}


                <div className="p-6">
                    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                        {images.map((image, index) => (
                        <div key={index} className="w-full break-inside-avoid">
                            <Image
                            src={image.src}
                            alt={image.alt}
                            width={500}
                            height={300}
                            className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        ))}
                    </div>
                </div>






                {/* <div className="p-6">
                    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                        {images2.map((img, idx) => (
                        <div key={idx} className="w-full break-inside-avoid">
                            <Image
                            src={img.src}
                            alt={img.alt}
                            width={500}
                            height={500}
                            layout="responsive"
                            className="rounded-lg"
                            />
                        </div>
                        ))}
                    </div>
                </div> */}

                {/* <div className="p-4">
                    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                        {images2.map((img, idx) => (
                        <div key={idx} className="break-inside-avoid">
                            <Image
                            src={img.src}
                            width={img.width}
                            height={img.height}
                            alt={`Gallery image ${idx + 1}`}
                            className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                        ))}
                    </div>
                </div> */}
            </div>
        
        </div>
        <Footer />
        </div>
    );
}
