import Link from 'next/link';

interface PricingRow {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  col6: string;
  col7: string;
  col8: string;
  col9: string;
  col10: JSX.Element | string; // Allowing JSX elements for buttons
}

const PricingTable = () => {
  const pricingBody: PricingRow[] = [
    {
      col1: 'See candidate names',
      col2: 'Search against candidates video’s',
      col3: 'View video’s shared by candidate',
      col4: 'Request to view candidate video’s',
      col5: 'Create and send video’s to candidates',
      col6: 'Create and send screening questions to candidates',
      col7: 'Automatically create job posts using existing job advertisement from Linkedin, Indeed, etc. *each job post requires one job posting credit',
      col8: 'Candidate contact credits per month',
      col9: 'Job postings credits',
      col10: '',
    },
    {
      col1: '✔',
      col2: '✔',
      col3: '✔',
      col4: '✔',
      col5: '✔',
      col6: '✔',
      col7: 'Coming Soon',
      col8: '05',
      col9: '05',
      col10: (
        <Link href='#'>
          <button
            type="button"
            className="my-4 sm:my-6 text-xs sm:text-sm lg:text-lg text-[#8cc63f] hover:text-white hover:bg-[#8cc63f] border-[#8cc63f] focus:ring-4 focus:outline-none focus:ring-[#bbcca3] font-extralight rounded-lg px-4 sm:px-6 lg:px-7 py-2 text-center border-[#8c63f] hover:border-white border-double border-4"
          >
            Buy Now
          </button>
        </Link>
      ),
    },
    {
      col1: '✔',
      col2: '✔',
      col3: '✔',
      col4: '✔',
      col5: '✔',
      col6: '✔',
      col7: 'Coming Soon',
      col8: '25',
      col9: '10',
      col10: (
        <Link href='#'>
          <button
            type="button"
            className="my-4 sm:my-6 text-xs sm:text-sm lg:text-lg hover:text-[#8cc63f] text-white bg-[#8cc63f] hover:bg-white hover:border-[#8cc63f] focus:ring-4 focus:outline-none focus:ring-[#bbcca3] font-extralight rounded-lg px-4 sm:px-6 lg:px-7 py-2 text-center border-[#8c63f] hover:border-white border-double border-4"
          >
            Buy Now
          </button>
        </Link>
      ),
    },
    {
      col1: '✔',
      col2: '✔',
      col3: '✔',
      col4: '✔',
      col5: '✔',
      col6: '✔',
      col7: 'Coming Soon',
      col8: '100',
      col9: '25',
      col10: (
        <Link href='#'>
          <button
            type="button"
            className="my-4 sm:my-6 text-xs sm:text-sm lg:text-lg text-[#8cc63f] hover:text-white hover:bg-[#8cc63f] border-[#8cc63f] focus:ring-4 focus:outline-none focus:ring-[#bbcca3] font-extralight rounded-lg px-4 sm:px-6 lg:px-7 py-2 text-center hover:border-white border-double border-4"
          >
            Buy Now
          </button>
        </Link>
      ),
    },
  ];

  const pricingHead = [
    {
      head: '',
      bg: '',
    },
    {
      head: 'Basic (free)',
      bg: '#24a8e0',
    },
    {
      head: (
        <>
          Pro <br /> ($99.99/user/mo)
        </>
      ),
      bg: '#8cc63e',
    },
    {
      head: (
        <>
          Advanced <br /> ($299.99/user/mo)
        </>
      ),
      bg: '#24a8e0',
    },
  ];

  return (
    <div className="px-2 ml-2 my-8 container lg:my-20 w-full lg:w-2/3 text-gray-500 shadow-lg overflow-x-auto">
      <table className="w-full text-left table-fixed md:table-fixed">
        <thead>
          <tr>
            {pricingHead.map((col, index) => (
              <th
                key={index}
                className="text-xs sm:text-sm lg:text-xl"
                style={{
                  backgroundColor: col.bg || '',
                  color: col.bg ? '#f2f2f2' : '#000',
                  padding: index === 2 ? '12px' : '8px',
                  textAlign: 'center',
                  borderRadius: '20px 20px 0px 0px',
                }}
              >
                {col.head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(pricingBody[0]).map((key, rowIndex) => (
            <tr key={rowIndex}>
              <td className="p-2 lg:p-4 text-xs sm:text-sm lg:text-base border" 
                style={{
                  backgroundColor: `${rowIndex % 2 === 0 ? '#f5f5f5' : ''}`,
                }}
              >
                {pricingBody[0][key as keyof PricingRow]}
              </td>
              {pricingBody.slice(1).map((row, colIndex) => (
                <td
                  key={colIndex}
                  className="p-2 sm:p-4 text-xs sm:text-base lg:text-3xl text-center border"
                  style={{
                    backgroundColor: rowIndex % 2 === 0 ? '#f5f5f5' : '',
                  }}
                >
                  {row[key as keyof PricingRow]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
