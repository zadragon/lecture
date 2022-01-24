import React from 'react';
import {useSelector} from "react-redux";

const DoneList = () => {
    const list = useSelector((state) => state.todo.list).filter(item => item.done);
    console.log(list)
    return (
        <section>
            {list.length > 0 && <h1>완료된 목록</h1>}
            <ul>
                {list.map(item => {
                    return <li key={item.id}>{item.text}</li>
                })}
            </ul>
        </section>
    );
};

export default DoneList;