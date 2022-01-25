import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import BlueButton from "./BlueButton";
import Progress from './Progress';
import {next, check} from "../store/modules/score";

const Quiz = () => {
    const dispatch = useDispatch();
    const quiz = useSelector(state => state.score.quizs);
    const page = useSelector(state => state.score.page);
    const stateTest = useSelector(state => state);
    console.log(stateTest)

    return (
        <>
            <h1>{quiz[page - 1].q}</h1>
            {quiz[page - 1].a.map(
                (item) => {
                    return(
                        <BlueButton
                            text={item.text}
                            key={item.text}
                            clickEvent={()=>{
                                dispatch(check({isCorrect: item.isCorrect}))
                                dispatch(next())
                            }}
                        />
                    )
                }
            )}
            <Progress page={page} maxPage={quiz.length} />
        </>
    );


};

export default Quiz;