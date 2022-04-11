import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { Form } from './Pages/Form'
import { Report } from './Pages/Report'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/report' element={<Report />} />
      </Routes>
    </Router>
  )
}