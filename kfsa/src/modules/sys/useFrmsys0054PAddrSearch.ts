// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oPostCode, Ids_oSido, Ids_oDong, Ids_oRoad, Ids_iSearch, Ids_oRoadAddr, Ids_oRoadList, Ids_iPostAddrDivide, Ids_oPostAddrDivide } from './Frmsys0054PAddrSearchData';

export const useFrmsys0054PAddrSearch = () => {
    const [ds_oPostCode, setds_oPostCode] = useState<Ids_oPostCode[]>([]);
    const [ds_oSido, setds_oSido] = useState<Ids_oSido[]>([]);
    const [ds_oDong, setds_oDong] = useState<Ids_oDong[]>([]);
    const [ds_oRoad, setds_oRoad] = useState<Ids_oRoad[]>([]);
    const [ds_iSearch, setds_iSearch] = useState<Ids_iSearch[]>([]);
    const [ds_oRoadAddr, setds_oRoadAddr] = useState<Ids_oRoadAddr[]>([]);
    const [ds_oRoadList, setds_oRoadList] = useState<Ids_oRoadList[]>([]);
    const [ds_iPostAddrDivide, setds_iPostAddrDivide] = useState<Ids_iPostAddrDivide[]>([]);
    const [ds_oPostAddrDivide, setds_oPostAddrDivide] = useState<Ids_oPostAddrDivide[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_TabAddr, setRawVisible_TabAddr] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_lbSido, setRawVisible_lbSido] = useState(true);
    const [rawVisible_cbxSido2, setRawVisible_cbxSido2] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_btnRoadSearch2, setRawVisible_btnRoadSearch2] = useState(true);
    const [rawVisible_gdRoad2, setRawVisible_gdRoad2] = useState(true);
    const [rawVisible_lbOldAddr, setRawVisible_lbOldAddr] = useState(true);
    const [rawVisible_edRoadDetailAddr2, setRawVisible_edRoadDetailAddr2] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_edRoadEtcAddr2, setRawVisible_edRoadEtcAddr2] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_lbBuildingInfo, setRawVisible_lbBuildingInfo] = useState(true);
    const [rawVisible_edRoadApplyAddr21, setRawVisible_edRoadApplyAddr21] = useState(true);
    const [rawVisible_edRoadApplyAddr22, setRawVisible_edRoadApplyAddr22] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_btnRoadApply, setRawVisible_btnRoadApply] = useState(true);
    const [rawVisible_btnRoadApplyCancel, setRawVisible_btnRoadApplyCancel] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_Shape6, setRawVisible_Shape6] = useState(true);
    const [rawVisible_Shape7, setRawVisible_Shape7] = useState(true);
    const [rawVisible_Shape5, setRawVisible_Shape5] = useState(true);
    const [rawVisible_chkRoadInput, setRawVisible_chkRoadInput] = useState(true);
    const [rawVisible_edRoad, setRawVisible_edRoad] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_edRoadBuildMainNo, setRawVisible_edRoadBuildMainNo] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_edRoadBuildSubNo, setRawVisible_edRoadBuildSubNo] = useState(true);
    const [rawVisible_medPostCode2, setRawVisible_medPostCode2] = useState(true);
    const [rawVisible_cbxSido, setRawVisible_cbxSido] = useState(true);
    const [rawVisible_lbKu, setRawVisible_lbKu] = useState(true);
    const [rawVisible_gdPost, setRawVisible_gdPost] = useState(true);
    const [rawVisible_edDong, setRawVisible_edDong] = useState(true);
    const [rawVisible_edPostAddr1, setRawVisible_edPostAddr1] = useState(true);
    const [rawVisible_ChkPostMountain, setRawVisible_ChkPostMountain] = useState(true);
    const [rawVisible_edPostMainBunji, setRawVisible_edPostMainBunji] = useState(true);
    const [rawVisible_edPostSubBunji, setRawVisible_edPostSubBunji] = useState(true);
    const [rawVisible_edPostBuildNM, setRawVisible_edPostBuildNM] = useState(true);
    const [rawVisible_edPostDetailAddr, setRawVisible_edPostDetailAddr] = useState(true);
    const [rawVisible_gdRoad1, setRawVisible_gdRoad1] = useState(true);
    const [rawVisible_edRoadDetailAddr1, setRawVisible_edRoadDetailAddr1] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_edRoadEtcAddr1, setRawVisible_edRoadEtcAddr1] = useState(true);
    const [rawVisible_btnPostCodeSearch, setRawVisible_btnPostCodeSearch] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_btnPostApply, setRawVisible_btnPostApply] = useState(true);
    const [rawVisible_btnRoadSearch, setRawVisible_btnRoadSearch] = useState(true);
    const [rawVisible_btnPostApplyCancel, setRawVisible_btnPostApplyCancel] = useState(true);
    const [rawVisible_Shape8, setRawVisible_Shape8] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_edPostApplyAddr1, setRawVisible_edPostApplyAddr1] = useState(true);
    const [rawVisible_edPostApplyAddr2, setRawVisible_edPostApplyAddr2] = useState(true);
    const [rawVisible_chkPostInput, setRawVisible_chkPostInput] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_Shape4, setRawVisible_Shape4] = useState(true);
    const [rawVisible_Shape9, setRawVisible_Shape9] = useState(true);
    const [rawVisible_edRoadApplyAddr11, setRawVisible_edRoadApplyAddr11] = useState(true);
    const [rawVisible_edRoadApplyAddr12, setRawVisible_edRoadApplyAddr12] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_medPostCode11, setRawVisible_medPostCode11] = useState(true);
    const [rawVisible_medPostCode12, setRawVisible_medPostCode12] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_TabAddr = rawVisible_TabAddr;
    const setIsVisible_TabAddr = setRawVisible_TabAddr;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_lbSido = rawVisible_lbSido;
    const setIsVisible_lbSido = setRawVisible_lbSido;
    const isVisible_cbxSido2 = rawVisible_cbxSido2;
    const setIsVisible_cbxSido2 = setRawVisible_cbxSido2;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_btnRoadSearch2 = rawVisible_btnRoadSearch2;
    const setIsVisible_btnRoadSearch2 = setRawVisible_btnRoadSearch2;
    const isVisible_gdRoad2 = rawVisible_gdRoad2;
    const setIsVisible_gdRoad2 = setRawVisible_gdRoad2;
    const isVisible_lbOldAddr = rawVisible_lbOldAddr;
    const setIsVisible_lbOldAddr = setRawVisible_lbOldAddr;
    const isVisible_edRoadDetailAddr2 = rawVisible_edRoadDetailAddr2;
    const setIsVisible_edRoadDetailAddr2 = setRawVisible_edRoadDetailAddr2;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_edRoadEtcAddr2 = rawVisible_edRoadEtcAddr2;
    const setIsVisible_edRoadEtcAddr2 = setRawVisible_edRoadEtcAddr2;
    const isVisible_Static5 = rawVisible_Static5;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_Static2 = rawVisible_Static2;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_lbBuildingInfo = rawVisible_lbBuildingInfo;
    const setIsVisible_lbBuildingInfo = setRawVisible_lbBuildingInfo;
    const isVisible_edRoadApplyAddr21 = rawVisible_edRoadApplyAddr21;
    const setIsVisible_edRoadApplyAddr21 = setRawVisible_edRoadApplyAddr21;
    const isVisible_edRoadApplyAddr22 = rawVisible_edRoadApplyAddr22;
    const setIsVisible_edRoadApplyAddr22 = setRawVisible_edRoadApplyAddr22;
    const isVisible_Static3 = rawVisible_Static3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_btnRoadApply = rawVisible_btnRoadApply;
    const setIsVisible_btnRoadApply = setRawVisible_btnRoadApply;
    const isVisible_btnRoadApplyCancel = rawVisible_btnRoadApplyCancel;
    const setIsVisible_btnRoadApplyCancel = setRawVisible_btnRoadApplyCancel;
    const isVisible_Static11 = rawVisible_Static11;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_Shape6 = rawVisible_Shape6;
    const setIsVisible_Shape6 = setRawVisible_Shape6;
    const isVisible_Shape7 = rawVisible_Shape7;
    const setIsVisible_Shape7 = setRawVisible_Shape7;
    const isVisible_Shape5 = rawVisible_Shape5;
    const setIsVisible_Shape5 = setRawVisible_Shape5;
    const isVisible_chkRoadInput = rawVisible_chkRoadInput;
    const setIsVisible_chkRoadInput = setRawVisible_chkRoadInput;
    const isVisible_edRoad = rawVisible_edRoad;
    const setIsVisible_edRoad = setRawVisible_edRoad;
    const isVisible_Static4 = rawVisible_Static4;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_edRoadBuildMainNo = rawVisible_edRoadBuildMainNo;
    const setIsVisible_edRoadBuildMainNo = setRawVisible_edRoadBuildMainNo;
    const isVisible_Static6 = rawVisible_Static6;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_edRoadBuildSubNo = rawVisible_edRoadBuildSubNo;
    const setIsVisible_edRoadBuildSubNo = setRawVisible_edRoadBuildSubNo;
    const isVisible_medPostCode2 = rawVisible_medPostCode2;
    const setIsVisible_medPostCode2 = setRawVisible_medPostCode2;
    const isVisible_cbxSido = rawVisible_cbxSido;
    const setIsVisible_cbxSido = setRawVisible_cbxSido;
    const isVisible_lbKu = rawVisible_lbKu;
    const setIsVisible_lbKu = setRawVisible_lbKu;
    const isVisible_gdPost = rawVisible_gdPost;
    const setIsVisible_gdPost = setRawVisible_gdPost;
    const isVisible_edDong = rawVisible_edDong;
    const setIsVisible_edDong = setRawVisible_edDong;
    const isVisible_edPostAddr1 = rawVisible_edPostAddr1;
    const setIsVisible_edPostAddr1 = setRawVisible_edPostAddr1;
    const isVisible_ChkPostMountain = rawVisible_ChkPostMountain;
    const setIsVisible_ChkPostMountain = setRawVisible_ChkPostMountain;
    const isVisible_edPostMainBunji = rawVisible_edPostMainBunji;
    const setIsVisible_edPostMainBunji = setRawVisible_edPostMainBunji;
    const isVisible_edPostSubBunji = rawVisible_edPostSubBunji;
    const setIsVisible_edPostSubBunji = setRawVisible_edPostSubBunji;
    const isVisible_edPostBuildNM = rawVisible_edPostBuildNM;
    const setIsVisible_edPostBuildNM = setRawVisible_edPostBuildNM;
    const isVisible_edPostDetailAddr = rawVisible_edPostDetailAddr;
    const setIsVisible_edPostDetailAddr = setRawVisible_edPostDetailAddr;
    const isVisible_gdRoad1 = rawVisible_gdRoad1;
    const setIsVisible_gdRoad1 = setRawVisible_gdRoad1;
    const isVisible_edRoadDetailAddr1 = rawVisible_edRoadDetailAddr1;
    const setIsVisible_edRoadDetailAddr1 = setRawVisible_edRoadDetailAddr1;
    const isVisible_Static7 = rawVisible_Static7;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_edRoadEtcAddr1 = rawVisible_edRoadEtcAddr1;
    const setIsVisible_edRoadEtcAddr1 = setRawVisible_edRoadEtcAddr1;
    const isVisible_btnPostCodeSearch = rawVisible_btnPostCodeSearch;
    const setIsVisible_btnPostCodeSearch = setRawVisible_btnPostCodeSearch;
    const isVisible_Static8 = rawVisible_Static8;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_btnPostApply = rawVisible_btnPostApply;
    const setIsVisible_btnPostApply = setRawVisible_btnPostApply;
    const isVisible_btnRoadSearch = rawVisible_btnRoadSearch;
    const setIsVisible_btnRoadSearch = setRawVisible_btnRoadSearch;
    const isVisible_btnPostApplyCancel = rawVisible_btnPostApplyCancel;
    const setIsVisible_btnPostApplyCancel = setRawVisible_btnPostApplyCancel;
    const isVisible_Shape8 = rawVisible_Shape8;
    const setIsVisible_Shape8 = setRawVisible_Shape8;
    const isVisible_Static9 = rawVisible_Static9;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_edPostApplyAddr1 = rawVisible_edPostApplyAddr1;
    const setIsVisible_edPostApplyAddr1 = setRawVisible_edPostApplyAddr1;
    const isVisible_edPostApplyAddr2 = rawVisible_edPostApplyAddr2;
    const setIsVisible_edPostApplyAddr2 = setRawVisible_edPostApplyAddr2;
    const isVisible_chkPostInput = rawVisible_chkPostInput;
    const setIsVisible_chkPostInput = setRawVisible_chkPostInput;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Shape4 = rawVisible_Shape4;
    const setIsVisible_Shape4 = setRawVisible_Shape4;
    const isVisible_Shape9 = rawVisible_Shape9;
    const setIsVisible_Shape9 = setRawVisible_Shape9;
    const isVisible_edRoadApplyAddr11 = rawVisible_edRoadApplyAddr11;
    const setIsVisible_edRoadApplyAddr11 = setRawVisible_edRoadApplyAddr11;
    const isVisible_edRoadApplyAddr12 = rawVisible_edRoadApplyAddr12;
    const setIsVisible_edRoadApplyAddr12 = setRawVisible_edRoadApplyAddr12;
    const isVisible_Static13 = rawVisible_Static13;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_Static14 = rawVisible_Static14;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_Static15 = rawVisible_Static15;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_medPostCode11 = rawVisible_medPostCode11;
    const setIsVisible_medPostCode11 = setRawVisible_medPostCode11;
    const isVisible_medPostCode12 = rawVisible_medPostCode12;
    const setIsVisible_medPostCode12 = setRawVisible_medPostCode12;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpBtnBox;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const [tabValue_TabAddr, setTabValue_TabAddr] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oPostCode([]);
            setds_oSido([]);
            setds_oDong([]);
            setds_oRoad([]);
            setds_iSearch([]);
            setds_oRoadAddr([]);
            setds_oRoadList([]);
            setds_iPostAddrDivide([]);
            setds_oPostAddrDivide([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const TabAddr_tabPost_btnPostApplyCancel_OnClick = () => {
        console.log('TabAddr_tabPost_btnPostApplyCancel_OnClick clicked');
    };
    const TabAddr_tabPost_btnPostApply_OnClick = () => {
        console.log('TabAddr_tabPost_btnPostApply_OnClick clicked');
    };
    const TabAddr_tabPost_btnRoadApplyCancel_OnClick = () => {
        console.log('TabAddr_tabPost_btnRoadApplyCancel_OnClick clicked');
    };
    const TabAddr_tabPost_btnRoadApply_OnClick = () => {
        console.log('TabAddr_tabPost_btnRoadApply_OnClick clicked');
    };
    const TabAddr_tabPost_btnRoadSearch_OnClick = () => {
        console.log('TabAddr_tabPost_btnRoadSearch_OnClick clicked');
    };
    const TabAddr_tabPost_chkPostInput_OnClick = () => {
        console.log('TabAddr_tabPost_chkPostInput_OnClick clicked');
    };
    const TabAddr_tabPost_chkRoadInput_OnClick = () => {
        console.log('TabAddr_tabPost_chkRoadInput_OnClick clicked');
    };
    const TabAddr_tabRoad_btnRoadApplyCancel_OnClick = () => {
        console.log('TabAddr_tabRoad_btnRoadApplyCancel_OnClick clicked');
    };
    const TabAddr_tabRoad_btnRoadApply_OnClick = () => {
        console.log('TabAddr_tabRoad_btnRoadApply_OnClick clicked');
    };
    const TabAddr_tabRoad_btnRoadSearch2_OnClick = () => {
        console.log('TabAddr_tabRoad_btnRoadSearch2_OnClick clicked');
    };
    const TabAddr_tabRoad_chkRoadInput_OnClick = () => {
        console.log('TabAddr_tabRoad_chkRoadInput_OnClick clicked');
    };
    const btnPostCodeSearch_OnClick = () => {
        console.log('btnPostCodeSearch_OnClick clicked');
    };
    const btnSave_OnClick = () => {
        console.log('btnSave_OnClick clicked');
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

    return {
        isLoading,
        ds_oPostCode,
        ds_oSido,
        ds_oDong,
        ds_oRoad,
        ds_iSearch,
        ds_oRoadAddr,
        ds_oRoadList,
        ds_iPostAddrDivide,
        ds_oPostAddrDivide,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_TabAddr,
        setIsVisible_TabAddr,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_lbSido,
        setIsVisible_lbSido,
        isVisible_cbxSido2,
        setIsVisible_cbxSido2,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_btnRoadSearch2,
        setIsVisible_btnRoadSearch2,
        isVisible_gdRoad2,
        setIsVisible_gdRoad2,
        isVisible_lbOldAddr,
        setIsVisible_lbOldAddr,
        isVisible_edRoadDetailAddr2,
        setIsVisible_edRoadDetailAddr2,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_edRoadEtcAddr2,
        setIsVisible_edRoadEtcAddr2,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_lbBuildingInfo,
        setIsVisible_lbBuildingInfo,
        isVisible_edRoadApplyAddr21,
        setIsVisible_edRoadApplyAddr21,
        isVisible_edRoadApplyAddr22,
        setIsVisible_edRoadApplyAddr22,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_btnRoadApply,
        setIsVisible_btnRoadApply,
        isVisible_btnRoadApplyCancel,
        setIsVisible_btnRoadApplyCancel,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_Shape6,
        setIsVisible_Shape6,
        isVisible_Shape7,
        setIsVisible_Shape7,
        isVisible_Shape5,
        setIsVisible_Shape5,
        isVisible_chkRoadInput,
        setIsVisible_chkRoadInput,
        isVisible_edRoad,
        setIsVisible_edRoad,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_edRoadBuildMainNo,
        setIsVisible_edRoadBuildMainNo,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_edRoadBuildSubNo,
        setIsVisible_edRoadBuildSubNo,
        isVisible_medPostCode2,
        setIsVisible_medPostCode2,
        isVisible_cbxSido,
        setIsVisible_cbxSido,
        isVisible_lbKu,
        setIsVisible_lbKu,
        isVisible_gdPost,
        setIsVisible_gdPost,
        isVisible_edDong,
        setIsVisible_edDong,
        isVisible_edPostAddr1,
        setIsVisible_edPostAddr1,
        isVisible_ChkPostMountain,
        setIsVisible_ChkPostMountain,
        isVisible_edPostMainBunji,
        setIsVisible_edPostMainBunji,
        isVisible_edPostSubBunji,
        setIsVisible_edPostSubBunji,
        isVisible_edPostBuildNM,
        setIsVisible_edPostBuildNM,
        isVisible_edPostDetailAddr,
        setIsVisible_edPostDetailAddr,
        isVisible_gdRoad1,
        setIsVisible_gdRoad1,
        isVisible_edRoadDetailAddr1,
        setIsVisible_edRoadDetailAddr1,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_edRoadEtcAddr1,
        setIsVisible_edRoadEtcAddr1,
        isVisible_btnPostCodeSearch,
        setIsVisible_btnPostCodeSearch,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_btnPostApply,
        setIsVisible_btnPostApply,
        isVisible_btnRoadSearch,
        setIsVisible_btnRoadSearch,
        isVisible_btnPostApplyCancel,
        setIsVisible_btnPostApplyCancel,
        isVisible_Shape8,
        setIsVisible_Shape8,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_edPostApplyAddr1,
        setIsVisible_edPostApplyAddr1,
        isVisible_edPostApplyAddr2,
        setIsVisible_edPostApplyAddr2,
        isVisible_chkPostInput,
        setIsVisible_chkPostInput,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_Shape9,
        setIsVisible_Shape9,
        isVisible_edRoadApplyAddr11,
        setIsVisible_edRoadApplyAddr11,
        isVisible_edRoadApplyAddr12,
        setIsVisible_edRoadApplyAddr12,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_medPostCode11,
        setIsVisible_medPostCode11,
        isVisible_medPostCode12,
        setIsVisible_medPostCode12,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        tabValue_TabAddr,
        setTabValue_TabAddr,
        TabAddr_tabPost_btnPostApplyCancel_OnClick,
        TabAddr_tabPost_btnPostApply_OnClick,
        TabAddr_tabPost_btnRoadApplyCancel_OnClick,
        TabAddr_tabPost_btnRoadApply_OnClick,
        TabAddr_tabPost_btnRoadSearch_OnClick,
        TabAddr_tabPost_chkPostInput_OnClick,
        TabAddr_tabPost_chkRoadInput_OnClick,
        TabAddr_tabRoad_btnRoadApplyCancel_OnClick,
        TabAddr_tabRoad_btnRoadApply_OnClick,
        TabAddr_tabRoad_btnRoadSearch2_OnClick,
        TabAddr_tabRoad_chkRoadInput_OnClick,
        btnPostCodeSearch_OnClick,
        btnSave_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
    };
};