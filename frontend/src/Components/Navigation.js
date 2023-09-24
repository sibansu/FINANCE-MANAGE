import React from 'react'
import styled from 'styled-components'
import profile from "../Images/profile.png"
import { menuItems } from '../Utils/menuItems'
import { Link, useNavigate } from 'react-router-dom';
function Navigation({active, setActive}) {
    const navigate = useNavigate()
    const handleItemClick = (itemNumber,e) => {
        setActive(itemNumber);
        <Link to={e}></Link>
        navigate(e)
      };
      function handleOnClick(e, s){
        setActive(e)
        
      }
    return (
        
        <NavStyled>
            <div className="user-con">
                <img src={profile} alt="" />
                <div className="text">
                    <h2>Sibansu</h2>
                    <p>Your money</p>
                </div>
            </div>
            <ul className="menu-items">
                {
                    menuItems.map((item) => {
                        return <li key={item.id}
                            onClick={()=>{handleItemClick(item.id, item.link); }}
                            className={active===item.id ? 'active':''}
                        >
                            {item.icon}
                            <span>{item.title}</span>
                        </li>
                    })
                }
            </ul>
            <div className="bottom-nav">
                <li>
                    <i className="fa-solid fa-right-from-bracket"></i> Signout
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.div`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px solid white;
        }
        h2{
            color: #6060d2;
        }
        p{
            color: #6060d1;
        }
    }
    .menu-items{
        display: flex;
        flex-direction: column;
        flex: 1;
        li{
            color: rgba(34, 34, 96, 0.6);
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: 0.7rem 0;
            cursor: pointer;
            transition: all .4s ease-in-out;
            padding-left: 1rem;
            position: relative;
        }
        i{
            color: rgba(34, 34, 96, 0.6);
            font-size: 1.4rem;
            transition: all 0.4s ease-in-out;
        }
    }
    .active{
        color: rgba(34,34,96,1) !important;
        i{
            color: rgba(34,34,96,1);
        }
        &::before{
            content: "";
            position: absolute;
            left: 0%;
            top: 0;
            width: 5px;
            height: 100%;
            background-color: #222260;
            border-radius: 0 10px 0 10px;
        }
    }
`

export default Navigation