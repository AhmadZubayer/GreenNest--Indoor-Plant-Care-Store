import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { FaStar } from 'react-icons/fa';

const PlantDetails = () => {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        fetch('/plants.json')
            .then(res => res.json())
            .then(data => {
                const foundPlant = data.find(p => p.plantId === parseInt(id));
                setPlant(foundPlant);
            })
            .catch(err => console.error(err));
    }, [id]);

    const handleBookConsultation = (e) => {
        e.preventDefault();
        const form = e.target;
        
        setShowSuccess(true);
        form.reset();

        setTimeout(() => {
            setShowSuccess(false);
        }, 3000);
    };

    if (!plant) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-green-600"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            {showSuccess && (
                <div className="alert alert-success mb-6">
                    <span>✓ Consultation booked successfully!</span>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                    <img src={plant.image} alt={plant.plantName} className="w-full rounded-lg shadow-lg" />
                </div>

                <div>
                    <h1 className="text-4xl font-bold text-green-700 mb-4">{plant.plantName}</h1>
                    <p className="text-gray-700 text-lg mb-4">{plant.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <p className="text-gray-600">Price</p>
                            <p className="text-3xl font-bold text-green-600">${plant.price}</p>
                        </div>
                        <div>
                            <p className="text-gray-600">Rating</p>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <FaStar 
                                            key={i} 
                                            className={i < plant.rating ? "text-yellow-500" : "text-gray-300"}
                                        />
                                    ))}
                                </div>
                                <span className="text-xl font-semibold text-gray-700">({plant.rating})</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-600">Stock Available</p>
                            <p className="text-xl font-semibold">{plant.availableStock} units</p>
                        </div>
                        <div>
                            <p className="text-gray-600">Care Level</p>
                            <p className="text-xl font-semibold">{plant.careLevel}</p>
                        </div>
                        <div>
                            <p className="text-gray-600">Category</p>
                            <p className="text-xl font-semibold">{plant.category}</p>
                        </div>
                        <div>
                            <p className="text-gray-600">Provider</p>
                            <p className="text-xl font-semibold">{plant.providerName}</p>
                        </div>
                    </div>

                    <div className="card-bg shadow-lg mt-8">
                        <div className="card-body">
                            <h3 className="text-2xl font-bold text-green-700 mb-4">Book Consultation</h3>
                            
                            <form onSubmit={handleBookConsultation}>
                                <fieldset className="fieldset">
                                    <label className="label">
                                        <span className="label-text font-semibold">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </fieldset>

                                <fieldset className="fieldset">
                                    <label className="label">
                                        <span className="label-text font-semibold">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </fieldset>

                                <div className="form-control mt-6">
                                    <button type="submit" className="btn-primary">
                                        Book Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantDetails;
