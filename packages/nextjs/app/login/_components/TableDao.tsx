import { NextPage } from 'next';

type TableDaoPublicProps = {
  daoData: any[];
  handleEnterDao: (daoAddress: bigint) => void;
};

const TableDaoPublic: NextPage<TableDaoPublicProps> = ({
  daoData,
  handleEnterDao,
}) => {
  return (
    <table className='table w-full'>
      <thead>
        <tr>
          <th></th>
          <th className='text-center'>Name</th>
          <th className='text-center'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {daoData.slice(0, 20).map((x, y) => (
          <tr key={y}>
            <th>{y + 1}</th>
            <td className='text-center'>{x.args.name_dao}</td>
            <td className='text-center'>
              <button
                className='btn btn-base px-10'
                onClick={() => handleEnterDao(x.args.dao_address)}
              >
                Enter
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableDaoPublic;
