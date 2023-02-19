import React from 'react'
import { Route } from 'react-router-dom';
import FooterHome from '../components/FooterHome';
import HeaderHome from '../components/HeaderHome';

export default function HomeTemlate(props) {
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <>
            <HeaderHome {...propsRoute} />
            <props.component {...propsRoute} />
            <FooterHome {...propsRoute} />
          </>
        );
      }}
    />
  )
}
