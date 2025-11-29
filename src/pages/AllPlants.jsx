import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllPlants = () => {
    const { plantData } = useLoaderData();

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-center text-green-700 mb-2">All Plants</h2>
            <p className="text-center text-gray-600 mb-10">{plantData.length} plants available</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {plantData.map((plant) => {
                    return (
                        <div key={plant.plantId} className="bg-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:bg-green-50 transition-all overflow-hidden group">
                            {/* Image Section */}
                            <div className="h-48 flex items-center justify-center p-3 relative overflow-hidden">
                                <img 
                                    src={plant.image} 
                                    alt={plant.plantName} 
                                    className="w-[110%] h-[110%] object-cover rounded-3xl group-hover:scale-105 transition-transform"
                                />
                            </div>
                            
                            {/* Content Section */}
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-900 text-base mb-1 line-clamp-1">
                                    {plant.plantName}
                                </h3>
                                
                                {/* Rating and Category */}
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
                                <Link to={`/plant/${plant.plantId}`}>
                                    <button className="text-xs px-3 py-1.5 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                                        See details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AllPlants;
