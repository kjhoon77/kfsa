// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioLocalExamOrder {
    EOEXAMDATE: string;
    EOEXAMORDER: string;
    EOEXAMORDERGUBUN: string;
    EOMGJIBUCD: string;
    EOMGNO: string;
    EOYEAR: string;
    EREXAMROOM: string;
    TCCOURSENM: string;
    TCCOURSECD: string;
    GTTEAMNM: string;
}

export interface Ids_oExamOrder {
    EOENDTIME: string;
    EOEPMGNO: string;
    EOEXAMDATE: string;
    EOEXAMORDER: string;
    EOEXAMORDERGUBUN: string;
    EOINETJUBSUCNT: string;
    EOINETJUBSUYN: string;
    EOJUBSUMAXCNT: string;
    EOJUBSUSTATUS: string;
    EOMGGTMGNO: string;
    EOMGNO: string;
    EOMODDATE: string;
    EOMODSABUN: string;
    EOREGDATE: string;
    EOREGSABUN: string;
    EOSEATCNT: string;
    EOSTARTTIME: string;
    EOTCCOURSECD: string;
    EOUSEYN: string;
    EOYEAR: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioExamRoom {
    EOEXAMDATE: string;
    EOEXAMORDERGUBUN: string;
    EOMGGTMGNO: string;
    EOMGNO: string;
    EOYEAR: string;
    EREXAMROOM: string;
    TCCOURSENM: string;
}

export interface Ids_ioSupervisorAssignment {
    SAEREOMGNO: string;
    SAEREXAMROOM: string;
    SAGUBUN: string;
    SAMODDATE: string;
    SAMODSABUN: string;
    SAREGDATE: string;
    SAREGSABUN: string;
    SASIMGNO: string;
}

export interface Ids_ioSupervisorInfo {
    SIBDAY: string;
    SICOMPNM: string;
    SIMGNO: string;
    SINM: string;
    SISEXCD: string;
    SITEL: string;
}

export interface Ids_ioCorrectAnswer {
    CACORRECTANSWER: string;
    CACORRECTCNT: string;
    CAEPALPHATYPE: string;
    CAEPNUMTYPE: string;
    CAITEMNO: string;
    CAITEMSCORE: string;
    CAMODDATE: string;
    CAMODSABUN: string;
    CAREGDATE: string;
    CAREGSABUN: string;
    CATCCOURSECD: string;
}

export interface Ids_ioExamOrderH {
    EOHAFTEREOMGNO: string;
    EOHAFTERJUBSUNO: string;
    EOHCHANGEDATE: string;
    EOHEJMGNO: string;
    EOHEOMGNO: string;
    EOHEXAMSEATNO: string;
    EOHJUBSUGUBUN: string;
    EOHJUBSUNO: string;
    EOHLASTGUBUN: string;
    EOHMODDATE: string;
    EOHMODSABUN: string;
    EOHPROCGTMGNO: string;
    EOHPSABUN: string;
    EOHREGDATE: string;
    EOHREGSABUN: string;
    EOHSEQ: string;
}

export interface Ids_ioExamResult {
    ERAPLEXAMNO: string;
    ERCORRECTCNT: string;
    EREJMGNO: string;
    ERMODDATE: string;
    ERMODSABUN: string;
    ERPASSDATE: string;
    ERPASSYN: string;
    ERRANK: string;
    ERREGDATE: string;
    ERREGSABUN: string;
    ERSCORE: string;
    ERSEQ: string;
}

export interface Ids_ioExamJubsu {
    EJADDR1: string;
    EJADDR2: string;
    EJBULDADDR: string;
    EJBULDNM: string;
    EJBUNJI: string;
    EJCANCELPSABUN: string;
    EJCANCELREASON: string;
    EJDONG: string;
    EJEXPYN: string;
    EJKU: string;
    EJLASTEJHSEQ: string;
    EJLASTEOHSEQ: string;
    EJLASTESSEQ: string;
    EJLASTSUNAPGUBUN: string;
    EJMGNO: string;
    EJMODDATE: string;
    EJMODSABUN: string;
    EJPASSYN: string;
    EJPERSONNM: string;
    EJREGDATE: string;
    EJREGSABUN: string;
    EJRESIDENTNO: string;
    EJROADNM: string;
    EJSIDO: string;
    EJTPMGNO: string;
    EJZZIPCD: string;
    EJIIIMGSEQ: string;
    EJTJMGNO: string;
}

export interface Ids_ioPerson {
    PGTMGNO: string;
    PNM: string;
    PPOSITNNM: string;
    PPW: string;
    PSABUN: string;
    PUSEYN: string;
}

export interface Ids_ioMenu {
    MLOCALGUBUN: string;
    MMENUID: string;
    MMENUNM: string;
    MMODDATE: string;
    MMODSABUN: string;
    MORDERSEQ: string;
    MPARENTMENUID: string;
    MREGDATE: string;
    MREGSABUN: string;
    MREMARK: string;
    MSYSGUBUN: string;
    MURL: string;
    MURLTYPE: string;
    MUSEYN: string;
}

export interface Ids_ioExamOrder {
    EOENDTIME: string;
    EOEPMGNO: string;
    EOEXAMDATE: string;
    EOEXAMORDER: string;
    EOEXAMORDERGUBUN: string;
    EOINETJUBSUCNT: string;
    EOINETJUBSUYN: string;
    EOJUBSUCNT: string;
    EOJUBSUSTATUS: string;
    EOMGGTMGNO: string;
    EOMGNO: string;
    EOMODDATE: string;
    EOMODSABUN: string;
    EOREGDATE: string;
    EOREGSABUN: string;
    EOSEATCNT: string;
    EOSTARTTIME: string;
    EOTCCOURSECD: string;
    EOUSEYN: string;
    EOYEAR: string;
}

export interface Ids_ioAnswerAnalysis {
    AA1CNT: string;
    AA2CNT: string;
    AA3CNT: string;
    AA4CNT: string;
    AACAEPALPHATYPE: string;
    AACAEPNUMTYPE: string;
    AACAITEMNO: string;
    AACORRECTCNT: string;
    AACORRECTPERCENT: string;
    AADOUBLECNT: string;
    AAEMPTYCNT: string;
    AAEOMGNO: string;
    AAMARKINGCNT: string;
    AAMODDATE: string;
    AAMODSABUN: string;
    AAREGDATE: string;
    AAREGSABUN: string;
    AATCCOURSECD: string;
}

export interface Ids_ioExamOrderOrgin {
}

export interface Ids_LocalExamOrder {
    EOEXAMDATE: string;
    EOEXAMORDER: string;
    EOEXAMORDERGUBUN: string;
    EOMGGTMGNO: string;
    EOMGNO: string;
    EOYEAR: string;
    EREXAMROOM: string;
    TCCOURSENM: string;
    TCCOURSECD: string;
    GTTEAMNM: string;
}

export interface Ids_ioExamPaper {
    EPTCCOURSECD: string;
    EPNUMTYPE: string;
    EPALPHATYPE: string;
    EPQSTITEMCNT: string;
    EPTOTALPOINT: string;
    EPREMARK: string;
    EPUSEYN: string;
    EPREGDATE: string;
    EPREGSABUN: string;
    EPMODDATE: string;
    EPMODSABUN: string;
}

export interface Ids_ioDiploma {
}

export interface Ids_ioTrainingPerson {
    TPAUTHYN: string;
    TPCUSTGUBUN: string;
    TPEMAILDOMAIN: string;
    TPEMAILID: string;
    TPHPTEL: string;
    TPLASTIMGSEQ: string;
    TPMGNO: string;
    TPMODDATE: string;
    TPMODSABUN: string;
    TPNM: string;
    TPREGDATE: string;
    TPREGSABUN: string;
    TPRESIDENTNO: string;
    TPTEL: string;
}

export interface Ids_ioJibu {
    ACCNTJIBU: string;
    GTACCOUNT: string;
    GTADDR: string;
    GTBANKNM: string;
    GTDEPTCD: string;
    GTDEPTNM: string;
    GTFAX: string;
    GTGUBUNCD: string;
    GTKID: string;
    GTMGNO: string;
    GTOWNER: string;
    GTPRTSEQ: string;
    GTTEAMCD: string;
    GTTEAMNM: string;
    GTTELEPHONENUMBER: string;
    GTYEAR: string;
    GTZIPCODE: string;
    KFSACHPT: string;
}

export interface Ids_ioTrainingCourse {
    TCCOURSECD: string;
    TCCOURSEGUBUN: string;
    TCCOURSENICK: string;
    TCCOURSENM: string;
    TCMODDATE: string;
    TCMODSABUN: string;
    TCMUNJEGUBUN: string;
    TCORDERSEQ: string;
    TCREGDATE: string;
    TCREGSABUN: string;
    TCREQUIREDDOCS: string;
    TCSEARCHGUBUN: string;
    TCTERMTIME: string;
    TCUSEYN: string;
}

export interface Ids_ioCommonCode {
    CCCD: string;
    CCCDNM: string;
    CCGROUPCD: string;
    CCMODDATE: string;
    CCMODSABUN: string;
    CCORDERSEQ: string;
    CCREGDATE: string;
    CCREGSABUN: string;
    CCREMARK: string;
    CCUSEYN: string;
}

export interface Ids_ioCorrectAnswerTmp {
    CACORRECTANSWER: string;
    CACORRECTCNT: string;
    CAEPALPHATYPE: string;
    CAEPNUMTYPE: string;
    CAITEMNO: string;
    CAITEMSCORE: string;
    CAMODDATE: string;
    CAMODSABUN: string;
    CAREGDATE: string;
    CAREGSABUN: string;
    CATCCOURSECD: string;
}

export const useFrmspcledu0480MExamOrderSetting = () => {
    const [ds_ioLocalExamOrder, setds_ioLocalExamOrder] = useState<Ids_ioLocalExamOrder[]>([]);
    const [ds_oExamOrder, setds_oExamOrder] = useState<Ids_oExamOrder[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioExamRoom, setds_ioExamRoom] = useState<Ids_ioExamRoom[]>([]);
    const [ds_ioSupervisorAssignment, setds_ioSupervisorAssignment] = useState<Ids_ioSupervisorAssignment[]>([]);
    const [ds_ioSupervisorInfo, setds_ioSupervisorInfo] = useState<Ids_ioSupervisorInfo[]>([]);
    const [ds_ioCorrectAnswer, setds_ioCorrectAnswer] = useState<Ids_ioCorrectAnswer[]>([]);
    const [ds_ioExamOrderH, setds_ioExamOrderH] = useState<Ids_ioExamOrderH[]>([]);
    const [ds_ioExamResult, setds_ioExamResult] = useState<Ids_ioExamResult[]>([]);
    const [ds_ioExamJubsu, setds_ioExamJubsu] = useState<Ids_ioExamJubsu[]>([]);
    const [ds_ioPerson, setds_ioPerson] = useState<Ids_ioPerson[]>([]);
    const [ds_ioMenu, setds_ioMenu] = useState<Ids_ioMenu[]>([]);
    const [ds_ioExamOrder, setds_ioExamOrder] = useState<Ids_ioExamOrder[]>([]);
    const [ds_ioAnswerAnalysis, setds_ioAnswerAnalysis] = useState<Ids_ioAnswerAnalysis[]>([]);
    const [ds_ioExamOrderOrgin, setds_ioExamOrderOrgin] = useState<Ids_ioExamOrderOrgin[]>([]);
    const [ds_LocalExamOrder, setds_LocalExamOrder] = useState<Ids_LocalExamOrder[]>([]);
    const [ds_ioExamPaper, setds_ioExamPaper] = useState<Ids_ioExamPaper[]>([]);
    const [ds_ioDiploma, setds_ioDiploma] = useState<Ids_ioDiploma[]>([]);
    const [ds_ioTrainingPerson, setds_ioTrainingPerson] = useState<Ids_ioTrainingPerson[]>([]);
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_ioTrainingCourse, setds_ioTrainingCourse] = useState<Ids_ioTrainingCourse[]>([]);
    const [ds_ioCommonCode, setds_ioCommonCode] = useState<Ids_ioCommonCode[]>([]);
    const [ds_ioCorrectAnswerTmp, setds_ioCorrectAnswerTmp] = useState<Ids_ioCorrectAnswerTmp[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioLocalExamOrder([]);
            setds_oExamOrder([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_ioExamRoom([]);
            setds_ioSupervisorAssignment([]);
            setds_ioSupervisorInfo([]);
            setds_ioCorrectAnswer([]);
            setds_ioExamOrderH([]);
            setds_ioExamResult([]);
            setds_ioExamJubsu([]);
            setds_ioPerson([]);
            setds_ioMenu([]);
            setds_ioExamOrder([]);
            setds_ioAnswerAnalysis([]);
            setds_ioExamOrderOrgin([]);
            setds_LocalExamOrder([]);
            setds_ioExamPaper([]);
            setds_ioDiploma([]);
            setds_ioTrainingPerson([]);
            setds_ioJibu([]);
            setds_ioTrainingCourse([]);
            setds_ioCommonCode([]);
            setds_ioCorrectAnswerTmp([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnAdd_OnClick = () => {
        console.log('btnAdd_OnClick clicked');
    };
    const btnDel_OnClick = () => {
        console.log('btnDel_OnClick clicked');
    };
    const btnNext_OnClick = () => {
        console.log('btnNext_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioLocalExamOrder,
        ds_oExamOrder,
        ds_oCourse,
        ds_oJibu,
        ds_ioExamRoom,
        ds_ioSupervisorAssignment,
        ds_ioSupervisorInfo,
        ds_ioCorrectAnswer,
        ds_ioExamOrderH,
        ds_ioExamResult,
        ds_ioExamJubsu,
        ds_ioPerson,
        ds_ioMenu,
        ds_ioExamOrder,
        ds_ioAnswerAnalysis,
        ds_ioExamOrderOrgin,
        ds_LocalExamOrder,
        ds_ioExamPaper,
        ds_ioDiploma,
        ds_ioTrainingPerson,
        ds_ioJibu,
        ds_ioTrainingCourse,
        ds_ioCommonCode,
        ds_ioCorrectAnswerTmp,
        btnAdd_OnClick,
        btnDel_OnClick,
        btnNext_OnClick,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};