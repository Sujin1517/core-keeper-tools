import React, { createContext, useState } from "react";

const data = {
    biome: false,
    biomeTransparency: 0,
    biomeInnerRotation: 0,
    biomeOuterRotation: 0,
    chunkGrid: false,
    mobGrid: false,
    distance100: false,
    distance250: false,
    distance500: false
}
export const OptionContext = createContext<any>(null);


export const OptionProvider = ({children}:React.PropsWithChildren) => {
    const [options, setOptions] = useState<{[key: string]: boolean|number}>(data);

    const ChangeOption = (e:string, v:boolean|number) => {
        const changedOption = options;
        changedOption[e] = v;
        setOptions(changedOption);

        console.log(options);
    }

    return (
        <OptionContext.Provider value={{options, ChangeOption}}>
            {children}
        </OptionContext.Provider>
    );
};