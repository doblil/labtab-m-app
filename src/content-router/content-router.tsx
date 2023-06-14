import { Routes, Route } from "react-router-dom"
import Inf from "../screens/inf/inf"
import Drafts from "../screens/drafts/drafts"
import Scan from "../screens/scan/scan"
import Desc from "../screens/desc/desc"
import History from "../screens/history/history"
import ConfirmMessage from "../components/confirmMessage/confirmMessage"
import Auth from "../screens/auth/auth"

export const ContentRouter = () => {
    return (
    <Routes>
		<Route path="/inf" element={<Inf/>}/>
		<Route path="/drafts" element={<Drafts/>}/>
		<Route path="/scan" element={<Scan/>}/>
		<Route path="/desc" element={<Desc/>}/>
		<Route path="/history" element={<History/>}/>

		<Route path="/confirmMessage" element={<ConfirmMessage/>}/>
		<Route path="/auth" element={<Auth/>}/>
    </Routes>
    )
}