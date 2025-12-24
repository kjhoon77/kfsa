
export interface ItemCode {
    id: number;
    code: string;
    name: string;
    parentName?: string;
    title?: string;
    useYn?: string;
}

export interface EduItemTransaction {
    id: number;
    date: string; // YYYY-MM-DD
    type: '입고' | '지급' | '폐기/반납'; // Receipt, Usage, Disposal
    itemCode: string;
    itemName: string;
    qty: number;
    target?: string; // e.g., Branch name, Student
    remark?: string;
}

export interface ItemStatusSummary {
    id: number;
    itemCode: string;
    itemName: string;
    basicQty: number; // Basic stock
    inQty: number; // Receipt
    outQty: number; // Usage
    stockQty: number; // Current stock
}

export interface Equipment {
    id: number;
    manageNo: string;
    name: string;
    model: string;
    spec: string;
    buyDate: string;
    buyAmt: number;
    place: string; // e.g., '본사', '부산지부'
    status: '보유' | '폐기' | '망실';
    imageUrl?: string;
}
