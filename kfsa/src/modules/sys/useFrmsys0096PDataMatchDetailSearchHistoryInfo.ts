// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioWorkList, Ids_ioMFFireObjD, Ids_ioFireManagerInfo } from './Frmsys0096PDataMatchDetailSearchHistoryInfoData';

export const useFrmsys0096PDataMatchDetailSearchHistoryInfo = () => {
    const [ds_ioWorkList, setds_ioWorkList] = useState<Ids_ioWorkList[]>([]);
    const [ds_ioMFFireObjD, setds_ioMFFireObjD] = useState<Ids_ioMFFireObjD[]>([]);
    const [ds_ioFireManagerInfo, setds_ioFireManagerInfo] = useState<Ids_ioFireManagerInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_TabMain, setRawVisible_TabMain] = useState(true);
    const [rawVisible_Shape4, setRawVisible_Shape4] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const [rawVisible_Static18, setRawVisible_Static18] = useState(true);
    const [rawVisible_Static19, setRawVisible_Static19] = useState(true);
    const [rawVisible_Static20, setRawVisible_Static20] = useState(true);
    const [rawVisible_Static21, setRawVisible_Static21] = useState(true);
    const [rawVisible_Static22, setRawVisible_Static22] = useState(true);
    const [rawVisible_Static23, setRawVisible_Static23] = useState(true);
    const [rawVisible_edMFOBJ_NM, setRawVisible_edMFOBJ_NM] = useState(true);
    const [rawVisible_edMFLEGALDONG_ADRES_NM, setRawVisible_edMFLEGALDONG_ADRES_NM] = useState(true);
    const [rawVisible_edMFFDong, setRawVisible_edMFFDong] = useState(true);
    const [rawVisible_edMFDYTM_TLPHON, setRawVisible_edMFDYTM_TLPHON] = useState(true);
    const [rawVisible_edMFMAIN_PRPOS_CODE, setRawVisible_edMFMAIN_PRPOS_CODE] = useState(true);
    const [rawVisible_edMFCMPN119SC_ID, setRawVisible_edMFCMPN119SC_ID] = useState(true);
    const [rawVisible_edMFOBJ_SE_CODE, setRawVisible_edMFOBJ_SE_CODE] = useState(true);
    const [rawVisible_edMFMainAddr, setRawVisible_edMFMainAddr] = useState(true);
    const [rawVisible_Static31, setRawVisible_Static31] = useState(true);
    const [rawVisible_edMFPBLINSTT_AT, setRawVisible_edMFPBLINSTT_AT] = useState(true);
    const [rawVisible_Static32, setRawVisible_Static32] = useState(true);
    const [rawVisible_edMFMANAGE_ENTRPS_VRSC_AT, setRawVisible_edMFMANAGE_ENTRPS_VRSC_AT] = useState(true);
    const [rawVisible_edMFSubAddr, setRawVisible_edMFSubAddr] = useState(true);
    const [rawVisible_edMFMatch, setRawVisible_edMFMatch] = useState(true);
    const [rawVisible_Static48, setRawVisible_Static48] = useState(true);
    const [rawVisible_Static49, setRawVisible_Static49] = useState(true);
    const [rawVisible_Static50, setRawVisible_Static50] = useState(true);
    const [rawVisible_Static51, setRawVisible_Static51] = useState(true);
    const [rawVisible_Static52, setRawVisible_Static52] = useState(true);
    const [rawVisible_edMFUse, setRawVisible_edMFUse] = useState(true);
    const [rawVisible_Static57, setRawVisible_Static57] = useState(true);
    const [rawVisible_Edit0, setRawVisible_Edit0] = useState(true);
    const [rawVisible_Static58, setRawVisible_Static58] = useState(true);
    const [rawVisible_Edit1, setRawVisible_Edit1] = useState(true);
    const [rawVisible_edMFDong, setRawVisible_edMFDong] = useState(true);
    const [rawVisible_edMFADDR, setRawVisible_edMFADDR] = useState(true);
    const [rawVisible_edMFCOMPET_DE, setRawVisible_edMFCOMPET_DE] = useState(true);
    const [rawVisible_edMFMNFCTRETCNM, setRawVisible_edMFMNFCTRETCNM] = useState(true);
    const [rawVisible_edMFMNFCTRETCDETAILNM, setRawVisible_edMFMNFCTRETCDETAILNM] = useState(true);
    const [rawVisible_edMFINSTLR_TELNO, setRawVisible_edMFINSTLR_TELNO] = useState(true);
    const [rawVisible_edMFINSTLR_NM, setRawVisible_edMFINSTLR_NM] = useState(true);
    const [rawVisible_edMFPRMISN_NO, setRawVisible_edMFPRMISN_NO] = useState(true);
    const [rawVisible_Static62, setRawVisible_Static62] = useState(true);
    const [rawVisible_edMFINSTLR_CPR_NM, setRawVisible_edMFINSTLR_CPR_NM] = useState(true);
    const [rawVisible_Static63, setRawVisible_Static63] = useState(true);
    const [rawVisible_lbTitle, setRawVisible_lbTitle] = useState(true);
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_TabMain = rawVisible_TabMain;
    const setIsVisible_TabMain = setRawVisible_TabMain;
    const isVisible_Shape4 = rawVisible_Shape4;
    const setIsVisible_Shape4 = setRawVisible_Shape4;
    const isVisible_Static15 = rawVisible_Static15;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_Static17 = rawVisible_Static17;
    const setIsVisible_Static17 = setRawVisible_Static17;
    const isVisible_Static18 = rawVisible_Static18;
    const setIsVisible_Static18 = setRawVisible_Static18;
    const isVisible_Static19 = rawVisible_Static19;
    const setIsVisible_Static19 = setRawVisible_Static19;
    const isVisible_Static20 = rawVisible_Static20;
    const setIsVisible_Static20 = setRawVisible_Static20;
    const isVisible_Static21 = rawVisible_Static21;
    const setIsVisible_Static21 = setRawVisible_Static21;
    const isVisible_Static22 = rawVisible_Static22;
    const setIsVisible_Static22 = setRawVisible_Static22;
    const isVisible_Static23 = rawVisible_Static23;
    const setIsVisible_Static23 = setRawVisible_Static23;
    const isVisible_edMFOBJ_NM = rawVisible_edMFOBJ_NM;
    const setIsVisible_edMFOBJ_NM = setRawVisible_edMFOBJ_NM;
    const isVisible_edMFLEGALDONG_ADRES_NM = rawVisible_edMFLEGALDONG_ADRES_NM;
    const setIsVisible_edMFLEGALDONG_ADRES_NM = setRawVisible_edMFLEGALDONG_ADRES_NM;
    const isVisible_edMFFDong = rawVisible_edMFFDong;
    const setIsVisible_edMFFDong = setRawVisible_edMFFDong;
    const isVisible_edMFDYTM_TLPHON = rawVisible_edMFDYTM_TLPHON;
    const setIsVisible_edMFDYTM_TLPHON = setRawVisible_edMFDYTM_TLPHON;
    const isVisible_edMFMAIN_PRPOS_CODE = rawVisible_edMFMAIN_PRPOS_CODE;
    const setIsVisible_edMFMAIN_PRPOS_CODE = setRawVisible_edMFMAIN_PRPOS_CODE;
    const isVisible_edMFCMPN119SC_ID = rawVisible_edMFCMPN119SC_ID;
    const setIsVisible_edMFCMPN119SC_ID = setRawVisible_edMFCMPN119SC_ID;
    const isVisible_edMFOBJ_SE_CODE = rawVisible_edMFOBJ_SE_CODE;
    const setIsVisible_edMFOBJ_SE_CODE = setRawVisible_edMFOBJ_SE_CODE;
    const isVisible_edMFMainAddr = rawVisible_edMFMainAddr;
    const setIsVisible_edMFMainAddr = setRawVisible_edMFMainAddr;
    const isVisible_Static31 = rawVisible_Static31;
    const setIsVisible_Static31 = setRawVisible_Static31;
    const isVisible_edMFPBLINSTT_AT = rawVisible_edMFPBLINSTT_AT;
    const setIsVisible_edMFPBLINSTT_AT = setRawVisible_edMFPBLINSTT_AT;
    const isVisible_Static32 = rawVisible_Static32;
    const setIsVisible_Static32 = setRawVisible_Static32;
    const isVisible_edMFMANAGE_ENTRPS_VRSC_AT = rawVisible_edMFMANAGE_ENTRPS_VRSC_AT;
    const setIsVisible_edMFMANAGE_ENTRPS_VRSC_AT = setRawVisible_edMFMANAGE_ENTRPS_VRSC_AT;
    const isVisible_edMFSubAddr = rawVisible_edMFSubAddr;
    const setIsVisible_edMFSubAddr = setRawVisible_edMFSubAddr;
    const isVisible_edMFMatch = rawVisible_edMFMatch;
    const setIsVisible_edMFMatch = setRawVisible_edMFMatch;
    const isVisible_Static48 = rawVisible_Static48;
    const setIsVisible_Static48 = setRawVisible_Static48;
    const isVisible_Static49 = rawVisible_Static49;
    const setIsVisible_Static49 = setRawVisible_Static49;
    const isVisible_Static50 = rawVisible_Static50;
    const setIsVisible_Static50 = setRawVisible_Static50;
    const isVisible_Static51 = rawVisible_Static51;
    const setIsVisible_Static51 = setRawVisible_Static51;
    const isVisible_Static52 = rawVisible_Static52;
    const setIsVisible_Static52 = setRawVisible_Static52;
    const isVisible_edMFUse = rawVisible_edMFUse;
    const setIsVisible_edMFUse = setRawVisible_edMFUse;
    const isVisible_Static57 = rawVisible_Static57;
    const setIsVisible_Static57 = setRawVisible_Static57;
    const isVisible_Edit0 = rawVisible_Edit0;
    const setIsVisible_Edit0 = setRawVisible_Edit0;
    const isVisible_Static58 = rawVisible_Static58;
    const setIsVisible_Static58 = setRawVisible_Static58;
    const isVisible_Edit1 = rawVisible_Edit1;
    const setIsVisible_Edit1 = setRawVisible_Edit1;
    const isVisible_edMFDong = rawVisible_edMFDong;
    const setIsVisible_edMFDong = setRawVisible_edMFDong;
    const isVisible_edMFADDR = rawVisible_edMFADDR;
    const setIsVisible_edMFADDR = setRawVisible_edMFADDR;
    const isVisible_edMFCOMPET_DE = rawVisible_edMFCOMPET_DE;
    const setIsVisible_edMFCOMPET_DE = setRawVisible_edMFCOMPET_DE;
    const isVisible_edMFMNFCTRETCNM = rawVisible_edMFMNFCTRETCNM;
    const setIsVisible_edMFMNFCTRETCNM = setRawVisible_edMFMNFCTRETCNM;
    const isVisible_edMFMNFCTRETCDETAILNM = rawVisible_edMFMNFCTRETCDETAILNM;
    const setIsVisible_edMFMNFCTRETCDETAILNM = setRawVisible_edMFMNFCTRETCDETAILNM;
    const isVisible_edMFINSTLR_TELNO = rawVisible_edMFINSTLR_TELNO;
    const setIsVisible_edMFINSTLR_TELNO = setRawVisible_edMFINSTLR_TELNO;
    const isVisible_edMFINSTLR_NM = rawVisible_edMFINSTLR_NM;
    const setIsVisible_edMFINSTLR_NM = setRawVisible_edMFINSTLR_NM;
    const isVisible_edMFPRMISN_NO = rawVisible_edMFPRMISN_NO;
    const setIsVisible_edMFPRMISN_NO = setRawVisible_edMFPRMISN_NO;
    const isVisible_Static62 = rawVisible_Static62;
    const setIsVisible_Static62 = setRawVisible_Static62;
    const isVisible_edMFINSTLR_CPR_NM = rawVisible_edMFINSTLR_CPR_NM;
    const setIsVisible_edMFINSTLR_CPR_NM = setRawVisible_edMFINSTLR_CPR_NM;
    const isVisible_Static63 = rawVisible_Static63;
    const setIsVisible_Static63 = setRawVisible_Static63;
    const isVisible_lbTitle = rawVisible_lbTitle;
    const setIsVisible_lbTitle = setRawVisible_lbTitle;
    const [tabValue_TabMain, setTabValue_TabMain] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioWorkList([]);
            setds_ioMFFireObjD([]);
            setds_ioFireManagerInfo([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_ioWorkList,
        ds_ioMFFireObjD,
        ds_ioFireManagerInfo,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_TabMain,
        setIsVisible_TabMain,
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_Static17,
        setIsVisible_Static17,
        isVisible_Static18,
        setIsVisible_Static18,
        isVisible_Static19,
        setIsVisible_Static19,
        isVisible_Static20,
        setIsVisible_Static20,
        isVisible_Static21,
        setIsVisible_Static21,
        isVisible_Static22,
        setIsVisible_Static22,
        isVisible_Static23,
        setIsVisible_Static23,
        isVisible_edMFOBJ_NM,
        setIsVisible_edMFOBJ_NM,
        isVisible_edMFLEGALDONG_ADRES_NM,
        setIsVisible_edMFLEGALDONG_ADRES_NM,
        isVisible_edMFFDong,
        setIsVisible_edMFFDong,
        isVisible_edMFDYTM_TLPHON,
        setIsVisible_edMFDYTM_TLPHON,
        isVisible_edMFMAIN_PRPOS_CODE,
        setIsVisible_edMFMAIN_PRPOS_CODE,
        isVisible_edMFCMPN119SC_ID,
        setIsVisible_edMFCMPN119SC_ID,
        isVisible_edMFOBJ_SE_CODE,
        setIsVisible_edMFOBJ_SE_CODE,
        isVisible_edMFMainAddr,
        setIsVisible_edMFMainAddr,
        isVisible_Static31,
        setIsVisible_Static31,
        isVisible_edMFPBLINSTT_AT,
        setIsVisible_edMFPBLINSTT_AT,
        isVisible_Static32,
        setIsVisible_Static32,
        isVisible_edMFMANAGE_ENTRPS_VRSC_AT,
        setIsVisible_edMFMANAGE_ENTRPS_VRSC_AT,
        isVisible_edMFSubAddr,
        setIsVisible_edMFSubAddr,
        isVisible_edMFMatch,
        setIsVisible_edMFMatch,
        isVisible_Static48,
        setIsVisible_Static48,
        isVisible_Static49,
        setIsVisible_Static49,
        isVisible_Static50,
        setIsVisible_Static50,
        isVisible_Static51,
        setIsVisible_Static51,
        isVisible_Static52,
        setIsVisible_Static52,
        isVisible_edMFUse,
        setIsVisible_edMFUse,
        isVisible_Static57,
        setIsVisible_Static57,
        isVisible_Edit0,
        setIsVisible_Edit0,
        isVisible_Static58,
        setIsVisible_Static58,
        isVisible_Edit1,
        setIsVisible_Edit1,
        isVisible_edMFDong,
        setIsVisible_edMFDong,
        isVisible_edMFADDR,
        setIsVisible_edMFADDR,
        isVisible_edMFCOMPET_DE,
        setIsVisible_edMFCOMPET_DE,
        isVisible_edMFMNFCTRETCNM,
        setIsVisible_edMFMNFCTRETCNM,
        isVisible_edMFMNFCTRETCDETAILNM,
        setIsVisible_edMFMNFCTRETCDETAILNM,
        isVisible_edMFINSTLR_TELNO,
        setIsVisible_edMFINSTLR_TELNO,
        isVisible_edMFINSTLR_NM,
        setIsVisible_edMFINSTLR_NM,
        isVisible_edMFPRMISN_NO,
        setIsVisible_edMFPRMISN_NO,
        isVisible_Static62,
        setIsVisible_Static62,
        isVisible_edMFINSTLR_CPR_NM,
        setIsVisible_edMFINSTLR_CPR_NM,
        isVisible_Static63,
        setIsVisible_Static63,
        isVisible_lbTitle,
        setIsVisible_lbTitle,
        tabValue_TabMain,
        setTabValue_TabMain,
        lfn_End,
    };
};