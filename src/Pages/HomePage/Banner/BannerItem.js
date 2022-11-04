import React from 'react';

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} className="w-full" />
            </div>
            <div className="absolute flex flex-col justify-start transform -translate-y-1/2 left-3 md:left-24 top-1/2">
                <h1 className='text-2xl md:text-4xl lg:text-5xl text-bold text-white'>
                    Affordable
                    <br />
                    Price For Car
                    <br />
                    Servicing
                </h1>
                <p className='my-8 w-1/2 text-white hidden md:block'>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                </p>
                <div className='flex flex-col md:flex-row flex-start gap-4'>
                    <button className='btn btn-sm md:btn-lg btn-outline btn-warning rounded-xl'>Discover More</button>
                    <button className='btn btn-sm md:btn-lg btn-outline btn-warning rounded-xl'>Latest Project</button>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;