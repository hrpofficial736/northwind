import { create } from "zustand";

type FullImageStateProps = {
    display: boolean;
    src: string;
    setDisplay: (src: string) => void;
}

export const useFullImageStore = create<FullImageStateProps>((set) => ({
    display: false,
    src: "",
    setDisplay: (src: string) => set((state) => ({
        display: !state.display,
        src
    }))
}))


