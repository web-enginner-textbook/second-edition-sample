import React from "react";

type ActionType = "positive" | "negative";

export const ActionButton: React.FC<{
  // ①コンポーネントの型定義
  actionType: ActionType;
  text: string;
  onClick: () => void;
}> = ({ actionType, text, onClick }) => {
  return (
    // ②ActionTypeでclassNameを分岐している
    <button
      className={`action_button ${actionType}_background`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
