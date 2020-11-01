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
} from '@coreui/react';
import _ from 'lodash';
import { mainSelector } from '../../../selectors/selector';
import { item } from '../../../actions';
import { Common } from '../../common/index';
import './main.scss'
import '../../../scss/style.scss';
interface User {
  id?: number,
  username?: string,
  email?: string,
  role?: string,
  name?: string,
  password?: string
}
export const UserInfo = () => {

  const dispatch = useDispatch()
  const history = useHistory();
  const mainData = useSelector(mainSelector.SaveUserDataSelector);

  //ログインAPIはログイン状態は取得できますけど、ログインユーザー情報取得できないため、以下TODOコードを実装
  let UserStage = localStorage.getItem("users");
  let userList = [];
  if(UserStage)
     userList = JSON.parse(UserStage);
  const currentUserName = localStorage.getItem("usersname");
  const user = _.find(userList, function(o:User) { return o.username === currentUserName; });
  const [username]: [string, any] = useState(user.username);
  const [email, setEmail]: [string, any] = useState(user.email);
  const [role]: [string, any] = useState(user.role);
  const [name, setName]: [string, any] = useState(user.name);
  const [password, setPassword]: [string, any] = useState(user.password);

  const handleSub = () => {
    dispatch(item.updateUser({id: user.id,username,email,role,name,password}));
  }
  useEffect(() => {
    if(mainData&&mainData.data){
      dispatch(item.updateUserSuccess(null))
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
                    <CInput id="username"
                      value={username} placeholder="Enter username" readOnly />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="name">Name</CLabel>
                    <CInput id="name" placeholder="Enter name"
                      value={name}
                      onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                      setName(e.target.value);
                    }} required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="Email">Email</CLabel>
                    <CInput id="Email"
                      value={email}  placeholder="Enter E-mail" required onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                      setEmail(e.target.value);
                    }}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="role">role</CLabel>
                    <CInput id="role"
                      value={role} placeholder="Enter role" readOnly/>
                  </CFormGroup>
                </CCol>
              </CRow>

              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="password">password</CLabel>
                    <CInput id="password" 
                      value={password} type="password"  placeholder="Enter password" required
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