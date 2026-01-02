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
    LASTIMGSEQ: string;
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
    DI: string;
    CI: string;
    CIVER: string;
    PRNO: string;
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

export interface Ids_Personkey {
    PERSONKEY: string;
    PNM: string;
    PHP: string;
}

export interface Ids_oExamJubsuResult {
}

export interface Ids_oModifyColumn {
}

export interface Ids_examaccept_SW {
}

export interface Ids_ConfirmCheck {
}

export interface Ids_ioReport {
}

export interface Ids_examaccept_Five {
}

export const useFrmtraining1000EXamConfirm = () => {
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
    const [ds_Personkey, setds_Personkey] = useState<Ids_Personkey[]>([]);
    const [ds_oExamJubsuResult, setds_oExamJubsuResult] = useState<Ids_oExamJubsuResult[]>([]);
    const [ds_oModifyColumn, setds_oModifyColumn] = useState<Ids_oModifyColumn[]>([]);
    const [ds_examaccept_SW, setds_examaccept_SW] = useState<Ids_examaccept_SW[]>([]);
    const [ds_ConfirmCheck, setds_ConfirmCheck] = useState<Ids_ConfirmCheck[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_examaccept_Five, setds_examaccept_Five] = useState<Ids_examaccept_Five[]>([]);
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
            setds_Personkey([]);
            setds_oExamJubsuResult([]);
            setds_oModifyColumn([]);
            setds_examaccept_SW([]);
            setds_ConfirmCheck([]);
            setds_ioReport([]);
            setds_examaccept_Five([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btCanCell_OnClick = () => {
        console.log('btCanCell_OnClick clicked');
    };
    const btConfirmCancell_OnClick = () => {
        console.log('btConfirmCancell_OnClick clicked');
    };
    const btnApplyPicture_OnClick = () => {
        console.log('btnApplyPicture_OnClick clicked');
    };
    const btnApprove_OnClick = () => {
        console.log('btnApprove_OnClick clicked');
    };
    const btnAuthBIRTHDAY_OnClick = () => {
        console.log('btnAuthBIRTHDAY_OnClick clicked');
    };
    const btnDownload_OnClick = () => {
        console.log('btnDownload_OnClick clicked');
    };
    const btnFormDelete_OnClick = () => {
        console.log('btnFormDelete_OnClick clicked');
    };
    const btnImageZoom_OnClick = () => {
        console.log('btnImageZoom_OnClick clicked');
    };
    const btnJubsu_OnClick = () => {
        console.log('btnJubsu_OnClick clicked');
    };
    const btnLoadPicture_OnClick = () => {
        console.log('btnLoadPicture_OnClick clicked');
    };
    const btnLoadScanPicture_OnClick = () => {
        console.log('btnLoadScanPicture_OnClick clicked');
    };
    const btnLocalFormView_OnClick = () => {
        console.log('btnLocalFormView_OnClick clicked');
    };
    const btnMod_OnClick = () => {
        console.log('btnMod_OnClick clicked');
    };
    const btnPhotoScan_OnClick = () => {
        console.log('btnPhotoScan_OnClick clicked');
    };
    const btnReject_OnClick = () => {
        console.log('btnReject_OnClick clicked');
    };
    const btnRemark_OnClick = () => {
        console.log('btnRemark_OnClick clicked');
    };
    const btnScanPicture_OnClick = () => {
        console.log('btnScanPicture_OnClick clicked');
    };
    const btnScanSave_OnClick = () => {
        console.log('btnScanSave_OnClick clicked');
    };
    const btnScanSearch_OnClick = () => {
        console.log('btnScanSearch_OnClick clicked');
    };
    const btnScan_OnClick = () => {
        console.log('btnScan_OnClick clicked');
    };
    const btnSearchPersonInfoChange_OnClick = () => {
        console.log('btnSearchPersonInfoChange_OnClick clicked');
    };
    const btnSearchPersonInfo_OnClick = () => {
        console.log('btnSearchPersonInfo_OnClick clicked');
    };
    const btnSearchRegPicture_OnClick = () => {
        console.log('btnSearchRegPicture_OnClick clicked');
    };
    const btnSearchZipCode_OnClick = () => {
        console.log('btnSearchZipCode_OnClick clicked');
    };
    const btnSeverFormView_OnClick = () => {
        console.log('btnSeverFormView_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const btn_Cancell_OnClick = () => {
        console.log('btn_Cancell_OnClick clicked');
    };
    const btn_masterSave_OnClick = () => {
        console.log('btn_masterSave_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_Delete = () => {
        console.log('lfn_Delete clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Input = () => {
        console.log('lfn_Input clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
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
        ds_Personkey,
        ds_oExamJubsuResult,
        ds_oModifyColumn,
        ds_examaccept_SW,
        ds_ConfirmCheck,
        ds_ioReport,
        ds_examaccept_Five,
        btCanCell_OnClick,
        btConfirmCancell_OnClick,
        btnApplyPicture_OnClick,
        btnApprove_OnClick,
        btnAuthBIRTHDAY_OnClick,
        btnDownload_OnClick,
        btnFormDelete_OnClick,
        btnImageZoom_OnClick,
        btnJubsu_OnClick,
        btnLoadPicture_OnClick,
        btnLoadScanPicture_OnClick,
        btnLocalFormView_OnClick,
        btnMod_OnClick,
        btnPhotoScan_OnClick,
        btnReject_OnClick,
        btnRemark_OnClick,
        btnScanPicture_OnClick,
        btnScanSave_OnClick,
        btnScanSearch_OnClick,
        btnScan_OnClick,
        btnSearchPersonInfoChange_OnClick,
        btnSearchPersonInfo_OnClick,
        btnSearchRegPicture_OnClick,
        btnSearchZipCode_OnClick,
        btnSeverFormView_OnClick,
        btnToExcel_OnClick,
        btn_Cancell_OnClick,
        btn_masterSave_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Input,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};