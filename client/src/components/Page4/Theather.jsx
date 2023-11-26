import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

const TheatherInfo = styled.div`
  position: absolute;
  width: 735px;
  height: 145px;
  background: #4f526b;
  overflow: hidden;
`;

const DataLoad = styled.div`
  position: absolute;
  width: 735px;
  height: 145px;
  line-height: 75px;
`;

const TheatherName = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  text-align: left;
  margin-left: 23px;
  margin-top: 10px;
`;

const TimeInfo = styled.div`
  position: absolute;
  width: 149px;
  height: 83px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: #898fc0;
  color: #000000;
`;

// eslint-disable-next-line react/prop-types
function Theather({ nData, movieName, tData }) {
  function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  const date = new Date();

  const newDate = getFormattedDate(date);

  const [data2, setData2] = useState([]);
  useEffect(() => {
    if (tData) {
      let allData = [];
      let promises = [];

      // Function to delay execution
      const delay = (ms) => new Promise((res) => setTimeout(res, ms));

      const fetchData = async (theaterType, code, retries = 3) => {
        try {
          const response = await axios(
            {
              method: 'get',
              url: `http://localhost:3000/crawler/${theaterType}/${code}/${newDate}`,
            },
            { withCredentials: true }
          );

          const filteredData = response.data.data.filter(
            (item) => item.movieName === movieName
          );
          return filteredData;
        } catch (error) {
          console.log(error);
          if (retries > 0) {
            console.log(`Retrying... Attempts left: ${retries - 1}`);
            await delay(1000); // Wait for 1 second before retrying
            return fetchData(theaterType, code, retries - 1);
          }
          return []; // Return an empty array if retries are exhausted
        }
      };

      for (var i = 0; i < nData.length; i++) {
        let promise = fetchData(tData[i].theaterType, tData[i].code);
        promises.push(promise);
      }

      Promise.all(promises).then((results) => {
        allData.push(...results); // Collect all responses
        setData2(allData); // Update the state with the collected data
      });
    }
  }, [nData, tData, movieName]);
  // Added movieName to the dependency array

  return (
    <>
      {[0, 152, 304, 456, 608].map(
        (top, index) =>
          nData[index] && (
            <TheatherInfo key={index} style={{ left: '0px', top: `${top}px` }}>
              <TheatherName>{nData[index].place_name}</TheatherName>
              {[23, 189, 355, 521, 687].map((left, timeIndex) => {
                // Check if data2 and the required indexes in data2 exist
                const timeInfoData =
                  data2 && data2[index] && data2[index][timeIndex];
                return (
                  timeInfoData && (
                    <button>
                      <TimeInfo
                        key={timeIndex}
                        style={{ left: `${left}px`, top: `45px` }}
                      >
                        {timeInfoData.playTime}
                        <br />
                        {timeInfoData.screenName}
                        <br />
                        잔여좌석 {timeInfoData.remainingSeats}
                      </TimeInfo>
                    </button>
                  )
                );
              })}
              <DataLoad>
                {!data2[index] && '데이터를 불러오고 있습니다.'}
              </DataLoad>
              <DataLoad>
                {data2[index] &&
                  data2[index].length === 0 &&
                  '등록된 정보가 없습니다.'}
              </DataLoad>
            </TheatherInfo>
          )
      )}
    </>
  );
}

export default Theather;
