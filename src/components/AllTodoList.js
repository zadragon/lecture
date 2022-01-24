import {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {create, done} from './../store/modules/todo'

const AllTodoList = () => {
    const list = useSelector((state => state.todo.list));
    const listTodo = useSelector((state => state.todo.list)).filter(item=>!item.done);
    const inputRef = useRef();
    const dispatch = useDispatch();
    console.log(list)

    return (
        <section>
            <h1>할일 목록</h1>
            <div>
                <input type="text" ref={inputRef} />
                <button type="button" onClick={()=>{
                    dispatch(create({id:list.length, text:inputRef.current.value}))
                }}>확인</button>
            </div>
            <ul>
                {listTodo.map((item)=>{
                    return <li key={item.id}>{item.text} <button onClick={()=>dispatch(done(item.id))}>완료</button> </li>
                })}
            </ul>
        </section>
    );
};

export default AllTodoList;