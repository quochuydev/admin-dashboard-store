import React from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import UploadAdapter from "../../utils/upload-adapter";

const Editor = ({ initValue, readOnly, onData }) => {
  const handleChange = (evt, editor) => {
    onData(editor.getData());
  };

  const config = {
    ckfinder: {
      uploadUrl: `${process.env.REACT_APP_BACKEND_URL}/files`,
    },
  };

  const onReady = (editor) => {
    editor.plugins.get("FileRepository").createUploadAdapter = function (loader) {
      return new UploadAdapter(loader);
    };
  };

  return (
    <CKEditor
      editor={ClassicEditor}
      data={initValue}
      onReady={onReady}
      config={config}
      onChange={handleChange}
    />
  );
};

export default Editor;
