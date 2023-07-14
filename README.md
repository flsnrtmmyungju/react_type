<!-- ^ 여러줄 컬러입히려면 첫번째 칸의 기호를 한킨띄워야함
<!--* (xxxxxxxxxxxxxxx)
  *
  -->
<!-- * (oooooooooooo)여기 *앞에 한칸 띄우삼
  *
  -->

<!-- * 추가 설치 + 리액트 라우터돔 5.3버전사용

* npm i react-router-dom@5.3
* npm i react-query@3.39.3

* react-query 설치 변경사항 아직적용은안함
  react-query 공식문서 참조
  npm i @tanstack/react-query --save --legacy-peer-deps
  import {} from '@tanstack/react-query'
  const { data, isLoading } = useQuery([“queryKey”], queryFunction);


* npm i @types/react-router-dom
* npm i apexcharts@3.41.0
* npm i react-apexcharts@1.4.0
* gh-pages//없어도됨
* react-helmet-async react-helmet @types/react-helmet
* recoil
* react-hook-form

-->

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

*글로벌스타일적용 (@import 사용하려면.)5.xx업데이트이후..
&밑에 적힌대로 헬맷 설치하고
import { Helmet } from "react-helmet-async";

<HelmetProvider>
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap" rel="stylesheet"/>
</HelmetProvider>
-->

<!-- ^ 타입스크립트 사용법
&기본적인 사용법예시
* 순서
interface 생성
호출 - interface안에서 한개만호출 - Circle({ bgColor }: CircleProps)
     - interface 전체 호출 - Circle<CircleProps>()

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
                    &bgColor이라는 한개만 쓰니까 이런식으로 형식지정 전부필요하면 <CircleProps>
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

&인터페이스와 타입지정
interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
* <IToDo[]>와 <IToDo> 차이점
<IToDo[]>: 배열 타입 지정
<IToDo[]>는 IToDo라는 인터페이스를 요소로 갖는 배열 타입을 나타냅니다.
즉, toDoState는 IToDo 인터페이스를 요소로 가지는 배열을 상태로 가질 것이라는 의미입니다.
이는 여러 개의 할 일 항목을 담을 수 있는 배열을 의도한 것입니다.

<IToDo>: 단일 객체 타입 지정
<IToDo>는 IToDo라는 인터페이스를 가진 단일 객체 타입을 나타냅니다.
즉, toDoState는 IToDo 인터페이스에 정의된 속성들을 가진 단일 객체를 상태로 가질 것이라는 의미입니다.
이는 단일 할 일 항목을 담을 수 있는 객체를 의도한 것입니다.

따라서 <IToDo[]>는 여러 개의 할 일 항목을 담는 배열을 상태로 가지고,
<IToDo>는 단일 할 일 항목을 담는 객체를 상태로 가진다는 차이가 있습니다.
이에 따라 코드를 사용하는 곳에서도 배열 형태로 사용하거나 단일 객체 형태로 사용해야 합니다.

*형식이 같을경우 간단한게 쓰는 방법
import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
              ! <ToDo text={toDO.text} category={todo.category} 이런식으로 긴코드가
              ! props 타입이 같고 값이 정해져 있으니까 {...toDo}이런식으로 한번에 사용가능
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      </div>
  );
}
export default ToDoList;

!!위의 다른 예
const onClick= (newCategory : "a" | "b" | "c" )
위와 같음 (IToDO인터페이스에 category의 이름이 a,b,c라는 같은이름이 있을때 가능 )
const onClick= (newCategory : IToDO["category"] )

<!-- ^ Enum 사용법!
 *정의 열거형(enumeration)이라고도 불리며, 명명된 상수 그룹을 정의하는 데 사용됩니다.
 * 기본적으로는 숫자로 생성됨 {"a","b","c"} 이면 실제로 데이터가져가서 사용하면 0,1,2
 javascript에서는
 const Direction = {
  Up: 'UP',
  Down: 'DOWN',
  Left: 'LEFT',
  Right: 'RIGHT',
};
const playerDirection = Direction.Up;

이렇게사용하는걸
type 에서는
enum Direction {
  ^1.
  !당연히 이름 같으면 {"UP","DOWN","LEFT","RIGHT"} 이렇게만 적어줘도됨
  !근데 셀렉트경우 이렇게적으면 STRING가아니라 0,1,2이렇게 숫자로나와서
  !아래처럼 적는게 좋을듯.
  ^2.
  !아니면 사용하는곳에서 {Direction.Up+""}이렇게 사용하고고
  !데이터베이스에서는 0,1,2로 받도록 사용도 가능
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
  ^3
  !아니면 아래처럼도 가능
  ! "Up" = "UP",
  !"Down" = "DOWN",
  !"Left" = "LEFT",
  !"Right" = "RIGHT",
}
const playerDirection = Direction.Up;

이런느낌


 -->

<!-- ^ 아래는 리액트 훅
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->

<!-- ^ useState 사용법 (변수,변수실행시킬 함수 생성및설정)
&기본 useState 사용법
*          변수,   변수실행시킬 함수       1로 디폴트스테이트설정,타입설정(안해도됨혹시 두타입사용하고싶을경우.)
*  const [counter, setCounter] = useState<string||number>(1)
-->

<!--^ useEffect 사용법 (컴포넌트가 생성될때 한번 실행하게 함)
기본틀
  useEffect(()=>{내용},[])//컨포넌트의 시작에서만 쓰려면[] 이렇게 비워야함 안에 뭐를 넣으면 안에넣은게바뀌면 훅이다시실행
//ex
  useEffect(()=>{
    (async()=>{ //()()이렇게하면 함수 바로실행
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0,100))
      setLoading(false)
    })();
  },[])
-->

<!--^ useRouteMatch 사용법 (맞는 라우터에 있는걸 확인해줌 *주소의 여러정보들어있음)
const priceMatch = useRouteMatch("/:coinId/price");
<Tabs>
  <Tab isActive={priceMatch !== null}> //isActive는 임의의이름임 다른이름가능
    <Link to={`/${coinId}/price`}>Price</Link>
  </Tab>
</Tabs>
-->

<!-- ^ useQuery(react-query다운받아야함.responce를 캐싱,패처등등 사용하기편함) 사용법
!useQuery(유니크 쿼리키(무조건달라야함),fetch함수,선택적함수)
ex//useQuery<IHistorical[]>(
  ["ohlcv", coinId], //유니크 쿼리키
  () => fetchCoinHistory(coinId), //fetch함수
  {refetchInterval: 10000,} //선택적함수
 );


import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>

이이후에 api.tsx만들어서
fetch할걸 넣음
export function fetchCoins() {
    return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
      response.json()
  );
}
이후 필요한 곳에 가서
                            !useQuery(유니크 쿼리키(무조건달라야함),fetch함수)
const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
    <!--!여기도 같은이름이면안되서 바꿈
const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    <!-- !유니크쿼리키라서 무조건달라야하니까 이렇게 ["info",conid] 사용
        ["info", coinId],() => fetchCoinInfo(coinId));
const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
        ["tickers", coinId],() => fetchCoinTickers(coinId));
-->

<!--^ react-query/devtools(화면아래에 내 캐시에있는 쿼리정보들 볼수있는 프로그램 뜸)사용법
App.tsx
import { ReactQueryDevtools } from "react-query/devtools";

<Router />
<ReactQueryDevtools initialIsOpen={true} />
 -->

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->

<!-- ^ 아래는 리액트 상태관리 Recoil 사용하는법
<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->

<!-- ^ recoil 기본 설치법
인덱스에서
import { RecoilRoot } from 'recoil';
<RecoilRoot>
  <QueryClientProvider client={queryClient}>
      <App />
  </QueryClientProvider>
</RecoilRoot>
이렇게 감쌈

atoms.ts 만들어서
import { atom } from "recoil";

필요한거 만듬.
ex.// key,default는 꼭있어야함 key는 당연히 유니크키
export const isDarkAtom = atom({
    key:"isDark",
    default:"false"
})

-->

<!-- ^ useRecoilValue(리코일 벨류 가져오는거) 사용법
필요한곳 가서 import는 자동...
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

const isDark = useRecoilValue(isDarkAtom)

<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
 -->

<!-- ^ useSetRecoilState(리코일 벨류 수정할수있는거) 사용법
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";

const setDarkAtom = useSetRecoilState(isDarkAtom)
const toggleDarkAtom = ()=> setDarkAtom(prev=> !prev);

<button onClick={toggleDarkAtom}>다크모드</button>


사용법2
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";
  !toDoState라는 atoms에서 가져온 걸 담아서
 const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    !!아래와 같음 const event.currentTarget.name
    const {
      currentTarget: { name },
    } = event;
    !버튼클릭시에 카테고리 이름 바꾸는거
    setToDos(oldToDos =>{
      const tagetIndex = oldToDos.findIndex(toDo =>toDo.id=== id )
      const oldToDo = oldToDos[tagetIndex]
      const newToDo = {text,id, category:name as any}
      return [...oldToDos.slice(0,tagetIndex),newToDo,...oldToDos.slice(tagetIndex+1)]
    })
  };
    return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
    </li>
  );
-->

<!-- ^ useRecoilState(리코일 벨류 가져오고 수정 한번에할수있음) 사용법
  *a는 atom의 value 거나 selector의 get함수의 리턴 값
  *b는 atom의 value를 수정하는 함수거나 selector의 set property를 실행시키는 함수
  *c는 atom or selector
   const [a, b] = useRecoilState(c);

  리엑트 useState 와 사용법이 같다.
  const [toDos, setToDos] = useRecoilState(toDoState);
  setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ![oldToDos]이렇게하면 [[valu들]], ...oldToDos이렇게하면 [valu들]
      ...oldToDos,
  ]);
-->

<!-- ^ selector(atom(어레이라고 생각)의 output을 변형시키는 도구)
*key은 필수, get or set 가져야한다. {get}은 get사용하는 방법

&get사용예시 ----------------------------------------------
* atoms.tsx에서
import { atom, selector } from "recoil";

export enum Categories {"TO_DO","DOING","DONE",}


export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default:Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
                 !get을 이용해서 위의 state를 가져옴
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
* 사용할파일 tsx에서 ---1
import { toDoSelector } from "../atoms";

function ToDoList() {
     !위 toDoSelector selector 에서 정해놓은 순서대로이름정해야함
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h1>To Dos</h1>
      <ul>
        {toDo.map((toDo) => (
           !<ToDo text={toDO.text} category={todo.category} 이런식으로 긴코드가
           !props 타입이 같고 값이 정해져 있으니까 {...toDo}이런식으로 한번에 사용가능
          <ToDo key={toDo.id} {...toDo} />
        ))}
    </div>
  );
}
* 사용할파일 tsx에서 ---2
function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    !우리가 정한 타입은 <categories> 이지만 (만든거)
    !option의 value는 typescript가보기에 그냥 string라서 에러남. as any추가
    setCategory(event.currentTarget.value as any);
  };
  return (
    <>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
         <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </>
  );
}
&set사용예시 ----------------------------------------------
*atoms.tsx
import { atom, selector } from "recoil";
export const minuteState = atom({
  key: "minutes",
  default: 0,
});
export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  },
});
*app.tsx
const [minutes, setMinutes] = useRecoilState(minuteState);
const [hours, setHours] = useRecoilState(hourSelector);
const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
  setMinutes(+event.currentTarget.value);
};
const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
  setHours(+event.currentTarget.value);
};
return (
  <>
    <input
      value={minutes}
      onChange={onMinutesChange}
      type="number"
      placeholder="Minutes"
    />
    <input
      value={hours}
      onChange={onHoursChange}
      type="number"
      placeholder="Hours"
    />
  </>
);
}
 -->

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->

<!-- ^ es6문법 destructuring 사용법
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

<!-- ^ helmet(탭이름,이모티콘등등사용가능)사용법
* react-helmet-async
* react-helmet
* @types/react-helmet
깔고
app.tsx 에
import { HelmetProvider } from "react-helmet-async";
라우터를 감쌈
<HelmetProvider>
  < Router />
</HelmetProvider>

그리고 원하는곳에가서
import { Helmet } from "react-helmet-async";
<Helmet>
  <title>
    {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
  </title>
</Helmet>
이런식으로 원하는거 적음
-->

<!-- ^ react-hook-form(form의여러가지기능들어있음)사용법
import { useForm } from "react-hook-form";
interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
}
!register:onchange,onblur등등의 이벤트가 다생성됨.
&           required, minLength , pattern등등..
&           오류를 바로 메세지와함께보내는방법
&           required: "required mag"
&           minLength:{value:5, message:"required mag"}
&
!watch:form입력값 받아옴
watch ex//const inputValue = watch('inputFieldName');
          <input name="inputFieldName" ref={register} />
          <p>입력 값: {inputValue}</p>

      !register함수가 반환하는 객체를 input에 props로 전달
const {register,
      !form입력값 받아옴
       watch,
       !Submit한 데이터 다가져옴
       handleSubmit
       !에러내용확인가능
       ,formState:{errors},
       !조건만들어서 에러만들수있음
       setError
       !value를바꿀수있음
       ,setValue
       }= useForm<IForm>({
    !기본적인 데이터를 미리셋팅가능
    defaultValues: {email: "@naver.com",},
  });
    const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      !setError 조건만들어서 에러만들수있음
      setError(
        "password1",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
    !이런식으로 value 바꿔서 비울수도 있음
    setValue("password", "");

  };
  console.error(errors);

        !handleSubmit 사용
  <form onSubmit={handleSubmit(onValid)}>
            !register사용 //register함수가 반환하는 객체를 input에 props로 전달
                              ! {required:true} 레지스터 안에 넣어서쓰는이유는
                             !  required직접 태그에넣으면 브라우저에서 수정가능
                             !그리고 자동으로 비어있는곳으로 이동
      <input {...register("email", {
                    required:"Email is required",
                    pattern: {value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
                              message: "Only naver.com emails allowed",
                              },
                })} placeholder="Email"
                />
        <span> {errors?.email?.message as string}</span>
        <input
         {...register("firstName", {
            required: "write here",
            !validate 조건넣을수있음 여러개도가능 noNico,noNick 임의의 이름
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "no nicos allowed" : true,
              noNick: (value) =>
                value.includes("nick") ? "no nick allowed" : true,
            },
          })}
          placeholder="First Name"
        />
    <input {...register("lastName")} placeholder="Last Name" />
    <input {...register("username")} placeholder="Username" />
    <input {...register("password")} placeholder="Password" />
    <input {...register("password1")} placeholder="Password1" />
    <span>{errors?.extraError?.message}</span>
    <button>Add</button>
  </form>
-->

<!--^ CandleStick CandleStick으로 나타내는법

CandleStick
Chart를 CandleStick으로 나타내기 위해선, data에 두 가지 인수(x,y)를 전달해줘야 합니다. x는 x축의 이름, y는 [open, high, low, close]가 순서대로 담긴 배열입니다.
기존의 방식과는 달리 전달해야 할 데이터가 약간 복잡합니다. 그렇다면, 우리는 아래와 같이 외부에서 변수를 선언 및 가공한 후, 전달하는 것을 고려해보는 것이 좋습니다.

- const exceptData = data ?? [];
- const chartData = exceptData?.map((i)=>{
- return {
-      x: i.time_close,
-      y: [i.open, i.high, i.low, i.close],
- }
- });
  ApexChart-CandleStick 공식문서 참조-https://apexcharts.com/react-chart-demos/candlestick-charts/basic/
  ApexChart의 공식 Docs DB가 자주 날아갑니다.
  ex// class ApexChart extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
  series: [{
  data: [{
  x: new Date(1538778600000),
  y: [6629.81, 6650.5, 6623.04, 6633.33]
  },
  이외의 팁
  Coin탭은 Chart와 Price를 render하기 위해 중첩 라우팅을 사용해야 합니다. 중첩 라우팅에는 두 가지 방식이 있습니다.
  V6 Descendant Routes(강의Ver) Descendant Routes 공식문서 참조
  V6 Nested Route Nested Route 공식문서 참조
  V5로 구현할 경우, Routes를 Switch로 바꿔주신 뒤, 각 Route 컴포넌트에 렌더링을 할 컴포넌트를 넣어주시면 됩니다.
  React에서 Home과 같은 특정 페이지로 이동해야 할 때, <a>를 사용하는 건 좋은 방법이 아닙니다. <Link />를 사용해봅시다!-<Link> 공식문서 참조
  Coin의 데이터를 fetch 할 땐, react-query를 사용합니다. queryFunction 자리에는 fetch를 사용하는 promise 함수가 들어갑니다.
  react-query 공식문서 참조
  ApexChart - CandleStick Chart
-->

<!--*팁 -->

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->

<!--^1 스트링앞에 +붙이면 넘버로 바뀜
  let a = "1"
  console.log('a',a) STRING
  console.log('a',+a) NUMBER
-->

<!--^2 ()()이렇게하면 함수 바로실행 -->

<!--^3  ?이용해서 undefined 에러제외
exdata.data 이렇게하면 exdata가없거나 undefined면 에러
exdata?.data 이렇게하면 있을때만 실행
한단계 더 도 가능 exdata?.data?.name
-->

<!--^4 함수바로 변수에 할당 사용과 콜백으로 사용방법차이
    const getcategory = (value:any) => {
      return value+"done"
    }
    const someFunction = (value:any) => {
                                        !함수를 반환시키려면 value() 중요!!
      console.log('someFunctionsomeFunction',value())
    }
 !함수 호출
 getcategory(value)
 !함수 호출하여 반환값을 result 변수에 할당
const result2 = getcategory('result');
console.log('result2', result2) //결과 : result2 resultdone

  !함수 반환
 () => getcategory(value)
  !콜백 함수로 사용하기 위해 함수 자체를 반환
const callback2 = () => getcategory('callback');
console.log('callback2', callback2)
  ~결과 : callback2 () => getcategory('callback')
 !콜백 함수로 사용하여 someFunction 호출
someFunction(callback2);
  ~결과 : someFunctionsomeFunction callbackdone
-->

-->

<!--^5 slice와 ... 이용하여 원소위치바꾸지않고 어레이 바꾸는방법
 setToDos(oldToDos =>{
      const tagetIndex = oldToDos.findIndex(toDo =>toDo.id=== id )
      const oldToDo = oldToDos[tagetIndex]
      const newToDo = {text,id, category:name as any}
      return [...oldToDos.slice(0,tagetIndex),newToDo,...oldToDos.slice(tagetIndex+1)]
})
-->

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
