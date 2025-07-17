import { create } from "zustand";

type DisclaimerStateProps = {
    show: boolean;
    setShow: () => void;
}

export const useDisclaimerStore = create<DisclaimerStateProps>((set) => ({
    show: true,
    setShow: () => set(() => ({
        show: false
    }))
}))