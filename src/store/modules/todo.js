
//액션 타입
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

//액션 생성 함수
export function create(payload) {
    return{
        type: CREATE,
        payload,
    }
}

export function done(key) {
    return{
        type: DONE,
        key
    }
}

//초기 상태
const initState = {
    list:[
        {
            id:0,
            text:"척추 펴기",
            done:true
        },
        {
            id:1,
            text:"물마시기",
            done:false
        }
    ]
};

export default function todo (state = initState, action){
    switch(action.type){
        case CREATE:
            return {
                ...state,
                list: state.list.concat({
                    id:action.payload.id,
                    text:action.payload.text,
                    done:false
                })
            };
        case DONE:
            return {
                ...state,
                list: state.list.map(item => {
                    return item.id === action.id ? {...item, done:true } : item;
                })
            };
        default:
            return state;
    }
}