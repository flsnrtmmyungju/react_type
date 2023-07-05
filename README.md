<!-- ^ 스타일컴포넌트 사용법
*프롭받는 예시
& const Box = styled.div`background-color: ${(props)=>props.bgColor};`;
*확장예시
& const Circle = styled(Box)` border-radius: 50px; `;
*속성적용예시
& const Input = styled.input.attrs({required:true,minLength:2,maxLength:10})`background-color:tomato;`;
*태그에 as로 태그를 바꿀수있음
& input to a 변경(as="a") // <Input as=a />
*애니메이션
& import styled,{keyframes} 적용후 const rotationAnimation = keyframes``;애니메이션 작성후 animation:${rotationAnimation};이런식으로 불러옴
*스타일안의 타겟 , 이벤트 처리
& Box안에 span있을시
& const Box = styled.div`
&  span{                  //*  타겟 : span{font-size:36px;} or 만든객체시 &{이름}{font-size:36px;}
&    font-size:36px;
&    &:hover{             //*이벤트처리(hover)
&      font-size:10px
&    }
&  }
& `;
&물론 위와 span:hover {color:red;} 이렇게 따로 써도 똑같음

*테마적용
*index파일에 import { ThemeProvider } from 'styled-components';불러오고
 const darkTheme={textColor:"whitesmoke",backgroundColor:"#111",}
const lightTheme={textColor:"#111" ,backgroundColor:"whitesmoke",}
<ThemeProvider theme={darkTheme}>  //여기에 테마이름을 바꾸면 이걸참조해간 모든 페이지에 일괄적용
    <App />
</ThemeProvider>
& 사용할곳에 가서 const Title = styled.h1`color : ${props=>props.theme.textColor};`; 이런식으로 사용


*타입스크립트 추가
&아래세개 설치치
npx create-react-app react-type-masterclass  --template typescript
npm i styled-components --legacy-peer-deps --save
npm i --save-dev @types/styled-components
& index.tsx의 const root = ReactDOM.createRoot(document.getElementById('root')); 부분 아래처럼변경
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
-->

<!-- ^ 타입스크립트 사용법
&기본적인 사용법예시
* app.tsx에서
import Circle from "./Circle";
<Circle bgColor="teal" />

*Circle.tsx에서
 & interface는 사용하는 데이터의 형식 설정하는곳
interface CircleProps {
  bgColor: string;
  &?는 required 가 아니란 뜻
  borderColor? : String;
}
                           &이렇게 데이터의 형식지정가능
const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
                                &형식에맞는 데이터불러옴
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;
                            &형식지정
function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

&디폴트 값넣기
? ex//text
* interface 로 아래지정
 text?: string;
* function에 아래처럼 사용
function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}
-->

<!-- ^ state 사용법
&기본 useState 사용법
*          변수,   변수실행시킬 함수       1로 디폴트스테이트설정,타입설정(안해도됨혹시 두타입사용하고싶을경우.)
*  const [counter, setCounter] = useState<string||number>(1)
-->

<!-- ^ es문법 사용법
* const {currentTarget: { value },} = event;문법 설명

* ES6 event안 curentTarget안에 value의 값을 기존 이름 그대로 value 라는 변수를 만듬.
* const value = event.currentTarget.value 랑 똑같다.
*  한개만 만들때는 저 문법의 장점이 없음.
*  만약에 currentTarget안에서 value, tagName, width, id 이 4개를 가져오고 싶다고 하면 기존 문법을
& const value = event.currentTarget.value;
& const tagName = event.currentTarget.tagName;
& const width = event.currentTarget.width;
& const id = event.currentTarget.id;

* 아래로 바꿀수있음
& const { currentTarget: {value, tagName, width, id} } = event;
-->

<!-- ^ Form 사용법
import React, { useState } from "react";
function App() {
  const [value, setValue] = useState("");
                          *이렇게 불러와서 타입확인하게끔
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    * 위의 ex6문법 란에 설명되어있음
    const {
       * currentTarget(리엑트에서는 Target대신 씀)
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}
-->

<!-- ^ type에서 테마적용법
styled.d.ts만들어서 적용
theme.ts 만들어서 내용적음
index에서 테마적용
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>

App에서 객체생성해서 적용
import styled from "styled-components";
const Container = styled.div`background-color : ${(props)=>props.theme.bgColor};`;
const H1= styled.h1`color: ${(props)=>props.theme.textColor};`
function App() {
      *div로 감쌀게아니면 ()에감싸야하는거 잘봐야 할것같다.
  return (
    <Container>
      <H1>hhhh</H1>
    </Container>
  )
}
-->
