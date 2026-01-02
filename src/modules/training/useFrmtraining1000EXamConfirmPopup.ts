// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioProfessor {
    EAMGNO: string;
    EATPMGNO: string;
    EAMGGTMGNO: string;
    EADATE: string;
    EASTATUS: string;
    EAJUBSUGUBUN: string;
    EATCCOURSECD: string;
    EATCCOURSENM: string;
    EACONFIRMDATE: string;
    EAJUBSUDATE: string;
    EACONFIRMSABUN: string;
    EAREASON: string;
    EAREMARK: string;
    EAMODREASON: string;
    EAFILEPATH: string;
    EAFILENM: string;
    EACLASSGUBUN: string;
    EAREGDATE: string;
    EAREGSABUN: string;
    EAMODDATE: string;
    EAMODSABUN: string;
    PERSONNM: string;
    BIRTHDAY: string;
    HPTEL: string;
    ADRESS: string;
    EAJUBSUGUBUN2: string;
    EAADDRGUBUN: string;
    YEAR: string;
    MON: string;
    DAY: string;
    PAPERNB: string;
    EACANCELL: string;
}

export interface Ids_Jibu {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_status {
    CD: string;
    DATA: string;
}

export interface Ids_ioExamJubsu {
    PERSONNM: string;
    BIRTHDAY7: string;
    HPTEL: string;
    ZIPCD: string;
    ADDR1: string;
    ADDR2: string;
    TEL: string;
    PERSONKEY: string;
    LASTIMGSEQ: string;
    EATPMGNO: string;
    EAMGNO: string;
    EATCCOURSECD: string;
    EAMGGTMGNO: string;
    EADATE: string;
    EAJUBSUGUBUN: string;
    EAJUBSUGUBUN2: string;
    IIDIRPATH: string;
    IIIMGSEQ: string;
    IIREALNM: string;
    IISAVENM: string;
    LASTIMGSEQ0: string;
    IIIMGBINARY: string;
    IILASTREALNM: string;
    AUTHYN: string;
    EARPNUCD: string;
    EARROADBUILDMGNO: string;
    EARROADDETAIL: string;
    EARROADREMAIN: string;
    EARSANGUBUN: string;
    EARMAINBUNJI: string;
    EARSUBBUNJI: string;
    EARBUILDNM: string;
    EARADDRETC: string;
    EARCONVPGM: string;
    EARCONVSTATUS: string;
    EAADDRGUBUN: string;
}

export interface Ids_oJubsuGubunCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJubsuGubun {
    CD: string;
    DATA: string;
    DATA2: string;
    DATA3: string;
    DATA4: string;
}

export interface Ids_oProfessor {
    PERSONNM: string;
    BIRTHDAY7: string;
    HPTEL: string;
    ZIPCD: string;
    ADDR1: string;
    ADDR2: string;
    TEL: string;
    PERSONKEY: string;
    LASTIMGSEQ: string;
    EATPMGNO: string;
    EAMGNO: string;
    EATCCOURSECD: string;
    EAMGGTMGNO: string;
    EADATE: string;
    EAJUBSUGUBUN: string;
    EAJUBSUGUBUN2: string;
    IIDIRPATH: string;
    IIIMGSEQ: string;
    IIREALNM: string;
    IISAVENM: string;
    LASTIMGSEQ0: string;
    IIIMGBINARY: string;
    IILASTREALNM: string;
}

export interface Ids_oChangeTpmgno {
    CD: string;
    DATA: string;
}

export interface Ids_ioExamPerson {
}

export interface Ids_ioT_E_L_JubsuCheck {
}

export interface Ids_oJubsuGubunCheck {
    CD: string;
    DATA: string;
}

export interface Ids_oJubsuGubun_copy {
    CD: string;
    DATA: string;
    DATA2: string;
    DATA3: string;
}

export interface Ids_KemsOnline {
    CD: string;
    DATA: string;
}

export interface Ids_examaccept {
}

export interface Ids_examaccept_first {
}

export interface Ids_examaccept_two {
}

export interface Ids_oTrainingPerson {
}

export interface Ids_oAddr {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu2 {
    CD: string;
    DATA: string;
}

export interface Ids_oExamJubsu {
}

export interface Ids_ioProfessorData {
    EAMGNO: string;
    EATPMGNO: string;
    EAMGGTMGNO: string;
    EADATE: string;
    EASTATUS: string;
    EAJUBSUGUBUN: string;
    EATCCOURSECD: string;
    EACONFIRMDATE: string;
    EAJUBSUDATE: string;
    EACONFIRMSABUN: string;
    EAREASON: string;
    EAREMARK: string;
    EAMODREASON: string;
    EAFILEPATH: string;
    EAFILENM: string;
    EACLASSGUBUN: string;
    EAREGDATE: string;
    EAREGSABUN: string;
    EAMODDATE: string;
    EAMODSABUN: string;
    PERSONNM: string;
    BIRTHDAY: string;
    HPTEL: string;
    ADRESS: string;
    EAJUBSUGUBUN2: string;
    EAADDRGUBUN: string;
    YEAR: string;
    MON: string;
    DAY: string;
    PAPERNB: string;
}

export interface Ids_oForm {
    CD: string;
    DATA: string;
}

export interface Ids_iFormSave {
    I_PROC: string;
    I_FCCD: string;
    I_FAMGNO: string;
    I_PK1VAL: string;
    I_PK2VAL: string;
    I_FRDATE: string;
    I_PATH: string;
    I_FILENM: string;
}

export interface Ids_oFormSave {
}

export interface Ids_iFormDelete {
    I_FCCD: string;
    I_FAMGNO: string;
    I_PK1VAL: string;
    I_PK2VAL: string;
    I_PATH: string;
    I_FILENM: string;
}

export interface Ids_oFormDelete {
}

export interface Ids_examaccept_tree {
}

export const useFrmtraining1000EXamConfirmPopup = () => {
    const [ds_ioProfessor, setds_ioProfessor] = useState<Ids_ioProfessor[]>([]);
    const [ds_Jibu, setds_Jibu] = useState<Ids_Jibu[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_status, setds_status] = useState<Ids_status[]>([]);
    const [ds_ioExamJubsu, setds_ioExamJubsu] = useState<Ids_ioExamJubsu[]>([]);
    const [ds_oJubsuGubunCourse, setds_oJubsuGubunCourse] = useState<Ids_oJubsuGubunCourse[]>([]);
    const [ds_oJubsuGubun, setds_oJubsuGubun] = useState<Ids_oJubsuGubun[]>([]);
    const [ds_oProfessor, setds_oProfessor] = useState<Ids_oProfessor[]>([]);
    const [ds_oChangeTpmgno, setds_oChangeTpmgno] = useState<Ids_oChangeTpmgno[]>([]);
    const [ds_ioExamPerson, setds_ioExamPerson] = useState<Ids_ioExamPerson[]>([]);
    const [ds_ioT_E_L_JubsuCheck, setds_ioT_E_L_JubsuCheck] = useState<Ids_ioT_E_L_JubsuCheck[]>([]);
    const [ds_oJubsuGubunCheck, setds_oJubsuGubunCheck] = useState<Ids_oJubsuGubunCheck[]>([]);
    const [ds_oJubsuGubun_copy, setds_oJubsuGubun_copy] = useState<Ids_oJubsuGubun_copy[]>([]);
    const [ds_KemsOnline, setds_KemsOnline] = useState<Ids_KemsOnline[]>([]);
    const [ds_examaccept, setds_examaccept] = useState<Ids_examaccept[]>([]);
    const [ds_examaccept_first, setds_examaccept_first] = useState<Ids_examaccept_first[]>([]);
    const [ds_examaccept_two, setds_examaccept_two] = useState<Ids_examaccept_two[]>([]);
    const [ds_oTrainingPerson, setds_oTrainingPerson] = useState<Ids_oTrainingPerson[]>([]);
    const [ds_oAddr, setds_oAddr] = useState<Ids_oAddr[]>([]);
    const [ds_oJibu2, setds_oJibu2] = useState<Ids_oJibu2[]>([]);
    const [ds_oExamJubsu, setds_oExamJubsu] = useState<Ids_oExamJubsu[]>([]);
    const [ds_ioProfessorData, setds_ioProfessorData] = useState<Ids_ioProfessorData[]>([]);
    const [ds_oForm, setds_oForm] = useState<Ids_oForm[]>([]);
    const [ds_iFormSave, setds_iFormSave] = useState<Ids_iFormSave[]>([]);
    const [ds_oFormSave, setds_oFormSave] = useState<Ids_oFormSave[]>([]);
    const [ds_iFormDelete, setds_iFormDelete] = useState<Ids_iFormDelete[]>([]);
    const [ds_oFormDelete, setds_oFormDelete] = useState<Ids_oFormDelete[]>([]);
    const [ds_examaccept_tree, setds_examaccept_tree] = useState<Ids_examaccept_tree[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioProfessor([]);
            setds_Jibu([]);
            setds_oJibu([]);
            setds_status([]);
            setds_ioExamJubsu([]);
            setds_oJubsuGubunCourse([]);
            setds_oJubsuGubun([]);
            setds_oProfessor([]);
            setds_oChangeTpmgno([]);
            setds_ioExamPerson([]);
            setds_ioT_E_L_JubsuCheck([]);
            setds_oJubsuGubunCheck([]);
            setds_oJubsuGubun_copy([]);
            setds_KemsOnline([]);
            setds_examaccept([]);
            setds_examaccept_first([]);
            setds_examaccept_two([]);
            setds_oTrainingPerson([]);
            setds_oAddr([]);
            setds_oJibu2([]);
            setds_oExamJubsu([]);
            setds_ioProfessorData([]);
            setds_oForm([]);
            setds_iFormSave([]);
            setds_oFormSave([]);
            setds_iFormDelete([]);
            setds_oFormDelete([]);
            setds_examaccept_tree([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioProfessor,
        ds_Jibu,
        ds_oJibu,
        ds_status,
        ds_ioExamJubsu,
        ds_oJubsuGubunCourse,
        ds_oJubsuGubun,
        ds_oProfessor,
        ds_oChangeTpmgno,
        ds_ioExamPerson,
        ds_ioT_E_L_JubsuCheck,
        ds_oJubsuGubunCheck,
        ds_oJubsuGubun_copy,
        ds_KemsOnline,
        ds_examaccept,
        ds_examaccept_first,
        ds_examaccept_two,
        ds_oTrainingPerson,
        ds_oAddr,
        ds_oJibu2,
        ds_oExamJubsu,
        ds_ioProfessorData,
        ds_oForm,
        ds_iFormSave,
        ds_oFormSave,
        ds_iFormDelete,
        ds_oFormDelete,
        ds_examaccept_tree,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};