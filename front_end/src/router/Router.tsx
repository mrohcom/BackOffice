import React from "react";
import { store } from "./../index";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../components/pages/LoginPage";
import RegisterPage from "../components/pages/RegisterPage";
import EmployeePage from "../components/pages/Employee/EmployeePage";
import EmployeeCreatepage from "../components/pages/Employee/EmployeeCreatepage";
import EmployeeEditePage from "../components/pages/Employee/EmployeeEditePage";
import NewsPage from "../components/pages/News/NewsPage";
import NewsCreatePage from "../components/pages/News/NewsCreatePage";
import NewsEditePage from "../components/pages/News/NewsEditePage";
import ReserveMeetingRoomPage from "../components/pages/MeetingRoom/ReserveMeetingRoomPage";
import ReserveMeetingRoomCreatePage from "../components/pages/MeetingRoom/ReserveMeetingRoomCreatePage";
import ReserveMeetingRoomEditePage from "../components/pages/MeetingRoom/ReserveMeetingRoomEditePage";
import MeetingRoomPage from "../components/pages/MeetingRoom/MeetingRoomPage";
import MeetingRoomCreatePage from "../components/pages/MeetingRoom/MeetingRoomCreatePage";
import MeetingRoomEditPage from "../components/pages/MeetingRoom/MeetingRoomEditPage";

type Props = {};

export default function Router({}: Props) {
  const auth = store.getState().loginReducer.result;
  return (
    <Routes>
      {auth ? (
        <>
          <Route path="/employee" element={<EmployeePage />} />
          <Route path="/employee/create" element={<EmployeeCreatepage />} />
          <Route path="/employee/edit/:id" element={<EmployeeEditePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/create" element={<NewsCreatePage />} />
          <Route path="/news/edit/:id" element={<NewsEditePage />} />

          <Route
            path="/reservemeetingroom"
            element={<ReserveMeetingRoomPage />}
          />
          <Route
            path="/reservemeetingroom/create"
            element={<ReserveMeetingRoomCreatePage />}
          />
          <Route
            path="/reservemeetingroom/edit/:id"
            element={<ReserveMeetingRoomEditePage />}
          />

          {/* Admin Route */}
          <Route path="/meetingroom" element={<MeetingRoomPage />} />
          <Route
            path="/meetingroom/create"
            element={<MeetingRoomCreatePage />}
          />
          <Route
            path="/meetingroom/edit/:id"
            element={<MeetingRoomEditPage />}
          />
          <Route path="*" element={<Navigate to="/news" />} />
          {/* 404 Route */}
        </>
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<NotFound />} />
        </>
      )}
    </Routes>
  );
}

const NotFound = () => (
  <div>
    <h1>404 - Not Found</h1>
  </div>
);
