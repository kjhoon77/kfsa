import type { ItemCode, EduItemTransaction, ItemStatusSummary, Equipment } from './types';

// Item Codes
export const mockItemCodesLarge: ItemCode[] = [
    { id: 1, code: '10', name: '안전교육', title: 'Safety Edu', useYn: 'Y' },
    { id: 2, code: '20', name: '직무교육', title: 'Job Training', useYn: 'Y' },
];

export const mockItemCodesMedium: ItemCode[] = [
    { id: 1, code: '1001', name: '소방안전', parentName: '안전교육', title: 'Fire Safety', useYn: 'Y' },
    { id: 2, code: '1002', name: '전기안전', parentName: '안전교육', title: 'Electric Safety', useYn: 'Y' },
];

export const mockItemCodesSmall: ItemCode[] = [
    { id: 1, code: '100101', name: '소화기사용법', parentName: '소방안전', title: 'Fire Extinguisher', useYn: 'Y' },
    { id: 2, code: '100102', name: '심폐소생술', parentName: '소방안전', title: 'CPR', useYn: 'Y' },
];

// Transactions
export const mockEduItemTransactions: EduItemTransaction[] = [
    { id: 1, date: '2024-01-15', type: '입고', itemCode: '100101', itemName: '소화기사용법 교재', qty: 100, target: '본사 창고', remark: '정기 입고' },
    { id: 2, date: '2024-01-20', type: '지급', itemCode: '100101', itemName: '소화기사용법 교재', qty: 20, target: '부산지부', remark: '교육 지원' },
    { id: 3, date: '2024-02-05', type: '폐기/반납', itemCode: '100101', itemName: '소화기사용법 교재', qty: 5, target: '-', remark: '파손 폐기' },
];

// Status
export const mockItemStatus: ItemStatusSummary[] = [
    { id: 1, itemCode: '100101', itemName: '소화기사용법 교재', basicQty: 50, inQty: 100, outQty: 25, stockQty: 125 },
    { id: 2, itemCode: '100102', itemName: '심폐소생술 교재', basicQty: 30, inQty: 50, outQty: 10, stockQty: 70 },
];

// Equipment
export const mockEquipments: Equipment[] = [
    { id: 1, manageNo: 'EQ-2024-001', name: '빔프로젝터', model: 'EB-2255U', spec: '5000 Ansi', buyDate: '2024-01-10', buyAmt: 1500000, place: '본사 1강의실', status: '보유' },
    { id: 2, manageNo: 'EQ-2023-015', name: '노트북', model: 'Galaxy Book 3', spec: 'i7/16GB/512GB', buyDate: '2023-11-20', buyAmt: 1200000, place: '부산지부', status: '보유' },
    { id: 3, manageNo: 'EQ-2020-099', name: '데스크탑', model: 'Samsung Magic', spec: 'i5/8GB', buyDate: '2020-05-15', buyAmt: 800000, place: '창고', status: '폐기' },
];
