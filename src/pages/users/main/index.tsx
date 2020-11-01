import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  CCard,
  CBadge,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination
} from '@coreui/react'
import {
  loginSelector,mainSelector
} from '../../../selectors/selector';
import { item } from '../../../actions';
import { Common } from '../../common/index';
import './main.scss'
import '../../../scss/style.scss';


export const MainContext: React.Context<{}> = React.createContext({});

export const Main = () => {
  const [page, setPage]: [number, any] = useState(1);
  const dispatch = useDispatch()
  const history = useHistory();
  const userData = useSelector(loginSelector.userSelector);
  const delData = useSelector(mainSelector.delUserDataSelector);
  
  const handleDel = (id: any) => {
    dispatch(item.deleteUser(id));
  }
  
  useEffect(() => {
    dispatch(item.getUsers());
  }, [delData,dispatch])


  return <Common>
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            Users
            &nbsp;&nbsp;
            <CBadge
              onClick={() => history.push("/users/create")}
              color={'primary'}>
              Create
            </CBadge>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={userData}
              fields={[
                { key: 'name', _classes: 'font-weight-bold' },
                'role', 'email', 'Edit'
              ]}
              hover
              striped
              itemsPerPage={5}
              activePage={page}
              clickableRows
              scopedSlots={{
                'Edit':
                  (item: any) => (
                    <td className="edit-area">
                      <CBadge
                        onClick={() => history.push({
                          pathname: `/users/edit/${item.id}`,
                          state: { user: item }
                        })}
                        color={'success'}>
                        Edit
                      </CBadge>
                      <CBadge
                        onClick={() => handleDel(item.id)}
                        color={'danger'}>
                        delete
                      </CBadge>
                    </td>
                  )
              }}
            />
            <CPagination
              activePage={page}
              onActivePageChange={(e: number) => {
                setPage(e)
              }}
              pages={userData ? parseInt(userData.length / 5 + (userData.length % 5  === 0 ? 0 : 1) + "") : 1}
              doubleArrows={false}
              align="center"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </Common>
}