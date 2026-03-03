import { AlignStartVertical, ChevronDown, CopyCheck, Globe, Type } from 'lucide-react'
import { Switch } from '../ui/switch'
import { Label } from '../ui/label'

export function RightPanel() {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center">
      
      
    
        <div className="flex gap-4 px-6 py-2 cursor-pointer w-full hover:bg-black">
                <Globe className=" text-emerald-800 "/> Language Settings
            
        </div>
        <div className="flex gap-4 px-6 py-2 cursor-pointer w-full hover:bg-black">
            <Type className=" text-emerald-800"/>Font Setting
       
        </div>
        <div className="flex gap-4 px-6 py-2 cursor-pointer w-full hover:bg-black" >
            <button className="flex gap-4 px-6 py-2 cursor-pointer w-full hover:bg-black" onClick={() => {
              <div className="items-center space-x-2">
              <Label htmlFor="arabic">Show Arabic</Label>
              <Switch id="arabic"/>

              <Label htmlFor="translation">Show Translation</Label>
              <Switch id="translation"/>

              <Label htmlFor="transliteration">Show Transliteration</Label>
              <Switch id="transliteration"/>

              <Label htmlFor="reference">Show Reference</Label>
              <Switch id="reference"/>
              </div>
            }}><CopyCheck className=" text-emerald-800"/>View Setting <ChevronDown className="ml-2"/></button>
        
        </div>
        <div className="flex gap-4 px-6 py-2 cursor-pointer w-full hover:bg-black"><AlignStartVertical className=" text-emerald-800"/>Appearance Settings
        </div>
    </div>
  )
}