import { createRoot } from 'react-dom/client'
import './app/layout/styles.css'
import App from './app/layout/App.tsx'
import 'semantic-ui-css/semantic.min.css'
import { store, StoreContext } from './app/stores/store.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StoreContext.Provider value={store}>
    <RouterProvider router={router} />
  </StoreContext.Provider>
)
