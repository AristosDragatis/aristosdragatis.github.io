import {clsx} from 'clsx' 
import { twMerge } from 'tailwind-merge'

/* this allows to pass multiple className names instead of huge names 
e.g. <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5")}>
*/
export const cn = (...inputs) => {
    return twMerge(clsx(inputs))
};