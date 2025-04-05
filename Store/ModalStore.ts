// stores/useModalStore.ts
import { create } from 'zustand'

export type ModalType = 'login' | 'signup' | 'forgot-pass' | 'otp' | null

interface ModalStore {
    active: ModalType
    setActive: (modalType: ModalType) => void
}

export const useModalStore = create<ModalStore>((set) => ({
    active: null,
    setActive: (modalType: ModalType) => set({ active: modalType }),
}))
