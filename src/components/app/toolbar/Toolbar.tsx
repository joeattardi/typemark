import NewFile from './NewFile';
import OpenFile from './OpenFile';
import Print from './Print';
import Save from './Save';

export default function Toolbar() {
    return (
        <div className="bg-zinc-100 border-t border-t-slate-300 p-2 flex items-center gap-1 print:hidden">
            <NewFile />
            <OpenFile />
            <Save />
            <Print />
        </div>
    );
}
