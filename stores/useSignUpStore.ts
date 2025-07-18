import { create } from "zustand";


type SignUpStateProps = {
    status: boolean;
    setStatus: () => void;
}

export const useSignUpStore = create<SignUpStateProps>((set) => ({
    status: false,
    setStatus: () => set(() => ({
        status: true
    }))
}))