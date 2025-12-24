export interface ExamOrder {
    examOrderNo: string; // EOMGNO
    examYear: string; // EOYEAR
    examRound: string; // EOEXAMORDER
    examDate: string; // EOEXAMDATE
    examTimeStart: string; // EOSTARTTIME
    examTimeEnd: string; // EOENDTIME
    examPlace: string; // EOEPMGNO (Exam Place Mg No or Name)
    seatCount: number; // EOSEATCNT
    status: string; // EOJUBSUSTATUS
}

export interface ExamJubsu {
    jubsuNo: string; // EOHJUBSUNO
    name: string; // TPPERSONNM
    birthDate: string; // BIRTHDAY
    examSeatNo: string; // EOHEXAMSEATNO
    address: string; // ADDR1 + ADDR2
    tel: string; // TPTEL
    mobile: string; // TPHPTEL
    courseName: string; // TCCOURSENM
}

export interface ExamResult {
    examOrderNo: string; // EOMGNO
    jubsuNo: string; // EJJUBSUNO
    name: string; // EJPERSONNM
    score: number; // EJTOTALSCORE
    passStatus: string; // EJPASSYN (Pass/Fail)
    rank: number; // EJRANK
}
