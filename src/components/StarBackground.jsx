import { useEffect, useState } from "react";

//  id, size , x ,y , opacity , animationDuration
// list of objects that contains each of these properties


export const StarBackground = () => {
        const [stars, setStars] = useState([]);

        useEffect(() => {
            generateStars();
        }, []);  /* [] is the empty dependency array (prevents running forever) */

        const generateStars = () => {
            const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);


            const newStars = []

            for (let i = 0; i< numberOfStars; i++){
                newStars.push({
                    id:i,
                    size: Math.random() * 3 + 1, /* render stars of size 1 to 4 px*/
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    opacity: Math.random() * 0.5 + 0.5,
                    animationDuration: Math.random() * 4 + 2, 
                });
            }


            setStars(newStars);

        };

    return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div key={star.id} 
            className="star animate-pulse-subtle" 
            style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
            }}
            />
        ))}
    </div>
    );
};