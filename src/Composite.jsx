import { Box, Typography } from '@mui/material';
import React, { useState } from "react";
import { BasicComponent } from './BasicComponent'
import { ItemGroup } from './ItemGroup';


const Composite = (props) => {
    debugger;
    const [childScoreValues, setchildScoreValues] = useState({1:0, 2:0, 3:0, 4:0});
    const [scoreValue, setScoreValue] = useState(0);

    const calculateScore = (id, childPoints) => {
        childScoreValues[id] = childPoints;
        setchildScoreValues(childScoreValues);
        let groupScore = 0
        for (let [key, value] of Object.entries(childScoreValues)) {
            groupScore += value
        }
        setScoreValue(groupScore)
    }
    
    return (
        <Box sx={{ width: 900, p: 5, border: '1px solid black' }}>
            <Typography variant="h3">Composite worth total of {scoreValue} points</Typography>
            <ItemGroup key={1} id={1} calculateScore={calculateScore}/>
            <ItemGroup key={2} id={2} calculateScore={calculateScore}/>
            <BasicComponent key={3} id={3} calculateScore={calculateScore} />
            <BasicComponent key={4} id={4} calculateScore={calculateScore} />
        </Box>
    )
}

export { Composite };