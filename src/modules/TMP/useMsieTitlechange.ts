// @ts-nocheck
import { useState, useEffect } from 'react';

export interface ILgdacomIn {
    VAN_TRANTYPE: string;
    LGD_TXNAME: string;
    LGD_REQTYPE: string;
    LGD_PAYTYPE: string;
    LGD_OID: string;
    LGD_AMOUNT: string;
    LGD_INSTALL: string;
    LGD_NOINT: string;
    LGD_PRIVATENO: string;
    LGD_BUYER: string;
    LGD_BUYERID: string;
    LGD_BUYERPHONE: string;
    LGD_BUYEREMAIL: string;
    LGD_PRODUCTINFO: string;
    LGD_TAXFREEAMOUNT: string;
    LGD_VAT: string;
    VAN_SFEEAMOUNT: string;
}

export interface ILgdacomOut {
}

export const useMsieTitlechange = () => {
    const [LgdacomIn, setLgdacomIn] = useState<ILgdacomIn[]>([]);
    const [LgdacomOut, setLgdacomOut] = useState<ILgdacomOut[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setLgdacomIn([]);
            setLgdacomOut([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const Button0_OnClick = () => {
        console.log('Button0_OnClick clicked');
    };

    return {
        isLoading,
        LgdacomIn,
        LgdacomOut,
        Button0_OnClick,
    };
};