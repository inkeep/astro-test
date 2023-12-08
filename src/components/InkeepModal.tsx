import React from 'react';
import {
  InkeepCustomTrigger,
  type InkeepCustomTriggerProps,
} from '@inkeep/widgets';

const baseSettings = {
  integrationId: "",
  apiKey: "",
  organizationDisplayName: 'Inkeep',
  primaryBrandColor: '#26D6FF',
  organizationId: "inkeep",
}


const InkeepModal = () => {
  const [isOpen, setIsOpened] = React.useState(false);
  const inkeepSearchBarProps: InkeepCustomTriggerProps = {
    baseSettings,
    isOpen,
    onClose: () => setIsOpened(false),
  };

  return (
    <div>
    <button onClick={() => setIsOpened(!isOpen)}>Toggle Inkeep Widget</button>
      <InkeepCustomTrigger {...inkeepSearchBarProps} />
    </div>

  );
}

export default InkeepModal;
