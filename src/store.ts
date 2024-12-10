
import { createWithEqualityFn } from 'zustand/traditional'
import { shallow } from 'zustand/shallow'
import { devtools } from 'zustand/middleware'
import type { StateCreator } from 'zustand/vanilla';
import { createContext } from 'zustand-utils';
import type { StoreApi } from 'zustand';

type Address = {
  street: string
  city: string
}

type States = {
  name: string
  address: Address[]
}

type Actions = {
  addAddress: (address: Address) => void
  setName: (name: string) => void
}

type Store = States & Actions

const _createStore: StateCreator<
  Store,
  [['zustand/devtools', never]]
> = (set, get) => ({
  name: 'Wxh16144',
  address: [],
  addAddress: (address) => {
    const nextAddress = [...get().address, address]
    set({ address: nextAddress })
  },
  setName: (name) => {
    set({ name })
  }
});

export const createStore = () =>
  createWithEqualityFn(
    devtools(_createStore, { name: 'test' }),
    shallow,
  )

export const {
  Provider,
  useStore,
  useStoreApi,
} = createContext<StoreApi<Store>>()