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
): Promise<unknown> => {

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

    // [New] Customer Management Mock Actions
    if (actionName === 'cust:searchCustomerInfo') {
        console.log('Mock Search Customer Info');
        return {
            customerInfo: {
                CMGNO: 1, CNO: 'C10001', AGNM: '한국소방안전원', CSTATUSGUBUN: '0', CDELGUBUN: '0',
                CREGCD: '01', CCOURSECD: '10', CBMGNO: 101, CFMHMGNO: 201, CPERSONGUBUN: '0',
                CCOCD: '01', CAGGUBUN: '0', CAGMGNO: 0, CSTATUSREASONCD: '00', CSTATUSDATE: '2024-01-01',
                CREGISTERYYMM: '2024-01', CFEEYYMM: '2024-01', COBMGNO: 0, COVERGUBUN: '0',
                CEXCEPTGUBUN: '0', CEXCEPTDATE: '', CDELDATE: '', CFIREMGNO: 'F100', CPOSTREQGUBUN: '0'
            },
            buildingInfo: {
                BMGNO: 101, BNM: '안전원빌딩', BADDR1: '서울시', BADDR2: '영등포구', BZIPCD: '07200',
                BROADADDR1: '영중로', BROADADDR2: '12길', BADDRGUBUN: '1', BBIZCD: '10',
                BFIREUPCD: '101', BFIRECD: '10101', BFIREMAN: '김소방', BTEL: '02-123-4567', BFAX: '02-123-4568',
                BSMOKEGUBUN: '0', BAREA: 1500.5, BCONO: '111-22-33333'
            },
            managerInfo: {
                FMMGNO: 201, FMNM: '홍길동', FMBIRTHDAY: '1980-01-01', FMHTEL: '02-987-6543', FMHHPTEL: '010-1234-5678',
                FMHEMAILID: 'hong', FMHEMAILDOMAIN: 'naver.com', FMHZIPCD: '07200',
                FMHROADADDR1: '서울시 영등포구', FMHROADADDR2: '상세주소', FMHADDR1: '서울시 영등포구', FMHADDR2: '지번상세',
                FMHADDRGUBUN: '1', FMHLICENSENO: '2024-0001', FMHSTARTDATE: '2024-01-01', FMHENDDATE: '',
                FMHENDGUBUN: '0', FMRESIDENTERR: '0', FMAUTHGUBUN: '1'
            }
        };
    }

    if (actionName === 'cust:saveCustomerInfo') {
        console.log('Mock Save Customer Info');
        // Simulate a success response
        return { status: 'OK', message: 'Saved successfully' };
    }

    if (actionName === 'cust:deleteCustomerInfo') {
        console.log('Mock Delete Customer Info');
        return { status: 'OK', message: 'Deleted successfully' };
    }

    // [New] Member Management Mock Actions
    if (actionName === 'mem:searchMemberInfo') {
        console.log('Mock Search Member Info');
        // Parse Args to filter if needed
        return {
            ds_oMemberInfo: [
                {
                    rowId: 1,
                    CMGNO: 1, CGTMGNO: '01', CNO: '123456',
                    GTDEPTNM: '서울지부',
                    RCNM: '서울',
                    CNICKNM: '소방안전관리자',
                    MBNM: '대한빌딩',
                    MNAME: '김철수',
                    BIRTHDAY: '800101',
                    MPERSONKEY: 'A1234-56789',
                    FMHSTARTDATE: '2023.01.01',
                    CFEEYYMM: '2024.12',
                    OVERGUBUN: 'N',
                    MADDR: '서울시 강남구 테헤란로 123',
                    CSTATUSGUBUN: '0', CDELGUBUN: '0', MINAPFEE: 50000, MHP: '010-1111-2222'
                },
                {
                    rowId: 2,
                    CMGNO: 2, CGTMGNO: '01', CNO: '123457',
                    GTDEPTNM: '서울지부',
                    RCNM: '서울',
                    CNICKNM: '위험물안전관리자',
                    MBNM: '민국아파트',
                    MNAME: '이영희',
                    BIRTHDAY: '850505',
                    MPERSONKEY: 'B1234-56789',
                    FMHSTARTDATE: '2022.05.01',
                    CFEEYYMM: '2024.12',
                    OVERGUBUN: 'Y',
                    MADDR: '서울시 서초구 서초대로 456',
                    CSTATUSGUBUN: '0', CDELGUBUN: '0', MINAPFEE: 0, MHP: '010-3333-4444'
                }
            ]
        };
    }

    if (actionName === 'mem:searchMemberDetails') {
        console.log('Mock Search Member Details');
        return {
            ds_ioCustomerFeeInfo: [
                { CFGYEAR: '2024', CFCCGUBUN: '0', MINAPFEE: 24000, SUNAPFEE: 0, REALSUNAPFEE: 0 },
                { CFGYEAR: '2023', CFCCGUBUN: '0', MINAPFEE: 0, SUNAPFEE: 24000, REALSUNAPFEE: 24000 }
            ],
            ds_ioEducationPassInfo: [
                {
                    EPYEAR: '2024', ESSTUDENT: '01', ESSTUDENT_NM: '실무교육',
                    EPSUCCESSIONGUBUN: '0', EPSUCCESSIONGUBUN_NM: '선임자',
                    EPPASSDATE: '2024-05-20', EPPERSONNM: '김철수', BIRTHDAY: '800101',
                    EPPERSONKEY: 'A1234-56789', EPPROCGTMGNO: '서울지부', ESGUBUN: '집합',
                    BNM: '대한빌딩', EPPASSREMARK: '', EPMGNO: 101
                }
            ],
            ds_ioOverBizInfo: [
                {
                    CGTMGNO: '서울지부', CNO: '987654', CNICKFULLNM: '소방안전관리자(특급)',
                    COVERGUBUN: 'Y', BNM: '겸직회사A', MINAPFEE: 0, BBIZCD: '근린생활'
                }
            ]
        };
    }

    // [New] Fire Scholarship Management Mock Actions
    if (actionName === 'mem:searchMem0050FireScholarship') {
        console.log('Mock Search Fire Scholarship');
        return {
            ds_oScholarship: [
                {
                    rowId: 1, FSMGNO: 1, FSMMGNO: 101, FSCMGNO: 'C1001', CGTMGNO: '01', CNO: '123456',
                    CGROUPCD: '10', FSNM: '홍길동', BIRTHDAY: '800101', FSPERSONKEY: '800101-1******',
                    FSBNM: '대한빌딩', FSYEAR: '2024', FSSELECTYN: 'Y', FSSELECTYN_NM: '선발자',
                    FSAMT: 1000000, FSDATE: '2024-05-15', FSREMARK: '우수회원', PNM: '관리자', REGDATE: '2024-05-01'
                },
                {
                    rowId: 2, FSMGNO: 2, FSMMGNO: 102, FSCMGNO: 'C1002', CGTMGNO: '01', CNO: '654321',
                    CGROUPCD: '20', FSNM: '김철수', BIRTHDAY: '850505', FSPERSONKEY: '850505-1******',
                    FSBNM: '민국아파트', FSYEAR: '2024', FSSELECTYN: 'N', FSSELECTYN_NM: '탈락자',
                    FSAMT: 0, FSDATE: '', FSREMARK: '대상아님', PNM: '관리자', REGDATE: '2024-05-02'
                }
            ]
        };
    }
    if (actionName === 'mem:insertMem0050Scholarship') {
        return { status: 'OK', message: 'Saved successfully' };
    }
    if (actionName === 'mem:updateMem0050Scholarship') {
        return { status: 'OK', message: 'Updated successfully' };
    }
    if (actionName === 'mem:deleteMem0050FireScholarship') {
        return { status: 'OK', message: 'Deleted successfully' };
    }

    // [New] POS System Mock Actions
    if (actionName === 'com:searchPosProgramId') {
        return {
            ds_oPosProgramId: [
                { PGMID: '80', PGMNM: '기타수입관리', PGMGUBUN: '1', PGMGUBUNNM: '공통' },
                { PGMID: '81', PGMNM: '교육비관리', PGMGUBUN: '1', PGMGUBUNNM: '교육' }
            ],
            ds_oJibu: [
                { PIID: '01', JJIBUCD: '01', JJIBUNM: '서울지부' },
                { PIID: '02', JJIBUCD: '02', JJIBUNM: '경기지부' }
            ]
        };
    }
    if (actionName === 'posetc:searchPosEtc0010PosEtcSettlement') {
        return {
            ds_oSunapList: [
                {
                    PSSEQ: 1, PSSETLMGUBUN: '1', PSSETLMGUBUNNM: '완료', PSAMT: 50000,
                    PSPROCDATE: '2024-05-20', PSBUYER: '홍길동', PMPCORDERNO: 'ORD-2024-001',
                    PSGUBUN: '0', PSGUBUNNM: '수납', PSGUBUNCDNM: '카드', PSCONTENT: '교육비 납부'
                },
                {
                    PSSEQ: 2, PSSETLMGUBUN: '1', PSSETLMGUBUNNM: '완료', PSAMT: 30000,
                    PSPROCDATE: '2024-05-21', PSBUYER: '김철수', PMPCORDERNO: 'ORD-2024-002',
                    PSGUBUN: '1', PSGUBUNNM: '환불', PSGUBUNCDNM: '계좌이체', PSCONTENT: '교육 취소 환불'
                }
            ]
        };
    }
    if (actionName === 'posetc:insertPosEtc0010PosEtcSettlement') {
        return { status: 'OK', message: 'POS processed successfully' };
    }

    return {};
};

// Axios instance for future real API calls
const api = axios.create({
    baseURL: '/api', // Adjust as needed
    timeout: 10000,
});

export default api;
