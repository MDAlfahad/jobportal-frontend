import Editor from "@monaco-editor/react"
const CodeCard =()=>{
    return(

        <div className="h-screen font-mon0  text-[#c9d1d9]">
            <Editor
            height="100%"
            defaultLanguage="javascript"
            defaultValue="// Start you code here"
            theme="vs-dark"
            />
        </div>
    )
}
export default CodeCard;