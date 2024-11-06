import React from "react";
import styles from "./Header.module.css";
import Button from "../UI/Button";
import { NavLink } from "react-router-dom";
import LeftNavi from "../left-navigation/LeftNavi";

const Header = ({
  logIn,
  logOut,
  onCreateTutorDataList,
  onTutorList,
  objDataFromTutorForm,
  convertData,
  createOrderButtonOn,
  onFetchRequestData,
  fetchRequestData,
  onGetStudOrders,
  onGetTutorOrders,
  onToggleMain,
}) => {



  // console.log(  logIn, logOut); //меморированное значение в зависимости от событий

  // const checkModals = () => {
  //   console.log(error);
  //   if (error) {
  //     setError(true);
  //   }
  // };
  const postLogOutHandler = async () => {
    const response = await fetch(
      "http://localhost:8081/api/v0.0.1/auth/signout",
      {
        method: "POST",
        body: JSON.stringify(),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );
    console.log(response);
    if (response.ok) {
      window.location.reload();
    } else {
      console.error("Logout failed");
    }
    localStorage.clear();
  };

  return (
    <header className={styles.header}>
      <NavLink
        className={styles.mainHomeBtn}
        activeClassName={styles.active}
        to="/Main"
      >
        <h1>Home</h1>
      </NavLink>

      <ul className={styles.navButtons}>
        <li>
          <Button>
            <NavLink activeClassName={styles.active} to="/About">
              ABOUT
            </NavLink>
          </Button>
        </li>

        <li>
          <Button
            onClick={() => {
              onCreateTutorDataList();
              onToggleMain();
            }}
          >
            <NavLink
              activeClassName={styles.active}
              to="/TutorMarketWithFilter"
            >
              TUTOR MARKET
            </NavLink>
          </Button>
        </li>

        {logIn && (
          <li>
            <Button  onClick={onToggleMain}>
              <NavLink activeClassName={styles.active} to="/Registration">
                REGISTRATION
              </NavLink>
            </Button>
          </li>
        )}

        {logIn && (
          <li>
            <Button onClick={onToggleMain}>
              <NavLink activeClassName={styles.active} to="/Login">
                LOGIN
              </NavLink>
            </Button>
          </li>
        )}

        {logOut && (
          <li>
            <Button
              onClick={() => {
                postLogOutHandler();
              }}
            >
              <NavLink activeClassName={styles.active} to="/Main">
                SIGNOUT
              </NavLink>
            </Button>
          </li>
        )}
        {logOut && (
          <li>
            <LeftNavi
              onTutorList={onTutorList}
              objDataFromTutorForm={objDataFromTutorForm}
              convertData={convertData}
              createOrderButtonOn={createOrderButtonOn}
              onFetchRequestData={onFetchRequestData}
              fetchRequestData={fetchRequestData}
              onGetStudOrders={onGetStudOrders}
              onGetTutorOrders={onGetTutorOrders}
              onToggleMain={onToggleMain}
            />
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
