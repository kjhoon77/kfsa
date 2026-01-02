// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oBoard {
    AFDIRPATH: string;
    AFFILESIZE: string;
    AFREALNM: string;
    AFSAVENM: string;
    AFSEQ: string;
    BBOARDGUBUN: string;
    BCONTENTS: string;
    BHIT: string;
    BMODDATE: string;
    BMODSABUN: string;
    BREGDATE: string;
    BREGSABUN: string;
    BSEQ: string;
    BTITLE: string;
    NEW_YN: string;
}

export const useFrmenv0020MBoardList = () => {
    const [ds_oBoard, setds_oBoard] = useState<Ids_oBoard[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oBoard([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oBoard,
        btnMutilSort_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Search,
    };
};