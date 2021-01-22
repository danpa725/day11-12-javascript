const btn = document.querySelectorAll("#number");
const funcBtn = document.querySelectorAll("#func-btn");
const reset = document.querySelector("#restart");
const printOutput = document.querySelector(".result-printing");

const PLUS = "PLUS";
const MINUS = "MINUS";
const MULTIPLE = "MULTIPLE";
const DIVIDE = "DIVIDE";

const RESULT = "RESULT";

let calcArr = [];
//계산을 위한 배열
let numArr = [];

const getInput = (e) => {
    numArr.push(e.target.value);
    generateInputNum(numArr);
};

const generateInputNum = (arr) => {
    const inputNum = Number(arr.join(""));
    printOutput.innerText = `${inputNum}`;

    if (calcArr.length <= 1) {
        calcArr.splice(0, 1, inputNum);
    } else if (calcArr.length === 2) {
        calcArr.push(inputNum);
    } else if (calcArr.length === 3) {
        calcArr.splice(2, 1, inputNum);
    }
};

const printResult = (calcArr) => {
    const getType = calcArr[1];
    const isRequestIsResult = calcArr[3] === RESULT;
    switch (getType) {
        case PLUS:
            const result1 = handlePlus(calcArr);
            printOutput.innerText = `${result1}`;

            if (isRequestIsResult) restart();
            break;

        case MINUS:
            const result2 = handleMinus(calcArr);
            printOutput.innerText = `${result2}`;

            if (isRequestIsResult) restart();
            break;

        case MULTIPLE:
            const result3 = handleMultiple(calcArr);
            printOutput.innerText = `${result3}`;

            if (isRequestIsResult) restart();
            break;

        case DIVIDE:
            const result4 = handleDivide(calcArr);
            printOutput.innerText = `${result4}`;

            if (isRequestIsResult) restart();
            break;

        default:
            break;
    }
};
const restart = () => {
    calcArr = [];
    numArr = [];
};

const handlePlus = (calc) => {
    const result = calc[0] + calc[2];
    const nextType = calc[3];

    calcArr = [];
    calcArr[0] = result;
    calcArr[1] = nextType;

    return result;
};

const handleMinus = (calc) => {
    const result = calc[0] - calc[2];
    const nextType = calc[3];

    calcArr = [];
    calcArr[0] = result;
    calcArr[1] = nextType;

    return result;
};

const handleMultiple = (calc) => {
    const result = calc[0] * calc[2];
    const nextType = calc[3];

    calcArr = [];
    calcArr[0] = result;
    calcArr[1] = nextType;

    return result;
};
const handleDivide = (calc) => {
    const result = calc[0] / calc[2];
    const nextType = calc[3];

    calcArr = [];
    calcArr[0] = result;
    calcArr[1] = nextType;

    return result;
};

const switchType = (e) => {
    if (calcArr.length === 1 || calcArr.length === 3) {
        numArr = [];
        const type = e.target.value;
        calcArr.push(type);
    } else {
        alert("올바른 수식을 삽입해 주십시오.");
        resetCalculator();
    }
    // 결과를 출력하기
    if (calcArr.length === 4) {
        printResult(calcArr);
    }
};

const resetCalculator = () => {
    restart();
    printOutput.innerText = "0";
};

const init = () => {
    printOutput.innerText = "0";

    btn.forEach((e) => e.addEventListener("click", getInput));
    //계산 타입을 정해주는 이벤트
    funcBtn.forEach((e) => e.addEventListener("click", switchType));
    //reset 버튼
    reset.addEventListener("click", resetCalculator);
};

init();
