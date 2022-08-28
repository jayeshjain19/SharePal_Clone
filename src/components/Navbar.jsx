import React, { useState } from 'react'
import styled from 'styled-components'
import { HikingOutlined, TwoWheelerOutlined, CameraAltOutlined, CameraRearOutlined, VideogameAssetOutlined, AlbumOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { mobile } from '../Responsive';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  margin-bottom: 20px;
  ${mobile({
  height: "130px"
})}
`

const Left = styled.div`
  /* flex: 1; */
  display: flex;
  justify-content: center;
  ${mobile({
  gridColumnStart: "1",
  gridColumnEnd: "4",
  marginBottom: "10px",
  marginTop: "5px"
})}
`

const Image = styled.img`
    margin-top: 5px;
    margin-left: 5px;
    cursor: pointer;
    width: 180px;
    ${mobile({
  marginTop: "0px",
  marginLeft: "0px"
})}

`

const Center = styled.div`
  flex: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({
  gridColumnStart: "1",
  gridColumnEnd: "4",
  marginBottom: "10px"
})}
`

const Lists = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ListItems = styled.li`
  list-style-type: none;
  margin: 10px;
  border: 1px solid black;
  padding: 5px;
  border-radius: 50px;
  cursor: pointer;
  display: flex;

  &:hover{
    color: rgb(9, 39, 235);
    border: 1px solid rgb(9, 39, 235);
  }

  ${mobile({
  display: "none"
})}
`

const CitySelect = styled.select`
  border: none;
  outline: none;
  font-size: 15px;
  border-bottom: 1px solid blue;
  margin-right: 5px;
  ${mobile({
  marginRight: "0px"
})}
`

const Option = styled.option``

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  ${mobile({
     gridColumnStart: "1",
     gridColumnEnd: "4",
     marginTop: "10px"
  })}
  
`

const LoginBox = styled.button`
  font-weight: 600;
  font-size: 15px;
  margin: 10px;
  padding: 5px 15px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgb(9, 39, 235);
  color: rgb(9, 39, 235);
  cursor: pointer;

  &:hover {
    background-color: rgb(9, 39, 235);
    color: white;
  }

  ${mobile({
  margin: "0px",
})}
`

const DropDown = styled.div`
    position: relative;
    display: inline-block;
    z-index: 2;
`

const DropDownItem = styled.div`
  display: block;
  position:absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
`

const Item = styled.div`
  color: black;
  padding: 10px 12px;
  text-decoration: none;
  display: block;
  font-weight : 500;
  &:hover{
    background-color: #ddd;
  }
`

const DropButton = styled.button`
  font-weight: 600;
  font-size: 15px;
  margin: 10px;
  padding: 5px 15px;
  background-color: rgb(9, 39, 235);
  color: white;
  cursor: pointer;
  border: none;
  outline: none;
`

const Navbar = () => {

  const [show, setShow] = useState(false);
  
  const showFunction = ()=>{
    setShow(!show)
  }
  
  return (
    <Container>
      <Left>
        <Image src="https://i.ibb.co/tqF5HMZ/Share-Pal-Logo2-1.jpg" />
      </Left>
      <Center>
        <Lists>
          <CitySelect>
            <Option disabled selected>Select City</Option>
            <Option>Banglore</Option>
            <Option>Mumbai</Option>
            <Option>Delhi</Option>
            <Option>Gurgaon</Option>
            <Option>Noida</Option>
            <Option>Ghaziabad</Option>
            <Option>Hyderabad</Option>
            <Option>Ahmedabad</Option>
            <Option>Pune</Option>
          </CitySelect>
          <ListItems><HikingOutlined style={{ marginRight: "5px" }} />Trekking</ListItems>
          <ListItems><TwoWheelerOutlined style={{ marginRight: "5px" }} />Ridding</ListItems>
          <ListItems><CameraRearOutlined style={{ marginRight: "5px" }} />GoPro</ListItems>
          <ListItems><CameraAltOutlined style={{ marginRight: "5px" }} />DSLR</ListItems>
          <ListItems><VideogameAssetOutlined style={{ marginRight: "5px" }} />PS4/XBOX</ListItems>
          <ListItems><AlbumOutlined style={{ marginRight: "5px" }} />Games</ListItems>
          <ShoppingCartOutlined style={{ marginLeft: "35px", cursor: "pointer" }} />
        </Lists>
      </Center>
      <Right>
        <DropDown>
          <LoginBox onClick={() => showFunction()}>
            Login/SignUp
          </LoginBox>
          {show ?
            <DropDownItem>
              <DropButton>Login/SignUp</DropButton>
              <Item>My Wallet</Item>
              <Item>My Account</Item>
              <Item>My Orders</Item>
              <Item>Refer a Friend</Item>
              <Item>My Cart</Item>
              <Item>LogOut</Item>
            </DropDownItem> : null
          }
        </DropDown>
      </Right>
    </Container>
  )
}

export default Navbar