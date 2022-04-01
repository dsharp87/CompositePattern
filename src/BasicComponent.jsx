import { TextField, Typography } from '@mui/material';
import React, { Fragment, useEffect, useState } from "react";


const BasicComponent = (props) => {
    const [scoreValue, setScoreValue] = useState("");

    useEffect(() => {
        const scoreToUse = scoreValue !== "" ? parseInt(scoreValue) : 0;
        props.calculateScore(props.id, parseInt(scoreToUse))
    }, [scoreValue]);

    const numberRegex = /^[0-9\b]+$/;

    return (
        <Fragment>
            <Typography variant="subtitle1">
                Basic Item worth 
                <TextField
                            variant="standard"
                            color="primary"
                            value={scoreValue}
                            InputProps={{
                                inputMode: 'numeric',
                                pattern: '[0-9]*',
                                inputProps: {
                                    style: { textAlign: "center" },
                                }
                            }}
                            style={{ maxWidth: 75 }}
                            onChange={(e) => {
                                if (numberRegex.test(e.target.value) || e.target.value === "")
                                    setScoreValue(e.target.value)
                            }}
                        /> 
                points
            </Typography>
        </Fragment>
    )
}

export { BasicComponent };