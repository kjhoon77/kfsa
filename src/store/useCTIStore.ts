import { create } from 'zustand';

export type AgentState = 'LOGIN' | 'LOGOUT' | 'READY' | 'NOT_READY' | 'BUSY' | 'AFTER_WORK';

export interface CallInfo {
    callerName: string;
    callerNumber: string;
    duration: number; // seconds
    status: 'RINGING' | 'CONNECTED' | 'HOLD' | 'IDLE';
}

interface CTIState {
    isLoggedIn: boolean;
    agentState: AgentState;
    currentCall: CallInfo | null;

    // Actions
    login: () => void;
    logout: () => void;
    setAgentState: (state: AgentState) => void;
    makeCall: (phoneNumber: string) => void;
    hangupCall: () => void;
    answerCall: () => void;
    holdCall: () => void;
    resumeCall: () => void;
}

export const useCTIStore = create<CTIState>((set) => ({
    isLoggedIn: false,
    agentState: 'LOGOUT',
    currentCall: null,

    login: () => set({ isLoggedIn: true, agentState: 'NOT_READY' }),
    logout: () => set({ isLoggedIn: false, agentState: 'LOGOUT', currentCall: null }),

    setAgentState: (state) => set({ agentState: state }),

    makeCall: (phoneNumber) => {
        // Mock outgoing call
        set({
            agentState: 'BUSY',
            currentCall: {
                callerName: 'Unknown',
                callerNumber: phoneNumber,
                duration: 0,
                status: 'CONNECTED' // Simulating immediate connection for demo
            }
        });
    },

    hangupCall: () => set({ currentCall: null, agentState: 'AFTER_WORK' }),

    answerCall: () => set((state) => ({
        currentCall: state.currentCall ? { ...state.currentCall, status: 'CONNECTED' } : null,
        agentState: 'BUSY'
    })),

    holdCall: () => set((state) => ({
        currentCall: state.currentCall ? { ...state.currentCall, status: 'HOLD' } : null
    })),

    resumeCall: () => set((state) => ({
        currentCall: state.currentCall ? { ...state.currentCall, status: 'CONNECTED' } : null
    }))
}));
