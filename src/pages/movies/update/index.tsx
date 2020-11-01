import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory,useLocation } from 'react-router-dom';
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
import { moviesSelector } from '../../../selectors/selector';
import { item } from '../../../actions';
import { Common } from '../../common/index';
import './main.scss'
import '../../../scss/style.scss';

export const MovieUpdate = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const location:any = useLocation();
  const { movie } = location.state;
  const mainData = useSelector(moviesSelector.movieSaveSelector);
  const [movie_name, setMovie_name]: [string, any] = useState(movie.movie_name);
  const [douban_id, setDouban_id]: [string, any] = useState(movie.douban_id);
  const [director, setDirector]: [string, any] = useState(movie.director);
  const [lead_actors, setLead_actors]: [string, any] = useState(movie.lead_actors);
  const [movie_type, setMovie_type]: [string, any] = useState(movie.movie_type);

  const handleSub = () => {
    dispatch(item.updateMovies({id:movie.id,movie_name,douban_id,director,lead_actors,movie_type}));
  }

  useEffect(() => {
    if( mainData && mainData.data&&mainData.data.size!==0 ) {
      dispatch(item.updateMoviesSuccess(null));
      history.push("/Movies");
    }
  }, [mainData, history, dispatch]);

  return <Common>
    <CRow>
      <CCol xs="12" sm="6">
        <CCard>
          <CForm className="form-horizontal"  onSubmit={(event)=>{
              handleSub();
              event.preventDefault();
            }} >
            <CCardHeader className="user-create-header">
              Movies Info
              <CButton type="submit" size="sm"color="success">save</CButton>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="movie_name">movie Name</CLabel>
                    <CInput id="movie_name" value={movie_name} placeholder="Enter Movie Username" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                      setMovie_name(e.target.value);
                    }} required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="douban_id">douban id</CLabel>
                    <CInput id="douban_id" value={douban_id} placeholder="Enter douban id" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                      setDouban_id(e.target.value);
                    }} required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="director">Director</CLabel>
                    <CInput id="director" value={director} placeholder="Enter director" required onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                      setDirector(e.target.value);
                    }}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="lead_actors">lead actors</CLabel>
                    <CInput id="lead_actors" value={lead_actors} placeholder="Enter lead actors" required
                     onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                      setLead_actors(e.target.value);
                    }}/>
                  </CFormGroup>
                </CCol>
              </CRow>

              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="type">movie type</CLabel>
                    <CInput id="type" value={movie_type} placeholder="Enter movie type" required
                     onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                      setMovie_type(e.target.value);
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