import React, { useState } from 'react';

const SkillCardGrid = ({ cardsData }) => {
    const [flippedId, setFlippedId] = useState(null);

    const handleFlip = (id) => {
        setFlippedId(flippedId === id ? null : id);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 mx-4">
            {cardsData.map((card) => (
                <div
                    key={card.id}
                    className="relative w-full h-[250px] perspective cursor-pointer"
                    onClick={() => handleFlip(card.id)}
                >
                    <div
                        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                            flippedId === card.id ? 'rotate-y-180' : ''
                        }`}
                    >
                        {/* Front Face */}
                        <div className="absolute w-full h-full bg-[#242424] hover:bg-[#2c2c2c] rounded-lg p-4 backface-hidden group">
                            <h2 className="text-xl font-semibold uppercase text-white mb-4">
                                {card.title}
                            </h2>
                            <p className="text-gray-300 text-left text-sm line-clamp-7">{card.description}</p>
                            <i className="fas fa-chevron-circle-right absolute bottom-4 right-4 text-white text-base transition-all duration-300 group-hover:text-[#b5b5b5] group-hover:rotate-90"></i>
                        </div>

                        {/* Back Face */}
                        <div className="absolute w-full h-full bg-[#2e2e2e] rounded-lg p-4 backface-hidden rotate-y-180 overflow-hidden">
                            <h3 className="text-lg font-semibold uppercase text-white mb-3">
                                {card.backTitle}
                            </h3>
                            {card.skills && (
                                <div className="flex flex-wrap gap-2">
                                    {card.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-gray-700 text-white text-xs rounded-smtransition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <i className="fas fa-chevron-circle-left absolute bottom-4 right-4 text-white text-base"></i>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillCardGrid;