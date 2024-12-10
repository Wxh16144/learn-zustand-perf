import { App } from 'antd'
import { Provider as StoreProvider, createStore } from './store'

const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <App>
      <StoreProvider createStore={createStore}>
        {children}
      </StoreProvider>
    </App>
  )
}

export default Provider;