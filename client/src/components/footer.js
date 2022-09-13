import React from 'react';
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';
import Logo from "../assets/logo.png"
import "../css/footer.css"
import logo from "../logo.svg";

const footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-3" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox alignSelf="center">
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={Logo} width="250px" />
            </a>
            <CDBBox className="mt-5" display="flex">
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3 p-2">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <div style={{display: 'flex', flexDirection:'row', margin: '0 auto'}} >
          <CDBBox>
            <p className="h5 mb-10" style={{ fontWeight: '600' }}>
            <div className='border-avatar'>
              <img src={logo} alt="logo" className='avatar'/>
            </div>
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer'}}>
            <h6>Đinh Xuân Thiên Sơn</h6>
              {/* <CDBFooterLink href="/">Resources</CDBFooterLink>
              <CDBFooterLink href="/">About Us</CDBFooterLink>
              <CDBFooterLink href="/">Contact</CDBFooterLink>
              <CDBFooterLink href="/">Blog</CDBFooterLink> */}
            </CDBBox>
          </CDBBox>
          <div style={{padding: '3.5rem'}}></div>
          <CDBBox>
            <p className="h5 mb-10" style={{ fontWeight: '600' }}>
            <div className='border-avatar'>
              <img src={logo} alt="logo" className='avatar'/>
            </div>
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
            <h6>Nguyễn Trung Nguyên</h6>
              {/* <CDBFooterLink href="/">Windframe</CDBFooterLink>
              <CDBFooterLink href="/">Loop</CDBFooterLink>
              <CDBFooterLink href="/">Contrast</CDBFooterLink> */}
            </CDBBox>
          </CDBBox>
          <div style={{padding: '3.5rem'}}></div>
          <CDBBox>
            <p className="h5 mb-10" style={{ fontWeight: '600' }}>
            <div className='border-avatar'>
              <img src={logo} alt="logo" className='avatar'/>
            </div>
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
              <h6>Nguyễn Văn Nhựt</h6>
              {/* <CDBFooterLink href="/">Support</CDBFooterLink>
              <CDBFooterLink href="/">Sign Up</CDBFooterLink>
              <CDBFooterLink href="/">Sign In</CDBFooterLink> */}
            </CDBBox>
          </CDBBox>
          </div>
        </CDBBox>
        <small className="text-center mt-5">&copy; KingCost, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
  );
}
export default footer;