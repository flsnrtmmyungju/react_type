<!-- ^ 스타일컴포넌트 예시

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


-->
