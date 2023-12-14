import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Navigate,useLocation, useNavigate } from 'react-router-dom';


//useEffet랑 stylecomponent 복기
const Nav = () => {
    const[show,setShow] = useState(false);
    const {pathname} = useLocation();
    // useLocation 현재 URL 정보를 가져오는 기능
    const [inputValue,setInputValue] = useState("");
    const navi = useNavigate();

 

    

    useEffect(()=>{
        window.addEventListener('scroll', ()=> {
            console.log(window.scrollY)
            if(window.scrollY  > 50){
                setShow(true);
            } else{
                setShow(false);
            }
        })
        return () => {
            window.removeEventListener('scroll',()=>{})
        }
    }, [])




    const handleChange = (e) =>{
        setInputValue(e.target.value);
        navi(`/mvsearch?q=${e.target.value}`)
    }
    console.log('useLocation.search', useLocation().search)

  return (
        <NavWrapper show={show}>
            <Logo>
                <img
                alt = "Coupang Play Logo"
                src= "/images/03_SVG/쿠팡플레이_BI_combination_상하조합_white01.svg"
                onClick = {()=> window.location.href ="/"}>
                </img>
            </Logo>
           
            {pathname === "/" ? <LoginHere>Login</LoginHere> :
                             <Input value={inputValue}
                                onChange={handleChange} className='nav_input' type='text' placeholder='Search'/>}

        </NavWrapper>
  )
}

export default Nav

    const LoginHere = styled.a `
        background-color: rgba(0,0,0, 0.6);
        padding: 8px 16px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        border: 1px solid #f9f9f9;
        transition: all0,2s ease 0;

        &:hover {
            background-color:#f9f9f9;
            color:black;
            border-color: transparent;

        }
    `;

    const Input = styled.input `
        position: fixed;
        left:50%;
        transform: traaanslate(-50%, 0);
        background-color: rgba(0,0,0, 0.582);
        border-radius: 5px;
        color:white;
        padding:5px;
        border:none;


    `;


const NavWrapper = styled.nav`
    position:fixed;
    top:0;
    left:0;
    height:150px;
   
    background-color: ${props =>props.show ? "#090b13" : "transparent"};
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing:16px;
    z-index: 3;
    
`

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;


//useLocation
// useNavigate : HTML에서는 <a> 태그를 쓰거나 그랬는데 그거랑 비슷하다 페이지의 경로를 넣어서, 특정 이벤트 실행 -> 동작
// 해당 경로로 이동하는것을 도와줌 (useNavigate)

//useNavigate를 import 해줘야함 ->  변수에 반환해서 넣기 -> 해당 주소값 URL 연결시켜주면 됨



//Debounce 사용자가 미리 결정된 시간 동안 타이핑 하는걸 멈출 떄까지 keyup 이벤트 처리 지연 etc