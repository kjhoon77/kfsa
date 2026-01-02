// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_TecProg {
    TPMGNO: string;
    TPNO: string;
    TPEDUGUBUN: string;
    TPEDUGUBUNNM: string;
    TPYEAR: string;
    TPSEQ: string;
    TPCOURS: string;
    TPCOURSNM: string;
    TPSUBJECT: string;
    TPSUBJECTNM: string;
    TPEDUTIME: string;
    TPREQUSER: string;
    NAME_DETAIL: string;
    NAME: string;
    PROFGUBUN: string;
    TPGOAL: string;
    TPPLAN: string;
    TPDATA: string;
    TPCONTENT: string;
    TPETC: string;
    TPSTATUS: string;
    TPUSEDATE: string;
    TPOKDATE: string;
    TPUSE_YY: string;
    TPUSE_MM: string;
    TPUSE_DD: string;
    TPREQDATE: string;
    GTDEPTNM: string;
    TPOK_YY: string;
    TPOK_MM: string;
    TPOK_DD: string;
    TPPPT: string;
    CMGNO: string;
    CGUBUN: string;
    CCD: string;
    CAL_TPUSEDATE: string;
    CAL_TPOKDATE: string;
    SMGNO: string;
}

export interface Ids_Movie {
    TMSEQ: string;
    TMMOVIE: string;
}

export interface Ids_MISTEACHINGPLAN {
    TPMGNO: string;
    RECEIVE_DATE: string;
    RE_PC_POSITION: string;
    RE_APPROVER_NAME: string;
    RE_APPROVER_STATUS: string;
}

export interface Ids_Appr_insert {
    TPMGNO: string;
    TPYEAR: string;
    TPREGSABUN: string;
    TPJIBU: string;
    CMGNO: string;
    CGUBUN: string;
    CCD: string;
    TPEDUGUBUN: string;
    TPCOURSNM: string;
    TPSUBJECTNM: string;
    TPEDUTIME: string;
    TPREGSABUNNM: string;
    TPPROF: string;
    TPGOAL: string;
    TPPLAN: string;
    TPDATA: string;
    TPCONTENT: string;
    TPETC: string;
    TPPPT: string;
    TMMOVIE1: string;
    TMMOVIE2: string;
    TMMOVIE3: string;
    TMMOVIE4: string;
    TMMOVIE5: string;
    TMMOVIE6: string;
    TMMOVIE7: string;
}

export interface Igds_iModifyTecPlanH {
    THMGNO: string;
    THSEQ: string;
    THSTATUS: string;
    THSABUN: string;
    THNAME: string;
    THJIKWI: string;
    THREMARK: string;
    THREGDATE: string;
    THREGSABUN: string;
}

export interface Ids_oPersonInfo {
    MGNO: string;
    NAME: string;
    JIKWI: string;
}

export const useFrmprofes0007MaterialPopUp = () => {
    const [ds_TecProg, setds_TecProg] = useState<Ids_TecProg[]>([]);
    const [ds_Movie, setds_Movie] = useState<Ids_Movie[]>([]);
    const [ds_MISTEACHINGPLAN, setds_MISTEACHINGPLAN] = useState<Ids_MISTEACHINGPLAN[]>([]);
    const [ds_Appr_insert, setds_Appr_insert] = useState<Ids_Appr_insert[]>([]);
    const [gds_iModifyTecPlanH, setgds_iModifyTecPlanH] = useState<Igds_iModifyTecPlanH[]>([]);
    const [ds_oPersonInfo, setds_oPersonInfo] = useState<Ids_oPersonInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_TecProg([]);
            setds_Movie([]);
            setds_MISTEACHINGPLAN([]);
            setds_Appr_insert([]);
            setgds_iModifyTecPlanH([]);
            setds_oPersonInfo([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnCreate_OnClick = () => {
        console.log('btnCreate_OnClick clicked');
    };
    const btnUploadFile_OnClick = () => {
        console.log('btnUploadFile_OnClick clicked');
    };
    const btn_Approval_OnClick = () => {
        console.log('btn_Approval_OnClick clicked');
    };
    const btn_Cancel_OnClick = () => {
        console.log('btn_Cancel_OnClick clicked');
    };
    const btn_Modify_OnClick = () => {
        console.log('btn_Modify_OnClick clicked');
    };
    const btn_apprReqCancel_OnClick = () => {
        console.log('btn_apprReqCancel_OnClick clicked');
    };
    const btn_apprReq_OnClick = () => {
        console.log('btn_apprReq_OnClick clicked');
    };
    const btn_appr_OnClick = () => {
        console.log('btn_appr_OnClick clicked');
    };
    const btn_delete_OnClick = () => {
        console.log('btn_delete_OnClick clicked');
    };
    const btn_modAppr_OnClick = () => {
        console.log('btn_modAppr_OnClick clicked');
    };
    const btn_modCancel_OnClick = () => {
        console.log('btn_modCancel_OnClick clicked');
    };
    const btn_modReqCancel_OnClick = () => {
        console.log('btn_modReqCancel_OnClick clicked');
    };
    const btn_modReq_OnClick = () => {
        console.log('btn_modReq_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_DownloadFile = () => {
        console.log('lfn_DownloadFile clicked');
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

    return {
        isLoading,
        ds_TecProg,
        ds_Movie,
        ds_MISTEACHINGPLAN,
        ds_Appr_insert,
        gds_iModifyTecPlanH,
        ds_oPersonInfo,
        btnCreate_OnClick,
        btnUploadFile_OnClick,
        btn_Approval_OnClick,
        btn_Cancel_OnClick,
        btn_Modify_OnClick,
        btn_apprReqCancel_OnClick,
        btn_apprReq_OnClick,
        btn_appr_OnClick,
        btn_delete_OnClick,
        btn_modAppr_OnClick,
        btn_modCancel_OnClick,
        btn_modReqCancel_OnClick,
        btn_modReq_OnClick,
        lfn_Cancel,
        lfn_DownloadFile,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
    };
};