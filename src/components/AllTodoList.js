import React from 'react';

const AllTodoList = () => {
    const list = []
    return (
        <section>
            <h1>할일 목록</h1>
            <div>
                <input type="text"/>
                <button>확인</button>
            </div>
            <ul>
                {list.map(item=>{
                    <li key={item.id}>{item.text}</li>
                })}
            </ul>
        </section>
    );
};

export default AllTodoList;