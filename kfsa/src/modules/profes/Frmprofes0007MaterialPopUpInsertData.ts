// @ts-nocheck
export const Frmprofes0007MaterialPopUpInsertData = {};

export interface Ids_TecProg {
    TPMGNO?: string;
    TPNO?: string;
    TPEDUGUBUN?: string;
    TPEDUGUBUNNM?: string;
    TPYEAR?: string;
    TPSEQ?: string;
    TPCOURS?: string;
    TPCOURSNM?: string;
    TPSUBJECT?: string;
    TPSUBJECTNM?: string;
    TPEDUTIME?: string;
    TPREQUSER?: string;
    NAME_DETAIL?: string;
    NAME?: string;
    PROFGUBUN?: string;
    TPGOAL?: string;
    TPPLAN?: string;
    TPDATA?: string;
    TPCONTENT?: string;
    TPETC?: string;
    TPSTATUS?: string;
    TPUSEDATE?: string;
    TPOKDATE?: string;
    TPUSE_YY?: string;
    TPUSE_MM?: string;
    TPUSE_DD?: string;
    TPREQDATE?: string;
    GTDEPTNM?: string;
    TPOK_YY?: string;
    TPOK_MM?: string;
    TPOK_DD?: string;
    TPPPT?: string;
    CMGNO?: string;
    CGUBUN?: string;
    CCD?: string;
    CAFSAVENM?: string;
    CAFREALNM?: string;
    CAFFILESIZE?: string;
    CAFDIRPATH?: string;
    CAFGUBUN?: string;
}

export interface Ids_TpEduGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_TpEduGubun: Ids_TpEduGubun[] = [
    { CD: 'B', DATA: '실무교육' },
    { CD: 'T', DATA: '강습교육' },
    { CD: '3', DATA: '기타' },
];

export interface Ids_CmbCours_old {
    CD?: string;
    DATA?: string;
}

export interface Ids_CmbSubject {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioTeaching {
    TPEDUGUBUN?: string;
    TPYEAR?: string;
    TPCOURS?: string;
    TPCOURSNM?: string;
    TPSUBJECT?: string;
    TPSUBJECTNM?: string;
    TPEDUTIME?: string;
    TPPROFGUBUN?: string;
    TPGOAL?: string;
    TPPLAN?: string;
    TPDATA?: string;
    TPCONTENT?: string;
    TPETC?: string;
    TPUSEDATE?: string;
    TPSTATUS?: string;
    TPREQDATE?: string;
    TPDEL?: string;
    TPPPT?: string;
    TPREQUSER?: string;
    TPJIBU?: string;
    TPREQUSERNM?: string;
    TPREGSABUN?: string;
    TPMGNO?: string;
    CAFSAVENM?: string;
    CAFREALNM?: string;
    CAFFILESIZE?: string;
    CAFDIRPATH?: string;
    BSEQ?: string;
    CAFGUBUN?: string;
    SMGNO?: string;
}

export interface Ids_Movie {
    TMSEQ?: string;
    TMMOVIE?: string;
}

export interface Ids_MovieSingle {
    TMSEQ?: string;
    TMMOVIE?: string;
}

export interface Ids_TecProgMAX {
    TPMGNOMAX?: string;
}

export interface Ids_CmbCours {
    TCCOURSECD?: string;
    TCCOURSENM?: string;
}

export interface Ids_Search {
    TCCOURSECDYN?: string;
    TCCOURSECD?: string;
    TCCOURSENM?: string;
    TCSEARCHGUBUN?: string;
    TCMUNJEGUBUN?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
    PCMGNO?: number;
    PCTCMUNJEGUBUN?: string;
    PCTCSEARCHGUBUN?: string;
}

export interface Ids_oAllCourse {
    CD?: string;
    DATA?: string;
    PCMGNO?: number;
    PCTCMUNJEGUBUN?: string;
    PCTCSEARCHGUBUN?: string;
}

export interface Ids_oAllSubject {
    CD?: number;
    DATA?: string;
    PSPCMGNO?: number;
}

export interface Ids_oSubject {
    CD?: number;
    DATA?: string;
    PSPCMGNO?: number;
}

export interface Ids_oYear {
    CD?: string;
    DATA?: string;
}
