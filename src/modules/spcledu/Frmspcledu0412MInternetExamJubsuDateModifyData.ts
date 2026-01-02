// @ts-nocheck
export const Frmspcledu0412MInternetExamJubsuDateModifyData = {};

export interface Ids_ioInternetJusu {
    EJADDR1?: string;
    EJADDR2?: string;
    EJBULDADDR?: string;
    EJBULDNM?: string;
    EJLASTEJHSEQ?: number;
    EJLASTEOHSEQ?: number;
    EJLASTESSEQ?: number;
    EJLASTSUNAPGUBUN?: string;
    EJMGNO?: number;
    EJPASSYN?: string;
    EJPERSONNM?: string;
    EJRESIDENTNO?: string;
    EJROADNM?: string;
    EJTPMGNO?: number;
    EJZZIPCD?: string;
    EOENDTIME?: string;
    EOEPMGNO?: number;
    EOEXAMDATE?: string;
    EOEXAMORDER?: string;
    EOHAFTEREOMGNO?: number;
    EOHAFTERJUBSUNO?: string;
    EOHCHANGEDATE?: string;
    EOHJUBSUGUBUN?: string;
    EOHJUBSUNO?: string;
    EOHLASTGUBUN?: string;
    EOHSEQ?: number;
    EOINETJUBSUCNT?: number;
    EOINETJUBSUYN?: string;
    EOJUBSUMAXCNT?: number;
    EOJUBSUSTATUS?: string;
    EOMGGTMGNO?: string;
    EOMGNO?: number;
    EOSEATCNT?: number;
    EOSTARTTIME?: string;
    EOTCCOURSECD?: string;
    EOUSEYN?: string;
    EOYEAR?: string;
    ESGUBUNCD?: string;
    ESPONYDATE?: string;
    ESPROCDATE?: string;
    ESSEQ?: number;
    GTDEPTNM?: string;
    GTTEAMNM?: string;
    SEL?: string;
    TCCOURSENM?: string;
    TFCFEE?: number;
    ESGUBUN?: string;
    ESREGDATE?: string;
    ESSUNAPGUBUN?: string;
}

export interface Ids_oWorkGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oWorkGubun: Ids_oWorkGubun[] = [
    { CD: 'TRAINING', DATA: '인터넷강습접수' },
    { CD: 'EXAM', DATA: '인터넷시험접수' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oInternetJubsuStatus {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oInternetJubsuStatus: Ids_oInternetJubsuStatus[] = [
    { CD: '02', DATA: '접수완료' },
];

export interface Ids_oGubun {
    CD?: string;
    DATA?: string;
}
