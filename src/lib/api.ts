import axios from 'axios';

// Mock data for the pilot
const MOCK_AGENTS = [
    { AGNM: '삼성화재', AGOWNER: '홍길동', AGCONO: '123-45-67890', AGTEL: '02-1234-5678', AGADDR: '서울시 강남구 삼성동', AGMGNO: '1001' },
    { AGNM: '현대해상', AGOWNER: '김철수', AGCONO: '234-56-78901', AGTEL: '02-2345-6789', AGADDR: '서울시 종로구', AGMGNO: '1002' },
    { AGNM: 'DB손해보험', AGOWNER: '이영희', AGCONO: '345-67-89012', AGTEL: '02-3456-7890', AGADDR: '서울시 강남구 대치동', AGMGNO: '1003' },
    { AGNM: 'KB손해보험', AGOWNER: '박지성', AGCONO: '456-78-90123', AGTEL: '02-4567-8901', AGADDR: '서울시 마포구 합정동', AGMGNO: '1004' },
    { AGNM: '메리츠화재', AGOWNER: '손흥민', AGCONO: '567-89-01234', AGTEL: '02-5678-9012', AGADDR: '서울시 여의도', AGMGNO: '1005' },
];

/**
 * Replaces tit_callService from MiPlatform.
 * @param actionName Action name (e.g., "cust:searchCust0040AgentList")
 * @param cmdName Command name (often empty in MiPlatform calls provided)
 * @param InDs Input dataset (query parameters)
 * @param OutDs Output dataset mapping
 * @param Args Argument string
 * @returns Promise resolving to the requested data
 */
export const callService = async (
    actionName: string,
    _cmdName: string,
    _InDs: object,
    _OutDs: string,
    Args: string
): Promise<any> => {

    console.log(`[API Call] Action: ${actionName}, Args: ${Args}`);

    // Simulating network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Mock response for the pilot
    if (actionName === 'cust:searchCust0040AgentList') {
        // Parse Args to filter if needed: "AGNM='keyword'"
        let filteredData = MOCK_AGENTS;
        const match = Args.match(/AGNM='(.*?)'/);
        if (match && match[1]) {
            const keyword = match[1];
            filteredData = MOCK_AGENTS.filter(agent => agent.AGNM.includes(keyword));
        }
        return { ds_oAgentList: filteredData };
    }

    return {};
};

// Axios instance for future real API calls
const api = axios.create({
    baseURL: '/api', // Adjust as needed
    timeout: 10000,
});

export default api;
