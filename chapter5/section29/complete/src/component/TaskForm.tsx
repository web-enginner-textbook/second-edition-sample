import React, { useState } from "react";
import { ActionButton } from "./ActionButton";

export const TaskForm: React.FC<{
  onSave: (content: string) => void;
}> = ({ onSave }) => {
  const [content, setContent] = useState("");

  const handleChangeContent = (e: any) => {
    console.log("handleChangeContent called");
    setContent(e.target.value);
  };

  const handleSave = async () => {
    console.log("handleSave called");
    setContent("");
    await onSave(content);
  };

  return (
    <div className={"task_form_wrapper"}>
      <input
        type="text"
        className={"task_input"}
        // ①入力欄に変更があった場合にステートの更新
        onChange={handleChangeContent}
        value={content}
      />
      <ActionButton
        actionType={"positive"}
        text={"登録"}
        // ②クリック時に保存
        onClick={handleSave}
      />
    </div>
  );
};
