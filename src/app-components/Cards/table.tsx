import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Duration", "Type", "Days", "Status", ""];
 
export const TABLE_ROWS = [
  {
    Duration: "APr 20 - Apr 21",
    Type: "Casusal Leave",
    Days: "04",
    Status: "Pending", 
  },
  {
    Duration: "APr 20 - Apr 21",
    Type: "Sick Leave",
    Days: "04",
    Status: "Approved", 
  },
  {
    Duration: "APr 20 - Apr 21",
    Type: "Study Leave",
    Days: "04",
    Status: "Pending", 
  },
  {
    Duration: "APr 20 - Apr 21",
    Type: "Sick Leave",
    Days: "04",
    Status: "Pending", 
  },
  {
    Duration: "APr 20 - Apr 21",
    Type: "Sick Leave",
    Days: "04",
    Status: "Approved", 
  },
];
 
function LeaveRequest() {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ Duration, Type, Days, Status }, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {Duration}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {Type}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {Days}
                </Typography>
              </td>

              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {Status}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  View
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default LeaveRequest;