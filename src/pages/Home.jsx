import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Home = () => {
    const [plants, setPlants] = useState([]);
    const [careTips, setCareTips] = useState([]);
    const [experts, setExperts] = useState([]);
    const [plantOfWeek, setPlantOfWeek] = useState(null);

    const bannerSlides = [
        {
            image: '/banner-images/1.jpg',
            title: "Welcome to GreenNest",
            slogan: "Nurture Your Space with Nature's Beauty",
            description: "Transform your home into a green paradise"
        },
        {
            image: '/banner-images/2.jpg',
            title: "Expert Plant Care",
            slogan: "Growing Together, Naturally",
            description: "Professional guidance for healthy plants"
        },
        {
            image: '/banner-images/3.jpg',
            title: "Indoor Plant Collection",
            slogan: "Breathe Life Into Every Corner",
            description: "Discover our curated selection of plants"
        },
        {
            image: '/banner-images/4.jpg',
            title: "Air Purifying Plants",
            slogan: "Clean Air, Healthy Living",
            description: "Natural solutions for better air quality"
        },
        {
            image: '/banner-images/5.jpg',
            title: "Low Maintenance Beauties",
            slogan: "Easy Care, Maximum Impact",
            description: "Perfect plants for busy lifestyles"
        },
        {
            image: '/banner-images/6.jpg',
            title: "Plant Consultation",
            slogan: "Expert Advice at Your Fingertips",
            description: "Book a session with our green experts"
        },
        {
            image: '/banner-images/7.jpg',
            title: "Sustainable Living",
            slogan: "Grow Green, Live Green",
            description: "Join the indoor gardening revolution"
        }
    ];

    useEffect(() => {
        fetch('/plants.json')
            .then(res => res.json())
            .then(data => {
                // Sort by rating (highest first) and take top 5
                const topRated = data
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 5);
                setPlants(topRated);
                
                // Find plant with most sales this week
                const mostSold = data.reduce((prev, current) => 
                    (current.soldThisWeek > prev.soldThisWeek) ? current : prev
                );
                setPlantOfWeek(mostSold);
            })
            .catch(err => console.error(err));

        fetch('/plant-care.json')
            .then(res => res.json())
            .then(data => setCareTips(data))
            .catch(err => console.error(err));

        fetch('/gardener-expert.json')
            .then(res => res.json())
            .then(data => setExperts(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            {/* Hero Section - Chrome Web Store Style Banner */}
            <section className="relative max-w-7xl mx-auto px-4 py-8">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        el: '.custom-pagination',
                    }}
                    navigation={{
                        prevEl: '.custom-prev',
                        nextEl: '.custom-next',
                    }}
                    loop={true}
                    className="rounded-3xl overflow-hidden shadow-lg"
                    style={{ height: '440px' }}
                >
                    {bannerSlides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative h-full w-full">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
                                    <div className="text-white px-12 max-w-2xl">
                                        <h1 className="text-5xl font-bold mb-4">
                                            {slide.title}
                                        </h1>
                                        <p className="text-xl mb-2 font-medium">
                                            {slide.slogan}
                                        </p>
                                        <p className="text-base mb-6 opacity-90">
                                            {slide.description}
                                        </p>
                                        <Link
                                            to="/allPlants"
                                            className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all border border-white/30"
                                        >
                                            See collection
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                {/* Custom Navigation and Controls */}
                <div className="absolute bottom-6 right-6 flex items-center gap-3 z-10">
                    <button className="custom-prev w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <div className="custom-pagination flex items-center gap-2 px-4 py-2 bg-white/90 rounded-full shadow-lg"></div>
                    
                    <button className="custom-next w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    
                    <button 
                        className="swiper-pause-button w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all"
                        onClick={(e) => {
                            const swiper = e.currentTarget.closest('.max-w-7xl').querySelector('.swiper').swiper;
                            if (swiper.autoplay.running) {
                                swiper.autoplay.stop();
                                e.currentTarget.innerHTML = '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
                            } else {
                                swiper.autoplay.start();
                                e.currentTarget.innerHTML = '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>';
                            }
                        }}
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                        </svg>
                    </button>
                </div>
            </section>

            {/* Top Rated Plants Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
                    Top Rated Indoor Plants
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {plants.map((plant) => {
                        return (
                            <div key={plant.plantId} className="bg-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:bg-green-50 transition-all overflow-hidden group">
                                {/* Image Section */}
                                <div className="h-48 flex items-center justify-center p-3 relative overflow-hidden">
                                    <img 
                                        src={plant.image} 
                                        alt={plant.plantName} 
                                        className="w-[110%] h-[110%] object-cover rounded-[1.5rem] group-hover:scale-105 transition-transform"
                                    />
                                </div>
                                
                                {/* Content Section */}
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 text-base mb-1 line-clamp-1">
                                        {plant.plantName}
                                    </h3>
                                    
                                    {/* Rating */}
                                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                                        <span className="text-yellow-500">★</span>
                                        <span className="font-medium">{plant.rating}</span>
                                        <span className="text-gray-400 ml-1">
                                            <svg className="w-3 h-3 inline" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                    
                                    {/* Description */}
                                    <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-3">
                                        {plant.description.substring(0, 60)}...
                                    </p>
                                    
                                    {/* See Details Button */}
                                    <Link to={`/plant/${plant.plantId}`} className="btn-primary text-xs">
                                        See details
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-10">
                    <Link to="/allPlants" className="btn-primary">
                        View All Plants
                    </Link>
                </div>
            </section>

            {/* Plant Care Tips Section */}
            <section className="bg-green-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-black mb-10">
                        Essential Plant Care Tips
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {careTips.map(tip => (
                            <div key={tip.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                                <figure className="h-64 overflow-hidden">
                                    <img src={tip.image} alt={tip.title} className="w-full h-full object-cover" />
                                </figure>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-black mb-2 text-center">{tip.title}</h3>
                                    <p className="text-gray-600 text-sm">{tip.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet Our Experts Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold text-center text-black mb-10">
                    Meet Our Green Experts
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {experts.map(expert => (
                        <div key={expert.id} className="bg-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:bg-green-50 transition-all overflow-hidden">
                            <figure className="h-64 overflow-hidden">
                                <img src={expert.image} alt={expert.name} className="w-full h-full object-cover" />
                            </figure>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-black mb-2">{expert.name}</h3>
                                <p className="text-gray-600 text-sm">{expert.specialization}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Plant of the Week Section */}
            <section className="container mx-auto px-4 py-16">
                {plantOfWeek && (
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-green-100 rounded-3xl overflow-hidden shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                                {/* Text Side */}
                                <div className="p-12 flex flex-col justify-center">
                                    <h2 className="text-4xl font-bold text-black mb-4">
                                        Plant of the Week
                                    </h2>
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                                        {plantOfWeek.plantName}
                                    </h3>
                                    <p className="text-gray-700 text-lg mb-4">
                                        {plantOfWeek.description}
                                    </p>
                                    <p className="text-sm text-gray-600 mb-6">
                                         {plantOfWeek.soldThisWeek} sold this week!
                                    </p>
                                    <Link 
                                        to={`/plant/${plantOfWeek.plantId}`}
                                        className="btn-three w-fit"
                                    >
                                        See details
                                    </Link>
                                </div>
                                
                                {/* Image Side */}
                                <div className="h-full min-h-[400px] flex items-center justify-center p-8">
                                    <img 
                                        src={plantOfWeek.image} 
                                        alt={plantOfWeek.plantName}
                                        className="w-[60%] h-[60%] object-contain rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Home;