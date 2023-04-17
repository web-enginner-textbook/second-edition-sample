import React, { useState } from "react";
import { ActionButton } from "./ActionButton";

export const Task: React.FC<{
  content: string;
  id: number;
  onDelete: (id: number) => void;
  onUpdate: (id: number, content: string) => void;
}> = ({ content, id, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingContent, setEditingContent] = useState(content);

  const handleChangeContent = (e: any) => {
    setEditingContent(e.target.value);
  };

  const handleClickCancel = () => {
    setEditingContent(content);
    setIsEditing(false);
  };

  const handleClickUpdate = () => {
    onUpdate(id, editingContent);
    setIsEditing(false);
  };

  const handleClickEdit = () => {
    setIsEditing(true);
  };

  const handleClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className={"task_wrapper"}>
      {/* ④isEditingを基準に表示するボタンを切り替え */}
      {isEditing ? (
        // ⑥編集中に表示
        <>
          <ActionButton
            actionType={"positive"}
            text={"保存"}
            onClick={handleClickUpdate}
          />
          <ActionButton
            actionType={"negative"}
            text={"キャンセル"}
            onClick={handleClickCancel}
          />
        </>
      ) : (
        // ⑤デフォルトで表示
        <>
          <ActionButton
            actionType={"positive"}
            text={"編集"}
            onClick={handleClickEdit}
          />
          <ActionButton
            actionType={"negative"}
            text={"削除"}
            onClick={handleClickDelete}
          />
        </>
      )}
      {/* ①isEditingがtrue場合にのみinputを表示 */}
      {isEditing ? (
        <input
          className={"task_input"}
          // ②editingContentをvalueに設定
          value={editingContent}
          // ③入力欄に変更があった場合にステートの更新
          onChange={handleChangeContent}
        />
      ) : (
        <p className={"task_p"}>{content}</p>
      )}
    </div>
  );
};
