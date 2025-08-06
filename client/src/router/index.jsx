import EventSection from "@/components/pages/EventSection";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { EVENT_SECTION_ROUTE } from "./routes";
import Layouts from "@/layouts/Layout";

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
        element: <EventSection />,
      },
    ],
  },
]);
