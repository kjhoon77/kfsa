import { create } from 'zustand';

export interface CodeItem {
  code: string;
  name: string;
  groupCode: string;
  orderSeq: number;
  useYn: string;
}

interface CodeState {
  codeMap: Record<string, CodeItem[]>; // Key: GroupCode, Value: List of Codes
  loading: boolean;
  error: string | null;
  fetchCodes: (groupCodes: string[]) => Promise<void>;
  getCodes: (groupCode: string) => CodeItem[];
}

export const useCodeStore = create<CodeState>((set, get) => ({
  codeMap: {},
  loading: false,
  error: null,

  fetchCodes: async (groupCodes: string[]) => {
    set({ loading: true, error: null });
    try {
      // Logic to fetch codes. 
      // In a real scenario, this might call a specific API that accepts a list of group codes.
      // For now, we reuse the existing `callService` pattern or mock it.
      // We will assume we fetch ALL needed codes or fetch by group.

      // Simulating API call for multiple groups
      // This part would ideally be an optimized bulk fetch API.
      // Here we will just perform a mock fetch for demonstration.

      const newCodeMap = { ...get().codeMap };

      for (const group of groupCodes) {
        // Check if already cached
        if (newCodeMap[group]) continue;

        // Simulate fetch
        const validCodes = await fetchMockCodes(group);
        newCodeMap[group] = validCodes;
      }

      set({ codeMap: newCodeMap, loading: false });

    } catch (err) {
      set({ error: 'Failed to fetch common codes', loading: false });
      console.error(err);
    }
  },

  getCodes: (groupCode: string) => {
    return get().codeMap[groupCode] || [];
  }
}));

// Helper to simulate fetching codes (Replace with real API later)
async function fetchMockCodes(groupCode: string): Promise<CodeItem[]> {
  // Mock Data based on groupCode
  return new Promise((resolve) => {
    setTimeout(() => {
      if (groupCode === 'CUST_TYPE') {
        resolve([
          { code: '01', name: '일반고객', groupCode: 'CUST_TYPE', orderSeq: 1, useYn: 'Y' },
          { code: '02', name: 'VIP고객', groupCode: 'CUST_TYPE', orderSeq: 2, useYn: 'Y' },
        ]);
      } else if (groupCode === 'BANK_CODE') {
        resolve([
          { code: '001', name: '한국은행', groupCode: 'BANK_CODE', orderSeq: 1, useYn: 'Y' },
          { code: '004', name: '국민은행', groupCode: 'BANK_CODE', orderSeq: 2, useYn: 'Y' },
        ]);
      } else {
        resolve([]);
      }
    }, 300);
  });
}
