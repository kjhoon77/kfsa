// @ts-nocheck
export const Frmprofes0002MInviteProfMgntData = {};

export interface Ids_oRadio {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oRadio: Ids_oRadio[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '실무' },
    { CD: '2', DATA: '강습' },
];

export interface Ids_oYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oYn: Ids_oYn[] = [
    { CD: 'Y', DATA: '예' },
    { CD: 'N', DATA: '아니요' },
];

export interface Ids_Professor {
    SEL?: string;
    SSEQ?: string;
    SNAME?: string;
    SNO?: string;
    STEL?: string;
    SPHONE?: string;
    SSOSOK?: string;
    SJIKWI?: string;
    SLICENSE?: string;
    SEDU?: string;
    SGUBUN?: string;
    SREMARK?: string;
    SFDATE?: string;
    STDATE?: string;
    SENDDATE?: string;
    SENDYN?: string;
    DATA?: string;
    DATEFOTO?: string;
    SGUBUN_CODE?: string;
    SENDYN_CODE?: string;
    GIBU?: string;
    SYEAR?: string;
    WRITER?: string;
    SSEQ_CD?: string;
    SMGNO?: string;
    SMODSABUN?: string;
    SREGSABUN?: string;
    SRESUME?: string;
    CAFSAVENM?: string;
    CAFREALNM?: string;
    CAFFILESIZE?: string;
    CAFDIRPATH?: string;
    SPAY?: string;
    CAFGUBUN?: string;
    CAFSEQ?: string;
    SJOBGUBUN?: string;
    SJOBGUBUN_CODE?: string;
    SEDU2?: string;
    BIRTHDAY?: string;
    SEXGUBUN?: string;
    SBIRTHDAY?: string;
    GTTEAMNM?: string;
    APPOINT_DOC_ID?: string;
    APPOINT_NAME?: string;
    APPOINT_DATE?: string;
    APPOINT_STATUS?: string;
    APPROVAL_DOC_ID?: string;
    APPROVAL_NAME?: string;
    APPROVAL_DATE?: string;
    APPROVAL_STATUS?: string;
    SYEARLIMITTIME?: string;
}

export interface Ids_ProfessorDetail_Backup {
    SSEQ?: string;
    SNAME?: string;
    SNO?: string;
    STEL?: string;
    SPHONE?: string;
    SSOSOK?: string;
    SJIKWI?: string;
    SLICENSE?: string;
    SEDU?: string;
    SGUBUN?: string;
    SREMARK?: string;
    SFDATE?: string;
    STDATE?: string;
    SENDDATE?: string;
    SENDYN?: string;
    DATA?: string;
    DATEFOTO?: string;
    SGUBUN_CODE?: string;
    SENDYN_CODE?: string;
    GIBU?: string;
    SYEAR?: string;
    WRITER?: string;
    SSEQ_CD?: string;
    SMGNO?: string;
    SMODSABUN?: string;
    SREGSABUN?: string;
    SEDU2?: string;
    SYEARLIMITTIME?: string;
}

export interface Ids_Jibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_JibuInput {
    CD?: string;
    DATA?: string;
}

export interface Ids_ProfessorDetail_back {
    SSEQ?: string;
    SNAME?: string;
    SNO?: string;
    STEL?: string;
    SPHONE?: string;
    SSOSOK?: string;
    SJIKWI?: string;
    SLICENSE?: string;
    SEDU?: string;
    SGUBUN?: string;
    SREMARK?: string;
    SFDATE?: string;
    STDATE?: string;
    SENDDATE?: string;
    SENDYN?: string;
    DATA?: string;
    DATEFOTO?: string;
    SGUBUN_CODE?: string;
    SENDYN_CODE?: string;
    GIBU?: string;
    SYEAR?: string;
    WRITER?: string;
    SSEQ_CD?: string;
    SMGNO?: string;
    SMODSABUN?: string;
    SREGSABUN?: string;
    SRESUME?: string;
    AFSAVENM?: string;
    AFREALNM?: string;
    AFFILESIZE?: string;
    AFDIRPATH?: string;
    SPAY?: string;
    CAFSEQ?: string;
    SEDU2?: string;
    SYEARLIMITTIME?: string;
}

export interface Ids_TecProgMAX {
    SMGNOMAX?: string;
}

export interface Ids_Jumin {
    JuminCnt?: string;
}

export interface Ids_Job {
    CD?: string;
    DATA?: string;
}

export interface Ids_SendYN {
    CD?: string;
    DATA?: string;
}

export const ds_ds_SendYN: Ids_SendYN[] = [
    { CD: '', DATA: '전체' },
    { CD: 'Y', DATA: '해촉' },
    { CD: 'N', DATA: '미해촉' },
];

export interface Ids_oSexGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSexGubun: Ids_oSexGubun[] = [
    { CD: '1', DATA: '남' },
    { CD: '2', DATA: '여' },
    { CD: '3', DATA: '남(2000년 이후)' },
    { CD: '4', DATA: '여(2000년 이후)' },
    { CD: '5', DATA: '남(외국인)' },
    { CD: '6', DATA: '여(외국인)' },
];

export interface Ids_oAppointMgno {
    NEXTMGNO?: string;
}
