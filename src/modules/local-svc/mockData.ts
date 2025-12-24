import type { ExamOrder, ExamJubsu, ExamResult } from './types';

export const mockExamOrders: ExamOrder[] = [
    {
        examOrderNo: 'EO-2024-001',
        examYear: '2024',
        examRound: '101',
        examDate: '2024-03-15',
        examTimeStart: '09:00',
        examTimeEnd: '11:00',
        examPlace: '제1고사장(본관)',
        seatCount: 50,
        status: '접수마감',
    },
    {
        examOrderNo: 'EO-2024-002',
        examYear: '2024',
        examRound: '102',
        examDate: '2024-06-20',
        examTimeStart: '14:00',
        examTimeEnd: '16:00',
        examPlace: '제2고사장(별관)',
        seatCount: 40,
        status: '접수중',
    },
];

export const mockExamJubsuList: ExamJubsu[] = [
    {
        jubsuNo: 'JB-2024-001-001',
        name: '홍길동',
        birthDate: '1990-01-01',
        examSeatNo: 'A-01',
        address: '서울시 강남구 테헤란로 123',
        tel: '02-1234-5678',
        mobile: '010-1234-5678',
        courseName: '위험물안전관리자',
    },
    {
        jubsuNo: 'JB-2024-001-002',
        name: '김철수',
        birthDate: '1992-05-05',
        examSeatNo: 'A-02',
        address: '경기도 성남시 분당구 판교로 456',
        tel: '031-111-2222',
        mobile: '010-9876-5432',
        courseName: '소방안전관리자 1급',
    },
    {
        jubsuNo: 'JB-2024-001-003',
        name: '이영희',
        birthDate: '1985-12-25',
        examSeatNo: 'A-03',
        address: '부산시 해운대구 해운대로 789',
        tel: '051-333-4444',
        mobile: '010-5555-6666',
        courseName: '위험물안전관리자',
    },
];

export const mockExamResults: ExamResult[] = [
    {
        examOrderNo: 'EO-2024-001',
        jubsuNo: 'JB-2024-001-001',
        name: '홍길동',
        score: 85,
        passStatus: '합격',
        rank: 5,
    },
    {
        examOrderNo: 'EO-2024-001',
        jubsuNo: 'JB-2024-001-002',
        name: '김철수',
        score: 55,
        passStatus: '불합격',
        rank: 42,
    },
    {
        examOrderNo: 'EO-2024-001',
        jubsuNo: 'JB-2024-001-003',
        name: '이영희',
        score: 92,
        passStatus: '합격',
        rank: 1,
    },
];
