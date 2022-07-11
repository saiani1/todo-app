import { atom } from 'recoil'

export const modalClick = atom<boolean>({
  key: '#modalClick',
  default: false,
})

export const menuClick = atom<boolean>({
  key: '#menuClick',
  default: false,
})

export const todoContentValue = atom<string>({
  key: '#todoContentValue',
  default: '',
})
