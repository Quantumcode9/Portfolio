
import React, { useState } from 'react';


const SkillCardGrid = ({ cardsData }) => {
const [flippedId, setFlippedId] = useState(null);

const handleFlip = (id) => {
    setFlippedId(flippedId === id ? null : id);
};

return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4">
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
        <div className="absolute w-full h-full bg-[#242424] hover:bg-[#2c2c2c] rounded-lg p-6 backface-hidden group">
        <h2 className="text-xl font-semibold uppercase text-white mb-4">
            {card.title}
        </h2>
        <p className="text-gray-300 line-clamp-7">{card.description}</p>
        <div className="absolute bottom-4 right-4">
        </div>  
        <i className="fas fa-chevron-circle-right absolute bottom-4 right-4 text-white text-base transition-all duration-300 group-hover:text-[#b5b5b5] group-hover:rotate-90"></i>
        </div>

        {/* Back Face */}
        <div className="absolute w-full h-full bg-[#2e2e2e] rounded-lg p-6 backface-hidden rotate-y-180">
        <h3 className="text-xl font-semibold uppercase text-white mb-4">
            {card.backTitle}
        </h3>
        {card.skills && (
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            {card.skills.map((skill, index) => (
                <div key={index}>
                <div className="flex justify-between text-white mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                </div>
                <div className="bg-gray-700 rounded-full h-2">
                    <div
                    className="skill-level-bar rounded-full h-2"
                    style={{ width: skill.level }}
                    ></div>
                </div>
                </div>
            ))}
            <i className="fas fa-chevron-circle-right absolute bottom-4 right-4 rotate-90 text-white text-base transition-all duration-300 group-hover:text-[#b5b5b5]"></i>
            </div>
        )}
        {card.backDescription && (
            <p className="card-description text-md mb-2 line-clamp-7">
            {card.backDescription}
            </p>
        )}
        </div>
    </div>
    </div>
))}
</div>
);
};

export default SkillCardGrid;