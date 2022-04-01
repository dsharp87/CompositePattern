import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from "react";
import { BasicComponent } from './BasicComponent'


const ComponentGroup = (props) => {
    debugger;
    const [childScoreValues, setchildScoreValues] = useState({1:0, 2:0, 3:0});
    const [totalChildScoreValue, setTotalChildScoreValue] = useState(0);
    const [scoreValue, setScoreValue] = useState(0);

    const calculateScore = (id, childPoints) => {
        childScoreValues[id] = childPoints
        let groupScore = 0
        for (let [key, value] of Object.entries(childScoreValues)) {
            groupScore += value
        }
        setTotalChildScoreValue(groupScore)
        setScoreValue(groupScore * 2);
    }

    useEffect(() => {
        const scoreToUse = scoreValue !== "" ? parseInt(scoreValue) : 0;
        props.calculateScore(props.id, parseInt(scoreToUse))
    }, [scoreValue]);

    const numberRegex = /^[0-9\b]+$/;

    const groupOf3BasicComponents = [
        <BasicComponent key={1} id={1} calculateScore={calculateScore} />,
        <BasicComponent key={2} id={2} calculateScore={calculateScore} />,
        <BasicComponent key={3} id={3} calculateScore={calculateScore} />,
    ]
    
    return (
        <Box sx={{ width: 800, p: 2, border: '1px solid black' }}>
            <Typography variant="h4">Basic Component total is {totalChildScoreValue}</Typography>
            <Typography variant="h4">Group Score is doubled for {scoreValue} points</Typography>
            {groupOf3BasicComponents}
        </Box>
    )
}

export { ComponentGroup };