import React from 'react';

import { DashedProgress } from "react-dashed-progress";

const DashedCircleProgress = ({percentage}) => {
    return (
        <div>
            <DashedProgress 
            countBars = {101}
            barWidth={18}
            trailThickness={2}
            strokeThickness={3}
            value={percentage}
            strokeLinecap={"round"}
             />
        </div>
    )
}

export default DashedCircleProgress
