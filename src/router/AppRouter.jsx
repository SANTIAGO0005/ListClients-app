
import { Navigate, Route, Routes } from "react-router-dom"
import { ListClientPage } from "../listclient/pages/ListClientPage"


export const AppRouter = () => {
    return (
      <Routes>
            <Route path="/" element={ <ListClientPage/> } />
            <Route path="/*" element={ <Navigate to='/'/> } />
      </Routes>
    )
}

    