import { useRef, useState } from "react";
import "./Editor.css"
  const Editor =({onCreate}) =>{
  const [content,setContent] = useState('');
  const inputRef = useRef();
  const onChangeContent=(e)=>{
    setContent(e.target.value)

  }

  const onSubmit =()=>{
    if(content===""){
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  }
  const onkeydown = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return(
    <div className="Editor">
      <input 
      ref={inputRef}
      value={content}
      onChange={onChangeContent}
      onKeyDown = {onkeydown}/>
      <button onClick={onSubmit}>추가</button>
    </div>

  );
}
export default Editor;