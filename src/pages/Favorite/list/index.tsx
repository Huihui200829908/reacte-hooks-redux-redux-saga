import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  CInput,
  CCard,
  CBadge,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination
} from '@coreui/react';

import { moviesSelector } from '../../../selectors/selector';
import { item } from '../../../actions';
import { Common } from '../../common/index';
import './main.scss';

export const FavoriteList = () => {
  const [page, setPage]: [number, any] = useState(1);
  const dispatch = useDispatch()
  const history = useHistory();
  const moviesListData = useSelector(moviesSelector.movieFavoriteSelector);

  
  const [rank, setRank]: [string, any] = useState("");
  const [tag, setTag]: [string, any] = useState("");
  const [watch_status, setWatch_status]: [string, any] = useState("");
  const [movie_name, setMovie_name]: [string, any] = useState("");

  const handleDel = (id: any) => {
    dispatch(item.deleteMovies(id));
  }
  const search = () => {
    dispatch(item.SearchMovies({rank,tag,watch_status,movie_name}));
  }
  useEffect(() => {
    dispatch(item.SearchMovies(null));
  }, [dispatch])

  return <Common>
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            <div>
              Movies
              &nbsp;&nbsp;
              <CBadge
                onClick={() => history.push("/Movies/create")}
                color={'primary'}>
                Create
              </CBadge>
            </div>
            <br/>
            <div>
              <span style={{
                width: "230px",
                display: "inline-block"
              }}>
                <CInput id="movie_name" placeholder="watch name" onChange={
                  (e:React.ChangeEvent<HTMLInputElement>)=> setMovie_name(e.target.value)
                } />
              </span>
              <span style={{
                width: "230px",
                display: "inline-block"
              }}>
                <CInput id="rank" placeholder="rank" onChange={
                  (e:React.ChangeEvent<HTMLInputElement>)=> setRank(e.target.value)
                } />
              </span>
               &nbsp;&nbsp;
              <span style={{
                width: "230px",
                display: "inline-block"
              }}>
                <CInput id="tag" placeholder="tag" onChange={
                  (e:React.ChangeEvent<HTMLInputElement>)=> setTag(e.target.value)
                } />
              </span>
                &nbsp;&nbsp;
              <span style={{
                width: "230px",
                display: "inline-block"
              }}>
                <CInput id="watch_status" placeholder="watch status" onChange={
                  (e:React.ChangeEvent<HTMLInputElement>)=> setWatch_status(e.target.value)
                } />
              </span>
              <span>
                &nbsp;&nbsp;
                  <CBadge
                    onClick={() => search()}
                    color={'success'}>
                    Search
                  </CBadge>
              </span>
            </div>
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