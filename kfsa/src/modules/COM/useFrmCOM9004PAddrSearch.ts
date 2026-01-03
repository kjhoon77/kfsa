// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oJuso, Ids_oCommon, Ids_oSido, Ids_oJuso_imsi } from './FrmCOM9004PAddrSearchData';

export const useFrmCOM9004PAddrSearch = () => {
    const [ds_oJuso, setds_oJuso] = useState<Ids_oJuso[]>([]);
    const [ds_oCommon, setds_oCommon] = useState<Ids_oCommon[]>([]);
    const [ds_oSido, setds_oSido] = useState<Ids_oSido[]>([]);
    const [ds_oJuso_imsi, setds_oJuso_imsi] = useState<Ids_oJuso_imsi[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape4, setRawVisible_Shape4] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_btnSelect, setRawVisible_btnSelect] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_Button0, setRawVisible_Button0] = useState(true);
    const [rawVisible_lbPersonNm, setRawVisible_lbPersonNm] = useState(false);
    const [rawVisible_lbResidentNo, setRawVisible_lbResidentNo] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_lbWorkFormTitle, setRawVisible_lbWorkFormTitle] = useState(true);
    const [rawVisible_imgImage, setRawVisible_imgImage] = useState(true);
    const [rawVisible_lbAppointInfo, setRawVisible_lbAppointInfo] = useState(true);
    const [rawVisible_vsKeyword, setRawVisible_vsKeyword] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_lbRepayAmount, setRawVisible_lbRepayAmount] = useState(true);
    const [rawVisible_lbRecieptYn, setRawVisible_lbRecieptYn] = useState(true);
    const [rawVisible_edRaodAddr, setRawVisible_edRaodAddr] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_edBdNm, setRawVisible_edBdNm] = useState(true);
    const [rawVisible_edRoadAddrPart1, setRawVisible_edRoadAddrPart1] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_edSiNm, setRawVisible_edSiNm] = useState(true);
    const [rawVisible_edSggNm, setRawVisible_edSggNm] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_edEmdNm, setRawVisible_edEmdNm] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_edLiNm, setRawVisible_edLiNm] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_edRn, setRawVisible_edRn] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_edDetBdNmList, setRawVisible_edDetBdNmList] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_edMtYn, setRawVisible_edMtYn] = useState(true);
    const [rawVisible_edRoadAddrPart2, setRawVisible_edRoadAddrPart2] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_cbxSido, setRawVisible_cbxSido] = useState(false);
    const [rawVisible_AxMSIE0, setRawVisible_AxMSIE0] = useState(false);
    const [rawVisible_grdRoadAddr, setRawVisible_grdRoadAddr] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_edENGADDR, setRawVisible_edENGADDR] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_Static16, setRawVisible_Static16] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const [rawVisible_Static18, setRawVisible_Static18] = useState(true);
    const [rawVisible_lbRoadDetailAddr1, setRawVisible_lbRoadDetailAddr1] = useState(true);
    const [rawVisible_edRoadDetailAddr, setRawVisible_edRoadDetailAddr] = useState(true);
    const [rawVisible_lbRoadDetailAddr2, setRawVisible_lbRoadDetailAddr2] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_Static19, setRawVisible_Static19] = useState(true);
    const [rawVisible_chkRoadInput, setRawVisible_chkRoadInput] = useState(true);
    const [rawVisible_edZipNo, setRawVisible_edZipNo] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const isVisible_Shape4 = rawVisible_Shape4;
    const setIsVisible_Shape4 = setRawVisible_Shape4;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_btnSelect = rawVisible_btnSelect && rawVisible_Shape2;
    const setIsVisible_btnSelect = setRawVisible_btnSelect;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_Shape2;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_Button0 = rawVisible_Button0;
    const setIsVisible_Button0 = setRawVisible_Button0;
    const isVisible_lbPersonNm = rawVisible_lbPersonNm;
    const setIsVisible_lbPersonNm = setRawVisible_lbPersonNm;
    const isVisible_lbResidentNo = rawVisible_lbResidentNo && rawVisible_Shape2;
    const setIsVisible_lbResidentNo = setRawVisible_lbResidentNo;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape3;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_lbWorkFormTitle = rawVisible_lbWorkFormTitle;
    const setIsVisible_lbWorkFormTitle = setRawVisible_lbWorkFormTitle;
    const isVisible_imgImage = rawVisible_imgImage;
    const setIsVisible_imgImage = setRawVisible_imgImage;
    const isVisible_lbAppointInfo = rawVisible_lbAppointInfo;
    const setIsVisible_lbAppointInfo = setRawVisible_lbAppointInfo;
    const isVisible_vsKeyword = rawVisible_vsKeyword && rawVisible_Shape2;
    const setIsVisible_vsKeyword = setRawVisible_vsKeyword;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_lbRepayAmount = rawVisible_lbRepayAmount && rawVisible_Shape4;
    const setIsVisible_lbRepayAmount = setRawVisible_lbRepayAmount;
    const isVisible_lbRecieptYn = rawVisible_lbRecieptYn && rawVisible_Shape4;
    const setIsVisible_lbRecieptYn = setRawVisible_lbRecieptYn;
    const isVisible_edRaodAddr = rawVisible_edRaodAddr && rawVisible_Shape4;
    const setIsVisible_edRaodAddr = setRawVisible_edRaodAddr;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape4;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_edBdNm = rawVisible_edBdNm && rawVisible_Shape4;
    const setIsVisible_edBdNm = setRawVisible_edBdNm;
    const isVisible_edRoadAddrPart1 = rawVisible_edRoadAddrPart1 && rawVisible_Shape1;
    const setIsVisible_edRoadAddrPart1 = setRawVisible_edRoadAddrPart1;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape4;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_edSiNm = rawVisible_edSiNm && rawVisible_Shape4;
    const setIsVisible_edSiNm = setRawVisible_edSiNm;
    const isVisible_edSggNm = rawVisible_edSggNm && rawVisible_Shape4;
    const setIsVisible_edSggNm = setRawVisible_edSggNm;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape4;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_edEmdNm = rawVisible_edEmdNm && rawVisible_Shape4;
    const setIsVisible_edEmdNm = setRawVisible_edEmdNm;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape4;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_edLiNm = rawVisible_edLiNm && rawVisible_Shape4;
    const setIsVisible_edLiNm = setRawVisible_edLiNm;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_Shape4;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_edRn = rawVisible_edRn && rawVisible_Shape4;
    const setIsVisible_edRn = setRawVisible_edRn;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape1;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_Shape4;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_edDetBdNmList = rawVisible_edDetBdNmList && rawVisible_Shape4;
    const setIsVisible_edDetBdNmList = setRawVisible_edDetBdNmList;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_Shape4;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_edMtYn = rawVisible_edMtYn && rawVisible_Shape4;
    const setIsVisible_edMtYn = setRawVisible_edMtYn;
    const isVisible_edRoadAddrPart2 = rawVisible_edRoadAddrPart2 && rawVisible_Shape1;
    const setIsVisible_edRoadAddrPart2 = setRawVisible_edRoadAddrPart2;
    const isVisible_Static12 = rawVisible_Static12 && rawVisible_Shape3;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_cbxSido = rawVisible_cbxSido;
    const setIsVisible_cbxSido = setRawVisible_cbxSido;
    const isVisible_AxMSIE0 = rawVisible_AxMSIE0;
    const setIsVisible_AxMSIE0 = setRawVisible_AxMSIE0;
    const isVisible_grdRoadAddr = rawVisible_grdRoadAddr && rawVisible_Shape0;
    const setIsVisible_grdRoadAddr = setRawVisible_grdRoadAddr;
    const isVisible_Static13 = rawVisible_Static13 && rawVisible_Shape4;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_edENGADDR = rawVisible_edENGADDR && rawVisible_Shape4;
    const setIsVisible_edENGADDR = setRawVisible_edENGADDR;
    const isVisible_Static14 = rawVisible_Static14 && rawVisible_Shape3;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_Static15 = rawVisible_Static15 && rawVisible_Shape3;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_Static16 = rawVisible_Static16 && rawVisible_Shape3;
    const setIsVisible_Static16 = setRawVisible_Static16;
    const isVisible_Static17 = rawVisible_Static17 && rawVisible_Shape3;
    const setIsVisible_Static17 = setRawVisible_Static17;
    const isVisible_Static18 = rawVisible_Static18 && rawVisible_Shape3;
    const setIsVisible_Static18 = setRawVisible_Static18;
    const isVisible_lbRoadDetailAddr1 = rawVisible_lbRoadDetailAddr1 && rawVisible_Shape1;
    const setIsVisible_lbRoadDetailAddr1 = setRawVisible_lbRoadDetailAddr1;
    const isVisible_edRoadDetailAddr = rawVisible_edRoadDetailAddr && rawVisible_Shape1;
    const setIsVisible_edRoadDetailAddr = setRawVisible_edRoadDetailAddr;
    const isVisible_lbRoadDetailAddr2 = rawVisible_lbRoadDetailAddr2 && rawVisible_Shape1;
    const setIsVisible_lbRoadDetailAddr2 = setRawVisible_lbRoadDetailAddr2;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_Shape1;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_Static19 = rawVisible_Static19 && rawVisible_Shape1;
    const setIsVisible_Static19 = setRawVisible_Static19;
    const isVisible_chkRoadInput = rawVisible_chkRoadInput && rawVisible_Shape1;
    const setIsVisible_chkRoadInput = setRawVisible_chkRoadInput;
    const isVisible_edZipNo = rawVisible_edZipNo && rawVisible_Shape1;
    const setIsVisible_edZipNo = setRawVisible_edZipNo;
    const isVisible_Static8 = rawVisible_Static8;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_Static11 = rawVisible_Static11;
    const setIsVisible_Static11 = setRawVisible_Static11;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJuso([]);
            setds_oCommon([]);
            setds_oSido([]);
            setds_oJuso_imsi([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSave_OnClick = () => {
        console.log('btnSave_OnClick clicked');
    };
    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const chkRoadInput_OnClick = () => {
        console.log('chkRoadInput_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oJuso,
        ds_oCommon,
        ds_oSido,
        ds_oJuso_imsi,
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_btnSelect,
        setIsVisible_btnSelect,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_Button0,
        setIsVisible_Button0,
        isVisible_lbPersonNm,
        setIsVisible_lbPersonNm,
        isVisible_lbResidentNo,
        setIsVisible_lbResidentNo,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_lbWorkFormTitle,
        setIsVisible_lbWorkFormTitle,
        isVisible_imgImage,
        setIsVisible_imgImage,
        isVisible_lbAppointInfo,
        setIsVisible_lbAppointInfo,
        isVisible_vsKeyword,
        setIsVisible_vsKeyword,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_lbRepayAmount,
        setIsVisible_lbRepayAmount,
        isVisible_lbRecieptYn,
        setIsVisible_lbRecieptYn,
        isVisible_edRaodAddr,
        setIsVisible_edRaodAddr,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_edBdNm,
        setIsVisible_edBdNm,
        isVisible_edRoadAddrPart1,
        setIsVisible_edRoadAddrPart1,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_edSiNm,
        setIsVisible_edSiNm,
        isVisible_edSggNm,
        setIsVisible_edSggNm,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_edEmdNm,
        setIsVisible_edEmdNm,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_edLiNm,
        setIsVisible_edLiNm,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_edRn,
        setIsVisible_edRn,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_edDetBdNmList,
        setIsVisible_edDetBdNmList,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_edMtYn,
        setIsVisible_edMtYn,
        isVisible_edRoadAddrPart2,
        setIsVisible_edRoadAddrPart2,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_cbxSido,
        setIsVisible_cbxSido,
        isVisible_AxMSIE0,
        setIsVisible_AxMSIE0,
        isVisible_grdRoadAddr,
        setIsVisible_grdRoadAddr,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_edENGADDR,
        setIsVisible_edENGADDR,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_Static16,
        setIsVisible_Static16,
        isVisible_Static17,
        setIsVisible_Static17,
        isVisible_Static18,
        setIsVisible_Static18,
        isVisible_lbRoadDetailAddr1,
        setIsVisible_lbRoadDetailAddr1,
        isVisible_edRoadDetailAddr,
        setIsVisible_edRoadDetailAddr,
        isVisible_lbRoadDetailAddr2,
        setIsVisible_lbRoadDetailAddr2,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_Static19,
        setIsVisible_Static19,
        isVisible_chkRoadInput,
        setIsVisible_chkRoadInput,
        isVisible_edZipNo,
        setIsVisible_edZipNo,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_Static11,
        setIsVisible_Static11,
        btnSave_OnClick,
        btnSelect_OnClick,
        chkRoadInput_OnClick,
        lfn_End,
        lfn_Search,
    };
};