import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CRow
} from '@coreui/react'
import { mainSelector } from '../../../selectors/selector';
import { item } from '../../../actions';
import { Common } from '../../common/index';
import './main.scss'
import '../../../scss/style.scss';

export const UserCrate = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const mainData = useSelector(mainSelector.SaveUserDataSelector);
  const [username, setUsername]: [string, any] = useState("");
  const [email, setEmail]: [string, any] = useState("");
  const [role, setRole]: [string, any] = useState("");
  const [name, setName]: [string, any] = useState("");
  const [password, setPassword]: [string, any] = useState("");

  const handleSub = () => {
    dispatch(item.saveUser({username,email,role,name,password}));
  }

  useEffect(() => {
    if(mainData&&mainData.data){
      dispatch(item.saveUserSuccess(null))
      history.push("/users/manager")
    }
  }, [mainData,history,dispatch])
  return <Common>
    <CRow>
      <CCol xs="12" sm="6">
        <CCard>
          <CForm className="form-horizontal"  onSubmit={(event)=>{
                handleSub();
                event.preventDefault();
            }} >
            <CCardHeader className="user-create-header">
              User Info
              <CButton type="submit" size="sm"color="success">save</CButton>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="username">User Name</CLabel>
                    <CInput id="username" placeholder="Enter username" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                      setUsername(e.target.value);
                    }} required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="name">Name</CLabel>
                    <CInput id="name" placeholder="Enter name" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                      setName(e.target.value);
                    }} required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="Email">Email</CLabel>
                    <CInput id="Email" placeholder="Enter E-mail" required onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                      setEmail(e.target.value);
                    }}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="role">role</CLabel>
                    <CInput id="role" placeholder="Enter role" required
                     onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                      setRole(e.target.value);
                    }}/>
                  </CFormGroup>
                </CCol>
              </CRow>

              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="password">password</CLabel>
                    <CInput id="password" type="password"  placeholder="Enter password" required
                     onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                      setPassword(e.target.value);
                    }} />
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
          </CForm>

        </CCard>
      </CCol>
    </CRow>
  </Common>
}