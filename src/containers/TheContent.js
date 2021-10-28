import { CContainer, CFade } from "@coreui/react";
import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// routes config
import routes from "../routes";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
// const {data} =  Authentication.isAuthenticated()
const TheContent = ({ authenticated }) => {
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <CFade>
                        {authenticated ? (
                          <route.component {...props} />
                        ) : (
                          <Redirect
                            to={{
                              pathname: "/login",
                              state: { from: props.location },
                            }}
                          />
                        )}
                      </CFade>
                    )}
                  />
                )
              );
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  );
};

export default React.memo(TheContent);
