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
      } else if (groupCode === 'REGION') {
        resolve([
          { code: '01', name: '서울', groupCode: 'REGION', orderSeq: 1, useYn: 'Y' },
          { code: '02', name: '부산', groupCode: 'REGION', orderSeq: 2, useYn: 'Y' },
          { code: '03', name: '대구', groupCode: 'REGION', orderSeq: 3, useYn: 'Y' },
          { code: '04', name: '인천', groupCode: 'REGION', orderSeq: 4, useYn: 'Y' },
          { code: '08', name: '경기', groupCode: 'REGION', orderSeq: 8, useYn: 'Y' },
        ]);
      } else if (groupCode === 'JIBU') {
        resolve([
          { code: '01', name: '서울지부', groupCode: 'JIBU', orderSeq: 1, useYn: 'Y' },
          { code: '02', name: '부산지부', groupCode: 'JIBU', orderSeq: 2, useYn: 'Y' },
          { code: '08', name: '경기지부', groupCode: 'JIBU', orderSeq: 3, useYn: 'Y' },
        ]);
      } else if (groupCode === 'JOB_TYPE') { // 직능 (Course Type)
        resolve([
          { code: '10', name: '소방안전관리자', groupCode: 'JOB_TYPE', orderSeq: 1, useYn: 'Y' },
          { code: '20', name: '소방안전관리보조자', groupCode: 'JOB_TYPE', orderSeq: 2, useYn: 'Y' },
          { code: '30', name: '위험물안전관리자', groupCode: 'JOB_TYPE', orderSeq: 3, useYn: 'Y' },
        ]);
      } else {
        resolve([]);
      }
    }, 300);
  });
}
