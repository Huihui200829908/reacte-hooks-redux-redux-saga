import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '@rakuten-rex/button';
import Panel from '@rakuten-rex/panel';
import FormGroup from '@rakuten-rex/form-group/FormGroup';
import TextFieldLabel from '@rakuten-rex/text-field/TextFieldLabel';
import PasswordLabel from '@rakuten-rex/password/PasswordLabel';
import _ from 'lodash';
import { item } from '../../actions';
import LogoBase from '../../asset/logo.svg';
import {
  loginSelector
} from '../../selectors/selector';
import './login.scss'
interface User {
  id?: number,
  username?: string,
  email?: string,
  role?: string,
  name?: string,
  password?: string
}
export const Login = () => {
  const dispatch = useDispatch()
  const loginData = useSelector(loginSelector.dataSelector);
  const userData = useSelector(loginSelector.userSelector);
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const handleLogin = () => {
    dispatch(item.login(userName,password));
  }
  useEffect(() => {
    dispatch(item.getUsers())
  }, [dispatch])
  //ログインAPIはログイン状態は取得できますけど、ログインユーザー情報取得できないため、以下TODOコードを実装
  localStorage.setItem("users",JSON.stringify(userData));
  localStorage.setItem("usersname",userName);
  const user = _.find(userData, function(o:User) { return o.username === userName; });
  localStorage.setItem("user",JSON.stringify(user));

  return <div
   className={'rex-sign-up-desktop rex-sign-up-bg-a'} 
   role="presentation"
   style={{
     overflow:"hidden",
     height: "100vh"
   }}
  >
  {loginData&&loginData.login_status?(
    <Redirect to={{
      pathname: user&&user.role === 'admin'?"/main":"/users/info",
      state: { userName }
    }}></Redirect>
  ):null}
  <Panel
    shadow={4}
    px={5}
    pt={3}
    pb={8}
    style={{
      '--rex-panel-border-radius': '.5rem',
    }}
  >
    <section>
      <img src={LogoBase} alt={"logo"}/>
      <p className="rex-sign-up-desktop-title">{"One Account for all"}</p>
      <form>
        <fieldset>
          <FormGroup mb={4}>
            <TextFieldLabel
              name={'email'}
              placeholder=""
              htmlFor={'email'}
              label={'メールアドレス'}
              labelId={'signup_email'}
              style={inputStyle}
              onChange={(e:any)=>{
                setUserName(e.target.value)
              }}
            />
          </FormGroup>
          <FormGroup mb={5}>
            <PasswordLabel
              name={"password"}
              placeholder=""
              htmlFor={"password"}
              label='パスワード'
              labelId='signup_password'
              style={passwordStyle}
              onChange={(e:any)=>{
                setPassword(e.target.value)
              }}
            />
          </FormGroup>
          <FormGroup mb={4} className="rex-demo-container">
            <Button style={buttonStyle} onClick={()=>{
              handleLogin()
            }}>{'登録する'}</Button>
          </FormGroup>
        </fieldset>
      </form>
    </section>
  </Panel>
  <footer className="rex-demo-footer">
    <div>{"Base"}</div>
  </footer>
</div>
}

const inputStyle = {
  '--rex-text-field-theme-border': '#1e2678',
  '--rex-text-field-theme-placeholder': '#FF79D1',
  '--rex-text-field-theme-text': '#333',
  '--rex-text-field-theme-hover-text': '#1e2678',
  '--rex-text-field-theme-hover-border': '#1e2678',
  '--rex-text-field-theme-hover-placeholder': '#FFACE3',
  '--rex-text-field-theme-active-text': '#1e2678',
  '--rex-text-field-theme-active-border': '#1e2678',
  '--rex-text-field-theme-active-placeholder': '#1e2678',
  '--rex-text-field-label-theme-text': '#333',
  '--rex-text-field-label-theme-hover-text': '#1e2678',
  '--rex-text-field-label-theme-active-text': '#1e2678',
  '--rex-password-theme-icon': '#1e2678',
  '--rex-password-theme-hover-icon': '#1e2678',
  '--rex-password-theme-active-icon': '#1e2678',
}
const passwordStyle = {
  '--rex-password-theme-text': '#333',
  '--rex-password-theme-border': '#1e2678',
  '--rex-password-theme-hover-text': '#1e2678',
  '--rex-password-theme-hover-border': '#1e2678',
  '--rex-password-theme-active-text': '#1e2678',
  '--rex-password-theme-active-border': '#1e2678',
  '--rex-password-theme-icon': '#1e2678',
  '--rex-password-theme-hover-icon': '#1e2678',
  '--rex-password-theme-active-icon': '#1e2678',
  '--rex-password-label-theme-text': '#333',
  '--rex-password-label-theme-hover-text': '#1e2678',
  '--rex-password-label-theme-active-text': '#1e2678',
}
const buttonStyle = {
  '--rex-button-theme-background': '#1e2678',
  '--rex-button-theme-text': '#fff',
  '--rex-button-theme-border': '#1e2678',
  '--rex-button-theme-hover-background': '#1e2678',
  '--rex-button-theme-hover-text': '#fff',
  '--rex-button-theme-hover-border': '#1e2678',
  '--rex-button-theme-active-background': '#1e2678',
  '--rex-button-theme-active-text': '#fff',
  '--rex-button-theme-active-border': '#1e2678',
  '--rex-button-theme-focus-background': '#1e2678',
  '--rex-button-theme-focus-text': '#fff',
  '--rex-button-theme-focus-border': '#1e2678',
  '--rex-button-border-radius': '2.5rem',
  '--rex-button-padding-top-bottom': '0.6875rem',
  '--rex-button-min-width': '11.5rem',
}