import { AlignStartVertical, CopyCheck, Globe, Type } from 'lucide-react'

export function RightPanel() {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center">
        <div className="flex gap-4 px-6 py-2 cursor-pointer w-full hover:bg-black">
           <Globe className=" text-emerald-800 "/> Language Settings
        </div>
        <div className="flex gap-4 px-6 py-2 cursor-pointer w-full hover:bg-black">
            <Type className=" text-emerald-800"/>Font Setting
        </div>
        <div className="flex gap-4 px-6 py-2 cursor-pointer w-full hover:bg-black">
            <CopyCheck className=" text-emerald-800"/>View Setting
        </div>
        <div className="flex gap-4 px-6 py-2 cursor-pointer w-full hover:bg-black"><AlignStartVertical className=" text-emerald-800"/>Appearance Settings</div>
    </div>
  )
}