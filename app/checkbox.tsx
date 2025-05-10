import { useState } from "react";

export default function Checkbox() {
  const [checked, setChecked] = useState(false)
  
  const handleChecked = (checked: boolean) => {
    return setChecked(!checked)
  }
  
  return (
      <>
      <div className="flex items-center space-x-2">
        <Checkbox 
          onCheckedChange={() => handleChecked(checked)}
        />
        <label
          htmlFor="update_flag"
          className="text-sm font-medium leading-none"
        >
          編集する
        </label>
      </div>    
      </>
  );
}