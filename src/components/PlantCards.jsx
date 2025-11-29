import React from 'react';
import { Link } from 'react-router';

const PlantCard = ({ plant, className = "" }) => {
    return (
        <div className={`bg-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:bg-green-50 transition-all overflow-hidden group ${className}`}>
            <div className="mt-5 h-48 flex items-center justify-center p-3 relative overflow-hidden">
                <img 
                    src={plant.image} 
                    alt={plant.plantName} 
                    className="w-[110%] h-[110%] object-cover rounded-3xl group-hover:scale-105 transition-transform"
                />
            </div>
            
            <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-base mb-1 line-clamp-1">
                    {plant.plantName}
                </h3>
                
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                    <span className="text-yellow-500">★</span>
                    <span className="font-medium">{plant.rating}</span>
                    <span className="text-gray-400 ml-1">
                        <svg className="w-3 h-3 inline" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                    </span>
                </div>
                
                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-3">
                    {plant.description.substring(0, 60)}...
                </p>
                
                <Link to={`/plant/${plant.plantId}`} className="btn-primary text-xs">
                    See details
                </Link>
            </div>
        </div>
    );
};

export default PlantCard;