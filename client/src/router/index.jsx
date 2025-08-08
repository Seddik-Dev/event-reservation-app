import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ADMIN_DASHBOARD_ROUTE, EVENT_DETAILS_ROUTE, EVENT_SECTION_ROUTE } from "./routes";
import Layouts from "@/layouts/Layout";
import AdminDashboard from "@/components/pages/admin/AdminDashboard";
import EventDetails from "@/components/pages/EventDetails";
import LandingPage from "@/components/pages/LandingPage";

export const router = createBrowserRouter([
  {
    element: <Layouts />,
    children: [
      {
        path: "*",
        element: <p>Not Found.</p>,
      },
      {
        path: EVENT_SECTION_ROUTE,
        element: <LandingPage />,
      },
      {
        path: ADMIN_DASHBOARD_ROUTE,
        element: <AdminDashboard />,
      },
      {
        path: EVENT_DETAILS_ROUTE,
        element: <EventDetails />,
      },
    ],
  },
]);
