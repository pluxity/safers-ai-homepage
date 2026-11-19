import { Navigate, Route, Routes } from 'react-router'
import { AdminLayout } from './layouts/AdminLayout.tsx'
import { InquiriesPage } from './pages/InquiriesPage.tsx'
import { LoginPage } from './pages/LoginPage.tsx'

export function App() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route element={<AdminLayout />}>
        <Route path="inquiries" element={<InquiriesPage />} />
        <Route path="*" element={<Navigate to="/inquiries" replace />} />
      </Route>
    </Routes>
  )
}
