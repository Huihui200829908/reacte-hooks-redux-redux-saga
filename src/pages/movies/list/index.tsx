import React, { useState, useEffect } from 'react';
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
  moviesSelector
} from '../../../selectors/selector';
import { item } from '../../../actions';
import { Common } from '../../common/index';
import './main.scss'


export const MainContext: React.Context<{}> = React.createContext({});

export const MoviesList = () => {
  const [page, setPage]: [number, any] = useState(1);
  const dispatch = useDispatch()
  const history = useHistory();
  const moviesListData = useSelector(moviesSelector.movieListSelector);
  const movieDelSelector = useSelector(moviesSelector.movieDelSelector);

  const handleDel = (id: any) => {
    dispatch(item.deleteMovies(id));
  }

  useEffect(() => {
    dispatch(item.getMovies());
  }, [movieDelSelector,dispatch])

  return <Common>
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            Movies
            &nbsp;&nbsp;
            <CBadge
              onClick={() => history.push("/Movies/create")}
              color={'primary'}>
              Create
            </CBadge>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={Array.isArray(moviesListData)?moviesListData:[]}
              fields={[
                { key: 'movie_name', _classes: 'font-weight-bold' },
                'douban_id', 'director', 'lead_actors', 'movie_type', 'Edit'
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
                          pathname: `/Movies/edit/${item.id}`,
                          state: { movie: item }
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
              pages={moviesListData ? parseInt(moviesListData.length / 5 + (moviesListData.length % 5 === 0 ? 0 : 1) + "") : 1}
              doubleArrows={false}
              align="center"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </Common>
}