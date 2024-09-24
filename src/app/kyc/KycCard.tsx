import React from "react";
import { IconCircleDashedCheck } from "@tabler/icons-react";

interface Props {
  cardName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
  timeOver: boolean;
}

const KycCard: React.FC<Props> = ({ cardName, Icon, timeOver }) => {
  return (
    <div className="border-gray-100 shadow-md rounded-lg flex items-center justify-between p-4">
      <p className="text-lg font-semibold">{cardName} </p>

      {!timeOver ? (
        <div className="bg-blue-100 rounded-full p-2 flex items-center">
          <Icon />
        </div>
      ) : (
        <div className="bg-green-100 rounded-full p-2 flex items-center">
          <IconCircleDashedCheck className="text-green-600" />
        </div>
      )}
    </div>
  );
};

export default KycCard;
