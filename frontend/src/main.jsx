import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import './index.css'
import TeamMembers from './TeamMembers.jsx'
import AddTeamMember from './AddTeamMember.jsx';
import EditTeamMember from './EditTeamMember.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<TeamMembers />} />
      <Route path="add_team_member" element={<AddTeamMember />} />
      <Route path="edit_team_member/:id" element={<EditTeamMember />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
