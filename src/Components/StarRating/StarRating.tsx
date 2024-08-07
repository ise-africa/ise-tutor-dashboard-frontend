import React, { useState } from 'react';

type StarRatingProps = {
    totalStars: number;
    initialRating?: number;
    width?: number;
    height?: number;
    editable?: boolean;
    activeColor?: string;
    inactiveColor?: string;
}

const StarRating = ({
    totalStars,
    initialRating = 0,
    width = 14,
    height = 13,
    editable = true,
    activeColor = '#F2B414',
    inactiveColor = 'gray',
}: StarRatingProps) => {
    const [rating, setRating] = useState(initialRating);

    const handleStarClick = (starIndex: number) => {
        if (editable) {
            setRating(starIndex + 1);
        }
    };

    return (
        <div style={{ whiteSpace: 'nowrap' }}>
            {[...Array(totalStars)].map((_, index) => (
                <span
                    key={index}
                    onClick={() => handleStarClick(index)}
                    style={{
                        cursor: editable ? 'pointer' : 'default',
                        margin: '3px',
                        color: index < rating ? activeColor : inactiveColor,
                    }}
                >
                    <svg
                        width={width}
                        height={height}
                        viewBox="0 0 14 13"
                        fill={index < rating ? activeColor : 'none'}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.04895 1.92664C6.34833 1.00538 7.65167 1.00538 7.95104 1.92664L8.57175 3.83672C8.70563 4.24872 9.08956 4.52766 9.52276 4.52767L11.5312 4.52775C12.4998 4.52778 12.9026 5.76733 12.1189 6.33674L10.4942 7.51732C10.1437 7.77196 9.99705 8.22329 10.1309 8.63529L10.7515 10.5454C11.0508 11.4667 9.99634 12.2328 9.21264 11.6634L7.58775 10.483C7.23728 10.2284 6.76272 10.2284 6.41225 10.483L4.78736 11.6634C4.00366 12.2328 2.94924 11.4667 3.24854 10.5454L3.8691 8.63529C4.00295 8.22329 3.8563 7.77196 3.50585 7.51732L1.88106 6.33674C1.0974 5.76733 1.50015 4.52778 2.46884 4.52775L4.47724 4.52767C4.91044 4.52766 5.29437 4.24872 5.42825 3.83672L6.04895 1.92664Z"
                            stroke={activeColor}
                            strokeWidth="1.5"
                        />
                    </svg>
                </span>
            ))}
        </div>
    );
};

export default StarRating;
