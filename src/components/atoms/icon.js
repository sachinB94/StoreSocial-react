// @flow
import React from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentSave from 'material-ui/svg-icons/content/save';
import CommunicationPhone from 'material-ui/svg-icons/communication/phone';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ActionDelete from 'material-ui/svg-icons/action/delete';

export default (icon: ?string, props: {} = {}) => {
  switch (icon) {
    case 'add':
      return <ContentAdd {...props} />;
    case 'save':
      return <ContentSave {...props} />;
    case 'phone':
      return <CommunicationPhone {...props} />;
    case 'email':
      return <CommunicationEmail {...props} />;
    case 'edit':
      return <EditorModeEdit {...props} />;
    case 'delete':
      return <ActionDelete {...props} />;
    default:
      return '';
  }
};
