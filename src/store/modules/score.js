// 퀴즈풀면 정답 -> 점수획득
// 오답 -> 점수 획득 X

// 상태 : 사용자의 현재 점수(score)
// 액션 : 정답인지 아닌지 판별, 정답 -> 점수++;


//액션 타입(문자열)
const CHECK_CORRECT = "score/CHECK_CORRECT";

//액션 생성 함수
export function check({index, answer}){
    return {
        type:CHECK_CORRECT,
        payload:{index, answer}
    };
}

const quizs = [{
    q:"대한민국의 수도는?",
    a:[
        {text:"서울", correct:true},
        {text:"인천", correct:false},
        {text:"부산", correct:false},
    ]
}]

const initialState = {
    score:0,
    page:0, // 0: 인트로 페이지, 1~ quiz.length: 퀴즈 페이지, quiz.length+1 : 마지막페이지
}

